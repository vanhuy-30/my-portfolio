import type { Theme } from "@/types";

export const THEME_STORAGE_KEY = "portfolio-theme";
const LEGACY_THEME_STORAGE_KEY = "stephen-theme";

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
}

export function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const value =
    localStorage.getItem(THEME_STORAGE_KEY) ??
    localStorage.getItem(LEGACY_THEME_STORAGE_KEY);
  if (value === "light" || value === "dark") {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      localStorage.setItem(THEME_STORAGE_KEY, value);
      localStorage.removeItem(LEGACY_THEME_STORAGE_KEY);
    }
    return value;
  }
  return null;
}
