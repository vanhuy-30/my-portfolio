import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 md:mb-14 max-w-2xl", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-balance leading-[1.1]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base md:text-lg text-ink-muted leading-relaxed max-w-[55ch]">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
