import { DogSize } from '../types';

export interface CostProfile {
  name: string;
  weightRange: string;
  representativeBreeds: string[];
  initialCosts: {
    gear: number; // 방석, 식기, 하네스, 리드줄, 울타리, 매트 등
    vaccinationAndChip: number; // 1~5차 접종 + 동물등록 칩 + 항체가
    neutering: number; // 중성화 수술
    description: string;
  };
  monthlyDefaults: {
    food: number; // 사료
    padsAndBags: number; // 배변 패드, 배변 봉투, 물티슈
    treatsAndToys: number; // 간식, 장난감, 개껌
    parasiteControl: number; // 심장사상충 및 내외부 구충약
    grooming: number; // 미용 및 목욕
    insurance: number; // 펫보험 (선택형)
    medicalReserve: number; // 의료비 비상금 저축
  };
  yearlyCheckup: number; // 정기 건강검진 및 스케일링
  lifetimeYears: number; // 평균 수명 (약 15년)
}

export const DOG_SIZE_PROFILES: Record<DogSize, CostProfile> = {
  small: {
    name: '소형견 (7kg 미만)',
    weightRange: '말티즈, 토이푸들, 포메라니안, 시츄, 비숑프리제 등',
    representativeBreeds: ['말티즈', '토이푸들', '포메라니안', '시츄', '미니어처 핀셔'],
    initialCosts: {
      gear: 350000,
      vaccinationAndChip: 320000,
      neutering: 250000,
      description: '미끄럼 방지 매트, 소형 이동 가방, 식기, 하네스, 1~5차 기초 접종 및 내장형 칩'
    },
    monthlyDefaults: {
      food: 45000,
      padsAndBags: 20000,
      treatsAndToys: 25000,
      parasiteControl: 20000,
      grooming: 50000,
      insurance: 40000,
      medicalReserve: 50000
    },
    yearlyCheckup: 300000,
    lifetimeYears: 15
  },
  medium: {
    name: '중형견 (7~15kg)',
    weightRange: '웰시코기, 비글, 보더콜리, 시바견, 코카스파니엘 등',
    representativeBreeds: ['웰시코기', '비글', '보더콜리', '시바견', '슈나우저'],
    initialCosts: {
      gear: 450000,
      vaccinationAndChip: 350000,
      neutering: 350000,
      description: '중형 켄넬, 튼튼한 하네스 및 리드줄, 와이드형 배변판, 1~5차 기초 접종 및 내장형 칩'
    },
    monthlyDefaults: {
      food: 80000,
      padsAndBags: 30000,
      treatsAndToys: 35000,
      parasiteControl: 28000,
      grooming: 70000,
      insurance: 55000,
      medicalReserve: 70000
    },
    yearlyCheckup: 400000,
    lifetimeYears: 14
  },
  large: {
    name: '대형견 (15kg 이상)',
    weightRange: '골든리트리버, 래브라도리트리버, 사모예드, 저먼 셰퍼드 등',
    representativeBreeds: ['골든리트리버', '래브라도리트리버', '사모예드', '허스키', '도베르만'],
    initialCosts: {
      gear: 600000,
      vaccinationAndChip: 400000,
      neutering: 500000,
      description: '대형 켄넬 및 차량용 카시트, 초대형 식기, 고내구성 로프 및 하네스, 기초 접종 및 내장형 칩'
    },
    monthlyDefaults: {
      food: 150000,
      padsAndBags: 45000,
      treatsAndToys: 50000,
      parasiteControl: 40000,
      grooming: 120000,
      insurance: 75000,
      medicalReserve: 100000
    },
    yearlyCheckup: 550000,
    lifetimeYears: 12
  }
};
