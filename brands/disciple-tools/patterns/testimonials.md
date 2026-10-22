---
title: Testimonials
summary: A green stripe, then a row of up to four testimonial cards on white.
uses: [card, icon, container, switcher, utilities]
---

On the home page, after the feature rows. A 30px green stripe (the section's top border) marks the change from product to people, then four [cards](../../components/card/) sit in a row. They stack below 768px.

## Do

- Name people by role and region ("A field worker in the Middle East", "A Team Leader using Disciple.Tools").
- Keep quotes to a short paragraph. Cards in a row stretch to the tallest.

## Code

```html
<section class="testimonials py-s">
  <div class="container"><div class="switcher">
    <figure class="card">
      <figcaption class="card__head"><h5>A field worker</h5><p>in the Middle East</p></figcaption>
      <i class="fas fa-quote-left icon-quote" aria-hidden="true"></i>
      <blockquote><p>Our team is made up of a small group of nationals and expats. Disciple.Tools gives us an easy and secure way to track conversations.</p></blockquote>
    </figure>
    <figure class="card">
      <figcaption class="card__head"><h5>A Team Leader</h5><p>using Disciple.Tools</p></figcaption>
      <i class="fas fa-quote-left icon-quote" aria-hidden="true"></i>
      <blockquote><p>Disciple.Tools helped organize our team, streamline our communication and follow up with every contact.</p></blockquote>
    </figure>
  </div></div>
</section>
```

```css
.testimonials { border-top: var(--space-s) solid var(--color-green); }
.testimonials .container > .switcher { --threshold: 48rem; --gutter: var(--space-xs); }
```
