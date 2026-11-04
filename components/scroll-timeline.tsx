"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps a group of steps and drives a CSS variable `--p` (0 to 1) as the user scrolls
 * through it. Direct children marked `data-step` get `.is-active` once the line reaches them.
 */
export function ScrollTimeline({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-step]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height));
      el.style.setProperty("--p", p.toFixed(3));
      steps.forEach((s, i) => s.classList.toggle("is-active", p >= (i + 0.35) / steps.length));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ "--p": 0 } as React.CSSProperties}>
      {children}
    </div>
  );
}
