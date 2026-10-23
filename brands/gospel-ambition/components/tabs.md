---
title: Tabs
summary: Text-only tabs on charcoal. The active tab is SemiBold white, the others Regular white at 80%.
---

Above the ministries heading the design offers two views, "Ministries" and "Recent Activity". There is no underline, pill or box. Only weight and opacity show which tab is active. Both are 26px (`--size-subtitle`), about 36px apart.

Only the visual state is designed. Wire it up with the usual tab roles (`role="tablist"`, `role="tab"`, `aria-selected`) and panels.

## Do

- Use tabs only on `.bg-charcoal`, and only to switch between two or three views of the same content.

## Approximate

- Hover and focus are proposals: inactive tabs go to full white on hover, and focus gets a white outline.

## Code

```html
<div class="bg-charcoal" style="padding: 1.5rem">
  <div class="tabs" role="tablist" aria-label="Who uses Gospel Ambition">
    <button class="tabs__tab" role="tab" aria-selected="true">Ministries</button>
    <button class="tabs__tab" role="tab" aria-selected="false">Recent Activity</button>
  </div>
</div>
```

```css
.tabs { display: flex; flex-wrap: wrap; gap: var(--space-xs) calc(var(--space-s) + var(--space-xxs)); }
.tabs__tab {
  padding: 0;
  font: var(--weight-regular) var(--size-subtitle) / var(--leading-body) var(--font-body);
  color: var(--color-white);
  background: none;
  border: 0;
  opacity: 0.8;
  cursor: pointer;
}
.tabs__tab[aria-selected="true"] { font-weight: var(--weight-semibold); opacity: 1; }
.tabs__tab:hover { opacity: 1; }
.tabs__tab:focus-visible { outline: 2px solid var(--color-white); outline-offset: 4px; }
```
