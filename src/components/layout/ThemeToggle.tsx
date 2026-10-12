"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { usePointerFine } from "@/hooks/usePointerFine";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const motionOk = Boolean(fine && !reduce);
  const dark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={motionOk ? { y: -2, scale: 1.05 } : undefined}
      whileTap={reduce ? undefined : { scale: 0.9, rotate: 12 }}
      className={cn(
        "group relative inline-flex size-11 items-center justify-center overflow-hidden rounded-control border border-border text-ink-muted transition-[color,border-color,box-shadow] duration-300",
        motionOk &&
          "hover:border-accent hover:text-ink hover:shadow-[0_10px_24px_-14px_var(--accent)]",
        className
      )}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {motionOk ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-1 scale-50 rounded-full bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] opacity-0 transition duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
        />
      ) : null}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "sun" : "moon"}
          initial={reduce ? false : { opacity: 0, y: 8, rotate: -20 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8, rotate: 20 }}
          transition={{ duration: 0.22 }}
          className="relative inline-flex"
        >
          <span
            className={cn(
              "inline-flex",
              motionOk &&
                "transition-transform duration-500 ease-out group-hover:scale-110",
              motionOk && (dark ? "group-hover:rotate-[48deg]" : "group-hover:-rotate-12")
            )}
          >
            {dark ? (
              <Sun className="size-4" aria-hidden />
            ) : (
              <Moon className="size-4" aria-hidden />
            )}
          </span>
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
