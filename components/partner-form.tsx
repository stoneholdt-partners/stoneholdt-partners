"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

const input = "w-full rounded-sm border border-navy/25 bg-white/70 px-3.5 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-accent/40";
const label = "mb-1.5 block text-xs font-medium uppercase tracking-[0.15em]";

/** Builder / developer / fund buy-box registration. Labeled separately from seller leads. */
export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._gotcha) return setStatus("done");
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: "New buyer / developer buy box", form_type: "Developer buy box form", page_url: window.location.href }),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="text-center">
        <p className="display text-4xl">Thank you.</p>
        <p className="mt-3 text-sm text-navy/75">We have your criteria and will reach out when something matches.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div><label className={label} htmlFor="p-name">Principal representative</label><input id="p-name" name="name" required autoComplete="name" className={input} /></div>
      <div><label className={label} htmlFor="p-firm">Development entity</label><input id="p-firm" name="firm" required autoComplete="organization" className={input} /></div>
      <div>
        <label className={label} htmlFor="p-profile">Investment criteria profile</label>
        <select id="p-profile" name="profile" required defaultValue="" className={input}>
          <option value="" disabled>Select investment footprint</option>
          <option>Custom Infill Single-Family Builder</option>
          <option>Townhome / Multi-Family Developer</option>
          <option>Private Equity Real Estate Fund</option>
        </select>
      </div>
      <div><label className={label} htmlFor="p-email">Workspace email</label><input id="p-email" name="email" type="email" required autoComplete="email" className={input} /></div>
      <div><label className={label} htmlFor="p-params">Target acquisition profiles</label><textarea id="p-params" name="parameters" rows={3} placeholder="Zoning criteria, preferred square footage, target submarkets…" className={input} /></div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><input name="_gotcha" tabIndex={-1} autoComplete="off" /></div>
      {error && <p role="alert" className="text-sm text-brick">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="rounded-sm bg-navy px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-accent disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Register Buy Box"}
      </button>
    </form>
  );
}
