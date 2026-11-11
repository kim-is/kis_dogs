import { PetPlace } from '../types';

export const PET_PLACES: PetPlace[] = [
  {
    id: 'place-1',
    name: '포레스트독 테라스 & 브런치 (Forest Dog)',
    category: 'cafe',
    region: 'gyeonggi',
    regionName: '경기 남양주',
    address: '경기도 남양주시 와부읍 팔당로 123-14',
    image: '/src/assets/images/pet_friendly_cafe_1794378548525.jpg',
    shortDesc: '천연잔디 오프리쉬 운동장과 한강 조망 야외 테라스가 어우러진 감성 반려견 동반 브런치 카페',
    detailedDesc: '북한강을 조망하며 시그니처 멍푸치노와 수제 브런치를 즐길 수 있는 프리미엄 반려견 동반 카페입니다. 1,000평 규모의 안전 펜스 천연잔디 운동장이 소형견 구역과 대형견 구역으로 엄격히 분리되어 안전하게 마음껏 뛰어놀 수 있습니다.',
    tags: ['오프리쉬 운동장', '체급별 구역 분리', '멍푸치노', '한강 조망', '무료 주차'],
    rules: {
      offLeash: true,
      indoorAllowed: true,
      largeDogAllowed: true,
      weightLimit: '체급별 구역 분리 (소형견 12kg 미만 / 대형견 전용)',
      mannerBeltRequired: true,
      parking: true,
      entryFee: '보호자 1인 1음료 / 반려견 입장료 7,000원'
    },
    tips: [
      '실내 입장 시 수컷 반려견은 매너벨트 착용 필수 (카운터에서 구매 가능)',
      '천연잔디 구역은 줄 풀림이 허용되나 퇴장 통로 및 주차장에서는 2m 리드줄 착용 필수',
      '주말 14시~17시는 혼잡하므로 오전 일찍 방문하면 더욱 여유롭게 뛰어놀 수 있습니다.'
    ],
    businessHours: '매일 10:30~21:00 (연중무휴)',
    contact: '031-577-8899'
  },
  {
    id: 'place-2',
    name: '성수 헤이독 가든 & 다이닝 (HeyDog Garden)',
    category: 'restaurant',
    region: 'seoul',
    regionName: '서울 성동구',
    address: '서울특별시 성동구 서울숲2길 32-1 1층',
    image: '/src/assets/images/guide_dog_training_1794378549037.jpg',
    shortDesc: '서울숲 산책 후 바로 즐기는 이탈리안 화덕 피자와 반려견 전용 화식 스테이크',
    detailedDesc: '서울숲 야외공원 도보 3분 거리에 위치한 트렌디한 반려견 동반 레스토랑입니다. 반려견 전용 편안한 의자 쿠션과 멸균 뼈국물 화식 세트가 준비되어 있어 보호자와 함께 식사를 즐길 수 있습니다.',
    tags: ['서울숲 인접', '실내 좌석 동반', '반려견 전용 화식', '케이지 불필요'],
    rules: {
      offLeash: false,
      indoorAllowed: true,
      largeDogAllowed: false,
      weightLimit: '15kg 이하 반려견',
      mannerBeltRequired: false,
      parking: true,
      entryFee: '별도 입장료 없음 (1인 1메뉴 주문)'
    },
    tips: [
      '테이블 간격이 넓고 반려견 전용 방석을 무료로 대여해 줍니다.',
      '사람 식기나 숟가락으로 음식을 주는 행위는 위생상 엄격히 금지됩니다.',
      '주말에는 사전 예약 앱을 통한 예약을 권장합니다.'
    ],
    businessHours: '화~일 11:30~22:00 (매주 월요일 정기 휴무)',
    contact: '02-468-1200'
  },
  {
    id: 'place-3',
    name: '양양 바다스테이 독채 풀빌라 (Bada Stay)',
    category: 'pension',
    region: 'gangwon',
    regionName: '강원 양양',
    address: '강원특별자치도 양양군 현남면 동해대로 89',
    image: '/src/assets/images/supplies_curation_1794378548794.jpg',
    shortDesc: '동해 바다 도보 1분, 2m 독립 펜스와 온수 전용 수영장을 갖춘 프라이빗 감성 독채 펜션',
    detailedDesc: '다른 사람이나 강아지 눈치 볼 필요 없이 우리 가족만 오롯이 힐링할 수 있는 독립 울타리형 반려견 풀빌라입니다. 반려견 드라이룸, 전용 샴푸, 미끄럼 방지 바닥재, 전용 구명조끼까지 완비되어 있습니다.',
    tags: ['전 객실 독립 펜스', '온수 펫풀', '해변 도보 1분', '드라이룸 완비', '대형견 환영'],
    rules: {
      offLeash: true,
      indoorAllowed: true,
      largeDogAllowed: true,
      weightLimit: '견종 및 체중 제한 없음 (대형견 가능)',
      mannerBeltRequired: false,
      parking: true,
      entryFee: '객실 요금에 반려견 1마리 기본 포함'
    },
    tips: [
      '잔디 마당 전체에 1.8m 안전 펜스가 둘러져 있어 목줄 없이 자유롭게 쉴 수 있습니다.',
      '해변 산책 후 마당 야외 온수 세족 시설에서 모래를 씻겨낼 수 있어 매우 쾌적합니다.'
    ],
    businessHours: '체크인 15:00 / 체크아웃 11:00',
    contact: '033-671-5500'
  },
  {
    id: 'place-4',
    name: '월드컵공원 반려견 놀이터 (상암)',
    category: 'park',
    region: 'seoul',
    regionName: '서울 마포구',
    address: '서울특별시 마포구 증산로 32 평화의공원 주차장 옆',
    image: '/src/assets/images/guide_dog_training_1794378549037.jpg',
    shortDesc: '서울시에서 공식 운영하는 무료 공공 반려견 놀이터, 흙마당과 그늘막, 음수대 완비',
    detailedDesc: '자연 친화적인 부지에 체고 40cm를 기준으로 중·소형견과 대형견 놀이터가 철저히 분리되어 있습니다. 동물등록이 완료된 반려견만 입장할 수 있어 안전하며, 정기적인 위생 방역이 이뤄집니다.',
    tags: ['서울시 무료 운영', '동물등록 칩 필수', '체고 40cm 기준 분리', '자연 흙마당'],
    rules: {
      offLeash: true,
      indoorAllowed: false,
      largeDogAllowed: true,
      weightLimit: '중·소형견(체고 40cm 이하) / 대형견 전용 구역 분리',
      mannerBeltRequired: false,
      parking: true,
      entryFee: '무료 (공영주차장 별도 유료)'
    },
    tips: [
      '입장 시 리더기로 내장형 또는 외장형 동물등록 칩 스캔 필수 (미등록견 입장 불가)',
      '동물보호법상 맹견 및 발정기 반려견은 입장이 제한됩니다.',
      '13세 미만 어린이는 반드시 성인 보호자와 동반 입장해야 합니다.'
    ],
    businessHours: '화~일 10:00~21:00 (매주 월요일 휴무, 우천 시 휴장)',
    contact: '02-300-5500'
  },
  {
    id: 'place-5',
    name: '제주 애월 오름독 브런치 & 감귤밭 파크',
    category: 'cafe',
    region: 'jeju',
    regionName: '제주 애월',
    address: '제주특별자치도 제주시 애월읍 유수암평화길 45',
    image: '/src/assets/images/pet_friendly_cafe_1794378548525.jpg',
    shortDesc: '제주 돌담과 감귤나무 숲 사이에 펼쳐진 1,500평 천연잔디와 흑돼지 수제 화식',
    detailedDesc: '제주도의 푸른 하늘과 감귤 밭을 배경으로 반려견과 특별한 추억을 남길 수 있는 애월의 대표 명소입니다. 야외 테이블마다 햇빛 가림막이 설치되어 있고, 반려견 전용 멍라떼와 제주 당근 케이크를 제공합니다.',
    tags: ['제주 감성', '1,500평 잔디', '감귤밭 포토존', '오프리쉬 구역', '멍라떼'],
    rules: {
      offLeash: true,
      indoorAllowed: true,
      largeDogAllowed: true,
      weightLimit: '체중 제한 없음',
      mannerBeltRequired: true,
      parking: true,
      entryFee: '보호자 1인 1음료 / 반려견 5,000원'
    },
    tips: [
      '제주 여행 시 렌터카 이동용 시트나 켄넬을 챙기시면 편리합니다.',
      '야외 잔디밭 입장 전 진드기 기피제를 분사해 주시면 더욱 안전합니다.'
    ],
    businessHours: '매일 10:00~19:30',
    contact: '064-799-3321'
  },
  {
    id: 'place-6',
    name: '기장 오시리아 댕스테이블 바비큐 (Gijang BBQ)',
    category: 'restaurant',
    region: 'gyeongsang',
    regionName: '부산 기장',
    address: '부산광역시 기장군 기장읍 기장해안로 268-31',
    image: '/src/assets/images/hero_puppy_guide_1794378548226.jpg',
    shortDesc: '부산 바닷바람을 맞으며 반려견과 개별 프라이빗 글램핑 텐트에서 즐기는 숯불 바비큐',
    detailedDesc: '개별 텐트마다 안전 펜스가 설치되어 있어 보호자가 편안하게 고기를 구워 먹는 동안 반려견은 텐트 안에서 자유롭게 휴식할 수 있는 최적의 힐링 식당입니다.',
    tags: ['프라이빗 텐트', '개별 펜스 완비', '숯불 바비큐', '반려견 간식 제공'],
    rules: {
      offLeash: true,
      indoorAllowed: true,
      largeDogAllowed: true,
      weightLimit: '소형견·중형견·대형견 모두 가능 (개별 텐트)',
      mannerBeltRequired: false,
      parking: true,
      entryFee: '텐트 이용료 및 바비큐 세트 주문'
    },
    tips: [
      '소금이나 후추 양념이 되지 않은 신선한 생 소고기 구이 메뉴가 있어 강아지와 함께 맛있는 식사가 가능합니다.',
      '사전 포털 예약을 통해 원하는 텐트 위치를 지정할 수 있습니다.'
    ],
    businessHours: '매일 12:00~22:00',
    contact: '051-724-4411'
  }
];
