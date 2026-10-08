"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/cn";

type RevealVariant = "fade-up" | "fade" | "scale" | "clip";

const variants: Record<
  RevealVariant,
  { initial: TargetAndTransition; animate: TargetAndTransition }
> = {
  "fade-up": {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
  },
  clip: {
    initial: { opacity: 0, clipPath: "inset(12% 0 12% 0)" },
    animate: { opacity: 1, clipPath: "inset(0% 0 0% 0)" },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const reduce = useReducedMotion();
  const selected = variants[variant];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={selected.initial}
      whileInView={selected.animate}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
