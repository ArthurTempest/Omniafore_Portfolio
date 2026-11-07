export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  techTags: string[];
  iconName: string;
  accentColor: string; // 'purple' | 'cyan' | 'pink' | 'blue'
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metric: string;
  iconName: string;
  accentColor: string;
}

export type ProjectCategory = 'All' | 'Websites' | 'Software' | 'Graphics' | 'Video' | 'Automation';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Software' | 'Graphics' | 'Video' | 'Automation';
  badge: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  features: string[];
  technologies: string[];
  accentColor: string;
  deliverables: string[];
  visualType: 'grid-dashboard' | 'mobile-mockup' | 'motion-reel' | 'creative-poster' | 'workflow-nodes';
}
