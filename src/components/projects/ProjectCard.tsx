"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Github, Sparkles, Store, Wallet } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { usePointerFine } from "@/hooks/usePointerFine";
import { cn } from "@/lib/cn";
import { externalHref } from "@/lib/links";
import type { Project, ProjectCoverIcon } from "@/types";

const coverIcons: Record<ProjectCoverIcon, typeof Sparkles> = {
  sparkles: Sparkles,
  store: Store,
  wallet: Wallet,
};

type Variant = "feature" | "tile" | "row";

function Cover({
  project,
  variant,
  interactive,
}: {
  project: Project;
  variant: Variant;
  interactive: boolean;
}) {
  const Icon = project.coverIcon ? coverIcons[project.coverIcon] : null;

  return (
    <div
      className={cn(
        "relative w-full shrink-0 overflow-hidden",
        variant === "feature" && "md:w-[48%] md:min-h-[360px] md:self-stretch",
        variant === "row" && "md:h-full md:min-h-[10.5rem] md:w-auto",
        project.image
          ? "bg-[var(--canvas-a)]"
          : "bg-[radial-gradient(circle_at_80%_15%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_60%),linear-gradient(135deg,var(--canvas-a),var(--canvas-b))]"
      )}
    >
      <div
        className={cn("aspect-video", variant !== "tile" && "md:hidden")}
        aria-hidden
      />
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          className={cn(
            "object-cover transition duration-700 ease-out",
            interactive && "group-hover:scale-[1.06]"
          )}
          sizes={
            variant === "feature"
              ? "(max-width: 768px) 100vw, 560px"
              : variant === "tile"
                ? "(max-width: 768px) 100vw, 520px"
                : "(max-width: 768px) 100vw, 184px"
          }
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          {Icon ? (
            <span className="inline-flex size-11 items-center justify-center rounded-control border border-border bg-[var(--surface-elevated)] text-accent-ink shadow-soft">
              <Icon className="size-5" aria-hidden />
            </span>
          ) : (
            <span />
          )}
          <p
            className={cn(
              "font-semibold tracking-tight text-ink",
              variant === "row" ? "text-lg md:text-xl" : "text-2xl md:text-3xl"
            )}
          >
            {project.technologies.slice(0, 2).join(" · ")}
          </p>
        </div>
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-tr from-[var(--bg)]/30 via-transparent to-transparent opacity-90"
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
      />
    </div>
  );
}

export function ProjectCard({
  project,
  openLabel,
  onOpen,
  index = 0,
  variant = "row",
}: {
  project: Project;
  openLabel: string;
  onOpen: () => void;
  index?: number;
  variant?: Variant;
}) {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const interactive = !reduce && fine;
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(normY, [0, 1], [4, -4]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(normX, [0, 1], [-4, 4]), {
    stiffness: 220,
    damping: 24,
  });
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--accent) 20%, transparent), transparent 58%)`;
  const isFeature = variant === "feature";
  const isRow = variant === "row";
  const badgeCount = isRow ? 3 : 5;
  const github = externalHref(project.links.github);
  const meta = [project.company, project.period].filter(Boolean).join(" · ");

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    normX.set(x / rect.width);
    normY.set(y / rect.height);
  }

  function onLeave() {
    normX.set(0.5);
    normY.set(0.5);
  }

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index, 4) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("h-full", isFeature && interactive && "[perspective:1200px]")}
    >
      <motion.div
        ref={ref}
        onMouseMove={interactive ? onMove : undefined}
        onMouseLeave={interactive ? onLeave : undefined}
        whileHover={
          reduce ? undefined : interactive ? { y: isFeature ? -8 : -3 } : undefined
        }
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
        style={
          interactive && isFeature
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
        className={cn(
          "group relative h-full w-full overflow-hidden rounded-panel border border-[color-mix(in_srgb,var(--ink)_20%,transparent)] bg-white text-left shadow-[0_16px_36px_-18px_rgba(61,42,28,0.42),0_1px_0_0_rgba(255,255,255,0.8)_inset] transition-[border-color,box-shadow] duration-300 focus-within:border-accent hover:border-accent hover:shadow-[0_26px_52px_-20px_rgba(61,42,28,0.52),0_1px_0_0_rgba(255,255,255,0.85)_inset] dark:border-[color-mix(in_srgb,var(--ink)_24%,transparent)] dark:bg-[var(--surface-elevated)] dark:shadow-[0_20px_48px_-20px_rgba(0,0,0,0.75)] dark:hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.85)]",
          isFeature && "flex flex-col md:min-h-[360px] md:flex-row",
          variant === "tile" && "flex flex-col",
          isRow &&
            "flex flex-col md:grid md:min-h-[10.5rem] md:grid-cols-[11.5rem_minmax(0,1fr)] md:items-stretch"
        )}
      >
        {interactive ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlight }}
          />
        ) : null}

        <span
          aria-hidden
          className="absolute inset-y-0 left-0 z-30 w-1 bg-accent transition-[width] duration-300 ease-out group-hover:w-1.5"
        />

        <Cover project={project} variant={variant} interactive={interactive} />

        <div
          className={cn(
            "flex min-w-0 flex-1 flex-col bg-white dark:bg-[var(--surface-elevated)]",
            isFeature && "p-5 md:justify-center md:p-8",
            variant === "tile" && "p-5 md:p-6",
            isRow && "justify-center p-4 sm:p-5 md:px-6 md:py-5"
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                {meta ? (
                  <p className="text-sm font-medium text-muted">{meta}</p>
                ) : null}
                {project.nda ? <Badge className="py-0.5">{t.common.nda}</Badge> : null}
                {project.inProgress ? (
                  <Badge active className="py-0.5">
                    {t.common.inProgress}
                  </Badge>
                ) : null}
              </div>
              <h3
                className={cn(
                  "mt-1 font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-ink",
                  isFeature ? "text-2xl md:text-3xl" : "text-lg sm:text-xl md:text-2xl"
                )}
              >
                <button
                  type="button"
                  onClick={onOpen}
                  className="text-left after:absolute after:inset-0 after:z-30 after:content-[''] focus-visible:outline-none"
                >
                  {project.name}
                </button>
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{project.role}</p>
            </div>
            <span
              aria-hidden
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-[var(--surface)] text-accent-ink transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--on-accent)] group-hover:shadow-soft"
            >
              <ArrowUpRight className="size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-ink-muted",
              isFeature ? "max-w-[52ch] md:mt-4 md:text-base" : isRow && "line-clamp-3"
            )}
          >
            {project.shortDescription}
          </p>

          {project.metrics.length && !isRow ? (
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="min-w-0">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="text-xl font-semibold tracking-tight text-ink">
                    {metric.value}
                  </dd>
                  <dd className="text-xs text-ink-muted">{metric.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, badgeCount).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.technologies.length > badgeCount ? (
              <Badge>+{project.technologies.length - badgeCount}</Badge>
            ) : null}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center gap-x-5 gap-y-2",
              isRow ? "mt-3" : "mt-auto pt-6"
            )}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-ink">
              {openLabel}
              <span
                aria-hidden
                className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-11"
              />
            </span>
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="relative z-40 inline-flex min-h-11 items-center gap-2 rounded-control text-sm font-medium text-ink hover:text-accent-ink"
              >
                <Github className="size-4" aria-hidden />
                {t.common.github}
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
