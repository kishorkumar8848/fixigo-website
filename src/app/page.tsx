import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";

import AppShowcase from "@/components/sections/AppShowcase";
import WhyChoose from "@/components/sections/WhyChoose";

import FAQ from "@/components/sections/FAQ";
import Download from "@/components/sections/Download";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Aggregated Content */}
      <main className="flex-1 w-full">
        {/* 1. Hero Block */}
        <Hero />

        {/* 2. Trust Metrics / Counters */}
        <Trust />

        {/* 3. Core Services Grid */}
        <Services />

        {/* 4. Service Delivery Timeline */}
        <HowItWorks />



        {/* 6. Mobile Application Showcase */}
        <AppShowcase />

        {/* 7. Grid of Competitive Advantages */}
        <WhyChoose />



        {/* 9. Accordion Q&A Vault */}
        <FAQ />

        {/* 10. Glowing Download Section */}
        <Download />
      </main>

      {/* Footer Sitemap Block */}
      <Footer />
    </div>
  );
}
