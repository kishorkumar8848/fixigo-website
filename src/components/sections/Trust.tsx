"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { APP_CONFIG } from "@/config/app";

interface StatProps {
  value: number;
  label: string;
  suffix: string;
}

function StatCard({ value, label, suffix }: StatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-slate-200/50 bg-white/50 dark:border-slate-800/40 dark:bg-slate-900/40 backdrop-blur-md hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 text-center"
    >
      <dt className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1D58F6] to-blue-500 dark:from-blue-400 dark:to-blue-600">
        <span>{displayValue.toLocaleString()}</span>
        <span>{suffix}</span>
      </dt>
      <dd className="mt-2 text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
        {label}
      </dd>
    </div>
  );
}

export default function Trust() {
  return (
    <section className="relative py-12 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8"
        >
          {APP_CONFIG.stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
