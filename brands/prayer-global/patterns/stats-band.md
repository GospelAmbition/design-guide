---
title: Stats band
summary: The blue world map beside a Europa statement heading, then three live stats and one orange CTA on a faint grey wash.
uses: [button, stat, layout]
---

"Join thousands of intercessors praying daily for the nations" on the home page.

## When to use

- Once per page, near the end, as proof of momentum before the last call to action.

## Do

- Use real, live numbers. The site loads them from its stats API.
- Write the heading as one sentence in `.h2.font-base`, regular weight.

## Don't

- Don't show the band without live data.

## Code

```html
<section class="flow-medium pt-6" style="width: 100%">
  <div class="switcher container switcher-md align-items-center" data-gutter-4>
    <div><img class="w-90" src="/brands/prayer-global/assets/world-map-blue.png" alt="" /></div>
    <h2 class="font-base h2">Join thousands of intercessors praying daily for the nations.</h2>
  </div>
  <div class="flow-medium grey-gradient pb-6">
    <div class="container switcher switcher-md">
      <div class="stat"><span class="stat__value">32%</span><p class="stat__label">Current lap status</p></div>
      <div class="stat"><span class="stat__value">63</span><p class="stat__label">Laps completed</p></div>
      <div class="stat"><span class="stat__value">33,759</span><p class="stat__label">Total intercessors</p></div>
    </div>
    <a class="btn btn-cta btn-lg center w-fit mx-auto px-4" href="#">Start praying</a>
  </div>
</section>
```

```css
.grey-gradient { background-image: var(--gradient-grey); }
.w-90 { width: 90%; }
.px-4 { padding-left: var(--space-4); padding-right: var(--space-4); }
```
