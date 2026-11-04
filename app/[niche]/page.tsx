import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OfferCta } from "@/components/offer-cta";
import { Breadcrumbs, FaqList, PageHero, Section } from "@/components/ui";
import { MARKETS } from "@/data/markets";
import { NICHES, getNiche } from "@/data/niches";

export const dynamicParams = false;

export function generateStaticParams() {
  return NICHES.map((n) => ({ niche: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params;
  const n = getNiche(niche);
  if (!n) return {};
  return { title: n.metaTitle, description: n.metaDescription, alternates: { canonical: `/${n.slug}/` } };
}

export default async function NichePage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params;
  const n = getNiche(niche);
  if (!n) notFound();
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Who We Help", href: "/who-we-help/" }, { name: n.label, href: `/${n.slug}/` }]} />
      <PageHero eyebrow={n.label} title={n.title} lead={n.lead} />
      <Section tone="cream">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-10">
            {n.sections.map((s) => (
              <div key={s.heading} className="space-y-4">
                <h2 className="display text-4xl">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="text-base text-navy/85">{p}</p>
                ))}
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-sm bg-cream-light p-7 ring-1 ring-navy/10">
            <h2 className="eyebrow mb-4">What you get</h2>
            <ul className="space-y-2.5 text-sm">
              {n.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <h2 className="display mb-8 text-4xl">Questions</h2>
          <FaqList faqs={n.faqs} />
        </div>
      </Section>
      <Section tone="cream">
        <h2 className="eyebrow mb-4">Markets we buy in</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {MARKETS.map((m) => (
            <li key={m.slug}><Link href={`/markets/${m.slug}/`} className="rounded-sm border border-navy/20 px-3.5 py-2 transition hover:border-navy">{m.name}, {m.region}</Link></li>
          ))}
        </ul>
      </Section>
      <OfferCta source={`Niche: ${n.label}`} />
    </>
  );
}
