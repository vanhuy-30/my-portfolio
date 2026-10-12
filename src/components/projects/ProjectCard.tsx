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
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { usePointerFine } from "@/hooks/usePointerFine";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";

function coverTone(category: Project["category"]) {
  if (category === "web") return "bg-[var(--canvas-b)]";
  if (category === "personal") return "signal-ticks bg-[var(--surface)]";
  return "bg-[color-mix(in_srgb,var(--accent)_18%,var(--canvas-a))]";
}

export function ProjectCard({
  project,
  coverLabel,
  openLabel,
  onOpen,
  index = 0,
  variant = "row",
}: {
  project: Project;
  coverLabel?: string;
  openLabel: string;
  onOpen: () => void;
  index?: number;
  variant?: "feature" | "row";
}) {
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const interactive = !reduce && fine;
  const ref = useRef<HTMLButtonElement>(null);
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
  const badgeCount = isFeature ? 5 : 2;

  function onMove(event: React.MouseEvent<HTMLButtonElement>) {
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
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index, 4) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(isFeature && interactive && "[perspective:1200px]")}
    >
      <motion.button
        ref={ref}
        type="button"
        onClick={onOpen}
        onMouseMove={interactive ? onMove : undefined}
        onMouseLeave={interactive ? onLeave : undefined}
        whileHover={
          reduce
            ? undefined
            : interactive
              ? { y: isFeature ? -8 : -3 }
              : { borderColor: "var(--accent)" }
        }
        whileTap={reduce ? undefined : { scale: 0.985 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
        style={
          interactive && isFeature
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        className={cn(
          "group relative w-full overflow-hidden rounded-panel border border-[color-mix(in_srgb,var(--ink)_20%,transparent)] bg-white text-left shadow-[0_16px_36px_-18px_rgba(61,42,28,0.42),0_1px_0_0_rgba(255,255,255,0.8)_inset] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent hover:shadow-[0_26px_52px_-20px_rgba(61,42,28,0.52),0_1px_0_0_rgba(255,255,255,0.85)_inset] dark:border-[color-mix(in_srgb,var(--ink)_24%,transparent)] dark:bg-[var(--surface-elevated)] dark:shadow-[0_20px_48px_-20px_rgba(0,0,0,0.75)] dark:hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.85)]",
          isFeature
            ? "flex h-full flex-col md:min-h-[360px] md:flex-row"
            : "grid min-h-[7.5rem] grid-cols-[96px_1fr] items-stretch gap-0 sm:min-h-0 sm:grid-cols-[148px_1fr] md:grid-cols-[180px_1fr]"
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

        <div
          className={cn(
            "relative overflow-hidden",
            isFeature
              ? "aspect-[16/11] md:aspect-auto md:w-[48%] md:min-h-[360px]"
              : "aspect-square sm:aspect-auto sm:h-full",
            project.images[0] ? "bg-[var(--canvas-a)]" : coverTone(project.category)
          )}
        >
          {project.images[0] ? (
            <Image
              src={project.images[0]}
              alt=""
              fill
              className={cn(
                "object-cover transition duration-700 ease-out",
                interactive && "group-hover:scale-[1.08]"
              )}
              sizes={
                isFeature
                  ? "(max-width: 768px) 100vw, 560px"
                  : "(max-width: 640px) 96px, 180px"
              }
            />
          ) : (
            <div className="absolute inset-0 flex items-end p-4 md:p-5">
              <p
                className={cn(
                  "max-w-[8ch] font-semibold tracking-tight text-ink",
                  isFeature ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                )}
              >
                {project.technologies[0]}
              </p>
            </div>
          )}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-[var(--bg)]/30 via-transparent to-transparent opacity-90"
          />
          <span
            aria-hidden
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full group-active:w-full"
          />
        </div>

        <div
          className={cn(
            "relative z-10 flex min-w-0 flex-1 flex-col",
            isFeature
              ? "p-5 md:justify-center md:p-8"
              : "justify-center p-3.5 sm:p-5 md:px-6 md:py-5"
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {coverLabel ? (
                <p className="text-sm font-medium text-muted">{coverLabel}</p>
              ) : null}
              <h3
                className={cn(
                  "mt-1 font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-ink",
                  isFeature ? "text-2xl md:text-3xl" : "text-base sm:text-xl md:text-2xl"
                )}
              >
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{project.role}</p>
            </div>
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-[var(--surface)] text-accent-ink transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--on-accent)] group-hover:shadow-soft">
              <ArrowUpRight
                className="size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>

          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-ink-muted",
              isFeature
                ? "max-w-[48ch] md:mt-4 md:text-base"
                : "line-clamp-2 md:line-clamp-3"
            )}
          >
            {project.shortDescription}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
            {project.technologies.slice(0, badgeCount).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {!isFeature && project.technologies.length > badgeCount ? (
              <Badge className="sm:hidden">
                +{project.technologies.length - badgeCount}
              </Badge>
            ) : null}
            {!isFeature
              ? project.technologies.slice(badgeCount, 4).map((tech) => (
                  <Badge key={tech} className="hidden sm:inline-flex">
                    {tech}
                  </Badge>
                ))
              : null}
          </div>

          <span
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium text-accent-ink",
              isFeature ? "mt-auto pt-6" : "mt-3"
            )}
          >
            {openLabel}
            <span
              aria-hidden
              className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-11"
            />
          </span>
        </div>
      </motion.button>
    </motion.article>
  );
}
