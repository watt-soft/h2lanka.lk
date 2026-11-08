export interface AboutMetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export type ValueChainCategory = 'all' | 'production' | 'applications' | 'consultancy';

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  iconName: string;
  iconColor: string;
  iconBg: string;
  hoverBg: string;
  accentGradient: string;
}

export interface ValueChainItem {
  id: string;
  title: string;
  category: 'production' | 'applications' | 'consultancy';
  categoryLabel: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface StrategicPillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  accentColor: 'blue' | 'green' | 'cyan';
}

export interface PipelineStageItem {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface CommitmentItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accent: string;
}

