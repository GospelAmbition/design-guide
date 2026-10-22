// Paste into Claude in Chrome's javascript_tool on the page being scraped.
// Tallies the computed styles of every visible element into window.__pg, then returns the keys.
// Read one key per call to stay under the output limit, e.g.:  window.__pg.font.join('\n')
// URLs are stripped and rgb() is converted to hex, because output containing URLs is blocked.
(() => {
  const hex = (v) => v
    .replace(/url\([^)]*\)/g, 'url()')
    .replace(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/g, (_, r, g, b, a) =>
      '#' + [r, g, b].map((x) => (+x).toString(16).padStart(2, '0')).join('') + (a !== undefined && a !== '1' ? `/${a}` : ''));
  const tally = {};
  const add = (key, value, el) => {
    if (!value || value === 'none' || value === '0px') return;
    value = hex(value).slice(0, 140);
    if (value === '#000000/0') return; // transparent
    const t = ((tally[key] ??= {})[value] ??= { n: 0, ex: '' });
    t.n++;
    t.ex ||= (el.tagName + '.' + [...el.classList].slice(0, 3).join('.')).slice(0, 50);
  };
  const visible = [...document.querySelectorAll('body *')]
    .filter((e) => e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden');
  for (const e of visible) {
    const s = getComputedStyle(e);
    const hasText = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    add('bg', s.backgroundColor, e);
    if (s.backgroundImage.includes('gradient')) add('gradient', s.backgroundImage, e);
    if (s.borderTopStyle !== 'none' && s.borderTopWidth !== '0px') add('border', `${s.borderTopWidth} ${s.borderTopColor}`, e);
    add('radius', s.borderRadius, e);
    add('shadow', s.boxShadow, e);
    if (hasText) {
      add('color', s.color, e);
      add('font', `${s.fontFamily.split(',')[0]} ${s.fontWeight} ${s.fontSize}/${s.lineHeight} ${s.textTransform}`, e);
    }
  }
  window.__pg = {};
  for (const [k, m] of Object.entries(tally)) {
    window.__pg[k] = Object.entries(m).sort((a, b) => b[1].n - a[1].n).slice(0, 30).map(([v, t]) => `${t.n}x ${v} [${t.ex}]`);
  }
  return Object.keys(window.__pg).map((k) => `${k}: ${window.__pg[k].length}`).join(', ');
})();
