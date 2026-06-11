"use client";
import { useState } from "react";
import NextImage, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export default function AppImage({ className, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      <div
        className={cn(
          "absolute inset-0 bg-gray-200 transition-opacity duration-300",
          loaded ? "opacity-0 pointer-events-none" : "opacity-100 animate-pulse"
        )}
        aria-hidden
      />
      <NextImage
        {...props}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
