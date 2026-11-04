import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Stoneholdt Partners collects, uses and protects your information, including text messaging.',
  alternates: { canonical: '/privacy-policy/' },
};

// Document body is carried over verbatim from the previous site (10DLC-registered copy).
const html = readFileSync(join(process.cwd(), "content/legal/privacy-policy.html"), "utf8");

export default function Page() {
  return <LegalPage title='Privacy Policy' updated="Last updated November 3, 2026" html={html} />;
}
