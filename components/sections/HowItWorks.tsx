"use client";
import { Search, MessageSquare, Users, Hammer, Star, FilePlus } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const STEPS = [
  {
    icon: FilePlus,
    step: "01",
    title: "Post Requirement",
    desc: "Post a job with work type, date, budget and location. Reach hundreds of verified workers instantly.",
    color: "bg-primary-100 text-primary",
  },
  {
    icon: Users,
    step: "02",
    title: "Get Responses",
    desc: "Receive applications and offers from skilled, verified workers near your site location.",
    color: "bg-secondary-100 text-secondary",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Chat & Negotiate",
    desc: "Chat directly, negotiate rates and finalize work terms — all within the app.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Search,
    step: "04",
    title: "Hire",
    desc: "Accept the best offer, confirm the hire and track everything from your site dashboard.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Hammer,
    step: "05",
    title: "Complete Work",
    desc: "Worker arrives, completes the job. Mark attendance and record payments from the app.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Star,
    step: "06",
    title: "Rate & Review",
    desc: "Rate the worker and share feedback to build a trusted community for everyone.",
    color: "bg-accent-100 text-accent-600",
  },
];

export default function HowItWorks() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="how-it-works" className="section-padding bg-white" aria-labelledby="hiw-heading">
      <div className="container-xl" ref={ref}>

        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary text-sm font-semibold rounded-full mb-3">
            Simple Process
          </span>
          <h2 id="hiw-heading" className="section-heading">How It Works</h2>
          <p className="section-sub">
            Hire the right worker in minutes. Our streamlined process makes construction staffing
            simple, transparent and fast.
          </p>
        </div>

        {/* Desktop timeline */}
        <div
          className={`hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4 mt-16 relative
                      transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Connector line */}
          <div className="absolute top-10 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-gray-100 z-0 hidden lg:block" aria-hidden />

          {STEPS.map((s, i) => (
            <div
              key={s.step}
              className="relative z-10 flex flex-col items-center text-center gap-4 group"
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="relative">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${s.color}
                                group-hover:scale-110 transition-transform duration-200 shadow-card`}>
                  <s.icon className="w-9 h-9" aria-hidden />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white
                                 text-xs font-bold flex items-center justify-center shadow-sm">
                  {s.step}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className={`md:hidden mt-12 space-y-0 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex gap-5">
              {/* Line + icon */}
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${s.color} shadow-card`}>
                  <s.icon className="w-7 h-7" aria-hidden />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-100 my-2" aria-hidden />
                )}
              </div>
              {/* Content */}
              <div className="pb-8 pt-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {s.step}</span>
                <h3 className="font-bold text-gray-900 mt-0.5">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
