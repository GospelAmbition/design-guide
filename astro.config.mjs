import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Design System',
      description: 'Style guides for building on-brand sites, by people and by AI.',
      customCss: [
        './src/styles/docs.css',
        './src/styles/generated/aurora.css',
        './src/styles/generated/harbor.css',
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@500;700&family=Inter:wght@400;600&family=IBM+Plex+Sans:wght@400;600&display=swap',
          },
        },
      ],
      sidebar: [
        { label: 'Start here', items: [{ label: 'Overview', slug: 'index' }, { label: 'Using this with AI', slug: 'using-with-ai' }] },
        { label: 'Aurora', items: [{ autogenerate: { directory: 'guides/aurora' } }] },
        { label: 'Harbor', items: [{ autogenerate: { directory: 'guides/harbor' } }] },
      ],
    }),
  ],
});
