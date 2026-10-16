"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function Sheet({
  open,
  onClose,
  title,
  children,
  closeLabel = "Close",
  wide = false,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  closeLabel?: string;
  wide?: boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    panel?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && panel) {
        const focusable = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    // Lock the page itself (html is the scroller) so only the panel scrolls,
    // and pad by the scrollbar width so the page does not shift.
    const root = document.documentElement;
    const scrollbar = window.innerWidth - root.clientWidth;
    const original = {
      overflow: root.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };
    root.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = original.overflow;
      document.body.style.paddingRight = original.paddingRight;
      previous?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.button
            type="button"
            aria-label={closeLabel}
            className="absolute inset-0 bg-[var(--overlay)] backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28 }}
            onClick={onClose}
          />
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className={cn(
              "relative z-10 flex h-[100dvh] w-full max-w-xl flex-col border-l border-border bg-[var(--surface-elevated)] shadow-panel outline-none",
              wide && "lg:max-w-4xl"
            )}
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? undefined : { x: "100%" }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 320, damping: 34, mass: 0.85 }
            }
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-[var(--surface-elevated)] px-4 py-3 sm:px-5 md:px-6 md:py-4">
              <motion.h2
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="min-w-0 truncate text-lg md:text-xl font-semibold tracking-tight"
              >
                {title}
              </motion.h2>
              <motion.button
                type="button"
                onClick={onClose}
                whileTap={reduce ? undefined : { scale: 0.9, rotate: 90 }}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-control text-ink-muted hover:bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] hover:text-ink"
                aria-label={closeLabel}
              >
                <X className="size-5" aria-hidden />
              </motion.button>
            </div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.4 }}
              className="sheet-scroll flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5 md:px-6 md:py-6 lg:px-8 lg:py-8"
            >
              {children}
            </motion.div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
