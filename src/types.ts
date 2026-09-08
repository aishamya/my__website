export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  systemOverview: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  codeSnippet?: string;
  githubUrl?: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TrajectoryPhase {
  phase: string;
  badge: string;
  title: string;
  description: string;
  status: 'active' | 'in_progress' | 'target';
}

export interface ExtracurricularItem {
  tag: string;
  title: string;
  description: string;
}

export interface CertificationItem {
  issuer: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}
