import { Translations } from "../types";

export const en: Translations = {
  nav: {
    work: "Work",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    statusBadge: "Open to New Challenges",
    typewriterWords: [
      { text: "Full-Stack" },
      { text: "Software" },
      { text: "Engineer" },
    ],
    bio: "I build and maintain production web and desktop applications with TypeScript, React, and Node.js. Focused on clean architecture, performance, and end-to-end product ownership.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    resumeLabel: "Resume",
  },
  work: {
    badge: "Selected Work",
    title: "Featured Systems",
    description:
      "Mission-critical desktop runtimes, civic governance platforms, and evaluation engines built for real-world operations.",
    projects: [
      {
        slug: "yosan-budget",
        category: "Public Sector ERP",
        role: "Lead Frontend Engineer",
        title: "Yosan - Public Procurement & Budget ERP",
        subtitle: "Desktop Budget Execution & Expenditure Lifecycle System",
        highlights: [
          "Lightweight native desktop client built with Tauri v2, React 19, and Bun (<15MB distribution) with native OS file dialogs and GitHub auto-updates.",
          "Moroccan public expenditure pipeline modeling: procurement acts, supplier commissions, delivery validation, TVA/IS withholdings, and Treasury dispatch.",
          "Arbitrary-precision financial calculations using BigInt integer-cent conversion and 4-level hierarchical Excel budget ingestion (Chapitre > Article > Paragraphe > Ligne).",
        ],
        cta: "Read Case Study",
      },
      {
        slug: "smarthire",
        category: "AI Recruitment Engine",
        role: "Lead Systems Engineer",
        title: "SmartHire",
        subtitle: "AI-Assisted Candidate Screening & Evaluation Engine",
        highlights: [
          "Decoupled two-tier evaluation separating LLM semantic text citations from deterministic weighted score calculations.",
          "Built SHA-256 document deduplication with in-memory extraction locks to eliminate redundant LLM calls on concurrent uploads.",
          "Integrated local PDF text extraction via WebAssembly and streaming NDJSON endpoints for interactive CV querying.",
        ],
        cta: "Read Case Study",
      },
      {
        slug: "qarawiyyin",
        category: "University ERP",
        role: "Lead Full-Stack",
        title: "Qarawiyyin",
        subtitle: "University Management System",
        highlights: [
          "Desktop admin app and web portals for university staff, professors, and students.",
          "Built role-based access controls (RBAC) to manage departmental permissions across HR, grades, and payments.",
          "Implemented real-time updates using WebSockets and automated PDF certificate generation.",
        ],
        cta: "Read Case Study",
      },
      {
        slug: "exact-pos",
        category: "Retail POS & ERP",
        role: "Lead Frontend Engineer",
        title: "Exact POS & Retail ERP",
        subtitle: "Desktop Point-of-Sale & Store Management System",
        highlights: [
          "High-throughput desktop POS featuring barcode scanning, tiered discounts, and multi-tender split payments.",
          "Real-time mobile-to-desktop register sync via Socket.IO for floor-staff mobile carts auto-populating checkouts.",
          "Bilingual thermal receipt & invoice engine with jsPDF, vector Arabic typography (Amiri), and automated updater pipelines.",
        ],
        cta: "Read Case Study",
      },
    ],
    viewAllProjects: "View All Technical Case Studies",
  },
  experience: {
    badge: "Experience",
    title: "Work Experience",
    description:
      "Track record of engineering production systems and leading technical execution.",
    role: "Full-Stack Software Engineer",
    company: "Software & Digital Agency",
    period: "2023 - 2026",
    bullets: [
      "Built, deployed, and maintained custom desktop and web platforms for educational institutions and regional grant programs.",
      "Developed full-stack features end-to-end: designed MySQL schemas, implemented REST APIs with Node.js/Express, and built client interfaces in React and TypeScript.",
      "Built cross-platform desktop distributions using Electron and Tauri, setting up automated GitHub release pipelines and updater flows to replace manual installations.",
      "Worked directly with end users and stakeholders to translate administrative workflows into working software and resolve production issues.",
    ],
    skillsTitle: "Technologies & Core Skills",
  },
  stack: {
    badge: "Skills & Tooling",
    title: "Technical Stack",
    description:
      "Technologies and tools I leverage to build scalable, resilient production systems.",
    categories: {
      frontend: {
        title: "Languages & Frontend",
        description:
          "Type-safe clients, reactive UI systems, and native viewports.",
      },
      backend: {
        title: "Backend & Runtimes",
        description:
          "Fast HTTP APIs, data persistence, and real-time synchronization.",
      },
      systems: {
        title: "Systems & Tools",
        description:
          "Cross-platform runtimes, containerization, and automation.",
      },
    },
  },
  contact: {
    titleStart: "Let's build something ",
    titleHighlight: "exceptional",
    titleEnd: ".",
    subtitle: "Available for high-impact roles or specialized consulting.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project, team, or opportunity...",
    sendButton: "Send Message",
    sendingButton: "Sending...",
    successToast: "Message sent successfully! I'll get back to you soon.",
    errorToast:
      "Failed to send message. Please try again or email me directly.",
    orDirectEmail: "Or reach out directly at",
    errors: {
      nameRequired: "Please enter your name.",
      nameMin: "Name must be at least 2 characters.",
      nameMax: "Name cannot exceed 80 characters.",
      emailRequired: "Please enter your email address.",
      emailInvalid:
        "Please enter a valid email address (e.g. name@domain.com).",
      emailMax: "Email cannot exceed 120 characters.",
      messageRequired: "Please enter a message.",
      messageMin: "Message must be at least 10 characters.",
      messageMax: "Message cannot exceed 3,000 characters.",
    },
  },
  projectsPage: {
    badge: "Portfolio",
    title: "Featured Projects",
    subtitle:
      "Technical breakdown of production systems I've architected and maintained. Due to NDAs, focus is placed on system logic and architectural challenges.",
    architectureHeading: "Key Technical Challenges & Architecture",
    coreImplementation: "Core Implementation",
    techStack: "Tech Stack",
    outcomeHeading: "Outcome & Impact",
    ctaTitle: "Interested in working together?",
    ctaSubtitle:
      "I'm always open to discussing new projects and opportunities.",
    ctaButton: "Let's Talk",
    items: [
      {
        slug: "yosan-budget",
        title: "Yosan - Public Procurement & Budget ERP",
        subtitle: "Desktop Budget Execution & Expenditure Lifecycle System",
        role: "Lead Frontend Engineer",
        highlights: [
          "Engineered a lightweight desktop client using Tauri v2, React 19, and Bun, featuring native OS file dialogs and background auto-updating via GitHub releases.",
          "Modeled the Moroccan public expenditure pipeline: procurement act creation, supplier commission evaluation, delivery validation, tax withholdings (TVA/IS), and Treasury dispatch (Bordereau Trésor).",
          "Implemented arbitrary-precision financial calculations using BigInt integer-cent conversion to prevent IEEE 754 floating-point drift in budget allocations.",
          "Built a hierarchical Excel ingestion engine parsing 4-level budget structures (Chapitre > Article > Paragraphe > Ligne) with line-by-line syntax validation and client-side procurement PDF generation.",
        ],
        outcome:
          "Replaced manual spreadsheet-based budget tracking with a sub-15MB native desktop ERP, enforcing procedural validation across public procurement acts and treasury disbursements.",
      },
      {
        slug: "smarthire",
        title: "SmartHire",
        subtitle: "AI-Assisted Candidate Screening & Evaluation Engine",
        role: "Lead Full-Stack & Systems Engineer",
        highlights: [
          "Engineered a decoupled two-tier evaluation system: LLM handles categorical criteria matching with exact text citations, while a deterministic formula computes weighted applicant scores (skills, experience, education).",
          "Built document deduplication using SHA-256 file checksums and in-memory extraction locks to eliminate redundant LLM calls on concurrent uploads.",
          "Implemented candidate identity resolution with phone/email normalization and automated cross-job conflict detection.",
          "Integrated local PDF text extraction via WebAssembly/unpdf and streaming NDJSON endpoints for interactive CV querying and gap-focused interview prep generation.",
        ],
        outcome:
          "Eliminated arbitrary LLM scoring variance by separating semantic classification from mathematical evaluation, providing recruiters with deterministic candidate rankings and verified source citations.",
      },
      {
        slug: "qarawiyyin",
        title: "Qarawiyyin",
        subtitle: "University Management System",
        role: "Lead Full-Stack Engineer",
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
        slug: "exact-pos",
        title: "Exact POS & Retail ERP",
        subtitle: "Desktop Point-of-Sale & Store Management System",
        role: "Lead Frontend Engineer",
        highlights: [
          "Built a high-throughput desktop point-of-sale interface featuring barcode scanning, tiered discount calculations, and complex multi-tender split payments (cash, card, and multi-cheque schedules).",
          "Engineered real-time mobile-to-desktop register synchronization using Socket.IO, allowing floor staff to scan carts on mobile that instantly populate the cashier's checkout drawer.",
          "Implemented bilingual (French/Arabic) invoice and thermal receipt generation with jsPDF, embedding vector Arabic typography (Amiri) and dynamic RTL layouts.",
          "Integrated automated desktop updates and release pipelines via electron-updater alongside daily cash reconciliation and session closing workflows.",
        ],
        outcome:
          "Streamlined retail checkout workflows and unified multi-device operations into a single synchronized register, handling daily transaction accounting and automated receipt issuance.",
      },
      {
        slug: "storyland-edtech",
        title: "Storyland",
        subtitle: "Gamified Reading Platform & Quiz Evaluation Engine",
        role: "Lead Full-Stack Developer",
        highlights: [
          "Engineered multi-tenant school workspaces with role-based access for system admins, teachers, and elementary students.",
          "Built an interactive 2D journey map with PixiJS canvas, unlocking progression milestones and discovery checkpoints based on student reading points.",
          "Developed a timed quiz engine with countdowns, remainder-balanced 100-point scoring across arbitrary question counts, and once-per-day attempt rate limits.",
          "Built a catalog import pipeline allowing schools to clone central library stories, replicate question sets, and manage local media assets.",
          "Added batch student onboarding from Excel rosters using SheetJS with Moroccan Massar code validation and automated password generation.",
        ],
        outcome:
          "Modernized reading tracking across elementary schools, replacing manual reading logs with automated quiz grading and school-wide reading leaderboards.",
      },
      {
        slug: "vaa-associations",
        title: "VAA - Virtual Assistant for Associations",
        subtitle: "Full-Stack NGO Governance & Document Automation Platform",
        role: "Lead Full-Stack Developer",
        highlights: [
          "Engineered a browser-side document compilation engine using @react-pdf/renderer with embedded Arabic typography (Cairo), generating legally compliant NGO bylaws, assembly minutes, and invoices without server rendering overhead.",
          "Built an on-premise Arabic conversational NLP assistant using node-nlp and arabic-stemmer, featuring live model retraining and bulk dataset management via Excel.",
          "Architected administrative modules for association lifecycle tracking: constituent assembly quorum logging, executive board registers, and grant opportunity aggregations.",
          "Led the full-stack architecture across a decoupled Express/MySQL backend and Vite client, initiating a modernized Next.js 16 and Prisma ORM migration.",
        ],
        outcome:
          "Digitized legal association formation and governance workflows across regional organizations, replacing manual paperwork with automated document compilation and self-contained Arabic NLP guidance.",
      },
      {
        slug: "nid",
        title: "Nid",
        subtitle: "Grant Application & Scoring System",
        role: "Lead Full-Stack Engineer",
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
        slug: "mystore-cms",
        title: "MyStore E-Commerce & Content CMS",
        subtitle: "Administrative Back-Office & Storefront Management Engine",
        role: "Lead Frontend Engineer",
        highlights: [
          "Architected an administrative back-office managing multi-variant catalog data, inventory levels, flash sale schedules, and media uploads via multipart/form-data.",
          "Engineered a dual-state order fulfillment pipeline separating payment reconciliation from multi-stage shipping logistics (in-transit, delivery tracking, and returns).",
          "Built a dynamic bilingual RTL/LTR engine supporting over 500 localized strings, automatically switching document direction and font families (Almarai for Arabic, Roboto for French).",
          "Integrated a live storefront theme customizer with dynamic hex color tokens, banner sequencing, WYSIWYG rich-text editing, and Recharts sales turnover analytics.",
        ],
        outcome:
          "Delivered a centralized operational dashboard replacing fragmented manual spreadsheets with unified order tracking, catalog management, and storefront customization.",
      },
    ],
  },
  footer: {
    rights: "Alae Herrak ©",
  },
};
