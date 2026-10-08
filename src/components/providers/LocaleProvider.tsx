"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale } from "@/types";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  getDictionary,
  readStoredLocale,
  type Dictionary,
} from "@/i18n";

interface LocaleContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = DEFAULT_LOCALE;
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "vi" : "en");
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({
      locale,
      t: getDictionary(locale),
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
