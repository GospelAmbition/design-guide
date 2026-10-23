---
title: CTA card
summary: A white call-to-action card with a red Bebas eyebrow, a bold title, one line of text and a red button, and a photo filling its right side.
uses: [button]
---

Two of these sit side by side in the "Let's go." section, over the darkened photo: 812×433px at 1920px, 16px corners, a soft shadow (`--shadow-card`) and a 1px `--color-grey-dark` outline. The text column is about 54% of the card; the photo takes the rest, and the card's rounded corners clip it. Below about 40rem the photo moves on top.

## Do

- Write the eyebrow as the job ("Equip your ministry", "Pay it forward") and the title as the promise ("Find the right tools.", "Help equip more disciple-makers.").
- End titles with a full stop, as the design does.
- Use a photo of people, ideally in a group or in conversation.

## Don't

- Don't put more than one button in a CTA card.

## Code

```html
<div class="bg-charcoal" style="padding: 1.5rem">
  <article class="cta-card" style="max-width: 51rem">
    <div class="cta-card__body">
      <span class="eyebrow">Equip your ministry</span>
      <h3>Find the right tools.</h3>
      <p>Answer a few simple questions and discover free tools and training that fit the work God has given you.</p>
      <a class="btn btn-primary" href="#">Find my tools <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
    </div>
    <img class="cta-card__image" src="/brands/gospel-ambition/assets/photos/cta-tools.jpg" alt="Young men looking at a tablet together" />
  </article>
</div>
```

```css
.cta-card {
  display: flex;
  flex-wrap: wrap-reverse;
  overflow: hidden;
  color: var(--color-text);
  background: var(--color-white);
  border: 1px solid var(--color-grey-dark);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}
.cta-card__body {
  flex: 54 1 18rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xs);
  padding: var(--space-m);
}
.cta-card__body .eyebrow { margin-block-end: calc(var(--space-xxs) - var(--space-xs)); }
.cta-card__body .btn { margin-block-start: var(--space-xs); }
.cta-card__image {
  flex: 46 1 16rem;
  min-inline-size: 0;
  min-block-size: 14rem;
  object-fit: cover;
}
```
