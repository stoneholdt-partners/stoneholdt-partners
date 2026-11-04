import Link from "next/link";
import { SITE } from "@/data/site";

const LEGAL = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-and-conditions/", label: "Terms & Conditions" },
  { href: "/sms-opt-in/", label: "SMS Opt-In" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-3xl">Stoneholdt Partners</p>
            <p className="mt-3 max-w-sm text-sm text-cream/70">
              Private, as-is cash offers on older homes, tear-downs and luxury properties, in markets across the country.
            </p>
            <Link
              href="/#offer"
              className="mt-6 inline-block rounded-sm bg-cream px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-navy transition hover:bg-cream-light"
            >
              Get My Cash Offer
            </Link>
          </div>
          <nav aria-label="Explore">
            <p className="eyebrow !text-cream/60">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/how-it-works/" className="hover:underline">How It Works</Link></li>
              <li><Link href="/portfolio/" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/markets/" className="hover:underline">Markets</Link></li>
              <li><Link href="/who-we-help/" className="hover:underline">Who We Help</Link></li>
              <li><Link href="/faq/" className="hover:underline">FAQ</Link></li>
              <li><Link href="/partners/" className="hover:underline">Partners</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p className="eyebrow !text-cream/60">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LEGAL.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:underline">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-cream/15 pt-6 text-[11px] uppercase tracking-[0.18em] text-cream/50">
          &copy; 2026 {SITE.legalName} &mdash; Real Estate Acquisitions
        </p>
      </div>
    </footer>
  );
}
