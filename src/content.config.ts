import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // The design system sources, rendered by src/pages/guide/. brief.md is generated and shown raw instead.
  brandFiles: defineCollection({ loader: glob({ base: './brands', pattern: ['**/*.md', '!**/brief.md'] }) }),
  systemFiles: defineCollection({ loader: glob({ base: './system', pattern: '**/*.md' }) }),
};
