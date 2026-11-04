import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, FaqList, PageHero, Section } from "@/components/ui";
import { GENERAL_FAQS } from "@/data/faqs";
import { STATES, cityList, getState } from "@/data/markets";
import { NICHES } from "@/data/niches";

export const dynamicParams = false;

export function generateStaticParams() {
  return STATES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getState(slug);
  if (!s) return {};
  return {
    title: `Sell Your Home for Luxury Redevelopment in ${s.name}`,
    description: `Sell your home as-is to a luxury redevelopment buyer in ${s.name}, including ${cityList(s)}. Private cash offers with no repairs, showings or commissions.`,
    alternates: { canonical: `/markets/${s.slug}/` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getState(slug);
  if (!s) notFound();
  const others = STATES.filter((x) => x.slug !== s.slug);
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Markets", href: "/markets/" }, { name: s.name, href: `/markets/${s.slug}/` }]} />
      <PageHero eyebrow={s.name} title={`Sell your ${s.name} home as-is, for cash`} lead={s.summary} image={s.image} imageAlt={s.imageAlt} />
      <Section tone="cream">
        <div className="mx-auto max-w-3xl space-y-5 text-base text-navy/85">
          <h2 className="display text-4xl">Buying in {s.name}</h2>
          {s.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-3xl space-y-12">
          {s.cities.map((c) => (
            <div key={c.name} className="border-t border-navy/15 pt-8">
              <p className="eyebrow mb-2">{c.summary.replace(/\.$/, "")}</p>
              <h3 className="display text-3xl sm:text-4xl">{c.name}, {s.abbr}</h3>
              <div className="mt-4 space-y-4 text-navy/85">
                {c.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <h2 className="display mb-8 text-4xl">Selling in {s.name}: common questions</h2>
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
            <h2 className="eyebrow mb-4">Other states</h2>
            <ul className="space-y-2 text-sm">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/markets/${o.slug}/`} className="underline underline-offset-4">{o.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <OfferCta source={`Market: ${s.name}`} title={`Ready for your ${s.name} offer?`} />
    </>
  );
}
