import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  active,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium tracking-normal text-ink-muted transition",
        active &&
          "border-accent text-accent-ink bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]",
        className
      )}
    >
      {children}
    </span>
  );
}
