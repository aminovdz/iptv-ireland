import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://iptv-ireland.co',
  output: 'server',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});