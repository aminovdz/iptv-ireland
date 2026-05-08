import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iptv-ireland.co',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});