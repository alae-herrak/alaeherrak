"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  variant?: "default" | "ghost";
  className?: string;
}

export function ThemeToggle({
  variant = "ghost",
  className,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size="icon"
        className={cn("focus-visible:ring-2 focus-visible:ring-primary/40", className)}
        disabled
        aria-label="Toggle theme (loading)"
      >
        <span className="sr-only">Toggle theme</span>
        <div className="h-4 w-4" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant={variant}
      size="icon"
      className={cn("focus-visible:ring-2 focus-visible:ring-primary/40", className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="sr-only">
        {isDark ? "Switch to light theme" : "Switch to dark theme"}
      </span>
      {isDark ? <Sun aria-hidden="true" /> : <MoonStar aria-hidden="true" />}
    </Button>
  );
}
