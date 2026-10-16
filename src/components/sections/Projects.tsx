"use client";

import { useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { CaseStudySheet } from "@/components/projects/CaseStudySheet";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { getOtherWork, getProjects } from "@/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const { locale, t } = useLocale();
  const projects = getProjects(locale);
  const otherWork = getOtherWork(locale);
  const [active, setActive] = useState<Project | null>(null);

  const work = projects.filter((project) => project.kind === "work");
  const [lead, ...featuredRest] = work.filter((project) => project.featured);
  const moreWork = work.filter((project) => !project.featured);
  const side = projects.filter((project) => project.kind === "side");

  const card = (
    project: Project,
    variant: "feature" | "tile" | "row",
    index = 0
  ) => (
    <ProjectCard
      project={project}
      variant={variant}
      index={index}
      openLabel={t.projects.openCase}
      onOpen={() => setActive(project)}
    />
  );

  return (
    <SectionShell id="projects" tone="surface">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
        </Reveal>

        <div className="space-y-5">
          {lead ? card(lead, "feature") : null}

          {featuredRest.length ? (
            <ul className="grid gap-5 md:grid-cols-2">
              {featuredRest.map((project, index) => (
                <li key={project.id} className="min-w-0">
                  {card(project, "tile", index + 1)}
                </li>
              ))}
            </ul>
          ) : null}

          {moreWork.length ? (
            <ul className="flex flex-col gap-3 md:gap-4">
              {moreWork.map((project, index) => (
                <li key={project.id} className="min-w-0">
                  {card(project, "row", index + 1)}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {otherWork.length ? (
          <Reveal delay={0.04}>
            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-lg font-semibold tracking-tight">
                {t.projects.otherTitle}
              </h3>
              <ul className="mt-4 grid gap-x-10 gap-y-4 md:grid-cols-2">
                {otherWork.map((item) => (
                  <li key={item.id} className="min-w-0">
                    <p className="text-sm font-medium text-ink md:text-base">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        {side.length ? (
          <div className="mt-16 md:mt-20">
            <Reveal variant="clip">
              <SectionHeading
                title={t.projects.sideTitle}
                subtitle={t.projects.sideSubtitle}
                className="mb-8 md:mb-10"
              />
            </Reveal>
            <ul className="grid gap-5 md:grid-cols-2">
              {side.map((project, index) => (
                <li key={project.id} className="min-w-0">
                  {card(project, "tile", index)}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>

      <CaseStudySheet
        project={active}
        open={Boolean(active)}
        onClose={() => setActive(null)}
      />
    </SectionShell>
  );
}
