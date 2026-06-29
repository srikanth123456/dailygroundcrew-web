import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { breadcrumbSchema } from "@/lib/seo";

export default function ServicePageLayout({
  pageTitle,
  path,
  children,
}: {
  pageTitle: string;
  path: string;
  children: React.ReactNode;
}) {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://dailygroundcrew.com" },
    { name: pageTitle, url: `https://dailygroundcrew.com${path}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main id="main-content" className="pt-20">
        <nav aria-label="Breadcrumb" className="container-xl pt-6">
          <ol className="flex items-center gap-1.5 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-gray-900 font-medium" aria-current="page">{pageTitle}</li>
          </ol>
        </nav>
        {children}
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}
