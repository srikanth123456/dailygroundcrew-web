"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
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
            <div className="flex items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-sm py-2.5 px-5 hidden sm:inline-flex"
                aria-label="Download App on Google Play"
              >
                <Download className="w-4 h-4" />
                <span>Download App</span>
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
          <div className="pt-4 border-t border-gray-100 mt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-accent w-full justify-center text-base py-3"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
