import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PartnerForm } from "@/components/partner-form";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = pageMeta({ title: "Partner With Us: Builders, Developers & Funds", description: "Builders, developers and funds: tell Stoneholdt Partners what you are looking to acquire and we will bring you matching off-market opportunities.", path: "/partners/" });

export default function PartnersPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Partners", href: "/partners/" }]} />
      <PageHero eyebrow="Partners" title="Partner with us" lead="Let us know what to look for. We bring builders, developers and funds off-market redevelopment opportunities that fit their criteria." />
      <Section tone="cream">
        <div className="mx-auto max-w-xl rounded-sm bg-cream-light p-6 shadow-xl ring-1 ring-navy/10 sm:p-8">
          <PartnerForm />
        </div>
      </Section>
    </>
  );
}
