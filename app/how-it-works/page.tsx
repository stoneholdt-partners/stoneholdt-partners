import type { Metadata } from "next";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, FaqList, PageHero, Section } from "@/components/ui";
import { GENERAL_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "How It Works: Sell Your Home As-Is for Cash",
  description: "See how a direct as-is cash sale to Stoneholdt Partners works, from your first message to closing. No repairs, showings or commissions.",
  alternates: { canonical: "/how-it-works/" },
};

const STEPS = [
  { t: "Tell us about the property", d: "Share the address, property type, your timeline and the home's condition using our short form. There is nothing to prepare." },
  { t: "We evaluate it", d: "We review the lot, location, recent comparable sales and what the property can become, whether that is a renovation or a rebuild." },
  { t: "Receive a direct offer", d: "You get a clear, as-is offer. No repair credits, no inspection renegotiation, and no obligation to accept." },
  { t: "Choose your closing date", d: "Close quickly or on a longer timeline. A local title company handles the paperwork." },
  { t: "Get paid", d: "At closing you receive the proceeds. You owe no agent commissions, and we handle the rest." },
];

export default function HowItWorks() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "How It Works", href: "/how-it-works/" }]} />
      <PageHero eyebrow="The Process" title="How selling to us works" lead="A direct, as-is sale: no listing, no showings, no repairs." />
      <Section tone="cream">
        <ol className="mx-auto max-w-3xl space-y-4">
          {STEPS.map((s, i) => (
            <li key={s.t} className="reveal flex gap-6 rounded-sm bg-cream-light p-7 ring-1 ring-navy/10">
              <span className="display text-5xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-lg font-medium">{s.t}</h2>
                <p className="mt-1.5 text-sm text-navy/75">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <h2 className="display mb-8 text-4xl">Common questions</h2>
          <FaqList faqs={GENERAL_FAQS} />
        </div>
      </Section>
      <OfferCta source="How it works" />
    </>
  );
}
