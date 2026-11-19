// A small CSS reader for the checkers: enough to read brand.css and a page's site.css.
// No dependencies, so scripts/check-page.mjs runs in a fresh clone without `npm install`.

// Parses CSS into a tree of nodes:
//   { type: 'rule', selector, decls: [{ prop, value, important, line }], children, comment, line }
//   { type: 'at', name, prelude, decls, children, block, comment, line }
// `comment` is the text of a comment directly above the node (only whitespace between), else null.
export function parseCss(src) {
  let i = 0;
  let line = 1;
  const n = src.length;

  const advance = (to) => {
    for (; i < to; i++) if (src[i] === '\n') line++;
  };

  // Reads up to (not including) the next ';', '{' or '}' outside strings, comments and brackets.
  function readChunk() {
    const start = i;
    let depth = 0;
    while (i < n) {
      const c = src[i];
      if (c === '"' || c === "'") {
        const end = src.indexOf(c, i + 1);
        advance(end < 0 ? n : end + 1);
        continue;
      }
      if (c === '/' && src[i + 1] === '*') {
        const end = src.indexOf('*/', i + 2);
        advance(end < 0 ? n : end + 2);
        continue;
      }
      if (c === '(' || c === '[') depth++;
      else if (c === ')' || c === ']') depth--;
      else if (depth <= 0 && (c === ';' || c === '{' || c === '}')) break;
      advance(i + 1);
    }
    return src.slice(start, i);
  }

  const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '');

  function parseBlock() {
    const decls = [];
    const children = [];
    let pendingComment = null;
    while (i < n) {
      const ws = src.slice(i).match(/^\s*/)[0];
      if (/\n\s*\n/.test(ws)) pendingComment = null;
      advance(i + ws.length);
      if (i >= n) break;
      if (src.startsWith('/*', i)) {
        const end = src.indexOf('*/', i + 2);
        pendingComment = src.slice(i + 2, end < 0 ? n : end).trim();
        advance(end < 0 ? n : end + 2);
        continue;
      }
      if (src[i] === '}') { advance(i + 1); break; }
      const startLine = line;
      const chunk = stripComments(readChunk()).trim();
      const term = src[i];
      if (term === '{') {
        advance(i + 1);
        const inner = parseBlock();
        if (chunk.startsWith('@')) {
          const [, name, prelude] = chunk.match(/^@([\w-]+)\s*([\s\S]*)$/) ?? [null, chunk.slice(1), ''];
          children.push({ type: 'at', name: name.toLowerCase(), prelude: prelude.trim(), block: true, ...inner, comment: pendingComment, line: startLine });
        } else {
          children.push({ type: 'rule', selector: chunk.replace(/\s+/g, ' '), ...inner, comment: pendingComment, line: startLine });
        }
      } else {
        if (term === ';') advance(i + 1);
        if (chunk.startsWith('@')) {
          const [, name, prelude] = chunk.match(/^@([\w-]+)\s*([\s\S]*)$/) ?? [null, chunk.slice(1), ''];
          children.push({ type: 'at', name: name.toLowerCase(), prelude: prelude.trim(), block: false, decls: [], children: [], comment: pendingComment, line: startLine });
        } else if (chunk.includes(':')) {
          const at = chunk.indexOf(':');
          let value = chunk.slice(at + 1).trim();
          const important = /!\s*important\s*$/i.test(value);
          if (important) value = value.replace(/!\s*important\s*$/i, '').trim();
          decls.push({ prop: chunk.slice(0, at).trim(), value, important, line: startLine });
        }
        // A '}' ends this block; leave it for the loop to consume.
      }
      pendingComment = null;
    }
    return { decls, children };
  }

  return parseBlock().children;
}

// Calls fn(node, ancestors) for every rule and at-rule, depth first.
export function walk(nodes, fn, ancestors = []) {
  for (const node of nodes) {
    fn(node, ancestors);
    walk(node.children ?? [], fn, [...ancestors, node]);
  }
}

