export interface Skill {
  name: string;
  level: number; // percentage 0-100
  category: 'digital-marketing' | 'community-campaign' | 'analytics';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  category: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  metrics?: { label: string; value: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  focus: string[];
  period: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string; // e.g., '1st Runner-Up', 'Best Region', etc.
}
