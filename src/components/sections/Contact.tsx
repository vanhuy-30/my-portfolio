"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { profile } from "@/data/profile";

export function Contact() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const reachLinks = [
    {
      href: `mailto:${profile.email}`,
      label: t.common.email,
      detail: profile.email,
      icon: Mail,
      external: false,
    },
    {
      href: profile.linkedin,
      label: t.common.linkedin,
      detail: "in/lyvanhuyit",
      icon: Linkedin,
      external: true,
    },
    {
      href: profile.github,
      label: t.common.github,
      detail: "vanhuy-30",
      icon: Github,
      external: true,
    },
  ];

  return (
    <SectionShell id="contact">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </Reveal>

        <motion.ul
          className="grid gap-3 md:grid-cols-3 md:gap-4"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
          variants={
            reduce
              ? undefined
              : {
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                  },
                }
          }
        >
          {reachLinks.map((item, index) => (
            <motion.li
              key={item.label}
              variants={
                reduce
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 14 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                      },
                    }
              }
            >
              <motion.a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className={
                  index === 0
                    ? "group flex min-h-20 w-full items-center gap-4 rounded-panel border border-accent bg-accent px-5 py-4 text-[var(--on-accent)] shadow-soft transition hover:brightness-105"
                    : "group flex min-h-20 w-full items-center gap-4 rounded-panel border border-[color-mix(in_srgb,var(--ink)_12%,transparent)] bg-[var(--surface-elevated)] px-5 py-4 shadow-[0_10px_28px_-20px_rgba(61,42,28,0.28)] transition-[border-color,box-shadow] duration-200 hover:border-accent hover:shadow-[0_14px_32px_-18px_rgba(61,42,28,0.36)]"
                }
              >
                <item.icon className="size-5 shrink-0" aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{item.label}</span>
                  <span
                    className={
                      index === 0
                        ? "block truncate text-sm opacity-90"
                        : "block truncate text-sm text-ink-muted"
                    }
                  >
                    {item.detail}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </SectionShell>
  );
}
