import {
  Monitor,
  Globe,
  Server,
  Smartphone,
  Cpu,
  School,
  LucideIcon,
} from "lucide-react";

export interface ProjectPlatform {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  id?: string;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  platforms: ProjectPlatform[];
  stack: string[];
  highlights: string[];
  scopeNote?: string;
  outcome: string;
  links?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "smarthire",
    slug: "smarthire",
    title: "SmartHire",
    subtitle: "AI-Assisted Candidate Screening & Evaluation Engine",
    role: "Lead Full-Stack & Systems Engineer",
    platforms: [
      { name: "Web Application", icon: Globe },
      { name: "FastAPI Microservice", icon: Server },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Ollama",
      "Tailwind CSS",
    ],
    highlights: [
      "Engineered a decoupled two-tier evaluation system: LLM handles categorical criteria matching with exact text citations, while a deterministic formula computes weighted applicant scores (skills, experience, education).",
      "Built document deduplication using SHA-256 file checksums and in-memory extraction locks to eliminate redundant LLM calls on concurrent uploads.",
      "Implemented candidate identity resolution with phone/email normalization and automated cross-job conflict detection.",
      "Integrated local PDF text extraction via WebAssembly/unpdf and streaming NDJSON endpoints for interactive CV querying and gap-focused interview prep generation.",
    ],
    outcome:
      "Eliminated arbitrary LLM scoring variance by separating semantic classification from mathematical evaluation, providing recruiters with deterministic candidate rankings and verified source citations.",
    links: [],
  },
  {
    slug: "qarawiyyin",
    title: "Project Qarawiyyin",
    subtitle: "University Management System",
    role: "Lead Full-Stack Engineer",
    platforms: [
      { name: "Admin Desktop", icon: Monitor },
      { name: "Student Web Portal", icon: Globe },
      { name: "Professor Web Portal", icon: Globe },
    ],
    stack: [
      "Electron",
      "TypeScript",
      "React",
      "Node.js",
      "Tailwind CSS",
      "WebSockets",
    ],
    highlights: [
      "Engineered component-level RBAC and real-time state synchronization via WebSockets.",
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
    subtitle: "Grant Application & Scoring System",
    role: "Lead Full-Stack Engineer",
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
  {
    id: "exact-pos",
    slug: "exact-pos",
    title: "Exact POS & Retail ERP",
    subtitle: "Desktop Point-of-Sale & Store Management System",
    role: "Lead Frontend Engineer",
    platforms: [
      { name: "Desktop Client (Electron)", icon: Monitor },
      { name: "Real-time Mobile Sync", icon: Smartphone },
    ],
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "jsPDF",
      "electron-updater",
    ],
    highlights: [
      "Built a high-throughput desktop point-of-sale interface featuring barcode scanning, tiered discount calculations, and complex multi-tender split payments (cash, card, and multi-cheque schedules).",
      "Engineered real-time mobile-to-desktop register synchronization using Socket.IO, allowing floor staff to scan carts on mobile that instantly populate the cashier's checkout drawer.",
      "Implemented bilingual (French/Arabic) invoice and thermal receipt generation with jsPDF, embedding vector Arabic typography (Amiri) and dynamic RTL layouts.",
      "Integrated automated desktop updates and release pipelines via electron-updater alongside daily cash reconciliation and session closing workflows.",
    ],
    outcome:
      "Streamlined retail checkout workflows and unified multi-device operations into a single synchronized register, handling daily transaction accounting and automated receipt issuance.",
    links: [],
  },
  {
    id: "mystore-cms",
    slug: "mystore-cms",
    title: "MyStore E-Commerce & Content CMS",
    subtitle: "Administrative Back-Office & Storefront Management Engine",
    role: "Lead Frontend Engineer",
    platforms: [{ name: "Web Application (SPA)", icon: Globe }],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Recharts",
      "react-intl",
    ],
    highlights: [
      "Architected an administrative back-office managing multi-variant catalog data, inventory levels, flash sale schedules, and media uploads via multipart/form-data.",
      "Engineered a dual-state order fulfillment pipeline separating payment reconciliation from multi-stage shipping logistics (in-transit, delivery tracking, and returns).",
      "Built a dynamic bilingual RTL/LTR engine supporting over 500 localized strings, automatically switching document direction and font families (Almarai for Arabic, Roboto for French).",
      "Integrated a live storefront theme customizer with dynamic hex color tokens, banner sequencing, WYSIWYG rich-text editing, and Recharts sales turnover analytics.",
    ],
    outcome:
      "Delivered a centralized operational dashboard replacing fragmented manual spreadsheets with unified order tracking, catalog management, and storefront customization.",
    links: [],
  },
  {
    id: "vaa-associations",
    slug: "vaa-associations",
    title: "VAA - Virtual Assistant for Associations",
    subtitle: "Full-Stack NGO Governance & Document Automation Platform",
    role: "Lead Full-Stack Developer",
    platforms: [
      { name: "Web Application (SPA & Next.js)", icon: Globe },
      { name: "Node.js REST API", icon: Server },
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Prisma",
      "@react-pdf/renderer",
      "Tailwind CSS",
    ],
    highlights: [
      "Engineered a browser-side document compilation engine using @react-pdf/renderer with embedded Arabic typography (Cairo), generating legally compliant NGO bylaws, assembly minutes, and invoices without server rendering overhead.",
      "Built an on-premise Arabic conversational NLP assistant using node-nlp and arabic-stemmer, featuring live model retraining and bulk dataset management via Excel.",
      "Architected administrative modules for association lifecycle tracking: constituent assembly quorum logging, executive board registers, and grant opportunity aggregations.",
      "Led the full-stack architecture across a decoupled Express/MySQL backend and Vite client, initiating a modernized Next.js 16 and Prisma ORM migration.",
    ],
    outcome:
      "Digitized legal association formation and governance workflows across regional organizations, replacing manual paperwork with automated document compilation and self-contained Arabic NLP guidance.",
    links: [],
  },
  {
    id: "yosan-budget",
    slug: "yosan-budget",
    title: "Yosan - Public Procurement & Budget ERP",
    subtitle: "Desktop Budget Execution & Expenditure Lifecycle System",
    role: "Lead Frontend Engineer",
    platforms: [
      { name: "Desktop Client (Tauri v2)", icon: Monitor },
      { name: "Native Windows Bundle", icon: Cpu },
    ],
    stack: [
      "Tauri v2",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Rust",
      "Bun",
      "xlsx",
      "jsPDF",
    ],
    highlights: [
      "Engineered a lightweight desktop client using Tauri v2, React 19, and Bun, featuring native OS file dialogs and background auto-updating via GitHub releases.",
      "Modeled the Moroccan public expenditure pipeline: procurement act creation, supplier commission evaluation, delivery validation, tax withholdings (TVA/IS), and Treasury dispatch (Bordereau Trésor).",
      "Implemented arbitrary-precision financial calculations using BigInt integer-cent conversion to prevent IEEE 754 floating-point drift in budget allocations.",
      "Built a hierarchical Excel ingestion engine parsing 4-level budget structures (Chapitre > Article > Paragraphe > Ligne) with line-by-line syntax validation and client-side procurement PDF generation.",
    ],
    outcome:
      "Replaced manual spreadsheet-based budget tracking with a sub-15MB native desktop ERP, enforcing procedural validation across public procurement acts and treasury disbursements.",
    links: [],
  },
  {
    id: "storyland-edtech",
    slug: "storyland-edtech",
    title: "Storyland",
    subtitle: "Gamified Reading Platform & Quiz Evaluation Engine",
    role: "Lead Full-Stack Developer",
    platforms: [
      { name: "Student Web App", icon: Globe },
      { name: "Desktop Client (Tauri v2)", icon: Monitor },
      { name: "School Admin Portal", icon: School },
    ],
    stack: [
      "React",
      "TypeScript",
      "Bun",
      "Express",
      "Prisma",
      "MariaDB",
      "PixiJS",
      "Tauri v2",
      "Tailwind CSS",
    ],
    highlights: [
      "Engineered multi-tenant school workspaces with role-based access for system admins, teachers, and elementary students.",
      "Built an interactive 2D journey map with PixiJS canvas, unlocking progression milestones and discovery checkpoints based on student reading points.",
      "Developed a timed quiz engine with countdowns, remainder-balanced 100-point scoring across arbitrary question counts, and once-per-day attempt rate limits.",
      "Built a catalog import pipeline allowing schools to clone central library stories, replicate question sets, and manage local media assets.",
      "Added batch student onboarding from Excel rosters using SheetJS with Moroccan Massar code validation and automated password generation.",
    ],
    outcome:
      "Modernized reading tracking across elementary schools, replacing manual reading logs with automated quiz grading and school-wide reading leaderboards.",
    links: [],
  },
];
