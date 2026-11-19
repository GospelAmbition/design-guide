#!/usr/bin/env node
// Starts a page for a brand in a folder outside the design system (see build-a-page.md).
// No dependencies: run it straight from a clone, without `npm install`.
//
//   node scripts/new-page.mjs <brand-id> <page folder>
//
// Copies brand.css, the brand's self-hosted fonts and the assets brand.css uses, and writes a starter
// index.html, an empty site.css, GAPS.md and a placeholder image. Never overwrites an existing file.
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shows a path relative to where the command ran, unless that is a long climb out.
const show = (p) => {
  const r = relative(process.cwd(), p);
  return r.startsWith('../..') ? p : r || '.';
};
const [id, folder] = process.argv.slice(2);
const brands = readdirSync(join(REPO, 'brands')).filter((d) => existsSync(join(REPO, 'brands', d, 'kit.json')));
if (!id || !folder || !brands.includes(id)) {
  console.error(`Usage: node scripts/new-page.mjs <brand-id> <page folder>\nBrands: ${brands.join(', ')}`);
  process.exit(2);
}
const out = resolve(folder);
if (out.startsWith(REPO + '/') || out === REPO) {
  console.error('Build pages outside the design system repo: it is the reference, not the place for new pages.');
  process.exit(2);
}

const brandDir = join(REPO, 'brands', id);
const kit = JSON.parse(readFileSync(join(brandDir, 'kit.json'), 'utf8'));
const created = [];
const skipped = [];
const put = (rel, write) => {
  const dest = join(out, rel);
  if (existsSync(dest)) return skipped.push(rel);
  mkdirSync(dirname(dest), { recursive: true });
  write(dest);
  created.push(rel);
};
const copy = (rel, from = join(brandDir, rel)) => put(rel, (dest) => copyFileSync(from, dest));
const text = (rel, content) => put(rel, (dest) => writeFileSync(dest, content));

copy('brand.css');
for (const f of kit.files) copy(f);

const fontLinks = kit.fonts.map((u) => `  <link rel="stylesheet" href="${u.replace(/&/g, '&amp;')}">`).join('\n');
const preconnect = kit.fonts.some((u) => u.startsWith('https://fonts.googleapis.com'))
  ? '  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
  : '';

text('index.html', `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page title | ${kit.name}</title>
${preconnect}${fontLinks}
  <link rel="stylesheet" href="brand.css">
  <link rel="stylesheet" href="site.css">
</head>
<body>
  <!-- Built from the ${kit.name} brand (design system: brands/${id}/brief.md). Follow build-a-page.md.
       Copy HTML from the brief's patterns and components. Never copy their CSS: it is in brand.css. -->
  <!-- Header: paste the brand's nav bar component here. It brings its own <header>. -->
  <main id="main">
    <!-- One section per row of the approved section plan, top to bottom. -->
  </main>
  <!-- Footer: paste the brand's footer pattern here. It brings its own <footer>. -->
</body>
</html>
`);

text('site.css', `/* Page CSS for anything the ${kit.name} brand doesn't cover. Loaded after brand.css, unlayered, so it wins.
   Rules (node scripts/check-page.mjs checks them):
   - Tokens only: var(--color-*), var(--space-*), var(--size-*), var(--radius-*), … Never raw colours, sizes or fonts.
   - Before each new block, a comment: what you tried from the brand first, and why it didn't work.
   - Name new blocks after what they are (.course-schedule, .course-schedule__day), never after how they look.
   - Variants are data attributes: .course-schedule[data-variant="compact"].
   - No media queries. Use the layout primitives, or @container at a --threshold-* value.
   - Don't restyle the brand's classes. Prefer a variant, a utility or a surface. */
`);

text('GAPS.md', `# Gaps

What this page needed that the ${kit.name} brand doesn't have yet. Keep it short: one line each.

## Questions and answers

<!-- The questions you asked and the answers (or the answers you assumed, if nobody could be asked). -->

## Section plan

<!-- The approved section plan table from build-a-page.md step 4. -->

## New blocks in site.css

<!-- - .block-name: what it is, what you tried from the brand first, why it didn't work. -->

None.

## Placeholders

<!-- - The image in the "…" section: the photo it needs (subject, mood, orientation). -->

None.

## Draft copy

<!-- - Copy you wrote that the person needs to confirm. -->

None.

## Brand decisions I had to guess, and brand problems

<!-- - What you decided and why, so the brand team can confirm it or add it to the design system.
     - Problems caused by brand.css itself (you may not fix those in site.css): what and where. -->

None.

## Checks

<!-- Result of node scripts/check-page.mjs, and of the screenshots at 375, 768 and 1280px (or why they couldn't be taken). -->
`);

text('assets/placeholder.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <rect width="1600" height="900" fill="#d9d9d9"/>
  <path d="M0 0L1600 900M1600 0L0 900" stroke="#bfbfbf" stroke-width="6"/>
  <text x="800" y="465" font-family="sans-serif" font-size="56" text-anchor="middle" fill="#6b6b6b">Placeholder: see GAPS.md</text>
</svg>
`);

const rel = show(out);
console.log(`${kit.name} page started in ${rel}/`);
if (created.length) console.log(`  created: ${created.join(', ')}`);
if (skipped.length) console.log(`  kept (already there): ${skipped.join(', ')}`);
console.log(`\nNext: follow build-a-page.md. Copy any other brand assets you use from brands/${id}/assets/ into ${rel}/assets/, then run:\n  node ${show(join(REPO, 'scripts/check-page.mjs'))} ${rel}`);
