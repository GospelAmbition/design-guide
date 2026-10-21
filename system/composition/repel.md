---
title: Repel
summary: Pushes items to opposite ends of a row, and lets them wrap when there isn't room.
---

CUBE CSS's repel composition.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--gutter` | `var(--space-s)` | Minimum gap between the items, and between lines when they wrap. |
| `--repel-vertical-alignment` | `center` | `align-items` of the row. |

Add `data-nowrap` to keep the items on one line.

## When to use

- A title with an action at the far end, a logo with a menu button, a button with a partner logo.

## Code

```html
<div class="repel" style="width: 100%">
  <strong>Left item</strong>
  <span>Right item</span>
</div>
```

```css
.repel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: var(--repel-vertical-alignment, center);
  gap: var(--gutter, var(--space-s));
}
.repel[data-nowrap] { flex-wrap: nowrap; }
```
