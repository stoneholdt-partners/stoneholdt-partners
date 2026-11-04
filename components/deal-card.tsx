import Image from "next/image";
import type { Deal } from "@/data/portfolio";

export function DealCard({ deal }: { deal: Deal }) {
  const closed = deal.status === "Closed";
  return (
    <article className="reveal overflow-hidden rounded-sm bg-cream-light ring-1 ring-navy/10">
      <div className="grid grid-cols-2">
        <Pane src={deal.street} alt={`${deal.title}: street view`} label="Street" />
        <Pane src={deal.parcel} alt={`${deal.title}: parcel layout`} label="Parcel" />
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h3 className="display text-2xl">{deal.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-navy/60">{deal.area}</p>
        </div>
        <span className={`shrink-0 rounded-sm px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] ${closed ? "bg-brick text-white" : "bg-navy text-cream"}`}>
          {deal.status}
        </span>
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
