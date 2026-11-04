"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center" aria-label="Stoneholdt Partners home" onClick={() => setOpen(false)}>
          <Image src="/logos/Stoneholdt Partners.png" alt="Stoneholdt Partners" width={180} height={44} priority className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-[11px] font-medium uppercase tracking-[0.2em] text-navy/80 transition hover:text-navy">
              {n.label}
            </Link>
          ))}
          <Link
            href="/#offer"
            className="rounded-sm bg-navy px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-accent"
          >
            Get My Offer
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden rounded-sm border border-navy/30 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em]"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-navy/10 bg-cream px-5 pb-5 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-navy/10 py-3.5 text-xs font-medium uppercase tracking-[0.2em]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#offer" onClick={() => setOpen(false)} className="mt-4 block rounded-sm bg-navy px-5 py-3.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-cream">
            Get My Offer
          </Link>
        </nav>
      )}
    </header>
  );
}
