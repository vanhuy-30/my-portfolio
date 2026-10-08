"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { externalHref } from "@/lib/links";
import { Sheet } from "@/components/ui/Sheet";
import { Tabs } from "@/components/ui/Tabs";
import type { Project } from "@/types";

export function CaseStudySheet({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useLocale();
  if (!project) return null;

  const links = [
    externalHref(project.links.github)
      ? { href: externalHref(project.links.github) as string, label: t.common.github, icon: Github }
      : null,
    externalHref(project.links.live)
      ? { href: externalHref(project.links.live) as string, label: t.common.liveDemo, icon: ExternalLink }
      : null,
    externalHref(project.links.appStore)
      ? { href: externalHref(project.links.appStore) as string, label: t.common.appStore }
      : null,
    externalHref(project.links.playStore)
      ? { href: externalHref(project.links.playStore) as string, label: t.common.playStore }
      : null,
  ].filter((item): item is NonNullable<typeof item> => Boolean(item));

  const tabs = [
    {
      id: "overview",
      label: t.projects.tabs.overview,
      content: (
        <div className="space-y-4">
          <p>{project.caseStudy.overview}</p>
          <p>{project.caseStudy.problem}</p>
          <p>{project.caseStudy.solution}</p>
          <p>{project.caseStudy.contribution}</p>
        </div>
      ),
    },
    {
      id: "approach",
      label: t.projects.tabs.approach,
      content: (
        <div className="space-y-5">
          <ul className="list-disc space-y-2 pl-5">
            {project.caseStudy.technicalDecisions.map((item, index) => (
              <li key={`${project.id}-tech-${index}`}>{item}</li>
            ))}
          </ul>
          <ul className="list-disc space-y-2 pl-5">
            {project.caseStudy.challenges.map((item, index) => (
              <li key={`${project.id}-challenge-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "results",
      label: t.projects.tabs.results,
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {project.caseStudy.results.map((item, index) => (
            <li key={`${project.id}-result-${index}`}>{item}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={project.name}
      closeLabel={t.common.close}
    >
      <div className="space-y-8">
        {project.images.length ? (
          <div className="grid gap-3">
            {project.images.map((src) => (
              <div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-panel border border-border bg-[var(--surface)]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 512px"
                />
              </div>
            ))}
          </div>
        ) : null}

        <div>
          <p className="text-sm font-medium text-muted">{t.projects.role}</p>
          <p className="mt-1 text-sm md:text-base">{project.role}</p>
          <p className="mt-3 text-sm text-ink-muted leading-relaxed">
            {project.shortDescription}
          </p>
          <p className="mt-4 max-w-[62ch] text-base text-ink">{project.outcome}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-muted">
            {t.projects.technologies}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {project.features.length ? (
          <div>
            <p className="mb-3 text-sm font-medium text-muted">
              {t.projects.features}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <li
                  key={`${project.id}-feature-${index}`}
                  className="rounded-control border border-border bg-[var(--surface)]/60 px-3 py-2.5 text-sm text-ink"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <Tabs items={tabs} label={t.projects.openCase} />

        {links.length ? (
          <div className="flex flex-wrap gap-3 border-t border-border pt-6">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-control border border-border px-4 py-2 text-sm hover:border-accent hover:text-accent-ink transition"
              >
                {item.icon ? <item.icon className="size-4" aria-hidden /> : null}
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </Sheet>
  );
}
