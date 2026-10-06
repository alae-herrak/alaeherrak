"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { Language, Translations } from "./types";
import { en } from "./translations/en";
import { fr } from "./translations/fr";

const STORAGE_KEY = "portfolio_language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isMounted: boolean;
}

const translationsMap: Record<Language, Translations> = {
  en,
  fr,
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && (saved === "en" || saved === "fr")) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      // Check browser preferred language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("fr")) {
        setLanguageState("fr");
        document.documentElement.lang = "fr";
      } else {
        document.documentElement.lang = "en";
      }
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === "en" ? "fr" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
        document.documentElement.lang = next;
      } catch {
        // Ignore storage errors in restricted contexts
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translationsMap[language],
      isMounted,
    }),
    [language, setLanguage, toggleLanguage, isMounted]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
