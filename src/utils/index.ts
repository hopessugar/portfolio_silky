import type { Skill, SkillCategory, Project, ProjectCategory } from '../types';

// Utility functions for the portfolio

/**
 * Filter skills by category
 */
export const getSkillsByCategory = (skills: Skill[], category: SkillCategory): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

/**
 * Get skills grouped by category
 */
export const getSkillsGroupedByCategory = (skills: Skill[]) => {
  const categories: SkillCategory[] = ['frontend', 'backend', 'design', 'automation', 'seo', 'tools'];
  
  return categories.reduce((grouped, category) => {
    grouped[category] = getSkillsByCategory(skills, category);
    return grouped;
  }, {} as Record<SkillCategory, Skill[]>);
};

/**
 * Filter projects by category
 */
export const getProjectsByCategory = (projects: Project[], category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.featured);
};

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  // Format Indian phone number: +91 95096 10432
  if (phone.length === 10) {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  }
  return phone;
};

/**
 * Create phone call link
 */
export const createPhoneLink = (phone: string): string => {
  return `tel:+91${phone}`;
};

/**
 * Create email link
 */
export const createEmailLink = (email: string, subject?: string): string => {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${params}`;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Debounce function for search/input handling
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Get skill level color based on proficiency
 */
export const getSkillLevelColor = (level: number): string => {
  if (level >= 90) return 'text-green-500';
  if (level >= 80) return 'text-blue-500';
  if (level >= 70) return 'text-yellow-500';
  return 'text-gray-500';
};

/**
 * Get skill level description
 */
export const getSkillLevelDescription = (level: number): string => {
  if (level >= 95) return 'Expert';
  if (level >= 85) return 'Advanced';
  if (level >= 75) return 'Proficient';
  if (level >= 65) return 'Intermediate';
  return 'Beginner';
};

/**
 * Calculate reading time for text content
 */
export const calculateReadingTime = (text: string, wordsPerMinute: number = 200): number => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

/**
 * Generate SEO-friendly slug from text
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Lazy load images with intersection observer
 */
export const lazyLoadImage = (img: HTMLImageElement, src: string): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
        observer.unobserve(img);
      }
    });
  });
  
  observer.observe(img);
};