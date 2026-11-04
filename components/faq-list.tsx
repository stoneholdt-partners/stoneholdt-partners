"use client";

import { useId, useState } from "react";
import type { Faq } from "@/data/faqs";
import { JsonLd } from "./json-ld";

/** Accordion with a smooth height transition (grid-rows trick) and proper aria wiring. */
export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();
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
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <h3>
                <button
                  type="button"
                  id={`${uid}-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium transition-colors hover:text-accent"
                >
                  {f.q}
                  <span
                    aria-hidden="true"
                    className={`relative size-5 shrink-0 transition-transform duration-500 ease-out ${isOpen ? "rotate-45" : ""}`}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                  </span>
                </button>
              </h3>
              <div
                id={`${uid}-a-${i}`}
                role="region"
                aria-labelledby={`${uid}-q-${i}`}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl pb-6 opacity-80">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
