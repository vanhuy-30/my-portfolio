"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { profile } from "@/data/profile";
import { externalHref } from "@/lib/links";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const socials = [
    externalHref(profile.github)
      ? { href: externalHref(profile.github)!, label: t.common.github, icon: Github }
      : null,
    { href: profile.linkedin, label: t.common.linkedin, icon: Linkedin },
    { href: `mailto:${profile.email}`, label: t.common.email, icon: Mail },
  ].filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold tracking-tight">{profile.name}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {t.footer.rights} {t.about.locationValue}
              </p>
            </div>
            <ul className="flex items-center gap-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
                    whileTap={reduce ? undefined : { scale: 0.94 }}
                    className="inline-flex size-11 items-center justify-center rounded-control border border-border text-ink-muted transition hover:border-accent hover:text-accent-ink"
                    aria-label={item.label}
                  >
                    <item.icon className="size-4" aria-hidden />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
