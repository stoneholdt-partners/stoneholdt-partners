"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, SMS_CONSENT_TEXT, SMS_CONSENT_VALUE } from "@/data/site";

const PROPERTY_TYPES = ["Older home", "Tear-down / redevelopment lot", "Luxury home", "Inherited / estate property", "Other"];
const TIMELINES = ["As soon as possible", "Within 30 days", "Within 60 days", "Within 90 days", "No specific timeline"];
const CONDITIONS = ["Needs major work", "Needs moderate repairs", "Cosmetic updates only", "Move-in ready"];

type Fields = {
  address: string;
  propertyType: string;
  timeline: string;
  condition: string;
  name: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  honeypot: string;
};

const EMPTY: Fields = {
  address: "",
  propertyType: "",
  timeline: "",
  condition: "",
  name: "",
  email: "",
  phone: "",
  smsConsent: false,
  honeypot: "",
};

const inputClass =
  "w-full rounded-sm border border-navy/25 bg-white/70 px-3.5 py-3 text-base text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-accent/40";

/** Multi-step cash-offer form. Submits to Formspree; the SMS consent box is
 * unchecked by default and is never required (matches the 10DLC opt-in page). */
export function OfferForm({ source = "Home page", tone = "light" }: { source?: string; tone?: "light" | "card" }) {
  const [step, setStep] = useState(1);
  const [f, setF] = useState<Fields>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => setF((p) => ({ ...p, [k]: v }));

  function next() {
    setError(null);
    if (step === 1 && (f.address.trim().length < 5 || !f.propertyType)) {
      setError("Please enter the property address and choose a property type.");
      return;
    }
    if (step === 2 && (!f.timeline || !f.condition)) {
      setError("Please choose a timeline and the property's condition.");
      return;
    }
    setStep((s) => s + 1);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email.trim())) {
      setError("Please enter your name and a valid email address.");
      return;
    }
    if (f.honeypot) {
      setStatus("done"); // silently drop bots
      return;
    }
    setStatus("sending");
    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
        .map((k) => [k, params.get(k)])
        .filter(([, v]) => v),
    );
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New seller inquiry",
          form_type: "Seller cash-offer form",
          source_page: source,
          page_url: window.location.href,
          property_address: f.address.trim(),
          property_type: f.propertyType,
          timeline: f.timeline,
          condition: f.condition,
          name: f.name.trim(),
          email: f.email.trim(),
          phone: f.phone.trim(),
          sms_consent: f.smsConsent ? SMS_CONSENT_VALUE : "",
          sms_consent_text: f.smsConsent ? SMS_CONSENT_TEXT : "",
          submitted_at: new Date().toISOString(),
          ...utm,
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("Something went wrong sending your request. Please try again in a moment.");
    }
  }

  const shell =
    tone === "card"
      ? "rounded-sm bg-cream-light p-6 shadow-[0_30px_60px_-30px_rgba(19,30,69,0.45)] ring-1 ring-navy/10 sm:p-8"
      : "";

  if (status === "done") {
    return (
      <div className={`${shell} text-center`} role="status">
        <p className="display text-4xl">Request received.</p>
        <p className="mx-auto mt-4 max-w-md text-sm text-navy/80">
          Thank you. We review every property personally and will be in touch about your offer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={shell} noValidate aria-label="Request a cash offer">
      <div className="mb-6 flex items-center justify-between">
        <p className="eyebrow">Step {step} of 3</p>
        <div className="flex gap-1.5" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span key={n} className={`h-1 w-8 rounded-full ${n <= step ? "bg-navy" : "bg-navy/15"}`} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <p className="display text-3xl">Where is the property?</p>
          <div>
            <label htmlFor={`addr-${source}`} className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em]">Property address</label>
            <input id={`addr-${source}`} className={inputClass} autoComplete="street-address" placeholder="Street, city, state" value={f.address} onChange={(e) => set("address", e.target.value)} />
          </div>
          <fieldset>
            <legend className="mb-2 text-xs font-medium uppercase tracking-[0.15em]">Property type</legend>
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((o) => (
                <Chip key={o} selected={f.propertyType === o} onClick={() => set("propertyType", o)}>{o}</Chip>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <p className="display text-3xl">Tell us about the sale.</p>
          <fieldset>
            <legend className="mb-2 text-xs font-medium uppercase tracking-[0.15em]">When would you like to close?</legend>
            <div className="flex flex-wrap gap-2">
              {TIMELINES.map((o) => (
                <Chip key={o} selected={f.timeline === o} onClick={() => set("timeline", o)}>{o}</Chip>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-xs font-medium uppercase tracking-[0.15em]">Condition of the property</legend>
            <div className="flex flex-wrap gap-2">
              {CONDITIONS.map((o) => (
                <Chip key={o} selected={f.condition === o} onClick={() => set("condition", o)}>{o}</Chip>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <p className="display text-3xl">Where should we send your offer?</p>
          <div>
            <label htmlFor={`name-${source}`} className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em]">Name</label>
            <input id={`name-${source}`} className={inputClass} autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} />
          </div>
          <div>
            <label htmlFor={`email-${source}`} className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em]">Email</label>
            <input id={`email-${source}`} type="email" className={inputClass} autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} />
          </div>
          <div>
            <label htmlFor={`phone-${source}`} className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em]">Phone (optional)</label>
            <input id={`phone-${source}`} type="tel" className={inputClass} autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
          </div>
          {/* Honeypot: hidden from people, filled by bots. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>Leave blank<input tabIndex={-1} autoComplete="off" value={f.honeypot} onChange={(e) => set("honeypot", e.target.value)} /></label>
          </div>
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-navy/80">
            <input
              type="checkbox"
              name="sms_consent"
              className="mt-0.5 size-4 shrink-0 accent-navy"
              checked={f.smsConsent}
              onChange={(e) => set("smsConsent", e.target.checked)}
            />
            <span>
              {SMS_CONSENT_TEXT}{" "}
              <Link href="/privacy-policy/" className="underline underline-offset-2">Privacy Policy</Link> |{" "}
              <Link href="/terms-and-conditions/" className="underline underline-offset-2">Terms &amp; Conditions</Link>
            </span>
          </label>
        </div>
      )}

      {error && (
        <p role="alert" className="mt-4 text-sm text-brick">
          {error}
        </p>
      )}

      <div className="mt-7 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="text-xs font-medium uppercase tracking-[0.2em] text-navy/70 hover:text-navy">
            &larr; Back
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button key="continue" type="button" onClick={next} className="rounded-sm bg-navy px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-accent">
            Continue
          </button>
        ) : (
          <button key="submit" type="submit" disabled={status === "sending"} className="rounded-sm bg-navy px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-accent disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Get My Cash Offer"}
          </button>
        )}
      </div>
    </form>
  );
}

function Chip({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`rounded-sm border px-3.5 py-2.5 text-sm transition ${
        selected ? "border-navy bg-navy text-cream" : "border-navy/25 bg-white/60 hover:border-navy/60"
      }`}
    >
      {children}
    </button>
  );
}
