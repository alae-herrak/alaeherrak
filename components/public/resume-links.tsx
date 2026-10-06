import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const RESUMES = [
  { code: "EN", language: "English", href: "/Alae-Herrak-Resume-EN.pdf" },
  { code: "FR", language: "French", href: "/Alae-Herrak-Resume-FR.pdf" },
] as const;

export function ResumeLinks({ className }: { className?: string }) {
  return (
    <div
      role="group"
      aria-label="Resume"
      className={cn(
        "bg-background dark:bg-input/30 dark:border-input inline-flex h-10 items-center rounded-full border p-1 shadow-xs",
        className,
      )}
    >
      <span className="text-foreground flex items-center gap-2 pr-3 pl-4 text-sm font-medium">
        <FileText className="text-primary size-4" aria-hidden="true" />
        Resume
      </span>

      <span className="bg-border h-5 w-px" aria-hidden="true" />

      <div className="flex items-center gap-0.5 pl-1">
        {RESUMES.map(({ code, language, href }) => (
          <a
            key={code}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${language} resume (PDF, opens in new tab)`}
            className={cn(
              "text-muted-foreground inline-flex h-8 min-w-11 items-center justify-center rounded-full px-3 font-mono text-xs font-semibold transition-colors",
              "hover:bg-primary hover:text-primary-foreground",
              "focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px]",
            )}
          >
            {code}
          </a>
        ))}
      </div>
    </div>
  );
}
