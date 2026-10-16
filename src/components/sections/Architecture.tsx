"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { principles } from "@/data/architecture";

export function Architecture() {
  const { t } = useLocale();

  return (
    <SectionShell id="architecture" tone="surface">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.architecture.title}
            subtitle={t.architecture.subtitle}
          />
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-2">
          {principles.map(({ id, icon: Icon }, index) => {
            const copy = t.architecture.principles[id];
            return (
              <li key={id} className="min-w-0">
                <Reveal delay={Math.min(index, 3) * 0.06} className="h-full">
                  <div className="flex h-full flex-col rounded-panel border border-border bg-[var(--surface-elevated)] p-5 shadow-soft md:p-6">
                    <span className="inline-flex size-11 items-center justify-center rounded-control bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-accent-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink md:text-xl">
                      {copy.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                      {copy.body}
                    </p>
                    <p className="mt-auto pt-4 font-mono text-xs text-accent-ink">
                      {copy.proof}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </SectionShell>
  );
}
