"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<"button">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
>;

const variants: Record<Variant, string> = {
  primary: "bg-accent text-[var(--on-accent)] hover:brightness-105 shadow-soft",
  secondary:
    "border border-border bg-transparent text-ink hover:border-accent hover:text-accent-ink",
  ghost:
    "text-ink-muted hover:text-ink hover:bg-[color-mix(in_srgb,var(--surface)_70%,transparent)]",
};

export function Button({
  className,
  variant = "primary",
  children,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={reduce || disabled ? undefined : { y: -1 }}
      whileTap={reduce || disabled ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-control px-5 py-2.5 text-sm font-medium whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
