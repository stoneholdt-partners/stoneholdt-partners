import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display text-5xl">Page not found</h1>
      <p className="mt-5 text-navy/75">The page you were looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-block rounded-sm bg-navy px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream">Back home</Link>
    </div>
  );
}
