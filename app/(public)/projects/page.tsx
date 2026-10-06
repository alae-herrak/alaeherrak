import type { Metadata } from "next";
import { ProjectsList } from "@/components/public/projects-list";

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
  return <ProjectsList />;
}
