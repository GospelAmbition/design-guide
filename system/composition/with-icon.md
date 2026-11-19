---
title: With icon
summary: An icon beside a short piece of text, sized to the text's capitals and lined up with it.
---

Every Layout's Icon, named `with-icon` here because brands have their own `.icon` class for their icon fonts. The icon is as tall as the text's capital letters and sits on the same baseline, at any font size.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--with-icon-gap` | `0.5em` | Space between the icon and the text. |

## Do

- Use it for a link or label with an icon: "Download the app", a phone number, a list of features.
- Hide decorative icons from screen readers with `aria-hidden="true"`. If the icon is the only content, give the link an `aria-label` or a `.visually-hidden` label instead.

## Code

```html
<a class="with-icon" href="/contact/"><svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><circle cx="8" cy="8" r="8" /></svg>Contact us</a>
```

```css
.with-icon {
  display: inline-flex;
  align-items: baseline;
  gap: var(--with-icon-gap, 0.5em);
}
.with-icon > :is(svg, img) {
  flex: none;
  block-size: 0.75em;
  block-size: 1cap;
  inline-size: auto;
}
```
