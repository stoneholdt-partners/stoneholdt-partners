import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { OfferForm } from "@/components/offer-form";
import { DealCard } from "@/components/deal-card";
import { FaqList, Heading, Section } from "@/components/ui";
import { Ornament } from "@/components/ornament";
import { Ticker } from "@/components/ticker";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/data/site";
import { ScrollTimeline } from "@/components/scroll-timeline";
import { ParallaxImage } from "@/components/parallax-image";
import { DEALS } from "@/data/portfolio";
import { GENERAL_FAQS } from "@/data/faqs";
import { STATES, cityList } from "@/data/markets";
import { NICHES } from "@/data/niches";

export const metadata: Metadata = pageMeta({ title: { absolute: "Sell Your Home As-Is for Cash | Stoneholdt Partners" }, description: "We buy homes for luxury redevelopment: older homes, tear-downs and well-kept larger homes. Private, as-is cash offers with no repairs, showings or commissions.", path: "/" });

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Home purchase for luxury redevelopment",
          serviceType: "Real estate acquisition",
          description:
            "Direct, as-is cash offers on older homes, tear-downs and well-kept larger homes that are candidates for luxury redevelopment.",
          provider: { "@id": `${SITE.url}/#organization` },
          areaServed: STATES.map((st) => ({ "@type": "State", name: st.name })),
        }}
      />
      {/* Hero */}
      <div data-hero="dark" className="relative isolate overflow-hidden bg-navy text-cream -mt-[72px] pt-[72px] md:-mt-[112px] md:pt-[112px]">
        <div className="absolute inset-0 -z-20 opacity-50"><ParallaxImage src="/cover-photos/CO.jpg" priority strength={0.14} /></div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/75 to-navy/35" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(237,232,223,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,223,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="lg:pt-14">
            <p className="eyebrow mb-5 !text-cream/70">Nationwide &middot; Private &middot; As-Is</p>
            <h1 className="display text-5xl sm:text-7xl">
              <span className="rise-mask"><span className="rise" style={{ "--d": "0.1s" } as React.CSSProperties}>A more <em className="shimmer italic">private</em> way</span></span>
              <span className="rise-mask"><span className="rise" style={{ "--d": "0.25s" } as React.CSSProperties}>to sell your home.</span></span>
            </h1>
            <p className="fade-up mt-6 max-w-xl text-base text-cream/80 sm:text-lg" style={{ "--d": "0.5s" } as React.CSSProperties}>
              We buy homes for luxury redevelopment: older homes, <span className="whitespace-nowrap">tear-downs</span> and even well-kept larger homes. Direct, as-is cash offers with no repairs, no showings and no commissions.
            </p>
            <ul className="fade-up mt-8 grid grid-cols-[auto_auto] justify-start gap-x-10 gap-y-3 text-sm text-cream/85" style={{ "--d": "0.65s" } as React.CSSProperties}>
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

      <Ticker />

      {/* Process */}
      <Section tone="cream">
        <Heading eyebrow="The Process" title={<>Simple, from first message to closing.</>} />
        <ScrollTimeline className="mt-14">
          {/* Connector line that fills as you scroll (desktop) */}
          <div className="absolute inset-x-0 top-0 hidden h-px bg-navy/15 md:block" aria-hidden="true">
            <span className="absolute inset-y-0 left-0 bg-accent" style={{ width: "calc(var(--p) * 100%)" }} />
          </div>
          <ol className="grid gap-6 md:grid-cols-3 md:pt-10">
            {STEPS.map((s) => (
              <li key={s.n} data-step className="reveal relative rounded-sm bg-cream-light p-7 ring-1 ring-navy/10">
                <span className="step-dot absolute -top-[2.875rem] left-7 hidden size-3 rounded-full border border-navy/30 bg-cream md:block" aria-hidden="true" />
                <p className="display text-5xl text-accent">{s.n}</p>
                <h3 className="mt-4 text-lg font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-navy/75">{s.d}</p>
              </li>
            ))}
          </ol>
        </ScrollTimeline>
      </Section>

      {/* Photo split */}
      <section className="bg-cream-light">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="wipe-wrap relative min-h-[320px] lg:min-h-[520px]">
            <div className="wipe-inner absolute inset-0">
              <ParallaxImage src="/cover-photos/WA.jpg" alt="Modern luxury home with glass balconies and landscaped garden" strength={0.08} eager sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="pointer-events-none absolute inset-5 border border-cream/70 sm:inset-8" aria-hidden="true" />
            </div>
          </div>
          <div className="reveal flex max-w-xl flex-col justify-center px-5 py-16 sm:px-12 lg:py-24 lg:pl-16">
            <p className="eyebrow mb-4">Built for properties like yours</p>
            <h2 className="display text-4xl sm:text-5xl">Where the land is the real asset.</h2>
            <p className="mt-5 text-navy/80">
              In established, high-value neighborhoods, the most valuable part of an older home is often the lot beneath it. We understand how builders value a parcel, so we can make a serious offer on homes that retail buyers overlook.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {["Older homes and tear-downs", "Well-kept and larger homes", "Estates, trusts and inherited homes"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
          <Link href="/#offer" className="reveal flex flex-col justify-between rounded-sm bg-navy p-7 text-cream transition hover:bg-navy-deep">
            <div>
              <h3 className="display text-3xl">Not sure which fits?</h3>
              <p className="mt-3 text-sm text-cream/75">Tell us about the property and we will take it from there. Every situation is different.</p>
            </div>
            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em]">Get my cash offer &rarr;</p>
          </Link>
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

      {/* Photo band */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-cream">
        <div className="absolute inset-0 -z-10 opacity-60"><ParallaxImage src="/cover-photos/AZ.jpg" strength={0.2} /></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/80 via-navy-deep/45 to-navy-deep/85" aria-hidden="true" />
        <div className="reveal mx-auto max-w-3xl px-5 py-28 text-center sm:py-40">
          <Ornament light />
          <p className="display mt-8 text-4xl leading-tight sm:text-6xl">Every property has a next chapter.</p>
          <p className="mx-auto mt-6 max-w-xl text-cream/80">We buy homes for luxury redevelopment, and we make the sale simple for the people who are letting go of them.</p>
          <Link href="/#offer" className="mt-9 inline-block rounded-sm border border-cream/70 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] transition hover:bg-cream hover:text-navy">
            Get My Cash Offer
          </Link>
        </div>
      </section>

      {/* Markets */}
      <Section tone="cream">
        <Heading eyebrow="Markets" title="Nationwide, with deep local focus." lead="We buy across the country. These are markets where we are actively acquiring right now." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATES.map((m) => (
            <Link key={m.slug} href={`/markets/${m.slug}/`} className="reveal rounded-sm border border-navy/15 p-6 transition hover:border-navy/50 hover:bg-cream-light">
              <h3 className="display text-3xl">{m.name}</h3>
              <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-navy/55">{cityList(m)}</p>
            </Link>
          ))}
          <Link href="/#offer" className="reveal flex flex-col justify-center rounded-sm border border-dashed border-navy/30 p-6 transition hover:border-navy/60 hover:bg-cream-light">
            <h3 className="display text-3xl">Elsewhere</h3>
            <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-navy/55">We also buy in other markets</p>
          </Link>
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
