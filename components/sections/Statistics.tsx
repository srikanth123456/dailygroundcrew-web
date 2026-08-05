import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Users, Wrench, ShoppingBag, FileText, IndianRupee } from "lucide-react";

const STATS = [
  { icon: Users,       target: 14,  suffix: "+", label: "Skill Types",      color: "text-secondary" },
  { icon: Wrench,      target: 11,  suffix: "",  label: "Free Tools",       color: "text-primary" },
  { icon: ShoppingBag, target: 6,   suffix: "",  label: "Marketplaces",     color: "text-emerald-600" },
  { icon: FileText,    target: 7,   suffix: "",  label: "Contract Types",   color: "text-orange-500" },
  { icon: IndianRupee, target: 100, suffix: "+", label: "App Downloads",    color: "text-accent" },
];

export default function Statistics() {
  return (
    <section
      className="bg-gradient-brand py-16 md:py-20"
      aria-labelledby="stats-heading"
    >
      <div className="container-xl">
        <p className="text-center text-white/60 text-sm font-semibold uppercase tracking-widest mb-10">
          What We Offer
        </p>
        <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {STATS.map(stat => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center"
              role="group"
              aria-label={`${stat.label} statistic`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-white" aria-hidden />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-white">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </p>
                <p className="text-white/70 text-sm font-medium mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
