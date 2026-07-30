import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-hidden bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 w-full">
        <Hero />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
