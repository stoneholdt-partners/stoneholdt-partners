import Image from "next/image";
import Link from "next/link";
import { Ornament } from "./ornament";
import { SITE } from "@/data/site";

const LEGAL = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-and-conditions/", label: "Terms & Conditions" },
  { href: "/sms-opt-in/", label: "SMS Opt-In" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <Image src="/logos/Stoneholdt Partners.png" alt="Stoneholdt Partners" width={1152} height={455} className="h-24 w-auto brightness-0 invert sm:h-28" />
          <Ornament light className="mt-8" />
          <p className="mt-6 max-w-md text-sm text-cream/70">
            We buy homes for luxury redevelopment. Private, as-is cash offers in markets across the country.
          </p>
          <Link
            href="/#offer"
            className="mt-8 inline-block rounded-sm border border-cream/70 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-cream transition hover:bg-cream hover:text-navy"
          >
            Get My Cash Offer
          </Link>
        </div>

        <div className="mt-16 grid gap-10 border-t border-cream/15 pt-10 text-center sm:grid-cols-2 sm:text-left">
          <nav aria-label="Explore">
            <p className="eyebrow !text-cream/55">Explore</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-sm sm:justify-start">
              <li><Link href="/how-it-works/" className="hover:underline">How It Works</Link></li>
              <li><Link href="/portfolio/" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/markets/" className="hover:underline">Markets</Link></li>
              <li><Link href="/who-we-help/" className="hover:underline">Who We Help</Link></li>
              <li><Link href="/faq/" className="hover:underline">FAQ</Link></li>
              <li><Link href="/partners/" className="hover:underline">Partners</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p className="eyebrow !text-cream/55">Legal</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-sm sm:justify-start">
              {LEGAL.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:underline">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-center text-[11px] uppercase tracking-[0.2em] text-cream/45">
          &copy; 2026 {SITE.legalName} &mdash; Real Estate Acquisitions
        </p>
      </div>
    </footer>
  );
}
