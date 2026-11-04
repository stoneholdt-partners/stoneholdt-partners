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
      // Markets that were dropped from the launch set.
      { source: "/markets/medina-wa", destination: "/markets/", permanent: true },
      { source: "/markets/mercer-island-wa", destination: "/markets/", permanent: true },
      { source: "/markets/denver-co", destination: "/markets/", permanent: true },
      { source: "/markets/cherry-hills-village-co", destination: "/markets/", permanent: true },
      { source: "/markets/englewood-co", destination: "/markets/", permanent: true },
    ];
  },
};

export default nextConfig;
