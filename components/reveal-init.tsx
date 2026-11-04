"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Marks the document as JS-enabled and reveals `.reveal` elements as they scroll into view.
 * Re-scans on every route change and whenever new nodes are added, so pages reached by
 * client-side navigation are revealed too (previously they stayed blank until a refresh). */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  useEffect(() => {
    const show = (el: Element) => el.classList.add("in");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    const scan = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    // Safety net: never leave anything that is already on screen hidden.
    const t = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      });
    }, 1200);
    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
