export type DogSize = 'small' | 'medium' | 'large';

export interface ChecklistItem {
  id: string;
  category: 'mindset' | 'environment' | 'finance' | 'legal';
  title: string;
  description: string;
  importance: 'essential' | 'recommended';
  tips?: string;
}

export interface KnowledgeArticle {
  id: string;
  category: 'starter' | 'training' | 'socialization' | 'health' | 'danger_foods' | 'calming_signals';
  title: string;
  summary: string;
  content: string[];
  keyTakeaway: string;
  badge?: string;
  iconName?: string;
}

export interface SupplyItem {
  id: string;
  name: string;
  category: 'hygiene' | 'food' | 'bedding' | 'walking' | 'grooming' | 'safety';
  priority: 'must_have' | 'useful';
  priceRange: string;
  description: string;
  selectionGuide: string[];
  recommendedBrands?: string[];
}

export interface ShoppingPlatform {
  id: string;
  name: string;
  type: 'online_mall' | 'offline_mart' | 'expo' | 'design_brand';
  description: string;
  strengths: string[];
  url?: string;
  tip: string;
}

export interface PetPlace {
  id: string;
  name: string;
  category: 'cafe' | 'restaurant' | 'pension' | 'park';
  region: 'seoul' | 'gyeonggi' | 'gangwon' | 'chungcheong' | 'gyeongsang' | 'jeolla' | 'jeju';
  regionName: string;
  address: string;
  image: string;
  shortDesc: string;
  detailedDesc: string;
  tags: string[];
  rules: {
    offLeash: boolean;
    indoorAllowed: boolean;
    largeDogAllowed: boolean;
    weightLimit?: string;
    mannerBeltRequired: boolean;
    parking: boolean;
    entryFee?: string;
  };
  tips: string[];
  businessHours: string;
  contact?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
  explanation: string;
}
