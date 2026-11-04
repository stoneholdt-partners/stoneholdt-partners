"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";

const navLink =
  "hdr-link relative text-[11px] font-medium uppercase tracking-[0.24em] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100";

/**
 * Over a dark hero the header has no background at all: a white logo and cream links sit
 * directly on the photo. After a little scrolling it becomes a slim solid bar with the navy
 * logo. (Colors live in globals.css; pages with a dark hero set data-hero="dark".)
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
    <header
      data-compact={compact}
      className="site-header pointer-events-none sticky top-0 z-40 h-[72px] md:h-[112px]"
    >
      <div className={`hdr-bar pointer-events-auto absolute inset-x-0 top-0 ${compact ? "h-14 md:h-[60px]" : "h-[72px] md:h-[112px]"}`}>
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-6 px-5">
          <Link href="/" aria-label="Stoneholdt Partners home" onClick={() => setOpen(false)} className="flex items-center">
            <Image
              src="/logos/Stoneholdt Partners.png"
              alt="Stoneholdt Partners"
              width={1152}
              height={455}
              priority
              sizes="(min-width: 768px) 224px, 140px"
              className={`hdr-logo w-auto ${compact ? "h-9 md:h-10" : "h-12 md:h-[5.25rem]"}`}
            />
          </Link>

          <div className="flex items-center gap-9">
            <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className={navLink}>{n.label}</Link>
              ))}
            </nav>
            <Link
              href="/#offer"
              className="hdr-cta btn-sheen hidden rounded-sm px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] md:inline-block"
            >
              Get My Offer
            </Link>
            <button
              type="button"
              className="hdr-menu rounded-sm px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <span className="pointer-events-none absolute bottom-[-1px] left-0 h-[2px] bg-brass transition-[width] duration-150" style={{ width: `${progress}%` }} aria-hidden="true" />
      </div>

      {open && (
        <nav id="mobile-nav" className="pointer-events-auto absolute inset-x-0 top-14 border-t border-navy/10 bg-cream px-5 pb-6 shadow-lg md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-navy/10 py-4 text-xs font-medium uppercase tracking-[0.22em] text-navy">
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
