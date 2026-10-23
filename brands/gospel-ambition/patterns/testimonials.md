---
title: Testimonials
summary: "Two testimonials side by side on white, the second set lower than the first."
uses: [container, switcher, testimonial, utilities]
---

Two [testimonials](../../components/testimonial/) share the row. The design staggers them: the right one starts about 160px lower, which keeps two large italic quotes from reading as a table. They stack below about 50rem.

## Do

- Use two testimonials, not more. Pick people the audience will recognise as practitioners.

## Code

```html
<section class="testimonials py-xl">
  <div class="container"><div class="switcher">
    <figure class="testimonial">
      <blockquote><p>“We have worked with hundreds of organizations around the world. Pound for pound, the Gospel Ambition team is the most fruitful group in frontier missions I know.”</p></blockquote>
      <img class="testimonial__photo" src="/brands/gospel-ambition/assets/photos/clyde-taber.jpg" alt="" />
      <figcaption><strong class="testimonial__name">Clyde Taber</strong> Director of the Visual Story Network</figcaption>
    </figure>
    <figure class="testimonial">
      <blockquote><p>“Gospel Ambition provides influential global leadership in terms of the use of technology to advance the Kingdom of God, including in some of the most challenging environments on the planet.”</p></blockquote>
      <img class="testimonial__photo" src="/brands/gospel-ambition/assets/photos/curtis-sergeant.jpg" alt="" />
      <figcaption><strong class="testimonial__name">Curtis Sergeant</strong> Missionary Church Planter</figcaption>
    </figure>
  </div></div>
</section>
```

```css
.testimonials .switcher { --threshold: 50rem; --gutter: calc(var(--space-xxl) + var(--space-l)); align-items: flex-start; }
@container (min-width: 64rem) {
  .testimonials .switcher > :nth-child(2) { margin-block-start: calc(var(--space-xl) + var(--space-l)); }
}
```
