"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { usePointerFine } from "@/hooks/usePointerFine";
import { cn } from "@/lib/cn";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const motionOk = Boolean(fine && !reduce);

  return (
    <div
      className={cn(
        "relative inline-flex min-h-11 items-center rounded-control border border-border p-1 font-mono text-xs uppercase tracking-[0.14em] transition-[border-color,box-shadow] duration-300",
        motionOk &&
          "hover:border-accent hover:shadow-[0_10px_28px_-16px_var(--accent)]",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "vi"] as const).map((code) => {
        const active = locale === code;
        return (
          <motion.button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            whileHover={motionOk && !active ? { y: -1 } : undefined}
            whileTap={reduce ? undefined : { scale: 0.96 }}
            className={cn(
              "group/code relative z-10 inline-flex min-h-9 min-w-11 items-center justify-center overflow-hidden rounded-[10px] px-3",
              active ? "text-[var(--on-accent)]" : "text-ink-muted"
            )}
            aria-pressed={active}
          >
            {active ? (
              <motion.span
                layoutId={reduce ? undefined : "locale-pill"}
                className={cn(
                  "absolute inset-0 rounded-[10px] bg-accent",
                  motionOk && "transition duration-300 group-hover/code:brightness-110"
                )}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              />
            ) : motionOk ? (
              <span
                aria-hidden
                className="absolute inset-0 origin-center scale-75 rounded-[10px] bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] opacity-0 transition duration-200 ease-out group-hover/code:scale-100 group-hover/code:opacity-100"
              />
            ) : null}
            <span
              className={cn(
                "relative z-10 transition-[transform,color] duration-200",
                motionOk && !active && "group-hover/code:-translate-y-px group-hover/code:text-ink"
              )}
            >
              {code}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
