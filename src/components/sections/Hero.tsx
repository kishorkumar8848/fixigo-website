"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ArrowDownToLine, Star, ShieldCheck, MapPin, Sparkles, Percent, Wrench } from "lucide-react";
import Button from "../ui/Button";
import { useTheme } from "next-themes";
import { APP_CONFIG } from "@/config/app";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  // Entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  } as const;

  const floatingCardVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: delay,
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  } as const);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-grid-pattern">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full radial-glow dark:radial-glow-dark opacity-80" />
      <div className="absolute top-20 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-400/5" />
      <div className="absolute bottom-10 left-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-600/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >


            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              {APP_CONFIG.heroTitle.split(".").map((word, i, arr) => (
                <span key={word} className="block lg:inline">
                  {word}
                  {i < arr.length - 2 ? (
                    <span className="text-blue-600 dark:text-blue-500">. </span>
                  ) : i === arr.length - 2 ? (
                    <span className="text-[#1D58F6]">. </span>
                  ) : null}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {APP_CONFIG.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                variant="glow"
                size="lg"
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  // Toggle dark background theme
                  setTheme(theme === "dark" ? "light" : "dark");
                  
                  // Smooth scroll to target
                  setTimeout(() => {
                    document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                className="border-[3px] border-slate-950 rounded-full font-bold shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2.5px] hover:translate-y-[-2.5px] hover:shadow-[6px_6px_0px_0px_#000000] transition-all cursor-pointer bg-[#1D58F6] text-white hover:bg-[#1444c9] bg-none hover:from-transparent hover:to-transparent"
                icon={<ArrowDownToLine className="h-5 w-5" />}
              >
                Download Android App
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Phone Mockup Column */}
          <div className="lg:col-span-5 flex justify-center relative select-none">
            {/* Glowing circle and circuit tracer lines behind the phone */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-blue-500/10 border-2 border-blue-500/20 shadow-[0_0_50px_10px_rgba(29,88,246,0.15)] flex items-center justify-center pointer-events-none z-0">
              <svg className="absolute w-full h-full text-blue-500/35 pointer-events-none" viewBox="0 0 100 100">
                {/* Circuit paths */}
                <path d="M 0 50 L 30 50 L 50 30 L 80 30" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 20 20 L 40 20 L 50 30 L 50 70 L 60 80 L 100 80" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
                <path d="M 10 80 L 30 80 L 45 65 L 75 65 L 85 75 L 100 75" fill="none" stroke="currentColor" strokeWidth="0.8" />
                {/* Glowing node dots */}
                <circle cx="30" cy="50" r="1.5" className="fill-blue-400" />
                <circle cx="80" cy="30" r="1.5" className="fill-blue-400" />
                <circle cx="40" cy="20" r="1.5" className="fill-blue-400 animate-pulse" />
                <circle cx="60" cy="80" r="1.5" className="fill-blue-400" />
              </svg>
            </div>

            {/* Spotlight cone projections pointing upwards behind phone */}
            <div className="absolute bottom-0 left-[5%] w-[120px] h-[320px] bg-gradient-to-t from-blue-500/25 via-blue-500/5 to-transparent origin-bottom -rotate-[22deg] blur-md pointer-events-none z-0" />
            <div className="absolute bottom-0 right-[5%] w-[120px] h-[320px] bg-gradient-to-t from-blue-500/25 via-blue-500/5 to-transparent origin-bottom rotate-[22deg] blur-md pointer-events-none z-0" />

            <div className="relative w-[300px] h-[600px] sm:w-[320px] sm:h-[640px] z-10">
              {/* Glowing backlights behind phone */}
              <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 blur-xl animate-pulse" />

              {/* Phone Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 18 }}
                className="absolute inset-0 rounded-[48px] border-4 border-slate-900 bg-slate-900 p-3 shadow-2xl shadow-slate-950/40 overflow-hidden dark:border-slate-800 dark:bg-slate-800 animate-float"
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 h-6 w-24 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3">
                  <div className="h-2 w-2 rounded-full bg-slate-800" />
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-900/60" />
                </div>

                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[38px] bg-slate-950 overflow-hidden flex flex-col justify-between pt-8 pb-4 px-4 text-white">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] opacity-75 font-semibold z-20">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <div className="h-3 w-5 border border-white rounded-[3px] p-[1px] flex items-center">
                        <div className="h-full w-4 bg-white rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* App Dashboard UI Mockup inside Phone */}
                  <div className="flex-1 flex flex-col mt-4 gap-4 overflow-y-auto no-scrollbar text-left">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400">Welcome Back,</span>
                        <h4 className="text-xs font-bold text-slate-100">Kishor Kumar</h4>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold">
                        KK
                      </div>
                    </div>

                    {/* Booking Card */}
                    <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-3 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] text-slate-400">ACTIVE REQUEST</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/20">
                          ON THE WAY
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                          <Wrench className="h-4 w-4" />
                        </div>
                        <div>
                          <h5 className="text-[11px] font-semibold text-slate-200">AC Deep Maintenance</h5>
                          <p className="text-[9px] text-slate-400">Technician: Rajesh K.</p>
                        </div>
                      </div>
                    </div>

                    {/* Map Simulation */}
                    <div className="h-32 bg-slate-900 rounded-xl overflow-hidden relative border border-slate-800">
                      {/* Map Background grid */}
                      <div className="absolute inset-0 bg-slate-950 opacity-40 bg-grid-pattern" style={{ backgroundSize: "15px 15px" }} />
                      
                      {/* Pin */}
                      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50 animate-ping absolute" />
                        <div className="h-4 w-4 rounded-full bg-blue-600 border border-white flex items-center justify-center shadow-md relative z-10">
                          <MapPin className="h-2 w-2 text-white" />
                        </div>
                      </div>

                      {/* Destination Pin */}
                      <div className="absolute top-1/3 right-1/4 flex flex-col items-center">
                        <div className="h-3 w-3 rounded-full bg-emerald-500 border border-white flex items-center justify-center shadow-md relative z-10" />
                      </div>

                      {/* Connecting Line (Dotted SVG) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path
                          d="M 106 64 C 130 60, 160 50, 240 42"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                        />
                      </svg>

                      {/* Map overlay ETA card */}
                      <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 border border-slate-800 rounded-lg p-1.5 flex justify-between items-center">
                        <span className="text-[8px] text-slate-400">Rajesh's Live ETA:</span>
                        <span className="text-[9px] font-bold text-blue-400">12 Mins</span>
                      </div>
                    </div>

                    {/* Quick Warranty Vault Alert inside phone */}
                    <div className="bg-slate-900/60 border border-slate-800/40 rounded-xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-amber-900/20 border border-amber-500/20 flex items-center justify-center text-amber-450">
                          <ShieldCheck className="h-4 w-4 text-amber-500" />
                        </div>
                        <div>
                          <h6 className="text-[10px] font-semibold text-slate-200">Warranty Vault Update</h6>
                          <p className="text-[8px] text-slate-400">LG Fridge: Expires in 12 days</p>
                        </div>
                      </div>
                      <ArrowRight className="h-3 w-3 text-slate-500" />
                    </div>
                  </div>

                  {/* App Navigation bar at bottom of phone screen */}
                  <div className="h-10 border-t border-slate-900/80 pt-2 flex justify-around text-slate-500 text-[8px] font-medium z-20 bg-slate-950/80">
                    <div className="flex flex-col items-center text-blue-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mb-0.5" />
                      <span>Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-transparent mb-0.5" />
                      <span>Bookings</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-transparent mb-0.5" />
                      <span>Spares</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-transparent mb-0.5" />
                      <span>Vault</span>
                    </div>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="h-1 w-28 bg-white/40 rounded-full mx-auto mt-2 z-30" />
                </div>
              </motion.div>

              {/* Floating UI Elements Orbiting the phone */}
              {/* Card 1: Tracking Status */}
              <motion.div
                variants={floatingCardVariants(0.4)}
                initial="hidden"
                animate="visible"
                className="absolute -left-12 sm:-left-16 top-16 z-20 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 max-w-[170px]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                  <MapPin className="h-4.5 w-4.5 animate-bounce" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LIVE GPS</div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight">Tech En Route</div>
                </div>
              </motion.div>

              {/* Card 2: AI Diagnostic Support */}
              <motion.div
                variants={floatingCardVariants(0.6)}
                initial="hidden"
                animate="visible"
                className="absolute -right-12 sm:-right-16 top-1/2 z-20 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 max-w-[170px]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400 animate-pulse">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">AI ASSIST</div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight">Error dE Diagnosed</div>
                </div>
              </motion.div>

              {/* Card 3: Secure Warranty Vault */}
              <motion.div
                variants={floatingCardVariants(0.8)}
                initial="hidden"
                animate="visible"
                className="absolute -left-8 sm:-left-12 bottom-12 z-20 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 max-w-[180px]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">WARRANTY</div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight">90-Day Protected</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
