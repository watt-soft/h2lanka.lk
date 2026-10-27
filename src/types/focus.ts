export type FocusClusterId = 'all' | 'production' | 'downstream' | 'validation' | 'ecosystem';

export interface FocusAreaItem {
  id: string;
  title: string;
  cluster: FocusClusterId;
  clusterLabel: string;
  summary: string;
  iconName: string;
  tags: string[];
  impactMetric?: string;
}

export interface FocusSpotlightItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  stat: string;
  statLabel: string;
  points: string[];
  accentGradient: string;
}

export interface ApproachStepItem {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

