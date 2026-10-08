"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  id: string;
  title: string;
  body: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[color:var(--border)] border-y border-border">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm md:text-base font-medium"
                onClick={() => setOpenId(open ? null : item.id)}
              >
                {item.title}
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 text-accent-ink transition-transform duration-200",
                    open && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-4 text-sm text-ink-muted leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
