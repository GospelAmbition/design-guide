---
title: Footer
summary: Four columns of bold blue links under bold headings on light grey, then a blue copyright bar.
uses: [container, switcher]
---

The site footer (theme `footer.php`): Product, Solutions, Resources and Developer columns on the grey-lightest surface (`.surface-grey-lightest`) with 32px above, then the copyright line centred in white on the blue surface (`.surface-blue`) with 48px of padding. The columns stack below 640px (`--threshold-m`). On the home page a strip of partner logos on `--color-grey-lightest` sits just above it (not covered yet).

## Code

```html
<footer>
  <div class="footer__menu surface-grey-lightest">
    <div class="container"><div class="switcher">
      <p><strong>Product</strong><br /><a href="/features/">Features</a><br /><a href="/security/">Security</a><br /><a href="/pricing/">Pricing</a><br /><a href="/demo/">Demo</a></p>
      <p><strong>Solutions</strong><br /><a href="/online-strategies/">For Online Strategies</a><br /><a href="/small-teams/">For Small Teams</a><br /><a href="/multiple-teams/">For Multiple Teams</a></p>
      <p><strong>Resources</strong><br /><a href="/contact/">Contact Us</a><br /><a href="/news/">News</a><br /><a href="/user-docs/">User Docs</a><br /><a href="/plugins/">Plugins</a></p>
      <p><strong>Developer</strong><br /><a href="/developer-docs/">Developer Docs</a><br /><a href="/open-source/">Open Source</a><br /><a href="https://github.com/DiscipleTools/disciple-tools-theme">GitHub Project</a></p>
    </div></div>
  </div>
  <div class="footer__copyright surface-blue">
    <p>© 2026 <a href="/">Disciple.Tools</a>. A project of <a href="https://gospelambition.org/">GospelAmbition.org</a></p>
  </div>
</footer>
```

```css
.footer__menu { padding-top: var(--space-footer); }
.footer__menu .switcher { --threshold: var(--threshold-m); --gutter: var(--space-s); }
.footer__menu p { margin: 0 0 var(--space-paragraph); }
.footer__copyright { padding: var(--space-copyright); text-align: center; }
.footer__copyright p { margin: 0; }
```
