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

/** Portfolio deal: two small thumbnails (street + parcel) separated by a hairline divider,
 * kept modest in size so lower-resolution photos read as supporting detail. */
export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="reveal group overflow-hidden rounded-sm bg-cream-light ring-1 ring-navy/10 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgba(19,30,69,0.5)]">
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
    </article>
  );
}

function Thumb({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative h-24 overflow-hidden sm:h-28">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 130px, 45vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-navy/10" aria-hidden="true" />
      <span className="absolute bottom-1.5 left-1.5 rounded-sm bg-navy/80 px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-[0.18em] text-cream">{label}</span>
    </div>
  );
}
