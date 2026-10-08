"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "./Button";

export function Modal({
  open,
  onClose,
  title,
  children,
  closeLabel = "Close",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  closeLabel?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
      previous?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <motion.button
            type="button"
            aria-label={closeLabel}
            className="absolute inset-0 bg-[var(--overlay)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="craft-modal-title"
            tabIndex={-1}
            className="relative z-10 w-full max-w-md rounded-panel border border-border bg-[var(--surface-elevated)] p-6 shadow-panel outline-none"
            initial={reduce ? false : { opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 10, scale: 0.97 }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 360, damping: 28 }
            }
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 id="craft-modal-title" className="text-lg font-semibold">
                {title}
              </h3>
              <motion.button
                type="button"
                onClick={onClose}
                whileTap={reduce ? undefined : { scale: 0.9, rotate: 90 }}
                className="inline-flex size-9 items-center justify-center rounded-control text-ink-muted hover:text-ink"
                aria-label={closeLabel}
              >
                <X className="size-4" aria-hidden />
              </motion.button>
            </div>
            <div className="text-sm text-ink-muted leading-relaxed">{children}</div>
            <div className="mt-6 flex justify-end">
              <Button type="button" onClick={onClose}>
                {closeLabel}
              </Button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
