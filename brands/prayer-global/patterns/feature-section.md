---
title: Feature section
summary: White section. Clipped image panel on the left, Bebas Kai title with icon, short copy and one button on the right.
uses: [button, icon, image-panel, center, container, flow, switcher, switcher-variants, utilities]
---

"Prayer fuel" and "My prayer activity" on the home page. It's the [Feature band](../feature-band/) on white, with the columns reversed (`.switcher-reverse`).

## When to use

- Introducing one feature with a picture, alternating with feature bands.

## Do

- Use `.clip-rounded-end` here: the curve faces the text.
- Keep copy to one short paragraph or a list of up to four items.

## Don't

- Don't put more than one button in the section.

## Code

```html
<section class="py-xl" style="width: 100%">
  <div class="container switcher switcher-md switcher-reverse align-items-center">
    <div class="flow-small">
      <h2 class="text-center">Prayer fuel <i class="icon icon-small pg-pray-hands-light" aria-hidden="true"></i></h2>
      <p>We'll give you location specific prayer prompts, scripture and images to help guide your prayers for each of the 4,770 states.</p>
      <a class="btn btn-cta btn-lg center w-fit mx-auto px-s-m" href="#">Start praying</a>
    </div>
    <div class="drop-shadow"><img class="clip-rounded-end" src="/brands/prayer-global/assets/photos/panel-prayer-fuel.jpg" alt="" /></div>
  </div>
</section>
```

