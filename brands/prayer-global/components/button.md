---
title: Button
summary: Pill-shaped buttons with bold labels. The orange-gradient cta variant is the main action; blue, white, orange and outline pills are for the rest.
---

The block is `.btn`, and `data-variant` picks the version (a CUBE CSS exception). Variants are named after the colour roles they use. They'll be renamed when the brand's colours get their clean-up.

## Variants

| `data-variant` | Where the site uses it | Example |
| --- | --- | --- |
| `cta` | The main action. Orange gradient, no shadow. | Start praying |
| `cta-blue` | The main action inside a navy box. Blue gradient. | Login (Prayer Relays page) |
| `primary-light` | Secondary actions in feature sections and bands. | View prayer map, Register now |
| `primary` | Solid blue, already uppercase: dialogs and forms. | Close |
| `primary-dark` | Solid navy. | |
| `secondary` | Solid orange. | |
| `white` | On navy or blue surfaces. | Donate |
| `outline-primary` | Low-emphasis options in a row on white. | Pre-event setup (Events page) |
| `outline-light` | Outline version for navy surfaces. | Information for leaders |

Add `data-size="large"` for larger CTAs (20px labels).

Add the `.uppercase` utility to every variant except `cta`, `cta-blue` and `primary`, which uppercase themselves.

## Do

- Write labels as short verbs: "Start praying", "Create prayer relay", "Donate".
- Use `<a>` for navigation (most CTAs open another page) and `<button>` for actions.

## Don't

- Don't put two `cta` buttons side by side.
- Don't expect a hover change on `cta`. The site has none (marked TODO in its CSS).

## Code

```html
<a class="btn" data-variant="cta" data-size="large" href="/newest/lap/">Start praying</a>
<a class="btn" data-variant="cta" href="/newest/lap/">Start praying</a>
<a class="btn uppercase" data-variant="primary-light" href="/map/">View prayer map</a>
<button class="btn" data-variant="primary" type="button">Close</button>
<a class="btn uppercase" data-variant="primary-dark" href="/about/">Primary dark</a>
<a class="btn uppercase" data-variant="secondary" href="/challenges/">Secondary</a>
<a class="btn py-xxxs" data-variant="outline-primary" href="/events/setup/">Pre-event setup</a>
```

```html
<div class="cluster surface-brand p-s demo-fill">
  <a class="btn" data-variant="cta-blue" data-size="large" href="/login/">Login</a>
  <a class="btn uppercase" data-variant="white" href="/donate/">Donate</a>
  <a class="btn uppercase" data-variant="outline-light" href="/leaders/">Information for leaders</a>
</div>
```

```css
.btn {
  --btn-color: var(--color-white);
  --btn-bg: transparent;
  --btn-border: transparent;
  --btn-hover-color: var(--btn-color);
  --btn-hover-bg: var(--btn-bg);
  --btn-hover-border: var(--btn-border);
  display: inline-block;
  padding: var(--space-xxs) var(--space-xs);
  font-family: var(--font-body);
  font-size: var(--size-small);
  font-weight: var(--weight-strong);
  line-height: var(--leading-base);
  color: var(--btn-color);
  background-color: var(--btn-bg);
  border: 1px solid var(--btn-border);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-small);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn:hover { color: var(--btn-hover-color); background-color: var(--btn-hover-bg); border-color: var(--btn-hover-border); }
.btn:focus-visible { box-shadow: none; outline: 2px solid var(--color-secondary); outline-offset: 2px; }
.btn:disabled { --btn-bg: var(--color-grey); --btn-border: var(--color-grey); opacity: 0.65; pointer-events: none; }
.btn[data-size="large"] { font-size: var(--size-large); }

.btn[data-variant="cta"],
.btn[data-variant="cta-blue"] {
  --btn-hover-bg: transparent;
  background-image: var(--gradient-orange);
  text-transform: uppercase;
  padding: 0.4em 1.5em;
  box-shadow: none;
  border: none;
}
.btn[data-variant="cta-blue"] { background-image: var(--gradient-blue); --btn-hover-color: var(--color-brand-highlight); }
.btn[data-variant="primary"] { --btn-bg: var(--color-brand-lighter); --btn-hover-bg: var(--color-brand-light); border: none; text-transform: uppercase; }
.btn[data-variant="primary-light"] { --btn-bg: var(--color-brand-lightest); --btn-hover-bg: var(--color-brand-lighter); border: none; }
.btn[data-variant="primary-dark"] { --btn-bg: var(--color-brand); --btn-hover-bg: var(--color-brand-light); border: none; }
.btn[data-variant="secondary"] { --btn-bg: var(--color-secondary); --btn-hover-bg: var(--color-secondary-darker); border: none; }
.btn[data-variant="white"] { --btn-color: var(--color-brand); --btn-bg: var(--color-white); --btn-hover-color: var(--color-white); --btn-hover-bg: var(--color-brand-lighter); border: none; }
.btn[data-variant="outline-primary"] { --btn-color: var(--color-brand-light); --btn-border: var(--color-brand-light); --btn-hover-color: var(--color-white); --btn-hover-bg: var(--color-brand-light); }
.btn[data-variant="outline-light"] { --btn-color: var(--color-white); --btn-border: var(--color-white); --btn-hover-color: var(--color-brand); --btn-hover-bg: var(--color-white); }
```
