---
title: Donate band
summary: Light-blue band. Photo on the left; statement heading, short copy, a white Donate button and the Gospel Ambition logo on the right.
uses: [button, center, cluster, container, flow, switcher, utilities]
---

"Gospel Ambition tools and trainings are 100% free, thanks to people like you." on the home page (`section.brand-lightest-bg.white`).

## When to use

- Once, near the bottom of the home page.

## Do

- Credit Gospel Ambition with `assets/gospel-ambition-white.png` at 135px wide.
- Use `.btn-white` for Donate.

## Don't

- Don't use the orange CTA here. Praying stays the main action.

## Code

```html
<section class="brand-lightest-bg white" style="width: 100%">
  <div class="switcher container" data-no-gutter>
    <div class="grow-3 donate-band__photo" style="background-image: url(/brands/prayer-global/assets/photos/panel-donate.jpg)"></div>
    <div class="flow-medium py-5 px-4 grow-4">
      <h2 class="font-base h2">Gospel Ambition tools and trainings are 100% free, thanks to people like you.</h2>
      <p>We love equipping the global Church with free tools to mobilize prayer and make disciples. You can help expand this mission by becoming a monthly giver or making a one-time gift.</p>
      <div class="cluster donate-band__actions">
        <a class="btn btn-white uppercase center" href="#">Donate</a>
        <div class="donate-band__logo"><img src="/brands/prayer-global/assets/gospel-ambition-white.png" alt="Gospel Ambition" /></div>
      </div>
    </div>
  </div>
</section>
```

```css
.donate-band__photo { background-size: cover; background-position: center; min-height: 15rem; }
.donate-band__actions { justify-content: space-between; }
.donate-band__logo { width: 135px; }
.donate-band__logo img { width: 100%; display: block; }
```
