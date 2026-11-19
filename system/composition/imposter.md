---
title: Imposter
summary: Centres one element over another, such as a label over an image or a dialog over the page.
---

Every Layout's Imposter. It sits in the middle of the nearest positioned ancestor (`.container`, `.frame`, or anything with `position: relative`) and never grows bigger than it.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--imposter-margin` | `0px` | Least space between the imposter and the edges of what it covers. |

Add `data-fixed` to centre it on the screen instead, for a dialog.

## Do

- Put it inside a positioned parent. Without one it centres on the whole page.

## Don't

- Don't cover text people need to read with it.

## Code

```html
<div class="frame demo-fill" style="--frame-ratio: 3">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 1'%3E%3Crect width='3' height='1' fill='%23888'/%3E%3C/svg%3E" alt="" />
  <p class="imposter demo-box">Centred over the image</p>
</div>
```

```css
.imposter {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
  max-inline-size: calc(100% - var(--imposter-margin, 0px) * 2);
  max-block-size: calc(100% - var(--imposter-margin, 0px) * 2);
  overflow: auto;
}
.imposter[data-fixed] { position: fixed; }
```
