// Validates every brand and fails if generated files are stale.
// Runs as the pre-commit hook and in CI. Exit code 1 on any error.
import { join } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { ROOT, KINDS, REQUIRED_SPACE, read, exists, fences, flattenTokens, loadSystem, loadBrand, resolveBrand, brandIds, isUrl, fontHref } from './lib/brands.mjs';
import { buildOutputs } from './generate.mjs';

const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

const RAW_COLOUR = /#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\(|\b(?:white|black|red|green|blue|gray|grey|orange|yellow|purple|pink)\b/i;

// CSS rules for anything an agent copies into a site: colours and font families must come from tokens,
// and every var() must be a brand token or a custom property defined in the same CSS.
function checkCss(where, css, defined) {
  const local = new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]));
  css.replace(/\/\*[\s\S]*?\*\//g, '').split(';').forEach((decl) => {
    const [prop, ...rest] = decl.split(':');
    const value = rest.join(':');
    if (!value) return;
    const p = prop.replace(/^[\s\S]*\{/, '').trim();
    if (p.startsWith('--')) return;
    // Token names can contain colour words (--color-white, --gradient-orange); only literal values count.
    if (RAW_COLOUR.test(value.replace(/var\(\s*--[\w-]+/g, ''))) err(where, `raw colour in "${p}:${value.trim()}". Use a --color-* variable.`);
    if (/^font(-family)?$/.test(p) && /['"]/.test(value)) err(where, `literal font in "${p}:${value.trim()}". Use --font-*.`);
  });
  // var(--x, fallback) is a setting (e.g. a composition primitive's --gutter): any name is fine,
  // and the fallback's own var()s are checked like any other. A var() without a fallback must be a token.
  for (const [, name, comma] of css.matchAll(/var\(\s*(--[\w-]+)\s*(,?)/g)) {
    if (!comma && !defined.has(name) && !local.has(name)) err(where, `uses ${name}, which is not a token of this brand.`);
  }
}

function checkHtml(where, html) {
  for (const [, style] of html.matchAll(/style\s*=\s*"([^"]*)"/g)) {
    if (RAW_COLOUR.test(style.replace(/var\(\s*--[\w-]+/g, ''))) err(where, `raw colour in inline style "${style}".`);
  }
}

const system = loadSystem();
for (const kind of KINDS) {
  for (const d of system[kind]) {
    if (!d.data.title) err(d.path, 'frontmatter needs a title.');
    const f = fences(d.body);
    if (!f.some((x) => x.lang === 'html')) err(d.path, 'needs at least one ```html block.');
    if (f.filter((x) => x.lang === 'css').length > 1) err(d.path, 'put all CSS in one ```css block.');
  }
}
if (!exists(system.base)) err(system.base, 'missing.');

const brands = [];
for (const id of brandIds()) {
  const dir = `brands/${id}`;
  let brand;
  try {
    brand = loadBrand(id);
  } catch (e) {
    err(dir, `could not be read: ${e.message}`);
    continue;
  }
  if (!/^[a-z0-9-]+$/.test(id)) err(dir, 'folder name must be lowercase letters, digits and dashes.');
  if (!brand.guidelines) { err(dir, 'missing guidelines.md.'); continue; }
  if (!brand.tokens) { err(dir, 'missing tokens.json.'); continue; }
  for (const key of ['name', 'summary']) if (!brand.meta[key]) err(`${dir}/guidelines.md`, `frontmatter needs "${key}".`);
  if (brand.meta.fonts && !Array.isArray(brand.meta.fonts)) err(`${dir}/guidelines.md`, '"fonts" must be a list of stylesheet URLs or paths inside the brand folder.');
  for (const u of Array.isArray(brand.meta.fonts) ? brand.meta.fonts : []) {
    if (!isUrl(u) && !exists(fontHref(brand, u))) err(`${dir}/guidelines.md`, `font stylesheet ${u} does not exist in ${dir}/.`);
  }
  const icons = brand.meta.icons;
  if (!icons) err(`${dir}/guidelines.md`, 'frontmatter needs "icons": which icon set(s) the brand uses and how.');
  else if (Array.isArray(icons)) {
    for (const s of icons) {
      if (!s?.name || !s?.use) err(`${dir}/guidelines.md`, 'each entry in "icons" needs a "name" and a "use" (when to pick this set).');
      if (s?.files && !exists(`${dir}/${s.files.replace(/\/$/, '')}`)) err(`${dir}/guidelines.md`, `icon files ${s.files} do not exist in ${dir}/.`);
    }
  }

  // Tokens
  const base = flattenTokens(brand.tokens);
  for (const t of base) if (!t.type) err(`${dir}/tokens.json`, `token ${t.name} has no $type.`);
  const baseNames = new Set(base.map((t) => t.name));
  for (const step of REQUIRED_SPACE) if (!baseNames.has(`space-${step}`)) err(`${dir}/tokens.json`, `missing space.${step}. Every brand defines space ${REQUIRED_SPACE.join(', ')} (and may add more).`);
  for (const m of brand.modes) {
    const names = new Set(flattenTokens(m.tokens).map((t) => t.name));
    for (const n of names) if (!baseNames.has(n)) err(m.path, `token ${n} is not in tokens.json.`);
    for (const t of base) if (t.type === 'color' && !names.has(t.name)) err(m.path, `missing colour token ${t.name}. Every mode must define every colour.`);
  }

  // Resolution
  const exclude = brand.meta.exclude ?? [];
  if (!Array.isArray(exclude)) err(`${dir}/guidelines.md`, '"exclude" must be a list.');
  for (const name of exclude) {
    if (!KINDS.some((k) => system[k].some((d) => d.name === name))) err(`${dir}/guidelines.md`, `excludes "${name}", which is not a shared component or pattern.`);
    if (KINDS.some((k) => brand[k].some((d) => d.name === name))) err(`${dir}/guidelines.md`, `excludes "${name}" but also has its own ${name}.md. Pick one.`);
  }
  for (const kind of KINDS) {
    for (const d of brand[kind]) {
      if (!d.data.title) err(d.path, 'frontmatter needs a title.');
      const f = fences(d.body);
      if (!f.some((x) => x.lang === 'html')) err(d.path, 'needs at least one ```html block.');
      if (f.filter((x) => x.lang === 'css').length > 1) err(d.path, 'put all CSS in one ```css block.');
    }
  }

  // Assets
  if (!brand.assetsDoc) err(`${dir}/assets/assets.md`, 'missing. Describe every asset (or write "No assets yet.").');
  else {
    const doc = brand.assetsDoc.body;
    for (const f of brand.assets) if (!doc.includes(f)) err(`${dir}/assets/${f}`, 'not described in assets.md.');
    for (const [, link] of doc.matchAll(/\]\((?!https?:)\.?\/?([^)\s]+)\)/g)) {
      if (!exists(`${dir}/assets/${link}`)) err(`${dir}/assets/assets.md`, `links to ${link}, which does not exist.`);
    }
  }
  brands.push(resolveBrand(brand, system));
}

// Generated files: build in memory, then compare.
let outputs = {};
try {
  outputs = await buildOutputs({ system, brands });
} catch (e) {
  err('scripts/generate.mjs', e.message);
}

// Component CSS against the variables each brand really defines (taken from the generated CSS,
// so token names that collide after kebab-casing are caught too).
for (const b of brands) {
  const css = outputs[`${b.dir}/tokens.css`];
  if (!css) continue;
  const rootBlock = css.slice(css.indexOf('{'), css.indexOf('}'));
  const names = [...rootBlock.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]);
  for (const n of names.filter((n, i) => names.indexOf(n) !== i)) err(`${b.dir}/tokens.json`, `two tokens both become ${n}. Rename one.`);
  const defined = new Set(names);
  checkCss(b.base, read(b.base), defined);
  const known = new Set(KINDS.flatMap((k) => b[k].map((d) => d.name)));
  for (const kind of KINDS) {
    for (const d of b[kind]) {
      const where = d.origin === 'shared' ? `${d.path} (for ${b.id})` : d.path;
      for (const f of fences(d.body)) {
        if (f.lang === 'css') checkCss(where, f.code, defined);
        if (f.lang === 'html') checkHtml(where, f.code);
      }
      for (const u of d.data.uses ?? []) if (!known.has(u)) err(where, `uses "${u}", which ${b.id} does not have.`);
    }
  }
}

for (const [p, content] of Object.entries(outputs)) {
  const file = join(ROOT, p);
  if (!existsSync(file) || readFileSync(file, 'utf8') !== content) err(p, 'is stale. Run `npm run generate` (never edit this file by hand).');
}

if (errors.length) {
  console.error(`Design system check failed (${errors.length}):\n` + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`Design system check passed: ${brands.length} brands, ${Object.keys(outputs).length} generated files up to date.`);
