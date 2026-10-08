"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function Tabs({
  items,
  label,
  className,
}: {
  items: TabItem[];
  label?: string;
  className?: string;
}) {
  const [active, setActive] = useState(items[0]?.id);
  const baseId = useId();
  const reduce = useReducedMotion();
  const current = items.find((item) => item.id === active) ?? items[0];

  return (
    <div className={cn("space-y-4", className)}>
      <div
        role="tablist"
        aria-label={label}
        className="flex flex-wrap gap-2 border-b border-border pb-2"
      >
        {items.map((item, index) => {
          const selected = item.id === current?.id;
          return (
            <button
              key={item.id}
              role="tab"
              id={`${baseId}-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                event.preventDefault();
                const delta = event.key === "ArrowRight" ? 1 : -1;
                const next = items[(index + delta + items.length) % items.length];
                setActive(next.id);
                requestAnimationFrame(() => {
                  document.getElementById(`${baseId}-${next.id}`)?.focus();
                });
              }}
              className={cn(
                "rounded-control px-3 py-2 text-sm transition",
                selected
                  ? "bg-accent text-[var(--on-accent)]"
                  : "text-ink-muted hover:text-ink hover:bg-[color-mix(in_srgb,var(--surface)_80%,transparent)]"
              )}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {current ? (
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`${baseId}-panel-${current.id}`}
            aria-labelledby={`${baseId}-${current.id}`}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-ink-muted leading-relaxed"
          >
            {current.content}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
