"use client";

import { useEffect, useRef, useState } from "react";
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
  const [parallax, setParallax] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setParallax(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const enableWash = !reduce && parallax;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const washY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const washOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0, 0.7, 0.7, 0]
  );

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
      className={cn("relative overflow-hidden py-20 sm:py-24 md:py-32", toneClass, className)}
    >
      {enableWash ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 size-[380px] rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] blur-3xl"
          style={{ y: washY, opacity: washOpacity }}
        />
      ) : !reduce ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-10 size-[240px] rounded-full bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] blur-3xl md:hidden"
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
