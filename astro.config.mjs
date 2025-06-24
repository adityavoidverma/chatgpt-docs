// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://chatgpt-docs.vercel.app', // replace with your actual Vercel/GitHub Pages URL

  integrations: [
    starlight({
      title: 'ChatGPT Docs',
      description: 'Well-explained, beginner-friendly AI, Git, and DSA notes from ChatGPT conversations.',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/adityavoidverma/chatgpt-docs'
        }
      ],

      sidebar: [
        {
          label: 'Git',
          autogenerate: { directory: 'git' }
        },
        {
          label: 'Prompting',
          autogenerate: { directory: 'prompting' }
        },
        {
          label: 'DSA in Java',
          autogenerate: { directory: 'dsa-java' }
        }
      ]
    })
  ]
});
