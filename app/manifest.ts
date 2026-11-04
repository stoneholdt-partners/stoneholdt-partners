import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stoneholdt Partners",
    short_name: "Stoneholdt",
    description: "We buy homes for luxury redevelopment. Private, as-is cash offers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ede8df",
    theme_color: "#1b2a5e",
  };
}
