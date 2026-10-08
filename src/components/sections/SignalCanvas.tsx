"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { profile } from "@/data/profile";

export function SignalCanvas() {
  const { t } = useLocale();
  const focusSkills = profile.primarySkills.slice(0, 4);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(58);
  const glowY = useMotionValue(34);
  const springRX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springRY = useSpring(rotateY, { stiffness: 160, damping: 18 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 55%)`;
  const ringLeft = useMotionTemplate`calc(${glowX}% - 40px)`;
  const ringTop = useMotionTemplate`calc(${glowY}% - 40px)`;

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(58);
    glowY.set(34);
  }

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none [perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          reduce
            ? undefined
            : {
                rotateX: springRX,
                rotateY: springRY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative aspect-[3/4] overflow-hidden rounded-panel border border-border bg-[var(--canvas-b)] shadow-panel"
        aria-label={t.hero.canvasLabel}
      >
        <Image
          src="/images/hero-signal-layers.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 520px"
          className="object-cover"
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-multiply dark:mix-blend-screen"
          style={{ background: glow }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--bg)]/35 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-6 h-px signal-ticks opacity-70"
        />

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <div className="rounded-panel border border-white/30 bg-[color-mix(in_srgb,var(--bg)_72%,transparent)] p-4 backdrop-blur-md dark:border-white/10">
            <p className="text-xs font-medium text-accent-ink">
              {t.hero.stackLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {focusSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-control border border-border bg-[var(--surface-elevated)] px-3 py-1.5 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute size-20 rounded-full border border-accent/70"
          style={
            reduce
              ? { left: "calc(58% - 40px)", top: "calc(34% - 40px)" }
              : { left: ringLeft, top: ringTop }
          }
        />
      </motion.div>
    </div>
  );
}
