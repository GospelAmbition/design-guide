---
title: Switcher
summary: Items sit side by side, and all stack at once when the container gets narrower than a threshold. Stacks below 27rem by default, and can show its items in reverse.
---

Every Layout's Switcher, as on prayer.global. It replaces the shared Switcher in two ways: it stacks below `--threshold-xs` (27rem) by default, as the site does, and `data-reverse` puts the last item first when side by side. It switches on the width of the container, not the viewport, so it works anywhere on the page.

The site's size classes are settings here:

- `.switcher-md` is `style="--threshold: var(--threshold-m); --gutter: var(--space-m)"` (stacks below 40rem, 2rem gap). Most two-column sections on the home page use it.
- `.switcher-lg` is `style="--threshold: var(--threshold-xl); --gutter: var(--space-l)"` (stacks below 55rem, 3rem gap).

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--threshold` | `var(--threshold-xs)` | Container width below which every item stacks. |
| `--gutter` | `var(--space-s)` | Gap between items. |

Add `data-reverse` to show the items in reverse order when side by side, for an image on the left with its text first in the source. Five or more children always stack. The Switcher is for two to four items.

## When to use

- Two-column sections (text beside an image), a row of three stats, a pair of buttons.

## Don't

- Don't use it for more than four items. Use a grid.

## Code

```html
<div class="switcher demo-fill" data-reverse style="--threshold: var(--threshold-m); --gutter: var(--space-m)">
  <div class="demo-box">First in source, shown on the right</div>
  <div class="demo-box">Second in source, shown on the left</div>
</div>
```

```css
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, var(--space-s));
}
.switcher[data-reverse] { flex-direction: row-reverse; }
.switcher > * {
  flex-grow: 1;
  flex-basis: calc((var(--threshold, var(--threshold-xs)) - 100%) * 999);
}
.switcher > :nth-last-child(n + 5),
.switcher > :nth-last-child(n + 5) ~ * {
  flex-basis: 100%;
}
```
