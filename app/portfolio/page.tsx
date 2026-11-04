import type { Metadata } from "next";
import Link from "next/link";
import { DealCard } from "@/components/deal-card";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";
import { DEALS } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio: Recent Redevelopment Acquisitions",
  description: "Recent Stoneholdt Partners acquisitions, closed and in escrow, including older homes and tear-down parcels in Bellevue, Washington.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio/" }]} />
      <PageHero eyebrow="Portfolio" title="Real deals. Real closings." lead="A look at recent acquisitions: older homes and parcels bought as-is for redevelopment." />
      <Section tone="cream">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DEALS.map((d) => (
            <DealCard key={d.id} deal={d} />
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-sm text-navy/70">
          Own a property like these? Read about how we buy <Link href="/sell-teardown-property/" className="underline underline-offset-4">tear-down properties</Link> and{" "}
          <Link href="/sell-old-house-as-is/" className="underline underline-offset-4">older homes</Link>.
        </p>
      </Section>
      <OfferCta source="Portfolio" />
    </>
  );
}
