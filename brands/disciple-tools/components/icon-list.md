---
title: Icon list
summary: A list with a small check-circle icon before each item instead of a bullet. For short lists of what a host or plan includes.
uses: [icon]
---

From the Hosting page, where each host lists what it offers.

## Do

- Keep items to one line each.

## Code

```html
<ul class="icon-list" role="list">
  <li><i class="far fa-check-circle icon-check" aria-hidden="true"></i><span>Managed WordPress hosting</span></li>
  <li><i class="far fa-check-circle icon-check" aria-hidden="true"></i><span>Daily backups</span></li>
  <li><i class="far fa-check-circle icon-check" aria-hidden="true"></i><span>Disciple.Tools pre-installed</span></li>
</ul>
```

```css
.icon-list { list-style: none; margin: 0; padding: 0; line-height: var(--leading-body); }
.icon-list li { display: flex; align-items: baseline; gap: var(--space-xxxs); }
```
