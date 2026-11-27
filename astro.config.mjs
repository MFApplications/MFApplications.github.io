// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mfapplications.github.io',
  base: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
});