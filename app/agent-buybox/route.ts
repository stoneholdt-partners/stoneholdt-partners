import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

// Agent buy-box page, carried over as-is from the previous site. Not indexed.
const html = readFileSync(join(process.cwd(), "content/agent-buybox.html"), "utf8");

export function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
