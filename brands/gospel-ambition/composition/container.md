---
title: Container
summary: The page-width wrapper. Content is 1640px wide, which leaves 140px margins on a 1920px screen.
---

Replaces the shared Container because the design's content column is wider. Every section of the design lines its content up between x = 140 and x = 1780 on the 1920px artboard, so the content box is 1640px (`--size-container`). The padding is added outside that width, so the content stays 1640px wide on large screens.

The design has no mobile layout. The side padding is a proposal: 1rem on phones, growing to 3rem.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--container-max` | `var(--size-container)` | Maximum width of the content. |
| `--gutter` | `clamp(var(--space-xs), 4cqi, var(--space-m))` | Padding on each side. |

## Do

- Put the background (colour, wash, photo, ribbon) on the full-width section and the `.container` inside it.

## Code

```html
<section style="width: 100%; outline: 1px dashed currentColor">
  <div class="container" style="outline: 1px dashed currentColor">Content stays within 1640px.</div>
</section>
```

```css
.container {
  position: relative;
  box-sizing: content-box;
  margin-inline: auto;
  max-width: var(--container-max, var(--size-container));
  padding-inline: var(--gutter, clamp(var(--space-xs), 4cqi, var(--space-m)));
}
```
