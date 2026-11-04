import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = pageMeta({ title: "About Stoneholdt Partners", description: "Stoneholdt Partners LLC is a real estate acquisitions company buying homes for luxury redevelopment, as-is.", path: "/about/" });

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "About", href: "/about/" }]} />
      <PageHero eyebrow="About" title="Real estate acquisitions, done privately" />
      <Section tone="cream">
        <div className="mx-auto max-w-2xl space-y-5 text-base text-navy/85">
          <p>Stoneholdt Partners LLC buys homes for luxury redevelopment across the country. We work directly with owners so the sale is simple, private and certain, and we work with builders who are looking for the right lots.</p>
          <p>Many of the properties we buy are in established, high-value neighborhoods where the land is the main asset. Some homes are dated or tired; others are well kept, larger homes that a builder values for the lot and what a new home could sell for. Our <Link href="/portfolio/" className="underline underline-offset-4">portfolio</Link> shows recent deals.</p>
          <p>We keep the process straightforward: a direct offer, an as-is purchase, and a closing date that fits your plans.</p>
        </div>
      </Section>
      <OfferCta source="About" />
    </>
  );
}
