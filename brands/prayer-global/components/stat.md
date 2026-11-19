---
title: Stat
summary: A big Bebas Kai number over an uppercase Europa label. Three in a row for live mission figures.
uses: [switcher]
---

From the home page stats ("Current lap status", "Laps completed", "Total intercessors"). The site's markup is `<span class="four-em font-title">` over `<p class="uppercase one-em">` in a `.lh-base.text-center` column.

## When to use

- Live, real figures that show progress on the mission. Three in a row.

## Do

- Show real numbers with thousands separators.
- Keep labels to two or three words.

## Don't

- Don't show unmeasured marketing claims as stats.

## Code

```html
<div class="switcher demo-fill" style="--threshold: var(--threshold-m); --gutter: var(--space-m)">
  <div class="stat"><span class="stat__value">32%</span><p class="stat__label">Current lap status</p></div>
  <div class="stat"><span class="stat__value">63</span><p class="stat__label">Laps completed</p></div>
  <div class="stat"><span class="stat__value">33,759</span><p class="stat__label">Total intercessors</p></div>
</div>
```

```css
.stat { line-height: var(--leading-base); text-align: center; }
.stat__value { font-family: var(--font-heading); font-size: var(--size-four-em); }
.stat__label { text-transform: uppercase; font-size: var(--size-one-em); margin: 0; }
/* The site's 768px breakpoint, as a container query at --threshold-l. */
@container (width <= 48rem) {
  .stat__value { font-size: var(--size-h2-sm); }
  .stat__label { font-size: 1em; }
}
```
