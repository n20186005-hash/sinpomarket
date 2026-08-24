# 신포국제시장 여행정보 가이드

인천광역시 제물포구 신포국제시장을 위한 독립 비영리 관광정보 사이트입니다. 화면 언어는 한국어 단일 언어이며, 특정 상점이나 숙박업체를 상업적으로 추천하지 않습니다.

## 기술 구성

- Astro 7.2.4
- Tailwind CSS 4.3.3 + `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3 (`@astrojs/check` 0.9.10의 지원 범위 `^5 || ^6` 안에서 고정)
- pnpm 11.22.0
- Node.js 24.19.0 LTS
- Wrangler 4.125.0을 통한 Cloudflare Workers 정적 자산 배포
- 데이터베이스·로그인·CMS 없음

## 도메인 설정

도메인은 `astro.config.mjs`의 `SITE_URL` 한 곳에서만 설정합니다.

```js
const SITE_URL = '';
```

도메인이 없으면 빈 문자열을 유지하세요. 이 경우 canonical은 상대경로로 동작하고 절대 URL이 필요한 Open Graph 항목은 생략되며, sitemap 통합도 활성화되지 않습니다. 실제 HTTPS 도메인을 입력하면 canonical, Open Graph, JSON-LD, sitemap이 동일한 `Astro.site` 값을 사용합니다.

## 로컬 실행

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm preview
```

## Cloudflare Workers 배포

이 프로젝트는 모든 페이지를 정적으로 생성합니다. Cloudflare 공식 권장 방식대로 `wrangler.jsonc`의 `assets.directory`가 `./dist`를 가리키며 별도 SSR Worker 코드가 필요하지 않습니다.

```bash
pnpm deploy
```

## 쿠키와 GA4

GA4 측정 ID는 `G-HXM22WWPKP`입니다. 분석 스크립트는 기본적으로 로드되지 않으며 `/cookies/`에서 이용자가 분석 쿠키를 허용한 경우에만 다음 페이지 로드부터 활성화됩니다.

## 사진 출처 및 라이선스

- `sinpo-night.webp`: Jjw, Wikimedia Commons, CC BY-SA 4.0 (`Sinpo-market 191123001.jpg`)
- `sinpo-arcade.webp`: Mming na, Wikimedia Commons, CC BY-SA 4.0 (`Sinpo-market.jpg`)
- `sinpo-station.webp`: Vitzro2011, Wikimedia Commons, CC BY-SA 3.0 (`Sinpo station name plate.jpg`)
- `dakgangjeong.webp`: Dr 방원장, Wikimedia Commons, CC BY 4.0 (`Dak-gangjeong 2.jpg`)

사진은 외부 핫링크 없이 프로젝트 내부 정적 파일로 저장했습니다. 사용 사진은 Wikimedia Commons에서 재사용 라이선스가 명시된 자료만 포함하며, 페이지와 이 문서에 저작자·라이선스를 표시했습니다. WebP 변환·리사이즈를 했으므로 CC BY-SA 자료의 재사용 시 동일 라이선스 조건을 확인하세요.

## 주요 사실 출처

- 인천투어: https://itour.incheon.go.kr/ssst/ssst/detail.do?cotId=ITD21122715161333869
- 한국관광공사 열린관광: https://access.visitkorea.or.kr/ms/detail.do?cotId=0c4c9c0b-f0e9-47a3-9c6d-561e42d75a78
- 인천광역시 행정체제 개편: https://www.incheon.go.kr/IC01070101
- 인천광역시 제물포구청: https://www.jemulpo.go.kr/
- 한국관광공사 VisitKorea: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174438

2026년 7월 1일 인천 행정체제 개편을 반영해 현재 주소의 자치구를 `제물포구`로 표기합니다.
