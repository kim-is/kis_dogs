import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          <div>
            <span className="text-lg font-bold text-white tracking-tight">
              PuppyLog <span className="text-amber-500 font-semibold text-sm">퍼피로그</span>
            </span>
            <p className="mt-1 text-neutral-500 max-w-md">
              예비 견주와 초보 견주를 위한 올바른 반려생활 종합 가이드 포털입니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-neutral-400 text-xs font-medium">
            <a href="#preparation" className="hover:text-white transition-colors">입양 전 준비</a>
            <a href="#knowledge" className="hover:text-white transition-colors">초보 지식백과</a>
            <a href="#calculator" className="hover:text-white transition-colors">양육비 계산기</a>
            <a href="#supplies" className="hover:text-white transition-colors">필수 용품 & 쇼핑</a>
            <a href="#places" className="hover:text-white transition-colors">반려견 동반 장소</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-neutral-500 text-[11px] leading-relaxed">
          <p>
            본 웹사이트의 양육비 산출 데이터와 예방접종 및 행동 교육 정보는 농림축산식품부 동물보호관리시스템 및 한국수의사회 표준 가이드를 참고하여 엄격하게 구성되었습니다.
          </p>
          <div className="flex items-center gap-1 text-neutral-400 shrink-0">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for all companion dogs & guardians</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
