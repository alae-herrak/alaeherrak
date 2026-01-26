import { Monitor, Globe, LucideIcon } from "lucide-react";

export interface ProjectPlatform {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  platforms: ProjectPlatform[];
  stack: string[];
  highlights: string[];
  scopeNote?: string;
  outcome: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "qarawiyyin",
    title: "Project Qarawiyyin",
    subtitle: "University Management Ecosystem",
    role: "Lead Frontend Developer",
    platforms: [
      { name: "Admin Desktop", icon: Monitor },
      { name: "Student Web Portal", icon: Globe },
      { name: "Professor Web Portal", icon: Globe },
    ],
    stack: ["Electron", "TypeScript", "React", "Tailwind CSS", "WebSockets"],
    highlights: [
      "Component-level RBAC (Read/Write permissions) assigned by Master Admin.",
      "Module-based architecture covering HR, Pedagogy, Exams, and Payments.",
      "Automated certificate issuance pipeline replacing paper workflows.",
      "Custom Form Builder for student registration with Excel data ingestion.",
      "Automated desktop updates via GitHub and electron-updater.",
    ],
    scopeNote:
      "Extensive departmental modules (HR, Payments, Schooling) not listed for brevity.",
    outcome:
      "Successfully migrated university operations from paper-based tracking to a unified digital ecosystem, providing the Dean with real-time oversight of all departments.",
  },
  {
    slug: "nid",
    title: "Project Nid",
    subtitle: "Government Grant Decision Support System",
    role: "Lead Full Stack Developer",
    platforms: [
      { name: "Admin Desktop", icon: Monitor },
      { name: "Public Submission Portal", icon: Globe },
    ],
    stack: ["Electron", "Node.js", "Express", "React", "TypeScript", "MySQL"],
    highlights: [
      "Custom mathematical engine for business plan risk/success assessment.",
      "Identity-gated submission flow with pre-validated ID white-listing.",
      "Multi-step financial intake form with complex validation and data persistence.",
      "Administrative analytics dashboard with real-time data visualization.",
      "Digitized face-to-face manual processes into a secure automated pipeline.",
    ],
    outcome:
      "Replaced manual Excel-based evaluations with a secure, automated decision-making tool, significantly reducing processing time and human error in grant distribution.",
  },
];
