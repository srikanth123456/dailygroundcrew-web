import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — DailyGroundCrew",
  description: "Privacy Policy for the DailyGroundCrew platform.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    subsections: [
      {
        label: "Account Information",
        bullets: [
          "Name, phone number, and email address (if provided)",
          "Profile photo (optional)",
          "City and work location",
        ],
      },
      {
        label: "Work & Profile Data",
        bullets: [
          "Skills, work type, experience level",
          "Daily wage or service rates",
          "Verification ID type and number (if submitted)",
        ],
      },
      {
        label: "Usage Data",
        bullets: [
          "Job applications, postings, and transactions",
          "Ratings and reviews given or received",
          "Chat messages (stored to enable messaging)",
        ],
      },
      {
        label: "Device & Location Data",
        bullets: [
          "GPS location (only with your permission)",
          "Device type and OS version (for bug fixing)",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: null,
    bullets: [
      "To connect workers with employers and buyers with sellers",
      "To show relevant nearby jobs, workers, and listings",
      "To send job alerts and messages via push notifications",
      "To verify user identity (admin use only)",
      "To detect and prevent fraud or abuse",
    ],
  },
  {
    title: "3. Data Storage & Security",
    body: "Your data is stored on Firebase (Google Cloud) servers with industry-standard encryption. We do not store payment card details. Access to sensitive data (ID verification) is restricted to authorised administrators only.",
  },
  {
    title: "4. Data Sharing",
    body: "We do not sell your personal data to any third party. Your public profile (name, skills, location, ratings) is visible to other app users. Your phone number or ID details are never shared publicly.",
  },
  {
    title: "5. Third-Party Services",
    body: "We use the following services which have their own privacy policies:",
    bullets: [
      "Firebase (Google) — authentication and data storage",
      "Expo — push notifications",
      "Google Maps — location services",
    ],
  },
  {
    title: "6. Your Rights",
    bullets: [
      "You may update your profile information at any time.",
      "Deleting your account removes your personal data from our systems within 30 days.",
      "To request data deletion, contact: support@dailygroundcrew.com",
    ],
  },
  {
    title: "7. Account Deletion",
    body: "Users can delete their account from within the app settings or by contacting support@dailygroundcrew.com. Account data will be permanently deleted within 30 days, except where retention is required by law or for fraud prevention.",
  },
  {
    title: "8. User Generated Content",
    body: "DailyGroundCrew allows users to create listings, post jobs, send messages, ratings, and reviews. Users are responsible for the content they publish. We reserve the right to remove content that violates our Terms of Use, is misleading, abusive, fraudulent, or illegal.",
  },
  {
    title: "9. Push Notifications",
    body: "We may send push notifications related to job opportunities, messages, offers, account activity, announcements, and service updates. Users can manage notification preferences through their device settings.",
  },
  {
    title: "10. Children's Privacy",
    body: "This app is not intended for users under 18 years of age. We do not knowingly collect data from minors.",
  },
  {
    title: "11. Contact",
    body: "For privacy-related questions or data requests, email us at support@dailygroundcrew.com",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-8 hover:underline">
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6 shadow-sm">
          <h1 className="text-3xl font-extrabold text-primary mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Effective May 20, 2026</p>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            This Privacy Policy explains how DailyGroundCrew collects, uses, and protects
            your personal information. By using DailyGroundCrew you consent to this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {SECTIONS.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-2">{s.title}</h2>
              {s.body && <p className="text-sm text-gray-600 leading-relaxed mb-2">{s.body}</p>}
              {"bullets" in s && s.bullets && (
                <ul className="space-y-1.5 list-disc list-inside">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-gray-600 leading-relaxed">{b}</li>
                  ))}
                </ul>
              )}
              {"subsections" in s && s.subsections && (
                <div className="space-y-4">
                  {s.subsections.map((sub) => (
                    <div key={sub.label}>
                      <p className="text-sm font-semibold text-gray-700 mb-1">{sub.label}</p>
                      <ul className="space-y-1 list-disc list-inside">
                        {sub.bullets.map((b) => (
                          <li key={b} className="text-sm text-gray-600 leading-relaxed">{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center space-y-1">
          <p className="text-xs text-gray-400">
            Questions?{" "}
            <a href="mailto:support@dailygroundcrew.com" className="text-primary hover:underline">
              support@dailygroundcrew.com
            </a>
          </p>
          <p className="text-xs text-gray-400">
            Website:{" "}
            <a href="https://www.dailygroundcrew.com" className="text-primary hover:underline">
              https://www.dailygroundcrew.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
