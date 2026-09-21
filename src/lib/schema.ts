import { MARKET, type Faq } from '../data/site';

/**
 * Astro.site가 없을 때(도메인 미설정)도 안전하게 동작하도록 절대 URL 변환을 한 곳에서 처리합니다.
 */
function absolute(site: URL | undefined, path: string): string | undefined {
  return site ? new URL(path, site).toString() : undefined;
}

/** 방문·이용 정보를 담는 장소(관광명소 + 지역업체) 구조화 데이터. 사이트 전체에서 하나의 @id를 공유합니다. */
export function touristAttraction(site: URL | undefined): Record<string, unknown> {
  const url = absolute(site, '/');
  const images = site ? MARKET.images.map((path) => new URL(path, site).toString()) : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    '@id': url ? `${url}#place` : '#place',
    name: MARKET.name,
    alternateName: MARKET.alternateName,
    description: MARKET.description,
    ...(url ? { url } : {}),
    ...(images ? { image: images } : {}),
    telephone: MARKET.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: MARKET.streetAddress,
      addressLocality: MARKET.addressLocality,
      addressRegion: MARKET.addressRegion,
      addressCountry: MARKET.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: MARKET.latitude,
      longitude: MARKET.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${MARKET.latitude},${MARKET.longitude}`,
    isAccessibleForFree: MARKET.isAccessibleForFree,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: MARKET.opens,
        closes: MARKET.closes,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: MARKET.ratingValue,
      bestRating: MARKET.bestRating,
      reviewCount: MARKET.reviewCount,
    },
  };
}

export function faqPage(faqs: readonly Faq[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumb(site: URL | undefined, crumbs: readonly Crumb[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => {
      const item = absolute(site, crumb.path);
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        ...(item ? { item } : {}),
      };
    }),
  };
}
