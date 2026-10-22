---
title: Feature list
summary: A long reference list of features in groups. An uppercase group heading, then rows of a bold blue label, a description and a screenshot.
uses: [container, flow, utilities]
---

The Features page. Each group ("USERS", "CONTACTS", "SECURITY"…) has a heading in Open Sans 700, written in capitals in the copy, and rows of three columns: the feature name as a bold blue link, one to five short paragraphs, and an app screenshot with `--shadow-media`. Rows are separated by a `--color-grey-light` rule. The columns stack below 768px.

Approximate: the site's 1px `--color-grey-light` borders are measured, but the 20px row padding is estimated from screenshots.

## Code

```html
<section class="feature-list">
  <div class="container flow">
    <h3 class="feature-list__group">USERS</h3>
    <div class="feature-list__row">
      <a href="#">Cost per user</a>
      <div>
        <p>Most Contact Management Services or Commercial CRMs charge per user.</p>
        <p>Disciple.Tools has no cost per user. Add your whole team.</p>
      </div>
      <img src="/brands/disciple-tools/assets/collaboration.png" alt="" />
    </div>
    <div class="feature-list__row">
      <a href="#">Multilingual</a>
      <div><p>Disciple.Tools has been written to support left-to-right and right-to-left languages.</p></div>
      <img src="/brands/disciple-tools/assets/collaboration.png" alt="" />
    </div>
  </div>
</section>
```

```css
.feature-list__group {
  font-weight: var(--weight-strong);
  line-height: var(--leading-compact);
  color: var(--color-text);
  font-size: var(--size-h2);
}
.feature-list__row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-xs);
  padding-block: var(--space-xs);
  border-top: 1px solid var(--color-grey-light);
}
.feature-list__row img { box-shadow: var(--shadow-media); }
@media (max-width: 767px) { .feature-list__row { grid-template-columns: 1fr; } }
```
