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

export interface ProjectStaticData {
  slug: string;
  platforms: ProjectPlatform[];
  stack: string[];
}

export const PROJECT_PLATFORMS_AND_STACKS: Record<string, ProjectStaticData> = {
  "yosan-budget": {
    slug: "yosan-budget",
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
  },
  smarthire: {
    slug: "smarthire",
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
  },
  qarawiyyin: {
    slug: "qarawiyyin",
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
  },
  "exact-pos": {
    slug: "exact-pos",
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
  },
  "storyland-edtech": {
    slug: "storyland-edtech",
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
  },
  "vaa-associations": {
    slug: "vaa-associations",
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
  },
  nid: {
    slug: "nid",
    platforms: [
      { name: "Admin Desktop", icon: Monitor },
      { name: "Public Submission Portal", icon: Globe },
    ],
    stack: ["Electron", "Node.js", "Express", "React", "TypeScript", "MySQL"],
  },
  "mystore-cms": {
    slug: "mystore-cms",
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
  },
};
