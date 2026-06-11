import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  name: string;
  width: number;
  height: number;
  hint?: string;
  className?: string;
  alt?: string;
  rounded?: string;
}

/**
 * Reusable placeholder component.
 * Replace by swapping with next/image or <img> pointing to your asset.
 * Each instance is labelled with the recommended asset name and dimensions.
 */
export default function PlaceholderImage({
  name,
  width,
  height,
  hint,
  className,
  alt,
  rounded = "rounded-2xl",
}: PlaceholderImageProps) {
  const aspectRatio = `${width}/${height}`;

  return (
    <div
      role="img"
      aria-label={alt ?? name}
      style={{ aspectRatio }}
      className={cn(
        "relative w-full bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50",
        "border-2 border-dashed border-primary-200 flex flex-col items-center justify-center",
        "text-center overflow-hidden select-none",
        rounded,
        className
      )}
    >
      {/* Decorative dots background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative z-10 px-4 py-3 space-y-1.5">
        {/* Image icon */}
        <div className="mx-auto w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-primary-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 3v18M21 3v18M3 21h18" />
          </svg>
        </div>

        <p className="text-xs font-bold text-primary-600 uppercase tracking-wider">{name}</p>
        <p className="text-xs text-gray-400 font-medium">{width} × {height}px</p>
        {hint && <p className="text-xs text-gray-400 max-w-[180px] leading-tight">{hint}</p>}

        <div className="mt-1 inline-block px-2 py-0.5 bg-accent-100 rounded text-xs text-accent-600 font-medium">
          Replace with your image
        </div>
      </div>
    </div>
  );
}
