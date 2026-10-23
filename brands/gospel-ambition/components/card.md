---
title: Card
summary: The tool card. A white, 25px-rounded panel with a category word, the tool's logo, a short description and a red outline button at the bottom.
uses: [button]
---

Replaces the shared Card. The design's tool grid ("Tools made on our mission field") is six of these on the grey wash: 528×576px at 1920px, no border and no shadow, so they only work on a tinted background (`.bg-wash`). The category is one verb (Multiply, Pray, Steward, Engage, Evaluate) in Poppins Medium 36px, then the tool's logo at 90px tall, a three- to five-line description in Poppins Medium 20px, and the button pinned to the bottom so buttons line up across a row.

For the photo-and-text cards in the call-to-action section, use [CTA card](../cta-card/).

## Do

- Use the tool's own logo file (see the assets page) and keep it 90px tall (`--size-tool-logo`).
- Start the description with a verb: "Trains ordinary believers…", "Equips leaders…", "Helps prayer champions…".
- Put cards on `.bg-wash`, never on white.

## Don't

- Don't add a shadow or border. The design's cards have neither.
- Don't use a filled button in a tool card. It is always `.btn-outline`.

## Code

```html
<div class="bg-wash" style="padding: 1.5rem">
  <article class="card" style="max-width: 33rem">
    <h3 class="card__category">Multiply</h3>
    <img class="card__logo" src="/brands/gospel-ambition/assets/tools/zume-training.png" alt="Zúme Training" />
    <p class="card__text">Trains ordinary believers to make disciples who make disciples. Small groups, self-paced, in 50+ languages. Free. Anytime. Anywhere.</p>
    <a class="btn btn-outline" href="#">Explore Zume.Training <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
  </article>
</div>
```

```css
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xs);
  padding: var(--space-m) var(--space-m) var(--space-l);
  background: var(--color-white);
  border-radius: var(--radius-lg);
}
.card__category { font-size: var(--size-h3); font-weight: var(--weight-medium); }
.card__logo { display: block; block-size: var(--size-tool-logo); inline-size: auto; max-inline-size: 100%; object-fit: contain; object-position: left center; }
.card__text { font-weight: var(--weight-medium); margin-block-end: var(--space-m); }
.card .btn { margin-block-start: auto; align-self: center; inline-size: min(100%, 21em); }
```
