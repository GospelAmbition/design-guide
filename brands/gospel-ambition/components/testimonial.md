---
title: Testimonial
summary: A centred italic quote in large type, a round photo, then the person's name and role.
---

No card, no quote mark icon: the quote itself is the design. Poppins Italic 36px on a 50px line, centred, with typographic quote marks in the text. Under it a 197px round photo (`--size-avatar`), then the name in SemiBold and the role in Regular below it.

## Do

- Use real names and roles of public figures who agreed to be quoted, as the design does ("Clyde Taber, Director of the Visual Story Network").
- Keep quotes to two or three sentences.
- Write the quote marks into the text: “…”.

## Don't

- Don't add a box, border or background behind testimonials.

## Code

```html
<figure class="testimonial" style="max-width: 45rem">
  <blockquote><p>“We have worked with hundreds of organizations around the world. Pound for pound, the Gospel Ambition team is the most fruitful group in frontier missions I know.”</p></blockquote>
  <img class="testimonial__photo" src="/brands/gospel-ambition/assets/photos/clyde-taber.jpg" alt="" />
  <figcaption><strong class="testimonial__name">Clyde Taber</strong> Director of the Visual Story Network</figcaption>
</figure>
```

```css
.testimonial { display: flex; flex-direction: column; align-items: center; gap: var(--space-m); margin: 0; text-align: center; }
.testimonial blockquote { margin: 0; font-size: var(--size-h3); font-style: italic; line-height: var(--leading-quote); }
.testimonial__photo { inline-size: var(--size-avatar); block-size: var(--size-avatar); border-radius: 50%; object-fit: cover; }
.testimonial figcaption { margin-block-start: calc(var(--space-m) * -1 + var(--space-xs)); font-size: var(--size-subtitle); line-height: var(--leading-body); }
.testimonial__name { display: block; font-size: var(--size-h3); font-weight: var(--weight-semibold); }
```
