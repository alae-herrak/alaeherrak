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

// --- DATA CONFIGURATION ---

const HERO_WORDS = [
  { text: "Full" },
  { text: "Stack" },
  { text: "Product" },
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

const TECH_STACK = [
  {
    name: "react",
    icon: "devicon-react-original",
    color: "#61dafb",
    darkText: true,
  },
  {
    name: "typescript",
    icon: "devicon-typescript-plain",
    color: "#007acc",
    darkText: false,
  },
  {
    name: "tailwindcss",
    icon: "devicon-tailwindcss-plain",
    color: "#38bdf8",
    darkText: true,
  },
  {
    name: "electron",
    icon: "devicon-electron-original",
    color: "#47848f",
    darkText: false,
  },
  {
    name: "tauri",
    icon: "devicon-tauri-plain",
    color: "#ffc131",
    darkText: true,
  },
  {
    name: "nodejs",
    icon: "devicon-nodejs-plain",
    color: "#5fa04e",
    darkText: false,
  },
  {
    name: "express",
    icon: "devicon-express-original",
    color: "#444444",
    darkText: false,
  },
  {
    name: "mysql",
    icon: "devicon-mysql-plain",
    color: "#046586",
    darkText: false,
  },
  {
    name: "mongodb",
    icon: "devicon-mongodb-plain",
    color: "#4faa41",
    darkText: false,
  },
  {
    name: "prisma",
    icon: "devicon-prisma-plain",
    color: "#2d3748",
    darkText: false,
  },
  {
    name: "github",
    icon: "devicon-github-plain",
    color: "#191a18",
    darkText: false,
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

const TechIcon = ({ name, icon, color, darkText }: (typeof TECH_STACK)[0]) => {
  // Dynamic tailwind class construction based on the logic you provided
  const baseColors = darkText
    ? "bg-[var(--brand-color)] text-black md:text-white md:hover:text-black"
    : "bg-[var(--brand-color)] text-white";

  return (
    <Badge
      variant="outline"
      style={{ "--brand-color": color } as React.CSSProperties}
      className={cn(
        "text-md border-muted-foreground/20 bg-background flex items-center gap-2 px-5 py-2.5 transition-all duration-300 hover:border-transparent hover:shadow-lg",
        "md:bg-transparent md:hover:bg-[var(--brand-color)]",
        baseColors,
      )}
    >
      <span className="text-xl">
        <i className={icon}></i>
      </span>
      <span className="font-medium">{name}</span>
    </Badge>
  );
};

// --- MAIN PAGE ---

export default function HomePage() {
  return (
    <div className="relative mx-auto max-w-6xl space-y-32 px-6 py-12">
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
              Bridging the gap between{" "}
              <span className="text-foreground decoration-primary/30 font-medium underline decoration-2 underline-offset-4">
                ambiguous client needs
              </span>{" "}
              and{" "}
              <span className="text-foreground decoration-primary/30 font-medium underline decoration-2 underline-offset-4">
                high-performance systems
              </span>
              . Currently architecting resilient ecosystems within
              high-ownership product teams.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-left-3 mt-4 mb-8 flex flex-wrap justify-center gap-4 duration-1000">
            <Button size="lg" className="group gap-2 rounded-full px-8" asChild>
              <a href="#process">
                View My Process
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Read Technical Blog
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
      <section id="process" className="scroll-mt-20 space-y-12">
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

      {/* --- TECH STACK --- */}
      <section id="stack" className="scroll-mt-32">
        <div className="border-border/40 bg-secondary/5 relative overflow-hidden rounded-[3rem] border px-6 py-24">
          <div className="bg-primary/5 absolute -right-24 -bottom-24 h-64 w-64 rounded-full blur-[100px]" />
          <div className="container mx-auto max-w-4xl space-y-16 text-center">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold tracking-tight italic md:text-4xl">
                Technical Arsenal
              </h2>
              <p className="text-muted-foreground mx-auto max-w-xl text-lg">
                Battle-tested technologies for production systems.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {TECH_STACK.map((tech) => (
                <TechIcon key={tech.name} {...tech} />
              ))}
            </div>
            <div className="border-border/20 flex flex-col items-center gap-6 border-t pt-10">
              <p className="text-muted-foreground text-[10px] font-bold tracking-[0.3em] uppercase">
                Currently Exploring
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {["Hono", "PostgreSQL", "Docker", "CI/CD"].map((focus) => (
                  <span
                    key={focus}
                    className="text-foreground/40 hover:text-primary cursor-default text-sm font-semibold transition-colors"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="flex scroll-mt-32 flex-col items-center gap-10 py-10"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
            Let's build something{" "}
            <span className="text-primary font-serif italic">exceptional</span>.
          </h2>
          <p className="text-muted-foreground text-xl">
            Available for high-impact roles or specialized consulting.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="h-14 rounded-full text-lg">
            <Mail className="size-5" /> Get in Touch
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="size-14 rounded-full"
            >
              <i className="devicon-github-plain text-2xl"></i>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-14 rounded-full"
            >
              <i className="devicon-linkedin-plain text-2xl"></i>
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-border/40 flex flex-col items-center justify-between gap-10 border-t pt-20 pb-16 md:flex-row">
        <p className="text-muted-foreground text-sm font-medium">
          Alae Herrak &copy; {new Date().getFullYear()}
        </p>
        <div className="flex gap-8">
          {["Resume", "Blog"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
