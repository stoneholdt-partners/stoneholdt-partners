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
    ];
  },
};

export default nextConfig;
