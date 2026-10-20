import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { writeFileSync, utimesSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT, loadAll } from './scripts/lib/brands.mjs';
import { buildOutputs } from './scripts/generate.mjs';
import remarkLivePreview from './src/plugins/remark-live-preview.mjs';

const { brands } = loadAll();

const badge = (d) => ({ override: 'override', brand: 'brand only' })[d.origin];
const docItems = (b, kind) =>
  b[kind].map((d) => ({ label: d.data.title ?? d.name, link: `/guide/${b.id}/${kind}/${d.name}/`, ...(badge(d) && { badge: badge(d) }) }));

const sidebar = [
  { label: 'Start here', items: [{ label: 'Overview', slug: 'index' }, { label: 'Using this with AI', slug: 'using-with-ai' }] },
  ...brands.map((b) => ({
    label: b.meta.name ?? b.id,
    items: [
      { label: 'Overview', link: `/guide/${b.id}/` },
      { label: 'Tokens', link: `/guide/${b.id}/tokens/` },
      { label: 'Components', items: docItems(b, 'components') },
      ...(b.patterns.length ? [{ label: 'Patterns', items: docItems(b, 'patterns') }] : []),
      { label: 'Assets', link: `/guide/${b.id}/assets/` },
      { label: 'Brief for AI', link: `/guide/${b.id}/brief/` },
    ],
  })),
];

// In dev: regenerate tokens.css / brief.md / llms.txt whenever a source changes, and restart
// when files are added or removed so the sidebar and routes pick them up.
const GENERATED = /(^|\/)(brief\.md|tokens\.css|llms\.txt)$/;
const liveSources = {
  name: 'design-system-live-sources',
  hooks: {
    'astro:server:setup': ({ server, logger }) => {
      server.watcher.add([join(ROOT, 'brands'), join(ROOT, 'system')]);
      const isSource = (file) => {
        const rel = relative(ROOT, file).replaceAll('\\', '/');
        return /^(brands|system)\//.test(rel) && !GENERATED.test(rel);
      };
      const regenerate = async () => {
        try {
          for (const [p, content] of Object.entries(await buildOutputs())) writeFileSync(join(ROOT, p), content);
          // Pages read these files at render time, so Vite doesn't know to reload them.
          server.ws.send({ type: 'full-reload' });
        } catch (e) {
          logger.error(`Could not regenerate: ${e.message}`);
        }
      };
      server.watcher.on('change', (file) => isSource(file) && regenerate());
      for (const event of ['add', 'unlink', 'addDir', 'unlinkDir']) {
        server.watcher.on(event, async (file) => {
          if (!isSource(file)) return;
          await regenerate();
          // Touching this config makes Astro fully restart, which rebuilds the sidebar.
          const now = new Date();
          utimesSync(fileURLToPath(import.meta.url), now, now);
        });
      }
    },
  },
};

export default defineConfig({
  markdown: { processor: unified({ remarkPlugins: [remarkLivePreview] }) },
  integrations: [
    starlight({
      title: 'Design System',
      description: 'Brand guides for building on-brand sites, by people and by AI.',
      customCss: ['./src/styles/docs.css'],
      sidebar,
    }),
    liveSources,
  ],
});
