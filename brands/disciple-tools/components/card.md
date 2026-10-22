---
title: Card
summary: The testimonial card. White, 7px corners, a soft shadow, with a role, a region, a quote icon and the quote.
uses: [icon]
---

The only card on disciple.tools: the testimonials on the home page. Four sit in a row, then stack below 768px, where their padding drops from 30px to 25px.

## When to use

- A short quote from a user, named by role and region.

## Don't

- Don't use it as a generic content box. The site has no other cards.
- Don't name the person if that could put them at risk.

## Code

```html
<figure class="card" style="max-width: 265px">
  <figcaption class="card__head">
    <h5>A field worker</h5>
    <p>in the Middle East</p>
  </figcaption>
  <i class="fas fa-quote-left icon-quote" aria-hidden="true"></i>
  <blockquote>
    <p>Our team is made up of a small group of nationals and expats. Disciple.Tools gives us an easy and secure way to track conversations.</p>
  </blockquote>
</figure>
```

```css
.card {
  box-sizing: border-box;
  margin: 0;
  padding: var(--space-s);
  background: var(--color-background);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
}
.card > * + * { margin-top: var(--space-xs); }
.card__head { text-align: center; }
.card__head p { margin: 0; }
.card blockquote { margin: 0; }
@media (max-width: 767px) { .card { padding: var(--space-band); } }
```
