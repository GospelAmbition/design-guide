---
title: Container
summary: The page-width wrapper. Centres a section's content at a maximum width with side padding.
---

CUBE CSS's wrapper, called `container` here.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--container-max` | `80rem` | Maximum width of the content. |
| `--gutter` | `var(--space-m)` | Padding on each side, so content never touches the screen edge. |

## When to use

- Inside every full-width section, so the background runs edge to edge while the content stays at a readable width.

## Do

- Put the background on the section and the `.container` inside it.

## Code

```html
<section style="width: 100%; outline: 1px dashed currentColor">
  <div class="container" style="outline: 1px dashed currentColor">Content stays within the container's maximum width.</div>
</section>
```

```css
.container {
  position: relative;
  margin-inline: auto;
  max-width: var(--container-max, 80rem);
  padding-inline: var(--gutter, var(--space-m));
}
```
