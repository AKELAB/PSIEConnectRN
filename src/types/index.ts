export enum AppView {
  HOME = 'HOME',
  JOBS = 'JOBS',
  COACH = 'COACH',
  PROFILE = 'PROFILE'
}

export type InsertionStatus = 'DRAFT' | 'VALIDATED' | 'INTERVIEW' | 'ONBOARDING' | 'INSERTED';

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string; // Détails académiques pour l'IA
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string; // Lien de vérification
}

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  year?: string; // Année de réalisation
  link?: string; // Lien vers le projet (Demo/Repo)
}

export interface UserProfile {
  name: string;
  title: string;
  location: string;
  bio: string;
  skills: Skill[];
  experienceYears: number;
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  status: InsertionStatus; // Nouveau champ pour le suivi
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // CDD, Stage, PSIE Contract
  salary: string;
  description: string;
  requiredSkills: string[];
  postedAt: string;
  link?: string; // Lien externe pour les offres web
  isWebResult?: boolean; // Indicateur pour le style visuel
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'EVENT' | 'NEWS' | 'TIP';
  date: string;
  image: string;
  summary: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}

export interface MatchResult {
  jobId: string;
  score: number;
  reason: string;
}