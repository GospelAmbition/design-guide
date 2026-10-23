---
title: Story
summary: "One person's story in a narrow column on white, beside a large portrait that fades in from the left, between two swooshes."
uses: [container, flow, swoosh]
---

"Behind the numbers are people Jesus loves." After the charcoal ministries section a swoosh leads into white. A Bold 56px heading over a 660px column of story text in Poppins 20px on a loose 1.7 line (`--leading-story`), ending with the tools that helped and an italic footnote. A large portrait fills the right of the section and fades to white towards the text (`--gradient-fade-story`). An upside-down swoosh closes the section.

## Do

- Tell one person's story in four or five short paragraphs: the need, the first contact, the change, the multiplication, then which tools helped.
- Protect people: use a pseudonym, say so in the footnote, and say when the photo is illustrative (`*Samir is a pseudonym. Photograph is illustrative.`).

## Don't

- Don't put the story text over the photo.

## Code

```html
<section class="story">
  <svg class="swoosh" style="--swoosh-above: var(--color-charcoal)" viewBox="0 0 1946 342" preserveAspectRatio="none" aria-hidden="true">
    <path class="swoosh__above" d="M0 0C826.8 35.9 1165.7 75.5 1165.7 75.5 1463.1 110.2 1946 214.4 1946 214.4V0Z"/>
    <path class="swoosh__crescent" d="M0 285.7C0 285.7 1008.6 165.7 1946 342.3V214.4C1946 214.4 1463.1 110.2 1165.7 75.5 826.8 35.9 0 0 0 0Z"/>
  </svg>
  <div class="story__media"><img src="/brands/gospel-ambition/assets/photos/story.jpg" alt="Portrait of a smiling young man in front of a blue door" /></div>
  <div class="container story__content flow">
    <h2>Behind the numbers are people Jesus loves.</h2>
    <div class="story__text flow">
      <p>Samir* carried deep wounds from childhood abuse. In his youth, a Facebook ad about God’s love, written in his own dialect, caught his attention. A Christian answered his questions and pointed him to the Bible.</p>
      <p>Fear delayed a face-to-face meeting for two years. Eventually, he met local believers, came to faith in Jesus, and was baptized. In Christ, he found freedom to forgive those who had hurt him.</p>
      <p>Prayer mobilization, online outreach, Disciple.Tools, and Zume.Training helped equip the people who served Samir.</p>
      <p class="story__note">*Samir is a pseudonym. Photograph is illustrative.</p>
    </div>
  </div>
  <svg class="swoosh swoosh--end" viewBox="0 0 1946 342" preserveAspectRatio="none" aria-hidden="true">
    <path class="swoosh__above" d="M0 0C826.8 35.9 1165.7 75.5 1165.7 75.5 1463.1 110.2 1946 214.4 1946 214.4V0Z"/>
    <path class="swoosh__crescent" d="M0 285.7C0 285.7 1008.6 165.7 1946 342.3V214.4C1946 214.4 1463.1 110.2 1165.7 75.5 826.8 35.9 0 0 0 0Z"/>
  </svg>
</section>
```

```css
.story { position: relative; overflow: hidden; padding-block: calc(17.6cqi + var(--space-s)) 17.6cqi; }
.story__media { position: absolute; inset: 6cqi 0 6cqi 20%; }
.story__media img { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; object-position: 70% center; }
.story__media::after { content: ""; position: absolute; inset: 0; background-image: var(--gradient-fade-story); }
.story__content { position: relative; }
.story__content > h2 { max-inline-size: 13em; }
.story__text { --flow-space: var(--space-s); max-inline-size: 41rem; line-height: var(--leading-story); }
.story__note { font-style: italic; }
.story .swoosh { z-index: 1; }
@container (max-width: 48rem) {
  .story { display: flex; flex-direction: column; }
  .story__media { position: relative; inset: auto; order: 2; aspect-ratio: 4 / 3; margin-block-start: var(--space-l); }
  .story__media::after { background-image: var(--gradient-fade-top); }
}
```
