import type { Metadata } from "next";
import Link from "next/link";
import { Home, RefreshCw, Paintbrush, Grid3x3 } from "lucide-react";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AppDownloadCTA from "@/components/ui/AppDownloadCTA";

export const metadata: Metadata = {
  title: "Construction Cost Estimator & Calculator — Free House Building Cost Calculator",
  description:
    "Estimate house construction cost, material quantities and labour cost for new builds, renovations, painting and flooring. Free construction calculator on DailyGroundCrew.",
  alternates: { canonical: "https://dailygroundcrew.com/construction-estimator" },
};

const CALCULATORS = [
  { icon: Home,      title: "New House Construction Cost", body: "Estimate total cost for a new build including materials, labour, equipment and timeline based on built-up area, number of floors and finish quality." },
  { icon: RefreshCw, title: "Renovation Cost Calculator",   body: "Get a cost estimate for partial or full house renovation — civil work, electrical, plumbing and finishing." },
  { icon: Paintbrush,title: "Painting Cost Calculator",     body: "Calculate primer and paint quantity, number of painters needed and total painting cost based on wall area." },
  { icon: Grid3x3,   title: "Flooring & Tiles Calculator",  body: "Estimate tile quantity with wastage percentage, adhesive required, labour cost and total flooring cost." },
];

const FAQS = [
  {
    q: "How accurate is the DailyGroundCrew construction estimator?",
    a: "The estimator uses standard Indian construction industry formulas with city-specific rate adjustments, covering materials, labour, electrical, plumbing, equipment and contingency. It's designed as a reliable planning guide — actual costs can vary based on local market rates, site conditions and material brand choices.",
  },
  {
    q: "Is the construction calculator free to use?",
    a: "Yes, completely free with no login required. All calculators — house construction, renovation, painting, flooring and more — work offline once you've downloaded the app.",
  },
  {
    q: "What information do I need to get an estimate?",
    a: "Typically built-up area, number of floors, city/location and your preferred finish quality (basic, standard or premium). The estimator then breaks down material, labour and total cost.",
  },
  {
    q: "Can I estimate cost per square foot for house construction?",
    a: "Yes. The New House Construction calculator gives you a total cost estimate which you can divide by built-up area to get a per-square-foot figure for your specific city and finish level.",
  },
];

export default function EstimatorPage() {
  return (
    <ServicePageLayout pageTitle="Construction Estimator" path="/construction-estimator">
      <section className="container-xl py-10 md:py-16">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-3">
            Free Construction Calculator
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
            Construction Cost Estimator & Calculator
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Planning a build without knowing the real cost leads to budget overruns. DailyGroundCrew's
            free construction estimator breaks down materials, labour, equipment and timeline for
            new construction, renovation, painting and flooring — for any city in India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {CALCULATORS.map(c => (
            <div key={c.title} className="card p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-accent-100 flex items-center justify-center">
                <c.icon className="w-5 h-5 text-accent-700" aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{c.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">How the Estimator Works</h2>
          <ol className="space-y-3">
            {[
              "Select your project type — new construction, renovation, painting, flooring or more",
              "Enter built-up area, number of floors and city",
              "Choose your preferred finish quality — basic, standard or premium",
              "Get a full breakdown: materials, labour, equipment and total estimated cost",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/buy-construction-materials" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Buy Construction Materials</Link>
            <Link href="/hire-construction-workers" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Hire Construction Workers</Link>
            <Link href="/construction-contracts" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Bulk Construction Contracts</Link>
          </div>
        </div>

        <div className="mt-14">
          <FaqAccordion faqs={FAQS} />
        </div>

        <div className="mt-14">
          <AppDownloadCTA text="Download the app to use all construction calculators, free and offline." />
        </div>
      </section>
    </ServicePageLayout>
  );
}
