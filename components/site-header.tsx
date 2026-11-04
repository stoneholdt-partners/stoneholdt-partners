"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";

const LEFT = NAV.slice(0, 2);
const RIGHT = NAV.slice(2);

const navLink =
  "relative text-[11px] font-medium uppercase tracking-[0.24em] text-navy/80 transition hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform hover:after:scale-x-100";

/** Centered, prominent logo that settles into a compact bar on scroll, with a progress line. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 30);
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

  const logoSize = scrolled ? "h-10 md:h-11" : "h-14 md:h-[5.5rem]";
  const pad = scrolled ? "py-2" : "py-3 md:py-4";

  return (
    <header
      className={`sticky top-0 z-40 border-b border-navy/15 bg-cream/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-18px_rgba(19,30,69,0.45)]" : ""
      }`}
    >
      <div className={`mx-auto grid max-w-6xl grid-cols-[auto_1fr] items-center gap-4 px-5 transition-all duration-300 md:grid-cols-[1fr_auto_1fr] ${pad}`}>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LEFT.map((n) => (
            <Link key={n.href} href={n.href} className={navLink}>{n.label}</Link>
          ))}
        </nav>

        <Link href="/" aria-label="Stoneholdt Partners home" className="justify-self-start md:justify-self-center" onClick={() => setOpen(false)}>
          <Image
            src="/logos/Stoneholdt Partners.png"
            alt="Stoneholdt Partners"
            width={1152}
            height={455}
            priority
            sizes="(min-width: 768px) 224px, 140px"
            className={`w-auto transition-all duration-300 ${logoSize}`}
          />
        </Link>

        <div className="flex items-center justify-end gap-9">
          <nav className="hidden items-center gap-9 md:flex" aria-label="Secondary">
            {RIGHT.map((n) => (
              <Link key={n.href} href={n.href} className={navLink}>{n.label}</Link>
            ))}
          </nav>
          <Link
            href="/#offer"
            className="hidden rounded-sm border border-navy bg-navy px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-transparent hover:text-navy md:inline-block"
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

      {/* Scroll progress */}
      <span className="pointer-events-none absolute bottom-[-1px] left-0 h-[2px] bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} aria-hidden="true" />
    </header>
  );
}
