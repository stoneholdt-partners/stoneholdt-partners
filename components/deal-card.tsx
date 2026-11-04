import Image from "next/image";
import type { Deal } from "@/data/portfolio";

function StatusBadge({ status }: { status: Deal["status"] }) {
  const closed = status === "Closed";
  return (
    <span className={`rounded-sm px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] shadow-sm ${closed ? "bg-brick text-white" : "bg-navy text-cream"}`}>
      {status}
    </span>
  );
}

/** Portfolio deal. `compact` (homepage strip) shows one large street photo; the full
 * layout shows street + parcel side by side. The status badge sits on the photo so it
 * can never be clipped by the title. */
export function DealCard({ deal, compact = false }: { deal: Deal; compact?: boolean }) {
  return (
    <article className="reveal overflow-hidden rounded-sm bg-cream-light ring-1 ring-navy/10">
      <div className="relative">
        {compact ? (
          <div className="relative aspect-[4/3]">
            <Image src={deal.street} alt={`${deal.title}: street view`} fill sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
          </div>
        ) : (
          <div className="grid grid-cols-2">
            <Pane src={deal.street} alt={`${deal.title}: street view`} label="Street" />
            <Pane src={deal.parcel} alt={`${deal.title}: parcel layout`} label="Parcel" />
          </div>
        )}
        <div className="absolute left-3 top-3">
          <StatusBadge status={deal.status} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="display text-2xl leading-tight">{deal.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-navy/60">{deal.area}</p>
      </div>
    </article>
  );
}

function Pane({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative aspect-[4/3]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
      <span className="absolute bottom-2 left-2 rounded-sm bg-navy/80 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-cream">{label}</span>
    </div>
  );
}
