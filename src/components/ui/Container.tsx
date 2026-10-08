import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  wide,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        wide ? "max-w-wide" : "max-w-content",
        className
      )}
    >
      {children}
    </div>
  );
}
