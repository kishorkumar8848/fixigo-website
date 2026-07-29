"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { APP_CONFIG } from "@/config/app";
import { BookOpen, UserCheck, Navigation, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";

// Icon mapping based on step indices
const stepIcons = [
  BookOpen,      // Step 1: Book Service
  UserCheck,     // Step 2: Tech Assigned
  Navigation,    // Step 3: Track Live
  CheckCircle2,  // Step 4: Repair Done
  CreditCard,    // Step 5: Secure Payment
  ShieldCheck,   // Step 6: Warranty Vault
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position within this specific section to animate the connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="how-it-works" ref={containerRef} className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/10">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-[fit-content]">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">
              The Service Flow
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Zero-Friction Appliance Care
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Home appliance maintenance shouldn't feel like a chore. We have designed a stress-free process from diagnostics to completion, giving you total visibility and control.
            </p>
            <div className="mt-8 hidden lg:block">
              <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-400">
                <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
                <span>Real-Time Updates via App Notifications</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-8 relative pl-8 sm:pl-16">
            {/* Background connecting track line */}
            <div className="absolute top-4 bottom-4 left-[24px] sm:left-[36px] w-[2px] bg-slate-200 dark:bg-slate-800" />

            {/* Scroll-animated active track line overlay */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-4 bottom-4 left-[24px] sm:left-[36px] w-[2px] bg-gradient-to-b from-blue-600 via-[#1D58F6] to-blue-300"
            />

            {/* Steps list */}
            <div className="space-y-12">
              {APP_CONFIG.serviceSteps.map((step, index) => {
                const Icon = stepIcons[index];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative flex items-start gap-6 sm:gap-8 group"
                  >
                    {/* Circle Node */}
                    <div className="absolute -left-[44px] sm:-left-[56px] flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-100 border-4 border-white text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:border-slate-950 dark:text-slate-500 dark:group-hover:bg-blue-500 dark:group-hover:text-slate-950">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    {/* Step Card Content */}
                    <div className="flex-1 rounded-2xl border border-slate-200/50 bg-white/70 p-5 sm:p-6 shadow-sm backdrop-blur-md hover:shadow-md hover:border-slate-300 dark:border-slate-800/40 dark:bg-slate-900/40 dark:hover:border-slate-700 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                          STEP 0{index + 1}
                        </span>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
