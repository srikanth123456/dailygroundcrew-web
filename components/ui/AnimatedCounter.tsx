"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target, suffix = "", prefix = "", duration = 2000,
}: AnimatedCounterProps) {
  const [ref, visible] = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.5 });
  const count = useAnimatedCounter(target, duration, visible);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}
