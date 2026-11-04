import Link from "next/link";
import { SITE } from "@/data/site";
import { JsonLd } from "./json-ld";
import { Ornament } from "./ornament";
import { ParallaxImage } from "./parallax-image";

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
      {eyebrow && <p className="eyebrow mb-4 flex items-center gap-3 before:h-px before:w-8 before:bg-current before:opacity-40">{eyebrow}</p>}
      <Tag className="display text-4xl sm:text-5xl">{title}</Tag>
      {lead && <p className="mt-5 text-base opacity-80 sm:text-lg">{lead}</p>}
    </div>
  );
}

/** Keeps "as-is" from breaking across lines at the hyphen. */
function keepAsIs(node: React.ReactNode): React.ReactNode {
  if (typeof node !== "string") return node;
  const parts = node.split(/(as-is)/gi);
  return parts.map((p, i) => (/^as-is$/i.test(p) ? <span key={i} className="whitespace-nowrap">{p}</span> : p));
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <div className="relative isolate overflow-hidden bg-navy text-cream">
        <div className="absolute inset-0 -z-10 opacity-50"><ParallaxImage src={image} alt={imageAlt} priority strength={0.12} /></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/85" aria-hidden="true" />
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:py-32">
          <p className="eyebrow mb-4 !text-cream/80">{eyebrow}</p>
          <h1 className="display text-balance text-5xl sm:text-7xl">{keepAsIs(title)}</h1>
          <Ornament light className="mt-7" />
          {lead && <p className="mx-auto mt-6 max-w-2xl text-base text-cream/85 sm:text-lg">{lead}</p>}
        </div>
      </div>
    );
  }
  return (
    <div className="border-b border-navy/10 bg-cream-light">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-24">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="display text-balance text-5xl sm:text-6xl">{keepAsIs(title)}</h1>
        <Ornament className="mt-7" />
        {lead && <p className="mx-auto mt-6 max-w-2xl text-base text-navy/80 sm:text-lg">{lead}</p>}
      </div>
    </div>
  );
}

export { FaqList } from "./faq-list";

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
