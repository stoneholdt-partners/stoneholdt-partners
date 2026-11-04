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
  const closed = DEALS.filter((d) => d.status === "Closed");
  const escrow = DEALS.filter((d) => d.status === "In Escrow");
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio/" }]} />
      <PageHero eyebrow="Portfolio" title="Real deals. Real closings." lead="A look at recent acquisitions: older homes and parcels bought as-is for redevelopment." />
      <Section tone="cream">
        {escrow.length > 0 && (
          <>
            <h2 className="eyebrow mb-6">In Escrow</h2>
            <div className="mb-16 grid gap-6 md:grid-cols-2">{escrow.map((d) => <DealCard key={d.id} deal={d} />)}</div>
          </>
        )}
        {closed.length > 0 && (
          <>
            <h2 className="eyebrow mb-6">Closed</h2>
            <div className="grid gap-6 md:grid-cols-2">{closed.map((d) => <DealCard key={d.id} deal={d} />)}</div>
          </>
        )}
        <p className="mt-12 max-w-2xl text-sm text-navy/70">
          Own a property like these? Read about how we buy <Link href="/sell-teardown-property/" className="underline underline-offset-4">tear-down properties</Link> and{" "}
          <Link href="/sell-old-house-as-is/" className="underline underline-offset-4">older homes</Link>.
        </p>
      </Section>
      <OfferCta source="Portfolio" />
    </>
  );
}
