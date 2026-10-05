"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
}

export function GridBackground({ children }: GridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "30%",
        } as React.CSSProperties
      }
    >
      {/* 1. Subtle Architectural Grid (Light mode: soft slate lines; Dark mode: subtle translucent white lines) */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:48px_48px]",
          "[background-image:linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]",
        )}
      />

      {/* 2. Interactive Spotlight that tracks cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 dark:opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(2, 132, 199, 0.08), rgba(99, 102, 241, 0.04), transparent 70%)",
        }}
      />

      {/* 3. Balanced Ambient Light - Smooth, soft sky/indigo diffusion */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/5 to-transparent blur-[120px] dark:from-sky-500/12 dark:via-indigo-500/8" />
      <div className="pointer-events-none absolute top-1/3 -left-48 h-[350px] w-[450px] rounded-full bg-sky-600/5 blur-[130px] dark:bg-sky-500/8" />
      <div className="pointer-events-none absolute top-2/3 -right-48 h-[400px] w-[500px] rounded-full bg-indigo-600/5 blur-[140px] dark:bg-indigo-500/8" />

      {/* 4. Vignette mask to fade grid smoothly toward edges */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black_85%)]" />

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
