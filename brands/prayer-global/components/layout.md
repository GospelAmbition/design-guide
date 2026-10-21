---
title: Layout
summary: The site's layout primitives. .container for page width, .switcher for side-by-side columns that stack on narrow screens, .flow-* for vertical rhythm, .center and .cluster.
---

From prayer-global-porch `basic.css` ("Composition", based on Every Layout) and Bootstrap's `.container`. Every section and pattern is built from these.

| Class | What it does |
| --- | --- |
| `.container` | Centres content at Bootstrap widths (540 / 720 / 960 / 1140 / 1320px). `data-gutter-4` gives 1.5rem side padding. |
| `.switcher` | Children sit side by side and all stack once the container is narrower than `--switcher-width` (27rem; 40rem with `.switcher-md`). `.switcher-reverse` flips the order. |
| `.flow-small` / `.flow-medium` | 1rem / 2rem between children. |
| `.center` | A centred column. |
| `.cluster` | A wrapping row with 1rem gaps. |
| `.py-6` | 4rem section padding top and bottom. |

## Do

- Wrap section content in `.container`, and two-column content in `.switcher.switcher-md`.

## Code

```html
<div class="container" data-gutter-4 style="outline: 1px dashed currentColor">
  <div class="switcher switcher-md">
    <div class="flow-small"><h3>Column one</h3><p>Sits beside column two on wide screens.</p></div>
    <div class="flow-small"><h3>Column two</h3><p>Stacks under column one when narrow.</p></div>
  </div>
</div>
```

```css
.container { width: 100%; padding-inline: 0.75rem; margin-inline: auto; box-sizing: border-box; }
.container[data-gutter-4] { padding-inline: var(--space-4); }
.container[data-no-gutter] { padding-inline: 0; }
@media (min-width: 576px) { .container { max-width: 540px; } }
@media (min-width: 768px) { .container { max-width: 720px; } }
@media (min-width: 992px) { .container { max-width: 960px; } }
@media (min-width: 1200px) { .container { max-width: 1140px; } }
@media (min-width: 1400px) { .container { max-width: 1320px; } }

.switcher { display: flex; flex-wrap: wrap; gap: var(--space, 1rem); }
.switcher > * { flex-grow: 1; flex-basis: calc((var(--switcher-width, 27rem) - 100%) * 999); }
.switcher > :nth-last-child(n + 5), .switcher > :nth-last-child(n + 5) ~ * { flex-basis: 100%; }
.switcher-md { --switcher-width: 40rem; --space: 2rem; }
.switcher-reverse { flex-direction: row-reverse; }

.flow-small > *, .flow-medium > * { margin-top: 0; margin-bottom: 0; }
.flow-small > * + * { margin-top: var(--space-3); }
.flow-medium > * + * { margin-top: var(--space-5); }

.center { display: flex; flex-direction: column; align-items: center; }
.cluster { display: flex; gap: var(--space-3); align-items: center; justify-content: flex-start; flex-wrap: wrap; }
.text-center { text-align: center; }
.align-items-center { align-items: center; }
.w-fit { width: fit-content; }
.mx-auto { margin-inline: auto; }
.py-6 { padding-top: var(--space-7); padding-bottom: var(--space-7); }
.pt-6 { padding-top: var(--space-7); }
.pb-6 { padding-bottom: var(--space-7); }
.grow-2 { flex-grow: 2; }
.grow-3 { flex-grow: 3; }
.grow-4 { flex-grow: 4; }
```
