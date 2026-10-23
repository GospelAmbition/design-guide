---
title: Scripture section
summary: "A bold heading with its key words in red, then a passage of Scripture in large italics, indented, with its reference and a grey button."
uses: [container, flow, button, utilities]
---

Follows the first ribbon on the home page: "Jesus has given us our **motive, mission and vision.**", then Matthew 28:17–20. The heading is Bold 56px; the passage is Poppins Italic 32px, indented 140px (`--space-xxl`) from the heading, with the reference in Regular. A grey "More about us" button closes it, on the same indent.

## Do

- Quote Scripture in full sentences and give the reference on its own line.
- Keep the quoted text in italics and the reference upright.

## Code

```html
<section class="scripture py-xl">
  <div class="container flow">
    <h2>Jesus has given us our <span class="text-accent">motive, mission and vision.</span></h2>
    <div class="scripture__body flow">
      <blockquote class="scripture__quote">
        <p>When they saw Jesus, they worshiped Him, though some doubted. Jesus approached them and said, “All authority in heaven and on earth has been given to Me.</p>
        <p>Go, then, and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to obey everything I have commanded. And remember: I am with you always, to the end of the age.”</p>
        <cite>Matthew 28:17–20</cite>
      </blockquote>
      <a class="btn btn-grey" href="#">More about us <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
    </div>
  </div>
</section>
```

```css
.scripture__body { padding-inline-start: var(--space-xxl); }
.scripture__quote { margin: 0; font-size: var(--size-lead); line-height: var(--leading-lead); font-style: italic; max-inline-size: 85rem; }
.scripture__quote p + p, .scripture__quote cite { display: block; margin-block-start: var(--space-s); }
.scripture__quote cite { font-style: normal; }
@container (max-width: 48rem) { .scripture__body { padding-inline-start: var(--space-s); } }
```
