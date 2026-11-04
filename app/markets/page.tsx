import type { Metadata } from "next";
import Link from "next/link";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";
import { MARKETS } from "@/data/markets";

export const metadata: Metadata = {
  title: "Markets We Buy In",
  description: "Stoneholdt Partners buys older homes, tear-downs and luxury properties nationwide. See markets where we are actively acquiring.",
  alternates: { canonical: "/markets/" },
};

export default function MarketsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Markets", href: "/markets/" }]} />
      <PageHero eyebrow="Markets" title="Buying across the country" lead="We buy nationwide. These are markets where we are actively acquiring." />
      <Section tone="cream">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m) => (
            <Link key={m.slug} href={`/markets/${m.slug}/`} className="reveal rounded-sm border border-navy/15 bg-cream-light p-7 transition hover:border-navy/50 hover:shadow-lg">
              <p className="eyebrow">{m.region}</p>
              <h2 className="display mt-1 text-4xl">{m.name}</h2>
              <p className="mt-3 text-sm text-navy/75">{m.summary}</p>
            </Link>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-navy/70">Your city is not listed? We buy in other markets too. Request an offer and tell us where the property is.</p>
      </Section>
      <OfferCta source="Markets" />
    </>
  );
}
