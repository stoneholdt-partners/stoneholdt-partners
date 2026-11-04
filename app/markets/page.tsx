import type { Metadata } from "next";
import Link from "next/link";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";
import { STATES, cityList } from "@/data/markets";

export const metadata: Metadata = {
  title: "Markets We Buy In",
  description: "Stoneholdt Partners buys homes for luxury redevelopment in Washington, Maryland, Virginia, North Carolina and Florida, and in other markets by request.",
  alternates: { canonical: "/markets/" },
};

export default function MarketsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Markets", href: "/markets/" }]} />
      <PageHero eyebrow="Markets" title="Buying across the country" lead="We buy nationwide. These are the states where we are actively acquiring." />
      <Section tone="cream">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATES.map((s) => (
            <Link key={s.slug} href={`/markets/${s.slug}/`} className="reveal group rounded-sm border border-navy/15 bg-cream-light p-8 transition hover:border-navy/50 hover:shadow-lg">
              <h2 className="display text-4xl">{s.name}</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-navy/55">{cityList(s)}</p>
              <p className="mt-4 text-sm text-navy/75">{s.summary}</p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent transition group-hover:translate-x-1">Explore &rarr;</p>
            </Link>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-navy/70">Your state is not listed? We buy in other markets too. Request an offer and tell us where the property is.</p>
      </Section>
      <OfferCta source="Markets" />
    </>
  );
}
