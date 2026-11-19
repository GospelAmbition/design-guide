---
title: Button
summary: Almost-square buttons with bold Roboto labels. Blue for most actions, green for the first step, a blue outline for the second of a pair.
uses: [cluster]
---

The site's Elementor buttons and the theme's `.green-button` (the Demo button in the nav bar), with values as tokens. The block is `.btn`; `data-variant`, `data-size` and `data-width` pick the version.

## Variants

| Attribute | Where the site uses it | Example |
| --- | --- | --- |
| `data-variant="blue"` (or none) | Most actions: feature rows, link bands, forms. | Learn More, Download Disciple.Tools |
| `data-variant="green"` | The first step, on blue or white. | Get Started |
| `data-variant="outline"` | The second of a pair, on white. 2px blue border. | Get Started (beside Learn More) |
| `data-variant="nav"` | The Demo button in the nav bar. Regular weight, 1px border, turns blue on hover. | Demo |

Sizes: default (15px, 12px × 24px), `data-size="medium"` (16px, 15px × 30px, the home page feature rows), `data-size="large"` (18px, 20px × 40px, pricing). Add `data-width="full"` to fill the column, as in the link band.

## Do

- Write labels in title case, two or three words: "Get Started", "Explore Hosting".
- Use `<a>` for navigation (nearly every button on the site opens a page) and `<button>` for actions.
- Set a row of buttons in a `.cluster`.

## Don't

- Don't put two green buttons side by side.
- Don't expect a colour change on hover. Like the site, the label only underlines; the nav Demo button is the exception.
- Don't put body-size white text on green. The green button's label is 2.1:1 (see Known issues).

## Code

```html
<div class="cluster" style="--gutter: var(--space-xs)">
  <a class="btn" data-variant="blue" href="/features/">Learn More</a>
  <a class="btn" data-variant="outline" href="/get-started/">Get Started</a>
  <a class="btn" data-variant="green" href="/get-started/">Get Started</a>
  <a class="btn" data-variant="nav" href="/demo/">Demo</a>
</div>
```

```html
<div class="cluster" style="--gutter: var(--space-xs)">
  <a class="btn" data-variant="blue" data-size="medium" href="/download/">Download Disciple.Tools</a>
  <a class="btn" data-variant="blue" data-size="large" href="/download/">Download Disciple.Tools</a>
</div>
```

```html
<div class="surface-blue p-xs cluster" style="--cluster-horizontal-alignment: center">
  <a class="btn" data-variant="green" href="/get-started/">Get Started</a>
</div>
```

```css
.btn {
  display: inline-block;
  padding: var(--space-button-y) var(--space-button-x);
  font-family: var(--font-body);
  font-size: var(--size-button);
  font-weight: var(--weight-strong);
  line-height: var(--leading-heading);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  color: var(--color-white);
  background-color: var(--color-blue);
  border: 0;
  border-radius: var(--radius-sm);
  cursor: pointer;
}
.btn:hover, .btn:focus { color: var(--color-white); text-decoration: underline; }
.btn[data-variant="blue"] { background-color: var(--color-blue); }
.btn[data-variant="green"] { background-color: var(--color-green); }
.btn[data-variant="outline"] {
  color: var(--color-blue);
  background-color: transparent;
  border: 2px solid var(--color-blue);
}
.btn[data-variant="outline"]:hover, .btn[data-variant="outline"]:focus { color: var(--color-blue); }
.btn[data-variant="nav"] {
  padding: var(--space-button-nav) var(--space-nav-x);
  font-size: var(--size-body);
  font-weight: var(--weight-regular);
  background-color: var(--color-green);
  border: 1px solid var(--color-green);
}
.btn[data-variant="nav"]:hover, .btn[data-variant="nav"]:focus { background-color: var(--color-blue); border-color: var(--color-blue); text-decoration: none; }
.btn[data-size="medium"] {
  padding: var(--space-button-md) var(--space-s);
  font-size: var(--size-body);
  border-radius: var(--radius-md);
}
.btn[data-size="large"] {
  padding: var(--space-xs) var(--space-m);
  font-size: var(--size-button-lg);
  border-radius: var(--radius-lg);
}
.btn[data-width="full"] { display: block; width: 100%; box-sizing: border-box; }
```
