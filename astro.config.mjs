// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      sidebar: [
        {
          label: 'Documentation',
          autogenerate: { directory: 'docs' }
        }
      ]
    })
  ]
});
