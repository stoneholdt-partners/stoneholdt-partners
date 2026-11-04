import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { OfferCta } from "@/components/offer-cta";
import { ScrollTimeline } from "@/components/scroll-timeline";
import { Breadcrumbs, FaqList, PageHero, Section } from "@/components/ui";
import { GENERAL_FAQS } from "@/data/faqs";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = pageMeta({ title: "How It Works: Sell Your Home As-Is for Cash", description: "See how a direct as-is cash sale to Stoneholdt Partners works, from your first message to closing. No repairs, showings or commissions.", path: "/how-it-works/" });

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to sell your home to Stoneholdt Partners",
          step: STEPS.map((st, i) => ({ "@type": "HowToStep", position: i + 1, name: st.t, text: st.d })),
        }}
      />
      <PageHero eyebrow="The Process" title="How selling to us works" lead="A direct, as-is sale: no listing, no showings, no repairs." />
      <Section tone="cream">
        <ScrollTimeline className="mx-auto max-w-3xl">
          <div className="absolute bottom-6 left-6 top-6 w-px bg-navy/15" aria-hidden="true">
            <span className="absolute inset-x-0 top-0 bg-accent" style={{ height: "calc(var(--p) * 100%)" }} />
          </div>
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.t} data-step className="reveal relative flex items-start gap-6">
                <span className="step-dot relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-navy/25 bg-cream font-display text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-sm bg-cream-light p-6 ring-1 ring-navy/10">
                  <h2 className="text-lg font-medium">{s.t}</h2>
                  <p className="mt-1.5 text-sm text-navy/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollTimeline>
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
