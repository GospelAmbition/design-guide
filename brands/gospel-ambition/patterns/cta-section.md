---
title: CTA section
summary: "'Let's go.' over a darkened photo: a huge display line with a red last word, two call-to-action cards, then a 'stay connected' row with an outline button."
uses: [container, flow, switcher, repel, swoosh, cta-card, button]
---

The close of the home page. A swoosh leads from white into a full-width photo darkened with charcoal at 78% (`--gradient-overlay`). "Let's **go.**" is Poppins ExtraBold 80px (`.display`) in white with "go." in red, then a Medium 36px line and one Regular 20px line. Two [CTA cards](../../components/cta-card/) sit side by side, 16px apart. Under them, a row: Bebas eyebrow and white Bold 36px title on the left, a short line in the middle, and a white outline button on the right.

## Do

- Keep the display line to two words.
- Give each card a different audience: the people who need tools, and the people who can help others get them.

## Don't

- Don't use a bright photo. The overlay assumes a busy, mid-tone picture of people.

## Code

```html
<section class="cta-section">
  <svg class="swoosh" viewBox="0 0 1946 342" preserveAspectRatio="none" aria-hidden="true">
    <path class="swoosh__above" d="M0 0C826.8 35.9 1165.7 75.5 1165.7 75.5 1463.1 110.2 1946 214.4 1946 214.4V0Z"/>
    <path class="swoosh__crescent" d="M0 285.7C0 285.7 1008.6 165.7 1946 342.3V214.4C1946 214.4 1463.1 110.2 1165.7 75.5 826.8 35.9 0 0 0 0Z"/>
  </svg>
  <div class="container flow">
    <p class="display">Let’s <span class="text-accent">go.</span></p>
    <p class="cta-section__sub">There’s a place for you in the mission.</p>
    <p>Bring these resources into your ministry and help others discover them.</p>
    <div class="switcher cta-section__cards">
      <article class="cta-card">
        <div class="cta-card__body">
          <span class="eyebrow">Equip your ministry</span>
          <h3>Find the right tools.</h3>
          <p>Answer a few simple questions and discover free tools and training that fit the work God has given you.</p>
          <a class="btn btn-primary" href="#">Find my tools <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
        </div>
        <img class="cta-card__image" src="/brands/gospel-ambition/assets/photos/cta-tools.jpg" alt="Young men looking at a tablet together" />
      </article>
      <article class="cta-card">
        <div class="cta-card__body">
          <span class="eyebrow">Pay it forward</span>
          <h3>Help equip more disciple-makers.</h3>
          <p>Position us to make the Church aware of the resources that would help them multiply obedient disciples.</p>
          <a class="btn btn-primary" href="#">Partner with us <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
        </div>
        <img class="cta-card__image" src="/brands/gospel-ambition/assets/photos/cta-partner.jpg" alt="An older man and a young man talking outdoors" />
      </article>
    </div>
    <div class="repel cta-section__connect">
      <div><span class="eyebrow">Stay connected</span><h3>See what God is doing.</h3></div>
      <p class="cta-section__connect-text">Get stories, updates and opportunities to participate in what God is doing around the world.</p>
      <a class="btn btn-outline-light" href="#">Receive updates <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
    </div>
  </div>
</section>
```

```css
.cta-section {
  position: relative;
  padding-block: calc(17.6cqi + var(--space-l)) var(--space-xl);
  color: var(--color-white);
  background: var(--gradient-overlay), url("/brands/gospel-ambition/assets/photos/cta-background.jpg") center / cover;
}
.cta-section .flow { --flow-space: var(--space-xs); }
.cta-section .display { color: var(--color-white); }
.cta-section__sub { font-size: var(--size-h3); font-weight: var(--weight-medium); line-height: var(--leading-heading); }
.cta-section__cards { --threshold: 60rem; --gutter: var(--space-xs); --flow-space: var(--space-s); }
.cta-section__connect { --flow-space: var(--space-l); --gutter: var(--space-m); }
.cta-section__connect .eyebrow { margin-block-end: var(--space-xxs); }
.cta-section__connect-text { max-inline-size: 32rem; }
```
