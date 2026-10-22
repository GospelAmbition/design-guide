---
title: Input
summary: Text fields, selects and text areas with a large regular-weight label, a light grey border, a faint inner shadow and a grey glow on focus.
uses: [button]
---

From the contact form on the Join the Community page.

## Do

- Put a visible label above every field. Labels are larger than the field text (19.2px against 16px).
- End a form with one `.btn-blue` submit button.

## Don't

- Don't use placeholder text as the label.

## Code

```html
<form class="form">
  <label class="field">
    <span class="field__label">Name</span>
    <input class="input" type="text" name="name" />
  </label>
  <label class="field">
    <span class="field__label">Email</span>
    <input class="input" type="email" name="email" />
  </label>
  <label class="field">
    <span class="field__label">How did you hear about us?</span>
    <select class="input"><option>Choose one</option><option>A friend</option></select>
  </label>
  <label class="field">
    <span class="field__label">Comments</span>
    <textarea class="input" rows="3"></textarea>
  </label>
  <button class="btn btn-blue btn-submit" type="submit">Submit</button>
</form>
```

```css
.form { display: grid; gap: var(--space-xxs); max-width: 32rem; }
.field { display: grid; }
.field__label {
  font-size: var(--size-label);
  font-weight: var(--weight-regular);
  line-height: var(--leading-label);
  color: var(--color-text);
}
.input {
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-field);
  font: inherit;
  line-height: var(--leading-base);
  color: var(--color-text);
  background: var(--color-background);
  border: 1px solid var(--color-grey);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-field);
}
input.input, select.input { height: var(--size-field); }
select.input { box-shadow: none; }
.input:focus { outline: none; box-shadow: var(--shadow-field-focus); }
.btn-submit { justify-self: start; padding: var(--space-submit); font-size: var(--size-body); }
```
