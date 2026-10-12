import { cn } from "@/lib/cn";

/** Keep in sync with src/app/icon.svg */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={cn("size-11 shrink-0", className)}
    >
      <rect width="32" height="32" rx="8" fill="#1C1917" />
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="7.4"
        fill="none"
        stroke="#F4F1E8"
        strokeOpacity="0.28"
      />
      <rect x="7.25" y="6.75" width="3.5" height="18.5" rx="0.8" fill="#F4F1E8" />
      <rect x="21.25" y="6.75" width="3.5" height="18.5" rx="0.8" fill="#F4F1E8" />
      <rect x="7.25" y="14.25" width="17.5" height="3.5" rx="0.8" fill="#E85A4F" />
    </svg>
  );
}
