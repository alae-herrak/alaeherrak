import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Terminal,
  Settings2,
  Users2,
  CheckCircle2,
  Database,
  ShieldCheck,
  Zap,
  Mail,
} from "lucide-react";
import { GridBackground } from "@/components/ui/grid-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ScrollIcon, ScrollIndicator } from "@/components/ui/scroll-indicator";
import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";

// --- DATA CONFIGURATION ---

const HERO_WORDS = [
  { text: "Full-Stack" },
  { text: "Software" },
  { text: "Engineer" },
];

const CORE_PILLARS = [
  {
    icon: <Settings2 size={24} />,
    title: "Systems Optimization",
    content: (
      <>
        Pioneered the transition from Chromium-based Electron runtimes to{" "}
        <strong className="text-foreground">Tauri</strong>. Engineered custom
        PowerShell release pipelines to slash memory footprints while
        maintaining cross-platform parity.
      </>
    ),
  },
  {
    icon: <Users2 size={24} />,
    title: "Ownership & Discovery",
    content: (
      <>
        Leading the full product lifecycle in a small team. I translate client
        discovery meetings into technical specs, mentor developers, and debug
        mission-critical production infrastructure.
      </>
    ),
  },
  {
    icon: <Terminal size={24} />,
    title: "Evolving Stack",
    content: (
      <>
        Production-hardened in{" "}
        <strong className="text-foreground">React</strong> and{" "}
        <strong className="text-foreground">MySQL</strong>. Deepening my
        architectural range with{" "}
        <strong className="text-foreground">Next.js</strong>,{" "}
        <strong className="text-foreground">Hono</strong>, and cloud-native
        CI/CD flows.
      </>
    ),
  },
];

