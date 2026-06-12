import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account — DailyGroundCrew",
  description: "Request permanent deletion of your DailyGroundCrew account and data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-8 hover:underline">
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6 shadow-sm">
          <h1 className="text-3xl font-extrabold text-primary mb-2">Delete Your Account</h1>
          <p className="text-sm text-gray-500">DailyGroundCrew — Account Deletion Request</p>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            You can permanently delete your DailyGroundCrew account and all associated data
            using either of the methods below.
          </p>
        </div>

        {/* Option 1 — In-app */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">1</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-1">Delete from the App</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Open the DailyGroundCrew app → <strong>Profile</strong> → <strong>Settings</strong> → <strong>Delete Account</strong>.
                Follow the on-screen steps to confirm deletion.
              </p>
            </div>
          </div>
        </div>

        {/* Option 2 — Email */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">2</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-1">Request via Email</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Send an email to{" "}
                <a href="mailto:support@dailygroundcrew.com?subject=Account%20Deletion%20Request" className="text-primary font-medium hover:underline">
                  support@dailygroundcrew.com
                </a>{" "}
                with the subject <strong>Account Deletion Request</strong> and include your registered
                phone number or email address.
              </p>
              <a
                href="mailto:support@dailygroundcrew.com?subject=Account%20Deletion%20Request&body=Hi%2C%20I%20would%20like%20to%20permanently%20delete%20my%20DailyGroundCrew%20account.%0A%0ARegistered%20Phone%2FEmail%3A%20"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Send Deletion Request
              </a>
            </div>
          </div>
        </div>

        {/* What gets deleted */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-3">What Gets Deleted</h2>
          <ul className="space-y-2 list-disc list-inside">
            {[
              "Your profile — name, photo, phone number, location",
              "Work data — skills, rates, experience, verification details",
              "Job posts, applications, and listings you created",
              "Chat messages and transaction history",
              "Ratings and reviews associated with your account",
            ].map((item) => (
              <li key={item} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
          <h2 className="text-base font-bold text-amber-800 mb-1">Deletion Timeline</h2>
          <p className="text-sm text-amber-700 leading-relaxed">
            Account and personal data are permanently deleted within <strong>30 days</strong> of
            your request. Some data may be retained beyond this period where required by law or
            for fraud prevention purposes.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center space-y-1">
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
