"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { getExperience } from "@/data/experience";

const PREVIEW_COUNT = 2;

function RoleBody({
  roleId,
  highlight,
  responsibilities,
  technologies,
  showMoreLabel,
  showLessLabel,
}: {
  roleId: string;
  highlight?: string;
  responsibilities: string[];
  technologies: string[];
  showMoreLabel: string;
  showLessLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const needsToggle = responsibilities.length > PREVIEW_COUNT;
  const visible = expanded
    ? responsibilities
    : responsibilities.slice(0, PREVIEW_COUNT);

  return (
    <>
      {highlight ? (
        <p className="mt-3 max-w-[62ch] text-sm text-ink md:text-base">
          {highlight}
        </p>
      ) : null}
      <ul className="mt-3 max-w-[62ch] space-y-2 text-sm text-ink-muted">
        <AnimatePresence initial={false}>
          {visible.map((line, lineIndex) => (
            <motion.li
              key={`${roleId}-resp-${lineIndex}`}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {line}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {needsToggle ? (
        <button
          type="button"
          className="mt-3 text-sm font-medium text-accent-ink transition hover:underline"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? showLessLabel : showMoreLabel}
        </button>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <Badge key={`${roleId}-tech-${techIndex}`}>{tech}</Badge>
        ))}
      </div>
    </>
  );
}

export function Experience() {
  const { locale, t } = useLocale();
  const experience = getExperience(locale);
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 80%", "end 40%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
  });
  const lineHeight = useTransform(lineScale, [0, 1], ["0%", "100%"]);

  return (
    <SectionShell id="experience">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.experience.title}
            subtitle={t.experience.subtitle}
          />
        </Reveal>

        <div className="relative pl-6 md:pl-8">
          <div
            aria-hidden
            className="absolute left-0 top-2 bottom-2 w-px bg-[color-mix(in_srgb,var(--border)_100%,transparent)] md:left-0"
          />
          {!reduce ? (
            <motion.div
              aria-hidden
              className="absolute left-0 top-2 w-px origin-top bg-accent md:left-0"
              style={{ height: lineHeight }}
            />
          ) : null}

          <motion.ol
            ref={listRef}
            className="space-y-10"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
            variants={
              reduce
                ? undefined
                : {
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07 } },
                  }
            }
          >
            {experience.map((item, itemIndex) => (
              <motion.li
                key={item.id}
                className="relative"
                variants={
                  reduce
                    ? undefined
                    : {
                        hidden: { opacity: 0, y: 18 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                        },
                      }
                }
              >
                <motion.span
                  aria-hidden
                  className="absolute -left-[1.9rem] top-1 size-3 rounded-full border-2 border-accent bg-bg md:-left-[2.4rem]"
                  whileInView={reduce ? undefined : { scale: [0.6, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                />
                <div
                  className={
                    itemIndex === 0
                      ? undefined
                      : "border-t border-border pt-8"
                  }
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.company}
                    </h3>
                    {item.location ? (
                      <span className="text-sm text-muted">{item.location}</span>
                    ) : null}
                  </div>

                  <div className="mt-6 space-y-8">
                    {item.roles.map((role, roleIndex) => {
                      const roleId = `${item.id}-role-${roleIndex}`;
                      return (
                        <div
                          key={roleId}
                          className="border-t border-border pt-6 first:border-t-0 first:pt-0"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h4 className="text-base md:text-lg font-medium">
                              {role.title}
                            </h4>
                            <p className="text-sm text-muted">
                              {role.startDate} -{" "}
                              {role.current
                                ? t.experience.present
                                : role.endDate}
                            </p>
                          </div>

                          <RoleBody
                            roleId={roleId}
                            highlight={role.achievements[0]}
                            responsibilities={role.responsibilities}
                            technologies={role.technologies}
                            showMoreLabel={t.experience.showMore}
                            showLessLabel={t.experience.showLess}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </SectionShell>
  );
}
