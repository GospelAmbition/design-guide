// The rules a page built from a brand must follow (see build-a-page.md). Used by scripts/check-page.mjs
// for real pages and by `npm run check` for every html example in the design system, so the examples
// agents copy from always pass the same check their pages will face. No dependencies.
import { parseCss, walk, selectorClasses, selectorAttrs, hasIdSelector, isElementOnly, varRefs, RAW_COLOUR } from './css.mjs';
import { parseHtml, elements, ancestors, classesOf } from './html.mjs';

export function newReport() {
  const errors = [];
  const warnings = [];
  return {
    errors,
    warnings,
    error: (where, msg) => errors.push(`${where}: ${msg}`),
    warn: (where, msg) => warnings.push(`${where}: ${msg}`),
  };
}

// --- What a stylesheet defines -----------------------------------------------------------------

const COMBINATOR = /\s*[>+~]\s*|\s+/;
// Splits a selector list into compound selectors, keeping spaces inside quotes and brackets.
const compounds = (selector) =>
  selector
    .replace(/(["'])[\s\S]*?\1|\([^()]*\)|\[[^\]]*\]/g, (m) => m.replace(/\s/g, '\u0000'))
    .split(',')
    .flatMap((part) => part.trim().split(COMBINATOR))
    .filter(Boolean)
    .map((c) => c.replace(/\u0000/g, ' '));

// Reads a stylesheet into what the checks need: its classes, the data-* values its selectors use,
// its settings (custom properties read with a fallback), its tokens and its utility classes.
export function cssModel(text, origin = 'site') {
  const nodes = parseCss(text);
  const model = {
    origin,
    brand: text.match(/\bbrand: ([a-z0-9-]+)/)?.[1] ?? null,
    nodes,
    classes: new Map(), // class -> layer name ('site' for site.css)
    attrsByClass: new Map(), // class -> Map(attr -> Set(value | null))
    attrs: new Map(), // attr used without a class in the same compound -> Set(value | null)
    settings: new Set(),
    declared: new Set(),
    tokens: new Map(),
    utilities: new Map(), // 'prop:value' -> class, for single-purpose classes in the utilities layer
  };
  const addAttr = (map, name, value) => {
    if (!map.has(name)) map.set(name, new Set());
    map.get(name).add(value);
  };
  walk(nodes, (node, anc) => {
    const layer = origin === 'site' ? 'site' : anc.find((a) => a.type === 'at' && a.name === 'layer')?.prelude ?? 'unlayered';
    for (const d of node.decls ?? []) {
      for (const r of varRefs(d.value)) if (r.fallback !== null) model.settings.add(r.name);
      if (d.prop.startsWith('--')) model.declared.add(d.prop);
    }
    if (node.type !== 'rule' || anc.some((a) => a.type === 'at' && a.name === 'keyframes')) return;
    if (layer === 'tokens' && /:root/.test(node.selector)) for (const d of node.decls) model.tokens.set(d.prop, d.value);
    for (const c of selectorClasses(node.selector)) if (!model.classes.has(c)) model.classes.set(c, layer);
    for (const compound of compounds(node.selector)) {
      const cls = selectorClasses(compound);
      for (const { name, value } of selectorAttrs(compound)) {
        if (!name.startsWith('data-')) continue;
        if (!cls.length) addAttr(model.attrs, name, value);
        for (const c of cls) {
          if (!model.attrsByClass.has(c)) model.attrsByClass.set(c, new Map());
          addAttr(model.attrsByClass.get(c), name, value);
        }
      }
    }
    if (layer === 'utilities' && /^\.[\w-]+$/.test(node.selector) && node.decls.length === 1) {
      const d = node.decls[0];
      model.utilities.set(`${d.prop}:${d.value}`, node.selector.slice(1));
    }
  });
  model.thresholds = [...model.tokens].filter(([n]) => n.startsWith('--threshold-')).map(([n, v]) => ({ name: n, value: v.trim() }));
  return model;
}

// The brand's model plus the classes of its self-hosted font stylesheets (an icon font's .fa-* or .pg-* classes).
export function withFontClasses(model, fontCssTexts) {
  for (const text of fontCssTexts) {
    for (const [c] of cssModel(text, 'brand').classes) if (!model.classes.has(c)) model.classes.set(c, 'fonts');
  }
  return model;
}

// --- Values ------------------------------------------------------------------------------------

const OK_UNITS = new Set(['%', 'fr', 'deg', 'turn', 'rad', 'grad', 's', 'ms', 'x', 'dppx']);
const FONT_KEYWORDS = /\b(?:inherit|initial|unset|revert|revert-layer|normal|italic|oblique|small-caps)\b/gi;

// Problems with a value written in a page's CSS or an inline setting: everything that sets colour, type,
// size, spacing or radius must come from a token. `known` is every custom property the page may read.
export function valueProblems(prop, value, known) {
  const problems = [];
  for (const { name, fallback } of varRefs(value)) {
    if (fallback === null && !known.has(name)) problems.push(`${name} is not a token of this brand`);
    if (fallback !== null) problems.push(...valueProblems(prop, fallback, known));
  }
  const bare = value
    .replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/g, 'url()')
    .replace(/var\(\s*--[\w-]+\s*(?:,[^()]*(?:\([^()]*\)[^()]*)*)?\)/g, 'var()');
  if (RAW_COLOUR.test(bare)) problems.push('a raw colour: use a --color-* token, or put the element on a surface (.surface-*)');
  for (const m of bare.matchAll(/(?<![\w.#-])(-?(?:\d+\.?\d*|\.\d+))([a-z%]+)\b/gi)) {
    const [, num, unit] = m;
    const n = Math.abs(parseFloat(num));
    if (n === 0 || OK_UNITS.has(unit.toLowerCase())) continue;
    if (unit.toLowerCase() === 'px' && n <= 3) continue;
    problems.push(`a raw size "${m[0]}": use a --space-*, --size-* or --radius-* token`);
  }
  const p = prop.toLowerCase();
  if ((p === 'font-weight' || p === 'line-height') && /(?<![\w-])\d/.test(bare.replace(/var\(\)/g, ''))) {
    problems.push(`a raw ${p}: use a --${p === 'font-weight' ? 'weight' : 'leading'}-* token`);
  }
  if (p === 'font-family' || p === 'font') {
    const rest = bare.replace(/var\(\)/g, '').replace(FONT_KEYWORDS, '').replace(/[/,\s]/g, '');
    if (/[a-z]/i.test(rest)) problems.push('a literal font: use a --font-* token');
  }
  return problems;
}

// --- site.css ----------------------------------------------------------------------------------

const BREAKPOINT_FEATURE = /\b(?:min-|max-)?(?:width|height|aspect-ratio|orientation|resolution)\b/i;

// Checks a page's site.css against the brand. Returns the site's own model.
export function checkSiteCss(text, brand, report, file = 'site.css') {
  const site = cssModel(text, 'site');
  const known = new Set([...brand.tokens.keys(), ...site.declared]);
  const seenBlocks = new Set();
  walk(site.nodes, (node, anc) => {
    const at = `${file}:${node.line}`;
    const inKeyframes = anc.some((a) => a.type === 'at' && a.name === 'keyframes');
    if (node.type === 'at') {
      if (node.name === 'import') report.error(at, '@import is not allowed. Link stylesheets from the HTML: fonts, then brand.css, then site.css.');
      if (node.name === 'font-face') report.error(at, '@font-face is not allowed. Fonts come from the brand.');
      if (node.name === 'layer') report.warn(at, "don't put site.css in a layer. Unlayered, it wins over brand.css without specificity fights.");
      if (node.name === 'media' && BREAKPOINT_FEATURE.test(node.prelude)) {
        report.error(at, `@media ${node.prelude}: no viewport breakpoints. Use the layout primitives (switcher, sidebar, grid, cluster) or an @container query at a --threshold-* value.`);
      }
      if (node.name === 'container') {
        const allowed = brand.thresholds.map((t) => t.value);
        for (const m of node.prelude.matchAll(/(\d*\.?\d+)([a-z%]+)/gi)) {
          if (!allowed.includes(m[0])) {
            report.error(at, `@container ${node.prelude}: ${m[0]} is not a threshold of this brand. Use one of: ${brand.thresholds.map((t) => `${t.value} (${t.name})`).join(', ') || 'none defined'}.`);
          }
        }
      }
    }
    for (const d of node.decls ?? []) {
      const where = `${file}:${d.line}`;
      if (d.important) report.warn(where, `"${d.prop}: ${d.value} !important": avoid !important. site.css already wins over brand.css.`);
      for (const problem of valueProblems(d.prop, d.value, known)) report.error(where, `"${d.prop}: ${d.value}" has ${problem}.`);
      const utility = brand.utilities.get(`${d.prop}:${d.value}`);
      if (utility && node.type === 'rule') report.warn(where, `"${d.prop}: ${d.value}" is what the .${utility} utility does. Add class="${utility}" in the HTML instead.`);
    }
    if (node.type !== 'rule' || inKeyframes) return;
    const sel = node.selector;
    if (hasIdSelector(sel)) report.warn(at, `"${sel}": don't style IDs. Use a class.`);
    if (isElementOnly(sel)) report.warn(at, `"${sel}" restyles elements across the whole page. Element styles belong to the brand's base; scope this to a block class.`);
    const classes = selectorClasses(sel);
    const restyled = classes.filter((c) => brand.classes.has(c));
    if (restyled.length) {
      report.warn(at, `"${sel}" restyles ${restyled.map((c) => `.${c}`).join(', ')} from brand.css. Prefer a variant the brand already has, a utility, or a new block; if this really is needed, explain why in GAPS.md.`);
    }
    const block = classes.find((c) => !brand.classes.has(c))?.split('__')[0];
    if (block && !seenBlocks.has(block)) {
      seenBlocks.add(block);
      if (!node.comment) {
        report.error(at, `new block .${block} needs a comment directly above its first rule saying what you tried from the brand first and why it didn't work (and the same line in GAPS.md).`);
      }
    }
  });
  site.blocks = seenBlocks;
  return site;
}

// --- HTML --------------------------------------------------------------------------------------

const ROLES = new Set('alert alertdialog application article banner blockquote button caption cell checkbox code columnheader combobox complementary contentinfo definition deletion dialog document emphasis feed figure form generic grid gridcell group heading img insertion link list listbox listitem log main marquee math menu menubar menuitem menuitemcheckbox menuitemradio meter navigation none note option paragraph presentation progressbar radio radiogroup region row rowgroup rowheader scrollbar search searchbox separator slider spinbutton status strong subscript superscript switch tab table tablist tabpanel term textbox time timer toolbar tooltip tree treegrid treeitem'.split(' '));
const ARIA = new Set('activedescendant atomic autocomplete braillelabel brailleroledescription busy checked colcount colindex colindextext colspan controls current describedby description details disabled errormessage expanded flowto haspopup hidden invalid keyshortcuts label labelledby level live modal multiline multiselectable orientation owns placeholder posinset pressed readonly relevant required roledescription rowcount rowindex rowindextext rowspan selected setsize sort valuemax valuemin valuenow valuetext'.split(' ').map((a) => `aria-${a}`));
// Roles an element already has. role="list" on ul/ol is deliberate (Safari drops list semantics without bullets).
const IMPLICIT = { nav: 'navigation', main: 'main', button: 'button', aside: 'complementary', form: 'form', article: 'article', h1: 'heading', h2: 'heading', h3: 'heading', h4: 'heading', h5: 'heading', h6: 'heading', table: 'table', dialog: 'dialog' };
const INTERACTIVE = new Set(['a', 'button', 'input', 'select', 'textarea', 'details', 'summary']);
const UNLABELLED_INPUTS = new Set(['hidden', 'submit', 'button', 'reset', 'image']);

const isFocusable = (el) =>
  (el.tag === 'a' && 'href' in el.attrs) || (['button', 'input', 'select', 'textarea', 'summary'].includes(el.tag) && !('disabled' in el.attrs)) || (el.attrs.tabindex !== undefined && Number(el.attrs.tabindex) >= 0);

function textOf(node, byId) {
  if (node.type === 'text') return node.value;
  if (node.attrs?.['aria-hidden'] === 'true' || node.attrs?.hidden !== undefined) return '';
  if (node.tag === 'img') return node.attrs.alt ?? '';
  if (node.tag === 'svg') {
    if (node.attrs['aria-label']) return node.attrs['aria-label'];
    const title = node.children.find((c) => c.tag === 'title');
    return title ? textOf(title, byId) : '';
  }
  if (node.attrs?.['aria-label']) return node.attrs['aria-label'];
  return (node.children ?? []).map((c) => textOf(c, byId)).join(' ');
}

export function accessibleName(el, byId) {
  const ids = el.attrs['aria-labelledby'];
  if (ids) return ids.split(/\s+/).map((id) => (byId.get(id) ? textOf(byId.get(id), byId) : '')).join(' ').trim();
  if (el.attrs['aria-label']?.trim()) return el.attrs['aria-label'].trim();
  const t = (el.children ?? []).map((c) => textOf(c, byId)).join(' ').replace(/\s+/g, ' ').trim();
  return t || (el.attrs.title ?? '').trim();
}

// Splits an inline style into declarations.
const styleDecls = (style) =>
  style.split(/;(?![^(]*\))/).map((s) => s.trim()).filter(Boolean).map((s) => {
    const at = s.indexOf(':');
    return { prop: s.slice(0, at).trim(), value: s.slice(at + 1).trim() };
  });

const urlsIn = (value) => [...value.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)\s]*))\s*\)/g)].map((m) => m[1] ?? m[2] ?? m[3]);
const isLocal = (u) => u && !/^(?:[a-z][\w+.-]*:|\/\/|#|data:)/i.test(u);

// Checks markup against the brand (and the page's own site.css, if any).
// options: { file, fragment, allowDemo, exists(path) -> bool }
export function checkHtml(html, brand, site, report, { file = 'index.html', fragment = false, allowDemo = false, exists = null } = {}) {
  const root = parseHtml(html);
  const all = [...elements(root)];
  const at = (el) => `${file}:${el.line}`;
  const known = new Set([...brand.tokens.keys(), ...(site?.declared ?? [])]);
  const settings = new Set([...brand.settings, ...(site?.settings ?? [])]);
  const byId = new Map();
  for (const el of all) {
    const id = el.attrs.id;
    if (id === undefined) continue;
    if (byId.has(id)) report.error(at(el), `duplicate id="${id}".`);
    byId.set(id, el);
  }
  const checkLocal = (el, u, what) => {
    if (!exists || !isLocal(u)) return;
    const path = decodeURI(u.split(/[?#]/)[0]);
    if (path && !exists(path)) report.error(at(el), `${what} "${u}" does not exist. Copy the file into the page folder.`);
  };

  for (const el of all) {
    const tag = el.tag;
    const a = el.attrs;
    const inSvg = [...ancestors(el)].some((p) => p.tag === 'svg');
    if (inSvg) continue;

    // Classes and exceptions come from brand.css or site.css.
    for (const c of classesOf(el)) {
      if (allowDemo && c.startsWith('demo-')) continue;
      if (!brand.classes.has(c) && !site?.classes.has(c)) report.error(at(el), `class "${c}" is not defined in brand.css${site ? ' or site.css' : ''}.`);
    }
    for (const [name, value] of Object.entries(a)) {
      if (!name.startsWith('data-')) continue;
      const options = new Set();
      for (const m of [brand, site].filter(Boolean)) {
        for (const c of classesOf(el)) for (const v of m.attrsByClass.get(c)?.get(name) ?? []) options.add(v);
        for (const v of m.attrs.get(name) ?? []) options.add(v);
      }
      if (!options.size) {
        if (['data-variant', 'data-size', 'data-side'].includes(name)) report.error(at(el), `${name}="${value}" does nothing: no style for it on ${classesOf(el).map((c) => `.${c}`).join(' ') || 'this element'}.`);
        continue;
      }
      if (!options.has(null) && !options.has(value)) {
        report.error(at(el), `${name}="${value}" is not a variant here. Options: ${[...options].map((v) => `"${v}"`).join(', ')}.`);
      }
    }

    // Inline styles: only settings, set to tokens.
    if (a.style !== undefined) {
      for (const d of styleDecls(a.style)) {
        if (!d.prop.startsWith('--')) {
          report.error(at(el), `inline "${d.prop}: ${d.value}". Inline styles may only set a layout setting, like style="--gutter: var(--space-s)". Use a utility or a class in site.css.`);
          continue;
        }
        if (!settings.has(d.prop)) report.error(at(el), `inline "${d.prop}" is not a setting of any primitive or component. Settings are the custom properties listed in each one's Settings table.`);
        for (const problem of valueProblems(d.prop, d.value, known)) report.error(at(el), `inline "${d.prop}: ${d.value}" has ${problem}.`);
        for (const u of urlsIn(d.value)) checkLocal(el, u, 'image');
      }
    }
    if (tag === 'style') report.error(at(el), 'no <style> blocks. Page CSS goes in site.css.');

    // Links and buttons.
    if (tag === 'a') {
      const href = a.href;
      if (href === undefined) report.warn(at(el), '<a> without href is not a link. Use a <button> for actions.');
      else if (href === '' || href === '#' || /^javascript:/i.test(href)) report.error(at(el), `href="${href}" goes nowhere. Use the real URL (or the planned one, e.g. "/donate/"), or a <button> for an action.`);
      else if (href.startsWith('#') && !fragment && !byId.has(href.slice(1))) report.error(at(el), `href="${href}": no element on the page has id="${href.slice(1)}".`);
    }
    if ((tag === 'a' && a.href !== undefined) || tag === 'button' || a.role === 'button' || a.role === 'link') {
      if (!accessibleName(el, byId)) report.error(at(el), `<${tag}> has no accessible name. Give it text, a .visually-hidden label or an aria-label.`);
      const nested = [...ancestors(el)].find((p) => INTERACTIVE.has(p.tag) && (p.tag !== 'a' || p.attrs.href !== undefined));
      if (nested) report.error(at(el), `<${tag}> inside <${nested.tag}>: interactive elements can't be nested.`);
    }

    // Images and media.
    if (tag === 'img') {
      if (a.alt === undefined) report.error(at(el), '<img> needs alt: describe the image, or alt="" if it is decoration.');
      else if (/\.(png|jpe?g|svg|webp|gif)$/i.test(a.alt) || /^(image|photo|picture|logo)$/i.test(a.alt.trim())) report.warn(at(el), `alt="${a.alt}" doesn't describe the image.`);
      checkLocal(el, a.src, 'image');
    }
    if (tag === 'svg' && a['aria-hidden'] !== 'true') {
      const named = a.role === 'img' && (a['aria-label'] || a['aria-labelledby'] || el.children.some((c) => c.tag === 'title'));
      if (!named) report.error(at(el), '<svg>: add aria-hidden="true" if it is decoration, or role="img" and an aria-label if it carries meaning.');
    }
    if (tag === 'iframe' && !a.title) report.error(at(el), '<iframe> needs a title saying what it contains.');
    if (tag === 'source' && a.srcset) checkLocal(el, a.srcset.split(/\s/)[0], 'image');
    if (tag === 'video' || tag === 'audio') checkLocal(el, a.src, tag);

    // Form fields.
    if ((tag === 'input' && !UNLABELLED_INPUTS.has((a.type ?? 'text').toLowerCase())) || tag === 'select' || tag === 'textarea') {
      const wrapped = [...ancestors(el)].some((p) => p.tag === 'label');
      const forLabel = a.id && all.some((x) => x.tag === 'label' && x.attrs.for === a.id);
      if (!wrapped && !forLabel && !a['aria-label'] && !a['aria-labelledby']) {
        report.error(at(el), `<${tag}> has no label. Use a visible <label for="…">${a.placeholder ? ' (placeholder text is not a label)' : ''}.`);
      }
    }
    if (tag === 'input' && ['submit', 'button', 'reset'].includes(a.type) && !a.value && !a['aria-label']) report.error(at(el), `<input type="${a.type}"> needs a value (its label).`);

    // Structure.
    if (/^h[1-6]$/.test(tag) && !accessibleName(el, byId)) report.error(at(el), `empty <${tag}>.`);
    if ((tag === 'ul' || tag === 'ol') && el.children.some((c) => c.type === 'el' && !['li', 'script', 'template'].includes(c.tag))) {
      report.error(at(el), `<${tag}> may only contain <li> elements.`);
    }
    if (a.tabindex !== undefined && Number(a.tabindex) > 0) report.error(at(el), `tabindex="${a.tabindex}": never use a positive tabindex. Fix the source order instead.`);

    // Widgets copied without their behaviour.
    if (a.role === 'tab' && !fragment) {
      const panel = byId.get(a['aria-controls'] ?? '');
      if (!panel || panel.attrs.role !== 'tabpanel') report.error(at(el), 'role="tab" without a role="tabpanel" it controls (aria-controls). Tabs need panels and a script, or leave them out.');
    }
    if (tag === 'section' && !fragment && ![...elements(el)].some((d) => /^h[1-6]$/.test(d.tag)) && !a['aria-label'] && !a['aria-labelledby']) {
      report.warn(at(el), '<section> without a heading. Give it one (it can be .visually-hidden), or use a <div>.');
    }

    // ARIA.
    if (a.role !== undefined) {
      for (const r of a.role.split(/\s+/)) if (!ROLES.has(r)) report.error(at(el), `role="${r}" is not an ARIA role.`);
      if (IMPLICIT[tag] === a.role) report.warn(at(el), `role="${a.role}" on <${tag}> is redundant.`);
    }
    for (const name of Object.keys(a)) {
      if (name.startsWith('aria-') && !ARIA.has(name)) report.error(at(el), `${name} is not an ARIA attribute.`);
    }
    if (a['aria-hidden'] === 'true') {
      if (isFocusable(el)) report.error(at(el), 'aria-hidden="true" on a focusable element hides it from screen readers but not the keyboard.');
      const inner = [...elements(el)].find(isFocusable);
      if (inner) report.error(at(el), `aria-hidden="true" hides a focusable <${inner.tag}> inside it.`);
    }
    if (!fragment) {
      for (const attr of ['aria-labelledby', 'aria-describedby', 'aria-controls']) {
        for (const id of (a[attr] ?? '').split(/\s+/).filter(Boolean)) if (!byId.has(id)) report.error(at(el), `${attr}="${id}": no element has that id.`);
      }
    }
  }

  if (fragment) return root;

  // Whole-document rules.
  const html0 = all.find((e) => e.tag === 'html');
  if (!root.doctype) report.warn(file, 'start with <!doctype html>.');
  if (!html0?.attrs.lang) report.error(file, '<html> needs a lang attribute, e.g. lang="en".');
  const title = all.find((e) => e.tag === 'title');
  if (!title || !textOf(title, byId).trim()) report.error(file, 'needs a <title>.');
  if (!all.some((e) => e.tag === 'meta' && e.attrs.name === 'viewport')) report.error(file, 'needs <meta name="viewport" content="width=device-width, initial-scale=1">.');
  if (!all.some((e) => e.tag === 'meta' && 'charset' in e.attrs)) report.warn(file, 'add <meta charset="utf-8">.');

  const sheets = all.filter((e) => e.tag === 'link' && /\bstylesheet\b/i.test(e.attrs.rel ?? '')).map((e) => ({ el: e, href: e.attrs.href ?? '' }));
  const brandAt = sheets.findIndex((s) => /(^|\/)brand\.css$/.test(s.href));
  const siteAt = sheets.findIndex((s) => /(^|\/)site\.css$/.test(s.href));
  if (brandAt < 0) report.error(file, 'link brand.css: <link rel="stylesheet" href="brand.css">.');
  if (siteAt < 0) report.error(file, 'link site.css after brand.css, even if it is empty.');
  if (brandAt >= 0 && siteAt >= 0 && siteAt < brandAt) report.error(file, 'site.css must come after brand.css.');
  for (const s of sheets) {
    checkLocal(s.el, s.href, 'stylesheet');
    if (isLocal(s.href) && !/(^|\/)(brand|site)\.css$/.test(s.href) && !/(^|\/)fonts?\//.test(s.href)) {
      report.error(at(s.el), `stylesheet "${s.href}": only fonts, brand.css and site.css. Put page CSS in site.css.`);
    }
  }
  for (const s of all.filter((e) => e.tag === 'script' && e.attrs.src)) checkLocal(s, s.attrs.src, 'script');

  const mains = all.filter((e) => e.tag === 'main');
  if (mains.length !== 1) report.error(file, `needs exactly one <main> (found ${mains.length}).`);
  if (!all.some((e) => e.tag === 'header' && ![...ancestors(e)].some((p) => ['main', 'article', 'section', 'aside', 'nav'].includes(p.tag)))) report.warn(file, 'no page <header> (logo and navigation).');
  if (!all.some((e) => e.tag === 'footer' && ![...ancestors(e)].some((p) => ['main', 'article', 'section', 'aside', 'nav'].includes(p.tag)))) report.warn(file, 'no page <footer>.');
  const navs = all.filter((e) => e.tag === 'nav');
  if (navs.length > 1 && navs.some((n) => !n.attrs['aria-label'] && !n.attrs['aria-labelledby'])) report.warn(file, 'several <nav>s: give each an aria-label ("Main", "Footer").');

  const headings = all.filter((e) => /^h[1-6]$/.test(e.tag));
  const h1s = headings.filter((h) => h.tag === 'h1');
  if (h1s.length !== 1) report.error(file, `needs exactly one <h1> (found ${h1s.length}).`);
  let prev = 0;
  for (const h of headings) {
    const level = Number(h.tag[1]);
    if (prev && level > prev + 1) report.error(at(h), `<${h.tag}> after <h${prev}> skips a level. Pick the heading level by structure, and the look with a class.`);
    prev = level;
  }
  return root;
}
