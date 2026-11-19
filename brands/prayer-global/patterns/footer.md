---
title: Footer
summary: Navy, centred. Credit lines, a single column of links, the copyright.
uses: [container]
---

From `pages/assets/working-footer.php`. The live footer also repeats the app badges between the credits and the links.

## When to use

- At the bottom of every page.

## Do

- Keep the three credit lines: Gospel Ambition, Disciple.Tools, Prayer.Tools.
- Make "Donate" bold (`.weight-strong`).
- Put it on `.surface-brand`. Credit links take the surface's light-blue link colour; the page links are white (`.pg-footer__link`).

## Don't

- Don't add columns or social icons.

## Code

```html
<footer class="pg-footer surface-brand text-center py-l">
  <div class="container">
    <p>Made with ♥ by <a href="https://gospelambition.org/">Gospel Ambition</a>.<br />Powered by <a href="https://disciple.tools/">Disciple.Tools</a>.<br />Part of the <a href="https://prayer.tools/">Prayer.Tools</a> network.</p>
    <ul role="list" data-tight>
      <li><a class="pg-footer__link" href="/contact-us/">Contact Us</a></li>
      <li><a class="pg-footer__link weight-strong" href="/donate/">Donate</a></li>
      <li><a class="pg-footer__link" href="/about/">About</a></li>
      <li><a class="pg-footer__link" href="/data-sources/">Data Sources</a></li>
      <li><a class="pg-footer__link" href="/media/">Media &amp; Promotion</a></li>
      <li><a href="/privacy/">Privacy</a></li>
    </ul>
    <p class="pt-s">Prayer Global © 2026 Gospel Ambition</p>
  </div>
</footer>
```

```css
.pg-footer { font-size: var(--size-footer); }
.pg-footer a { text-decoration: none; }
.pg-footer__link { color: var(--color-white); }
```
