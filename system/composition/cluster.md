---
title: Cluster
summary: A row of items that wraps onto new lines, with even gaps. For tags, buttons, links and icons.
---

Every Layout's Cluster, as used in CUBE CSS.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--gutter` | `var(--space-s)` | Gap between items, both across and down. |
| `--cluster-horizontal-alignment` | `flex-start` | `justify-content` of the row. |
| `--cluster-vertical-alignment` | `center` | `align-items` of the row. |

## When to use

- A group of buttons, a row of social links, a list of tags.

## Don't

- Don't use it for two things pushed to opposite ends. Use Repel.

## Code

```html
<div class="cluster" role="list" style="padding: 0; margin: 0; list-style: none">
  <div>First</div>
  <div>Second item</div>
  <div>Third</div>
  <div>A longer fourth item</div>
  <div>Fifth</div>
</div>
```

```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, var(--space-s));
  justify-content: var(--cluster-horizontal-alignment, flex-start);
  align-items: var(--cluster-vertical-alignment, center);
}
```
