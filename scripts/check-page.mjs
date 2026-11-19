#!/usr/bin/env node
// Checks a page built from a brand (see build-a-page.md). No dependencies: run it straight from a clone
// of the design system, without `npm install`.
//
//   node scripts/check-page.mjs <page folder | page.html>
//
// Reads every .html file in the folder, plus its brand.css, site.css and GAPS.md. Errors must be fixed;
// warnings are worth a look. Exit code 1 when there are errors.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { newReport, cssModel, checkSiteCss, checkHtml, withFontClasses } from './lib/page-rules.mjs';

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shows a path relative to where the command ran, unless that is a long climb out.
const show = (p) => {
  const r = relative(process.cwd(), p);
  return r.startsWith('../..') ? p : r || '.';
};
const arg = process.argv[2];
if (!arg) {
  console.error('Usage: node scripts/check-page.mjs <page folder | page.html>');
  process.exit(2);
}
const target = resolve(arg);
if (!existsSync(target)) {
  console.error(`${arg} does not exist.`);
  process.exit(2);
}
const dir = statSync(target).isDirectory() ? target : dirname(target);
const pages = statSync(target).isDirectory()
  ? readdirSync(dir).filter((f) => f.endsWith('.html')).sort()
  : [basename(target)];
const report = newReport();
const read = (f) => readFileSync(join(dir, f), 'utf8');
const has = (f) => existsSync(join(dir, f));

if (!pages.length) report.error(show(dir), 'no .html files here.');

// brand.css: present, unedited, and the same as the design system's current copy.
let brand = null;
if (!has('brand.css')) {
  report.error('brand.css', "missing. Copy brands/<id>/brand.css from the design system into the page folder (scripts/new-page.mjs does this).");
} else {
  const text = read('brand.css');
  brand = cssModel(text, 'brand');
  if (!brand.brand) report.error('brand.css', 'is not a generated brand.css (its header comment is missing). Copy it again from the design system.');
  else {
    const source = join(REPO, 'brands', brand.brand, 'brand.css');
    if (existsSync(source) && readFileSync(source, 'utf8') !== text) {
      report.error('brand.css', `differs from ${show(source)}. Never edit brand.css: put page CSS in site.css. If the design system was updated, copy brand.css again.`);
    }
  }
}

let site = null;
if (brand) {
  if (!has('site.css')) report.error('site.css', 'missing. Every page links a site.css after brand.css, even an empty one.');
  else site = checkSiteCss(read('site.css'), brand, report);

  const exists = (p) => existsSync(join(dir, p.replace(/^\//, '')));
  // Classes from the brand's self-hosted font stylesheets (icon fonts), as linked by the pages.
  const fontSheets = new Set(pages.flatMap((p) => [...read(p).matchAll(/<link[^>]*href="([^"]*fonts?\/[^"]*\.css)"/g)].map((m) => m[1])));
  withFontClasses(brand, [...fontSheets].filter(exists).map((f) => read(f)));
  const usedClasses = new Set();
  for (const page of pages) {
    const html = read(page);
    checkHtml(html, brand, site, report, { file: page, exists });
    for (const m of html.matchAll(/class\s*=\s*"([^"]*)"/g)) for (const c of m[1].split(/\s+/)) usedClasses.add(c);
  }

  // site.css blocks nobody uses, and blocks or placeholders GAPS.md doesn't mention.
  const gaps = has('GAPS.md') ? read('GAPS.md') : null;
  if (gaps === null) report.error('GAPS.md', 'missing. List new blocks, placeholders and guessed brand decisions there (or write "None.").');
  for (const block of site?.blocks ?? []) {
    if (![...usedClasses].some((c) => c === block || c.startsWith(`${block}__`))) report.warn('site.css', `.${block} is not used by any page. Remove it.`);
    if (gaps !== null && !gaps.includes(block)) report.warn('GAPS.md', `doesn't mention the new block .${block}. Say what it is for and why the brand didn't cover it.`);
  }
  const placeholders = pages.flatMap((p) => [...read(p).matchAll(/<img[^>]*src="[^"]*placeholder[^"]*"/g)]).length;
  if (placeholders && gaps !== null && !/placeholder/i.test(gaps)) report.warn('GAPS.md', `the page has ${placeholders} placeholder image(s); list each one and the photo it needs.`);
}

const where = show(target);
for (const w of report.warnings) console.log(`  warning  ${w}`);
for (const e of report.errors) console.log(`  error    ${e}`);
if (report.errors.length) {
  console.log(`\n${where}: ${report.errors.length} error(s), ${report.warnings.length} warning(s). Fix the errors and run the check again.`);
  process.exit(1);
}
console.log(`${where}: passed${report.warnings.length ? ` with ${report.warnings.length} warning(s)` : ''}${brand?.brand ? ` (brand: ${brand.brand})` : ''}.`);
