---
title: Button
summary: "Uppercase Poppins SemiBold pills with a right arrow. Red is the main action; white, grey, red-outline and white-outline pills are for the rest."
---

Every button in the design is a pill (`--radius-pill`) with an uppercase SemiBold label, and all but the nav's Give pill end with a right arrow. Full-size buttons are 65px tall at 1920px (20px label on a 30px line). The design gives them fixed widths (332–380px); here that becomes a minimum width of 16.5em.

## Variants

| Class | Where the design uses it | Example |
| --- | --- | --- |
| `.btn-primary` | The main action: in the hero and on call-to-action cards. | Our tools & trainings, Find my tools |
| `.btn-light` | The second action beside a primary one, on white. White with a grey outline. | Our story |
| `.btn-grey` | A quiet "read more" at the end of a section. | More about us |
| `.btn-outline` | One per tool card. Red outline and label, 18px. | Explore Zume.Training |
| `.btn-outline-light` | On charcoal or dark photos. | Receive updates |
| `.btn-sm` | Add to `.btn-primary` for the nav bar's Give pill: 18px, 32px tall, no arrow. | Give |

The arrow is the design's `arrow-right` icon (`assets/icons/arrow-right.svg`), inlined so it takes the label colour.

## Do

- Write labels as short verb phrases; the CSS uppercases them: "Find my tools", "Start praying", "Partner with us".
- Use `<a>` for navigation (nearly every button opens another page) and `<button>` for actions.
- Keep one `.btn-primary` per card or block. Pair it with `.btn-light`, not a second red pill.

## Don't

- Don't leave out the arrow on full-size buttons. Only the Give pill has none.
- Don't use `.btn-outline` outside a white card. It is the tool card's button.

## Approximate

- The design has no hover, focus or pressed states. The hover states here are proposals: red buttons darken to `--color-red-dark` (a swatch saved in the design file), outlined buttons fill.
- In the design the label is centred on the whole pill and the arrow sits 28–35px from the right edge. Here the label and arrow are centred together, so the label sits about 20px left of the design's position on wide buttons.

## Code

```html
<a class="btn btn-primary" href="#">Our tools &amp; trainings <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
<a class="btn btn-light" href="#">Our story <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
<a class="btn btn-grey" href="#">More about us <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
<a class="btn btn-outline" href="#">Explore Zume.Training <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
<a class="btn btn-primary btn-sm" href="#">Give</a>
```

```html
<div class="bg-charcoal" style="padding: 1.5rem">
  <a class="btn btn-outline-light" href="#">Receive updates <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
</div>
```

```css
.btn {
  --btn-color: var(--color-white);
  --btn-bg: var(--color-red);
  --btn-border: var(--color-red);
  --btn-hover-color: var(--btn-color);
  --btn-hover-bg: var(--btn-bg);
  --btn-hover-border: var(--btn-border);
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
  min-inline-size: 16.5em;
  padding: 0.85em var(--space-s);
  font: var(--weight-semibold) var(--size-body) / var(--leading-body) var(--font-body);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--btn-color);
  background-color: var(--btn-bg);
  border: 1px solid var(--btn-border);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
.btn:hover { color: var(--btn-hover-color); background-color: var(--btn-hover-bg); border-color: var(--btn-hover-border); }
.btn:focus-visible { outline: 2px solid var(--color-red); outline-offset: 3px; }
.btn__icon { flex: none; inline-size: var(--size-icon); block-size: auto; fill: currentColor; }

.btn-primary { --btn-hover-bg: var(--color-red-dark); --btn-hover-border: var(--color-red-dark); }
.btn-light { --btn-color: var(--color-charcoal); --btn-bg: var(--color-white); --btn-border: var(--color-grey); --btn-hover-color: var(--color-red); --btn-hover-border: var(--color-red); }
.btn-grey { --btn-color: var(--color-charcoal); --btn-bg: var(--color-grey-light); --btn-border: var(--color-grey); --btn-hover-color: var(--color-red); --btn-hover-border: var(--color-red); }
.btn-outline { --btn-color: var(--color-red); --btn-bg: var(--color-white); --btn-hover-color: var(--color-white); --btn-hover-bg: var(--color-red); font-size: var(--size-small); }
.btn-outline-light { --btn-color: var(--color-white); --btn-bg: transparent; --btn-border: var(--color-white); --btn-hover-color: var(--color-charcoal); --btn-hover-bg: var(--color-white); }
.btn-sm { min-inline-size: 0; padding: 0.15em 1.3em; font-size: var(--size-small); }
```
