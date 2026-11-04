import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Stoneholdt Partners: we buy homes for luxury redevelopment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social preview for every page (cream card, navy logo, one clear line). */
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logos/Stoneholdt Partners.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ede8df",
          border: "18px solid #1b2a5e",
        }}
      >
        <img src={src} alt="" width={540} height={213} />
        <div style={{ display: "flex", width: 220, height: 2, background: "#4a67ad", marginTop: 44 }} />
        <div style={{ display: "flex", marginTop: 36, fontSize: 38, letterSpacing: 8, color: "#1b2a5e", textTransform: "uppercase" }}>
          We buy homes for luxury redevelopment
        </div>
        <div style={{ display: "flex", marginTop: 18, fontSize: 26, color: "#4a67ad" }}>Private &middot; As-Is &middot; Nationwide</div>
      </div>
    ),
    size,
  );
}