// Removes attribute selectors, strings and :not()/:is() contents' strings so class matching is clean.
const withoutAttrs = (selector) => selector.replace(/\[[^\]]*\]/g, '[]').replace(/(["'])[\s\S]*?\1/g, '""');

// Class names in a selector: ".btn[data-variant='x'] .btn__icon" -> ['btn', 'btn__icon']
export const selectorClasses = (selector) =>
  [...withoutAttrs(selector).matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map((m) => m[1]);

// Attribute selectors: '[data-variant="primary"]' -> [{ name: 'data-variant', value: 'primary' }]; presence-only has value null.
export const selectorAttrs = (selector) =>
  [...selector.matchAll(/\[\s*([\w-]+)\s*(?:[~|^$*]?=\s*(?:"([^"]*)"|'([^']*)'|([^\]\s]*))\s*(?:[is])?)?\s*\]/g)].map((m) => ({
    name: m[1].toLowerCase(),
    value: m[2] ?? m[3] ?? (m[4] || null),
  }));

export const hasIdSelector = (selector) => /#[_a-zA-Z-][\w-]*/.test(withoutAttrs(selector));

// The selector's own last compound has only element names: "h2", "main p", "ul > li".
export const isElementOnly = (selector) =>
  selector.split(',').some((part) => !/[.#[:]/.test(part) && /[a-z]/i.test(part));

// var() references in a value: [{ name: '--x', fallback: '...' | null }]
export function varRefs(value) {
  const out = [];
  let idx = 0;
  while ((idx = value.indexOf('var(', idx)) >= 0) {
    let depth = 0;
    let j = idx + 3;
    for (; j < value.length; j++) {
      if (value[j] === '(') depth++;
      else if (value[j] === ')' && --depth === 0) break;
    }
    const inner = value.slice(idx + 4, j);
    const comma = inner.indexOf(',');
    out.push({ name: (comma < 0 ? inner : inner.slice(0, comma)).trim(), fallback: comma < 0 ? null : inner.slice(comma + 1).trim() });
    idx += 4;
  }
  return out;
}

// --- Colours -----------------------------------------------------------------------------------

const NAMED = { white: [255, 255, 255, 1], black: [0, 0, 0, 1], transparent: [0, 0, 0, 0] };
export const RAW_COLOUR =
  /#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\(|\b(?:white|black|red|green|blue|gray|grey|orange|yellow|purple|pink|navy|teal|silver|maroon|olive|lime|aqua|fuchsia)\b/i;

// '#BC2026' | 'rgb(0 0 0 / 50%)' | 'white' -> [r, g, b, a] (0-255, alpha 0-1), else null.
export function parseColour(s) {
  s = s.trim().toLowerCase();
  if (NAMED[s]) return NAMED[s];
  let m = s.match(/^#([0-9a-f]{3,8})$/);
  if (m) {
    let h = m[1];
    if (h.length <= 4) h = [...h].map((c) => c + c).join('');
    const v = h.match(/../g).map((x) => parseInt(x, 16));
    return [v[0], v[1], v[2], v.length > 3 ? v[3] / 255 : 1];
  }
  m = s.match(/^rgba?\(([^)]*)\)$/);
  if (m) {
    const p = m[1].split(/[\s,/]+/).filter(Boolean);
    const ch = (x) => (x.endsWith('%') ? (parseFloat(x) * 255) / 100 : parseFloat(x));
    const a = p[3] === undefined ? 1 : p[3].endsWith('%') ? parseFloat(p[3]) / 100 : parseFloat(p[3]);
    return [ch(p[0]), ch(p[1]), ch(p[2]), a];
  }
  return null;
}

// Every colour literal in a value (for gradients: each stop).
export const coloursIn = (value) =>
  [...value.matchAll(/#[0-9a-f]{3,8}\b|rgba?\([^)]*\)|\b(?:white|black|transparent)\b/gi)].map((m) => parseColour(m[0])).filter(Boolean);

const luminance = ([r, g, b]) => {
  const lin = (c) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
// Composites a translucent colour over an opaque one.
export const over = ([r, g, b, a], [br, bg, bb]) => [r * a + br * (1 - a), g * a + bg * (1 - a), b * a + bb * (1 - a), 1];
export function contrast(fg, bg) {
  const [l1, l2] = [luminance(fg), luminance(bg)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}
