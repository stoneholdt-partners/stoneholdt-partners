import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, FaqList, PageHero, Section } from "@/components/ui";
import { GENERAL_FAQS } from "@/data/faqs";

export const metadata: Metadata = pageMeta({ title: "FAQ: Selling Your Home As-Is", description: "Answers to common questions about selling your older home, tear-down or well-kept home to a builder as-is to Stoneholdt Partners.", path: "/faq/" });

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq/" }]} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <Section tone="cream">
        <div className="mx-auto max-w-3xl"><FaqList faqs={GENERAL_FAQS} /></div>
      </Section>
      <OfferCta source="FAQ" />
    </>
  );
}
