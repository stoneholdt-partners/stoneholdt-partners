import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, FaqList, PageHero, Section } from "@/components/ui";
import { GENERAL_FAQS } from "@/data/faqs";
import { MARKETS, getMarket } from "@/data/markets";
import { NICHES } from "@/data/niches";

export const dynamicParams = false;

export function generateStaticParams() {
  return MARKETS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = getMarket(slug);
  if (!m) return {};
  return {
    title: `Sell Your Home As-Is in ${m.name}, ${m.region}`,
    description: `Sell an older home, tear-down or luxury property in ${m.name}, ${m.region} for cash. Stoneholdt Partners makes private, as-is offers with no repairs, showings or commissions.`,
    alternates: { canonical: `/markets/${m.slug}/` },
  };
}

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMarket(slug);
  if (!m) notFound();
  const others = MARKETS.filter((x) => x.slug !== m.slug).slice(0, 3);
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Markets", href: "/markets/" }, { name: m.name, href: `/markets/${m.slug}/` }]} />
      <PageHero eyebrow={`${m.name}, ${m.region}`} title={`Sell your ${m.name} home as-is, for cash`} lead={m.summary} />
      <Section tone="cream">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-base text-navy/85">
            <h2 className="display text-4xl">The {m.name} market</h2>
            {m.context.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <aside className="rounded-sm bg-cream-light p-7 ring-1 ring-navy/10">
            <h2 className="eyebrow mb-4">Homes we buy in {m.name}</h2>
            <ul className="space-y-2.5 text-sm">
              {m.homeTypes.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <h2 className="display mb-8 text-4xl">Selling in {m.name}: common questions</h2>
          <FaqList faqs={GENERAL_FAQS.slice(0, 5)} />
        </div>
      </Section>
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="eyebrow mb-4">How we can help</h2>
            <ul className="space-y-2 text-sm">
              {NICHES.map((n) => (
                <li key={n.slug}><Link href={`/${n.slug}/`} className="underline underline-offset-4">{n.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-4">Other markets</h2>
            <ul className="space-y-2 text-sm">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/markets/${o.slug}/`} className="underline underline-offset-4">{o.name}, {o.region}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <OfferCta source={`Market: ${m.name}`} title={`Ready for your ${m.name} offer?`} />
    </>
  );
}
