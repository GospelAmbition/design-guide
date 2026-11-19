---
title: Frame
summary: Crops an image or video to a fixed aspect ratio, such as 16:9 or square, without stretching it.
---

Every Layout's Frame. The frame keeps its ratio at any width and the image inside fills it, cropped rather than squashed.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--frame-ratio` | `16 / 9` | Width / height. Write it unitless: `4 / 3`, `1`. |
| `--frame-position` | `50% 50%` | Which part of the image stays in view when it is cropped (`object-position`). |

## When to use

- Photos in cards, video embeds, a row of images that must line up.

## Do

- Give the image real `alt` text, or `alt=""` if it is decoration. The frame doesn't change what the image means.

## Code

```html
<div class="frame demo-fill" style="--frame-ratio: 4 / 3">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect width='4' height='3' fill='%23888'/%3E%3C/svg%3E" alt="" />
</div>
```

```css
.frame {
  position: relative;
  aspect-ratio: var(--frame-ratio, 16 / 9);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.frame > img,
.frame > video,
.frame > iframe {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  object-position: var(--frame-position, 50% 50%);
}
```
