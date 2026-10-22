---
title: Repel
summary: Pushes items to opposite ends of a row. Unlike the shared Repel, it doesn't wrap.
---

Prayer.Global's own repel, from the Composition section of `basic.css`. It replaces the shared Repel. The site's version keeps the items on one line and leaves vertical alignment at the default.

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
  gap: var(--gutter, var(--space-xs));
  justify-content: space-between;
}
```
