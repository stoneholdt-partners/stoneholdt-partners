export const SITE = {
  name: "Stoneholdt Partners",
  legalName: "Stoneholdt Partners LLC",
  url: "https://www.stoneholdtpartners.com",
  tagline: "Private, as-is cash offers for distinctive homes.",
  // Seller form endpoint (Formspree), unchanged from the previous site.
  formEndpoint: "https://formspree.io/f/mrerjjzo",
} as const;

/** Exact consent wording registered for 10DLC. Do not edit without re-registering. */
export const SMS_CONSENT_TEXT =
  "I agree to receive text messages from Stoneholdt Partners LLC about my property and inquiry at the phone number provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of any purchase or sale.";

export const SMS_CONSENT_VALUE = "Yes - checked the SMS consent box";

export const NAV = [
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/markets/", label: "Markets" },
  { href: "/who-we-help/", label: "Who We Help" },
] as const;
