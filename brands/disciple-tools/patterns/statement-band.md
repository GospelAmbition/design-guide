---
title: Statement band
summary: A full-width blue band with one centred sentence in white Open Sans 800 and a green Get Started button. The home page's mission statement.
uses: [button, container, flow, utilities]
---

Directly under the home page video: "Disciple.Tools software is designed by disciple makers for disciple makers to increase time you can spend with people." The For Small Teams page uses a green version (`.bg-green`) for a one-line statement, with the heading at semibold (`--weight-semibold`) and no button.

## Do

- One sentence, at most two lines.
- At most one button.

## Code

```html
<section class="statement-band bg-blue py-xs">
  <div class="container flow text-center">
    <h2>Disciple.Tools software is designed by disciple makers for disciple makers to increase time you can spend with people.</h2>
    <a class="btn btn-green" href="#">Get Started</a>
  </div>
</section>
```

```html
<section class="statement-band statement-band--green bg-green py-s">
  <div class="container text-center">
    <h2>If your team is large or growing, Disciple.Tools grows with you.</h2>
  </div>
</section>
```

```css
.statement-band h2 { line-height: var(--leading-base); padding-block: var(--space-xxs); }
.statement-band--green h2 { font-weight: var(--weight-semibold); line-height: var(--leading-heading); }
```
