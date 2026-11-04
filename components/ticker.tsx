import { STATES } from "@/data/markets";

/** Slow-scrolling band of the states and cities we buy in. Pure CSS; pauses on hover. */
export function Ticker() {
  const items = STATES.flatMap((s) => [s.name, ...s.cities.map((c) => c.name)]);
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={`${t}-${i}`} className="flex items-center">
          <span className={`whitespace-nowrap px-6 text-[11px] font-medium uppercase tracking-[0.3em] ${STATES.some((s) => s.name === t) ? "text-cream" : "text-cream/55"}`}>{t}</span>
          <span className="size-1 rotate-45 bg-cream/40" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="group relative overflow-hidden border-y border-cream/10 bg-navy-deep py-4" role="region" aria-label="Markets we buy in">
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-deep to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-deep to-transparent" aria-hidden="true" />
    </div>
  );
}
