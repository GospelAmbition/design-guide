---
title: Icon grid
summary: Up to four columns on light grey. A big green icon, a centred blue heading and a short paragraph in each.
uses: [icon, container, flow, switcher, utilities]
---

"Top Challenges" on the For Small Teams page: Manpower, Time, DNA, Simplicity. Columns stack below 768px. The paragraphs in the example are placeholder copy.

## Do

- Use one-word headings.
- Keep each paragraph to two or three sentences.

## Code

```html
<section class="icon-grid bg-grey-light py-s">
  <div class="container"><div class="switcher">
    <div class="flow text-center">
      <i class="fas fa-people-carry icon-feature" aria-hidden="true"></i>
      <h2>Manpower</h2>
      <p>Small teams can't afford to lose track of the people they serve.</p>
    </div>
    <div class="flow text-center">
      <i class="far fa-clock icon-feature" aria-hidden="true"></i>
      <h2>Time</h2>
      <p>Spend time with people, not spreadsheets.</p>
    </div>
    <div class="flow text-center">
      <i class="fas fa-dna icon-feature" aria-hidden="true"></i>
      <h2>DNA</h2>
      <p>Build reproducible habits into the team from day one.</p>
    </div>
  </div></div>
</section>
```

```css
.icon-grid .container > .switcher { --threshold: 48rem; --gutter: var(--space-xs); }
.icon-grid p { text-align: left; }
```
