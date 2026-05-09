import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://simenguttormsen.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
