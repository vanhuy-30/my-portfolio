export type Locale = "en" | "vi";
export type Theme = "light" | "dark";

export type SkillCategory =
  | "mobile"
  | "web"
  | "backend"
  | "ai"
  | "aiTools"
  | "practices";

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

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectCaseStudy {
  context: string;
  built: string[];
  decisions: string[];
  results: string[];
}

export type ProjectKind = "work" | "side";
export type ProjectCoverIcon = "sparkles" | "store" | "wallet";

export interface Project {
  id: string;
  kind: ProjectKind;
  featured?: boolean;
  nda?: boolean;
  inProgress?: boolean;
  name: string;
  company?: string;
  period: string;
  role: string;
  shortDescription: string;
  technologies: string[];
  metrics: ProjectMetric[];
  links: ProjectLinks;
  image?: string;
  coverIcon?: ProjectCoverIcon;
  caseStudy: ProjectCaseStudy;
}

export interface OtherWorkItem {
  id: string;
  name: string;
  detail: string;
}

export interface ExperiencePhase {
  label: string;
  period?: string;
  points: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  phases: ExperiencePhase[];
  technologies: string[];
}

export interface Profile {
  name: string;
  shortName: string;
  nickname: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  portfolioRepo: string;
  currentCompany: string;
}
