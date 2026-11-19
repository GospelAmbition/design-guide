---
title: Reel
summary: A row that scrolls sideways instead of wrapping, such as a strip of photos or cards.
---

Every Layout's Reel. Items stay on one line at their own width and the row scrolls horizontally. Each item snaps into place.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--reel-item-width` | `auto` | Width of each item. Set it to a size token so cards line up. |
| `--gutter` | `var(--space-s)` | Gap between items. |

## Do

- Make the reel reachable by keyboard and named for screen readers: `tabindex="0"`, `role="region"` and an `aria-label` saying what is in it.
- Leave part of the next item visible at the edge, so people can see there is more.

## Don't

- Don't hide important content in a reel. Many people never scroll sideways. Use the Grid when everything must be seen.

## Code

```html
<ul class="reel demo-fill" role="list" tabindex="0" aria-label="Example items" style="--reel-item-width: var(--threshold-s)">
  <li class="demo-box">One</li>
  <li class="demo-box">Two</li>
  <li class="demo-box">Three</li>
  <li class="demo-box">Four</li>
  <li class="demo-box">Five</li>
</ul>
```

```css
.reel {
  display: flex;
  gap: var(--gutter, var(--space-s));
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
}
.reel > * {
  flex: 0 0 var(--reel-item-width, auto);
  scroll-snap-align: start;
}
.reel > img { block-size: 100%; flex-basis: auto; inline-size: auto; }
```
