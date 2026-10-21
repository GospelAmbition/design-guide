---
title: Tag
summary: A small filled label for a category or status.
---

> Placeholder shared component. Will be replaced by components found when scraping real brands.

## When to use

- Short category or status labels next to a title.

## Don't

- Don't make tags clickable; use a button or link.

## Code

```html
<span class="tag">Tag</span>
```

```css
.tag {
  display: inline-block;
  background: var(--color-secondary);
  color: var(--color-on-secondary);
  border-radius: var(--radius-sm);
  padding: var(--space-xs) var(--space-s);
  font-size: var(--size-small);
  font-weight: var(--weight-strong);
}
```
