---
title: Tools grid
summary: "Two-line heading, intro and a bold statement on the grey wash, then the tool cards three to a row and a plain text link to more tools."
uses: [container, flow, grid, card, button, utilities]
---

"Tools made on our mission field. Useful on yours." The section continues the wash under the ribbon. Heading Bold 56px, intro Regular 32px, a SemiBold 36px statement ("All free. Most multilingual. Some available in 50+ languages."), then six [tool cards](../../components/card/) in a [grid](../../composition/grid/), 28px apart. A centred, underlined Regular 26px link points to the smaller tools.

## Do

- Order cards by the journey: Multiply, Pray, Pray, Steward, Engage, Evaluate in the design.
- Give every tool card the same parts in the same order, so rows line up.

## Code

```html
<section class="tools bg-wash">
  <div class="container flow">
    <h2>Tools made on our mission field.<br />Useful on yours.</h2>
    <p class="lead">Conceived on the mission field and delivered in difficult places.</p>
    <p class="statement">All free. Most multilingual. Some available in 50+ languages.</p>
    <div class="grid tools__grid">
      <article class="card">
        <h3 class="card__category">Multiply</h3>
        <img class="card__logo" src="/brands/gospel-ambition/assets/tools/zume-training.png" alt="Zúme Training" />
        <p class="card__text">Trains ordinary believers to make disciples who make disciples. Small groups, self-paced, in 50+ languages. Free. Anytime. Anywhere.</p>
        <a class="btn btn-outline" href="#">Explore Zume.Training <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
      </article>
      <article class="card">
        <h3 class="card__category">Pray</h3>
        <img class="card__logo" src="/brands/gospel-ambition/assets/tools/prayer-global.png" alt="Prayer.Global" />
        <p class="card__text">Equips leaders to mobilize their church in informed, Scripture-guided prayer for real peoples and places. Builds the kind of prayer community that can cover the world and keep going.</p>
        <a class="btn btn-outline" href="#">Start praying <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
      </article>
      <article class="card">
        <h3 class="card__category">Pray</h3>
        <img class="card__logo" src="/brands/gospel-ambition/assets/tools/prayer-tools.png" alt="Prayer.Tools" />
        <p class="card__text">Helps prayer champions launch, equip, and sustain focused multilingual prayer campaigns, while giving intercessors a simple campaign page and one mobile app through which to pray.</p>
        <a class="btn btn-outline" href="#">Mobilize prayer <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
      </article>
      <article class="card">
        <h3 class="card__category">Steward</h3>
        <img class="card__logo" src="/brands/gospel-ambition/assets/tools/disciple-tools.png" alt="Disciple.Tools" />
        <p class="card__text">Gives teams a secure way to track seekers, disciples, groups, and churches across generations. Free and open-source. Less administration. More time with people.</p>
        <a class="btn btn-outline" href="#">Explore Disciple.Tools <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
      </article>
      <article class="card">
        <h3 class="card__category">Engage</h3>
        <img class="card__logo" src="/brands/gospel-ambition/assets/tools/kingdom-training.png" alt="Kingdom Training" />
        <p class="card__text">Prepares disciple-makers to use media, advertising, and AI to find spiritually open people and bring them into face-to-face disciple-making relationships.</p>
        <a class="btn btn-outline" href="#">Equip your ministry <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
      </article>
      <article class="card">
        <h3 class="card__category">Evaluate</h3>
        <img class="card__logo" src="/brands/gospel-ambition/assets/tools/great-commission-benchmark.png" alt="Great Commission Benchmark" />
        <p class="card__text">Tests AI models for faithful, practical Great Commission usefulness. Pinpoints where a model supports the work and where it refuses, softens, or distorts it.</p>
        <a class="btn btn-outline" href="#">Explore the benchmark <svg class="btn__icon" viewBox="1 3.49 26.42 16.99" aria-hidden="true"><path d="M1 11.99c0-.52.42-.95.94-.95H24.2l-5.94-5.93a.95.95 0 0 1 0-1.34.94.94 0 0 1 1.33 0l7.55 7.55a.95.95 0 0 1 .28.67.95.95 0 0 1-.28.67l-7.55 7.55a.94.94 0 0 1-1.33 0 .95.95 0 0 1 0-1.34l5.94-5.94H1.94A.94.94 0 0 1 1 11.99Z"/></svg></a>
      </article>
    </div>
    <p class="tools__more text-center"><a href="#">More tools: the Multiplication Widget and Movement Mapper</a></p>
  </div>
</section>
```

```css
.tools { padding-block: var(--space-xl) calc(var(--space-xl) * 2); }
.tools .flow { --flow-space: var(--space-xs); }
.tools .statement { --flow-space: var(--space-l); }
.tools__grid { --grid-min: 28rem; --flow-space: var(--space-s); }
.tools__more { --flow-space: var(--space-xl); font-size: var(--size-subtitle); }
```
