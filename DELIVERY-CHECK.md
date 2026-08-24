# 전달 전 검증 기록

## 정적 구성 감사

다음 항목은 프로젝트 파일을 대상으로 확인했습니다.

- `package.json`의 직접 의존성은 모두 정확한 버전으로 고정되어 있으며 `pnpm-lock.yaml` importer와 일치
- `packageManager`는 `pnpm@11.22.0`, Node.js는 `.node-version`과 `engines` 모두 `24.19.0`
- `@astrojs/check@0.9.10`의 TypeScript peer 범위 `^5.0.0 || ^6.0.0` 안에서 TypeScript `6.0.3` 사용
- `pnpm-workspace.yaml` 없음
- `example.com`, `localhost`, `chrome-extension://`, `lastmod` 없음
- 사이트 URL 설정은 `astro.config.mjs`의 `SITE_URL` 한 곳뿐이며, 값이 비어 있을 때 sitemap 통합은 비활성화
- Google 지도 임베드는 한국어/대한민국(`ko/KR`) 설정
- 개인정보 처리방침·서비스 이용약관·쿠키 설정은 각각 독립 경로
- GA4는 분석 동의가 저장된 경우에만 로드
- 본문 사진, 로고, favicon은 모두 프로젝트 내부 파일

정적 감사 결과: **통과**

## 요청된 깨끗한 환경 CI 실행 상태

요청된 첫 단계인 아래 명령을 `node_modules` 삭제 후 실제 실행했습니다.

```bash
CI=1 corepack pnpm install --frozen-lockfile
```

현재 작업 컨테이너는 외부 npm 레지스트리에 DNS 연결을 할 수 없어 Corepack이 고정된 pnpm 실행 파일을 내려받는 단계에서 중단되었습니다.

```text
Error when performing the request to https://registry.npmjs.org/pnpm/-/pnpm-11.22.0.tgz
getaddrinfo EAI_AGAIN registry.npmjs.org
```

따라서 이 컨테이너에서는 의존성 설치 이전에 중단되어 `pnpm check`와 `pnpm build`를 실제 실행했다고 표시하지 않습니다. 이는 소스 검사 오류가 아니라 검증 환경의 네트워크 제한입니다.

정상적인 npm 레지스트리 접근이 가능한 Node.js 24.19.0 환경에서 아래 순서로 최종 인증하십시오.

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

그 뒤 `dist`에 대해 다음을 확인하십시오.

```bash
! grep -RIE 'example\.com|localhost|chrome-extension://' dist
! grep -RIE '<lastmod>|lastmod' dist
```

`SITE_URL`이 비어 있는 현재 상태에서는 sitemap을 의도적으로 생성하지 않습니다. 실제 HTTPS 도메인을 `astro.config.mjs`의 `SITE_URL`에 입력한 뒤 다시 빌드하면 `@astrojs/sitemap`이 실제 사이트 URL에서 자동 생성합니다.
