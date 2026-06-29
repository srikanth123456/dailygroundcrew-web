import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — DailyGroundCrew",
  description: "Terms and Conditions for using the DailyGroundCrew platform.",
  alternates: { canonical: "https://www.dailygroundcrew.com/terms" },
};

const SECTIONS = [
  {
    title: "1. Eligibility",
    body: "You must be 18 years or older. By using this app you confirm you meet this requirement. Hiring or engaging workers under the age of 18 is strictly prohibited and will result in immediate account suspension.",
  },
  {
    title: "2. Your Account",
    body: "You are responsible for keeping your login credentials secure. You are liable for all activity under your account. Creating fake, duplicate, or misleading profiles is prohibited and will result in suspension.",
  },
  {
    title: "3. For Workers (Labour & Providers)",
    body: null,
    bullets: [
      "Complete jobs you accept. Repeated no-shows or last-minute cancellations will result in account suspension.",
      "Accurately represent your skills, experience, and certifications.",
      "Arrive on time and conduct yourself professionally.",
      "Any misconduct including theft, damage to property, or abusive behaviour will result in immediate suspension and may be reported to authorities.",
    ],
  },
  {
    title: "4. For Employers (Customers / Contractors)",
    body: null,
    bullets: [
      "Pay workers the agreed daily rate on completion of work.",
      "Provide a safe work environment with appropriate safety equipment (PPE).",
      "Do not post fraudulent or misleading job listings.",
      "You are solely responsible for ensuring compliance with applicable labour laws at your worksite.",
    ],
  },
  {
    title: "5. Payments",
    body: "All payments are made directly between workers and employers. DailyGroundCrew is not a payment gateway and is not liable for payment disputes, non-payment, or delayed payment. Any payment dispute must be resolved between the parties involved.",
  },
  {
    title: "6. User-Uploaded Content",
    body: "When you upload photos, images, or any other content, you confirm that you own the content or have obtained all necessary rights and licences, the content does not infringe any third-party rights, and the content is not defamatory, obscene, or unlawful. DailyGroundCrew reserves the right to remove any content reported as infringing without prior notice.",
  },
  {
    title: "7. Marketplace Listings",
    body: "Users who post materials, equipment, tools, scrap, or services confirm they own or are authorised to sell the listed items. Posting items you do not own, using fake pricing, or misrepresenting condition or quantity will result in listing removal and account suspension. DailyGroundCrew does not verify listings and is not liable for any loss arising from inaccurate or fraudulent listings.",
  },
  {
    title: "8. Messaging & Chat",
    body: "Messages exchanged on the platform are stored on our servers to enable chat functionality. We may review messages if required to investigate reports of abuse or violations. Do not share sensitive personal information (bank details, passwords, OTPs) via chat.",
  },
  {
    title: "9. Prohibited Conduct",
    body: "The following are strictly prohibited:",
    bullets: [
      "Misrepresentation of skills, identity, age, or qualifications",
      "Sharing false contact information or fake listings",
      "Harassment, abuse, threats, or intimidation toward any user",
      "Engaging or hiring workers under the age of 18",
      "Posting jobs or listings that violate applicable law",
      "Uploading content that infringes third-party intellectual property rights",
      "Using the platform for any fraudulent transaction",
      "Providing false ID information during verification",
    ],
  },
  {
    title: "10. Location Data",
    body: "With your permission, we collect your device's GPS location to show nearby jobs and workers. Location data is stored as part of your profile and is visible to other users. You may update or remove your location at any time from your profile settings.",
  },
  {
    title: "11. Push Notifications",
    body: "You may be asked to allow push notifications for messages and job alerts. You can disable notifications at any time from your device settings.",
  },
  {
    title: "12. Identity Verification",
    body: "If you submit a verification request, the ID type and ID number you enter are stored securely and are only accessible to authorised platform administrators. Submission of false ID information will result in immediate account suspension. DailyGroundCrew is not liable for any misuse of ID information arising from data breaches beyond our control.",
  },
  {
    title: "13. Privacy & Data",
    body: "We collect your name, phone number, location, and work details to connect you with other users. Your data is stored securely on Firebase (Google Cloud) servers and is never sold to third parties. For questions about your data, contact us at support@dailygroundcrew.com.",
  },
  {
    title: "14. Third-Party Services",
    body: "The app uses the following third-party services, each governed by their own terms and privacy policies:",
    bullets: [
      "Firebase (Google) — database and authentication",
      "Expo Notifications — push notification delivery",
      "Google Maps — location services",
    ],
  },
  {
    title: "15. Ratings & Reviews",
    body: "Ratings must reflect genuine experiences. Fake or retaliatory reviews will be removed and may result in account suspension.",
  },
  {
    title: "16. Worker Safety",
    body: "Employers and contractors are solely responsible for providing a safe work environment and adequate PPE. DailyGroundCrew is not liable for injuries, accidents, or health issues arising at any worksite. Workers must immediately report unsafe conditions and have the right to refuse unsafe work.",
  },
  {
    title: "17. Limitation of Liability",
    body: "DailyGroundCrew is a platform that connects workers and employers. We are not liable for the quality of work, payment disputes, property damage, personal injury, or any harm arising from transactions or meetings between users. Use of the platform is entirely at your own risk.",
  },
  {
    title: "18. Termination",
    body: "We reserve the right to suspend or terminate accounts that violate these terms without prior notice.",
  },
  {
    title: "19. Changes to Terms",
    body: "We may update these Terms from time to time. You will be asked to re-accept updated terms before continuing to use the app.",
  },
  {
    title: "20. Governing Law",
    body: "These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Hyderabad, Telangana.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-8 hover:underline">
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6 shadow-sm">
          <h1 className="text-3xl font-extrabold text-primary mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-500">Version 1.2 · Effective May 20, 2026</p>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Welcome to DailyGroundCrew. These Terms govern your use of our platform. By using
            DailyGroundCrew you confirm you have read, understood, and agree to these Terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {SECTIONS.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-2">{s.title}</h2>
              {s.body && <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>}
              {s.bullets && (
                <ul className="mt-2 space-y-1.5 list-disc list-inside">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-gray-600 leading-relaxed">{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-gray-400">
          Questions?{" "}
          <a href="mailto:support@dailygroundcrew.com" className="text-primary hover:underline">
            support@dailygroundcrew.com
          </a>
        </p>
      </div>
    </main>
  );
}
