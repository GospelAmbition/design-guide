---
title: Switcher
summary: Items sit side by side, and all stack at once when the container gets narrower than a threshold. No media queries.
---

Every Layout's Switcher. It switches on the width of the container, not the viewport, so it works anywhere on the page.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--threshold` | `30rem` | Container width below which every item stacks. |
| `--gutter` | `var(--space-s)` | Gap between items. |

Five or more children always stack. The Switcher is for two to four items.

## When to use

- Two-column sections (text beside an image), a row of three stats, pricing tiers.

## Don't

- Don't use it for more than four items. Use a grid.

## Code

```html
<div class="switcher" style="width: 100%">
  <div style="outline: 1px dashed currentColor; padding: 1rem">One</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Two</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Three</div>
</div>
```

```css
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, var(--space-s));
}
.switcher > * {
  flex-grow: 1;
  flex-basis: calc((var(--threshold, 30rem) - 100%) * 999);
}
.switcher > :nth-last-child(n + 5),
.switcher > :nth-last-child(n + 5) ~ * {
  flex-basis: 100%;
}
```
