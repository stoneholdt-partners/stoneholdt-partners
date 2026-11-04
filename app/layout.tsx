import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealInit } from "@/components/reveal-init";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});
const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sell Your Home As-Is for Cash | Stoneholdt Partners",
    template: "%s | Stoneholdt Partners",
  },
  description:
    "Stoneholdt Partners buys homes for luxury redevelopment with private, as-is cash offers on older homes, tear-downs and well-kept larger homes. No repairs, no showings, flexible closing.",
  applicationName: SITE.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logos/LogoProfile.png", apple: "/logos/LogoProfile.png" },
};

export const viewport: Viewport = {
  themeColor: "#1b2a5e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE.url}/#organization`,
                name: SITE.legalName,
                url: SITE.url,
                logo: `${SITE.url}/logos/LogoProfile.png`,
              },
              {
                "@type": "WebSite",
                "@id": `${SITE.url}/#website`,
                url: SITE.url,
                name: SITE.name,
                publisher: { "@id": `${SITE.url}/#organization` },
              },
            ],
          }}
        />
        <RevealInit />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
