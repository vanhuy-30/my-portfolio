"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { CaseStudySheet } from "@/components/projects/CaseStudySheet";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { getProjects } from "@/data/projects";
import { cn } from "@/lib/cn";
import type { Project, ProjectCategory } from "@/types";

type ProjectFilter = "all" | ProjectCategory;

export function Projects() {
  const { locale, t } = useLocale();
  const projects = getProjects(locale);
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [active, setActive] = useState<Project | null>(null);
  const reduce = useReducedMotion();
  const counts = useMemo(() => {
    const next: Record<ProjectFilter, number> = {
      all: projects.length,
      mobile: 0,
      web: 0,
      personal: 0,
    };
    for (const project of projects) {
      next[project.category] += 1;
    }
    return next;
  }, [projects]);
  const visible = projects.filter(
    (project) => filter === "all" || project.category === filter
  );
  const featured = visible.find((project) => project.featured) ?? visible[0];
  const rest = featured
    ? visible.filter((project) => project.id !== featured.id)
    : [];
  const filters: ProjectFilter[] = ["all", "mobile", "web", "personal"];

  return (
    <SectionShell id="projects">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
        </Reveal>

        <LayoutGroup id="project-filters">
          <div className="mb-10 flex gap-2 overflow-x-auto pb-1">
            {filters.map((id) => {
              const selected = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(id)}
                  className={cn(
                    "relative inline-flex min-h-11 shrink-0 items-center gap-2 rounded-control border px-4 text-sm transition active:scale-[0.98]",
                    selected
                      ? "border-accent text-[var(--on-accent)]"
                      : "border-border bg-[var(--surface-elevated)] text-ink hover:border-accent hover:text-accent-ink"
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId={reduce ? undefined : "project-filter-pill"}
                      className="absolute inset-0 rounded-control bg-accent"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    />
                  ) : null}
                  <span className="relative z-10">{t.projects.filters[id]}</span>
                  <span
                    className={cn(
                      "relative z-10 rounded-full px-1.5 py-0.5 text-[11px] tabular-nums",
                      selected
                        ? "bg-[color-mix(in_srgb,var(--on-accent)_18%,transparent)]"
                        : "bg-[color-mix(in_srgb,var(--ink)_6%,transparent)] text-ink-muted"
                    )}
                  >
                    {counts[id]}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {visible.length ? (
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={filter}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                {featured ? (
                  <ProjectCard
                    project={featured}
                    variant="feature"
                    coverLabel={t.projects.filters[featured.category]}
                    openLabel={t.projects.openCase}
                    onOpen={() => setActive(featured)}
                  />
                ) : null}

                {rest.length ? (
                  <ul className="flex flex-col gap-3 md:gap-4">
                    {rest.map((project, index) => (
                      <li key={project.id} className="min-w-0">
                        <ProjectCard
                          project={project}
                          variant="row"
                          index={index + 1}
                          coverLabel={t.projects.filters[project.category]}
                          openLabel={t.projects.openCase}
                          onOpen={() => setActive(project)}
                        />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </LayoutGroup>
        ) : (
          <p className="text-sm text-ink-muted">{t.projects.empty}</p>
        )}
      </Container>

      <CaseStudySheet
        project={active}
        open={Boolean(active)}
        onClose={() => setActive(null)}
      />
    </SectionShell>
  );
}
