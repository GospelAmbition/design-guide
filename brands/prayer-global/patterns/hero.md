---
title: Hero
summary: Full-screen dark world map with the giant "Prayer.Global" title, the light-blue tagline, the white logo mark and one orange CTA.
uses: [button, icon, center]
---

The home page opens with this (`section.hero` in `pages/home/body2.php`). Sizes use viewport height, so the whole hero fits one screen. Below 768px the title and tagline switch to fixed sizes.

## When to use

- The top of the home page or a campaign landing page. One per page.

## Do

- Keep to title, tagline, logo mark (`pg-logo-prayer` from the icon font), one `.btn-cta` and the chevron link to the next section.
- Copy `assets/world-map-dark.png` into your site and update the URL.
- Use the transparent home nav bar over it (see Nav bar).

## Don't

- Don't add body copy or a second button.

## Code

```html
<section class="hero dark-bg" style="background-image: url(/brands/prayer-global/assets/world-map-dark.png)">
  <div class="hero__inner">
    <div>
      <h1 class="heading">Prayer.Global</h1>
      <h2 class="sub-heading brand-highlight">Cover the world in prayer</h2>
      <i class="icon pg-logo-prayer white heading__logo" role="img" aria-label="Prayer.Global logo"></i>
    </div>
    <div class="center">
      <a class="btn btn-cta" href="#">Start praying</a>
      <a class="hero__next" href="#" aria-label="Next section"><i class="icon icon-small pg-chevron-down white"></i></a>
    </div>
  </div>
</section>
```

```css
.hero {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 15vh;
  text-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
}
.hero__inner { min-height: 85vh; display: flex; flex-direction: column; justify-content: space-between; padding-inline: var(--space-s); }
.hero .heading {
  font-family: var(--font-heading);
  font-size: var(--size-hero-title);
  color: var(--color-white);
  text-transform: uppercase;
  margin: 4vh 0 0;
}
.hero .sub-heading {
  font-family: var(--font-heading);
  font-size: var(--size-hero-subtitle);
  text-transform: uppercase;
  max-width: 600px;
  margin: 0 auto 6vh;
}
.hero .heading__logo { font-size: var(--size-hero-logo); }
.hero .btn-cta { font-size: var(--size-hero-cta); }
.hero__next { margin-top: var(--space-xs); text-decoration: none; }
.hero .center { margin-block: var(--space-s-m); }
@media (max-width: 767px) {
  .hero .heading { font-size: 62px; }
  .hero .sub-heading { font-size: 32px; }
}
```
