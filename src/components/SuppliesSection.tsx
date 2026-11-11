import React, { useState } from 'react';
import { ESSENTIAL_SUPPLIES, SHOPPING_PLATFORMS } from '../data/suppliesData';
import { ShoppingBag, CheckCircle, ExternalLink, Sparkles, Tag, Store } from 'lucide-react';

export const SuppliesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 용품' },
    { id: 'safety', label: '안전 및 매트' },
    { id: 'walking', label: '산책 및 하네스' },
    { id: 'food', label: '식기 및 급여' },
    { id: 'hygiene', label: '배변 및 위생' },
    { id: 'bedding', label: '하우스 및 방석' },
    { id: 'grooming', label: '기초 그루밍' },
  ];

  const filteredSupplies = selectedCategory === 'all'
    ? ESSENTIAL_SUPPLIES
    : ESSENTIAL_SUPPLIES.filter(s => s.category === selectedCategory);

  return (
    <section id="supplies" className="py-16 lg:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Step 04 · Essential Supplies & Where to Buy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            초기 필수 용품 가이드 및 추천 구매처
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            과장 광고에 현혹되어 불필요한 용품을 사두었다가 방치하는 경우가 많습니다. 
            반드시 필요한 필수품의 올바른 선택 기준과, 합리적으로 구매할 수 있는 온·오프라인 쇼핑 채널을 소개합니다.
          </p>
        </div>

        {/* Visual Feature Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px] bg-neutral-100">
              <img
                src="/src/assets/images/supplies_curation_1794378548794.jpg"
                alt="큐레이션된 필수 반려견 용품들"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded">
                초보 견주 중복 지출 방지 팁
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                “옷이나 예쁜 장난감보다, 바닥 매트와 식기부터 갖추세요”
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                강아지가 집에 오기 전 반드시 갖춰야 할 1순위는 <strong>미끄럼 방지 매트</strong>, <strong>안전문(울타리)</strong>, 
                <strong>안전한 도자기 식기</strong>, <strong>대형 배변 패드</strong>입니다. 
                외출용 옷이나 유모차 등은 강아지가 성장하여 체격이 완성된 뒤에 구매해도 전혀 늦지 않습니다.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-500">
                <span>✓ 중복 구매 방지</span>
                <span>·</span>
                <span>✓ 슬개골 관절 건강 우선</span>
                <span>·</span>
                <span>✓ 유해 물질 배제</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              type="button"
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Supplies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSupplies.map(supply => (
            <div
              key={supply.id}
              className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <span className="text-xs font-semibold text-neutral-500">
                    {supply.category === 'safety' && '안전 및 관절'}
                    {supply.category === 'walking' && '산책 및 외출'}
                    {supply.category === 'food' && '식기 및 급여'}
                    {supply.category === 'hygiene' && '배변 및 위생'}
                    {supply.category === 'bedding' && '하우스 및 휴식'}
                    {supply.category === 'grooming' && '위생 및 케어'}
                  </span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                    {supply.priceRange}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mt-3">
                  {supply.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {supply.description}
                </p>

                <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                  <p className="text-xs font-bold text-neutral-800">선택 가이드:</p>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    {supply.selectionGuide.map((guide, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 shrink-0 font-bold">•</span>
                        <span>{guide}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {supply.recommendedBrands && (
                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-medium">대표 추천 브랜드</span>
                  <span className="text-neutral-700 font-semibold truncate max-w-[180px]">
                    {supply.recommendedBrands.join(', ')}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Where to Buy: Curated Platforms & Fairs */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Shopping Directory · 어디서 살까?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
              신뢰할 수 있는 온·오프라인 반려용품 쇼핑 채널
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              배송 속도, 전문 수의 상담, 대형 박람회 혜택까지 용도별로 가장 합리적인 쇼핑몰을 골라보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOPPING_PLATFORMS.map(platform => (
              <div
                key={platform.id}
                className="bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between hover:border-neutral-300 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <span className="text-xs font-bold text-neutral-500">
                      {platform.type === 'online_mall' && '온라인 전문몰'}
                      {platform.type === 'offline_mart' && '대형 오프라인 매장'}
                      {platform.type === 'expo' && '대한민국 펫박람회'}
                      {platform.type === 'design_brand' && '자체 제작 감성 브랜드'}
                    </span>
                    <Store className="w-4 h-4 text-amber-600" />
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-neutral-900 mt-3">
                    {platform.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {platform.strengths.map((str, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded"
                      >
                        {str}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50 text-xs text-amber-900">
                  <span className="font-bold">견주 실전 팁:</span> {platform.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
