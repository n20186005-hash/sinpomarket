/**
 * 사이트 전체가 공유하는 언어 중립 사실(NAP·좌표·운영시간·평점)의 단일 출처입니다.
 * 값을 바꿀 때는 이 파일만 수정하면 모든 페이지의 본문과 구조화 데이터에 반영됩니다.
 */

/** 사이트명. 모든 페이지 title 접미사와 og:site_name이 이 값을 사용합니다. */
export const SITE_NAME = '신포국제시장 인천 여행 가이드';

/** 페이지 제목에 사이트명을 붙이는 규칙. */
export const withSiteName = (title: string): string => `${title} | ${SITE_NAME}`;

export const MARKET = {
  name: '신포국제시장',
  alternateName: 'Sinpo International Market',
  description:
    '인천 개항의 역사와 지역 생활문화가 겹쳐 있는 전통시장. 음식, 식재료, 생활품과 개항장 원도심 문화를 함께 살펴볼 수 있다.',
  telephone: '+82-32-764-0415',
  streetAddress: '우현로49번길 11-5',
  addressLocality: '제물포구',
  addressRegion: '인천광역시',
  addressCountry: 'KR',
  /** 화면 표기용 전체 주소 (2026년 행정체제 개편 반영) */
  fullAddress: '인천광역시 제물포구 우현로49번길 11-5',
  latitude: 37.47135,
  longitude: 126.62725,
  /** 공식 관광안내 기준 일반 이용시간. 점포별로 다를 수 있음 */
  openingHours: '10:00–21:00',
  opens: '10:00',
  closes: '21:00',
  closingNote: '매월 첫째 월요일, 설·추석 당일 휴무가 공식 안내에 표시되어 있으나 점포별로 다를 수 있음',
  isAccessibleForFree: true,
  /** 지도 서비스의 공개 표시값(변동 가능). 사이트 자체의 평가가 아님 */
  ratingValue: '4.0',
  bestRating: '5',
  reviewCount: '123',
  images: ['/images/sinpo-night.webp', '/images/sinpo-arcade.webp', '/images/dakgangjeong.webp'],
  /** Google 지도 임베드(한국어·대한민국 설정) */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x357b78927b11ef99%3A0xdab66f7915077fe9!2sSinpo%20International%20Market%2C%20Incheon!5e1!3m2!1sko!2skr!4v1787535312099!5m2!1sko!2skr',
};

/** 자주 묻는 질문은 항상 [질문, 답변] 쌍으로 관리합니다. */
export type Faq = [question: string, answer: string];
