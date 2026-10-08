import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://glitch401.github.io',
  integrations: [sitemap()],
});
