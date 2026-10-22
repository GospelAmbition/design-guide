---
title: Feature row
summary: Two columns on white. A blue heading, one paragraph and up to two buttons beside a picture of the app. Rows alternate sides down the page.
uses: [button, container, flow, switcher, utilities]
---

The body of the home page ("Work collaboratively to serve spiritual seekers around you", "Always free as your team grows", "Steward the people God has given your ministry", "See a movement of the Gospel"). Each row has 60px above it and none below, and the image swaps sides every row (`.feature-row--reverse`). Columns stack below 768px.

## Do

- Start the heading with what a team gets to do.
- Use a filled button with an outline one (`.btn-blue` + `.btn-outline`), or two filled `.btn-md` buttons.

## Don't

- Don't use more than one paragraph. Link to a page instead.

## Code

```html
<section class="feature-row pt-l">
  <div class="container"><div class="switcher align-items-center">
    <div class="flow">
      <h2>Work collaboratively to serve spiritual seekers around you</h2>
      <p>Disciple.Tools brings clarity to your team through delegating contacts and groups and reducing confusion and redundancy.</p>
      <div class="switcher feature-row__buttons">
        <a class="btn btn-blue" href="#">Learn More</a>
        <a class="btn btn-outline" href="#">Get Started</a>
      </div>
    </div>
    <img src="/brands/disciple-tools/assets/collaboration.png" alt="The Disciple.Tools contact screen for a dispatcher and a multiplier" />
  </div></div>
</section>
```

```html
<section class="feature-row feature-row--reverse pt-l">
  <div class="container"><div class="switcher align-items-center">
    <div class="flow">
      <h2>Always free as your team grows</h2>
      <p>The Disciple.Tools software can be downloaded and used at no cost. Add an unlimited number of users and contacts for free.</p>
      <div class="switcher feature-row__buttons">
        <a class="btn btn-blue btn-md" href="#">Download Disciple.Tools</a>
        <a class="btn btn-blue btn-md" href="#">Explore Hosting</a>
      </div>
    </div>
    <img src="/brands/disciple-tools/assets/collaboration.png" alt="" />
  </div></div>
</section>
```

```css
.feature-row .container > .switcher { --threshold: 48rem; --gutter: var(--space-s); }
.feature-row__buttons { --threshold: 20rem; --gutter: var(--space-xs); }
.feature-row--reverse .container > .switcher { flex-direction: row-reverse; }
.feature-row img { display: block; }
```
