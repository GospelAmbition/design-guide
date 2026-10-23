---
title: Stats section
summary: "A grey swoosh into the wash, then a heading, a one-line intro and a wide rounded panel for a chart or embed."
uses: [container, flow, swoosh]
---

"We are in an extraordinary moment." The section opens with a [swoosh](../../components/swoosh/) and sits on the grey wash (`.bg-wash`). The heading is Bold 56px, the intro Regular 32px, then a full-width panel with 16px corners. In the design the panel is a screenshot of the live "Disciples multiplying disciples" chart (an interactive embed with its own styling); in a build, put the embed there.

## Do

- Lead with the claim, then one short line that names the evidence ("Disciples are multiplying disciples.").
- Keep the chart's own colours to red and charcoal, as the embedded chart does.

## Code

```html
<section class="stats bg-wash">
  <svg class="swoosh" viewBox="0 0 1946 342" preserveAspectRatio="none" aria-hidden="true">
    <path class="swoosh__above" d="M0 0C826.8 35.9 1165.7 75.5 1165.7 75.5 1463.1 110.2 1946 214.4 1946 214.4V0Z"/>
    <path class="swoosh__crescent" d="M0 285.7C0 285.7 1008.6 165.7 1946 342.3V214.4C1946 214.4 1463.1 110.2 1165.7 75.5 826.8 35.9 0 0 0 0Z"/>
  </svg>
  <div class="container flow">
    <h2>We are in an extraordinary moment.</h2>
    <p class="lead">Disciples are multiplying disciples.</p>
    <figure class="stats__panel"><img src="/brands/gospel-ambition/assets/photos/disciples-chart.jpg" alt="Chart: 288.1 million disciples in movements by 2026, from about 10,000 in 1995" /></figure>
  </div>
</section>
```

```css
.stats { position: relative; padding-block: calc(17.6cqi + var(--space-l)) var(--space-xl); }
.stats .flow { --flow-space: var(--space-xs); }
.stats__panel { margin-inline: 0; margin-block-end: 0; --flow-space: var(--space-l); }
.stats__panel img { display: block; inline-size: 100%; border-radius: var(--radius-md); }
```
