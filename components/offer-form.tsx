"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { SITE, SMS_CONSENT_TEXT, SMS_CONSENT_VALUE } from "@/data/site";

const PROPERTY_TYPES = [
  { v: "Older home", d: "Dated or long-held" },
  { v: "Tear-down / lot", d: "Value is in the land" },
  { v: "Well-kept / larger home", d: "Good condition, strong lot" },
  { v: "Inherited / estate", d: "Probate or trust" },
];
const TIMELINES = [
  { v: "As soon as possible", d: "Within a couple of weeks" },
  { v: "Within 30 days", d: "" },
  { v: "Within 60 to 90 days", d: "" },
  { v: "No rush", d: "On my timeline" },
];
const CONDITIONS = [
  { v: "Needs major work", d: "Roof, foundation, systems" },
  { v: "Needs some repairs", d: "Moderate work" },
  { v: "Cosmetic updates only", d: "Dated but sound" },
  { v: "Move-in ready", d: "Well maintained" },
];
const STEP_LABELS = ["Property", "Details", "Contact"];

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
type Errors = Partial<Record<"address" | "propertyType" | "timeline" | "condition" | "name" | "email" | "phone", string>>;

const EMPTY: Fields = { address: "", propertyType: "", timeline: "", condition: "", name: "", email: "", phone: "", smsConsent: false, honeypot: "" };

const fieldClass = (bad: boolean) =>
  `w-full rounded-md border bg-white px-4 py-3.5 text-base text-navy shadow-sm placeholder:text-navy/35 transition focus:outline-none focus:ring-4 ${
    bad ? "border-brick focus:ring-brick/15" : "border-navy/20 focus:border-navy focus:ring-accent/20"
  }`;

/** Multi-step cash-offer form. Submits to Formspree. The SMS consent box is unchecked by
 * default and never required (matches the 10DLC opt-in page). */
