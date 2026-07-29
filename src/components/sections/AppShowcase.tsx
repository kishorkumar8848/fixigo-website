"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { APP_CONFIG } from "@/config/app";
import { Smartphone, MapPin, Wrench, Percent, Shield, Bot, ChevronRight, ChevronLeft } from "lucide-react";

export default function AppShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll controls for side-to-side desktop buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Icon mapper helper for screen titles
  const screenIcons = (id: string) => {
    switch (id) {
      case "home": return <Smartphone className="h-4 w-4 text-blue-500" />;
      case "booking": return <Wrench className="h-4 w-4 text-indigo-500" />;
      case "tracking": return <MapPin className="h-4 w-4 text-emerald-500 animate-bounce" />;
      case "vault": return <Shield className="h-4 w-4 text-amber-500" />;
      default: return <Smartphone className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950/20 overflow-hidden">
      {/* Decorative top grid lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">
              Interactive Product Walkthrough
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Step Inside the Fixigo Mobile Experience
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Everything you need is packed into a gorgeous, intuitive dashboard. Swipe through the core screens of our app below to see the user interface in detail.
            </p>
          </div>

          {/* Scrolling Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Mockup Slider */}
        <div
          ref={scrollRef}
          className="mt-16 flex gap-8 overflow-x-auto no-scrollbar pb-10 px-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: "smooth" }}
        >
          {APP_CONFIG.appSlides.map((slide, index) => {
            // Alternate rotations for a premium floating card look
            const rotDeg = index % 2 === 0 ? -3 : 3;

            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
              >
                {/* Visual angular hover mockup container */}
                <motion.div
                  className="rounded-3xl border border-slate-200/50 bg-white p-5 shadow-lg dark:border-slate-800/40 dark:bg-slate-900/60 transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between h-[520px] relative overflow-hidden"
                  style={{ rotate: rotDeg }}
                  whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                >
                  {/* Top content */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {screenIcons(slide.id)}
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {slide.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
                      {slide.description}
                    </p>
                  </div>

                  {/* Phone Screen Mockup inside the card */}
                  <div className="flex-1 rounded-[24px] bg-slate-950 border-4 border-slate-900 p-2 overflow-hidden flex flex-col justify-between text-white relative">
                    
                    {/* Screen Dynamic Island / Notch */}
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 h-3.5 w-16 bg-slate-950 rounded-full z-30" />

                    {/* App Screen Content Simulated based on slide type */}
                    <div className="flex-1 flex flex-col pt-3 text-left font-sans select-none overflow-y-auto no-scrollbar">
                      
                      {/* 1. HOME SCREEN */}
                      {slide.id === "home" && (
                        <div className="flex flex-col gap-2.5 text-[9px] pt-2">
                          <div className="flex justify-between items-center px-1">
                            <div>
                              <p className="text-[7px] text-slate-400">Total Appliances</p>
                              <h5 className="font-bold text-[10px]">5 Vaulted Units</h5>
                            </div>
                            <div className="h-5 w-5 rounded-full bg-slate-800 flex items-center justify-center font-bold">JD</div>
                          </div>
                          
                          {/* AC status alert */}
                          <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 flex justify-between items-center">
                            <div>
                              <p className="font-bold text-[9px]">Living Room AC</p>
                              <p className="text-[7px] text-blue-400 font-medium">90% Health Index</p>
                            </div>
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                          </div>

                          {/* Quick Actions */}
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wide px-1">Appliance Hub</p>
                          <div className="grid grid-cols-2 gap-1.5">
                            <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-850">
                              <p className="font-bold">Book Repair</p>
                              <p className="text-[6px] text-slate-500">2h Dispatch</p>
                            </div>
                            <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-850">
                              <p className="font-bold">Installs</p>
                              <p className="text-[6px] text-slate-500">Wall Mounting</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. BOOKING SCREEN */}
                      {slide.id === "booking" && (
                        <div className="flex flex-col gap-2 pt-2 text-[9px]">
                          <span className="font-bold text-[11px] px-1">Select Service Symptoms</span>
                          
                          <div className="space-y-1">
                            {["Appliance does not turn on", "Making loud vibrating noise", "Water leakage detected", "Cooling/Heating issue"].map((symp, i) => (
                              <div
                                key={i}
                                className={`p-2 rounded-lg border text-left ${
                                  i === 2
                                    ? "bg-blue-600/10 border-blue-500 text-blue-400"
                                    : "bg-slate-900 border-slate-850 text-slate-300"
                                }`}
                              >
                                {symp}
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-2 bg-slate-900 p-2 rounded-lg flex justify-between items-center">
                            <div>
                              <p className="text-[6px] text-slate-500">UPFRONT PRICE ESTIMATE</p>
                              <p className="font-bold text-slate-200">₹1,499 - ₹2,200</p>
                            </div>
                            <span className="text-[8px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded">NEXT</span>
                          </div>
                        </div>
                      )}

                      {/* 3. TRACKING SCREEN */}
                      {slide.id === "tracking" && (
                        <div className="flex flex-col justify-between h-full pt-1.5 relative">
                          <div className="flex justify-between items-center px-1 mb-2 bg-slate-950/70 p-1 rounded-md">
                            <div>
                              <p className="text-[7px] text-slate-400">YOUR DISPATCHER</p>
                              <p className="font-bold text-[10px]">Rajesh Kumar (AC Specialist)</p>
                            </div>
                            <span className="text-[8px] bg-[#1D58F6] text-white font-bold px-2 py-0.5 rounded-full">ETA 12m</span>
                          </div>
                          
                          {/* Live map route simulation */}
                          <div className="flex-1 bg-slate-900 rounded-lg relative overflow-hidden bg-grid-pattern" style={{ backgroundSize: "10px 10px" }}>
                            {/* Route Path line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                              <path d="M 40 100 Q 100 80, 160 50" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="3,3" />
                            </svg>
                            {/* Tech head */}
                            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-blue-600 border border-white h-4 w-4 rounded-full shadow-lg">
                              <MapPin className="h-2.5 w-2.5 text-white" />
                            </div>
                          </div>
                        </div>
                      )}



                      {/* 5. VAULT SCREEN */}
                      {slide.id === "vault" && (
                        <div className="flex flex-col gap-2 pt-2 text-[9px]">
                          <span className="font-bold text-[11px] px-1">Warranties & Invoices</span>
                          
                          <div className="space-y-1.5">
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-850 flex justify-between items-center">
                              <div>
                                <p className="font-bold">LG DirectCool Fridge</p>
                                <p className="text-[7px] text-slate-400">Invoice: LG-94123</p>
                              </div>
                              <span className="text-[7px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold">Expires: 12 Days</span>
                            </div>

                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-850 flex justify-between items-center">
                              <div>
                                <p className="font-bold">IFB Microwave</p>
                                <p className="text-[7px] text-slate-400">Invoice: IFB-23112</p>
                              </div>
                              <span className="text-[7px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded font-bold">Vault Locked</span>
                            </div>
                          </div>
                        </div>
                      )}



                    </div>

                    {/* iOS Indicator indicator */}
                    <div className="h-[2px] w-14 bg-white/40 rounded-full mx-auto mt-2 shrink-0" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
