---
title: Button
summary: Bootstrap .btn restyled as a pill with bold labels. The orange-gradient .btn-cta is the main action; blue, white, orange and outline pills are for the rest.
---

Class names are the live site's own (Bootstrap 5.2 plus prayer-global-porch overrides), so markup copied from prayer.global keeps working.

## Variants

| Class | Where the site uses it | Example |
| --- | --- | --- |
| `.btn-cta` | The main action. Orange gradient, no shadow. | Start praying |
| `.btn-cta.cta-blue` | The main action inside a navy box. | Login (Prayer Relays page) |
| `.btn-primary-light` | Secondary actions in feature sections and bands. | View prayer map, Register now |
| `.btn-primary` | Solid blue, already uppercase: dialogs and forms. | Close |
| `.btn-primary-dark` | Solid navy. | |
| `.btn-secondary` | Solid orange. | |
| `.btn-white` | On navy or light-blue bands. | Donate |
| `.btn-outline-primary` | Low-emphasis options in a row on white. | Pre-event setup (Events page) |
| `.btn-outline-light` | Outline version for navy sections. | Information for leaders |

Add `.uppercase` to every variant except `.btn-cta` and `.btn-primary`, which uppercase themselves. Add `.btn-lg` for larger CTAs.

## Do

- Write labels as short verbs: "Start praying", "Create prayer relay", "Donate".
- Use `<a>` for navigation (most CTAs open another page) and `<button>` for actions.

## Don't

- Don't put two `.btn-cta` side by side.
- Don't expect a hover change on `.btn-cta`. The site has none (marked TODO in its CSS).

## Code

```html
<a class="btn btn-cta btn-lg" href="#">Start praying</a>
<a class="btn btn-cta" href="#">Start praying</a>
<a class="btn btn-primary-light uppercase" href="#">View prayer map</a>
<button class="btn btn-primary" type="button">Close</button>
<a class="btn btn-secondary uppercase" href="#">Secondary</a>
<a class="btn btn-outline-primary py-1" href="#">Pre-event setup</a>
```

```html
<div class="brand-bg white" style="padding: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center">
  <a class="btn btn-cta cta-blue btn-lg" href="#">Login</a>
  <a class="btn btn-white uppercase" href="#">Donate</a>
  <a class="btn btn-outline-light uppercase" href="#">Information for leaders</a>
  <a class="btn btn-primary-dark uppercase" href="#">Primary dark</a>
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
  padding: var(--space-2) var(--space-3);
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
.btn-lg { font-size: var(--size-large); }
.py-1 { padding-top: var(--space-1); padding-bottom: var(--space-1); }

.btn-cta {
  --btn-hover-bg: transparent;
  background-image: var(--gradient-orange);
  text-transform: uppercase;
  padding: 0.4em 1.5em;
  box-shadow: none;
  border: none;
}
.cta-blue { background-image: var(--gradient-blue); --btn-hover-color: var(--color-brand-highlight); }
.btn-primary { --btn-bg: var(--color-brand-lighter); --btn-hover-bg: var(--color-brand-light); border: none; text-transform: uppercase; }
.btn-primary-light { --btn-bg: var(--color-brand-lightest); --btn-hover-bg: var(--color-brand-lighter); border: none; }
.btn-primary-dark { --btn-bg: var(--color-brand); --btn-hover-bg: var(--color-brand-light); border: none; }
.btn-secondary { --btn-bg: var(--color-secondary); --btn-hover-bg: var(--color-secondary-darker); border: none; }
.btn-white { --btn-color: var(--color-brand); --btn-bg: var(--color-white); --btn-hover-color: var(--color-white); --btn-hover-bg: var(--color-brand-lighter); border: none; }
.btn-outline-primary { --btn-color: var(--color-brand-light); --btn-border: var(--color-brand-light); --btn-hover-color: var(--color-white); --btn-hover-bg: var(--color-brand-light); }
.btn-outline-light { --btn-color: var(--color-light); --btn-border: var(--color-light); --btn-hover-color: var(--color-black); --btn-hover-bg: var(--color-light); }
```
