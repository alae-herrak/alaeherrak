import { Badge } from "@/components/ui/badge";
import {
  Terminal,
  Cpu,
  PlusCircle,
  Layers,
  ArrowUpRight,
  Code2,
  Rocket,
} from "lucide-react";
import { PROJECTS } from "@/config/projects";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Explore production systems and architectural breakdowns built by Alae Herrak, including public sector ERPs, AI candidate evaluation engines, and POS clients.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Featured Projects | Alae Herrak",
    description:
      "Explore production systems and architectural breakdowns built by Alae Herrak, including public sector ERPs, AI candidate evaluation engines, and POS clients.",
    url: "https://alaeherrak.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-20 py-12">
      {/* --- HERO SECTION --- */}
      <header className="animate-in fade-in slide-in-from-bottom-4 space-y-6 text-center duration-700">
        <Badge
          variant="outline"
          className="border-primary/30 text-primary font-mono tracking-widest uppercase"
        >
          Portfolio
        </Badge>

        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
          Featured Projects
        </h1>

        <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-balance">
          Technical breakdown of production systems I&apos;ve architected and
          maintained. Due to NDAs, focus is placed on system logic and
          architectural challenges.
        </p>
      </header>

      {/* --- PROJECTS LIST --- */}
      <div className="space-y-16">
        {PROJECTS.map((project, projectIndex) => (
          <section
            key={project.slug}
            id={project.slug}
            className={cn(
              "group animate-in fade-in slide-in-from-bottom-6 scroll-mt-28",
              "relative overflow-hidden rounded-[2.5rem] transition-all duration-500",
              "portfolio-card",
              "hover:border-primary/50 hover:shadow-primary/10 hover:shadow-2xl",
            )}
            style={{ animationDelay: `${projectIndex * 150}ms` }}
          >
            {/* Decorative Background Elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="bg-primary/5 group-hover:bg-primary/10 absolute -top-24 -right-24 h-72 w-72 rounded-full blur-[110px] transition-all duration-700" />
              <div className="bg-primary/[0.03] absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-[130px]" />

            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Project Number & Header */}
              <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-4">
                  <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                    <span className="text-primary/20 font-mono text-5xl font-bold sm:text-7xl md:text-8xl">
                      {String(projectIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-1 sm:space-y-2">
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary bg-primary/5 font-mono text-[9px] tracking-wider whitespace-normal uppercase sm:text-[10px]"
                      >
                        <Code2 className="mr-1 size-3" />
                        {project.role}
                      </Badge>
                      <h2 className="text-xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground ml-0 max-w-md text-base font-medium sm:ml-20 sm:text-lg">
                    {project.subtitle}
                  </p>
                </div>

                {/* Platform Pills */}
                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                  {project.platforms.map((p) => (
                    <div
                      key={p.name}
                      className={cn(
                        "flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs",
                        "bg-background/80 border-border/50 border backdrop-blur-sm",
                        "hover:border-primary/40 hover:bg-primary/5 transition-all duration-300",
                      )}
                    >
                      <p.icon className="text-primary size-4" />
                      <span>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 gap-10 pt-6 lg:grid-cols-5">
                {/* Core Implementation - Larger */}
                <div className="space-y-6 lg:col-span-3">
                  <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                    <Terminal className="text-primary size-4" />
                    Core Implementation
                  </h3>

                  <ul className="space-y-4">
                    {project.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="group/item flex gap-4 text-sm leading-relaxed"
                      >
                        <span className="bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors">
                          {i + 1}
                        </span>
                        <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {project.scopeNote && (
                    <div className="text-muted-foreground/70 flex items-center gap-3 pt-2 text-xs italic">
                      <PlusCircle className="size-4" />
                      <span>{project.scopeNote}</span>
                    </div>
                  )}
                </div>

                {/* Sidebar - Tech & Outcome */}
                <div className="space-y-6 lg:col-span-2">
                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h4 className="text-muted-foreground flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                      <Layers className="size-3" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className={cn(
                            "rounded-lg px-3 py-1.5 font-medium transition-all duration-300",
                            "hover:bg-primary hover:text-primary-foreground cursor-default",
                          )}
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Card */}
                  <div
                    className={cn(
                      "rounded-2xl border p-6",
                      "bg-primary/5 dark:bg-primary/[0.03]",
                      "border-primary/20 hover:border-primary/30",
                      "hover:shadow-primary/5 transition-all duration-300 hover:shadow-lg",
                    )}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Rocket className="text-primary size-4" />
                      <p className="text-primary text-xs font-bold tracking-widest uppercase">
                        Outcome
                      </p>
                    </div>
                    <p className="text-foreground/90 text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* --- CTA SECTION --- */}
      <section className="animate-in fade-in slide-in-from-bottom-6 border-border/40 from-primary/5 via-background to-secondary/10 relative overflow-hidden rounded-[3rem] border bg-gradient-to-br px-8 py-20 text-center duration-700">
        <div className="bg-primary/10 absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-[100px]" />

        <div className="relative space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md text-lg">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Button size="lg" className="group gap-2 rounded-full px-8" asChild>
            <Link href="/#contact">
              Let&apos;s Talk
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
