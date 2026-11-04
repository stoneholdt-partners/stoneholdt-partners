import type { Metadata } from "next";
import Link from "next/link";
import { OfferForm } from "@/components/offer-form";
import { DealCard } from "@/components/deal-card";
import { FaqList, Heading, Section } from "@/components/ui";
import { DEALS } from "@/data/portfolio";
import { GENERAL_FAQS } from "@/data/faqs";
import { MARKETS } from "@/data/markets";
import { NICHES } from "@/data/niches";

export const metadata: Metadata = {
  title: { absolute: "Sell Your Home As-Is for Cash | Stoneholdt Partners" },
  description:
    "Private, as-is cash offers on older homes, tear-downs and luxury properties nationwide. No repairs, no showings, no commissions. Request your offer from Stoneholdt Partners.",
  alternates: { canonical: "/" },
};

const STEPS = [
  { n: "01", t: "Tell us about the property", d: "Share the address, your timeline and the home's condition. It takes about two minutes." },
  { n: "02", t: "Receive a direct offer", d: "We evaluate the lot, the location and what the property can become, then present a clear as-is offer." },
  { n: "03", t: "Close on your terms", d: "Choose the closing date. No repairs, no showings, no commissions." },
];

const BENEFITS = [
  { t: "Truly as-is", d: "Dated systems, deferred maintenance, contents inside. Leave it exactly as it is." },
  { t: "No commissions or fees", d: "Selling directly to us means no agent commissions and no listing costs." },
  { t: "Private by design", d: "No yard sign, no listing, no open houses. Ideal for estates and high-profile homes." },
  { t: "Your timeline", d: "Close quickly, or take 60 to 90 days or more to plan your next move." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-navy text-cream">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(237,232,223,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,223,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-5 !text-cream/70">Nationwide &middot; Private &middot; As-Is</p>
            <h1 className="display text-5xl sm:text-7xl">
              A more <em className="italic">private</em> way to sell your home.
            </h1>
            <p className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
              We make direct, as-is cash offers on older homes, tear-downs and luxury properties. No repairs, no showings, no commissions.
            </p>
            <ul className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 text-sm text-cream/85">
              {["Any condition", "No agent fees", "No showings", "Flexible closing"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-cream/70" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div id="offer" className="scroll-mt-24">
            <div className="rounded-sm bg-cream-light p-6 text-navy shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8">
              <OfferForm source="Home page" />
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <Section tone="cream">
        <Heading eyebrow="The Process" title={<>Simple, from first message to closing.</>} />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="reveal rounded-sm bg-cream-light p-7 ring-1 ring-navy/10">
              <p className="display text-5xl text-accent">{s.n}</p>
              <h3 className="mt-4 text-lg font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-navy/75">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Homes we buy */}
      <Section tone="light">
        <Heading eyebrow="Who We Help" title="Homes with more value than meets the eye." lead="We specialize in properties that traditional buyers pass over, and that builders and developers look for." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NICHES.map((n) => (
            <Link key={n.slug} href={`/${n.slug}/`} className="reveal group rounded-sm border border-navy/15 bg-cream p-7 transition hover:-translate-y-0.5 hover:border-navy/40 hover:shadow-lg">
              <h3 className="display text-3xl">{n.label}</h3>
              <p className="mt-3 text-sm text-navy/75">{n.lead}</p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent transition group-hover:translate-x-1">Learn more &rarr;</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Portfolio strip */}
      <Section tone="cream">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading eyebrow="Portfolio" title="Recent deals." lead="Real acquisitions, closed and in escrow." />
          <Link href="/portfolio/" className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent hover:underline">View full portfolio &rarr;</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DEALS.map((d) => (
            <DealCard key={d.id} deal={d} />
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="navy">
        <Heading eyebrow="Why Stoneholdt" title="Selling, without the usual friction." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.t} className="reveal bg-navy p-7">
              <h3 className="display text-3xl">{b.t}</h3>
              <p className="mt-3 text-sm text-cream/75">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Markets */}
      <Section tone="cream">
        <Heading eyebrow="Markets" title="Nationwide, with deep local focus." lead="We buy across the country. These are markets where we are actively acquiring right now." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m) => (
            <Link key={m.slug} href={`/markets/${m.slug}/`} className="reveal rounded-sm border border-navy/15 p-6 transition hover:border-navy/50 hover:bg-cream-light">
              <p className="eyebrow">{m.region}</p>
              <h3 className="display mt-1 text-3xl">{m.name}</h3>
              <p className="mt-2 text-sm text-navy/75">{m.summary}</p>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy/70">
          Do not see your city? We also buy in other markets.{" "}
          <Link href="/#offer" className="underline underline-offset-4">Tell us about your property.</Link>
        </p>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <Heading eyebrow="FAQ" title="Questions, answered." />
          <FaqList faqs={GENERAL_FAQS} />
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="navy">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="display text-5xl">Ready to see your offer?</h2>
          <p className="mt-5 text-cream/80">It takes about two minutes. No obligation, and we never list or show your home.</p>
          <Link href="/#offer" className="mt-8 inline-block rounded-sm bg-cream px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-navy transition hover:bg-cream-light">
            Get My Cash Offer
          </Link>
        </div>
      </Section>
    </>
  );
}
