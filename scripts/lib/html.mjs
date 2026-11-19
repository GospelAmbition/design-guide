// A small, forgiving HTML reader for the checkers. No dependencies.
// Produces { type: 'root', children } with elements { type: 'el', tag, attrs, children, parent, line }
// and text nodes { type: 'text', value }. Good enough for well-formed pages and component examples.

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const RAW = new Set(['script', 'style', 'textarea', 'title']);
// Elements a new start tag of the same kind (or a block) closes implicitly.
const AUTO_CLOSE = { p: /^(p|div|section|article|aside|header|footer|nav|main|ul|ol|h[1-6]|form|table|figure|blockquote)$/, li: /^li$/, option: /^option$/, dt: /^d[td]$/, dd: /^d[td]$/ };

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', copy: '©', mdash: '—', ndash: '–', hellip: '…', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“' };
export const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) =>
    e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENTITIES[e.toLowerCase()] ?? m);

export function parseHtml(src) {
  const root = { type: 'root', tag: '#root', children: [], attrs: {}, parent: null };
  let cur = root;
  let i = 0;
  const lineAt = (() => {
    const starts = [0];
    for (let k = 0; k < src.length; k++) if (src[k] === '\n') starts.push(k + 1);
    return (pos) => {
      let lo = 0, hi = starts.length - 1;
      while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (starts[mid] <= pos) lo = mid; else hi = mid - 1;
      }
      return lo + 1;
    };
  })();
  const text = (value) => value && cur.children.push({ type: 'text', value: decode(value), parent: cur });

  while (i < src.length) {
    const lt = src.indexOf('<', i);
    if (lt < 0) { text(src.slice(i)); break; }
    text(src.slice(i, lt));
    if (src.startsWith('<!--', lt)) {
      const end = src.indexOf('-->', lt + 4);
      i = end < 0 ? src.length : end + 3;
      continue;
    }
    if (src[lt + 1] === '!' || src[lt + 1] === '?') {
      const end = src.indexOf('>', lt);
      if (/^<!doctype/i.test(src.slice(lt, lt + 9))) root.doctype = true;
      i = end < 0 ? src.length : end + 1;
      continue;
    }
    const close = src[lt + 1] === '/';
    const m = src.slice(lt).match(/^<\/?([a-zA-Z][\w:-]*)/);
    if (!m) { text('<'); i = lt + 1; continue; }
    const tag = m[1].toLowerCase();
    // Find the end of the tag, skipping quoted attribute values.
    let j = lt + m[0].length;
    let q = null;
    for (; j < src.length; j++) {
      const c = src[j];
      if (q) { if (c === q) q = null; }
      else if (c === '"' || c === "'") q = c;
      else if (c === '>') break;
    }
    const inside = src.slice(lt + m[0].length, j);
    i = j + 1;
    if (close) {
      let n = cur;
      while (n !== root && n.tag !== tag) n = n.parent;
      if (n !== root) cur = n.parent;
      continue;
    }
    const attrs = {};
    for (const a of inside.matchAll(/([^\s"'>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) {
      attrs[a[1].toLowerCase()] = decode(a[2] ?? a[3] ?? a[4] ?? '');
    }
    while (AUTO_CLOSE[cur.tag]?.test(tag)) cur = cur.parent;
    const el = { type: 'el', tag, attrs, children: [], parent: cur, line: lineAt(lt) };
    cur.children.push(el);
    if (VOID.has(tag) || /\/\s*$/.test(inside)) continue;
    if (RAW.has(tag)) {
      const end = src.toLowerCase().indexOf(`</${tag}`, i);
      const raw = src.slice(i, end < 0 ? src.length : end);
      if (raw) el.children.push({ type: 'text', value: tag === 'title' || tag === 'textarea' ? decode(raw) : raw, parent: el });
      i = end < 0 ? src.length : src.indexOf('>', end) + 1;
      continue;
    }
    cur = el;
  }
  return root;
}

export function* elements(node) {
  for (const c of node.children ?? []) {
    if (c.type !== 'el') continue;
    yield c;
    yield* elements(c);
  }
}

export const ancestors = function* (el) {
  for (let p = el.parent; p && p.type === 'el'; p = p.parent) yield p;
};

export const classesOf = (el) => (el.attrs.class ?? '').split(/\s+/).filter(Boolean);
