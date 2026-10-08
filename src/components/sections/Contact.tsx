"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Field, Input, Textarea } from "@/components/ui/Input";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { profile } from "@/data/profile";
import { externalHref } from "@/lib/links";
import { submitContact } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const errorCount = Object.keys(errors).length;

  useEffect(() => {
    if (errorCount > 1) summaryRef.current?.focus();
  }, [errorCount, errors]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = t.contact.validationName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = t.contact.validationEmail;
    }
    if (message.length < 8) nextErrors.message = t.contact.validationMessage;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 1) {
      const field = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${field}`)?.focus();
    }
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      await submitContact({ name, email, message });
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const reachLinks = [
    {
      href: profile.linkedin,
      label: t.common.linkedin,
      detail: "lyvanhuyit",
      icon: Linkedin,
      aria: t.common.linkedin,
    },
    {
      href: `mailto:${profile.email}`,
      label: t.common.email,
      detail: profile.email,
      icon: Mail,
      aria: t.common.email,
    },
    {
      href: `tel:+84389117513`,
      label: t.common.phone,
      detail: profile.phone,
      icon: Phone,
      aria: t.common.phone,
    },
    externalHref(profile.github)
      ? {
          href: externalHref(profile.github)!,
          label: t.common.github,
          detail: "vanhuy-30",
          icon: Github,
          aria: t.common.github,
        }
      : null,
  ].filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <SectionShell id="contact">
      <Container>
        <Reveal variant="clip">
          <SectionHeading
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal delay={0.06}>
            <div className="space-y-4">
              <p className="text-sm font-medium text-ink">{t.contact.orReach}</p>
              <ul className="space-y-3">
                {reachLinks.map((item) => (
                  <li key={item.aria}>
                    <motion.a
                      href={item.href}
                      aria-label={item.aria}
                      whileHover={reduce ? undefined : { y: -2 }}
                      transition={{ type: "spring", stiffness: 320, damping: 24 }}
                      className="group flex min-h-14 w-full items-center gap-3 rounded-panel border border-[color-mix(in_srgb,var(--ink)_12%,transparent)] bg-[color-mix(in_srgb,var(--canvas-b)_72%,var(--canvas-a))] px-4 py-3 text-sm shadow-[0_10px_28px_-20px_rgba(61,42,28,0.28)] transition-[border-color,background-color,box-shadow] duration-200 hover:border-[color-mix(in_srgb,var(--ink)_22%,transparent)] hover:bg-[var(--canvas-b)] hover:shadow-[0_14px_32px_-18px_rgba(61,42,28,0.36)] dark:border-[color-mix(in_srgb,var(--ink)_16%,transparent)] dark:bg-[var(--surface)] dark:hover:bg-[var(--surface-elevated)]"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-control bg-[color-mix(in_srgb,var(--canvas-a)_55%,var(--surface))] text-ink transition group-hover:bg-[var(--canvas-a)] group-hover:text-accent-ink">
                        <item.icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium text-ink">
                          {item.label}
                        </span>
                        <span className="block truncate text-ink-muted">
                          {item.detail}
                        </span>
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form
              onSubmit={onSubmit}
              className="space-y-5 rounded-panel border border-border bg-[var(--surface)]/50 p-5 md:p-7 shadow-soft"
              noValidate
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              {errorCount > 1 ? (
                <div
                  ref={summaryRef}
                  tabIndex={-1}
                  role="alert"
                  className="rounded-control border border-accent bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface-elevated))] px-4 py-3 text-sm text-ink outline-none"
                >
                  <ul className="space-y-1">
                    {(["name", "email", "message"] as const)
                      .filter((field) => errors[field])
                      .map((field) => (
                        <li key={field}>
                          <a href={`#contact-${field}`} className="underline">
                            {errors[field]}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}
              <Field
                label={t.contact.formName}
                error={errors.name}
                errorId="contact-name-error"
              >
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
              </Field>
              <Field
                label={t.contact.formEmail}
                error={errors.email}
                errorId="contact-email-error"
              >
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
              </Field>
              <Field
                label={t.contact.formMessage}
                error={errors.message}
                errorId="contact-message-error"
              >
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                />
              </Field>
              <Magnetic>
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? t.contact.sending : t.contact.submit}
                </Button>
              </Magnetic>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.p
                    key="success"
                    role="status"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-ink"
                  >
                    {t.contact.success}
                  </motion.p>
                ) : null}
                {status === "error" ? (
                  <motion.p
                    key="error"
                    role="alert"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-accent-ink"
                  >
                    {t.contact.error}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </motion.form>
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}
