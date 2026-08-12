"use client";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, Download, Gift } from "lucide-react";
import AppImage from "@/components/ui/AppImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br
                 from-white via-primary-50/40 to-secondary-50/30 pt-20"
      aria-label="Hero"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden />
      <div className="absolute top-32 right-0 w-96 h-96 bg-secondary-100/40 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl" aria-hidden />

      <div className="container-xl relative z-10 py-2 md:py-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* Left content */}
          <div className="space-y-7 animate-on-scroll visible">

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200
                            rounded-full text-sm font-medium text-accent-700">
              <Star className="w-4 h-4 fill-accent text-accent" aria-hidden />
              India's all-in-one construction platform
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
                Powering Every
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gradient">
                Construction Site
              </h1>
            </div>

            {/* Image shown here on mobile only */}
            <div className="relative lg:hidden">
              <AppImage
                src="/assets/hero-construction-workers.png"
                width={1400}
                height={1000}
                alt="Construction workers on a building site"
                className="w-full h-auto rounded-xl"
                priority
              />
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card-hover px-4 py-3
                           flex items-center gap-3 z-20 border border-gray-100"
                aria-hidden
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow" />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900">14 Skill Types</p>
                  <p className="text-xs text-green-600 font-medium">Available to hire</p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mt-6">
              Hire skilled workers, manage sites, rent equipment, buy materials
              and use <strong className="text-primary font-semibold">11 construction tools</strong> from
              one powerful platform.
            </p>

            {/* Feature bullets */}
            <ul className="space-y-2.5" aria-label="Key features">
              {[
                "Find verified masons, carpenters, electricians & more",
                "Site attendance, payments & workforce management",
                "Construction estimator & calculators — 100% free",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#download"
                className="btn-accent text-base py-3.5 px-7"
                aria-label="Download DailyGroundCrew app"
              >
                <Download className="w-5 h-5" aria-hidden />
                Get the App
              </a>
              <Link
                href="#features"
                className="btn-outline text-base py-3.5 px-7"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2" role="list" aria-label="Platform statistics">
              {[
                { value: "14+",  label: "Skill Types" },
                { value: "11",   label: "Free Tools" },
                { value: "6",    label: "Marketplaces" },
                { value: "100+", label: "Downloads" },
              ].map(s => (
                <div key={s.label} role="listitem" className="text-center">
                  <p className="text-xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image (desktop only) */}
          <div className="relative animate-on-scroll-right visible hidden lg:block">
            {/* Main illustration */}
            <div className="relative z-10">
              <AppImage
                src="/assets/hero-construction-workers.png"
                width={1400}
                height={1000}
                alt="Construction workers on a building site"
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>

            {/* Floating badge — workers online */}
            <div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card-hover px-4 py-3
                         flex items-center gap-3 z-20 border border-gray-100"
              aria-hidden
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">14 Skill Types</p>
                <p className="text-xs text-green-600 font-medium">Available to hire</p>
              </div>
            </div>

            {/* Floating badge — free app */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card-hover px-4 py-3
                         flex items-center gap-3 z-20 border border-gray-100"
              aria-hidden
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">100% Free</p>
                <p className="text-xs text-green-600 font-medium">No subscription</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
