import React, { useState } from 'react';
import { KNOWLEDGE_ARTICLES } from '../data/knowledgeData';
import { BookOpen, AlertOctagon, Sparkles, ChevronDown, ChevronUp, Syringe, HeartPulse, HelpCircle } from 'lucide-react';

export const KnowledgeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>('k-potty');

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: 'training', label: '배변 및 입질 훈련' },
    { id: 'socialization', label: '사회화 골든타임' },
    { id: 'health', label: '예방접종 및 구충' },
    { id: 'danger_foods', label: '금지 음식 및 응급 처치' },
    { id: 'calming_signals', label: '카밍 시그널(몸짓 언어)' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? KNOWLEDGE_ARTICLES
    : KNOWLEDGE_ARTICLES.filter(a => a.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedArticleId(prev => (prev === id ? null : id));
  };

  return (
    <section id="knowledge" className="py-16 lg:py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              Step 02 · Essential Care & Training
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              초보 견주가 반드시 알아야 할 기초 지식백과
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              부정확한 속설 대신, 긍정 강화 교육 원칙과 수의학적 기초 가이드를 기반으로 
              실생활에서 가장 흔히 마주치는 의문점들을 명쾌하게 정리했습니다.
            </p>
          </div>

          {/* Quick Emergency Note */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 max-w-md">
            <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs text-rose-900 leading-relaxed">
              <strong className="font-bold">24시간 응급 상황 주의:</strong> 포도, 초콜릿, 자일리톨, 가열된 뼈 섭취 시 가정에서 과산화수소 구토를 유도하지 말고 <strong>1시간 이내에</strong> 즉시 24시 동물병원 응급실로 방문하세요.
            </div>
          </div>
        </div>

        {/* Category Filter Buttons */}
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

        {/* Featured Visual Spotlight & Article Accordion Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Education Feature */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <div className="aspect-[4/3] bg-neutral-100 relative">
                <img
                  src="/src/assets/images/guide_dog_training_1794378549037.jpg"
                  alt="반려견 산책 및 긍정 강화 교육"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-neutral-800 shadow-sm">
                  긍정 강화 교육(Positive Reinforcement)
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-base font-bold text-neutral-900">
                  혼내지 않고 원하는 바람직한 행동을 늘리는 원리
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  개는 ‘혼나는 이유’를 인간처럼 논리적으로 이해하지 못합니다. 
                  체벌은 불안과 공격성을 낳을 뿐입니다. 바람직한 행동을 했을 때 <strong>1초 이내 보상</strong>(간식과 칭찬)을 제공하고, 원치 않는 보챔이나 흥분은 <strong>무반응(관심 끄기)</strong>으로 일관하는 것이 세계 표준 교육법입니다.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
                  <span>수의행동의학 표준 원칙</span>
                  <span>체벌 금지 · 신뢰 구축</span>
                </div>
              </div>
            </div>

            {/* Quick Medical Routine Strip */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                <HeartPulse className="w-4 h-4 text-rose-500" />
                <span>정기 필수 건강 관리 루틴 요약</span>
              </div>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="font-medium text-neutral-800">심장사상충 및 내외부 기생충</span>
                  <span className="font-bold text-amber-700">매월 1회 필수 투약</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="font-medium text-neutral-800">종합백신 보강 접종 및 광견병</span>
                  <span className="font-bold text-amber-700">매년 1회 추가 접종</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-neutral-800">치아 스케일링 및 종합 혈액 검사</span>
                  <span className="font-bold text-amber-700">1~2년에 1회 (7세 이후 연 1회 권장)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Articles */}
          <div className="lg:col-span-7 space-y-4">
            {filteredArticles.map(article => {
              const isOpen = expandedArticleId === article.id;
              const isDangerFood = article.category === 'danger_foods';

              return (
                <div
                  key={article.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? isDangerFood
                        ? 'bg-rose-50/40 border-rose-300 shadow-sm'
                        : 'bg-white border-amber-300 shadow-sm'
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(article.id)}
                    type="button"
                    className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1.5 pr-2">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                          isDangerFood ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {article.badge || '핵심 가이드'}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-neutral-100 text-neutral-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-neutral-100 space-y-4">
                      <div className="space-y-2.5">
                        {article.content.map((paragraph, i) => (
                          <div
                            key={i}
                            className="text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/80"
                          >
                            {paragraph}
                          </div>
                        ))}
                      </div>

                      <div className={`p-4 rounded-xl border flex items-start gap-2.5 ${
                        isDangerFood
                          ? 'bg-rose-100/70 border-rose-300 text-rose-950 font-medium'
                          : 'bg-amber-50 border-amber-200 text-amber-950 font-medium'
                      }`}>
                        <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
                        <div className="text-xs sm:text-sm leading-relaxed">
                          {article.keyTakeaway}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