const LIFECYCLE_STEPS = [
  {
    step: "01",
    label: "Discovery",
    desc: "Direct stakeholder discovery to narrow technical specifications.",
    icon: <Users2 size={18} />,
  },
  {
    step: "02",
    label: "Data Architecture",
    desc: "Schema modeling and optimization using MySQL and Prisma.",
    icon: <Database size={18} />,
  },
  {
    step: "03",
    label: "Frontend Systems",
    desc: "Building lightning-fast interfaces with Vite, React, and Tailwind.",
    icon: <Zap size={18} />,
  },
  {
    step: "04",
    label: "Native Deployment",
    desc: "Compiling resilient cross-platform apps via the Tauri runtime.",
    icon: <ShieldCheck size={18} />,
  },
];

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

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend & Native",
    description: "High-performance reactive interfaces and desktop runtimes.",
    skills: [
      { name: "React", icon: "devicon-react-original", color: "#61dafb", darkText: true },
      { name: "Next.js", icon: "devicon-nextjs-plain", color: "#000000" },
      { name: "TypeScript", icon: "devicon-typescript-plain", color: "#007acc" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#38bdf8", darkText: true },
      { name: "Vite", icon: "devicon-vitejs-plain", color: "#bd34fe" },
      { name: "Tauri", icon: "devicon-tauri-plain", color: "#ffc131", darkText: true },
      { name: "Electron", icon: "devicon-electron-original", color: "#47848f" },
      { name: "HTML / CSS", icon: "devicon-html5-plain", color: "#e34f26" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Scalable server architectures, type-safe data modeling, and APIs.",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain", color: "#5fa04e" },
      { name: "Bun", icon: "devicon-bun-plain", color: "#fbf0df", darkText: true },
      { name: "Express", icon: "devicon-express-original", color: "#444444" },
      { name: "Hono", customIcon: <HonoIcon />, color: "#e36002" },
      { name: "MySQL", icon: "devicon-mysql-plain", color: "#046586" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
      { name: "Prisma", icon: "devicon-prisma-plain", color: "#2d3748" },
      { name: "REST APIs", icon: "devicon-fastapi-plain", color: "#05998b" },
      { name: "WebSockets", icon: "devicon-socketio-original", color: "#010101" },
    ],
  },
  {
    title: "DevOps & Tooling",
    description: "Automated delivery pipelines, containers, and developer toolchains.",
    skills: [
      { name: "Git", icon: "devicon-git-plain", color: "#f05032" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain", color: "#2088ff" },
      { name: "Docker", icon: "devicon-docker-plain", color: "#2496ed" },
      { name: "CI/CD", icon: "devicon-jenkins-line", color: "#d24939" },
      { name: "PowerShell", icon: "devicon-powershell-plain", color: "#5391fe" },
      { name: "Linux / Bash", icon: "devicon-linux-plain", color: "#fcc624", darkText: true },
    ],
  },
];

// --- SUB-COMPONENTS ---

const HomeCard = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => (
  <Card className="group border-border/50 bg-secondary/10 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 rounded-3xl py-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-xl p-2 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
    </CardContent>
  </Card>
);

const TechIcon = ({ name, icon, customIcon, color, darkText }: TechItem) => {
  return (
    <div
      style={{ "--brand-color": color } as React.CSSProperties}
      className={cn(
        "group/badge border-muted-foreground/20 bg-background relative flex h-11 items-center gap-2.5 rounded-xl border px-3.5 shadow-xs transition-all duration-300 md:bg-transparent",
        "hover:border-transparent hover:shadow-lg hover:-translate-y-0.5",
        "hover:bg-[var(--brand-color)]",
        darkText ? "hover:text-black" : "hover:text-white",
        "text-foreground",
      )}
    >
      <div className="flex size-5 shrink-0 items-center justify-center transition-transform duration-300 group-hover/badge:scale-110">
        {customIcon ? (
          customIcon
        ) : (
          <span className="text-base leading-none">
            <i className={icon}></i>
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
  return (
    <div className="relative mx-auto max-w-6xl space-y-32 px-6 py-12 pt-20">
      <ScrollIndicator />

      <GridBackground>
        {/* --- HERO SECTION --- */}
        <section className="relative flex flex-col items-center gap-6 pt-20 pb-10 text-center">
          <Badge
            variant="secondary"
            className="border-primary/20 hover:border-primary/40 animate-in fade-in slide-in-from-bottom-3 gap-2 rounded-full px-4 py-1.5 transition-colors duration-1000"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Open to New Challenges
          </Badge>

          <h1 className="from-primary to-primary/90 bg-gradient-to-b bg-clip-text text-6xl leading-none font-extrabold tracking-tighter text-transparent md:text-9xl">
            Alae Herrak
          </h1>

          <div className="max-w-4xl space-y-4">
            <TypewriterEffectSmooth
              words={HERO_WORDS}
              textClassName="text-2xl font-semibold tracking-tight md:text-3xl"
              wordsClassName="text-foreground/80"
              cursorClassName="h-8 sm:h-8 md:h-9 xl:h-9 bg-primary"
            />

            <p className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed text-balance">
              Specializing in resilient web applications, granular access
              control systems, and high-performance cross-platform runtimes with{" "}
              <span className="text-foreground decoration-primary/30 font-medium underline decoration-2 underline-offset-4">
                React
              </span>
              ,{" "}
              <span className="text-foreground decoration-primary/30 font-medium underline decoration-2 underline-offset-4">
                TypeScript
              </span>
              , and{" "}
              <span className="text-foreground decoration-primary/30 font-medium underline decoration-2 underline-offset-4">
                Node.js
              </span>
              . Proven track record of owning architecture from discovery to production.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-left-3 mt-4 mb-8 flex flex-wrap justify-center gap-4 duration-1000">
            <Button size="lg" className="group gap-2 rounded-full px-8" asChild>
              <Link href="/projects">
                Explore Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              asChild
            >
              <Link href="#contact">Let&apos;s Talk</Link>
            </Button>
          </div>

          <ScrollIcon />
        </section>
      </GridBackground>

      {/* --- NARRATIVE BRIDGE --- */}
      <section className="border-border/40 to-primary/3 -mx-6 my-10 border-y bg-linear-to-r from-transparent px-6 py-32">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 font-mono tracking-widest uppercase"
            >
              Philosophy
            </Badge>
            <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              Building for the{" "}
              <span className="text-primary font-serif italic">Real World</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Working in high-ownership teams means I don't just "write code." I
              sit with users to find the problem, architect the database to
              handle the data, and optimize the final app so it feels{" "}
              <span className="text-foreground font-semibold">weightless</span>.
            </p>
            <div className="flex items-center gap-6">
              <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                <CheckCircle2 className="size-6" />
              </div>
              <div>
                <p className="text-lg font-bold">The Goal</p>
                <p className="text-muted-foreground">
                  Software that feels invisible because it just works.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-background border-border/50 hover:border-primary/20 rounded-3xl border p-8 shadow-sm transition-all hover:shadow-xl">
              <p className="text-muted-foreground mb-6 text-xs font-bold tracking-widest uppercase">
                App size
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-[10px] font-bold tracking-tighter uppercase">
                  <span>Legacy</span>{" "}
                  <span className="text-muted-foreground/60">515MB</span>
                </div>
                <div className="bg-muted h-2 overflow-hidden rounded-full">
                  <div className="bg-muted-foreground/20 h-full" />
                </div>
                <div className="text-primary flex justify-between text-[10px] font-bold tracking-tighter uppercase">
                  <span>Tauri</span> <span>11.5MB</span>
                </div>
                <div className="bg-primary/10 h-2 overflow-hidden rounded-full">
                  <div className="bg-primary h-full w-[2.23%]" />
                </div>
              </div>
              <p className="mt-8 text-sm font-bold">Radical Optimization</p>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                Switched to Tauri for native performance.
              </p>
            </div>

            <div className="bg-background border-border/50 hover:border-primary/20 rounded-3xl border p-8 shadow-sm transition-all hover:shadow-xl">
              <p className="text-muted-foreground mb-6 text-xs font-bold tracking-widest uppercase">
                Ship Velocity
              </p>
              <div className="flex items-center justify-center py-4">
                <div className="relative">
                  <div className="bg-primary/20 absolute inset-0 animate-ping rounded-full" />
                  <div className="bg-primary/10 text-primary relative flex h-16 w-16 items-center justify-center rounded-full">
                    <Zap className="size-8" fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="mt-8 text-center text-sm font-bold">
                Zero-Friction Releases
              </p>
              <p className="text-muted-foreground mt-1 text-center text-xs leading-relaxed text-balance">
                Automation turned hours into seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {CORE_PILLARS.map((card, index) => (
          <HomeCard key={index} {...card} />
        ))}
      </section>

      {/* --- PRODUCTION LIFECYCLE --- */}
      <section className="scroll-mt-20 space-y-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="px-4 py-1">
            Workflow
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            The Development Lifecycle
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            From initial discovery to resilient production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {LIFECYCLE_STEPS.map((item, i) => (
            <div
              key={i}
              className="group border-border/40 bg-secondary/5 hover:border-primary/30 hover:bg-card relative space-y-6 rounded-[2rem] border p-10 transition-all hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-primary font-mono text-sm font-bold opacity-50">
                  {item.step}
                </span>
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">{item.label}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECH ARSENAL --- */}
      <section className="scroll-mt-32 space-y-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="px-4 py-1">
            Competencies
          </Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight italic md:text-5xl">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Battle-tested technologies and workflows honed in production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="border-border/50 bg-secondary/5 hover:border-primary/30 relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:shadow-xl"
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

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="flex scroll-mt-32 flex-col items-center gap-10 py-10">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-primary font-serif italic">exceptional</span>.
          </h2>
          <p className="text-muted-foreground text-xl">
            Available for high-impact roles or specialized consulting.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="h-14 rounded-full px-8 text-lg" asChild>
            <a href={`mailto:${SITE_CONFIG.email}?subject=Opportunity%20/%20Project%20Inquiry`}>
              <Mail className="size-5" /> Get in Touch
            </a>
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="size-14 rounded-full"
              asChild
            >
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="devicon-github-plain text-2xl"></i>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-14 rounded-full"
              asChild
            >
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="devicon-linkedin-plain text-2xl"></i>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-14 rounded-full"
              asChild
            >
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
              >
                <i className="devicon-twitter-original text-2xl"></i>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-border/40 flex flex-col items-center justify-between gap-10 border-t pt-20 pb-16 md:flex-row">
        <p className="text-muted-foreground text-sm font-medium">
          Alae Herrak &copy; {new Date().getFullYear()}
        </p>

        <nav className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Resume%20Request%20-%20Alae%20Herrak`}
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Request Resume
          </a>
        </nav>
      </footer>
    </div>
  );
}
