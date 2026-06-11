"use client";
import { ArrowRight } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const CATEGORIES = [
  { name: "Mason",        count: "4,250+", image: "/assets/mason.png" },
  { name: "Carpenter",    count: "2,800+", image: "/assets/carpenter.png" },
  { name: "Electrician",  count: "3,120+", image: "/assets/electrician.png" },
  { name: "Painter",      count: "2,100+", image: "/assets/painter.png" },
  { name: "Plumber",      count: "1,950+", image: "/assets/plumber.png" },
];

export default function WorkerCategories() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="categories"
      className="section-padding bg-gray-50"
      aria-labelledby="categories-heading"
    >
      <div className="container-xl" ref={ref}>
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-3">
            Skilled Workers
          </span>
          <h2 id="categories-heading" className="section-heading">
            Explore Popular Worker Categories
          </h2>
          <p className="section-sub">
            Find verified, skilled workers across all construction trades.
            Available in 50+ cities across India.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12
                      transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.name}
              href="#download"
              className="card overflow-hidden group cursor-pointer"
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-label={`Find ${cat.name} workers — ${cat.count} available`}
            >
              <div className="aspect-square overflow-hidden">
                {cat.image ? (
                  <AppImage
                    src={cat.image}
                    width={600}
                    height={600}
                    alt={`${cat.name} worker`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <PlaceholderImage
                    name={cat.name.toLowerCase().replace(" ", "-")}
                    width={600}
                    height={600}
                    hint={`${cat.name} at work on a construction site.`}
                    alt={`${cat.name} worker`}
                    rounded="rounded-none"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-secondary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">{cat.count} Workers</p>
              </div>
            </a>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a href="#download" className="btn-primary text-base py-3.5 px-8" aria-label="Find workers for your project">
            Find Workers for Your Project
            <ArrowRight className="w-5 h-5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
