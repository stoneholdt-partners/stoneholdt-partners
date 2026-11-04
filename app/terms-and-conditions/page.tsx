import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = pageMeta({ title: 'Terms & Conditions', description: 'Terms for using the Stoneholdt Partners website and receiving text messages from Stoneholdt Partners.', path: '/terms-and-conditions/' });

// Document body is carried over verbatim from the previous site (10DLC-registered copy).
const html = readFileSync(join(process.cwd(), "content/legal/terms-and-conditions.html"), "utf8");

export default function Page() {
  return <LegalPage title='Terms & Conditions' updated="Last updated November 3, 2026" html={html} />;
}
