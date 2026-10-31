import type { FooterLink, FooterSection, SocialLink } from '../types';

export const footerNavigation: FooterSection = {
  title: 'Quick Navigation',
  links: [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    { label: 'Our Focus', href: '#/our-focus' },
    { label: 'Strategic Partners', href: '#/partners' },
    { label: 'Contact Us', href: '#/contact' },
  ],
};

export const footerSolutions: FooterSection = {
  title: '[Solutions: Core Offerings]',
  links: [
    { label: '[Offering 01: Primary Service]', href: '#/our-focus' },
    { label: '[Offering 02: Secondary Service]', href: '#/our-focus' },
    { label: '[Offering 03: Specialized Solution]', href: '#/our-focus' },
    { label: '[Offering 04: Industrial Program]', href: '#/our-focus' },
    { label: '[Offering 05: Advisory / Support]', href: '#/our-focus' },
  ],
};

export const footerContact = {
  title: '[Contact: Headquarters & Inquiries]',
  address: '[Address: 123 Business Avenue, Suite 100, City, Country]',
  email: 'info@company.com',
  phone: '+00 (00) 000-0000',
  hours: '[Hours: Mon – Fri: 9:00 AM – 5:00 PM (Timezone)]',
  registration: '[Company Name (Pvt) Ltd • Reg. No: PV-00000000]',
};

export const footerSocials: SocialLink[] = [
  { platform: 'linkedin', href: 'https://linkedin.com', ariaLabel: 'Company on LinkedIn' },
  { platform: 'twitter', href: 'https://twitter.com', ariaLabel: 'Company on X / Twitter' },
  { platform: 'youtube', href: 'https://youtube.com', ariaLabel: 'Company on YouTube' },
  { platform: 'mail', href: 'mailto:info@company.com', ariaLabel: 'Send an email to Company' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: '[Compliance: Regulatory Standards]', href: '#compliance' },
];
