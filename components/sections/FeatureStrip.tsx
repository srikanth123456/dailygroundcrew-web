import { Users, Briefcase, Building2, Truck, Package, Wrench } from "lucide-react";

const FEATURES = [
  { icon: Users,     label: "Hire Workers",      color: "text-secondary bg-secondary-50",   href: "#categories" },
  { icon: Briefcase, label: "Post Jobs",          color: "text-primary bg-primary-50",       href: "#features" },
  { icon: Building2, label: "Site Management",    color: "text-emerald-600 bg-emerald-50",   href: "#features" },
  { icon: Truck,     label: "Rent Equipment",     color: "text-orange-600 bg-orange-50",     href: "#services" },
  { icon: Package,   label: "Buy Materials",      color: "text-blue-600 bg-blue-50",         href: "#services" },
  { icon: Wrench,    label: "Construction Tools", color: "text-purple-600 bg-purple-50",     href: "#toolkit" },
];

export default function FeatureStrip() {
  return (
    <section
      id="features"
      className="bg-white border-y border-gray-100 py-8"
      aria-label="Feature highlights"
    >
      <div className="container-xl">
        <div className="hidden md:grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
          {FEATURES.map(f => (
            <a
              key={f.label}
              href={f.href}
              className="group flex flex-col items-center gap-2.5 py-4 px-2 rounded-2xl
                         hover:bg-gray-50 transition-all duration-200"
              aria-label={f.label}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.color}
                              group-hover:scale-110 transition-transform duration-200`}>
                <f.icon className="w-6 h-6" aria-hidden />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                {f.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
