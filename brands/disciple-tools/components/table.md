---
title: Table
summary: A comparison table with bold headers, light borders and striped rows. For pricing and feature comparisons.
---

From the Pricing page ("Cost Comparison", "Features Comparison").

## Do

- Put Disciple.Tools in the first data column and the alternative after it.
- Wrap wide tables in `.table-scroll` so they scroll sideways on phones.

## Code

```html
<div class="table-scroll">
  <table class="table">
    <thead>
      <tr><th>Pricing</th><th>Disciple.Tools</th><th>Other CRMs</th></tr>
    </thead>
    <tbody>
      <tr><td>Contact record limits</td><td>Free unlimited</td><td>Pricing tiers by record count</td></tr>
      <tr><td>Group record limits</td><td>Free unlimited</td><td>Pricing tiers by record count</td></tr>
      <tr><td>User limits</td><td>Free unlimited</td><td>Pricing per user</td></tr>
    </tbody>
  </table>
</div>
```

```css
.table-scroll { overflow-x: auto; }
.table {
  width: 100%;
  border-collapse: collapse;
  line-height: var(--leading-base);
  border-radius: var(--radius-sm);
}
.table th, .table td { padding: var(--space-field) var(--space-xxs) var(--space-xxs); text-align: left; }
.table th { font-weight: var(--weight-strong); }
.table tbody { background: var(--color-background); border: 1px solid var(--color-grey-lighter); }
.table tbody tr:nth-child(even) { background: var(--color-grey-lighter); }
```
