"use client";
import { ArrowRight, Home, RefreshCw, Building2, ShoppingBag, Paintbrush, Grid3x3, Layers } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ESTIMATE_TYPES = [
  { icon: Home,       label: "New House Construction", desc: "Materials, labour, timeline & full cost for new builds",    color: "bg-primary-50 text-primary" },
  { icon: RefreshCw,  label: "House Renovation",       desc: "Estimate renovation costs for partial or full house work",   color: "bg-secondary-50 text-secondary" },
  { icon: Building2,  label: "Commercial Building",    desc: "Office, showroom and multi-floor commercial structures",     color: "bg-blue-50 text-blue-600" },
  { icon: ShoppingBag,label: "Shop Construction",      desc: "Retail shop and small business unit cost estimates",         color: "bg-orange-50 text-orange-600" },
  { icon: Paintbrush, label: "Painting Work",          desc: "Primer, paint quantity, painters and total cost estimate",   color: "bg-green-50 text-green-600" },
  { icon: Grid3x3,    label: "Flooring / Tiles",       desc: "Tiles with waste %, adhesive, tile workers and total cost",  color: "bg-purple-50 text-purple-600" },
  { icon: Layers,     label: "Compound Wall",          desc: "Bricks, cement, steel and labour for perimeter walls",       color: "bg-gray-100 text-gray-600" },
];

export default function Estimator() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="estimator"
      className="section-padding bg-gradient-to-br from-primary-50/50 to-secondary-50/30"
      aria-labelledby="estimator-heading"
    >
      <div className="container-xl" ref={ref}>
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-3">
            Premium Feature
          </span>
          <h2 id="estimator-heading" className="section-heading">Build Cost Calculator</h2>
          <p className="section-sub">
            Get detailed estimates for materials, labour, equipment, timeline and total
            construction cost — for any project type, any city in India.
          </p>
        </div>

        {/* How it works inline */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-0 mt-8 mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {["Select Project", "Enter Area & Floors", "Choose Quality", "Add Location", "Get Full Estimate"].map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="w-5 h-5 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{step}</span>
              </div>
              {i < 4 && <ArrowRight className="w-4 h-4 text-gray-300 mx-1 hidden md:block flex-shrink-0" aria-hidden />}
            </div>
          ))}
        </div>

        {/* Project type cards */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {ESTIMATE_TYPES.map((type, i) => (
            <div
              key={type.label}
              className="card p-6 space-y-4 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${type.color}
                              group-hover:scale-110 transition-transform duration-200`}>
                <type.icon className="w-6 h-6" aria-hidden />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base">{type.label}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{type.desc}</p>
              </div>
              <a
                href="#download"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary
                           hover:gap-2.5 transition-all duration-200"
                aria-label={`Calculate ${type.label} estimate`}
              >
                Calculate Now
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          ))}

          {/* CTA card */}
          <div className="card p-6 bg-gradient-brand text-white flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-bold text-xl text-white">+ 1 More Type</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Roofing, painting, flooring and more — all available in the app.
              </p>
            </div>
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 bg-white text-primary font-semibold
                         px-4 py-2.5 rounded-xl text-sm hover:bg-accent hover:text-primary
                         transition-all duration-200"
              aria-label="Download app to access all estimator types"
            >
              Open Estimator
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
