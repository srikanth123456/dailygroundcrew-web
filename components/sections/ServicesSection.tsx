"use client";
import { Truck, Building2, Package, Recycle, Home, FileText } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const SERVICES = [
  {
    icon: Truck,     title: "Rent Equipment",  desc: "JCBs, cranes, mixers, scaffolding and construction machines on rent",     image: "/assets/rent-equipment.png",  color: "text-orange-600 bg-orange-50",
  },
  {
    icon: Building2, title: "Site Management", desc: "Workforce tracking, daily attendance, payments and reports",               image: "/assets/site-management.png", color: "text-primary bg-primary-50",
  },
  {
    icon: Package,   title: "Buy Materials",   desc: "Cement, steel, bricks, sand and construction materials at best rates",    image: "/assets/material.png",        color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Recycle,   title: "Scrap & Used",    desc: "Buy and sell used equipment, scrap metal and second-hand materials",      image: "/assets/scrap-used.png",      color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Home,      title: "Buy, Rent & Sell Property", desc: "Land, plots, residential & commercial properties — buy, rent or sell directly", image: "/assets/property-buy-rent-sell.png", color: "text-purple-600 bg-purple-50",
  },
  {
    icon: FileText,  title: "Bulk Material Contracts", desc: "Large-volume contracts for cement, steel, sand and aggregates at negotiated rates", image: "/assets/bulk-contracts.png", color: "text-rose-600 bg-rose-50",
  },
];

export default function ServicesSection() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="services" className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container-xl" ref={ref}>
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full mb-3">
            All-in-One Platform
          </span>
          <h2 id="services-heading" className="section-heading">
            More Services for Your Construction Needs
          </h2>
          <p className="section-sub">
            Beyond hiring workers — DailyGroundCrew is your complete construction marketplace.
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12
                      transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className="card overflow-hidden group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                {svc.image ? (
                  <AppImage
                    src={svc.image}
                    width={800}
                    height={500}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <PlaceholderImage
                    name={svc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    width={800}
                    height={500}
                    alt={svc.title}
                    rounded="rounded-none"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-5 space-y-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${svc.color}`}>
                  <svc.icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="font-bold text-gray-900 text-base group-hover:text-secondary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
