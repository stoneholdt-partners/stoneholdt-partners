import type { MetadataRoute } from "next";
import { MARKETS } from "@/data/markets";
import { NICHES } from "@/data/niches";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["/", "/how-it-works/", "/portfolio/", "/markets/", "/who-we-help/", "/faq/", "/about/", "/partners/", "/contact/", "/privacy-policy/", "/terms-and-conditions/", "/sms-opt-in/"];
  const paths = [...core, ...NICHES.map((n) => `/${n.slug}/`), ...MARKETS.map((m) => `/markets/${m.slug}/`)];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.startsWith("/markets/") || p.startsWith("/sell-") ? 0.8 : 0.6,
  }));
}
