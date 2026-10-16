"use client";

import Image from "next/image";
import { ExternalLink, Github, Lock } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { externalHref } from "@/lib/links";
import { Sheet } from "@/components/ui/Sheet";
import type { Project } from "@/types";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-accent-ink">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
        {children}
      </div>
    </section>
  );
}

function Bullets({ id, items }: { id: string; items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-accent">
      {items.map((item, index) => (
        <li key={`${id}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

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

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={project.name}
      closeLabel={t.common.close}
      wide
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <aside className="space-y-6 lg:sticky lg:top-0 lg:self-start">
          {project.image ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-panel border border-border bg-[var(--surface)]">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 340px"
              />
            </div>
          ) : null}

          <div>
            <p className="text-sm font-medium text-muted">
              {[project.company, project.period].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-1 text-sm text-ink md:text-base">{project.role}</p>
          </div>

          {project.metrics.length ? (
            <dl className="grid grid-cols-2 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-control border border-border px-3 py-2.5"
                >
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="text-lg font-semibold tracking-tight text-ink">
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

          {project.nda ? (
            <p className="flex items-start gap-2 rounded-control border border-border bg-[var(--surface)]/60 px-3 py-2.5 text-sm text-ink-muted">
              <Lock className="mt-0.5 size-4 shrink-0" aria-hidden />
              {t.projects.ndaNote}
            </p>
          ) : null}

          {links.length ? (
            <div className="flex flex-wrap gap-3">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-control border border-border px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent-ink"
                >
                  {item.icon ? <item.icon className="size-4" aria-hidden /> : null}
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </aside>

        <div className="space-y-8">
          <p className="text-base leading-relaxed text-ink md:text-lg">
            {project.shortDescription}
          </p>
          <Section title={t.projects.sections.context}>
            <p>{project.caseStudy.context}</p>
          </Section>
          <Section title={t.projects.sections.built}>
            <Bullets id={`${project.id}-built`} items={project.caseStudy.built} />
          </Section>
          <Section title={t.projects.sections.decisions}>
            <Bullets id={`${project.id}-decision`} items={project.caseStudy.decisions} />
          </Section>
          <Section title={t.projects.sections.results}>
            <Bullets id={`${project.id}-result`} items={project.caseStudy.results} />
          </Section>
        </div>
      </div>
    </Sheet>
  );
}
