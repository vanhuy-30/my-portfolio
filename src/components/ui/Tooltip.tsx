"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export function Tooltip({
  content,
  children,
  className,
}: {
  content: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span aria-describedby={open ? id : undefined}>{children}</span>
      {open ? (
        <span
          role="tooltip"
          id={id}
          className="absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-control border border-border bg-[var(--surface-elevated)] px-3 py-1.5 text-xs text-ink shadow-soft"
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