export function OfferForm({ source = "Home page" }: { source?: string }) {
  const uid = useId();
  const [step, setStep] = useState(1);
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [step]);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function validate(forStep: number): Errors {
    const e: Errors = {};
    if (forStep === 1) {
      const addr = f.address.trim();
      if (!/^\d+\S*\s+\S+/.test(addr) || !/\b\d{5}(?:-\d{4})?\b/.test(addr)) {
        e.address = "Please enter the full address with the ZIP code, like 123 Main St, Bellevue, WA 98004.";
      }
      if (!f.propertyType) e.propertyType = "Choose the closest property type.";
    }
    if (forStep === 2) {
      if (!f.timeline) e.timeline = "When would you like to close?";
      if (!f.condition) e.condition = "How would you describe its condition?";
    }
    if (forStep === 3) {
      if (!/^\S+\s+\S+/.test(f.name.trim())) e.name = "Please enter your first and last name.";
      if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Enter a valid email address.";
      if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a valid 10-digit phone number.";
    }
    return e;
  }

  function next() {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => s + 1);
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (step < 3) return next();
    const e = validate(3);
    setErrors(e);
    setFormError(null);
    if (Object.keys(e).length) return;
    if (f.honeypot) return setStatus("done"); // silently drop bots
    setStatus("sending");
    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map((k) => [k, params.get(k)]).filter(([, v]) => v),
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
      setFormError("Something went wrong sending your request. Please try again in a moment.");
    }
  }

  if (status === "done") {
    return (
      <div className="py-6 text-center" role="status">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-navy text-cream" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </div>
        <p className="display text-4xl">Request received.</p>
        <p className="mx-auto mt-3 max-w-sm text-sm text-navy/75">Thank you. We review every property personally and will be in touch about your offer.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate aria-label="Request a cash offer">
      {/* Stepper */}
      <ol className="mb-7 flex items-center" aria-label="Progress">
        {STEP_LABELS.map((label, i) => {
          const n = i + 1;
          const done = n < step;
          const active = n === step;
          return (
            <li key={label} className="flex flex-1 items-center last:flex-none" aria-current={active ? "step" : undefined}>
              <span className="flex items-center gap-2.5">
                <span
                  className={`flex size-7 items-center justify-center rounded-full text-xs font-semibold transition ${
                    done || active ? "bg-navy text-cream" : "bg-navy/10 text-navy/50"
                  }`}
                >
                  {done ? (
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  ) : (
                    n
                  )}
                </span>
                <span className={`hidden text-[11px] font-medium uppercase tracking-[0.16em] sm:inline ${active ? "text-navy" : "text-navy/45"}`}>{label}</span>
              </span>
              {n < 3 && <span className={`mx-3 h-px flex-1 ${done ? "bg-navy" : "bg-navy/15"}`} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>

      <div key={step} className="step-in">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 ref={headingRef} tabIndex={-1} className="display text-3xl outline-none sm:text-4xl">Where is the property?</h3>
              <p className="mt-1.5 text-sm text-navy/65">About 2 minutes. No obligation.</p>
            </div>
            <Field id={`${uid}-addr`} label="Property address" hint="Include the street, city, state and ZIP code." error={errors.address}>
              <div className="relative">
                <PinIcon />
                <input
                  id={`${uid}-addr`}
                  className={`${fieldClass(!!errors.address)} pl-11`}
                  autoComplete="street-address"
                  placeholder="123 Main St, Bellevue, WA 98004"
                  value={f.address}
                  onChange={(e) => set("address", e.target.value)}
                  aria-invalid={!!errors.address}
                />
              </div>
            </Field>
            <Choice legend="What kind of property is it?" name={`${uid}-type`} options={PROPERTY_TYPES} value={f.propertyType} onChange={(v) => set("propertyType", v)} error={errors.propertyType} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 ref={headingRef} tabIndex={-1} className="display text-3xl outline-none sm:text-4xl">Tell us about the sale.</h3>
            <Choice legend="When would you like to close?" name={`${uid}-time`} options={TIMELINES} value={f.timeline} onChange={(v) => set("timeline", v)} error={errors.timeline} />
            <Choice legend="What condition is it in?" name={`${uid}-cond`} options={CONDITIONS} value={f.condition} onChange={(v) => set("condition", v)} error={errors.condition} />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h3 ref={headingRef} tabIndex={-1} className="display text-3xl outline-none sm:text-4xl">Where should we send your offer?</h3>
              <div className="mt-3 flex items-start gap-2.5 rounded-md bg-navy/5 px-3.5 py-2.5 text-sm text-navy/80">
                <PinIcon inline />
                <span className="min-w-0 break-words">
                  <span className="font-medium">{f.address.trim()}</span>
                  <span className="text-navy/55"> &middot; {f.propertyType}</span>
                </span>
              </div>
            </div>
            <Field id={`${uid}-name`} label="Full name" hint="First and last name, as shown on the title." error={errors.name}>
              <input id={`${uid}-name`} className={fieldClass(!!errors.name)} autoComplete="name" placeholder="First and last name" value={f.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />
            </Field>
            <Field id={`${uid}-email`} label="Email" error={errors.email}>
              <input id={`${uid}-email`} type="email" inputMode="email" className={fieldClass(!!errors.email)} autoComplete="email" placeholder="you@example.com" value={f.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} />
            </Field>
            <Field id={`${uid}-phone`} label="Phone" hint="We will use this to reach you about your offer." error={errors.phone}>
              <input id={`${uid}-phone`} type="tel" inputMode="tel" className={fieldClass(!!errors.phone)} autoComplete="tel" placeholder="(555) 123-4567" value={f.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} />
            </Field>
            {/* Honeypot: hidden from people, filled by bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>Leave blank<input tabIndex={-1} autoComplete="off" value={f.honeypot} onChange={(e) => set("honeypot", e.target.value)} /></label>
            </div>
            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-navy/15 bg-white/60 p-3.5 text-xs leading-relaxed text-navy/75">
              <input type="checkbox" name="sms_consent" className="mt-0.5 size-4 shrink-0 accent-navy" checked={f.smsConsent} onChange={(e) => set("smsConsent", e.target.checked)} />
              <span>
                {SMS_CONSENT_TEXT}{" "}
                <Link href="/privacy-policy/" className="underline underline-offset-2">Privacy Policy</Link> |{" "}
                <Link href="/terms-and-conditions/" className="underline underline-offset-2">Terms &amp; Conditions</Link>
              </span>
            </label>
          </div>
        )}
      </div>

      {formError && <p role="alert" className="mt-4 rounded-md bg-brick/10 px-3.5 py-2.5 text-sm text-brick">{formError}</p>}

      <div className="mt-7 flex items-center gap-3">
        {step > 1 && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded-md px-4 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-navy/70 transition hover:bg-navy/5 hover:text-navy">
            Back
          </button>
        )}
        {step < 3 ? (
          <button key="continue" type="submit" className="flex-1 rounded-md bg-navy px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-sm transition hover:bg-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30">
            Continue
          </button>
        ) : (
          <button key="submit" type="submit" disabled={status === "sending"} className="flex-1 rounded-md bg-navy px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-sm transition hover:bg-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Get My Cash Offer"}
          </button>
        )}
      </div>
      <p className="mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-navy/50">Private &middot; No listing &middot; No obligation</p>
    </form>
  );
}

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-navy/80">{label}</label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-navy/55">{hint}</p>}
      {error && <p role="alert" className="mt-1.5 text-xs text-brick">{error}</p>}
    </div>
  );
}

function Choice({
  legend, name, options, value, onChange, error,
}: {
  legend: string; name: string; options: { v: string; d: string }[]; value: string; onChange: (v: string) => void; error?: string;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy/80">{legend}</legend>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {options.map((o) => {
          const selected = value === o.v;
          return (
            <label
              key={o.v}
              className={`relative flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3.5 transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/30 ${
                selected ? "border-navy bg-navy/5 shadow-sm" : "border-navy/20 bg-white hover:border-navy/50"
              }`}
            >
              <input type="radio" name={name} value={o.v} checked={selected} onChange={() => onChange(o.v)} className="sr-only" />
              <span className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition ${selected ? "border-navy bg-navy" : "border-navy/30"}`} aria-hidden="true">
                {selected && <svg viewBox="0 0 24 24" className="size-3 text-cream" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium leading-snug">{o.v}</span>
                {o.d && <span className="block text-xs text-navy/55">{o.d}</span>}
              </span>
            </label>
          );
        })}
      </div>
      {error && <p role="alert" className="mt-2 text-xs text-brick">{error}</p>}
    </fieldset>
  );
}

function PinIcon({ inline = false }: { inline?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={inline ? "mt-0.5 size-4 shrink-0 text-accent" : "pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-navy/40"}
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
      <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
