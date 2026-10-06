"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage, isMounted } = useLanguage();

  if (!isMounted) {
    return (
      <div className={cn("inline-flex items-center", className)}>
        <div className="inline-flex h-8.5 items-center rounded-full border border-border/70 bg-secondary/30 p-0.5">
          <span className="inline-flex h-7.5 w-7.5 items-center justify-center font-mono text-xs font-semibold text-muted-foreground">
            EN
          </span>
          <span className="inline-flex h-7.5 w-7.5 items-center justify-center font-mono text-xs font-semibold text-muted-foreground">
            FR
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center", className)}>
      <div
        role="group"
        aria-label="Language selection"
        className="relative inline-flex h-8.5 items-center rounded-full border border-border/80 bg-background/90 p-0.5 shadow-xs backdrop-blur-xs dark:border-border/60 dark:bg-card/80"
      >
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
          aria-label="Switch to English"
          className={cn(
            "relative z-10 inline-flex h-7.5 w-7.5 items-center justify-center rounded-full font-mono text-xs font-bold tracking-tight transition-colors duration-200",
            language === "en"
              ? "text-primary-foreground font-black"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {language === "en" && (
            <motion.div
              layoutId="active-lang-pill"
              className="bg-primary absolute inset-0 z-[-1] rounded-full shadow-xs"
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 32,
              }}
            />
          )}
          EN
        </button>

        <button
          type="button"
          onClick={() => setLanguage("fr")}
          aria-pressed={language === "fr"}
          aria-label="Passer en français"
          className={cn(
            "relative z-10 inline-flex h-7.5 w-7.5 items-center justify-center rounded-full font-mono text-xs font-bold tracking-tight transition-colors duration-200",
            language === "fr"
              ? "text-primary-foreground font-black"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {language === "fr" && (
            <motion.div
              layoutId="active-lang-pill"
              className="bg-primary absolute inset-0 z-[-1] rounded-full shadow-xs"
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 32,
              }}
            />
          )}
          FR
        </button>
      </div>
    </div>
  );
}
