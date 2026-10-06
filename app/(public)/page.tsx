"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { GridBackground } from "@/components/ui/grid-background";
import { cn } from "@/lib/utils";
import { ScrollIcon, ScrollIndicator } from "@/components/ui/scroll-indicator";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ContactForm } from "@/components/public/contact-form";
import { SmoothAnchor } from "@/components/public/smooth-anchor";
import { ResumeLinks } from "@/components/public/resume-links";
import { useLanguage } from "@/lib/i18n";

// --- DATA CONFIGURATION ---

const WORK_EXPERIENCE_SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Tauri v2",
  "Electron",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "WebSockets",
  "Git",
];

const PROJECT_METADATA: Record<
  string,
  { stack: string[]; link: string }
> = {
  "yosan-budget": {
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
    link: "/projects#yosan-budget",
  },
  smarthire: {
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Ollama",
    ],
    link: "/projects#smarthire",
  },
  qarawiyyin: {
    stack: [
      "Electron",
      "TypeScript",
      "React",
      "Node.js",
      "WebSockets",
      "Tailwind CSS",
    ],
    link: "/projects#qarawiyyin",
  },
  "exact-pos": {
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "jsPDF",
    ],
    link: "/projects#exact-pos",
  },
};

interface TechItem {
  name: string;
  icon?: string;
  customIcon?: React.ReactNode;
  color: string;
  darkText?: boolean;
}

interface TechCategory {
  title: string;
  description: string;
  skills: TechItem[];
}

const HonoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-4 shrink-0 transition-transform duration-300 group-hover/badge:scale-110"
    aria-hidden="true"
  >
    <path d="M12.445.002a45.529 45.529 0 0 0-5.252 8.146 8.595 8.595 0 0 1-.555-.53 27.796 27.796 0 0 0-1.205-1.542 8.762 8.762 0 0 0-1.251 2.12 20.743 20.743 0 0 0-1.448 5.88 8.867 8.867 0 0 0 .338 3.468c1.312 3.48 3.794 5.593 7.445 6.337 3.055.438 5.755-.333 8.097-2.312 2.677-2.59 3.359-5.634 2.047-9.132a33.287 33.287 0 0 0-2.988-5.59A91.34 91.34 0 0 0 12.615.053a.216.216 0 0 0-.17-.051Zm-.336 3.906a50.93 50.93 0 0 1 4.794 6.552c.448.767.817 1.57 1.108 2.41.606 2.386-.044 4.354-1.951 5.904-1.845 1.298-3.87 1.683-6.072 1.156-2.376-.737-3.75-2.335-4.121-4.794a5.107 5.107 0 0 1 .242-2.266c.358-.908.79-1.774 1.3-2.601l1.446-2.121a397.33 397.33 0 0 0 3.254-4.24Z" />
  </svg>
);

const FRONTEND_SKILLS: TechItem[] = [
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    color: "#007acc",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    color: "#f7df1e",
    darkText: true,
  },
  {
    name: "React",
    icon: "devicon-react-original",
    color: "#61dafb",
    darkText: true,
  },
  { name: "Next.js", icon: "devicon-nextjs-plain", color: "#000000" },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain",
    color: "#38bdf8",
    darkText: true,
  },
  { name: "HTML / CSS", icon: "devicon-html5-plain", color: "#e34f26" },
];

const BACKEND_SKILLS: TechItem[] = [
  { name: "Node.js", icon: "devicon-nodejs-plain", color: "#5fa04e" },
  {
    name: "Bun",
    icon: "devicon-bun-plain",
    color: "#fbf0df",
    darkText: true,
  },
  { name: "Express", icon: "devicon-express-original", color: "#444444" },
  { name: "Hono", customIcon: <HonoIcon />, color: "#e36002" },
  { name: "MySQL", icon: "devicon-mysql-plain", color: "#046586" },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain",
    color: "#336791",
  },
  { name: "Prisma", icon: "devicon-prisma-plain", color: "#2d3748" },
  {
    name: "WebSockets",
    icon: "devicon-socketio-original",
    color: "#010101",
  },
];

