/** Hairline rule with a centered diamond, used as a quiet luxury divider. */
export function Ornament({ className = "", light = false }: { className?: string; light?: boolean }) {
  const line = light ? "bg-cream/40" : "bg-navy/25";
  const dot = light ? "bg-cream/70" : "bg-accent";
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className={`h-px w-14 ${line}`} />
      <span className={`size-1.5 rotate-45 ${dot}`} />
      <span className={`h-px w-14 ${line}`} />
    </div>
  );
}
