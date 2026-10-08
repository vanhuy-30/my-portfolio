export type Locale = "en" | "vi";
export type Theme = "light" | "dark";

export type SkillCategory =
  | "frontend"
  | "mobile"
  | "backend"
  | "architecture"
  | "tools";

export interface SkillGroup {
  id: SkillCategory;
  items: string[];
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  appStore?: string;
  playStore?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  contribution: string;
  technicalDecisions: string[];
  challenges: string[];
  results: string[];
}

export type ProjectCategory = "mobile" | "web" | "personal";

export interface Project {
  id: string;
  category: ProjectCategory;
  name: string;
  role: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  outcome: string;
  links: ProjectLinks;
  images: string[];
  caseStudy: ProjectCaseStudy;
  featured?: boolean;
}

export interface ExperienceRole {
  title: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  location?: string;
  roles: ExperienceRole[];
}

export interface GithubRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  stack: string[];
  url: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github?: string;
  linkedin: string;
  primarySkills: string[];
}
