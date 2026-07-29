"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, QrCode, Sparkles, Smartphone, CheckCircle } from "lucide-react";
import { APP_CONFIG } from "@/config/app";
import Button from "../ui/Button";

export default function Download() {
  return (
    <section id="download" className="relative py-20 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Decorative separators */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main High-Conversion Box */}
        <div className="relative rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-950 to-blue-950 px-8 py-16 shadow-2xl overflow-hidden text-white border border-slate-800 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Glowing vector grids in background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" style={{ backgroundSize: "30px 30px" }} />
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

          {/* Left: Large phone mockup */}
          <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="relative w-[260px] h-[520px] sm:w-[285px] sm:h-[570px] border-4 border-slate-800 bg-slate-900 rounded-[44px] p-2.5 shadow-2xl animate-float"
            >
              {/* Screen notches */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-5 w-20 bg-slate-950 rounded-full z-20" />
              
              {/* Inner screen content */}
              <div className="w-full h-full bg-slate-950 rounded-[35px] overflow-hidden flex flex-col justify-between p-4 pt-6 text-slate-300">
                
                {/* Header */}
                <div className="flex justify-between items-center text-[8px] tracking-wider text-slate-500 font-bold border-b border-slate-900 pb-2">
                  <span>FIXIGO PLATFORM</span>
                  <span className="text-blue-400">ONLINE</span>
                </div>

                {/* Main panel */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-4 py-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-[#1D58F6] to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">Appliance Care Made Simple</h4>
                    <p className="text-[9px] text-slate-400 mt-1 max-w-[180px]">Version 1.0.4-release is fully optimized for your device.</p>
                  </div>

                  {/* Bullet checklist inside mockup */}
                  <div className="space-y-1.5 text-left w-full max-w-[180px] bg-slate-900/60 p-3 rounded-xl border border-slate-905">
                    {[
                      "90-Day Warranty Guard",
                      "Live GPS Tracker Map",
                      "Smart Diagnostics Assist",
                      "Secure UPI Checkout",
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[8px] font-semibold text-slate-300">
                        <CheckCircle className="h-3 w-3 text-[#1D58F6] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer bar */}
                <div className="h-8 flex justify-center items-center text-[7px] text-slate-500 font-bold border-t border-slate-900">
                  <span>FIXIGO TECHNOLOGIES © 2026</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Download Info Column */}
          <div className="w-full lg:w-7/12 text-center lg:text-left order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get the App Today</span>
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Download Fixigo Today
            </h2>
            <p className="mt-4 text-base text-slate-350 leading-relaxed max-w-xl">
              Take complete control over your home hardware lifecycle. Enjoy transparent flat-rate pricing, track local mechanics live, vault warranty slips securely, and sell old appliances with a tap.
            </p>

            {/* Action Grid (Download button + QR Code side-by-side) */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              
              {/* Primary Download Button */}
              <div className="flex flex-col items-center sm:items-start gap-3">
                <Button
                  variant="glow"
                  size="lg"
                  href={APP_CONFIG.downloadUrl}
                  className="font-bold py-4 px-8 w-full sm:w-auto"
                  icon={<ArrowDownToLine className="h-5 w-5 animate-pulse" />}
                >
                  Download APK
                </Button>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wide">
                  Compatible with Android 8.0+ | Size: 18.4 MB
                </span>
              </div>

              {/* Programmatic Vector QR Code Card */}
              <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
                {/* Simulated QR Code SVG */}
                <div className="h-16 w-16 bg-white p-1 rounded-lg shrink-0 flex items-center justify-center">
                  <QrCode className="h-14 w-14 text-slate-950" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-100">Scan to Download</h4>
                  <p className="text-[9px] text-slate-400 leading-normal mt-0.5 max-w-[120px]">
                    Point your camera at this QR code to download the APK instantly.
                  </p>
                </div>
              </div>

            </div>

            {/* Future Badges (Google Play + Apple App Store) */}
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Platform Store Access:
              </span>
              
              <div className="flex gap-3">
                {/* Mock Play Store Badge */}
                <div className="relative group cursor-not-allowed">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-slate-400 select-none">
                    {/* Tiny Play store icon vector */}
                    <svg className="h-4.5 w-4.5 fill-current text-slate-500" viewBox="0 0 24 24">
                      <path d="M5,3.03C4.83,3.03 4.67,3.09 4.54,3.22L13.56,12.24L4.54,21.26C4.67,21.39 4.83,21.45 5,21.45C5.22,21.45 5.43,21.37 5.61,21.24L18.46,13.84C19.06,13.49 19.5,12.89 19.5,12.24C19.5,11.59 19.06,10.99 18.46,10.64L5.61,3.24C5.43,3.11 5.22,3.03 5,3.03M4,3.75V20.73L12.47,12.24L4,3.75Z" />
                    </svg>
                    <div className="text-left leading-none">
                      <p className="text-[7px] text-slate-500 uppercase tracking-widest font-semibold">GET IT ON</p>
                      <p className="text-xs font-bold text-slate-400 mt-0.5">Google Play</p>
                    </div>
                  </div>
                  <div className="absolute -top-3 right-2 rounded bg-blue-600 text-slate-950 font-extrabold text-[8px] px-1.5 py-0.5 shadow uppercase tracking-wide">
                    Coming Soon
                  </div>
                </div>

                {/* Mock App Store Badge */}
                <div className="relative group cursor-not-allowed">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-slate-400 select-none">
                    {/* Tiny Apple logo vector */}
                    <svg className="h-4.5 w-4.5 fill-current text-slate-500" viewBox="0 0 24 24">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                    </svg>
                    <div className="text-left leading-none">
                      <p className="text-[7px] text-slate-500 uppercase tracking-widest font-semibold">Download on the</p>
                      <p className="text-xs font-bold text-slate-400 mt-0.5">App Store</p>
                    </div>
                  </div>
                  <div className="absolute -top-3 right-2 rounded bg-[#1D58F6] text-white font-extrabold text-[8px] px-1.5 py-0.5 shadow uppercase tracking-wide">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
