# Independent Sinpo International Market guide

Korean Astro guide at sinpomarket.org. Existing eight routes are preserved. This is not the market operator, a merchant directory or a live opening-status service.

Use pinned package.json versions and lockfile. Run `pnpm check`, `pnpm build` and `node scripts/behavior-test.mjs` with `ASTRO_TELEMETRY_DISABLED=1` where local telemetry setup is unavailable. Baseline dist is ignored/untracked and CI builds it; source/public assets and scripts are committed. The obsolete __to_delete dependency copy was removed from the current tree: it was not app source, contained machine-specific launchers and caused checks to scan third-party dependencies. tsconfig limits checks to authored source.

Official Cloudflare Workers Builds check for the baseline repository identifies project sinpomarket. Worker uses ASSETS, preserves path/query on HTTPS apex redirects, and returns real noindex404. No binding or access settings are changed here.

## Facts reviewed 20 October 2026

- https://itour.incheon.go.kr/ssst/ssst/detail.do?cotId=ITD21122715161333869 — Jemulpo-gu street address/contact, general10–21, first Monday/Seollal/Chuseok closure and separate support-center09–18/weekend closure; explicitly shop dependent. Facilities are listed tourism information, not a current full-route accessibility audit.
- https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174438 — 2023 market history and Sinpo Station exit4 walking estimate. Historical estimate is not a current transport promise. Current airport transfers are not verified.
- https://maps.app.goo.gl/1fosXLiyimQHsnRT8 — Oct20 snapshot4.1/9878; pin37.4713875,126.6272078; weekday07–21:30, weekend07–23:30; Sinpo-dong/Jung-gu address and separate listed telephone. These differ from tourism information and are attributed alongside it, never promoted to unconditional hours/rating schema.

Nearby places are separate planning candidates. Admission, menus, prices, queues, shop schedules and holiday exceptions require their own checks.

## Existing photo attribution

Four Commons file pages were read including warning/licence sections; no deletion nomination was found on those pages. This is not an additional rights warranty. Reference photos are from2016–2019, not current access/shop/product evidence. Existing derivatives are resized/reencoded WebP, with display cropping; the arcade image has a90-degree display rotation.

- Jjw,2019-11-23, https://commons.wikimedia.org/wiki/File:Sinpo-market_191123001.jpg — https://creativecommons.org/licenses/by-sa/4.0/
- Mming na,2019-04-06, https://commons.wikimedia.org/wiki/File:Sinpo-market.jpg — https://creativecommons.org/licenses/by-sa/4.0/
- Vitzro2011,2016-02-28, https://commons.wikimedia.org/wiki/File:Sinpo_station_name_plate.jpg — https://creativecommons.org/licenses/by-sa/3.0/
- Dr 방원장,2016-10-05, https://commons.wikimedia.org/wiki/File:Dak-gangjeong_2.jpg — https://creativecommons.org/licenses/by/4.0/ ; generic food example, not a verified market product.

First two originals match existing derivatives by pixel comparison. Original download was rate-limited at the station file; no original-pixel comparison is claimed for station/food. Existing attributions remain, without inferring new permissions.
