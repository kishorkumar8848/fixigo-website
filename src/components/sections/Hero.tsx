"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import ComingSoonPopup from "@/components/ui/ComingSoonPopup";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">

          {/* Left Text Column */}
          <div className="text-left flex flex-col items-start">

            {/* Tagline with decorative rays */}
            <div className="relative inline-flex items-center select-none mb-4">
              <svg className="absolute -left-7 -top-3 w-6 h-6 text-[#1D58F6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="18" x2="2" y2="20" />
                <line x1="8" y1="14" x2="4" y2="12" />
                <line x1="12" y1="12" x2="9" y2="8" />
              </svg>
              <span className="font-handwritten text-[#1D58F6] text-base sm:text-lg font-bold tracking-wide uppercase italic pl-1">
                APPLIANCE CARE. MADE EASY.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              We fix it.<br />
              You relax.<br />
              <span className="relative inline-block font-handwritten text-[#1D58F6] font-bold text-6xl sm:text-7xl lg:text-[80px] mt-1 select-none not-italic">
                Life moves.
                <svg className="absolute -bottom-1 left-0 w-full h-4 text-[#1D58F6]" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9 C 50 3, 150 3, 198 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 text-base sm:text-lg text-slate-600 max-w-md leading-relaxed">
              From repairs to maintenance and warranty, Fixigo takes care of your appliances — so you don&apos;t have to.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                id="download-btn"
                onClick={handleDownloadClick}
                className="px-7 py-3.5 bg-slate-950 hover:bg-slate-900 text-white rounded-full font-bold transition-all duration-200 flex items-center gap-2.5 text-base cursor-pointer"
              >
                <span>Download Android App</span>
                <ArrowDownToLine className="h-5 w-5" />
              </button>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[#1D58F6] font-bold text-base flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer py-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center items-center relative w-full">
            <Image
              src="/hero-illustration-clean.png"
              alt="Fixigo appliance care illustration"
              width={640}
              height={520}
              className="w-full h-auto select-none max-w-xl lg:max-w-none transform lg:scale-105 transition-transform duration-300"
              priority
            />
          </div>

        </div>
      </div>

      {/* Coming Soon Popup */}
      <ComingSoonPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
}
