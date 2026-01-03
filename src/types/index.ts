// Core data types for the portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  profileImage: string;
  phone: string;
  email?: string;
  location?: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  liveUrl: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  completionDate: string;
  highlights?: string[];
}

export type ProjectCategory = 'ecommerce' | 'corporate' | 'agriculture' | 'fashion' | 'automation' | 'design' | 'consulting' | 'other';

export interface Skill {
  name: string;
  level: number; // 1-100
  category: SkillCategory;
  description?: string;
  icon?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'design' | 'automation' | 'seo' | 'tools' | 'other';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: ServiceCategory;
}

export type ServiceCategory = 'development' | 'design' | 'automation' | 'optimization' | 'consulting';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
  budget?: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  projects: Project[];
  skills: Skill[];
  services: Service[];
  testimonials?: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

// Component Props Interfaces
export interface HeroProps {
  personal: PersonalInfo;
  onContactClick?: () => void;
}

export interface ProjectGalleryProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export interface SkillsProps {
  skills: Skill[];
  services: Service[];
}

export interface ContactProps {
  personal: PersonalInfo;
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export interface AboutProps {
  personal: PersonalInfo;
  skills: Skill[];
}