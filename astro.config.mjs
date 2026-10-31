import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://diversity.ca', output: 'static', devToolbar: { enabled: false }, vite: { server: { allowedHosts: ['terminal.local'] } }, trailingSlash: 'always', build: { format: 'directory' } });
