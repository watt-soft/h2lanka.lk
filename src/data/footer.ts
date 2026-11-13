import type { FooterLink, FooterSection, SocialLink } from '../types';

export const footerNavigation: FooterSection = {
  title: 'Quick Navigation',
  links: [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    { label: 'Our Focus', href: '#/our-focus' },
    { label: 'Partners', href: '#/partners' },

  ],
};

export const footerSolutions: FooterSection = {
  title: 'Hydrogen Focus',
  links: [
    { label: 'Green Electrolysis & Pure H2', href: '#/our-focus' },
    { label: 'Solar & Wind Infrastructure', href: '#/our-focus' },
    { label: 'Industrial Decarbonization', href: '#/our-focus' },
    { label: 'Clean Storage & Logistics', href: '#/our-focus' },
    { label: 'Renewable Grid Balancing', href: '#/our-focus' },
  ],
};

export const footerContact = {
  title: 'Contact',
  address: [
    'H2 Lanka (Pvt) Ltd,',
    'No. 586/46 , Ranmuthugala,',
    'Kadawatha (WP),',
    'Sri Lanka. 11850',
  ],
  email: 'info@h2lanka.lk',
  phone: '+94 76 557 7073',
  hours: 'Mon – Fri: 8:30 AM – 5:30 PM (UTC+5:30)',
  registration: 'H2 Lanka (Pvt) Ltd • Reg. No: PV-00289140',
};

export const footerSocials: SocialLink[] = [
  { platform: 'linkedin', href: 'https://linkedin.com', ariaLabel: 'H2 Lanka on LinkedIn' },
  { platform: 'mail', href: 'mailto:info@h2lanka.lk', ariaLabel: 'Send an email to H2 Lanka' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
];
