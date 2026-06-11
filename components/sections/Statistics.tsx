import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Users, Briefcase, CheckSquare, MapPin, Star } from "lucide-react";

const STATS = [
  { icon: Users,       target: 25000, suffix: "+", label: "Workers",        color: "text-secondary" },
  { icon: Briefcase,   target: 8000,  suffix: "+", label: "Contractors",    color: "text-primary" },
  { icon: CheckSquare, target: 120000,suffix: "+", label: "Jobs Completed", color: "text-emerald-600" },
  { icon: MapPin,      target: 50,    suffix: "+", label: "Cities Covered", color: "text-orange-500" },
  { icon: Star,        target: 4.8,   suffix: "★", label: "Average Rating", color: "text-accent" },
];

export default function Statistics() {
  return (
    <section
      className="bg-gradient-brand py-16 md:py-20"
      aria-labelledby="stats-heading"
    >
      <div className="container-xl">
        <p className="text-center text-white/60 text-sm font-semibold uppercase tracking-widest mb-10">
          Platform Highlights
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
