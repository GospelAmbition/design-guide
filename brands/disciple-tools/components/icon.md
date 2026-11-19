---
title: Icon
summary: Font Awesome 5 Free icons in three sizes, taking the text colour. 125px green in the icon grid, 30px near-black on testimonial cards, 14px in icon lists.
uses: [cluster]
---

Every icon on the marketing pages is a Font Awesome 5 Free glyph (loaded in Setup). An `<i>` icon takes the colour and size of its text. Add `.icon` and a `data-variant` to give it one of the site's three sizes and colours.

| Attribute | Size | Colour | Where |
| --- | --- | --- | --- |
| `data-variant="feature"` | 125px (`--size-icon-xl`) | `--color-green` | Icon grid ("Manpower", "Time", "DNA") |
| `data-variant="quote"` | 30px (`--size-icon`) | `--color-text` | Testimonial cards |
| `data-variant="check"` | 14px (`--size-icon-small`) | inherits | Icon lists (see Icon list) |

## Do

- Mark decorative icons `aria-hidden="true"`.
- Use solid icons (`fas`) unless the site already uses the regular one (`far fa-clock`, `far fa-check-circle`).

## Don't

- Don't mix in another icon set.
- Don't use a green icon on `--color-grey-light` for meaning alone. It is 1.7:1; the site always puts a heading under it.

## Code

```html
<div class="cluster" style="--gutter: var(--space-s)">
  <i class="fas fa-people-carry icon" data-variant="feature" aria-hidden="true"></i>
  <i class="far fa-clock icon" data-variant="feature" aria-hidden="true"></i>
  <i class="fas fa-dna icon" data-variant="feature" aria-hidden="true"></i>
  <i class="fas fa-quote-left icon" data-variant="quote" aria-hidden="true"></i>
  <i class="far fa-check-circle icon" data-variant="check" aria-hidden="true"></i>
</div>
```

```css
.icon { line-height: var(--leading-heading); }
.icon[data-variant="feature"] { font-size: var(--size-icon-xl); color: var(--color-green); }
.icon[data-variant="quote"] { font-size: var(--size-icon); color: var(--color-text); }
.icon[data-variant="check"] { font-size: var(--size-icon-small); }
```
