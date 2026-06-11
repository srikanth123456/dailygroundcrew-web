"use client";
import { useEffect } from "react";

/**
 * Attaches IntersectionObserver to all .animate-on-scroll elements
 * and adds the "visible" class when they enter the viewport.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const selectors = ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right";
    const elements = document.querySelectorAll<HTMLElement>(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("visible")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
