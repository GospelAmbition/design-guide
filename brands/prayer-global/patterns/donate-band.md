---
title: Donate band
summary: Blue band. Photo on the left; statement heading, short copy, a white Donate button and the Gospel Ambition logo on the right.
uses: [button, container, flow, repel, switcher]
---

"Gospel Ambition tools and trainings are 100% free, thanks to people like you." on the home page (`section.brand-lightest-bg.white`). It sits on `.surface-blue`, which is a shade darker than the site's band so the white text passes contrast.

## When to use

- Once, near the bottom of the home page.

## Do

- Credit Gospel Ambition with `assets/gospel-ambition-white.png` at 135px wide.
- Use the `white` button for Donate.
- Set the photo with the `--donate-photo` setting, so the image stays content and out of the CSS.

## Don't

- Don't use the orange CTA here. Praying stays the main action.

## Code

```html
<section class="surface-blue">
  <div class="container" style="--gutter: 0">
    <div class="switcher" style="--gutter: var(--space-xs)">
      <div class="grow-3 donate-band__photo" style="--donate-photo: url(/brands/prayer-global/assets/photos/panel-donate.jpg)"></div>
      <div class="flow py-l px-s grow-4">
        <h2 class="font-body h2">Gospel Ambition tools and trainings are 100% free, thanks to people like you.</h2>
        <p>We love equipping the global Church with free tools to mobilize prayer and make disciples. You can help expand this mission by becoming a monthly giver or making a one-time gift.</p>
        <div class="repel" style="--gutter: var(--space-xs)">
          <a class="btn uppercase" data-variant="white" href="/donate/">Donate</a>
          <div class="donate-band__logo"><img src="/brands/prayer-global/assets/gospel-ambition-white.png" alt="Gospel Ambition" /></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.donate-band__photo { background-image: var(--donate-photo, none); background-size: cover; background-position: center; min-height: 15rem; }
.donate-band__logo { width: 135px; }
.donate-band__logo img { width: 100%; display: block; }
```
