"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/cn";
import type { SkillCategory } from "@/types";

export function Skills() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<SkillCategory>("mobile");
  const current = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  return (
    <SectionShell id="skills" tone="surface">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6">
            <div
              className="snap-rail"
              role="tablist"
              aria-label={t.skills.title}
            >
              {skillGroups.map((group) => {
                const selected = active === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(group.id)}
                    className={cn(
                      "relative min-h-11 shrink-0 whitespace-nowrap rounded-control border px-4 py-3 text-left text-sm transition",
                      selected
                        ? "border-accent text-ink"
                        : "border-border text-ink-muted hover:text-ink hover:border-accent/40"
                    )}
                  >
                    {selected ? (
                      <motion.span
                        layoutId={reduce ? undefined : "skill-tab"}
                        className="absolute inset-0 rounded-control bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]"
                        transition={{ type: "spring", stiffness: 360, damping: 28 }}
                      />
                    ) : null}
                    <span className="relative z-10">
                      {t.skills.categories[group.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[200px] overflow-hidden border-t border-border pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {t.skills.categories[current.id]}
                  </h3>
                  <Stagger className="mt-5 flex flex-wrap gap-3" delay={0.04}>
                    {current.items.map((item) => (
                      <StaggerItem key={item}>
                        <Badge className="cursor-default px-4 py-2 transition hover:border-accent hover:text-accent-ink hover:-translate-y-0.5">
                          {item}
                        </Badge>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
