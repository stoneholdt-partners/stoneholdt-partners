"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Mobile-only bar that appears after scrolling, and steps aside when the form is on screen. */
export function StickyCta() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("offer");
    if (!target || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(target);
    return () => {
      io.disconnect();
      setFormVisible(false);
    };
  }, [pathname]);

  // Scroll to this page's form if it has one; otherwise go to the form on the home page.
  function go(e: React.MouseEvent) {
    const target = document.getElementById("offer");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const show = scrolled && !formVisible && pathname !== "/contact/";
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-cream/15 bg-navy px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-12px_rgba(19,30,69,0.5)] transition-transform duration-500 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <Link
        href="/#offer"
        onClick={go}
        tabIndex={show ? 0 : -1}
        className="block rounded-sm border border-cream/70 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-cream"
      >
        Get My Cash Offer
      </Link>
    </div>
  );
}
