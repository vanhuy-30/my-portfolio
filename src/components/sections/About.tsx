"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { profile } from "@/data/profile";

export function About() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const rows = [
    { label: t.about.educationLabel, value: t.about.educationValue },
    { label: t.about.languagesLabel, value: t.about.languagesValue },
    { label: t.common.basedIn, value: t.about.locationValue },
  ];

  return (
    <SectionShell id="about" tone="surface">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,200px)_1fr] lg:grid-cols-[240px_1fr] lg:gap-14">
          <Reveal delay={0.04} variant="scale">
            <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-panel border border-border bg-[var(--canvas-a)] shadow-soft">
              <Image
                src="/images/avatar.jpg"
                alt={profile.name}
                fill
                priority
                className="object-cover object-[center_22%]"
                sizes="240px"
              />
            </div>
          </Reveal>

          <div>
            <Reveal variant="clip">
              <SectionHeading
                title={t.about.title}
                subtitle={t.about.lead}
                className="mb-6 md:mb-8"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-[48ch] text-base md:text-lg text-ink-muted leading-relaxed">
                {t.about.body}
              </p>
            </Reveal>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              {rows.map((row, index) => (
                <motion.div
                  key={row.label}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="text-base text-ink">{row.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
