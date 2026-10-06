"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/public/language-toggle";
import { useLanguage } from "@/lib/i18n";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: t.nav.work, link: "/#work" },
    { name: t.nav.experience, link: "/#experience" },
    { name: t.nav.projects, link: "/projects" },
    { name: t.nav.contact, link: "/#contact" },
  ];

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.pushState(null, "", "/");
        }
      }
      return;
    }

    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

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
      className={cn(
        "fixed inset-x-0 z-50 mx-auto w-full px-2 sm:px-4",
        className,
      )}
    >
      <nav className="border-border/80 bg-background/80 dark:border-border/60 dark:bg-card/75 relative flex items-center justify-between rounded-full border px-2 py-1 shadow-sm backdrop-blur-md sm:px-6 sm:py-2.5">
        <div className="flex shrink-0 items-center pl-1 sm:pl-0">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center"
          >
            <span className="text-primary font-mono text-sm font-bold tracking-tighter transition-opacity hover:opacity-80 sm:text-lg">
              AH
            </span>
          </Link>
        </div>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-0.5 sm:gap-1">
          <AnimatePresence>
            {navItems.map((item, index) => {
              const isActive =
                item.link === "/"
                  ? pathname === "/"
                  : item.link.startsWith("/#")
                    ? false
                    : pathname.startsWith(item.link);
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative px-1 py-1 text-[11px] font-medium transition-colors duration-300 min-[400px]:px-1.5 sm:px-4 sm:py-2 sm:text-sm",
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

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <LanguageToggle />
          <ThemeToggle className="size-7 rounded-full sm:size-9" />
        </div>
      </nav>
    </motion.div>
  );
}
