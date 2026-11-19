# Build a page from a brand

Instructions for an AI agent (ChatGPT, Codex, Claude Code or similar) building a web page for someone who is usually not a developer. Follow every step in order. The goal is a page whose HTML and CSS are right from the start, so the person's later changes are about design, content and features, not about fixing CSS.

What you hand over is one folder that opens with a double-click:

```
my-page/
  index.html         the page (more .html files if it is a small site)
  brand.css          copied from the design system, never edited
  site.css           the only CSS you write
  GAPS.md            what the brand didn't cover, placeholders, guesses, check results
  assets/            fonts, images and icons the page uses
  screenshots/       the page at 375, 768 and 1280px wide
```

## 1. Get the design system

The design system is a reference. Don't build inside it and don't change it.

```sh
git clone --depth 1 https://github.com/GospelAmbition/design-guide.git design-system
```

Clone it next to (or inside a temporary folder near) where the page will live, not inside the page folder. If you already have the repo, `git pull` it. Every command below runs from the `design-system` folder and needs only Node.js 18 or later: no `npm install`.

If you cannot run commands at all, read the files from the repo (start with `brands/<id>/brief.md`) and do every step by hand. Say in GAPS.md which checks you could not run.

## 2. Read the brand

1. Find the brand in `llms.txt`. If the person didn't say which brand, ask.
2. Read `brands/<id>/brief.md` from top to bottom. It is the whole brand: voice, rules, tokens, utilities, surfaces, layout primitives, components and patterns, with working HTML for each.
3. Pay most attention to: **How to style anything**, **Utilities**, **Surfaces**, the **Guidelines** (voice, do and don't), and the list of **Patterns**. Patterns are whole page sections; most pages are mostly patterns.

## 3. Find out what the page is for

The person will start in one of two ways.

**They describe an idea** ("a landing page for our new course"). Ask before you plan. Ask in plain text, at most three questions at a time, each with lettered options (a, b, c) so they can reply with a letter, and say why you're asking. Recommend an option when you have a view. Cover, over a few rounds:

- What the page is for, and the one thing a visitor should do (sign up, give, download, read).
- Who it is for.
- What content they already have: copy, photos, logos, links, dates, numbers. Never invent facts, names, numbers, quotes or testimonials.
- Where it fits in the brand: a page on the main site (should look like the rest) or a campaign or event page (on-brand but with its own feel).
- Anything it must do beyond showing content (a form, a map, a video).

Avoid questions about code. Talk about sections, content, order and feel.

**They give an outline or copy.** Read it, ask only what's missing, and go to step 4.

Write any copy that's missing in the brand's voice (see Guidelines), and list it in GAPS.md as draft copy to confirm.

## 4. Plan the sections and get approval

Before writing any code, show a section plan as a table, top to bottom:

| # | Section | Content | Built from |
| - | ------- | ------- | ---------- |
| 1 | Header | Logo, menu | `nav-bar` component |
| 2 | Opening | Course name, one-line promise, sign-up button, photo | `hero` pattern |
| 3 | What you'll learn | Four points with icons | `grid` + `card` component, `.surface-wash`, `py-xl` |
| 4 | Schedule | Six dates with times | **New block** `.course-schedule`: no pattern lists dated items |
| … | | | |

For "Built from", go down this list and stop at the first that works (it's the same order as **How to style anything** in the brief):

1. A **pattern**, as it is.
2. A pattern or component plus **utilities**, a **surface** and **settings**.
3. **Layout primitives** (flow, cluster, switcher, sidebar, grid, frame, cover, reel, center, box) holding **components**.
4. A **new block** in site.css. Say why 1 to 3 don't work.

Ask the person to approve or change the plan. Don't start building until they do. If you truly can't ask, build it and put the questions you would have asked, the answers you assumed and the plan in GAPS.md (it has a heading for each).

If nothing in the brand fits a section well (for example the brand has a home page hero but no title for an inner page), say so in the plan rather than quietly bending a pattern meant for something else.

## 5. Start the page

```sh
node scripts/new-page.mjs <brand-id> ../my-page
```

This creates the folder with `brand.css`, the brand's fonts and the assets `brand.css` needs, a starter `index.html` (head, fonts and stylesheets already linked), an empty `site.css`, `GAPS.md` and `assets/placeholder.svg`. Keep the `<head>` as it is, apart from the title. The brand's nav bar and footer bring their own `<header>` and `<footer>`: paste them where the starter's comments say.

## 6. Build it

### HTML

- **Copy the HTML of patterns and components from the brief exactly**, then change only the content: text, links, images. Keep the class names, data attributes and structure. If a pattern has more items than you need, remove whole items; if fewer, repeat whole items.
- **If removing items leaves a layout looking wrong** (one card stretched across a row meant for three), change the **layout primitive** around them (swap a switcher for a sidebar, set a different `--threshold`), not the blocks. Layout classes are yours to choose; block classes (`card`, `cta-card`) are the brand's.
- **Only copy interactive parts if you make them work.** Tabs need panels and a script, a search field needs a `<form>`. If the page doesn't need them, leave them out.
- **Use a `<section>` only for a section with a heading.** A wrapper that only does layout is a `<div>`.
- **Never copy CSS from the brief.** It is all in brand.css already. It's in the brief so you know what each class does.
- **Images**: as soon as you add HTML that uses a brand asset, copy it from `brands/<id>/assets/` into the page's `assets/` folder at the same path, and point at it relatively: `/brands/<id>/assets/photos/hero.jpg` in the brief becomes `assets/photos/hero.jpg`. Where the person hasn't supplied a photo, use `assets/placeholder.svg` with real `alt` text describing the photo needed, and list it in GAPS.md.
- **Links** go to real URLs, or the planned URL for a page that doesn't exist yet (`/donate/`). Never `href="#"`. An action that doesn't go anywhere (open a menu, copy a link) is a `<button type="button">`.
- **Structure**: one `<header>` (logo and nav), one `<main>`, one `<footer>`. Each section is a `<section>` with a heading. Exactly one `<h1>`. Choose heading levels by structure (h2 for sections, h3 inside them) and get the look from the pattern or a class, never by skipping a level.
- **Use the element that means what it is**: `<nav aria-label="Main">`, lists for lists (`<ul role="list">` when it has no bullets), `<button>` for actions, `<a>` for navigation, `<figure>` and `<figcaption>`, `<blockquote>`, `<time datetime="…">`, `<address>`, `<table>` only for tables of data.
- **Accessibility minimum**: real `alt` on images (`alt=""` for decoration); `aria-hidden="true"` on decorative SVGs and icon fonts; a visible `<label>` for every form field; a name for every link and button (an icon-only one gets a `.visually-hidden` label); `aria-current="page"` on the current menu item; ARIA only where HTML has no element for it.

### CSS

Style the page with, in this order:

1. **Utilities** in the HTML: `class="py-xl text-center"`. See the brief's Utilities list. One class, one job.
2. **Surfaces** for any background: `class="surface-dark"` sets the background and the text and link colours that pass contrast on it. Don't pick colours one by one.
3. **Settings**, set inline: `style="--gutter: var(--space-s)"`, `style="--threshold: var(--threshold-m)"`, `style="--frame-ratio: 4 / 3"`, `style="--hero-image: url(assets/photos/hero.jpg)"`. A setting is a custom property listed in a primitive's or component's Settings table. Its value is a token, a plain number or ratio, a keyword, or an image `url()`. This is the only thing inline styles may do. `--gutter` only affects the element you set it on, never the primitives nested inside.
4. **Variants** the brand already has, as data attributes: `class="btn" data-variant="primary"`. Never invent a variant value: the checker rejects ones brand.css doesn't style.
5. **Text styles** from the brief (`.lead`, `.eyebrow`, …) for text that needs another look, including a heading that should look like a different level.
6. Only then, **site.css**, for blocks the brand doesn't have.

### When you write site.css

- **Only tokens.** Every colour, font, size, space, radius and shadow is a `var(--…)` from the brand. No hex codes, no `px`/`rem`/`em` sizes (1 to 3px borders and `%` are fine), no font names.
- **A comment above each new block** saying what you tried from the brand first and why it didn't work. Add the same line to GAPS.md.
- **Name blocks after what they are**, never how they look: `.course-schedule`, `.course-schedule__day`. Variants are data attributes: `.course-schedule[data-variant="compact"]`.
- **Lay out with the primitives**, in the HTML, before writing layout CSS. A new block usually only needs its own look (borders, type, decoration), not its own layout.
- **No media queries.** Layouts respond to their container (switcher, sidebar, grid and cluster do this already). If a block really must change at a width, use `@container (width < <threshold>)` with one of the brand's `--threshold-*` values, written out (the checker tells you which).
- **Don't restyle the brand's classes** (`.card`, `.btn`, `.hero`). If a pattern doesn't fit, use a variant, a utility, a surface or a new block.
- **Never edit brand.css.** No `<style>` blocks, no `!important`, no IDs in selectors.

Example:

```css
/* Schedule list: dated items with a time beside each. Tried: icon-list and card in a grid, but neither
   lines up dates and times in columns. Layout is .sidebar in the HTML; this block only adds the rules. */
.course-schedule__day {
  border-block-end: 1px solid var(--color-grey);
  padding-block: var(--space-xs);
}
.course-schedule__time {
  font-weight: var(--weight-semibold);
  color: var(--color-red);
}
```

### JavaScript

Only if the page needs it (a menu toggle, tabs). Put it in `site.js`, load it with `<script src="site.js" defer></script>`, and make the page usable without it. Use the brand's existing markup and ARIA states (`aria-expanded`, `aria-selected`) and switch those, not classes.

## 7. Check

```sh
node scripts/check-page.mjs ../my-page
```

Fix every **error** and run it again until it passes. Read every **warning**: fix it, or say in GAPS.md why it's right. The check covers tokens, classes, variants, inline styles, media queries, the site.css comments, links, images, headings, landmarks, labels, names and ARIA. It also makes sure brand.css is unedited and up to date.

## 8. Look at it

If you can run a browser:

```sh
npm install --no-save playwright && npx playwright install chromium   # once
node scripts/screenshot-page.mjs ../my-page
```

This saves the page at 375, 768 and 1280px wide in `my-page/screenshots/`, both whole and in full-resolution slices (`index-1280-part1.png`, …), and reports sideways scrolling, things sticking out of the window, and images that don't load. "No problems" only means nothing overflowed. Then **open the slices and look at them**:

- At 1280px, do side-by-side layouts actually sit side by side? At 375px, does everything stack cleanly?
- Overlapping text, cramped or uneven spacing, awkward gaps, very long lines of text.
- Text on a photo you can't read.
- Anything that doesn't look like the brand's other pages.

Fix, check and screenshot again.

**If a problem comes from brand.css itself** (a component that breaks at some width), don't work around it in site.css. Describe it in GAPS.md under brand problems, so the design system gets fixed for everyone.

If you can't run a browser, say so in GAPS.md under Checks.

## 9. Review it yourself

What the scripts can't catch:

- Tab through the page (if you can drive a browser; otherwise check the source order): every link and button gets a visible focus outline, in a sensible order.
- Link and button text makes sense on its own ("Download the guide", not "Click here").
- The page reads in a sensible order top to bottom, as a screen reader would hear it.
- Colour isn't the only way something is shown (a required field, an error, the current page).
- At most one main (primary) button per section.
- Spacing between sections follows one rhythm (usually the same `py-*` on every section).
- The copy matches the brand's voice, and nothing is invented.

## 10. Hand over

Fill in GAPS.md, then tell the person, in plain words:

- How to open the page (double-click `index.html`).
- What's placeholder or draft and needs their input.
- Anything the brand didn't cover (the new blocks), so the brand team can decide whether to add it to the design system.

### Later changes

These rules still apply when the person asks for changes later, in this chat or another. Re-read this file, change the HTML first (content, utilities, surfaces, settings, variants), touch site.css last, and run the check and the screenshots again after every change.

If the design system has been updated, copy the brand's new `brand.css` over the page's copy and run the check: it tells you if anything the page uses has changed.
