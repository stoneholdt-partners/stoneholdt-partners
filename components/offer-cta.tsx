import { OfferForm } from "./offer-form";
import { Heading, Section } from "./ui";

/** Closing section with the cash-offer form, reused at the bottom of content pages. */
export function OfferCta({ source, title = "Ready to see your offer?" }: { source: string; title?: string }) {
  return (
    <Section tone="navy" id="offer">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Heading
          eyebrow="Get Your Cash Offer"
          title={title}
          lead="Tell us about the property. There is no obligation, and we never list or show your home."
        />
        <div className="reveal">
          <div className="rounded-sm bg-cream-light p-6 text-navy shadow-xl sm:p-8">
            <OfferForm source={source} />
          </div>
        </div>
      </div>
    </Section>
  );
}
