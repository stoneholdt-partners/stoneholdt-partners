import type { Metadata } from "next";
import Link from "next/link";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";
import { NICHES } from "@/data/niches";

export const metadata: Metadata = {
  title: "Who We Help: Older Homes, Tear-Downs & Well-Kept Homes",
  description: "We buy homes for luxury redevelopment: older homes, tear-downs, well-kept larger homes, inherited estates and houses needing repairs, as-is and for cash.",
  alternates: { canonical: "/who-we-help/" },
};

export default function WhoWeHelp() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Who We Help", href: "/who-we-help/" }]} />
      <PageHero eyebrow="Who We Help" title="Properties with more to them" lead="From dated family homes to well-kept larger homes, we buy where the best use of the lot is a new build." />
      <Section tone="cream">
        <div className="grid gap-5 md:grid-cols-2">
          {NICHES.map((n) => (
            <Link key={n.slug} href={`/${n.slug}/`} className="reveal rounded-sm border border-navy/15 bg-cream-light p-8 transition hover:border-navy/50 hover:shadow-lg">
              <h2 className="display text-4xl">{n.label}</h2>
              <p className="mt-3 text-sm text-navy/75">{n.lead}</p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Learn more &rarr;</p>
            </Link>
          ))}
        </div>
      </Section>
      <OfferCta source="Who we help" />
    </>
  );
}
