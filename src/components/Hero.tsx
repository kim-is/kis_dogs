import React from 'react';
import { Sparkles, Calculator, CheckCircle2, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100/80 border border-amber-200">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-700" />
                올바른 반려문화의 첫걸음
              </span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-500">예비 및 초보 반려인 필수 지침서</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.2]" style={{ textWrap: 'balance' }}>
              충동적인 분양 대신 꼼꼼한 준비로, <br />
              <span className="text-amber-600">15년 평생의 반려생활</span>을 설계하세요.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              강아지를 가족으로 맞이하기 전 점검해야 할 알레르기 및 주거 환경 자가진단부터 
              체급별 현실적인 양육비 계산, 초기 필수 배변 및 사회화 훈련, 검증된 용품 구매처와 
              전국 반려견 동반 장소까지 한눈에 친절하게 안내해 드립니다.
            </p>

            {/* CTA action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuiz}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-amber-600 rounded-xl hover:bg-amber-700 active:scale-98 transition-all shadow-md shadow-amber-600/20 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                견주 준비도 10문항 자가진단
              </button>

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-all shadow-sm whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-amber-600" />
                예상 양육비 계산해 보기
              </a>
            </div>

            {/* Adjacent Trust Proof Strip */}
            <div className="pt-6 border-t border-neutral-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold tracking-tight text-neutral-900 tabular-nums">15~18년</p>
                <p className="text-xs text-neutral-500 mt-0.5">평균 반려견 생애 주기</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-neutral-900 tabular-nums">생후 2개월령</p>
                <p className="text-xs text-neutral-500 mt-0.5">법적 동물등록 의무 기준</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-neutral-900 tabular-nums">월 15만~35만 원</p>
                <p className="text-xs text-neutral-500 mt-0.5">기초 평균 고정 양육비</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-neutral-100">
              <img
                src="/src/assets/images/hero_puppy_guide_1794378548226.jpg"
                alt="새 가족을 맞이한 행복한 강아지와 견주"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/25 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Responsible Dog Parenting
                </span>
                <p className="text-base sm:text-lg font-bold leading-snug mt-1">
                  “귀여움은 찰나이지만, 책임감은 평생입니다”
                </p>
                <p className="text-xs text-neutral-300 mt-1">
                  사전 준비가 철저할수록 보호자와 반려견 모두 더욱 깊은 행복을 누립니다.
                </p>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-3.5 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-neutral-900">전문 훈련사 및 수의 지침 반영</p>
                <p className="text-neutral-500">동물보호법 및 표준 백신 접종 가이드 준수</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
