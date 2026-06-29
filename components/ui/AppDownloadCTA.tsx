import { Download } from "lucide-react";

export default function AppDownloadCTA({ text = "Download the DailyGroundCrew app to get started." }: { text?: string }) {
  return (
    <div className="bg-gradient-brand rounded-2xl p-8 text-center text-white">
      <p className="text-lg font-semibold mb-4">{text}</p>
      <a
        href="https://play.google.com/store/apps/details?id=com.dailygroundcrew.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl
                   hover:bg-accent transition-colors"
        aria-label="Download DailyGroundCrew on Google Play"
      >
        <Download className="w-5 h-5" aria-hidden />
        Get it on Google Play
      </a>
    </div>
  );
}
