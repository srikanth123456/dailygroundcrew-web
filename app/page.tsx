import Header             from "@/components/layout/Header";
import Footer             from "@/components/layout/Footer";
import Hero               from "@/components/sections/Hero";
import FeatureStrip       from "@/components/sections/FeatureStrip";
import AppShowcase        from "@/components/sections/AppShowcase";
import Statistics         from "@/components/sections/Statistics";
import ConstructionToolkit from "@/components/sections/ConstructionToolkit";
import Estimator          from "@/components/sections/Estimator";
import HowItWorks         from "@/components/sections/HowItWorks";
import WorkerCategories   from "@/components/sections/WorkerCategories";
import ServicesSection    from "@/components/sections/ServicesSection";
import ToolsSection       from "@/components/sections/ToolsSection";
import Testimonials       from "@/components/sections/Testimonials";
import FAQ                from "@/components/sections/FAQ";
import DownloadApp        from "@/components/sections/DownloadApp";
import Contact            from "@/components/sections/Contact";
import ScrollAnimator     from "@/components/ui/ScrollAnimator";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <FeatureStrip />
        <AppShowcase />
        <Statistics />
        <ConstructionToolkit />
        <Estimator />
        <HowItWorks />
        <WorkerCategories />
        <ServicesSection />
        <ToolsSection />
        <Testimonials />
        <FAQ />
        <DownloadApp />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}
