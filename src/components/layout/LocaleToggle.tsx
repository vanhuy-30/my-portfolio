"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/cn";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "relative inline-flex min-h-11 items-center rounded-control border border-border p-1 font-mono text-xs uppercase tracking-[0.14em]",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "vi"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "relative z-10 inline-flex min-h-9 min-w-11 items-center justify-center rounded-[10px] px-3 transition",
              active ? "text-[var(--on-accent)]" : "text-ink-muted hover:text-ink"
            )}
            aria-pressed={active}
          >
            {active ? (
              <motion.span
                layoutId={reduce ? undefined : "locale-pill"}
                className="absolute inset-0 rounded-[10px] bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
            ) : null}
            <span className="relative z-10">{code}</span>
          </button>
        );
      })}
    </div>
  );
}
