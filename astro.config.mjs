import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clashjiedianlab.com',
  output: 'static',
  publicDir: './astro-public',
  compressHTML: true,
  build: { format: 'directory' }
});
