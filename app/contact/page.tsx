import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { OfferForm } from "@/components/offer-form";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = pageMeta({ title: "Get Your Cash Offer", description: "Tell Stoneholdt Partners about the home or lot you are thinking of selling and request a private, as-is cash offer.", path: "/contact/" });

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Stoneholdt Partners LLC" title="Get Your Cash Offer" lead="Thinking about selling a home or lot? Tell us a little about it and we will be in touch." />
      <div className="mx-auto max-w-xl px-5 py-16">
        <div className="frame-brass rounded-sm bg-cream-light p-6 shadow-xl ring-1 ring-navy/10 sm:p-8">
          <OfferForm source="Contact page" />
        </div>
      </div>
    </>
  );
}
