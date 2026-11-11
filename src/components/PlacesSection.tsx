import React, { useState, useEffect } from 'react';
import { PET_PLACES } from '../data/placesData';
import { PetPlace } from '../types';
import { MapPin, Heart, Sparkles, Coffee, Utensils, Home, Trees, Check, Shield } from 'lucide-react';

interface PlacesSectionProps {
  onSelectPlace: (place: PetPlace) => void;
}

export const PlacesSection: React.FC<PlacesSectionProps> = ({ onSelectPlace }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [onlyOffLeash, setOnlyOffLeash] = useState<boolean>(false);
  const [onlyLargeDog, setOnlyLargeDog] = useState<boolean>(false);

  const [savedPlaceIds, setSavedPlaceIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('puppylog_saved_places');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('puppylog_saved_places', JSON.stringify(savedPlaceIds));
    } catch {
      // ignore
    }
  }, [savedPlaceIds]);

  const toggleSavePlace = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedPlaceIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: 'all', label: '전체 장소', icon: Sparkles },
    { id: 'cafe', label: '반려견 동반 카페', icon: Coffee },
    { id: 'restaurant', label: '반려견 동반 식당', icon: Utensils },
    { id: 'pension', label: '독채 숙소 및 펜션', icon: Home },
    { id: 'park', label: '공공 반려견 놀이터', icon: Trees },
  ];

  const regions = [
    { id: 'all', label: '전국' },
    { id: 'seoul', label: '서울' },
    { id: 'gyeonggi', label: '경기' },
    { id: 'gangwon', label: '강원' },
    { id: 'jeju', label: '제주' },
    { id: 'gyeongsang', label: '경상 및 부산' },
  ];

  const filteredPlaces = PET_PLACES.filter(place => {
    if (selectedCategory !== 'all' && place.category !== selectedCategory) return false;
    if (selectedRegion !== 'all' && place.region !== selectedRegion) return false;
    if (onlyOffLeash && !place.rules.offLeash) return false;
    if (onlyLargeDog && !place.rules.largeDogAllowed) return false;
    return true;
  });

  return (
    <section id="places" className="py-16 lg:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Step 05 · Pet-Friendly Places & Lifestyle
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            전국 추천 반려견 동반 명소 탐색
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            반려견과 함께 외출할 때 가장 우려되는 것은 ‘실내 동반이 실제로 가능한지’, ‘체중 제한이 있는지’입니다. 
            검증된 동반 규정과 펫티켓 정보를 담은 엄선된 추천 장소를 찾아보세요.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 mb-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(c => {
              const Icon = c.icon;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  type="button"
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    selectedCategory === c.id
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Region Tabs & Feature Toggles */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-neutral-200">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-neutral-500 mr-1">지역:</span>
              {regions.map(r => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  type="button"
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedRegion === r.id
                      ? 'bg-amber-600 text-white font-bold'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 text-xs text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyOffLeash}
                  onChange={(e) => setOnlyOffLeash(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-3.5 h-3.5"
                />
                <span>오프리쉬(천연잔디 운동장)만</span>
              </label>

              <label className="flex items-center gap-1.5 text-xs text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyLargeDog}
                  onChange={(e) => setOnlyLargeDog(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-3.5 h-3.5"
                />
                <span>대형견 입장 가능만</span>
              </label>
            </div>
          </div>
        </div>

        {/* Places Grid */}
        {filteredPlaces.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-200">
            <p className="text-base font-bold text-neutral-800">선택하신 조건에 일치하는 장소가 없습니다.</p>
            <p className="text-xs text-neutral-500 mt-1">지역이나 특성 필터를 변경해 보세요.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedRegion('all');
                setOnlyOffLeash(false);
                setOnlyLargeDog(false);
              }}
              type="button"
              className="mt-4 px-4 py-2 text-xs font-semibold bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 cursor-pointer"
            >
              필터 전체 초기화
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map(place => {
              const isSaved = savedPlaceIds.includes(place.id);

              return (
                <div
                  key={place.id}
                  onClick={() => onSelectPlace(place)}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Box */}
                    <div className="aspect-[16/10] bg-neutral-100 relative overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-bold text-neutral-800">
                        {place.regionName}
                      </div>

                      {/* Bookmark button */}
                      <button
                        type="button"
                        onClick={(e) => toggleSavePlace(e, place.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                          isSaved ? 'bg-rose-50 text-rose-600' : 'bg-white/80 text-neutral-600 hover:text-rose-600'
                        }`}
                        aria-label="장소 저장하기"
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span>
                          {place.category === 'cafe' && '카페'}
                          {place.category === 'restaurant' && '식당'}
                          {place.category === 'pension' && '독채 펜션'}
                          {place.category === 'park' && '공공 놀이터'}
                        </span>
                        <span>·</span>
                        <span className="truncate">{place.address}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                        {place.name}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                        {place.shortDesc}
                      </p>

                      {/* Rule Highlights */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {place.rules.offLeash && (
                          <span className="text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2 py-0.5 rounded">
                            오프리쉬 잔디
                          </span>
                        )}
                        {place.rules.indoorAllowed && (
                          <span className="text-[11px] font-medium bg-blue-50 text-blue-800 border border-blue-200/60 px-2 py-0.5 rounded">
                            실내 동반 가능
                          </span>
                        )}
                        {place.rules.largeDogAllowed && (
                          <span className="text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200/60 px-2 py-0.5 rounded">
                            대형견 가능
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-3.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <span className="truncate max-w-[180px]">{place.businessHours}</span>
                    <span className="text-amber-700 font-semibold group-hover:underline">
                      상세 규정 보기 →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
