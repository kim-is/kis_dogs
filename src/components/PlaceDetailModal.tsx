import React, { useEffect } from 'react';
import { PetPlace } from '../types';
import { X, MapPin, Phone, Clock, ShieldCheck, Check, AlertCircle, Copy } from 'lucide-react';

interface PlaceDetailModalProps {
  place: PetPlace | null;
  onClose: () => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({ place, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (place) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [place, onClose]);

  if (!place) return null;

  const copyAddress = () => {
    navigator.clipboard.writeText(place.address);
    alert('주소가 클립보드에 복사되었습니다.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-neutral-700 shadow-md transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="aspect-[16/9] w-full bg-neutral-100 relative">
          <img
            src={place.image}
            alt={place.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-white">
            {place.regionName}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mb-1">
              <span>
                {place.category === 'cafe' && '반려견 동반 카페'}
                {place.category === 'restaurant' && '반려견 동반 식당'}
                {place.category === 'pension' && '프라이빗 독채 숙소'}
                {place.category === 'park' && '공공 반려견 놀이터'}
              </span>
              <span>·</span>
              <span>{place.tags.join(', ')}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-neutral-900">
              {place.name}
            </h2>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              {place.detailedDesc}
            </p>
          </div>

          {/* Contact & Hours */}
          <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 space-y-2.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-neutral-700 truncate">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">{place.address}</span>
              </div>
              <button
                onClick={copyAddress}
                type="button"
                className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 px-2 py-1 bg-white border border-neutral-200 rounded shrink-0 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                주소 복사
              </button>
            </div>

            <div className="flex items-center gap-2 text-neutral-700">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{place.businessHours}</span>
            </div>

            {place.contact && (
              <div className="flex items-center gap-2 text-neutral-700">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{place.contact}</span>
              </div>
            )}
          </div>

          {/* Rules Matrix */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              동반 규정 및 이용 안내
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <span className="text-neutral-500 block mb-0.5">오프리쉬 잔디</span>
                <span className={`font-bold ${place.rules.offLeash ? 'text-emerald-700' : 'text-neutral-700'}`}>
                  {place.rules.offLeash ? '가능 (천연잔디)' : '불가 (목줄 착용)'}
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <span className="text-neutral-500 block mb-0.5">실내 동반</span>
                <span className={`font-bold ${place.rules.indoorAllowed ? 'text-blue-700' : 'text-neutral-700'}`}>
                  {place.rules.indoorAllowed ? '실내 동반 가능' : '야외 테라스만'}
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <span className="text-neutral-500 block mb-0.5">대형견 입장</span>
                <span className={`font-bold ${place.rules.largeDogAllowed ? 'text-amber-700' : 'text-neutral-700'}`}>
                  {place.rules.largeDogAllowed ? '대형견 환영' : '중·소형견 전용'}
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <span className="text-neutral-500 block mb-0.5">체중 제한</span>
                <span className="font-semibold text-neutral-800">
                  {place.rules.weightLimit || '제한 없음'}
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <span className="text-neutral-500 block mb-0.5">실내 매너벨트</span>
                <span className="font-semibold text-neutral-800">
                  {place.rules.mannerBeltRequired ? '착용 필수' : '자율 권장'}
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <span className="text-neutral-500 block mb-0.5">입장료 및 요금</span>
                <span className="font-semibold text-neutral-800">
                  {place.rules.entryFee || '기본 이용'}
                </span>
              </div>
            </div>
          </div>

          {/* Visitor Tips */}
          <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 space-y-2">
            <h4 className="text-xs font-bold text-amber-950">견주 실전 방문 팁</h4>
            <ul className="text-xs text-amber-900/90 space-y-1.5 leading-relaxed">
              {place.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-600 shrink-0 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              type="button"
              className="w-full py-3 bg-neutral-900 text-white rounded-xl font-bold text-sm hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              확인 완료 (창 닫기)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
