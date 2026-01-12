
export type Language = 'uz' | 'ru' | 'en';

export interface FAQItem {
  q: string;
  a: string;
}

export interface ExpertiseCard {
  title: string;
  desc: string;
  icon: string;
}

export interface TranslationDict {
  heroTitle: string;
  heroSub: string;
  ctaStart: string;
  contactSpecialist: string;
  viaTelegram: string;
  viaPhone: string;
  servicesTitle: string;
  service1: string;
  service1Desc: string;
  service2: string;
  service2Desc: string;
  service3: string;
  service3Desc: string;
  service4: string;
  service4Desc: string;
  service5: string;
  service5Desc: string;
  service6: string;
  service6Desc: string;
  whyUs: string;
  whyUsSub: string;
  expertiseCards: ExpertiseCard[];
  founderQuote: string;
  founderSub: string;
  stat1: string;
  stat1Sub: string;
  stat2: string;
  stat2Sub: string;
  stat3: string;
  stat3Sub: string;
  portfolio: string;
  portfolioSub: string;
  contactUs: string;
  socialLabel: string;
  servicesLabel: string;
  privacyPolicy: string;
  termsOfUse: string;
  aiName: string;
  aiWelcome: string;
  chatPlaceholder: string;
  leadFormTitle: string;
  leadFormSub: string;
  nameLabel: string;
  phoneLabel: string;
  submitButton: string;
  successMessage: string;
  successDiagnosticSub: string;
  faqTitle: string;
  faqItems: FAQItem[];
  tgLink: string;
  tgChannel: string;
  igLink: string;
  phoneContact: string;
  appSlogan: string;
  stepLabel: string;
  ofLabel: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface LeadInfo {
  name: string;
  phone: string;
}
