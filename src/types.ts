export interface PhaseData {
  id: string;
  number: string;
  watermark: string;
  name: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  checkpoints: string[];
  deliverables: string[];
  duration: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'SaaS & Web App' | 'Brand Systems' | 'E-Commerce' | 'Fintech & Web3';
  tagline: string;
  description: string;
  stats: { label: string; value: string };
  image: string;
  accentColor: string;
  tags: string[];
  client: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  featured?: boolean;
  badge?: string;
  description: string;
  features: string[];
  turnaround: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface EstimatorState {
  projectType: string;
  scopeSize: string;
  speedTier: string;
  addons: string[];
  budgetRange: string;
  timelineEstimate: string;
}
