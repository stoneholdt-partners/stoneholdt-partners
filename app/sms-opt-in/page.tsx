import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = pageMeta({ title: 'SMS Opt-In', description: 'How to opt in to Stoneholdt Partners Text Updates, including the consent script our representatives read.', path: '/sms-opt-in/' });

// Document body is carried over verbatim from the previous site (10DLC-registered copy).
const html = readFileSync(join(process.cwd(), "content/legal/sms-opt-in.html"), "utf8");

export default function Page() {
  return <LegalPage title='SMS Opt-In' updated="Last updated November 3, 2026" html={html} />;
}
