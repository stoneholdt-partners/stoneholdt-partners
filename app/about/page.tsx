import type { Metadata } from "next";
import Link from "next/link";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Stoneholdt Partners",
  description: "Stoneholdt Partners LLC is a real estate acquisitions company buying older homes, tear-downs and luxury properties as-is.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "About", href: "/about/" }]} />
      <PageHero eyebrow="About" title="Real estate acquisitions, done privately" />
      <Section tone="cream">
        <div className="mx-auto max-w-2xl space-y-5 text-base text-navy/85">
          <p>Stoneholdt Partners LLC acquires older homes, tear-down properties and luxury residences across the country. We work directly with owners so the sale is simple, private and certain.</p>
          <p>Many of the properties we buy are in established, high-value neighborhoods where the land is the main asset and the house is ready for its next chapter. Our <Link href="/portfolio/" className="underline underline-offset-4">portfolio</Link> shows recent deals.</p>
          <p>We keep the process straightforward: a direct offer, an as-is purchase, and a closing date that fits your plans.</p>
        </div>
      </Section>
      <OfferCta source="About" />
    </>
  );
}
