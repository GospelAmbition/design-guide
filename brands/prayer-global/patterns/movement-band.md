---
title: Movement band
summary: Navy section with a Bebas Kai title and short text on the left, an uppercase list with prayer icons on the right, and two buttons underneath.
uses: [button, icon, layout]
---

"Mobilize a movement of prayer" on the home page (`section.brand-bg.py-6`).

## When to use

- Speaking to leaders and groups (churches, conferences, campuses) about running Prayer.Global together.

## Do

- Pair `.btn-primary-light` with `.btn-outline-light` underneath.
- Use `ul role="list"` so the list shows icons, not bullets.

## Don't

- Don't use the orange CTA here.

## Code

```html
<section class="brand-bg py-6" style="width: 100%">
  <div class="flow-medium container white" data-gutter-4>
    <div class="switcher switcher-md">
      <div class="flow-medium grow-3">
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
    <span class="switcher">
      <a class="btn btn-primary-light uppercase" href="#">Create prayer relay</a>
      <a class="btn btn-outline-light uppercase" href="#">Information for leaders</a>
    </span>
  </div>
</section>
```

```css
.movement-list { font-size: var(--size-one-em); display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 0; }
.movement-list li { display: flex; align-items: center; gap: var(--space-3); }
@media (max-width: 768px) { .movement-list { font-size: 1em; } }
```
