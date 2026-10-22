---
title: Footer
summary: Four columns of bold blue links under bold headings on light grey, then a blue copyright bar.
uses: [container, switcher]
---

The site footer (theme `footer.php`): Product, Solutions, Resources and Developer columns on `--color-grey-lightest` with 32px above, then the copyright line centred in white on `--color-blue` with 48px of padding. On the home page a strip of partner logos on `--color-grey-lightest` sits just above it (not covered yet).

## Code

```html
<footer class="footer">
  <div class="footer__menu">
    <div class="container"><div class="switcher">
      <p><strong>Product</strong><br /><a href="#">Features</a><br /><a href="#">Security</a><br /><a href="#">Pricing</a><br /><a href="#">Demo</a></p>
      <p><strong>Solutions</strong><br /><a href="#">For Online Strategies</a><br /><a href="#">For Small Teams</a><br /><a href="#">For Multiple Teams</a></p>
      <p><strong>Resources</strong><br /><a href="#">Contact Us</a><br /><a href="#">News</a><br /><a href="#">User Docs</a><br /><a href="#">Plugins</a></p>
      <p><strong>Developer</strong><br /><a href="#">Developer Docs</a><br /><a href="#">Open Source</a><br /><a href="#">GitHub Project</a></p>
    </div></div>
  </div>
  <div class="footer__copyright bg-blue">
    <p>© 2026 <a href="#">Disciple.Tools</a>. A project of <a href="#">GospelAmbition.org</a></p>
  </div>
</footer>
```

```css
.footer__menu { padding-top: var(--space-footer); background: var(--color-grey-lightest); }
.footer__menu .switcher { --threshold: 40rem; --gutter: var(--space-s); }
.footer__menu p { margin: 0 0 var(--space-paragraph); }
.footer__copyright { padding: var(--space-copyright); text-align: center; }
.footer__copyright p { margin: 0; color: var(--color-white); }
```
