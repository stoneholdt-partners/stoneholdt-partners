"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";

const navLink =
  "relative text-[11px] font-medium uppercase tracking-[0.24em] text-navy/80 transition hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform hover:after:scale-x-100";

/**
 * The logo hangs from the bar like a framed nameplate, then settles into the bar as you
 * scroll. Navigation stays together on the right; a thin progress line tracks the scroll.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const compact = scrolled || open;

  return (
    <header className="sticky top-0 z-40">
      {/* The bar */}
      <div
        className={`relative border-b border-navy/15 bg-cream/95 backdrop-blur transition-[height,box-shadow] duration-500 ease-out ${
          compact ? "h-14 shadow-[0_10px_30px_-20px_rgba(19,30,69,0.5)] md:h-[60px]" : "h-14 md:h-[72px]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-end gap-9 px-5">
          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={navLink}>{n.label}</Link>
            ))}
          </nav>
          <Link
            href="/#offer"
            className="btn-sheen hidden rounded-sm border border-navy bg-navy px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-transparent hover:text-navy md:inline-block"
          >
            Get My Offer
          </Link>
          <button
            type="button"
            className="rounded-sm border border-navy/30 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <span className="pointer-events-none absolute bottom-[-1px] left-0 h-[2px] bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} aria-hidden="true" />
      </div>

      {/* The hanging logo: overlays the bar, extends below it, then tucks in on scroll */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <div className="mx-auto max-w-6xl px-5">
          <Link
            href="/"
            aria-label="Stoneholdt Partners home"
            onClick={() => setOpen(false)}
            className={`pointer-events-auto relative flex items-center justify-center transition-all duration-500 ease-out ${
              compact
                ? "h-14 w-[7.5rem] rounded-b-none bg-transparent md:h-[60px] md:w-[9.5rem]"
                : "h-[6.25rem] w-[10.5rem] rounded-b-[2.25rem] bg-cream shadow-[0_28px_40px_-26px_rgba(19,30,69,0.6)] md:h-[8rem] md:w-[15.5rem] md:rounded-b-[3rem]"
            }`}
          >
            <Image
              src="/logos/Stoneholdt Partners.png"
              alt="Stoneholdt Partners"
              width={1152}
              height={455}
              priority
              sizes="(min-width: 768px) 224px, 140px"
              className={`w-auto transition-all duration-500 ease-out ${compact ? "h-9 md:h-10" : "h-14 md:h-[5.5rem]"}`}
            />
          </Link>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-navy/10 bg-cream px-5 pb-6 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-navy/10 py-4 text-xs font-medium uppercase tracking-[0.22em]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#offer" onClick={() => setOpen(false)} className="mt-5 block rounded-sm bg-navy px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-cream">
            Get My Offer
          </Link>
        </nav>
      )}
    </header>
  );
}
