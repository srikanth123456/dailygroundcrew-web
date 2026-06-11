"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How do I hire workers on DailyGroundCrew?",
    a: "Download the app, create a contractor/builder account, post your job with work type, location, date and budget. Workers near you will apply or you can directly search and send hire requests. Accept the best match and confirm the hire.",
  },
  {
    q: "How do I post a job on the platform?",
    a: "Go to the 'Post Job' section, fill in the work type (mason, carpenter, etc.), date, location, number of workers needed and the offered rate. Your job is instantly visible to verified workers in your city.",
  },
  {
    q: "Is DailyGroundCrew free to use?",
    a: "Yes! Downloading and using DailyGroundCrew is completely free for both contractors and workers. All construction tools, calculators and the estimator are free with no subscription required.",
  },
  {
    q: "How can workers register on the platform?",
    a: "Workers can download the app, select 'Labour' as their role during signup, add their skills (mason, carpenter, etc.), set their daily rate and mark availability. Profile is live immediately and visible to contractors.",
  },
  {
    q: "How does worker verification work?",
    a: "Workers can upload identity documents for verification. Verified workers receive a badge on their profile. We also verify based on completed jobs and ratings, building a trusted reputation score over time.",
  },
  {
    q: "How are ratings and reviews calculated?",
    a: "After each job is completed, both the contractor and worker rate each other (1–5 stars) and leave optional comments. Your overall rating is the average of all reviews received on the platform.",
  },
  {
    q: "How do push notifications work?",
    a: "You receive push notifications for new job applications, hire requests, messages, job status updates and payment records. You can control notification preferences from your profile settings.",
  },
  {
    q: "How can I rent construction equipment?",
    a: "Go to the 'Equipment' section in the marketplace. Browse JCBs, cranes, mixers, scaffolding and more by location. Contact the owner directly via the app to confirm rental terms, dates and pricing.",
  },
  {
    q: "Can I manage multiple construction sites?",
    a: "Yes! The Site Management feature lets you create unlimited sites, add workers to each site, mark daily attendance (Full/Half/Absent), record payments and view detailed site reports — all from one screen.",
  },
  {
    q: "How accurate is the Construction Estimator?",
    a: "The estimator uses standard Indian construction industry formulas with city-specific rate adjustments. It covers materials, labour, electrical, plumbing, equipment and contingency. Estimates are approximate guides — actual costs may vary based on market conditions.",
  },
  {
    q: "Is the app available in regional languages?",
    a: "Yes! DailyGroundCrew supports English, Hindi, Telugu and Tamil. You can switch languages from the profile settings. All screens, labels and notifications are translated.",
  },
  {
    q: "How do I buy or sell construction materials?",
    a: "Open the 'Materials' marketplace in the app. Sellers can post listings with photos, quantity, price and location. Buyers can browse, filter by city and contact sellers directly via WhatsApp or in-app call.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-xl">
        <div className="text-center animate-on-scroll visible">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-3">
            FAQ
          </span>
          <h2 id="faq-heading" className="section-heading">Frequently Asked Questions</h2>
          <p className="section-sub">
            Everything you need to know about DailyGroundCrew.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-200",
                open === i ? "border-primary-200 shadow-card" : "border-gray-100"
              )}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                           hover:bg-gray-50 transition-colors focus-visible:outline-none
                           focus-visible:bg-primary-50"
                onClick={() => setOpen(o => o === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className={cn(
                  "font-semibold text-base leading-snug transition-colors",
                  open === i ? "text-primary" : "text-gray-900"
                )}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300",
                    open === i ? "rotate-180 text-primary" : ""
                  )}
                  aria-hidden
                />
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={cn("accordion-content", open === i ? "open" : "")}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <a href="#contact" className="text-secondary font-medium hover:text-primary transition-colors">
              Contact our support team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
