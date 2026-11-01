import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://diversity.ca',
  output: 'static',
  trailingSlash: 'always',
  vite: { server: { strictPort: true } },
});
