import React, { useState } from 'react';
import { DOG_SIZE_PROFILES } from '../data/costSimulatorData';
import { DogSize } from '../types';
import { Calculator, DollarSign, PieChart, ShieldAlert, Check, RefreshCw } from 'lucide-react';

export const CostCalculatorSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<DogSize>('small');
  
  // Custom modifiers
  const [foodGrade, setFoodGrade] = useState<'standard' | 'premium'>('standard');
  const [groomingType, setGroomingType] = useState<'self' | 'salon'>('salon');
  const [hasInsurance, setHasInsurance] = useState<boolean>(true);
  const [includeEmergencyReserve, setIncludeEmergencyReserve] = useState<boolean>(true);

  const profile = DOG_SIZE_PROFILES[selectedSize];

  // Calculations
  const foodMultiplier = foodGrade === 'premium' ? 1.4 : 1.0;
  const foodCost = Math.round(profile.monthlyDefaults.food * foodMultiplier);

  const groomingCost = groomingType === 'self' 
    ? Math.round(profile.monthlyDefaults.grooming * 0.25)
    : profile.monthlyDefaults.grooming;

  const insuranceCost = hasInsurance ? profile.monthlyDefaults.insurance : 0;
  const reserveCost = includeEmergencyReserve ? profile.monthlyDefaults.medicalReserve : 0;

  const monthlyTotal = 
    foodCost + 
    profile.monthlyDefaults.padsAndBags + 
    profile.monthlyDefaults.treatsAndToys + 
    profile.monthlyDefaults.parasiteControl + 
    groomingCost + 
    insuranceCost + 
    reserveCost;

  const initialTotal = 
    profile.initialCosts.gear + 
    profile.initialCosts.vaccinationAndChip + 
    profile.initialCosts.neutering;

  const yearlyMaintenance = monthlyTotal * 12 + profile.yearlyCheckup;
  const firstYearTotal = initialTotal + yearlyMaintenance;
  const lifetimeTotal = initialTotal + (yearlyMaintenance * profile.lifetimeYears);

  // Formatting helpers adhering to strict Korean currency spacing rules
  const formatWon = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num) + '원';
  };

  const formatManWon = (num: number) => {
    const man = Math.round(num / 10000);
    return new Intl.NumberFormat('ko-KR').format(man) + '만 원';
  };

  return (
    <section id="calculator" className="py-16 lg:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Step 03 · Financial Reality Check
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            반려견 생애 주기 양육비용 실시간 계산기
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            “강아지 한 마리를 키우는 데 얼마가 들까?” 막연한 추측 대신 체급별 사료 소비량, 
            월별 필수 위생 및 의료비, 15년 생애 누적 총비용까지 현실적인 공인 데이터를 바탕으로 시뮬레이션해 보세요.
          </p>
        </div>

        {/* Size Selector Segmented Bar */}
        <div className="bg-neutral-100 p-1.5 rounded-2xl flex max-w-xl mx-auto mb-10 border border-neutral-200">
          {(['small', 'medium', 'large'] as const).map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              type="button"
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer text-center ${
                selectedSize === size
                  ? 'bg-white text-neutral-900 shadow-md border border-neutral-200/80'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {size === 'small' && '소형견 (7kg 미만)'}
              {size === 'medium' && '중형견 (7~15kg)'}
              {size === 'large' && '대형견 (15kg 이상)'}
            </button>
          ))}
        </div>

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cost Breakdown & Customizer Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">{profile.name} 기준 설정</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">{profile.weightRange}</p>
                </div>
                <span className="text-xs font-semibold text-neutral-600">
                  평균 수명: {profile.lifetimeYears}년 기준
                </span>
              </div>

              {/* Toggles & Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Food Grade */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200">
                  <label className="block text-xs font-bold text-neutral-800 mb-2">
                    주식 사료 등급 선택
                  </label>
                  <div className="flex rounded-lg bg-neutral-100 p-1 text-xs">
                    <button
                      type="button"
                      onClick={() => setFoodGrade('standard')}
                      className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                        foodGrade === 'standard' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600'
                      }`}
                    >
                      일반 프리미엄
                    </button>
                    <button
                      type="button"
                      onClick={() => setFoodGrade('premium')}
                      className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                        foodGrade === 'premium' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600'
                      }`}
                    >
                      유기농 및 처방식 (+40%)
                    </button>
                  </div>
                </div>

                {/* Grooming Type */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200">
                  <label className="block text-xs font-bold text-neutral-800 mb-2">
                    미용 및 목욕 방식
                  </label>
                  <div className="flex rounded-lg bg-neutral-100 p-1 text-xs">
                    <button
                      type="button"
                      onClick={() => setGroomingType('salon')}
                      className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                        groomingType === 'salon' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600'
                      }`}
                    >
                      월 1회 전문 살롱
                    </button>
                    <button
                      type="button"
                      onClick={() => setGroomingType('self')}
                      className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                        groomingType === 'self' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600'
                      }`}
                    >
                      홈케어 및 자가 목욕
                    </button>
                  </div>
                </div>

                {/* Pet Insurance */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center justify-between">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800">
                      반려견 펫보험 가입
                    </label>
                    <span className="text-[11px] text-neutral-500">슬개골 탈구·이물 섭취·피부과 보장</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHasInsurance(!hasInsurance)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                      hasInsurance ? 'bg-amber-600 justify-end' : 'bg-neutral-300 justify-start'
                    }`}
                  >
                    <div className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>

                {/* Medical Reserve */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center justify-between">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800">
                      비상 의료비 적금 저축
                    </label>
                    <span className="text-[11px] text-neutral-500">야간 응급 진료 및 수술 대비</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIncludeEmergencyReserve(!includeEmergencyReserve)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                      includeEmergencyReserve ? 'bg-amber-600 justify-end' : 'bg-neutral-300 justify-start'
                    }`}
                  >
                    <div className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>
              </div>

              {/* Monthly Breakdown Table */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                  월간 고정 지출 상세 항목
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-600">주식 사료 (체급 권장 급여량 기준)</span>
                    <span className="font-semibold text-neutral-900 tabular-nums">{formatWon(foodCost)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-600">배변 패드, 배변 봉투, 위생 물티슈</span>
                    <span className="font-semibold text-neutral-900 tabular-nums">{formatWon(profile.monthlyDefaults.padsAndBags)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-600">간식, 터그 및 노즈워크 장난감, 개껌</span>
                    <span className="font-semibold text-neutral-900 tabular-nums">{formatWon(profile.monthlyDefaults.treatsAndToys)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-600">심장사상충 및 내외부 기생충 구충제</span>
                    <span className="font-semibold text-neutral-900 tabular-nums">{formatWon(profile.monthlyDefaults.parasiteControl)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-600">미용 및 위생 목욕 ({groomingType === 'salon' ? '전문 살롱' : '자가 목욕'})</span>
                    <span className="font-semibold text-neutral-900 tabular-nums">{formatWon(groomingCost)}</span>
                  </div>
                  {hasInsurance && (
                    <div className="flex justify-between py-1.5 border-b border-neutral-100">
                      <span className="text-neutral-600">펫보험 월 납입료</span>
                      <span className="font-semibold text-neutral-900 tabular-nums">{formatWon(insuranceCost)}</span>
                    </div>
                  )}
                  {includeEmergencyReserve && (
                    <div className="flex justify-between py-1.5 border-b border-neutral-100">
                      <span className="text-neutral-600">비상 의료비 전용 저축</span>
                      <span className="font-semibold text-neutral-900 tabular-nums">{formatWon(reserveCost)}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 text-sm font-bold text-amber-900 bg-amber-50 p-2.5 rounded-lg">
                    <span>월 예상 고정 지출 합계</span>
                    <span className="text-base tabular-nums">{formatWon(monthlyTotal)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Initial Setup Cost Card */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-2">
                초기 입양 시 일시 발생 비용 (약 {formatManWon(initialTotal)})
              </h4>
              <p className="text-xs text-neutral-500 mb-4">{profile.initialCosts.description}</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-neutral-200">
                  <p className="text-[11px] text-neutral-500">기초 용품 세트</p>
                  <p className="text-xs sm:text-sm font-bold text-neutral-900 mt-1 tabular-nums">
                    {formatManWon(profile.initialCosts.gear)}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-neutral-200">
                  <p className="text-[11px] text-neutral-500">1~5차 백신 및 내장형 칩</p>
                  <p className="text-xs sm:text-sm font-bold text-neutral-900 mt-1 tabular-nums">
                    {formatManWon(profile.initialCosts.vaccinationAndChip)}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-neutral-200">
                  <p className="text-[11px] text-neutral-500">중성화 수술비</p>
                  <p className="text-xs sm:text-sm font-bold text-neutral-900 mt-1 tabular-nums">
                    {formatManWon(profile.initialCosts.neutering)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Total Lifetime Summary Dashboard */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                Lifespan Budget Forecast
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                우리 아이 15년 생애 총 예상 비용
              </h3>

              {/* Big Lifetime Number */}
              <div className="my-6 p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                <p className="text-xs text-neutral-400">평균 {profile.lifetimeYears}년 생애 누적 총액</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 mt-1 tabular-nums">
                  약 {formatManWon(lifetimeTotal)}
                </p>
                <p className="text-xs text-neutral-400 mt-2">
                  초기 입양 및 용품비 + {profile.lifetimeYears}년간의 사료, 위생, 의료, 미용 총합
                </p>
              </div>

              {/* Key Timeline Steps */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                  <span className="text-neutral-300">매달 평균 지출</span>
                  <span className="font-bold text-white text-base tabular-nums">
                    {formatWon(monthlyTotal)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                  <span className="text-neutral-300">연간 평균 유지비 (정기 검진 포함)</span>
                  <span className="font-bold text-white text-base tabular-nums">
                    약 {formatManWon(yearlyMaintenance)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                  <span className="text-neutral-300">입양 첫해 총비용 (초기 세팅+백신+중성화)</span>
                  <span className="font-bold text-amber-300 text-base tabular-nums">
                    약 {formatManWon(firstYearTotal)}
                  </span>
                </div>
              </div>

              {/* Realistic Advisory */}
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 leading-relaxed">
                ※ 위 금액은 평균적인 건강 상태 기준이며, 슬개골 탈구 수술(양다리 약 200만~300만 원), 노령견 심장병 및 신부전 치료 시 추가 의료비가 발생할 수 있습니다. <strong>비상 의료비 저축 통장</strong>을 반드시 사전에 마련해 두세요.
              </div>
            </div>

            {/* Quick Tips on Budgeting */}
            <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 space-y-3">
              <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-amber-700" />
                현명한 견주의 양육비 절약 3대 원칙
              </h4>
              <ul className="text-xs text-amber-900/90 space-y-2 leading-relaxed">
                <li>• <strong>매일 1회 이상 양치질 필수</strong>: 치과 치료비 및 전신마취 스케일링(30만~60만 원)을 확실하게 아끼는 가장 안전한 예방법입니다.</li>
                <li>• <strong>미끄럼 방지 매트 사전 시공</strong>: 소형견의 80%가 겪는 슬개골 탈구 수술비(200만 원 이상)를 미연에 방지합니다.</li>
                <li>• <strong>사료와 패드는 대형 펫박람회 및 정기배송 활용</strong>: 킨텍스 메가주 박람회나 정기배송 할인을 활용하면 연간 30만 원 이상 절약됩니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
