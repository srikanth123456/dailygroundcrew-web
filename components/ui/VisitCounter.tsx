"use client";
import { useEffect, useState } from "react";

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/dailygroundcrew.com/pagevisits")
      .then(r => r.json())
      .then(d => setCount(d.value))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="text-white/40 text-xs">
      {count.toLocaleString()} page visits
    </span>
  );
}
