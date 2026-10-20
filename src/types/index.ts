export interface NavItem {
  name: string;
  href: string;
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

