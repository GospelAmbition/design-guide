---
title: Image panel
summary: A photo or screenshot with one flat side and one half-ellipse side, with a soft drop shadow. The signature image shape of the home page.
---

On the live site this is an SVG `clipPath` (`#clip-rounded-start` / `#clip-rounded-end`, built in `pages/home/body2.php` for 1024×753 images). Its curved side is a half-ellipse with radii of 36.77% of the width and 50% of the height. The border radii below draw exactly the same shape without needing the inline SVG. The wrapper adds the site's `.drop-shadow`, and the image overlaps its column by 4rem towards the text, as the site's margins do.

## When to use

- The image half of a feature section or band ("How it works", "Prayer fuel", "Prayer relays").

## Do

- Use `.clip-rounded-start` (curve on the left) when the image sits to the right of the text, and `.clip-rounded-end` when it sits to the left.
- Use images at roughly 1024×753 (4:3). The curve was sized for that ratio.
- Flip start and end in right-to-left layouts.

## Don't

- Don't curve both sides or add a border.

## Code

```html
<div class="drop-shadow" style="max-width: 24rem"><img class="clip-rounded-end" src="/brands/prayer-global/assets/world-map-dark.png" alt="" /></div>
<div class="drop-shadow" style="max-width: 24rem"><img class="clip-rounded-start" src="/brands/prayer-global/assets/world-map-dark.png" alt="" /></div>
```

```css
.drop-shadow { filter: drop-shadow(var(--shadow-drop)); }
.clip-rounded-start, .clip-rounded-end { display: block; max-width: 100%; aspect-ratio: 1024 / 753; object-fit: cover; }
.clip-rounded-start { border-radius: 36.768% 0 0 36.768% / 50% 0 0 50%; margin-left: var(--space-xl); }
.clip-rounded-end { border-radius: 0 36.768% 36.768% 0 / 0 50% 50% 0; margin-left: calc(-1 * var(--space-xl)); }
[dir="rtl"] .clip-rounded-start { border-radius: 0 36.768% 36.768% 0 / 0 50% 50% 0; margin-left: 0; margin-right: var(--space-xl); }
[dir="rtl"] .clip-rounded-end { border-radius: 36.768% 0 0 36.768% / 50% 0 0 50%; margin-left: 0; margin-right: calc(-1 * var(--space-xl)); }
```
