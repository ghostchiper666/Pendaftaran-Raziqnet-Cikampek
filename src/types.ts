export interface PackagePlan {
  id: string;
  name: string;
  speed: string;
  price: string;
  priceNumber: number;
  period: string;
  badge?: string;
  badgeColor?: 'popular' | 'luxury' | 'value' | 'business';
  isHeboh?: boolean;
  features: string[];
  recommendedFor: string;
  idealDevices: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface HowToSubscribeStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
  planUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CoverageArea {
  id: string;
  district: string;
  villages: string[];
  status: 'Ready 100% Fiber' | 'Pengembangan';
  tech: 'Fiber Optic FTTH';
}
