export type LeadershipCategory = 'all' | 'board' | 'advisory';

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  category: 'board' | 'advisory';
  categoryLabel: string;
  experience: string;
  credentials: string[];
  domain: string;
  bioExcerpt: string;
  fullBio: string[];
  image: {
    webp: string;
    jpg: string;
    alt: string;
  };
  keyPillars: string[];
}

