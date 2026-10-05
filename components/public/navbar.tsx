"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { NAV_ITEMS } from "@/config/site";

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const maxWidth = useTransform(scrollY, [0, 100], ["1152px", "640px"]);
  const topScroll = useTransform(scrollY, [0, 100], ["24px", "12px"]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        maxWidth,
        top: topScroll,
      }}
      className={cn("fixed inset-x-0 z-50 mx-auto w-full px-4", className)}
    >
      <nav className="relative flex items-center justify-between rounded-full border border-border/80 bg-background/80 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-6 sm:py-2.5 dark:border-border/60 dark:bg-card/75">
        <Link href="/" className="flex shrink-0 items-center">
          <span className="text-primary font-mono text-base font-bold tracking-tighter transition-opacity hover:opacity-80 sm:text-lg">
            AH
          </span>
        </Link>

        <div className="relative flex items-center gap-0.5 sm:gap-1">
          <AnimatePresence>
            {NAV_ITEMS.map((item, index) => {
              const isActive =
                item.link === "/"
                  ? pathname === "/"
                  : item.link.startsWith("/#")
                    ? false
                    : pathname.startsWith(item.link);
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative px-2 py-1.5 text-xs font-medium transition-colors duration-300 sm:px-4 sm:py-2 sm:text-sm",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  <span className="relative z-10">{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="bg-primary/10 absolute inset-0 z-0 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {hoveredIndex === index && !isActive && (
                    <motion.div
                      layoutId="hover-nav-pill"
                      className="bg-secondary/50 absolute inset-0 z-0 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex shrink-0 items-center">
          <ThemeToggle className="size-8 rounded-full sm:size-9" />
        </div>
      </nav>
    </motion.div>
  );
}
