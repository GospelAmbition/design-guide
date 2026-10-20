// Builds everything that is derived from tokens/brands/*.json:
//  - public/tokens/<brand>.css        (:root variables, for download/use in sites)
//  - src/styles/generated/<brand>.css (scoped to [data-brand], used by the docs site)
//  - public/guides/<brand>.md         (AI brief: paste into Claude/ChatGPT/etc.)
//  - public/llms.txt                  (index for AI tools)
//  - src/data/brands.json             (data for docs components)
import StyleDictionary from 'style-dictionary';
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'tokens/brands';
const TOKEN_GROUPS = ['color', 'font', 'size', 'radius', 'space'];
const dirs = ['public/tokens', 'public/guides', 'src/styles/generated', 'src/data'];
dirs.forEach((d) => mkdirSync(d, { recursive: true }));

const brands = readdirSync(SRC).filter((f) => f.endsWith('.json')).map((f) => {
  const id = f.replace('.json', '');
  return { id, ...JSON.parse(readFileSync(join(SRC, f), 'utf8')) };
});

const flatten = (obj, path = []) =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' && '$value' in v
      ? [{ name: [...path, k].join('-'), value: v.$value, type: v.$type, description: v.$description ?? '' }]
      : flatten(v, [...path, k]));

for (const b of brands) {
  const tokens = Object.fromEntries(TOKEN_GROUPS.map((g) => [g, b[g]]));
  const sd = new StyleDictionary({
    tokens,
    platforms: {
      root: {
        transformGroup: 'css',
        buildPath: 'public/tokens/',
        files: [{ destination: `${b.id}.css`, format: 'css/variables', options: { selector: ':root', outputReferences: false } }],
      },
      scoped: {
        transformGroup: 'css',
        buildPath: 'src/styles/generated/',
        files: [{ destination: `${b.id}.css`, format: 'css/variables', options: { selector: `[data-brand="${b.id}"]`, outputReferences: false } }],
      },
    },
    log: { verbosity: 'silent' },
  });
  await sd.buildAllPlatforms();

  b.tokens = Object.fromEntries(TOKEN_GROUPS.map((g) => [g, flatten({ [g]: b[g] })]));

  // AI brief
  const list = (g) => b.tokens[g].map((t) => `- \`--${t.name}\`: \`${t.value}\`${t.description ? ` — ${t.description}` : ''}`).join('\n');
  const brief = `# ${b.meta.name} style guide (AI brief)

${b.meta.description}

Use this brief when generating any web page, component or copy for the ${b.meta.name} brand. Follow it exactly. Use the CSS variables below rather than hard-coding values.

## Setup
Include the variables: \`<link rel="stylesheet" href="/tokens/${b.id}.css">\` (or copy the block at the end of this brief).

## Voice
${b.meta.voice}

## Colours
${list('color')}

## Typography
${list('font')}

Type scale:
${list('size')}

## Shape and spacing
${list('radius')}
${list('space')}

## Do
${b.rules.do.map((r) => `- ${r}`).join('\n')}

## Don't
${b.rules.dont.map((r) => `- ${r}`).join('\n')}

## Variables (copy-paste)
\`\`\`css
${readFileSync(`public/tokens/${b.id}.css`, 'utf8').trim()}
\`\`\`
`;
  writeFileSync(`public/guides/${b.id}.md`, brief);
}

writeFileSync('src/data/brands.json', JSON.stringify(brands, null, 2));

writeFileSync('public/llms.txt', `# Design System

> Style guides for building on-brand sites. Each guide has an AI brief (markdown) and a CSS variables file.

## Style guides
${brands.map((b) => `- [${b.meta.name}](/guides/${b.id}.md): ${b.meta.description} Variables: /tokens/${b.id}.css`).join('\n')}
`);

console.log(`Built tokens for: ${brands.map((b) => b.id).join(', ')}`);
