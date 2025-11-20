import React, { createContext, useContext, useEffect, useState } from "react";
import type { Locale, TranslationKey } from "./translations";
import { translations, availableLocales } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "webgest:language";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "pt";

  const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (saved && availableLocales.includes(saved)) return saved;

  const navLang = window.navigator.language || window.navigator.languages?.[0] || "pt";
  const lower = navLang.toLowerCase();

  if (lower.startsWith("en")) return "en";
  return "pt";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale());

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const t: LanguageContextValue["t"] = (key) => {
    const value = translations[locale][key] ?? translations["pt"][key];
    return value ?? key;
  };

  useEffect(() => {
    const initial = detectInitialLocale();
    setLocaleState(initial);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
