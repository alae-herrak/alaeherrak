"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/public/language-toggle";
import { useLanguage } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
      setMobileMenuOpen(false);
    } else {
      setVisible(true);
    }
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Track previous pathname during render to reset menu on navigation
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const maxWidth = useTransform(scrollY, [0, 100], ["1152px", "640px"]);
  const topScroll = useTransform(scrollY, [0, 100], ["24px", "12px"]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMobileMenuOpen(false);

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
      ref={menuRef}
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
        "fixed inset-x-0 z-50 mx-auto w-full px-3 sm:px-4",
        className,
      )}
    >
      <nav className="border-border/80 bg-background/85 dark:border-border/60 dark:bg-card/80 relative flex items-center justify-between rounded-full border px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-6 sm:py-2.5">
        {/* Left: Brand Initial */}
        <div className="flex shrink-0 items-center">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center"
          >
            <span className="text-primary font-mono text-base font-bold tracking-tighter transition-opacity hover:opacity-80 sm:text-lg">
              AH
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden sm:absolute sm:left-1/2 sm:flex sm:-translate-x-1/2 sm:items-center sm:gap-1">
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
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
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

        {/* Right side controls: Language toggle, Theme toggle, Mobile Menu button */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageToggle />
          <ThemeToggle className="size-8.5 rounded-full sm:size-9" />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "flex sm:hidden size-8.5 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground transition-all duration-200 active:scale-95 dark:border-border/60 dark:bg-card/80",
              mobileMenuOpen && "border-primary/50 bg-secondary text-primary",
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Clean Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/80 bg-background/95 p-2 shadow-lg backdrop-blur-xl sm:hidden dark:border-border/60 dark:bg-card/95"
          >
            {navItems.map((item) => {
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
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-150 active:scale-[0.99]",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="size-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
