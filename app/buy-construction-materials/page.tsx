import type { Metadata } from "next";
import Link from "next/link";
import { Package, CheckCircle } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AppDownloadCTA from "@/components/ui/AppDownloadCTA";

export const metadata: Metadata = {
  title: "Buy Construction Materials Online — Cement, Steel, Bricks & Sand",
  description:
    "Buy cement, steel, bricks, sand and construction materials at competitive rates from verified sellers near you. Compare prices and order directly on DailyGroundCrew.",
  alternates: { canonical: "https://www.dailygroundcrew.com/buy-construction-materials" },
};

const MATERIALS = [
  "Cement — OPC and PPC, all major brands",
  "Steel (TMT bars) — all standard sizes",
  "Bricks — red clay, fly ash and AAC blocks",
  "Sand and aggregates — river sand, M-sand, gravel",
  "Tiles, marble and flooring materials",
  "Paints, plumbing fittings and electrical material",
];

const FAQS = [
  {
    q: "How do I buy construction materials on DailyGroundCrew?",
    a: "Open the Materials marketplace in the app, browse listings by material type and location, and contact the seller directly to confirm quantity, price and delivery. There's no markup added by the platform.",
  },
  {
    q: "Can I compare prices from different sellers?",
    a: "Yes. Multiple sellers list materials in most cities, so you can compare per-unit pricing and choose the best rate before placing an order.",
  },
  {
    q: "Can I sell materials I have surplus of?",
    a: "Yes — if you're a dealer, contractor or supplier with surplus material (cement, steel, bricks, etc.), you can list it for free and receive direct enquiries from buyers.",
  },
  {
    q: "Is bulk ordering supported?",
    a: "Yes. For large-volume orders, see our dedicated Bulk Material Contracts page where you can post your requirement and receive quotes from multiple verified suppliers.",
  },
];

export default function BuyMaterialsPage() {
  return (
    <ServicePageLayout pageTitle="Buy Construction Materials" path="/buy-construction-materials">
      <section className="container-xl py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-3">
              Materials Marketplace
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
              Buy Construction Materials Online — Cement, Steel, Bricks & Sand
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Sourcing materials for a build shouldn't mean calling five dealers to compare prices.
              DailyGroundCrew lists construction materials from verified sellers near you, so you
              can compare rates and order directly — at the best price available locally.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <AppImage
              src="/assets/material.png"
              width={800}
              height={500}
              alt="Cement, steel and construction materials for sale in India"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Materials Available on the Platform</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {MATERIALS.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Buy Through DailyGroundCrew</h2>
          <ul className="space-y-3">
            {[
              "Compare prices from multiple local sellers before ordering",
              "Direct contact with sellers — no middleman markup",
              "List surplus materials for free if you're a dealer or contractor",
              "Pair with our Construction Estimator to know exact quantities needed",
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/construction-estimator" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Construction Cost Estimator</Link>
            <Link href="/construction-contracts" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Bulk Material Contracts</Link>
            <Link href="/hire-construction-workers" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Hire Construction Workers</Link>
          </div>
        </div>

        <div className="mt-14">
          <FaqAccordion faqs={FAQS} />
        </div>

        <div className="mt-14">
          <AppDownloadCTA text="Download the app to compare material prices near you, free." />
        </div>
      </section>
    </ServicePageLayout>
  );
}
