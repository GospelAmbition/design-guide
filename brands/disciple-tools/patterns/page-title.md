---
title: Page title
summary: The page's name, centred, in blue Roboto 800, at the top of every marketing page.
uses: [container]
---

Every marketing page except the home page opens with its name ("Features", "Pricing", "Hosting", "For Small Teams") and nothing else. The tall line height (2.6) gives the space above and below; the section has no padding of its own.

## Code

```html
<section class="page-title">
  <div class="container">
    <h1>Pricing</h1>
  </div>
</section>
```

```css
.page-title { padding-block: var(--space-xxs); }
```
