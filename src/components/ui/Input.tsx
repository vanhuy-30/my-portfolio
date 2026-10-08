import { cn } from "@/lib/cn";

export function Field({
  label,
  error,
  errorId,
  children,
}: {
  label: string;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
      {error ? (
        <span id={errorId} className="block text-xs text-accent-ink">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-control border border-border bg-[var(--surface-elevated)] px-4 py-3 text-sm text-ink placeholder:text-muted transition duration-200 focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_22%,transparent)]",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full min-h-[140px] resize-y rounded-control border border-border bg-[var(--surface-elevated)] px-4 py-3 text-sm text-ink placeholder:text-muted transition duration-200 focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_22%,transparent)]",
        className
      )}
      {...props}
    />
  );
}
