import type { Metadata } from "next";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, FaqList, PageHero, Section } from "@/components/ui";
import { GENERAL_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ: Selling Your Home As-Is",
  description: "Answers to common questions about selling your older home, tear-down or luxury property as-is to Stoneholdt Partners.",
  alternates: { canonical: "/faq/" },
};

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
