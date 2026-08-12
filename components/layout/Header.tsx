"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features",    href: "/#features" },
  { label: "How It Works",href: "/#how-it-works" },
  { label: "Toolkit",     href: "/#toolkit" },
  { label: "Categories",  href: "/#categories" },
  { label: "About",       href: "/#about" },
  { label: "Contact",     href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Next.js Link doesn't auto-scroll to a hash when the pathname is unchanged
  // (e.g. clicking "/#features" while already on "/"), so handle it manually.
  const handleNavClick = useCallback((href: string) => (e: React.MouseEvent) => {
    const id = href.split("#")[1];
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }
    setActiveLink(href);
    setMenuOpen(false);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Pick the section with the greatest offsetTop that's still above the
    // current scroll position — this reflects actual document order instead
    // of assuming NAV_LINKS is declared in the same order as the page.
    let current = "";
    let maxOffset = -Infinity;
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.href.split("#")[1]);
      if (el && window.scrollY >= el.offsetTop - 100 && el.offsetTop > maxOffset) {
        maxOffset = el.offsetTop;
        current = link.href;
      }
    }
    setActiveLink(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else           document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : menuOpen
            ? "bg-white border-b border-gray-100"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="DailyGroundCrew Home">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <AppImage src="/assets/logo.png" width={40} height={40} alt="DailyGroundCrew logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-primary font-bold text-base sm:text-lg leading-none">DailyGroundCrew</p>
                <p className="hidden sm:block text-gray-500 text-xs leading-none mt-0.5">Find &amp; Hire Skilled Workers Fast</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    activeLink === link.href
                      ? "text-secondary bg-secondary-50"
                      : "text-gray-700 hover:text-primary hover:bg-primary-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl hover:bg-gray-900 transition-colors border border-gray-700"
                aria-label="Get DailyGroundCrew on Google Play"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186A1 1 0 013 21.27V2.734a1 1 0 01.609-.92z" fill="#EA4335"/>
                  <path d="M21.042 10.908l-3.642-2.046L14.652 12l2.748 3.138 3.647-2.047a1 1 0 00-.005-2.183z" fill="#FBBC04"/>
                  <path d="M3.61 1.814L13.792 12 17.4 8.862 5.428 2.184A1 1 0 003.61 1.814z" fill="#4285F4"/>
                  <path d="M3.61 22.186l1.818-.37L17.4 15.138 13.792 12 3.61 22.186z" fill="#34A853"/>
                </svg>
                <span className="hidden lg:block text-sm font-semibold">Google Play</span>
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/app/id6794195520"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="Download DailyGroundCrew on App Store"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="hidden lg:block text-sm font-semibold">App Store</span>
              </a>

              <button
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center
                           text-primary hover:bg-primary-50 transition-colors"
                onClick={() => setMenuOpen(v => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu — rendered as sibling (not child) of header to avoid stacking context
          issues caused by the header's backdrop-blur creating a new composite layer */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed top-16 md:top-20 left-0 right-0 bottom-0 z-40 bg-white transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="px-4 py-3 text-base font-medium rounded-xl text-gray-800
                         hover:bg-primary-50 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 mt-2 flex flex-col gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-3 bg-black text-white w-full py-3 rounded-xl hover:bg-gray-900 transition-colors"
              aria-label="Get it on Google Play"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" aria-hidden fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186A1 1 0 013 21.27V2.734a1 1 0 01.609-.92z" fill="#EA4335"/>
                <path d="M21.042 10.908l-3.642-2.046L14.652 12l2.748 3.138 3.647-2.047a1 1 0 00-.005-2.183z" fill="#FBBC04"/>
                <path d="M3.61 1.814L13.792 12 17.4 8.862 5.428 2.184A1 1 0 003.61 1.814z" fill="#4285F4"/>
                <path d="M3.61 22.186l1.818-.37L17.4 15.138 13.792 12 3.61 22.186z" fill="#34A853"/>
              </svg>
              <div>
                <p className="text-[10px] text-gray-400 leading-none">GET IT ON</p>
                <p className="font-bold text-base leading-none mt-0.5">Google Play</p>
              </div>
            </a>
            <a
              href="https://apps.apple.com/app/id6794195520"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-3 bg-black text-white w-full py-3 rounded-xl hover:bg-gray-900 transition-colors"
              aria-label="Download on App Store"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <p className="text-[10px] text-gray-400 leading-none">DOWNLOAD ON THE</p>
                <p className="font-bold text-base leading-none mt-0.5">App Store</p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
