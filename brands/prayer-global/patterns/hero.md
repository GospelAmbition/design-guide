---
title: Hero
summary: Full-screen dark world map with the giant "Prayer.Global" title, the light-blue tagline, the white logo mark and one orange CTA.
uses: [button, icon, center]
---

The home page opens with this (`section.hero` in `pages/home/body2.php`). Sizes use viewport height, so the whole hero fits one screen. Below `--threshold-l` (48rem, the site's 768px) the title and tagline switch to fixed sizes.

## When to use

- The top of the home page or a campaign landing page. One per page.

## Do

- Keep to title, tagline, logo mark (`pg-logo-prayer` from the icon font), one `cta` button and the chevron link to the next section.
- Put it on `.surface-dark`. The tagline takes the surface's light-blue `accent`.
- Set the background with the `--hero-image` setting on the section. Copy `assets/world-map-dark.png` into your site and update the URL.
- Use the transparent home nav bar over it (see Nav bar).

## Don't

- Don't add body copy or a second button.

## Code

```html
<section class="hero surface-dark" style="--hero-image: url(/brands/prayer-global/assets/world-map-dark.png)">
  <div class="hero__inner">
    <div>
      <h1 class="heading">Prayer.Global</h1>
      <h2 class="sub-heading">Cover the world in prayer</h2>
      <i class="icon pg-logo-prayer heading__logo" role="img" aria-label="Prayer.Global logo"></i>
    </div>
    <div class="center" data-intrinsic>
      <a class="btn" data-variant="cta" href="/newest/lap/">Start praying</a>
      <a class="hero__next" href="#intro" aria-label="Next section"><i class="icon pg-chevron-down" data-size="small" aria-hidden="true"></i></a>
    </div>
  </div>
</section>
```

```css
.hero { position: relative; width: 100%; text-align: center; }
/* The map sits on the inner block: the section's surface sets the whole background, image included. */
.hero__inner {
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 15vh;
  padding-inline: var(--space-xs);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: var(--hero-image, none);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
}
.hero .heading {
  font-family: var(--font-heading);
  font-size: var(--size-hero-title);
  text-transform: uppercase;
  margin: 4vh 0 0;
}
.hero .sub-heading {
  font-family: var(--font-heading);
  font-size: var(--size-hero-subtitle);
  color: var(--surface-dark-accent);
  text-transform: uppercase;
  max-width: 600px;
  margin: 0 auto 6vh;
}
.hero .heading__logo { font-size: var(--size-hero-logo); }
.hero .btn { font-size: var(--size-hero-cta); }
.hero__next { margin-top: var(--space-xxs); text-decoration: none; color: inherit; }
.hero .center { margin-block: var(--space-s); }
/* The site's 768px breakpoint, as a container query at --threshold-l. */
@container (width < 48rem) {
  .hero .heading { font-size: 62px; }
  .hero .sub-heading { font-size: 32px; }
}
```
