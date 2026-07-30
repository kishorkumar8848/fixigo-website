"use client";

import React, { useState } from "react";
import Image from "next/image";
import { APP_CONFIG } from "@/config/app";
import Accordion from "../ui/Accordion";
import {
  MessageSquare,
  Wrench,
  CreditCard,
  Shield,
  User,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  general: <MessageSquare className="h-4 w-4" />,
  services: <Wrench className="h-4 w-4" />,
  booking: <CreditCard className="h-4 w-4" />,
  warranty: <Shield className="h-4 w-4" />,
  account: <User className="h-4 w-4" />,
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");

  const filteredFaqs = APP_CONFIG.faqs.filter(
    (faq) => faq.category === activeCategory
  );

  return (
    <section id="faqs" className="relative bg-white">
      {/* FAQ Hero */}
      <div className="pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Heading */}
            <div className="text-left">
              <div className="relative inline-flex items-center select-none mb-4">
                <svg className="absolute -left-7 -top-3 w-6 h-6 text-[#1D58F6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="4" y1="18" x2="2" y2="20" />
                  <line x1="8" y1="14" x2="4" y2="12" />
                  <line x1="12" y1="12" x2="9" y2="8" />
                </svg>
                <span className="font-handwritten text-[#1D58F6] text-base sm:text-lg font-bold tracking-wide uppercase italic pl-1">
                  GOT QUESTIONS?
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                We&apos;ve got{" "}
                <span className="relative inline-block font-handwritten text-[#1D58F6] font-bold text-6xl sm:text-7xl not-italic">
                  answers.
                  <svg className="absolute -bottom-1 left-0 w-full h-4 text-[#1D58F6]" viewBox="0 0 200 12" fill="none">
                    <path d="M2 9 C 50 3, 150 3, 198 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="mt-6 text-base text-slate-600 max-w-md leading-relaxed">
                Everything you need to know about Fixigo and how we make appliance care simple and worry-free.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="flex justify-center items-center">
              <Image
                src="/Screenshot 2026-07-30 091732.png"
                alt="FAQ Illustration - Person thinking about appliance care"
                width={900}
                height={600}
                className="w-full h-auto max-w-2xl select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content Area */}
      <div className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Category Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {APP_CONFIG.faqCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#1D58F6] text-white shadow-md shadow-blue-500/20"
                        : "bg-white text-slate-800 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={isActive ? "text-white" : "text-slate-400"}>
                      {categoryIcons[cat.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Accordion List */}
            <div className="lg:col-span-8">
              <Accordion
                key={activeCategory}
                items={filteredFaqs}
                defaultOpen={0}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
