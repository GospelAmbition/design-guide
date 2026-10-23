---
title: Grid
summary: Equal columns that fit as many items per row as there is room for, then wrap. For the tool cards.
---

Brand-only primitive (Every Layout's Grid). The tool section shows six cards three to a row, which the Switcher can't do: it stacks everything once there are more than four items. The Grid fits as many columns as fit at a minimum width and wraps the rest, so six cards become 3 + 3 on a wide screen, 2 + 2 + 2 on a tablet and one column on a phone.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--grid-min` | `20rem` | The narrowest a column may get before the grid drops a column. |
| `--gutter` | `var(--space-s)` | Gap between columns and rows (28px, as between the tool cards). |

## Don't

- Don't put a grid directly in a flex row (a cluster, or a flex wrapper) without giving it a width. It has no intrinsic width of its own, so a shrink-to-fit parent collapses it to one column. Inside a section or `.container` it fills the width by itself.

## Code

```html
<div class="grid" style="--grid-min: 10rem; width: 100%">
  <div style="outline: 1px dashed currentColor; padding: 1rem">One</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Two</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Three</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Four</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Five</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Six</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min, 20rem), 100%), 1fr));
  gap: var(--gutter, var(--space-s));
}
```
