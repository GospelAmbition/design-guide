---
title: Statement band
summary: A full-width blue band (`.surface-blue`) with one centred sentence in white Open Sans 800 and a green Get Started button. The home page's mission statement.
uses: [button, container, flow]
---

Directly under the home page video: "Disciple.Tools software is designed by disciple makers for disciple makers to increase time you can spend with people." The For Small Teams page uses a green version (`.surface-green` and `data-variant="green"`) for a one-line statement, with the heading at semibold (`--weight-semibold`) and no button. The site sets that heading in white (2.1:1, see Known issues); the green surface makes it near-black.

## Do

- One sentence, at most two lines.
- At most one button.

## Code

```html
<section class="statement-band surface-blue py-xs">
  <div class="container flow text-center">
    <h2>Disciple.Tools software is designed by disciple makers for disciple makers to increase time you can spend with people.</h2>
    <a class="btn" data-variant="green" href="/get-started/">Get Started</a>
  </div>
</section>
```

```html
<section class="statement-band surface-green py-s" data-variant="green">
  <div class="container text-center">
    <h2>If your team is large or growing, Disciple.Tools grows with you.</h2>
  </div>
</section>
```

```css
.statement-band h2 { line-height: var(--leading-base); padding-block: var(--space-xxs); }
.statement-band[data-variant="green"] h2 { font-weight: var(--weight-semibold); line-height: var(--leading-heading); }
```
