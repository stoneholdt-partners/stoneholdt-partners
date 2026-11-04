import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

const EXPLORE = [
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/markets/", label: "Markets" },
  { href: "/who-we-help/", label: "Who We Help" },
  { href: "/faq/", label: "FAQ" },
  { href: "/partners/", label: "Partners" },
] as const;
const LEGAL = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-and-conditions/", label: "Terms & Conditions" },
  { href: "/sms-opt-in/", label: "SMS Opt-In" },
] as const;

const linkClass = "text-sm text-cream/80 transition hover:text-cream hover:underline underline-offset-4";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 sm:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1px_1fr] md:gap-14">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Image src="/logos/Stoneholdt Partners.png" alt="Stoneholdt Partners" width={1152} height={455} className="h-24 w-auto brightness-0 invert sm:h-28" />
            <p className="mt-5 max-w-xs text-sm text-cream/65">We buy homes for luxury redevelopment. Private, as-is cash offers across the country.</p>
            <Link
              href="/#offer"
              className="btn-sheen mt-6 inline-block rounded-sm border border-cream/70 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-cream transition hover:bg-cream hover:text-navy"
            >
              Get My Cash Offer
            </Link>
          </div>

          {/* Subtle divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cream/25 to-transparent md:h-full md:min-h-40 md:w-px md:bg-gradient-to-b" aria-hidden="true" />

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <nav aria-label="Explore">
              <p className="eyebrow !text-cream/50">Explore</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
                {EXPLORE.map((l) => (
                  <li key={l.href}><Link href={l.href} className={linkClass}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Legal">
              <p className="eyebrow !text-cream/50">Legal</p>
              <ul className="mt-4 space-y-2.5">
                {LEGAL.map((l) => (
                  <li key={l.href}><Link href={l.href} className={linkClass}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-12 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-cream/40">
          &copy; 2026 {SITE.legalName} &mdash; Real Estate Acquisitions
        </p>
      </div>
    </footer>
  );
}
