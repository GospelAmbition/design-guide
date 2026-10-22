---
title: Button
summary: Almost-square buttons with bold Roboto labels. Blue for most actions, green for the first step, a blue outline for the second of a pair.
---

The site's Elementor buttons and the theme's `.green-button` (the Demo button in the nav bar), with values as tokens.

## Variants

| Class | Where the site uses it | Example |
| --- | --- | --- |
| `.btn-blue` | Most actions: feature rows, link bands, forms. | Learn More, Download Disciple.Tools |
| `.btn-green` | The first step, on blue or white. | Get Started |
| `.btn-outline` | The second of a pair, on white. 2px blue border. | Get Started (beside Learn More) |
| `.btn-nav` | The Demo button in the nav bar. Regular weight, 1px border, turns blue on hover. | Demo |

Sizes: default (15px, 12px × 24px), `.btn-md` (16px, 15px × 30px, the home page feature rows), `.btn-lg` (18px, 20px × 40px, pricing). Add `.btn-block` to fill the column, as in the link band.

## Do

- Write labels in title case, two or three words: "Get Started", "Explore Hosting".
- Use `<a>` for navigation (nearly every button on the site opens a page) and `<button>` for actions.

## Don't

- Don't put two green buttons side by side.
- Don't expect a colour change on hover. Like the site, the label only underlines; the nav Demo button is the exception.

## Code

```html
<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center">
  <a class="btn btn-blue" href="#">Learn More</a>
  <a class="btn btn-outline" href="#">Get Started</a>
  <a class="btn btn-green" href="#">Get Started</a>
  <a class="btn btn-nav" href="#">Demo</a>
</div>
```

```html
<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center">
  <a class="btn btn-blue btn-md" href="#">Download Disciple.Tools</a>
  <a class="btn btn-blue btn-lg" href="#">Download Disciple.Tools</a>
</div>
```

```html
<div class="bg-blue" style="padding: 1.25rem; display: flex; gap: 1rem; justify-content: center">
  <a class="btn btn-green" href="#">Get Started</a>
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
.btn-blue { background-color: var(--color-blue); }
.btn-green { background-color: var(--color-green); }
.btn-outline {
  color: var(--color-blue);
  background-color: transparent;
  border: 2px solid var(--color-blue);
}
.btn-outline:hover, .btn-outline:focus { color: var(--color-blue); }
.btn-nav {
  padding: var(--space-button-nav) var(--space-nav-x);
  font-size: var(--size-body);
  font-weight: var(--weight-regular);
  background-color: var(--color-green);
  border: 1px solid var(--color-green);
}
.btn-nav:hover, .btn-nav:focus { background-color: var(--color-blue); border-color: var(--color-blue); text-decoration: none; }
.btn-md {
  padding: var(--space-button-md) var(--space-s);
  font-size: var(--size-body);
  border-radius: var(--radius-md);
}
.btn-lg {
  padding: var(--space-xs) var(--space-m);
  font-size: var(--size-button-lg);
  border-radius: var(--radius-lg);
}
.btn-block { display: block; width: 100%; box-sizing: border-box; }
```
