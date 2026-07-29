"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Zap, Lock, Truck, MessageSquareText, HelpCircle } from "lucide-react";
import { APP_CONFIG } from "@/config/app";

// Icon mapping based on keys in the configuration
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck,
  CreditCard,
  Zap,
  Lock,
  Truck,
  MessageSquareText,
};

export default function WhyChoose() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  } as const;

  return (
    <section id="why-choose-us" className="relative py-20 lg:py-28 bg-white dark:bg-slate-950">
      {/* Decorative separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">
            Fixigo Advantages
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built for Trust, Speed, and Reliability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We are redefining home maintenance from the ground up. Here is why thousands of homes in Bengaluru trust Fixigo for their hardware care.
          </p>
        </div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {APP_CONFIG.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || HelpCircle;

            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                className="group relative p-8 rounded-3xl border border-slate-200/60 bg-slate-50/50 hover:bg-white hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/[0.03] transition-all duration-300 dark:border-slate-800/60 dark:bg-slate-900/10 dark:hover:bg-slate-900/40 dark:hover:border-blue-500/15"
              >
                {/* Visual outline overlay on hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-500/10 transition-colors pointer-events-none" />

                {/* Icon box */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
