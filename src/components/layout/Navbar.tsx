"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";
import { LocaleToggle } from "./LocaleToggle";
import { ThemeToggle } from "./ThemeToggle";

const SECTION_IDS = [
  "home",
  "about",
  "projects",
  "experience",
  "skills",
  "architecture",
  "contact",
];

export function Navbar() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { activeId, focusSection } = useActiveSection(SECTION_IDS);
  const { scrollY } = useScroll();

  const links = useMemo(
    () => [
      { id: "about", label: t.nav.about },
      { id: "projects", label: t.nav.projects },
      { id: "experience", label: t.nav.experience },
      { id: "skills", label: t.nav.skills },
      { id: "architecture", label: t.nav.architecture },
      { id: "contact", label: t.nav.contact },
    ],
    [t]
  );

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 12);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background,border,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-[color-mix(in_srgb,var(--bg)_78%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      )}
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className="mx-auto flex h-16 max-w-wide items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-semibold tracking-tight text-ink transition hover:text-accent-ink"
        >
          {profile.name}
        </a>

        <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {links.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active ? "location" : undefined}
                  onClick={() => focusSection(link.id)}
                  className={cn(
                    "group relative inline-flex rounded-control px-2.5 py-2 text-sm transition duration-200 xl:px-3",
                    "hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] active:scale-[0.97]",
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-accent transition-transform duration-200 ease-out",
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
        </div>

        <motion.button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-control border border-border lg:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          whileTap={reduce ? undefined : { scale: 0.94 }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-[var(--surface-elevated)] lg:hidden"
          >
            <ul className="mx-auto flex max-w-wide flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <a
                    href={`#${link.id}`}
                    aria-current={activeId === link.id ? "location" : undefined}
                    className={cn(
                      "group relative block rounded-control px-3 py-3 text-base transition duration-200 active:scale-[0.99]",
                      activeId === link.id
                        ? "bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-ink"
                        : "text-ink hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]"
                    )}
                    onClick={() => {
                      focusSection(link.id);
                      setOpen(false);
                    }}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 bottom-2 h-0.5 origin-left rounded-full bg-accent transition-transform duration-200 ease-out",
                        activeId === link.id
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-t border-border px-4 py-4 sm:px-6">
              <LocaleToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
