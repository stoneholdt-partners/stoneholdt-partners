# Stoneholdt Partners Website

Next.js (App Router) site for www.stoneholdtpartners.com.

- `npm run dev` / `npm run build` / `npm start`
- Legal/10DLC pages (`/privacy-policy/`, `/terms-and-conditions/`, `/sms-opt-in/`) render verbatim HTML from `content/legal/`. Do not edit wording without re-checking the 10DLC registration.
- The seller form's SMS consent text lives in `data/site.ts` (`SMS_CONSENT_TEXT`).
- Portfolio deals: `data/portfolio.ts`. Markets: `data/markets.ts`. Niche SEO pages: `data/niches.ts`.
- `legacy/` holds the previous static site (also tagged `static-site-final`) until cutover.
