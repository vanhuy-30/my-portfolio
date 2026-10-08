/** Returns a real http(s) URL. Placeholder tokens and blanks are dropped. */
export function externalHref(url?: string | null): string | undefined {
  if (!url || url.startsWith("[")) return undefined;
  return /^https?:\/\//i.test(url) ? url : undefined;
}
