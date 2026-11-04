import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The 10DLC-registered legal/opt-in URLs are all trailing-slash paths.
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Old single-page-app state routes.
      { source: "/co", destination: "/", permanent: true },
      { source: "/wa", destination: "/", permanent: true },
      // City market pages are now state pages.
      { source: "/markets/bellevue-wa", destination: "/markets/washington/", permanent: true },
      { source: "/markets/kirkland-wa", destination: "/markets/washington/", permanent: true },
      { source: "/markets/clyde-hill-wa", destination: "/markets/washington/", permanent: true },
      { source: "/markets/bethesda-md", destination: "/markets/maryland/", permanent: true },
      { source: "/markets/mclean-va", destination: "/markets/virginia/", permanent: true },
      { source: "/markets/charlotte-nc", destination: "/markets/north-carolina/", permanent: true },
      { source: "/markets/south-tampa-fl", destination: "/markets/florida/", permanent: true },
      { source: "/markets/naples-fl", destination: "/markets/florida/", permanent: true },
      { source: "/markets/west-palm-beach-fl", destination: "/markets/florida/", permanent: true },
      { source: "/markets/medina-wa", destination: "/markets/", permanent: true },
      { source: "/markets/mercer-island-wa", destination: "/markets/", permanent: true },
      { source: "/markets/denver-co", destination: "/markets/", permanent: true },
      { source: "/markets/cherry-hills-village-co", destination: "/markets/", permanent: true },
      { source: "/markets/englewood-co", destination: "/markets/", permanent: true },
      { source: "/sell-luxury-home-as-is", destination: "/sell-home-to-builder/", permanent: true },
    ];
  },
};

export default nextConfig;
