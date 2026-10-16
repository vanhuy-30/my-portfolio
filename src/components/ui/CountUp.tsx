"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** Counts the first number in `value` up from 0, keeping any prefix/suffix ("~5 yrs", "10+"). */
export function CountUp({
  value,
  duration = 1.4,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const hasNumber = Boolean(match);
  const target = match ? Number(match[2]) : 0;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!hasNumber || reduce || !inView) return;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });
    return () => controls.stop();
  }, [hasNumber, reduce, inView, target, duration, delay]);

  if (!match) return <span>{value}</span>;

  const shown = reduce ? target : current;
  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden>
        {match[1]}
        {shown}
        {match[3]}
      </span>
    </span>
  );
}
