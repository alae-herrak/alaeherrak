"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";

interface ThemeToggleProps {
  variant?: "default" | "ghost";
}

export function ThemeToggle({ variant = "ghost" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <MoonStar />}
    </Button>
  );
}
