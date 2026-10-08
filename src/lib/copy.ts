import type { Locale } from "@/types";

export type Copy = { en: string; vi: string };

export function tx(copy: Copy, locale: Locale): string {
  return copy[locale];
}
