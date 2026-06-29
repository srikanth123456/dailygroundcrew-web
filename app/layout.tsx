import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#262261",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dailygroundcrew.com"),
  title: {
    default: "DailyGroundCrew – Find & Hire Skilled Workers Fast",
    template: "%s | DailyGroundCrew",
  },
  description:
    "India's leading construction workforce platform. Hire masons, carpenters, electricians & more. Manage sites, rent equipment, buy materials and use 100+ construction tools.",
  keywords: [
    "hire construction workers India",
    "find skilled workers",
    "mason carpenter electrician",
    "construction labour app",
    "site management app",
    "rent construction equipment",
    "buy construction materials",
    "construction tools calculator",
    "labour contractor app",
    "daily wage workers India",
    "construction estimator",
    "DailyGroundCrew",
  ],
  authors: [{ name: "DailyGroundCrew", url: "https://dailygroundcrew.com" }],
  creator: "DailyGroundCrew",
  publisher: "DailyGroundCrew",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dailygroundcrew.com",
    siteName: "DailyGroundCrew",
    title: "DailyGroundCrew – Find & Hire Skilled Workers Fast",
    description:
      "Hire skilled construction workers, manage sites, rent equipment and use 100+ construction tools. India's trusted construction workforce platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyGroundCrew – Find & Hire Skilled Workers Fast",
    description:
      "India's leading construction workforce platform. Hire workers, manage sites, rent equipment & use 100+ tools.",
    creator: "@dailygroundcrew",
  },
  alternates: { canonical: "https://dailygroundcrew.com" },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dailygroundcrew.com/#org",
      name: "DailyGroundCrew",
      url: "https://dailygroundcrew.com",
      logo: "https://dailygroundcrew.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@dailygroundcrew.com",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi", "Telugu"],
        areaServed: "IN",
      },
      sameAs: [
        "https://play.google.com/store/apps/details?id=com.dailygroundcrew.app",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dailygroundcrew.com/#website",
      url: "https://dailygroundcrew.com",
      name: "DailyGroundCrew",
      description: "India's trusted platform to find & hire skilled construction workers",
      publisher: { "@id": "https://dailygroundcrew.com/#org" },
    },
    {
      "@type": "MobileApplication",
      name: "DailyGroundCrew",
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      description:
        "Hire construction workers, manage sites, rent equipment, buy materials and use 100+ tools",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1200",
        bestRating: "5",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "DailyGroundCrew",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description:
        "Construction estimator, brick calculator, site attendance and worker hiring app for contractors and builders in India",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      url: "https://dailygroundcrew.com",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://dailygroundcrew.com/#local",
      name: "DailyGroundCrew",
      url: "https://dailygroundcrew.com",
      image: "https://dailygroundcrew.com/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      areaServed: "IN",
      priceRange: "Free",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
