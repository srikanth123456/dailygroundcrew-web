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
  metadataBase: new URL("https://www.dailygroundcrew.com"),
  title: {
    default: "DailyGroundCrew (Daily Ground Crew) – Find & Hire Skilled Workers Fast",
    template: "%s | DailyGroundCrew",
  },
  description:
    "DailyGroundCrew — India's all-in-one construction platform. Hire masons, carpenters, electricians & more. Manage sites, rent equipment, buy materials and use free construction tools.",
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
    "daily ground crew",
    "Daily Ground Crew app",
    "daily ground crew construction app",
  ],
  authors: [{ name: "DailyGroundCrew", url: "https://www.dailygroundcrew.com" }],
  creator: "DailyGroundCrew",
  publisher: "DailyGroundCrew",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.dailygroundcrew.com",
    siteName: "DailyGroundCrew",
    title: "DailyGroundCrew – Find & Hire Skilled Workers Fast",
    description:
      "Hire skilled construction workers, manage sites, rent equipment and use 100+ construction tools. India's trusted construction workforce platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyGroundCrew – Find & Hire Skilled Workers Fast",
    description:
      "India's all-in-one construction platform. Hire workers, manage sites, rent equipment and use free construction tools.",
    creator: "@dailygroundcrew",
  },
  alternates: { canonical: "https://www.dailygroundcrew.com" },
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
      "@id": "https://www.dailygroundcrew.com/#org",
      name: "DailyGroundCrew",
      alternateName: ["Daily Ground Crew", "Daily GroundCrew"],
      url: "https://www.dailygroundcrew.com",
      logo: "https://www.dailygroundcrew.com/logo.png",
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
      "@id": "https://www.dailygroundcrew.com/#website",
      url: "https://www.dailygroundcrew.com",
      name: "DailyGroundCrew",
      alternateName: "Daily Ground Crew",
      description: "India's trusted platform to find & hire skilled construction workers",
      publisher: { "@id": "https://www.dailygroundcrew.com/#org" },
    },
    {
      "@type": "MobileApplication",
      name: "DailyGroundCrew",
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      description:
        "Hire construction workers, manage sites, rent equipment, buy materials and use free construction tools",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      downloadUrl: "https://play.google.com/store/apps/details?id=com.dailygroundcrew.app",
      installUrl: "https://play.google.com/store/apps/details?id=com.dailygroundcrew.app",
    },
    {
      "@type": "SoftwareApplication",
      name: "DailyGroundCrew",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description:
        "Construction estimator, brick calculator, site attendance and worker hiring app for contractors and builders in India",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      url: "https://www.dailygroundcrew.com",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.dailygroundcrew.com/#local",
      name: "DailyGroundCrew",
      url: "https://www.dailygroundcrew.com",
      image: "https://www.dailygroundcrew.com/logo.png",
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
