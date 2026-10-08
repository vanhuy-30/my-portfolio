"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const dark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={reduce ? undefined : { scale: 0.9, rotate: 12 }}
      className={cn(
        "relative inline-flex size-10 items-center justify-center overflow-hidden rounded-control border border-border text-ink-muted transition hover:text-ink hover:border-accent",
        className
      )}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "sun" : "moon"}
          initial={reduce ? false : { opacity: 0, y: 8, rotate: -20 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8, rotate: 20 }}
          transition={{ duration: 0.22 }}
          className="inline-flex"
        >
          {dark ? (
            <Sun className="size-4" aria-hidden />
          ) : (
            <Moon className="size-4" aria-hidden />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
