---
title: Grid
summary: Equal columns that fit as many items per row as there is room for, then wrap. For cards, logos and any list of like items.
---

Every Layout's Grid. It fits as many columns as there is room for at a minimum width and wraps the rest, so six cards become 3 + 3 on a wide screen, 2 + 2 + 2 on a tablet and one column on a phone. No media queries.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--grid-min` | `20rem` | The narrowest a column may get before the grid drops a column. |
| `--gutter` | `var(--space-s)` | Gap between columns and rows. |

## When to use

- A set of cards, a logo wall, a gallery: any number of items that should all be the same width.

## Don't

- Don't use it for two to four items that should all stack at once. Use the Switcher.
- Don't put a grid directly in a flex row (a cluster, or a flex wrapper) without giving it a width. It has no intrinsic width, so a shrink-to-fit parent collapses it to one column. Inside a section or `.container` it fills the width by itself.

## Code

```html
<ul class="grid demo-fill" role="list" style="--grid-min: var(--threshold-s)">
  <li class="demo-box">One</li>
  <li class="demo-box">Two</li>
  <li class="demo-box">Three</li>
  <li class="demo-box">Four</li>
  <li class="demo-box">Five</li>
  <li class="demo-box">Six</li>
</ul>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min, 20rem), 100%), 1fr));
  gap: var(--gutter, var(--space-s));
}
```
