export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features?: string[];
  gitHubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  category?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Languages' | 'Frontend' | 'Database' | 'AI' | 'Tools' | 'Coding-Platforms';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  milestones: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  glowingBadgeColor: string; // Tailwind color classes for glow
}

export interface Achievement {
  title: string;
  category: 'Leadership' | 'Coding' | 'College';
  description: string;
  badgeText: string;
}
