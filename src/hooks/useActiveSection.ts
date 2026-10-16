"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MARKER = 120;

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const pinned = useRef<string | null>(null);
  const pinTimer = useRef<number | null>(null);
  const idsKey = sectionIds.join("|");

  const readActive = useCallback((ids: string[]) => {
    let current = ids[0] ?? "";
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= MARKER) current = id;
    }

    const atBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 8;
    if (atBottom && ids.length) current = ids[ids.length - 1];
    return current;
  }, []);

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const pick = () => {
      if (pinned.current) return;
      setActiveId(readActive(ids));
    };

    // Tall sections can cross the marker line without crossing any
    // intersection threshold, so also re-check on scroll (once per frame).
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        pick();
      });
    };

    const observer = new IntersectionObserver(pick, {
      threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
    });
    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    pick();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [idsKey, readActive]);

  const focusSection = useCallback(
    (id: string) => {
      pinned.current = id;
      setActiveId(id);
      if (pinTimer.current) window.clearTimeout(pinTimer.current);
      pinTimer.current = window.setTimeout(() => {
        pinned.current = null;
        const ids = idsKey.split("|").filter(Boolean);
        setActiveId(readActive(ids));
      }, 800);
    },
    [idsKey, readActive]
  );

  useEffect(() => {
    return () => {
      if (pinTimer.current) window.clearTimeout(pinTimer.current);
    };
  }, []);

  return { activeId, focusSection };
}
