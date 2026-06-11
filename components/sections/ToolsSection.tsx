"use client";
import { Ruler, Compass, Layers, Paintbrush, Grid3x3, Dumbbell, Box, IndianRupee, Calculator, FileText } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ALL_TOOLS = [
  { icon: Ruler,       name: "Unit Converter",           desc: "Length, area, volume conversions",       badge: null },
  { icon: Compass,     name: "Compass",                  desc: "Device compass for orientation",          badge: "Field" },
  { icon: Layers,      name: "Brick Calculator",         desc: "Brick quantity & cost",                   badge: null },
  { icon: Paintbrush,  name: "Paint Calculator",         desc: "Coverage & primer estimation",            badge: null },
  { icon: Grid3x3,     name: "Tile Calculator",          desc: "Tiles with 10% waste included",           badge: null },
  { icon: Dumbbell,    name: "Steel Calculator",         desc: "TMT bar weight & quantity",               badge: null },
  { icon: Box,         name: "Concrete Calculator",      desc: "Volume & mix ratio",                      badge: null },
  { icon: IndianRupee, name: "Wage Calculator",          desc: "Daily, weekly, monthly wages",            badge: null },
  { icon: Calculator,  name: "Construction Estimator",   desc: "Full project cost estimate",              badge: "New" },
  { icon: FileText,    name: "Measurement Notes",        desc: "Save site measurements offline",          badge: "Field" },
];

export default function ToolsSection() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>();

  const BADGE_COLORS: Record<string, string> = {
    Field: "bg-emerald-100 text-emerald-700",
    New:   "bg-accent-100 text-accent-700",
  };

  return (
    <section id="tools" className="section-padding bg-primary/[0.03]" aria-labelledby="tools-heading">
      <div className="container-xl" ref={ref}>
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary text-sm font-semibold rounded-full mb-3">
            Free Forever
          </span>
          <h2 id="tools-heading" className="section-heading">
            Complete Construction Toolkit
          </h2>
          <p className="section-sub">
            All tools work offline. No internet required. No login. No subscription.
            Built for real construction professionals.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12
                      transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {ALL_TOOLS.map((tool, i) => (
            <div
              key={tool.name}
              className="card p-5 flex flex-col gap-3 group hover:-translate-y-1 transition-all duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center
                               group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <tool.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-200" aria-hidden />
                </div>
                {tool.badge && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${BADGE_COLORS[tool.badge]}`}>
                    {tool.badge}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-10 bg-gradient-brand rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row
                         items-center justify-between gap-6 transition-all duration-700 delay-400
                         ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <h3 className="text-2xl font-bold">All tools. 100% free. Always offline.</h3>
            <p className="text-white/75 mt-2 max-w-md">
              Download the app and access the full toolkit without any subscription or internet connection.
            </p>
          </div>
          <a
            href="#download"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary font-bold
                       px-7 py-3.5 rounded-xl hover:bg-accent transition-colors text-base whitespace-nowrap"
            aria-label="Download app to access all construction tools"
          >
            Get Free Access
          </a>
        </div>
      </div>
    </section>
  );
}
