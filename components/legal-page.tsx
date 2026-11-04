import { PageHero } from "./ui";

/** Legal pages render the previous site's HTML body verbatim for compliance. */
export function LegalPage({ title, updated, html }: { title: string; updated: string; html: string }) {
  return (
    <>
      <PageHero eyebrow="Stoneholdt Partners LLC" title={title} lead={<span className="text-sm opacity-70">{updated}</span>} />
      <div className="py-14 sm:py-20">
        <div className="legal-doc" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}
