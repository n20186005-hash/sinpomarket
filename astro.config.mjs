import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 도메인은 이 한 곳에서만 설정합니다. canonical·Open Graph·JSON-LD·sitemap이 모두 이 값을 사용합니다.
const SITE_URL = 'https://sinpomarket.org';

export default defineConfig({
  site: SITE_URL || undefined,
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
