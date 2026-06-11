"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import AppImage from "@/components/ui/AppImage";

const TESTIMONIALS = [
  {
    name: "Ramesh Kumar",
    role: "Contractor",
    location: "Hyderabad",
    rating: 5,
    text: "DailyGroundCrew transformed how I hire workers for my construction sites. I used to spend days finding masons — now I get quality workers within hours. The verification system gives me confidence in every hire.",
    image: "/assets/Ramesh.png",
  },
  {
    name: "Suresh Babu",
    role: "Site Manager",
    location: "Vijayawada",
    rating: 5,
    text: "The site management features are excellent. I track attendance, manage payments and monitor 3 sites simultaneously from my phone. The construction estimator saved me hours of manual calculation.",
    image: "/assets/Suresh.png",
  },
  {
    name: "Imran Khan",
    role: "Builder",
    location: "Secunderabad",
    rating: 5,
    text: "Managing workforce, attendance and materials on one platform is a game changer. The app notifications keep everyone updated. I've recommended it to every builder I know.",
    image: "/assets/Imran.png",
  },
  {
    name: "Praneeth",
    role: "Architect",
    location: "Bengaluru",
    rating: 5,
    text: "The construction estimator tool is incredibly accurate. I use it to give quick cost estimates to clients before starting formal quotes. It saves so much time and impresses clients.",
    image: "/assets/Praneeth.png",
  },
  {
    name: "Mohammed Farooq",
    role: "Equipment Owner",
    location: "Chennai",
    rating: 5,
    text: "I list my JCB and concrete mixer on the platform and get regular rental inquiries. The app makes it easy to manage bookings and payments. Best business decision I made.",
    image: "/assets/Farooq.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => setActive(a => (a + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [autoPlay, next]);

  const t = TESTIMONIALS[active];

  return (
    <section className="section-padding bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container-xl">
        <div className="text-center animate-on-scroll visible">
          <span className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-3">
            Real Stories
          </span>
          <h2 id="testimonials-heading" className="section-heading">Loved by Thousands</h2>
          <p className="section-sub">
            Hear from contractors, builders, site managers and workers who trust DailyGroundCrew every day.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div
            className="relative bg-white rounded-3xl shadow-card-hover p-8 md:p-12 border border-gray-100"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-100" aria-hidden />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <AppImage
                    src={t.image}
                    width={200}
                    height={200}
                    alt={`${t.name} profile photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <div className="flex gap-2" role="tablist" aria-label="Testimonials navigation">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`View testimonial ${i + 1}`}
                    onClick={() => { setActive(i); setAutoPlay(false); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => { prev(); setAutoPlay(false); }}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center
                             hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden />
                </button>
                <button
                  onClick={() => { next(); setAutoPlay(false); }}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center
                             hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
