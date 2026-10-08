import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://glitch401.github.io',
  integrations: [mdx(), sitemap()],
});
