---
title: Cover
summary: A block at least as tall as a minimum height (by default the screen), with one child centred vertically and others pinned to the top and bottom.
---

Every Layout's Cover. For a full-screen opening section: the main message sits in the middle, with a small header above it and a "scroll down" link or credits below.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--cover-min-height` | `100vh` | The least height of the block. Set it to a size token for a shorter block. |
| `--cover-padding` | `var(--space-m)` | Padding on every side. |
| `--cover-gap` | `var(--space-s)` | Least space between the children. |

Mark the child to centre with `data-centre`. Without one, the children stack from the top.

## When to use

- An opening section with one big message, an event page's title screen, a "coming soon" page.

## Don't

- Don't put long content in it. If the content is taller than the screen, the block grows and the centring stops meaning anything.

## Code

```html
<div class="cover demo-box demo-fill" style="--cover-min-height: var(--threshold-s)">
  <p>Small header</p>
  <h2 data-centre>The one centred message</h2>
  <p>Footer line</p>
</div>
```

```css
.cover {
  display: flex;
  flex-direction: column;
  min-block-size: var(--cover-min-height, 100vh);
  padding: var(--cover-padding, var(--space-m));
}
.cover > * { margin-block: var(--cover-gap, var(--space-s)); }
.cover > :first-child:not([data-centre]) { margin-block-start: 0; }
.cover > :last-child:not([data-centre]) { margin-block-end: 0; }
.cover > [data-centre] { margin-block: auto; }
```
