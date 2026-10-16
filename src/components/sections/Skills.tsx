"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { skillGroups } from "@/data/skills";

export function Skills() {
  const { t } = useLocale();

  return (
    <SectionShell id="skills">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />
        </Reveal>

        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={Math.min(index, 3) * 0.05}>
              <div className="border-t border-border pt-5">
                <h3 className="text-base font-semibold tracking-tight text-ink md:text-lg">
                  {t.skills.categories[group.id]}
                </h3>
                <Stagger className="mt-4 flex flex-wrap gap-2" delay={0.03}>
                  {group.items.map((item) => (
                    <StaggerItem key={item}>
                      <Badge className="cursor-default px-3 py-1.5 text-ink transition hover:border-accent hover:text-accent-ink">
                        {item}
                      </Badge>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
