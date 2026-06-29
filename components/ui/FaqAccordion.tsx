"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem { q: string; a: string; }

export default function FaqAccordion({ faqs, heading = "Frequently Asked Questions" }: { faqs: FaqItem[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-2xl font-bold text-primary mb-6">{heading}</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={faq.q}
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
    </div>
  );
}
