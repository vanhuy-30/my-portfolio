import type { Locale } from "@/types";
import { en, type Dictionary } from "./en";
import { vi } from "./vi";

export type { Dictionary };
export const dictionaries: Record<Locale, Dictionary> = { en, vi };
export const LOCALE_STORAGE_KEY = "portfolio-locale";
const LEGACY_LOCALE_STORAGE_KEY = "stephen-locale";
export const DEFAULT_LOCALE: Locale = "en";

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const value =
    localStorage.getItem(LOCALE_STORAGE_KEY) ??
    localStorage.getItem(LEGACY_LOCALE_STORAGE_KEY);
  if (value === "en" || value === "vi") {
    if (!localStorage.getItem(LOCALE_STORAGE_KEY)) {
      localStorage.setItem(LOCALE_STORAGE_KEY, value);
      localStorage.removeItem(LEGACY_LOCALE_STORAGE_KEY);
    }
    return value;
  }
  return null;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
