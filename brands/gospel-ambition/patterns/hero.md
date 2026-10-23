---
title: Hero
summary: "A big italic promise on white, with a photo of people filling the right side and fading in from the left, two buttons, and the red ribbon sweeping across the bottom."
uses: [container, cluster, flow, button, ribbon, chat-button]
---

The top of the home page, under the nav bar. The title is Poppins ExtraBold Italic 66px with the last words in red ("…in this generation, **with you.**"), then a two-line Medium Italic tagline and the two main buttons. The photo covers the right 73% of the section and fades to white over its left half (`--gradient-fade-hero`), so the text stays on white. The red ribbon overlaps the bottom of the photo and carries the first chapter title. The chat button floats at the bottom right.

## Do

- Write the title as one sentence over three short lines, and put the last few words in `.text-accent`.
- Choose a photo of a group of people, faces towards the left, with the subject in the right half.
- Use `.btn-primary` for the main route in and `.btn-light` for the story.

## Don't

- Don't put text over the photo. The left of the section stays white.

## Approximate

- There is no mobile design. Below 48rem the photo moves under the text instead of behind it; this is a proposal.

## Code

```html
<section class="hero">
  <div class="hero__media"><img src="/brands/gospel-ambition/assets/photos/hero.jpg" alt="A group of young men, one looking ahead" /></div>
  <div class="container hero__content flow">
    <h1 class="hero__title">Fulfilling the<br />Great Commission<br />in this generation, <span class="text-accent">with you.</span></h1>
    <p class="hero__tagline">Mission experience. Technical expertise.<br />A shared calling to multiply obedient disciples.</p>
    <div class="cluster hero__actions">
      <a class="btn btn-primary" href="#">Our tools &amp; trainings <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
      <a class="btn btn-light" href="#">Our story <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
    </div>
    <button class="chat-button hero__chat" type="button" aria-label="Chat with us"><span class="chat-button__bubble"></span></button>
  </div>
</section>
<section class="ribbon" style="--ribbon-overlap: -13.4cqi">
  <svg class="ribbon__shape" viewBox="0 0 1924.5 664.5" preserveAspectRatio="none" aria-hidden="true">
    <path class="ribbon__below" d="M1924.5 248.3C1924.5 248.3 1446.7 450.5 1152.7 517.9 817.6 594.7 0 664.5 0 664.5H1924.5Z"/>
    <path d="M0 110C0 110 997.3 342.9 1924.5 0V248.3C1924.5 248.3 1446.7 450.5 1152.7 517.9 817.6 594.7 0 664.5 0 664.5Z"/>
  </svg>
  <div class="container ribbon__content">
    <h2 class="ribbon__title">Understand the calling.</h2>
    <p class="subtitle">Begin with Jesus and the commission He has given His Church.</p>
  </div>
</section>
```

```css
.hero { position: relative; overflow: hidden; }
.hero__media { position: absolute; inset: 0 0 0 27%; }
.hero__media img { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; object-position: 60% 30%; }
.hero__media::after { content: ""; position: absolute; inset: 0; background-image: var(--gradient-fade-hero); }
.hero__content { position: relative; --flow-space: var(--space-xs); padding-block: 12.6cqi; }
.hero__title { font-style: italic; max-inline-size: 15em; }
.hero__tagline { font-weight: var(--weight-medium); font-style: italic; max-inline-size: var(--size-measure); }
.hero__actions { --gutter: var(--space-m); --flow-space: var(--space-xl); }
.hero__chat { position: absolute; inset: auto var(--space-m) 1cqi auto; z-index: 2; }
@container (max-width: 48rem) {
  .hero__media { position: relative; inset: auto; aspect-ratio: 4 / 3; order: 2; }
  .hero__media::after { background-image: var(--gradient-fade-top); }
  .hero { display: flex; flex-direction: column; }
  .hero__content { padding-block: var(--space-l); }
  .hero__chat { position: static; }
}
```
