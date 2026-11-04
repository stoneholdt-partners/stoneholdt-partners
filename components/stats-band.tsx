"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; label: string; prefix?: string };

function CountUp({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      const t = window.setTimeout(() => setN(to), 0);
      return () => window.clearTimeout(t);
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          setN(Math.round((1 - Math.pow(1 - t, 3)) * to));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to]);

  return <span ref={ref}>{prefix}{n}</span>;
}

/** A quiet band of real numbers that count up as it scrolls into view. */
export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-cream/10 bg-navy text-cream" aria-label="By the numbers">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-14 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`reveal px-4 text-center ${i > 0 ? "md:border-l md:border-cream/15" : ""}`}>
            <p className="display text-5xl sm:text-6xl">
              <CountUp to={s.value} prefix={s.prefix} />
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.26em] text-cream/65">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
