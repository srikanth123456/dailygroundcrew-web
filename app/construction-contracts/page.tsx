import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AppDownloadCTA from "@/components/ui/AppDownloadCTA";

export const metadata: Metadata = {
  title: "Bulk Construction Contracts — Get Quotes from Verified Builders",
  description:
    "Post your construction project (200+ yards), receive quotes from verified builders, compare and award the best contract — free on DailyGroundCrew.",
  alternates: { canonical: "https://www.dailygroundcrew.com/construction-contracts" },
};

const STEPS = [
  { title: "Post Project", body: "Share your plot size, location, requirements and budget for your construction project." },
  { title: "Receive Quotes", body: "Verified builders in your area send their best quotes with experience, timeline and pricing." },
  { title: "Compare & Select", body: "Compare quotes by price, builder experience and ratings from past projects." },
  { title: "Award Contract", body: "Choose the best builder, award the contract and start construction." },
];

const FAQS = [
  {
    q: "Who can post a bulk construction contract?",
    a: "Anyone with a plot of land (typically 200 sq. yards or more) looking to build can post a project. Builders and contracting firms then submit quotes based on your requirements.",
  },
  {
    q: "Is posting a project free?",
    a: "Yes, posting your construction project and receiving quotes is free. You only pay the builder you choose to award the contract to, based on terms you negotiate directly.",
  },
  {
    q: "How are builders verified?",
    a: "Builders display experience, years in business, past project ratings and completed contracts on their profile, so you can compare them before deciding.",
  },
  {
    q: "What information should I include when posting a project?",
    a: "Plot size, location, type of construction (residential, commercial), expected timeline and budget range. The more detail you provide, the more accurate the quotes you'll receive.",
  },
  {
    q: "Can I negotiate the quote with a builder?",
    a: "Yes. Quotes received through the platform are a starting point — you can discuss scope, materials, timeline and final pricing directly with the builder before awarding the contract.",
  },
];

export default function ConstructionContractsPage() {
  return (
    <ServicePageLayout pageTitle="Bulk Construction Contracts" path="/construction-contracts">
      <section className="container-xl py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full mb-3">
              Bulk Contracts
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
              Bulk Construction Contracts — Get Quotes from Verified Builders
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Got a plot of 200 yards or more? Post your project, get quotes from multiple verified
              builders, compare pricing and experience, and award the contract that fits your
              budget and timeline best.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <AppImage
              src="/assets/bulk-contracts.png"
              width={800}
              height={500}
              alt="Bulk construction contracts and verified builder quotes in India"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {STEPS.map((s, i) => (
            <div key={s.title} className="card p-6 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Use Bulk Contracts</h2>
          <ul className="space-y-3">
            {[
              "Get multiple builder quotes instead of relying on one contact",
              "Compare experience, delivery time and ratings transparently",
              "Negotiate directly — no commission charged on the contract value",
              "Pair with the Construction Estimator to validate quoted pricing",
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/buy-rent-sell-property" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Buy, Rent & Sell Property</Link>
            <Link href="/construction-estimator" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Construction Cost Estimator</Link>
            <Link href="/buy-construction-materials" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Buy Construction Materials</Link>
          </div>
        </div>

        <div className="mt-14">
          <FaqAccordion faqs={FAQS} />
        </div>

        <div className="mt-14">
          <AppDownloadCTA text="Download the app to post your project and receive builder quotes, free." />
        </div>
      </section>
    </ServicePageLayout>
  );
}
