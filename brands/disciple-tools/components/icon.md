---
title: Icon
summary: Font Awesome 5 Free icons in three sizes, taking the text colour. 125px green in the icon grid, 30px near-black on testimonial cards, 14px in icon lists.
---

Every icon on the marketing pages is a Font Awesome 5 Free glyph (loaded in Setup). An `<i>` icon takes the colour and size of its text, so the classes below only set size and colour.

| Class | Size | Colour | Where |
| --- | --- | --- | --- |
| `.icon-feature` | 125px (`--size-icon-xl`) | `--color-green` | Icon grid ("Manpower", "Time", "DNA") |
| `.icon-quote` | 30px (`--size-icon`) | `--color-text` | Testimonial cards |
| `.icon-check` | 14px (`--size-icon-small`) | inherits | Icon lists (see Icon list) |

## Do

- Mark decorative icons `aria-hidden="true"`.
- Use solid icons (`fas`) unless the site already uses the regular one (`far fa-clock`, `far fa-check-circle`).

## Don't

- Don't mix in another icon set.
- Don't use a green icon on `--color-grey-light` for meaning alone. It is 1.7:1; the site always puts a heading under it.

## Code

```html
<div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap">
  <i class="fas fa-people-carry icon-feature" aria-hidden="true"></i>
  <i class="far fa-clock icon-feature" aria-hidden="true"></i>
  <i class="fas fa-dna icon-feature" aria-hidden="true"></i>
  <i class="fas fa-quote-left icon-quote" aria-hidden="true"></i>
  <i class="far fa-check-circle icon-check" aria-hidden="true"></i>
</div>
```

```css
.icon-feature { font-size: var(--size-icon-xl); line-height: var(--leading-heading); color: var(--color-green); }
.icon-quote { font-size: var(--size-icon); line-height: var(--leading-heading); color: var(--color-text); }
.icon-check { font-size: var(--size-icon-small); line-height: var(--leading-heading); }
```
