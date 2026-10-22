---
title: Call-out box
summary: A navy box inside the page column with an uppercase h4 question and one blue-gradient CTA with a chevron.
uses: [button, icon, utilities]
---

"Want to create your own Prayer Relay?" on the Prayer Relays page (`pages/challenges/active-list.php`). The Donate page's "Donate online" box uses the same navy block.

## When to use

- Once on an inner page, to point at the next step after the intro.

## Do

- Use `.btn-cta.cta-blue` so it doesn't compete with an orange CTA on the page.
- Phrase the heading as a question.

## Don't

- Don't make it full-bleed. It sits inside the content column.

## Code

```html
<div class="callout-box brand-bg white">
  <h4>Want to create your own Prayer Relay?</h4>
  <a class="btn btn-cta two-rem has-icon cta-blue px-l" href="#">Login <i class="icon pg-chevron-right two-rem icon-end"></i></a>
</div>
```

```css
.callout-box { width: 100%; max-width: 1140px; box-sizing: border-box; text-align: center; padding: var(--space-s-m) var(--space-s); }
.callout-box h4 { font-weight: var(--weight-regular); }
.callout-box .btn { margin-top: var(--space-s-m); }
.has-icon { position: relative; }
.icon-end { position: absolute; top: 50%; right: 0; transform: translateY(-50%); margin-right: var(--space-xs); }
.callout-box .two-rem.btn { font-size: 1.4rem; }
```
