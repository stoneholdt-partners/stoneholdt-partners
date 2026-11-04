"use client";

import { useEffect, useRef } from "react";
import { STATES } from "@/data/markets";

/** Slow-scrolling band of the states and cities we buy in. Eases down (never stops) on hover. */
export function Ticker() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const anim = el.getAnimations()[0];
    if (!anim) return;
    let target = 1;
    let raf = 0;
    const tick = () => {
      anim.playbackRate += (target - anim.playbackRate) * 0.08;
      if (Math.abs(target - anim.playbackRate) > 0.005) raf = requestAnimationFrame(tick);
      else {
        anim.playbackRate = target;
        raf = 0;
      }
    };
    const set = (t: number) => {
      target = t;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const parent = el.parentElement!;
    const enter = () => set(0.2);
    const leave = () => set(1);
    parent.addEventListener("pointerenter", enter);
    parent.addEventListener("pointerleave", leave);
    return () => {
      parent.removeEventListener("pointerenter", enter);
      parent.removeEventListener("pointerleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const items = STATES.flatMap((s) => [s.name, ...s.cities.map((c) => c.name)]);
  const stateNames = new Set(STATES.map((s) => s.name));
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={`${t}-${i}`} className="flex items-center">
          <span className={`whitespace-nowrap px-6 text-[11px] font-medium uppercase tracking-[0.3em] ${stateNames.has(t) ? "text-cream" : "text-cream/55"}`}>{t}</span>
          <span className="size-1 rotate-45 bg-cream/40" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-navy-deep py-4" role="region" aria-label="Markets we buy in">
      <div ref={track} className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-deep to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-deep to-transparent" aria-hidden="true" />
    </div>
  );
}
