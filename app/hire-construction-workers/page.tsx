import type { Metadata } from "next";
import Link from "next/link";
import { HardHat, Hammer, Zap, Wrench, CheckCircle } from "lucide-react";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AppDownloadCTA from "@/components/ui/AppDownloadCTA";

export const metadata: Metadata = {
  title: "Hire Construction Workers Online — Masons, Carpenters, Electricians & Plumbers",
  description:
    "Hire verified masons, carpenters, electricians and plumbers near you. Post a job in minutes, compare ratings, and pay daily wages directly — free on DailyGroundCrew.",
  alternates: { canonical: "https://www.dailygroundcrew.com/hire-construction-workers" },
};

const TRADES = [
  {
    icon: HardHat,
    title: "Hire Masons",
    body: "Masons handle brickwork, plastering, flooring and concrete work — the backbone of any construction site. On DailyGroundCrew, you can search masons by city, check their completed jobs and ratings, and send a direct hire request with your work dates and daily wage offer. Most contractors find a suitable mason within a day of posting.",
  },
  {
    icon: Hammer,
    title: "Hire Carpenters",
    body: "From shuttering and formwork to interior woodwork and furniture, carpenters are in demand across every project phase. Filter by experience level and specialization (civil carpentry vs. furniture carpentry) to find the right fit. Carpenters on the platform list their own daily rate, so pricing is transparent before you hire.",
  },
  {
    icon: Zap,
    title: "Hire Electricians",
    body: "Wiring, conduit laying, panel installation and fixture work all need a qualified electrician. Verified electricians on DailyGroundCrew display certification details where submitted, along with ratings from past contractors. You can hire for a single day's job or for the full duration of a site.",
  },
  {
    icon: Wrench,
    title: "Hire Plumbers",
    body: "Find plumbers for piping, fittings, bathroom installations and leak repairs. Post your requirement with the scope of work and preferred dates, and nearby plumbers can apply directly — or you can browse profiles and send a hire request yourself.",
  },
];

const FAQS = [
  {
    q: "How do I hire construction workers near me?",
    a: "Download the DailyGroundCrew app, create a contractor account, and post a job specifying the trade (mason, carpenter, electrician, plumber), location, dates and daily wage. Workers near you can apply directly, or you can search and send hire requests yourself.",
  },
  {
    q: "Is hiring through DailyGroundCrew free?",
    a: "Yes. Posting jobs, browsing worker profiles and hiring is completely free for contractors and builders. There is no commission charged on wages paid directly between you and the worker.",
  },
  {
    q: "How are workers verified on the platform?",
    a: "Workers can submit ID verification during signup and receive a verified badge once approved. Beyond document verification, a worker's reliability is also reflected in their rating score, built from reviews after each completed job.",
  },
  {
    q: "What are typical daily wages for construction workers in India?",
    a: "Daily wages vary significantly by city, skill level and trade — typically ranging from around ₹400 to ₹1,200+ per day for skilled trades like masons and electricians. Workers set their own rate on their profile, so you see the exact wage before hiring.",
  },
  {
    q: "Can I hire workers for a single day or only long-term?",
    a: "Both. You can post a one-day job for urgent work or hire for an ongoing site with daily attendance tracked through the Site Management feature in the app.",
  },
];

export default function HireConstructionWorkersPage() {
  return (
    <ServicePageLayout pageTitle="Hire Construction Workers" path="/hire-construction-workers">
      <section className="container-xl py-10 md:py-16">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary text-sm font-semibold rounded-full mb-3">
            Find Skilled Workers
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
            Hire Construction Workers Online — Masons, Carpenters, Electricians & Plumbers
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            DailyGroundCrew connects contractors, builders and homeowners with verified construction
            workers across India. Post a job in minutes, browse profiles with ratings and completed
            work history, and hire directly — no agents, no hidden commission.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {TRADES.map(t => (
            <div key={t.title} className="card p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-secondary-50 flex items-center justify-center">
                <t.icon className="w-5 h-5 text-secondary" aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Hire Through DailyGroundCrew</h2>
          <ul className="space-y-3">
            {[
              "Verified worker profiles with ID checks and rating history",
              "Direct hiring — no middlemen, no agent commission",
              "Transparent daily wages set by workers themselves",
              "Site Management tools to track attendance and payments once hired",
              "Available in English, Hindi, Telugu and Tamil",
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/construction-equipment-rental" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Rent Construction Equipment</Link>
            <Link href="/buy-construction-materials" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Buy Construction Materials</Link>
            <Link href="/construction-estimator" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Construction Cost Estimator</Link>
            <Link href="/construction-contracts" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Bulk Construction Contracts</Link>
          </div>
        </div>

        <div className="mt-14">
          <FaqAccordion faqs={FAQS} />
        </div>

        <div className="mt-14">
          <AppDownloadCTA text="Download the app to hire verified workers near you, free." />
        </div>
      </section>
    </ServicePageLayout>
  );
}
