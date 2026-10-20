---
title: Tag
summary: A small outlined label for status or category.
---

Harbor overrides the shared tag: outlined and uppercase instead of filled, so tags stay quiet in dense dashboards.

## When to use

- Status (Draft, Live, Archived) or category labels next to a title or in a table cell.

## Don't

- Don't make tags clickable; use a button or link.
- Don't use more than three tags on one item.

## Code

```html
<span class="tag">Live</span>
<span class="tag">Draft</span>
```

```css
.tag {
  display: inline-block;
  font: var(--weight-strong) var(--size-small) / 1 var(--font-body);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
}
```
