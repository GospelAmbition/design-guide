#!/usr/bin/env node
// Screenshots a page at phone, tablet and desktop widths, and reports what reading the code can't catch:
// sideways scrolling, elements wider than the screen, images that don't load and script errors.
//
//   node scripts/screenshot-page.mjs <page folder | page.html>
//
// Needs Playwright, once, in the design system clone:
//   npm install --no-save playwright && npx playwright install chromium
// Screenshots go in <page folder>/screenshots/: the full page at each width, and the same page in
// 1200px-tall slices (…-part1.png, …) that are easier to inspect. Exit code 1 if a problem was found.
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join, dirname, resolve, basename, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

const WIDTHS = [375, 768, 1280];
const SLICE = 1200;
// Shows a path relative to where the command ran, unless that is a long climb out.
const show = (p) => {
  const r = relative(process.cwd(), p);
  return r.startsWith('../..') ? p : r || '.';
};

const arg = process.argv[2];
if (!arg || !existsSync(resolve(arg))) {
  console.error('Usage: node scripts/screenshot-page.mjs <page folder | page.html>');
  process.exit(2);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('Playwright is not installed. In the design system folder, run:\n  npm install --no-save playwright && npx playwright install chromium\nIf you cannot install it, say so in GAPS.md under Checks.');
  process.exit(2);
}

const target = resolve(arg);
const dir = statSync(target).isDirectory() ? target : dirname(target);
const pages = statSync(target).isDirectory() ? readdirSync(dir).filter((f) => f.endsWith('.html')).sort() : [basename(target)];
const shots = join(dir, 'screenshots');
mkdirSync(shots, { recursive: true });
for (const f of readdirSync(shots)) if (f.endsWith('.png')) rmSync(join(shots, f));

const browser = await chromium.launch();
let problems = 0;
for (const page of pages) {
  for (const width of WIDTHS) {
    const tab = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    tab.on('pageerror', (e) => errors.push(e.message));
    tab.on('requestfailed', (r) => errors.push(`failed to load ${r.url()}`));
    await tab.goto(pathToFileURL(join(dir, page)).href, { waitUntil: 'networkidle' });
    await tab.evaluate(() => document.fonts.ready);
    const found = await tab.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const out = [];
      if (document.documentElement.scrollWidth > vw + 1) out.push(`the page scrolls sideways (${document.documentElement.scrollWidth}px wide in a ${vw}px window)`);
      const describe = (el) => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : '');
      const wide = [...document.querySelectorAll('body *')].filter((el) => {
        const r = el.getBoundingClientRect();
        if (!r.width || getComputedStyle(el).position === 'fixed') return false;
        // Ignore elements inside something that scrolls or clips on purpose (a reel, a frame).
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const o = getComputedStyle(p);
          if (/(auto|scroll|hidden|clip)/.test(o.overflowX)) return false;
        }
        return r.right > vw + 1 || r.left < -1;
      });
      // Report only the outermost offenders.
      for (const el of wide.filter((el) => !wide.includes(el.parentElement)).slice(0, 5)) out.push(`${describe(el)} sticks out of the window`);
      for (const img of document.images) if (img.complete && !img.naturalWidth) out.push(`image ${img.getAttribute('src')} did not load`);
      return out;
    });
    const name = page.replace(/\.html$/, '');
    const file = join(shots, `${name}-${width}.png`);
    await tab.screenshot({ path: file, fullPage: true });
    // The full page shrinks too much to judge detail, so also save it in screen-sized slices at full resolution.
    const height = await tab.evaluate(() => document.documentElement.scrollHeight);
    const slices = Math.ceil(height / SLICE);
    for (let i = 0; i < slices; i++) {
      const y = i * SLICE;
      await tab.screenshot({ path: join(shots, `${name}-${width}-part${i + 1}.png`), fullPage: true, clip: { x: 0, y, width, height: Math.min(SLICE, height - y) } });
    }
    const all = [...found, ...errors];
    problems += all.length;
    console.log(`${page} at ${width}px: ${all.length ? all.length + ' problem(s)' : 'ok'}  → ${show(file)} (+ ${slices} slices)`);
    for (const p of all) console.log(`    - ${p}`);
    await tab.close();
  }
}
await browser.close();
console.log(problems ? '\nFix these, then look at every screenshot yourself: the script only catches overflow and loading errors.' : '\nNo overflow or loading problems. Now look at every screenshot yourself.');
process.exit(problems ? 1 : 0);
