---
title: Movement band
summary: Navy section with a Bebas Kai title and short text on the left, an uppercase list with prayer icons on the right, and two buttons underneath.
uses: [button, icon, container, flow, switcher]
---

"Mobilize a movement of prayer" on the home page (`section.brand-bg.py-xl`), on `.surface-brand`.

## When to use

- Speaking to leaders and groups (churches, conferences, campuses) about running Prayer.Global together.

## Do

- Pair a `primary-light` button with an `outline-light` one underneath.
- Use `ul role="list"` so the list shows icons, not bullets.

## Don't

- Don't use the orange CTA here.

## Code

```html
<section class="surface-brand py-xl">
  <div class="flow container">
    <div class="switcher" style="--threshold: var(--threshold-m); --gutter: var(--space-m)">
      <div class="flow grow-3">
        <h2>Mobilize a movement of prayer</h2>
        <div>Use Prayer.Global to rally your church, conference, or group around a mission to pray a full lap around the world. Every prayer moves us closer to seeing the nations reached!</div>
      </div>
      <ul role="list" class="movement-list uppercase grow-2">
        <li><i class="icon pg-prayer" aria-hidden="true"></i><span>Churches</span></li>
        <li><i class="icon pg-prayer" aria-hidden="true"></i><span>Conferences</span></li>
        <li><i class="icon pg-prayer" aria-hidden="true"></i><span>Prayer events</span></li>
        <li><i class="icon pg-prayer" aria-hidden="true"></i><span>Campus ministries</span></li>
      </ul>
    </div>
    <span class="switcher" style="--gutter: var(--space-xs)">
      <a class="btn uppercase" data-variant="primary-light" href="/challenges/create/">Create prayer relay</a>
      <a class="btn uppercase" data-variant="outline-light" href="/leaders/">Information for leaders</a>
    </span>
  </div>
</section>
```

```css
.movement-list { font-size: var(--size-one-em); display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 0; }
.movement-list li { display: flex; align-items: center; gap: var(--space-xs); }
/* The site's 768px breakpoint, as a container query at --threshold-l. */
@container (width <= 48rem) { .movement-list { font-size: 1em; } }
```
