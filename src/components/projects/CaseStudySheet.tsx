"use client";

import Image from "next/image";
import { ExternalLink, Github, Lock } from "lucide-react";
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
      id: "context",
      label: t.projects.tabs.context,
      content: <p>{project.caseStudy.context}</p>,
    },
    {
      id: "built",
      label: t.projects.tabs.built,
      content: (
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          {project.caseStudy.built.map((item, index) => (
            <li key={`${project.id}-built-${index}`}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "decisions",
      label: t.projects.tabs.decisions,
      content: (
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          {project.caseStudy.decisions.map((item, index) => (
            <li key={`${project.id}-decision-${index}`}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "results",
      label: t.projects.tabs.results,
      content: (
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
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
        {project.image ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-panel border border-border bg-[var(--surface)]">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </div>
        ) : null}

        <div>
          <p className="text-sm font-medium text-muted">
            {[project.company, project.period].filter(Boolean).join(" · ")}
          </p>
          <p className="mt-1 text-sm md:text-base">{project.role}</p>
          <p className="mt-3 text-base text-ink leading-relaxed">
            {project.shortDescription}
          </p>
          {project.nda ? (
            <p className="mt-4 flex items-start gap-2 rounded-control border border-border bg-[var(--surface)]/60 px-3 py-2.5 text-sm text-ink-muted">
              <Lock className="mt-0.5 size-4 shrink-0" aria-hidden />
              {t.projects.ndaNote}
            </p>
          ) : null}
        </div>

        {project.metrics.length ? (
          <dl className="grid grid-cols-2 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-control border border-border px-4 py-3"
              >
                <dt className="sr-only">{metric.label}</dt>
                <dd className="text-xl font-semibold tracking-tight text-ink">
                  {metric.value}
                </dd>
                <dd className="text-xs text-ink-muted">{metric.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

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

        <Tabs items={tabs} label={t.projects.openCase} />

        {links.length ? (
          <div className="flex flex-wrap gap-3 border-t border-border pt-6">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-control border border-border px-4 py-2.5 text-sm hover:border-accent hover:text-accent-ink transition"
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
