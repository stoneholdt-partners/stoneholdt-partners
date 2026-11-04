import Link from "next/link";
import type { Faq } from "@/data/faqs";
import { SITE } from "@/data/site";
import { JsonLd } from "./json-ld";

export function Section({
  children,
  tone = "cream",
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: "cream" | "light" | "navy";
  className?: string;
  id?: string;
}) {
  const bg = tone === "navy" ? "bg-navy text-cream" : tone === "light" ? "bg-cream-light" : "bg-cream";
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  lead,
  center = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className="display text-4xl sm:text-5xl">{title}</Tag>
      {lead && <p className="mt-5 text-base opacity-80 sm:text-lg">{lead}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: React.ReactNode; lead?: React.ReactNode }) {
  return (
    <div className="border-b border-navy/10 bg-cream-light">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-24">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="display text-5xl sm:text-6xl">{title}</h1>
        {lead && <p className="mx-auto mt-6 max-w-2xl text-base text-navy/80 sm:text-lg">{lead}</p>}
      </div>
    </div>
  );
}

export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      <div className="divide-y divide-current/15 border-y border-current/15">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
              {f.q}
              <span className="text-2xl leading-none transition group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 max-w-3xl opacity-80">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.name,
          item: `${SITE.url}${t.href}`,
        })),
      }}
    />
  );
}

export function CtaLink({ href = "/#offer", children }: { href?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-block rounded-sm bg-navy px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-accent">
      {children}
    </Link>
  );
}
