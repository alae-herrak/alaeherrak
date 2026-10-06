export type Language = "en" | "fr";

export interface NavTranslations {
  work: string;
  experience: string;
  projects: string;
  contact: string;
}

export interface HeroTranslations {
  statusBadge: string;
  typewriterWords: { text: string }[];
  bio: string;
  viewWork: string;
  getInTouch: string;
  resumeLabel: string;
}

export interface WorkProjectItem {
  slug: string;
  category: string;
  role: string;
  title: string;
  subtitle: string;
  highlights: string[];
  cta: string;
}

export interface WorkTranslations {
  badge: string;
  title: string;
  description: string;
  projects: WorkProjectItem[];
  viewAllProjects: string;
}

export interface ExperienceTranslations {
  badge: string;
  title: string;
  description: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  skillsTitle: string;
}

export interface TechCategoryTranslation {
  title: string;
  description: string;
}

export interface StackTranslations {
  badge: string;
  title: string;
  description: string;
  categories: {
    frontend: TechCategoryTranslation;
    backend: TechCategoryTranslation;
    systems: TechCategoryTranslation;
  };
}

export interface ContactFormErrors {
  nameRequired: string;
  nameMin: string;
  nameMax: string;
  emailRequired: string;
  emailInvalid: string;
  emailMax: string;
  messageRequired: string;
  messageMin: string;
  messageMax: string;
}

export interface ContactTranslations {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendButton: string;
  sendingButton: string;
  successToast: string;
  errorToast: string;
  orDirectEmail: string;
  errors: ContactFormErrors;
}

export interface ProjectsPageItemTranslation {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  highlights: string[];
  scopeNote?: string;
  outcome: string;
}

export interface ProjectsPageTranslations {
  badge: string;
  title: string;
  subtitle: string;
  architectureHeading: string;
  coreImplementation: string;
  techStack: string;
  outcomeHeading: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  items: ProjectsPageItemTranslation[];
}

export interface FooterTranslations {
  rights: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  work: WorkTranslations;
  experience: ExperienceTranslations;
  stack: StackTranslations;
  contact: ContactTranslations;
  projectsPage: ProjectsPageTranslations;
  footer: FooterTranslations;
}
