import type { Metadata } from "next";
import Link from "next/link";
import { Truck, CheckCircle } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AppDownloadCTA from "@/components/ui/AppDownloadCTA";

export const metadata: Metadata = {
  title: "Construction Equipment Rental — JCBs, Cranes, Mixers & Scaffolding",
  description:
    "Rent JCBs, cranes, concrete mixers, scaffolding and 50+ construction machines near you. Compare owners, rental rates and availability directly on DailyGroundCrew.",
  alternates: { canonical: "https://dailygroundcrew.com/construction-equipment-rental" },
};

const EQUIPMENT = [
  "JCBs and excavators for earthwork and digging",
  "Tower cranes and mobile cranes for lifting material",
  "Concrete mixers and batching machines",
  "Scaffolding, shuttering plates and props",
  "Vibrators, compactors and generators",
  "Dumpers and tippers for material transport",
];

const FAQS = [
  {
    q: "How does construction equipment rental work on DailyGroundCrew?",
    a: "Open the Equipment section in the app, browse listings by machine type and location, and contact the owner directly to confirm rental dates, duration and pricing. There is no booking fee charged by the platform.",
  },
  {
    q: "What machines can I rent?",
    a: "JCBs, excavators, cranes, concrete mixers, scaffolding, vibrators, compactors, generators, dumpers and more — owners across India list their equipment with daily or monthly rental rates.",
  },
  {
    q: "Can I list my own equipment for rent?",
    a: "Yes. If you own idle construction equipment, you can list it on the platform for free, set your own rental price, and receive enquiries directly from contractors near you.",
  },
  {
    q: "How is rental pricing decided?",
    a: "Equipment owners set their own rates based on machine type, condition and rental duration. You can compare multiple listings in your city before confirming a booking.",
  },
];

export default function EquipmentRentalPage() {
  return (
    <ServicePageLayout pageTitle="Construction Equipment Rental" path="/construction-equipment-rental">
      <section className="container-xl py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-sm font-semibold rounded-full mb-3">
              Equipment Marketplace
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
              Construction Equipment Rental — JCBs, Cranes, Mixers & More
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Renting heavy machinery for a short-term project shouldn't mean buying it outright or
              relying on word-of-mouth. DailyGroundCrew lists construction equipment from owners
              across India, so you can compare machines, rates and availability before you book —
              all in one place.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <AppImage
              src="/assets/rent-equipment.png"
              width={800}
              height={500}
              alt="JCB and construction equipment available for rent in India"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Equipment Available on the Platform</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {EQUIPMENT.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <Truck className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Rent Through DailyGroundCrew</h2>
          <ul className="space-y-3">
            {[
              "Compare multiple equipment owners in your city before booking",
              "No platform commission — pay the owner directly",
              "List your own idle equipment and earn from it",
              "Contact owners directly via call or WhatsApp from the app",
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/hire-construction-workers" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Hire Construction Workers</Link>
            <Link href="/buy-construction-materials" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Buy Construction Materials</Link>
            <Link href="/construction-contracts" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors">Bulk Construction Contracts</Link>
          </div>
        </div>

        <div className="mt-14">
          <FaqAccordion faqs={FAQS} />
        </div>

        <div className="mt-14">
          <AppDownloadCTA text="Download the app to browse equipment rentals near you, free." />
        </div>
      </section>
    </ServicePageLayout>
  );
}
