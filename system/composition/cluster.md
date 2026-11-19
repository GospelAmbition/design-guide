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
<ul class="cluster" role="list">
  <li class="demo-box">First</li>
  <li class="demo-box">Second item</li>
  <li class="demo-box">Third</li>
  <li class="demo-box">A longer fourth item</li>
  <li class="demo-box">Fifth</li>
</ul>
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
