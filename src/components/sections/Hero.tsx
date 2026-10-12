"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { TextReveal } from "@/components/ui/TextReveal";
import { profile } from "@/data/profile";
import { externalHref } from "@/lib/links";
import { SignalCanvas } from "./SignalCanvas";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden pt-20 pb-12 md:pt-24 md:pb-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 size-[320px] sm:size-[420px] rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 size-[240px] sm:size-[320px] rounded-full bg-[color-mix(in_srgb,var(--canvas-a)_55%,transparent)] blur-3xl"
      />

      <Container wide className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="relative z-10 order-1">
          <motion.p
            className="text-sm font-medium text-accent-ink"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {profile.role}
          </motion.p>

          <TextReveal
            as="h1"
            text={t.hero.greeting}
            className="mt-3 text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight leading-[1.1] pb-1"
            delay={0.04}
          />

          <motion.p
            className="mt-4 max-w-[34ch] text-lg md:text-xl text-ink-muted leading-snug"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            {t.hero.headline}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-control bg-accent px-6 py-3 text-sm font-medium text-[var(--on-accent)] shadow-soft transition duration-200 hover:brightness-105 active:scale-[0.98]"
              >
                {t.common.viewWork}
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-control border border-border px-6 py-3 text-sm font-medium text-ink transition duration-200 hover:border-accent hover:text-accent-ink active:scale-[0.98]"
              >
                {t.nav.contact}
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            className="mt-4 flex items-center gap-2"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
          >
            {externalHref(profile.github) ? (
              <a
                href={externalHref(profile.github)}
                className="inline-flex size-11 items-center justify-center rounded-control border border-border text-ink-muted transition hover:border-accent hover:text-accent-ink"
                aria-label={t.common.github}
              >
                <Github className="size-4" aria-hidden />
              </a>
            ) : null}
            <a
              href={profile.linkedin}
              className="inline-flex size-11 items-center justify-center rounded-control border border-border text-ink-muted transition hover:border-accent hover:text-accent-ink"
              aria-label={t.common.linkedin}
            >
              <Linkedin className="size-4" aria-hidden />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex size-11 items-center justify-center rounded-control border border-border text-ink-muted transition hover:border-accent hover:text-accent-ink"
              aria-label={t.common.email}
            >
              <Mail className="size-4" aria-hidden />
            </a>
          </motion.div>

          <motion.ul
            className="mt-6 hidden flex-wrap gap-2 sm:flex"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            aria-label={t.hero.stackLabel}
          >
            {profile.primarySkills.map((skill) => (
              <li
                key={skill}
                className="rounded-control border border-border bg-[var(--surface-elevated)] px-3 py-1.5 text-xs font-medium text-ink"
              >
                {skill}
              </li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-5 max-w-[42ch] text-sm text-ink-muted leading-relaxed md:text-base"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
          >
            {t.hero.supporting}
          </motion.p>
        </div>

        <motion.div
          className="order-2"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          <SignalCanvas />
        </motion.div>
      </Container>
    </section>
  );
}
