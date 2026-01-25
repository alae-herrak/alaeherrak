"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
      <Button variant={variant} size="icon" className={className} disabled>
        <div className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size="icon"
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <MoonStar />}
    </Button>
  );
}
