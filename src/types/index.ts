export interface NavItem {
  name: string;
  href: string;
  routeKey?: 'home' | 'about' | 'our-focus' | 'partners' | 'contact';
  isActive?: boolean;
}

export interface ValuePillarItem {
  id: string;
  title: string;
  description: string;
  badgeType: 'clean-energy' | 'sustainable-future' | 'stronger-together';
  accentColor: 'green' | 'blue';
}

export interface HeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
}

export * from './about';
export * from './focus';


