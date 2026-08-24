import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 도메인이 확정되면 아래 한 곳에만 실제 HTTPS 주소를 입력하세요. 비어 있어도 빌드는 정상 동작합니다.
const SITE_URL = '';

export default defineConfig({
  site: SITE_URL || undefined,
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
