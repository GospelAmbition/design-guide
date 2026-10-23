---
title: Footer
summary: "The tagline again in bold, the logo centred over a faint world map, then a thin bar with the copyright on the left and uppercase links on the right."
uses: [container, repel, cluster]
---

The page ends where it started: "Fulfilling the Great Commission in this generation, **with you.**" in Poppins Bold 44px (`.tagline`), centred, with the last words in red. Below it the logo (the round badge plus the wordmark, 128px tall) sits over a world map in pale grey at half opacity (`assets/world-map.svg`). A white bar closes the page with "© 2026 Gospel Ambition. All rights reserved." in Medium 18px and four SemiBold 18px uppercase links about 64px apart, all in charcoal.

## Do

- Keep the footer links to the four in the design (Free resources, Contact, Give, Privacy) unless the site needs more.
- Update the year.

## Code

```html
<footer class="footer">
  <p class="tagline text-center container">Fulfilling the Great Commission in this generation, <span class="text-accent">with you.</span></p>
  <div class="footer__brand">
    <a class="footer__logo" href="#"><img src="/brands/gospel-ambition/assets/logo-badge.png" alt="" /><img src="/brands/gospel-ambition/assets/logo-wordmark.png" alt="Gospel Ambition" /></a>
  </div>
  <div class="container repel footer__bar">
    <p>© 2026 Gospel Ambition. All rights reserved.</p>
    <nav class="cluster footer__links" aria-label="Footer">
      <a href="#">Free resources</a>
      <a href="#">Contact</a>
      <a href="#">Give</a>
      <a href="#">Privacy</a>
    </nav>
  </div>
</footer>
```

```css
.footer { padding-block-start: calc(var(--space-xl) * 3); background: var(--color-white); }
.footer__brand {
  display: grid;
  place-items: center;
  min-block-size: 30cqi;
  margin-block-start: var(--space-xs);
  background: url("/brands/gospel-ambition/assets/world-map.svg") center top / 104% auto no-repeat;
}
.footer__logo { display: flex; align-items: center; }
.footer__logo img { display: block; block-size: clamp(4rem, 6.7cqi, 8rem); inline-size: auto; }
.footer__logo img + img { margin-inline-start: -0.5%; }
.footer__bar { padding-block: var(--space-l) var(--space-m); font-size: var(--size-small); }
.footer__bar p { font-weight: var(--weight-medium); }
.footer__links { --gutter: var(--space-xs) var(--space-l); }
.footer__links a { font-weight: var(--weight-semibold); text-transform: uppercase; text-decoration: none; color: var(--color-text); }
.footer__links a:hover { color: var(--color-red); }
```
