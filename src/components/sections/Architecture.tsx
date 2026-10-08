"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  architectureLayers,
  type ArchitectureLayerId,
} from "@/data/architecture";
import { cn } from "@/lib/cn";

export function Architecture() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<ArchitectureLayerId>("presentation");
  const current =
    architectureLayers.find((layer) => layer.id === active) ??
    architectureLayers[0];

  return (
    <SectionShell id="architecture" tone="surface">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.architecture.title}
            subtitle={t.architecture.subtitle}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mb-4 text-sm text-ink-muted">{t.architecture.hint}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {architectureLayers.map((layer) => {
              const selected = layer.id === active;
              return (
                <button
                  key={layer.id}
                  type="button"
                  aria-pressed={selected}
                  onMouseEnter={() => setActive(layer.id)}
                  onFocus={() => setActive(layer.id)}
                  onClick={() => setActive(layer.id)}
                  className={cn(
                    "relative min-h-11 rounded-control border px-4 py-2.5 text-sm transition",
                    selected
                      ? "border-accent text-ink"
                      : "border-border text-ink-muted hover:border-accent/40 hover:text-ink"
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId={reduce ? undefined : "arch-pill"}
                      className="absolute inset-0 rounded-control bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    />
                  ) : null}
                  <span className="relative z-10">
                    {t.architecture.layers[layer.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1} variant="scale">
          <div className="relative min-h-[280px] overflow-hidden rounded-panel border border-border shadow-panel md:min-h-[400px]">
            <Image
              src="/images/architecture-layers.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-2xl rounded-panel border border-border bg-[color-mix(in_srgb,var(--surface-elevated)_88%,transparent)] p-4 backdrop-blur-md md:p-5"
                >
                  <p className="text-sm font-medium text-accent-ink">
                    {t.architecture.layers[current.id]}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {current.patterns.map((pattern) => (
                      <Badge key={pattern} active>
                        {pattern}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
