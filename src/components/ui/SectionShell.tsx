"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

export function SectionShell({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "surface" | "accent-wash";
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const washY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const washOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, 0.7, 0.7, 0]);

  const toneClass =
    tone === "surface"
      ? "bg-[color-mix(in_srgb,var(--surface)_40%,var(--bg))]"
      : tone === "accent-wash"
        ? "bg-[color-mix(in_srgb,var(--surface)_55%,var(--bg))]"
        : "";

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative overflow-hidden py-24 md:py-32", toneClass, className)}
    >
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 size-[380px] rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] blur-3xl"
          style={{ y: washY, opacity: washOpacity }}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