const SYSTEMS_SKILLS: TechItem[] = [
  {
    name: "Tauri",
    icon: "devicon-tauri-plain",
    color: "#ffc131",
    darkText: true,
  },
  { name: "Electron", icon: "devicon-electron-original", color: "#47848f" },
  { name: "Git", icon: "devicon-git-plain", color: "#f05032" },
  {
    name: "GitHub Actions",
    icon: "devicon-githubactions-plain",
    color: "#2088ff",
  },
  { name: "Docker", icon: "devicon-docker-plain", color: "#2496ed" },
  {
    name: "Linux",
    icon: "devicon-linux-plain",
    color: "#fcc624",
    darkText: true,
  },
];

// --- SUB-COMPONENTS ---

const TechIcon = ({ name, icon, customIcon, color, darkText }: TechItem) => {
  return (
    <div
      style={{ "--brand-color": color } as React.CSSProperties}
      className={cn(
        "group/badge border-border/80 bg-secondary/50 dark:bg-secondary/30 relative flex h-11 items-center gap-2.5 rounded-xl border px-3.5 shadow-xs transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-transparent hover:shadow-md",
        "hover:bg-[var(--brand-color)]",
        darkText ? "hover:text-black" : "hover:text-white",
        "text-foreground",
      )}
    >
      <div className="flex size-5 shrink-0 items-center justify-center transition-transform duration-300 group-hover/badge:scale-110">
        {customIcon ? (
          customIcon
        ) : (
          <span className="text-base leading-none" aria-hidden="true">
            <i className={icon} aria-hidden="true"></i>
          </span>
        )}
      </div>
      <span className="text-xs font-semibold tracking-tight whitespace-nowrap transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

// --- MAIN PAGE ---

export default function HomePage() {
  const { language, t } = useLanguage();

  const navItems = [
    { name: t.nav.work, link: "/#work" },
    { name: t.nav.experience, link: "/#experience" },
    { name: t.nav.projects, link: "/projects" },
    { name: t.nav.contact, link: "/#contact" },
  ];

  const techCategories: TechCategory[] = [
    {
      title: t.stack.categories.frontend.title,
      description: t.stack.categories.frontend.description,
      skills: FRONTEND_SKILLS,
    },
    {
      title: t.stack.categories.backend.title,
      description: t.stack.categories.backend.description,
      skills: BACKEND_SKILLS,
    },
    {
      title: t.stack.categories.systems.title,
      description: t.stack.categories.systems.description,
      skills: SYSTEMS_SKILLS,
    },
  ];

  return (
    <div className="relative mx-auto max-w-6xl space-y-32 px-4 py-12 pt-20 sm:px-6">
      <ScrollIndicator />

      <GridBackground>
        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex flex-col items-center gap-6 pt-20 pb-10 text-center">
          <Badge
            variant="secondary"
            className="border-primary/20 hover:border-primary/40 animate-in fade-in slide-in-from-bottom-3 gap-2 rounded-full px-4 py-1.5 transition-colors duration-1000"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            {t.hero.statusBadge}
          </Badge>

          <h1 className="text-foreground text-6xl leading-none font-extrabold tracking-tighter md:text-9xl">
            Alae Herrak
          </h1>

          <div className="max-w-3xl space-y-4">
            <TypewriterEffectSmooth
              key={language}
              words={t.hero.typewriterWords}
              textClassName="text-2xl font-semibold tracking-tight md:text-3xl"
              wordsClassName="text-foreground/80"
              cursorClassName="h-8 sm:h-8 md:h-9 xl:h-9 bg-primary"
            />

            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-balance md:text-xl">
              {t.hero.bio}
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-left-3 mt-4 mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 duration-1000">
            <Button size="lg" className="order-1 group gap-2 rounded-full px-6 sm:px-8" asChild>
              <SmoothAnchor href="#work">
                {t.hero.viewWork}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </SmoothAnchor>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="order-2 sm:order-3 rounded-full px-6 sm:px-8"
              asChild
            >
              <SmoothAnchor href="#contact">{t.hero.getInTouch}</SmoothAnchor>
            </Button>
            <div className="order-3 sm:order-2 w-full flex justify-center sm:w-auto">
              <ResumeLinks />
            </div>
          </div>

          <ScrollIcon />
        </section>
      </GridBackground>

      {/* --- 2. SELECTED WORK (DIRECT PREVIEW) --- */}
      <section id="work" className="scroll-mt-24 space-y-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge variant="outline" className="px-4 py-1">
            {t.work.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t.work.title}
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
            {t.work.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.work.projects.map((project) => {
            const meta = PROJECT_METADATA[project.slug] ?? {
              stack: [],
              link: "/projects",
            };

            return (
              <div
                key={project.slug}
                className="portfolio-card group relative flex flex-col justify-between rounded-3xl p-6 transition-all sm:p-8 md:p-9"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="border-primary/20 bg-primary/10 text-primary rounded-full border px-3 py-1 font-mono text-xs font-bold tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {project.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="group-hover:text-primary text-2xl font-bold tracking-tight transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-xs font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <ul className="text-muted-foreground space-y-2.5 pt-2 text-sm leading-relaxed">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="bg-primary/15 text-primary mt-1 flex size-4 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-border/60 mt-6 space-y-4 border-t pt-8">
                  <div className="flex flex-wrap gap-1.5">
                    {meta.stack.map((tPill) => (
                      <span
                        key={tPill}
                        className="portfolio-pill rounded-lg px-2.5 py-1 text-[11px] font-medium"
                      >
                        {tPill}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/link text-primary hover:text-primary -ml-3 gap-1.5 text-sm font-semibold"
                    asChild
                  >
                    <Link href={meta.link}>
                      {project.cta}
                      <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-2">
          <Button variant="outline" className="gap-2 rounded-full px-6" asChild>
            <Link href="/projects">
              {t.work.viewAllProjects}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* --- 3. WORK EXPERIENCE --- */}
      <section id="experience" className="scroll-mt-24 space-y-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge variant="outline" className="px-4 py-1">
            {t.experience.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t.experience.title}
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
            {t.experience.description}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="portfolio-card relative rounded-3xl p-8 transition-all hover:shadow-xl md:p-10">
            <div className="border-border/60 mb-6 flex flex-col gap-2 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-foreground text-xl font-bold tracking-tight">
                  {t.experience.role}
                </h3>
                <p className="text-primary mt-0.5 text-sm font-medium">
                  {t.experience.company}
                </p>
              </div>
              <span className="text-muted-foreground bg-secondary/80 border-border/60 self-start rounded-full border px-3 py-1.5 font-mono text-xs font-semibold sm:self-auto">
                {t.experience.period}
              </span>
            </div>

            <ul className="space-y-4">
              {t.experience.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span className="text-primary mt-0.5 font-mono text-sm font-bold">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Technologies & Skills Badges */}
            <div className="border-border/60 mt-8 border-t pt-6">
              <h4 className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
                {t.experience.skillsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {WORK_EXPERIENCE_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="border-border/60 bg-secondary/50 text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-secondary inline-flex items-center rounded-lg border px-2.5 py-1 font-mono text-xs font-medium transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TECHNICAL STACK --- */}
      <section id="stack" className="scroll-mt-24 space-y-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge variant="outline" className="px-4 py-1">
            {t.stack.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t.stack.title}
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
            {t.stack.description}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="portfolio-card relative flex flex-col rounded-3xl p-7 transition-all"
            >
              <div className="mb-6 space-y-2">
                <h3 className="text-xl font-bold tracking-tight">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <TechIcon key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. CONTACT SECTION --- */}
      <section
        id="contact"
        className="flex scroll-mt-32 flex-col items-center gap-10 py-10"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
            {t.contact.titleStart}
            <span className="text-primary">{t.contact.titleHighlight}</span>
            {t.contact.titleEnd}
          </h2>
          <p className="text-muted-foreground text-xl">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Minimalist Contact Form */}
        <ContactForm />

        {/* Alternative Email Direct Link & Social Icons */}
        <div className="flex flex-col items-center gap-6 pt-2">
          <p className="text-muted-foreground font-mono text-xs">
            {t.contact.orDirectEmail}{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Opportunity%20/%20Project%20Inquiry`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
          </p>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="focus-visible:ring-primary/40 size-12 rounded-full focus-visible:ring-2"
              asChild
            >
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit GitHub Profile (opens in new tab)"
              >
                <i
                  className="devicon-github-plain text-xl"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Visit GitHub Profile</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="focus-visible:ring-primary/40 size-12 rounded-full focus-visible:ring-2"
              asChild
            >
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn Profile (opens in new tab)"
              >
                <i
                  className="devicon-linkedin-plain text-xl"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Visit LinkedIn Profile</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-border/40 flex flex-col items-center justify-between gap-10 border-t pt-20 pb-16 md:flex-row">
        <p className="text-muted-foreground text-sm font-medium">
          {t.footer.rights} {new Date().getFullYear()}
        </p>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
