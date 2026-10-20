// Reads the design system source files (brands/ and system/) and resolves
// each brand's effective component set. Shared by the generator, the checker
// and the docs site, so all three agree on what a brand contains.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';

// Scripts and the site always run from the repo root (npm scripts), and bundling breaks import.meta.url.
export const ROOT = process.cwd();
export const KINDS = ['components', 'patterns'];

export const read = (p) => readFileSync(join(ROOT, p), 'utf8');
export const exists = (p) => existsSync(join(ROOT, p));
const isDir = (p) => exists(p) && statSync(join(ROOT, p)).isDirectory();
export const list = (dir, ext = '') =>
  isDir(dir) ? readdirSync(join(ROOT, dir)).filter((f) => f.endsWith(ext) && !f.startsWith('.')).sort() : [];

export function parseMarkdown(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return m ? { data: YAML.parse(m[1]) ?? {}, body: src.slice(m[0].length) } : { data: {}, body: src };
}

// Fenced code blocks in a markdown body: [{ lang, code }]
export function fences(body) {
  const out = [];
  const re = /^(`{3,})(\w*)[^\n]*\n([\s\S]*?)\n\1[ \t]*$/gm;
  for (const m of body.matchAll(re)) out.push({ lang: m[2].toLowerCase(), code: m[3] });
  return out;
}

const loadDocs = (dir) =>
  list(dir, '.md').map((f) => ({ name: f.slice(0, -3), path: `${dir}/${f}`, ...parseMarkdown(read(`${dir}/${f}`)) }));

// DTCG tokens -> [{ name, value, type, description }], name matching the CSS variable (without --)
export const flattenTokens = (obj, path = []) =>
  Object.entries(obj).flatMap(([k, v]) =>
    k.startsWith('$') ? []
      : v && typeof v === 'object' && '$value' in v
        ? [{ name: [...path, k].join('-'), value: v.$value, type: v.$type, description: v.$description ?? '' }]
        : v && typeof v === 'object' ? flattenTokens(v, [...path, k]) : []);

export function loadSystem() {
  return {
    components: loadDocs('system/components'),
    patterns: loadDocs('system/patterns'),
    base: 'system/base.css',
  };
}

export const brandIds = () => list('brands').filter((d) => isDir(`brands/${d}`));

export function loadBrand(id) {
  const dir = `brands/${id}`;
  const guidelines = exists(`${dir}/guidelines.md`) ? parseMarkdown(read(`${dir}/guidelines.md`)) : null;
  const tokens = exists(`${dir}/tokens.json`) ? JSON.parse(read(`${dir}/tokens.json`)) : null;
  // tokens.<mode>.json holds overrides for that mode, e.g. tokens.dark.json
  const modes = list(dir, '.json')
    .map((f) => f.match(/^tokens\.([\w-]+)\.json$/))
    .filter(Boolean)
    .map(([f, mode]) => ({ mode, path: `${dir}/${f}`, tokens: JSON.parse(read(`${dir}/${f}`)) }));
  return {
    id,
    dir,
    meta: guidelines?.data ?? {},
    guidelines,
    tokens,
    modes,
    components: loadDocs(`${dir}/components`),
    patterns: loadDocs(`${dir}/patterns`),
    assets: list(`${dir}/assets`).filter((f) => f !== 'assets.md'),
    assetsDoc: exists(`${dir}/assets/assets.md`) ? parseMarkdown(read(`${dir}/assets/assets.md`)) : null,
    base: exists(`${dir}/base.css`) ? `${dir}/base.css` : null,
  };
}

// The components/patterns a brand actually has: shared ones (minus `exclude`),
// replaced by a same-named brand file if present, plus brand-only ones.
export function resolveBrand(brand, system = loadSystem()) {
  const exclude = new Set(brand.meta.exclude ?? []);
  const resolved = {};
  for (const kind of KINDS) {
    const own = new Map(brand[kind].map((d) => [d.name, d]));
    const sharedNames = new Set(system[kind].map((d) => d.name));
    resolved[kind] = [
      ...system[kind]
        .filter((d) => !exclude.has(d.name))
        .map((d) => (own.has(d.name) ? { ...own.get(d.name), origin: 'override', replaces: d.path } : { ...d, origin: 'shared' })),
      ...brand[kind].filter((d) => !sharedNames.has(d.name)).map((d) => ({ ...d, origin: 'brand' })),
    ].sort((a, b) => a.name.localeCompare(b.name));
  }
  return { ...brand, ...resolved, base: brand.base ?? system.base, excluded: [...exclude] };
}

export const loadAll = () => {
  const system = loadSystem();
  return { system, brands: brandIds().map((id) => resolveBrand(loadBrand(id), system)) };
};
