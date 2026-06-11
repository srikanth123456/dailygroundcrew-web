"use client";
import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        obs.unobserve(el);
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, isVisible];
}
