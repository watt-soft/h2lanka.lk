import type { FooterLink, FooterSection, SocialLink } from '../types';

export const footerNavigation: FooterSection = {
  title: 'Quick Navigation',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Our Focus', href: '#our-focus' },
    { label: 'Strategic Partners', href: '#partners' },
    { label: 'Contact Us', href: '#contact' },
  ],
};

export const footerSolutions: FooterSection = {
  title: 'Hydrogen Focus',
  links: [
    { label: 'Green Electrolysis & Pure H2', href: '#our-focus' },
    { label: 'Solar & Wind Infrastructure', href: '#our-focus' },
    { label: 'Industrial Decarbonization', href: '#our-focus' },
    { label: 'Clean Storage & Logistics', href: '#our-focus' },
    { label: 'Renewable Grid Balancing', href: '#our-focus' },
  ],
};

export const footerContact = {
  title: 'Headquarters & Inquiries',
  address: 'Colombo, Sri Lanka',
  email: 'info@h2lanka.lk',
  phone: '+94 (11) 234-5678',
  hours: 'Mon – Fri: 8:30 AM – 5:30 PM (SLST)',
  registration: 'H2 Lanka (Pvt) Ltd • Reg. No: PV-00289140',
};

export const footerSocials: SocialLink[] = [
  { platform: 'linkedin', href: 'https://linkedin.com', ariaLabel: 'H2 Lanka on LinkedIn' },
  { platform: 'twitter', href: 'https://twitter.com', ariaLabel: 'H2 Lanka on X / Twitter' },
  { platform: 'youtube', href: 'https://youtube.com', ariaLabel: 'H2 Lanka on YouTube' },
  { platform: 'mail', href: 'mailto:info@h2lanka.lk', ariaLabel: 'Send an email to H2 Lanka' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Environmental & Carbon Compliance', href: '#compliance' },
];

