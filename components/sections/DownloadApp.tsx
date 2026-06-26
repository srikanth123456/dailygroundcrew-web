import AppImage from "@/components/ui/AppImage";

export default function DownloadApp() {
  return (
    <section
      id="download"
      className="section-padding bg-gradient-brand relative overflow-hidden"
      aria-labelledby="download-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-10" aria-hidden />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — CTAs */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                Available Now
              </span>
              <h2 id="download-heading" className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                Join thousands building better every day.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                Download DailyGroundCrew and grow your construction business.
                Find workers, manage sites and access 100+ free tools.
              </p>
            </div>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl
                           hover:bg-gray-900 transition-colors border border-white/10"
                aria-label="Get DailyGroundCrew on Google Play"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden>
                  <path d="M3.18 23.76c.35.19.74.24 1.12.16L15.56 12 4.3.08A1.64 1.64 0 003 1.24v21.52c0 .38.08.74.18 1z"/>
                  <path d="M19.37 9.59l-2.65-1.51L14.1 12l2.62 2.92 2.65-1.51a1.87 1.87 0 000-3.82z"/>
                  <path d="M4.3.08L15.56 12 4.3 23.92l11.82-6.75L19.37 15l-3.81-3.81L19.37 9.59 16.12 7.51z"/>
                </svg>
                <div>
                  <p className="text-xs text-gray-300">Get it on</p>
                  <p className="text-base font-bold leading-none">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl
                           hover:bg-gray-900 transition-colors border border-white/10"
                aria-label="Download DailyGroundCrew on App Store"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-xs text-gray-300">Download on</p>
                  <p className="text-base font-bold leading-none">App Store</p>
                </div>
              </a>
            </div>

            {/* Rating strip */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-accent" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white font-bold">4.8/5</span>
                <span className="text-white/60 text-sm">App Rating</span>
              </div>
              <div className="h-5 w-px bg-white/20" aria-hidden />
              <p className="text-white/80 text-sm">Free forever for workers & contractors</p>
            </div>
          </div>

          {/* Right — QR code */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-44 h-44 bg-white rounded-2xl p-3 shadow-lg mx-auto"
                aria-label="Scan or click to get DailyGroundCrew on Google Play"
              >
                <AppImage
                  src="/assets/playstore-qr.png"
                  width={500}
                  height={500}
                  alt="Scan to download DailyGroundCrew on Google Play"
                  className="w-full h-full"
                />
              </a>
              <p className="text-white/70 text-xs font-medium">Scan to download</p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4 flex-1">
              {[
                { emoji: "🆓", text: "Free to download & use" },
                { emoji: "📴", text: "Tools work offline" },
                { emoji: "🌐", text: "4 language support" },
                { emoji: "🔒", text: "Verified workers only" },
                { emoji: "⚡", text: "Hire in minutes" },
              ].map(f => (
                <div key={f.text} className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden>{f.emoji}</span>
                  <span className="text-white/90 font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
