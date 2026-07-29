"use client";

import React from "react";
import { motion } from "framer-motion";
import { APP_CONFIG } from "@/config/app";
import Accordion from "../ui/Accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <section id="faqs" className="relative py-20 lg:py-28 bg-white dark:bg-slate-950">
      {/* Separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Questions? We have answers.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Can't find the answers you're looking for? Reach out directly to our customer success team at{" "}
              <a
                href={`mailto:${APP_CONFIG.contact.email}`}
                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-355 underline"
              >
                {APP_CONFIG.contact.email}
              </a>
              .
            </p>
            
            <div className="mt-8 hidden lg:flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/50 dark:bg-slate-900/40 dark:border-slate-800/60">
              <HelpCircle className="h-5 w-5 text-blue-500 shrink-0" />
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Avg. response time on email support is less than 15 minutes.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200/60 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/60 dark:bg-slate-900/10 backdrop-blur-md"
            >
              <Accordion items={APP_CONFIG.faqs} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
