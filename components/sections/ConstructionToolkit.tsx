"use client";
import Link from "next/link";
import { ArrowRight, Ruler, Layers, Paintbrush, IndianRupee, Grid3x3, Dumbbell, Calculator } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const TOOLS = [
  { icon: Ruler,       label: "Unit Converter",        desc: "Convert between feet, meters, yards, sq units",   color: "bg-blue-50 text-blue-600" },
  { icon: Layers,      label: "Brick Calculator",       desc: "Estimate brick quantity for walls and structures", color: "bg-orange-50 text-orange-600" },
  { icon: Paintbrush,  label: "Paint Calculator",       desc: "Calculate paint coverage for interior & exterior", color: "bg-green-50 text-green-600" },
  { icon: IndianRupee, label: "Wage Calculator",        desc: "Compute daily, weekly and monthly wages",         color: "bg-emerald-50 text-emerald-600" },
  { icon: Grid3x3,     label: "Tile Calculator",        desc: "Tiles required with waste percentage included",   color: "bg-purple-50 text-purple-600" },
  { icon: Dumbbell,    label: "Steel Calculator",       desc: "TMT bar weight and quantity estimation",          color: "bg-gray-100 text-gray-700" },
  { icon: Calculator,  label: "Construction Estimator", desc: "Full cost estimate for any construction project", color: "bg-accent-50 text-accent-600", highlight: true },
];

export default function ConstructionToolkit() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="toolkit" className="section-padding bg-white" aria-labelledby="toolkit-heading">
      <div className="container-xl" ref={ref}>
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-3">
            100% Free Tools
          </span>
          <h2 id="toolkit-heading" className="section-heading">Construction Toolkit</h2>
          <p className="section-sub">
            100+ free construction calculators and tools — available offline, no login required.
          </p>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {TOOLS.map((tool, i) => (
            <div
              key={tool.label}
              className={`card p-6 space-y-3 cursor-default group
                ${tool.highlight
                  ? "border-accent-300 bg-gradient-to-br from-accent-50 to-white ring-1 ring-accent-200"
                  : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.color}
                              group-hover:scale-110 transition-transform duration-200`}>
                <tool.icon className="w-6 h-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">
                  {tool.label}
                  {tool.highlight && (
                    <span className="ml-2 inline-block text-xs bg-accent text-primary px-2 py-0.5 rounded-full font-bold align-middle">
                      NEW
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Link href="#download" className="btn-primary text-base py-3.5 px-8">
            Explore All Tools in App
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
