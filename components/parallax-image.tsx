"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Photo that drifts slowly as you scroll (parallax). Falls back to static for reduced motion. */
export function ParallaxImage({
  src,
  alt = "",
  className = "",
  strength = 0.18,
  priority = false,
  eager = false,
  sizes = "100vw",
}: {
  src: string;
  alt?: string;
  className?: string;
  strength?: number;
  priority?: boolean;
  /** Load immediately instead of lazily (for images inside reveal/clip containers). */
  eager?: boolean;
  sizes?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const w = wrap.current;
      const i = img.current;
      if (!w || !i) return;
      const r = w.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -100 || r.top > vh + 100) return;
      // Distance of the block's center from the viewport center drives the offset.
      const offset = (r.top + r.height / 2 - vh / 2) * -strength;
      i.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.18)`;
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
  }, [strength]);

  return (
    <div ref={wrap} className="absolute inset-0 overflow-hidden" aria-hidden={alt ? undefined : true}>
      <div ref={img} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.18)" }}>
        <Image src={src} alt={alt} fill priority={priority} loading={eager && !priority ? "eager" : undefined} sizes={sizes} className={`object-cover ${className}`} />
      </div>
    </div>
  );
}
