import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period?: string;
  description: string;
  type: 'Education' | 'Leadership' | 'Experience';
}

export interface ResearchInterest {
  topic: string;
  details: string;
}