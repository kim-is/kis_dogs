import React, { useState, useEffect } from 'react';
import { PREPARATION_CHECKLIST, THREE_THREE_THREE_RULE } from '../data/preparationData';
import { CheckSquare, Square, RotateCcw, AlertTriangle, ShieldCheck, Heart, Home, Wallet, FileText } from 'lucide-react';

export const PreparationSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('puppylog_prep_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeCategory, setActiveCategory] = useState<'all' | 'mindset' | 'environment' | 'finance' | 'legal'>('all');

  useEffect(() => {
    try {
      localStorage.setItem('puppylog_prep_checklist', JSON.stringify(checkedItems));
    } catch {
      // storage unavailable
    }
  }, [checkedItems]);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
  };

  const totalCount = PREPARATION_CHECKLIST.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const filteredList = activeCategory === 'all'
    ? PREPARATION_CHECKLIST
    : PREPARATION_CHECKLIST.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mindset': return <Heart className="w-4 h-4 text-rose-500" />;
      case 'environment': return <Home className="w-4 h-4 text-emerald-500" />;
      case 'finance': return <Wallet className="w-4 h-4 text-amber-500" />;
      case 'legal': return <FileText className="w-4 h-4 text-blue-500" />;
      default: return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'mindset': return '마음가짐 및 가족 동의';
      case 'environment': return '주거 환경 및 알레르기';
      case 'finance': return '경제적 지속 가능성';
      case 'legal': return '법적 동물등록 의무';
      default: return '전체 보기';
    }
  };

  return (
    <section id="preparation" className="py-16 lg:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Step 01 · Pre-Adoption Preparation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            분양 전 반드시 준비하고 확인해야 할 것들
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            반려견을 맞이하는 것은 새로운 가족 구성원이자 15년 이상의 삶을 함께하는 중대한 결정입니다. 
            단순한 호기심이나 일시적인 외로움 해소가 아닌, 현실적인 준비 상태를 차분히 점검해 보세요.
          </p>
        </div>

        {/* Progress & Category Filter Bar */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-neutral-900">나의 입양 준비율</span>
                <span className="text-xs font-medium text-neutral-500">
                  {completedCount} / {totalCount} 완료
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded tabular-nums">
                  {progressPercent}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full sm:w-80 h-2.5 bg-neutral-200 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-amber-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetChecklist}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                체크리스트 초기화
              </button>
            </div>
          </div>

          {/* Interactive filter tabs */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-neutral-500 mr-1">분류별 점검:</span>
            {(['all', 'mindset', 'environment', 'finance', 'legal'] as const).map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {filteredList.map(item => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex gap-4 items-start select-none ${
                  isChecked
                    ? 'bg-amber-50/40 border-amber-300 shadow-sm'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                }`}
              >
                <div className="mt-0.5 shrink-0 text-amber-600">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 fill-amber-600 text-white" />
                  ) : (
                    <Square className="w-5 h-5 text-neutral-400" />
                  )}
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-xs font-medium text-neutral-500">
                      {getCategoryLabel(item.category)}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-amber-700 font-semibold">
                      {item.importance === 'essential' ? '필수 점검 항목' : '권장 항목'}
                    </span>
                  </div>

                  <h3 className={`text-sm sm:text-base font-bold ${isChecked ? 'text-amber-950 line-through decoration-amber-400/60' : 'text-neutral-900'}`}>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>

                  {item.tips && (
                    <div className="pt-1.5 text-xs text-amber-900/90 bg-amber-100/50 rounded-lg p-2.5 border border-amber-200/50">
                      <span className="font-semibold">실전 팁:</span> {item.tips}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-3-3 Rule Editorial Card Grid */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Golden Principle · 처음 데려온 날
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
              반려견 적응의 3-3-3 법칙 (3일 · 3주 · 3개월)
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              입양 첫날부터 과도하게 안아주거나 지인들을 집에 초대하면 극심한 불안을 겪습니다. 
              강아지가 새로운 집을 안전한 울타리로 받아들이는 데 필요한 표준 적응 일정표입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {THREE_THREE_THREE_RULE.map((rule, idx) => (
              <div
                key={rule.stage}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-neutral-200">
                    <span className="text-xs font-mono text-neutral-500 font-semibold tabular-nums">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                      {rule.stage}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-neutral-900 mt-4">
                    {rule.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/70">
                  <p className="text-xs font-bold text-neutral-800 mb-2">핵심 실천 행동:</p>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {rule.actionPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 shrink-0 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice Box */}
        <div className="mt-12 rounded-2xl bg-amber-900 text-amber-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-amber-800/80 border border-amber-700 flex items-center justify-center shrink-0 text-amber-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              대한민국 동물보호법 필수 법적 의무 사항 안내
            </h4>
            <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              1. <strong>동물등록 의무</strong>: 생후 2개월령 이상의 반려견은 소유권을 취득한 날로부터 30일 이내에 지자체 또는 동물병원에서 내장형 칩이나 외장형 태그로 의무 등록해야 합니다. (위반 시 100만 원 이하의 과태료 부과)<br />
              2. <strong>외출 시 안전조치</strong>: 외출 시 보호자의 성명과 연락처가 적힌 인식표를 반드시 부착하고, 목줄 길이는 <strong>2미터 이내</strong>로 유지해야 합니다. 배변 미수거 시 최대 50만 원의 과태료가 부과됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
