---
title: Sidebar
summary: A narrow item beside a wide one, such as an image beside text. They stack when the wide one would get too narrow. No media queries.
---

Every Layout's Sidebar. The first child is the sidebar, with a preferred width. The second child takes the rest of the row, and the two stack as soon as the second would get narrower than `--sidebar-content-min` of the row.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--sidebar-width` | `20rem` | Preferred width of the sidebar. When stacked it fills the row. |
| `--sidebar-content-min` | `50%` | The narrowest the main item may get before the two stack. |
| `--gutter` | `var(--space-m)` | Gap between the two, across and down. |
| `--sidebar-vertical-alignment` | `stretch` | `align-items` of the row. Use `center` to centre text beside an image. |

Add `data-side="end"` to make the **last** child the sidebar, so the narrow item sits on the right while staying second in the reading order.

## When to use

- An image or icon beside a paragraph, a form beside its explanation, a list of filters beside results.
- Any two-column layout where the columns should not be equal. For equal columns use the Switcher.

## Don't

- Don't give it more than two children. Wrap each side in its own element.

## Code

```html
<div class="sidebar demo-fill" style="--sidebar-width: var(--threshold-s)">
  <div class="demo-box">Sidebar: a photo, an icon, or a short list</div>
  <div class="demo-box">The main content takes the rest of the row, and the two stack when it would get narrower than half the row.</div>
</div>
```

```html
<div class="sidebar demo-fill" data-side="end" style="--sidebar-vertical-alignment: center">
  <div class="demo-box">Main content first in the source, on the left.</div>
  <div class="demo-box">Sidebar on the right</div>
</div>
```

```css
.sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, var(--space-m));
  align-items: var(--sidebar-vertical-alignment, stretch);
}
/* The sidebar: the first child, or the last with data-side="end". */
.sidebar:not([data-side="end"]) > :first-child,
.sidebar[data-side="end"] > :last-child {
  flex-basis: var(--sidebar-width, 20rem);
  flex-grow: 1;
}
/* The main item takes the rest, and wraps below the sidebar when it would get too narrow. */
.sidebar:not([data-side="end"]) > :last-child,
.sidebar[data-side="end"] > :first-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: var(--sidebar-content-min, 50%);
}
```
