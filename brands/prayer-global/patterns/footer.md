---
title: Footer
summary: Navy, centred. Credit lines, a single column of links, the copyright.
uses: [layout]
---

From `pages/assets/working-footer.php`. The live footer also repeats the app badges between the credits and the links.

## When to use

- At the bottom of every page.

## Do

- Keep the three credit lines: Gospel Ambition, Disciple.Tools, Prayer.Tools.
- Make "Donate" bold.

## Don't

- Don't add columns or social icons.

## Code

```html
<footer class="brand-bg white text-center one-rem py-5 pg-footer" style="width: 100%">
  <div class="container">
    <p>Made with ♥ by <a href="#">Gospel Ambition</a>.<br />Powered by <a href="#">Disciple.Tools</a>.<br />Part of the <a href="#">Prayer.Tools</a> network.</p>
    <ul role="list" data-tight>
      <li><a class="white" href="#">Contact Us</a></li>
      <li><a class="white fw-bold" href="#">Donate</a></li>
      <li><a class="white" href="#">About</a></li>
      <li><a class="white" href="#">Data Sources</a></li>
      <li><a class="white" href="#">Media &amp; Promotion</a></li>
      <li><a href="#">Privacy</a></li>
    </ul>
    <p class="pt-4">Prayer Global © 2026 Gospel Ambition</p>
  </div>
</footer>
```

```css
.one-rem { font-size: var(--size-footer); }
.pg-footer a { text-decoration: none; color: var(--color-brand-highlight); }
.pg-footer a.white { color: var(--color-white); }
.fw-bold { font-weight: var(--weight-strong); }
.py-5 { padding-top: var(--space-6); padding-bottom: var(--space-6); }
.pt-4 { padding-top: var(--space-4); }
```
