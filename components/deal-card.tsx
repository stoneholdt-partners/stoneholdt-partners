import Image from "next/image";
import type { Deal } from "@/data/portfolio";

function StatusBadge({ status }: { status: Deal["status"] }) {
  const closed = status === "Closed";
  return (
    <span className={`shrink-0 rounded-sm px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${closed ? "bg-brick text-white" : "bg-navy text-cream"}`}>
      {status}
    </span>
  );
}

/** Portfolio deal: two small thumbnails (street + parcel) separated by a hairline divider.
 * The hover is deliberately slow: a gentle lift, a soft shadow bloom, a slow image drift and
 * an accent line that draws across the base. */
export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="reveal group relative overflow-hidden rounded-sm bg-cream-light ring-1 ring-navy/10 hover:-translate-y-1.5 hover:shadow-[0_40px_60px_-34px_rgba(19,30,69,0.55)]">
      <div className="relative">
        <div className="grid grid-cols-2 gap-[2px] bg-cream-light">
          <Thumb src={deal.street} alt={`${deal.title}: street view`} label="Street" />
          <Thumb src={deal.parcel} alt={`${deal.title}: parcel layout`} label="Parcel" />
        </div>
        <div className="absolute right-2 top-2">
          <StatusBadge status={deal.status} />
        </div>
      </div>
      <div className="border-t border-navy/10 p-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-navy/55">{deal.area}</p>
        <h3 className="display mt-1.5 text-xl leading-tight">{deal.title}</h3>
      </div>
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}

function Thumb({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative h-24 overflow-hidden sm:h-28">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 130px, 45vw"
        className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-navy/10 transition-opacity duration-[1200ms] ease-out group-hover:opacity-0" aria-hidden="true" />
      <span className="absolute bottom-1.5 left-1.5 rounded-sm bg-navy/80 px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-[0.18em] text-cream">{label}</span>
    </div>
  );
}
