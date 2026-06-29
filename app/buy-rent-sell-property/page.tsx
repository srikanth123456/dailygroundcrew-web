import type { Metadata } from "next";
import Link from "next/link";
import { Home, CheckCircle } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AppDownloadCTA from "@/components/ui/AppDownloadCTA";

export const metadata: Metadata = {
  title: "Buy, Rent & Sell Property Online — Plots, Apartments & Commercial Spaces",
  description:
    "Post your property for sale or rent and reach genuine buyers and tenants. Browse plots, apartments, villas and commercial spaces directly on DailyGroundCrew.",
  alternates: { canonical: "https://dailygroundcrew.com/buy-rent-sell-property" },
};

const PROPERTY_TYPES = [
  "Residential plots and open land",
  "Apartments and flats — 1BHK to 4BHK+",
  "Independent houses and villas",
  "Commercial spaces and shops",
  "Agricultural and farm land",
  "Under-construction and ready-to-move properties",
];

const FAQS = [
  {
    q: "How do I list my property for sale or rent?",
    a: "Open the Property section in the app, tap Post Property, add photos, price, location and details (BHK, area, sale or rent), and your listing goes live immediately to buyers and tenants browsing your city.",
  },
  {
    q: "Is listing a property free?",
    a: "Yes, posting a property listing on DailyGroundCrew is free. You receive enquiries directly from interested buyers or tenants via call or in-app message.",
  },
  {
    q: "Can I buy land or plots for construction through the platform?",
    a: "Yes. Browse plots and open land listings by city and size — many users post land specifically for new construction, which pairs well with our Bulk Construction Contracts feature once you're ready to build.",
  },
  {
    q: "How do I contact a seller or owner?",
    a: "Each listing has a 'View Details' option showing contact details. You can call or message the owner directly to schedule a visit, negotiate price and close the deal — DailyGroundCrew doesn't mediate the transaction.",
  },
];

export default function PropertyPage() {
  return (
    <ServicePageLayout pageTitle="Buy, Rent & Sell Property" path="/buy-rent-sell-property">
      <section className="container-xl py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full mb-3">
              Property Marketplace
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
              Buy, Rent & Sell Property Online
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Post your property online and reach genuine buyers or tenants directly. Whether you're
              selling a plot, renting out a flat, or listing a commercial space, DailyGroundCrew
              connects you with serious enquiries — no broker commission required.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <AppImage
              src="/assets/property-buy-rent-sell.png"
              width={800}
              height={500}
              alt="Buy, rent and sell residential and commercial property in India"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Property Types Listed</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {PROPERTY_TYPES.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <Home className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">How It Works</h2>
          <ol className="space-y-3">
            {[
              "Post your property with photos, price and location",
              "Receive calls and messages from interested buyers or tenants",
              "Show the property and connect with serious leads",
              "Negotiate, finalize and close the deal directly",
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
            <Link href="/construction-contracts" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Bulk Construction Contracts</Link>
            <Link href="/construction-estimator" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Construction Cost Estimator</Link>
            <Link href="/hire-construction-workers" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Hire Construction Workers</Link>
          </div>
        </div>

        <div className="mt-14">
          <FaqAccordion faqs={FAQS} />
        </div>

        <div className="mt-14">
          <AppDownloadCTA text="Download the app to post or browse property listings, free." />
        </div>
      </section>
    </ServicePageLayout>
  );
}
