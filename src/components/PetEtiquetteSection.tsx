import React from 'react';
import { ShieldCheck, Heart, AlertCircle, Smile, ThumbsUp } from 'lucide-react';

export const PetEtiquetteSection: React.FC = () => {
  const etiquetteRules = [
    {
      num: '01',
      title: '외출 시 2m 이내 리드줄 길이 유지',
      desc: '공공장소나 산책로에서는 돌발 상황 시 즉각적으로 안전을 통제할 수 있도록 리드줄 길이를 2미터 이내로 유지해야 합니다. 자동줄(플렉시)은 주변에 보행자나 다른 개가 있을 때 반드시 짧게 고정해 주세요.'
    },
    {
      num: '02',
      title: '실내 공간 동반 시 매너벨트 및 전용 방석 착용',
      desc: '낯선 냄새가 가득한 카페나 식당에서는 평소 배변을 잘 가리는 아이라도 영역 표시(마킹)를 할 수 있습니다. 실내에서는 매너벨트(기저귀)를 착용하고, 의자 위에는 개인 방석을 깔아주는 것이 기본 매너입니다.'
    },
    {
      num: '03',
      title: '배변 봉투 상시 지참 및 즉각적인 위생 수거',
      desc: '외출 시 배변 봉투와 물병을 반드시 지참하세요. 소변을 본 자리에는 휴대용 물병으로 물을 충분히 뿌려 냄새와 흔적을 희석하고, 대변은 즉시 밀봉하여 지정된 수거함에 처리합니다.'
    },
    {
      num: '04',
      title: '낯선 사람 및 다른 강아지에게 동의 없이 다가가지 않기',
      desc: '아무리 온순한 내 강아지라도 상대방이나 다른 개에게는 위협과 공포가 될 수 있습니다. 인사를 나누거나 만지기 전 반드시 상대 보호자에게 "인사해도 될까요?"라고 먼저 정중히 양해를 구하세요.'
    },
    {
      num: '05',
      title: '사람 식기류 사용 및 테이블 위에 발 올리기 절대 금지',
      desc: '카페나 식당의 사람용 물컵이나 접시를 반려견에게 핥게 하거나 테이블 위에 앞발을 올리지 않도록 주의하세요. 비반려인 손님들과 상생하며 동반 가능 장소를 지켜나가는 가장 중요한 에티켓입니다.'
    }
  ];

  return (
    <section className="py-16 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Petiquette · 성숙한 반려문화
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            모두가 환영하는 매너 있는 견주의 5대 펫티켓
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            반려견 동반 가능 공간이 지속해서 늘어나기 위해서는 견주 한 사람 한 사람의 성숙한 배려가 필수적입니다. 
            타인에게 불쾌감을 주지 않고 내 소중한 반려견을 안전하게 보호하는 황금 수칙입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {etiquetteRules.map((rule) => (
            <div
              key={rule.num}
              className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  RULE {rule.num}
                </span>
                <h3 className="text-base font-bold text-white mt-2">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Golden Summary Card */}
          <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-bold text-amber-200 tracking-wider uppercase">
                Petiquette Campaign
              </span>
              <h3 className="text-lg font-bold mt-2">
                “당신의 매너가 곧 반려견의 얼굴입니다”
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/90 mt-2.5 leading-relaxed">
                작은 배려와 규정 준수가 반려견 동반 문화를 더욱 따뜻하고 풍요롭게 만듭니다. 
                비반려인도 미소 짓게 만드는 모범적인 보호자가 되어 주세요!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-500/40 text-xs font-medium text-amber-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-200" />
              <span>행복한 반려사회 만들기 실천 캠페인</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
