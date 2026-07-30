"use client";

import React from "react";
import { Wrench, Plug, Sparkles, ShieldCheck, FolderHeart, Check } from "lucide-react";
import { APP_CONFIG } from "@/config/app";

// Map configured string names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Wrench: Wrench,
  PlugZap: Plug,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  FolderHeart: FolderHeart,
};

// Rotation patterns for organic hand-drawn sketch aesthetic
const defaultRotations = [
  "rotate-[-1.5deg]",
  "rotate-[1deg]",
  "rotate-[-1deg]",
  "rotate-[1.5deg]",
  "rotate-[-1.5deg]",
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28 bg-white overflow-hidden">
      {/* Separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">



        {/* Clean Service Cards Grid (Removed trunk branch timeline completely) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {APP_CONFIG.services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const rotation = defaultRotations[index % defaultRotations.length];
            const isGold = service.badge === "Most Booked" || service.badge === "100% OEM Parts";

            return (
              <div
                key={service.id}
                className={`relative bg-white border-[2.5px] border-slate-950 p-7 rounded-[28px] ${rotation} hover:scale-[1.02] hover:rotate-[-0.5deg] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[300px] group`}
              >
                {/* Top header row: Icon and Badge */}
                <div className="flex justify-between items-start w-full mb-6">
                  {/* Icon Box */}
                  <div className="h-11 w-11 rounded-full bg-[#1D58F6] flex items-center justify-center text-white shadow-md shadow-blue-500/10 transition-transform duration-300 group-hover:scale-110 select-none">
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>

                  {/* Badge */}
                  {service.badge && (
                    <div className={`${
                      isGold ? "bg-[#EAB308]" : "bg-[#1D58F6]"
                    } text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] select-none`}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Core Text & Features */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-650 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2 mt-auto">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                          <Check className="h-4.5 w-4.5 text-[#1D58F6] shrink-0 stroke-[3]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
