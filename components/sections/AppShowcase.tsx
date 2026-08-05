"use client";
import { CheckCircle } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const APP_FEATURES = [
  "Hire skilled workers with verified profiles",
  "Post and manage broadcast jobs",
  "Real-time chat with workers and contractors",
  "Ratings and reviews for trust building",
  "Site attendance and payment tracking",
  "Equipment rental marketplace",
  "Buy and sell construction materials",
  "Scrap and used items marketplace",
];

export default function AppShowcase() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className="section-padding bg-gray-50/80" aria-labelledby="showcase-heading">
      <div className="container-xl">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Phone mockup */}
          <div className={`relative transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative mx-auto max-w-sm">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-brand rounded-3xl opacity-10 blur-xl" aria-hidden />

              {/* Phone frame */}
              <div className="relative bg-primary-900 rounded-[3rem] p-3 shadow-2xl mx-auto w-72">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-2 bg-black">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-1.5 bg-white/60 rounded-sm" />
                      <div className="w-1 h-1.5 bg-white/60 rounded-sm" />
                    </div>
                  </div>
                  <AppImage
                    src="/assets/app-screenshot.png"
                    width={700}
                    height={1400}
                    alt="DailyGroundCrew mobile app screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute top-1/4 -right-4 bg-white rounded-2xl shadow-card-hover p-3 border border-gray-100 hidden md:block" aria-hidden>
              <p className="text-xs text-gray-500 font-medium">Free Tools</p>
              <p className="text-2xl font-bold text-primary">11</p>
            </div>
            <div className="absolute bottom-1/4 -left-4 bg-white rounded-2xl shadow-card-hover p-3 border border-gray-100 hidden md:block" aria-hidden>
              <p className="text-xs text-gray-500 font-medium">Skill Types</p>
              <p className="text-2xl font-bold text-secondary">14+</p>
            </div>
          </div>

          {/* Feature list */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary text-sm font-semibold rounded-full mb-3">
                Everything in One App
              </span>
              <h2 id="showcase-heading" className="section-heading">
                Your Complete Construction Platform
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                From finding workers to managing your entire site — DailyGroundCrew brings
                everything you need to run a successful construction project.
              </p>
            </div>

            <ul className="space-y-3" aria-label="App features list">
              {APP_FEATURES.map((feat, i) => (
                <li
                  key={feat}
                  className="flex items-center gap-3"
                  style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
                >
                  <div className="w-7 h-7 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-secondary" aria-hidden />
                  </div>
                  <span className="text-gray-700 font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gray-900 text-white px-5 py-3 rounded-xl
                           hover:bg-gray-800 transition-colors"
                aria-label="Get it on Google Play"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden><path d="M3.18 23.76c.35.19.74.24 1.12.16L15.56 12 4.3.08A1.64 1.64 0 003 1.24v21.52c0 .38.08.74.18 1z"/><path d="M19.37 9.59l-2.65-1.51L14.1 12l2.62 2.92 2.65-1.51a1.87 1.87 0 000-3.82z"/><path d="M4.3.08L15.56 12 4.3 23.92l11.82-6.75L19.37 15l-3.81-3.81L19.37 9.59 16.12 7.51z"/></svg>
                <div>
                  <p className="text-xs text-gray-300">Get it on</p>
                  <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                </div>
              </a>

              <a
                href="#download"
                className="inline-flex items-center gap-2.5 bg-gray-900 text-white px-5 py-3 rounded-xl
                           hover:bg-gray-800 transition-colors"
                aria-label="Download on App Store"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <p className="text-xs text-gray-300">Download on</p>
                  <p className="text-sm font-semibold -mt-0.5">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
