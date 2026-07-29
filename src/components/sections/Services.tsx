"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Plug, Sparkles, ShieldCheck, Check } from "lucide-react";
import { APP_CONFIG } from "@/config/app";

// Map configured string names to robust Lucide components
const iconMap: Record<string, React.ComponentType<any>> = {
  Wrench: Wrench,
  PlugZap: Plug,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  FolderHeart: ShieldCheck,
};

// Vibrant designer color themes matching the Klikko pop style
const serviceThemes = [
  {
    borderHover: "hover:border-[#1D58F6]/90",
    iconBg: "bg-[#1D58F6]",
    badgeBg: "bg-blue-950/60 text-blue-300 border border-blue-800/30",
    bulletColor: "text-[#1D58F6]",
    nodeColor: "#1D58F6",
    glowColor: "rgba(29, 88, 246, 0.4)",
    rotation: "lg:-rotate-2",
  },
  {
    borderHover: "hover:border-[#EC4899]/90",
    iconBg: "bg-[#EC4899]",
    badgeBg: "bg-pink-950/60 text-pink-300 border border-pink-800/30",
    bulletColor: "text-[#EC4899]",
    nodeColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
    rotation: "lg:rotate-1.5",
  },
  {
    borderHover: "hover:border-[#10B981]/90",
    iconBg: "bg-[#10B981]",
    badgeBg: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/30",
    bulletColor: "text-[#10B981]",
    nodeColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    rotation: "lg:-rotate-1.5",
  },
  {
    borderHover: "hover:border-[#F59E0B]/90",
    iconBg: "bg-[#F59E0B]",
    badgeBg: "bg-amber-950/60 text-amber-300 border border-amber-800/30",
    bulletColor: "text-[#F59E0B]",
    nodeColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.4)",
    rotation: "lg:rotate-2",
  },
  {
    borderHover: "hover:border-[#8B5CF6]/90",
    iconBg: "bg-[#8B5CF6]",
    badgeBg: "bg-violet-950/60 text-violet-300 border border-violet-800/30",
    bulletColor: "text-[#8B5CF6]",
    nodeColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.4)",
    rotation: "lg:-rotate-1",
  },
];

// Custom decorator renderer to make containers look like appliance/repair elements
const renderContainerDecorations = (id: string, theme: any) => {
  switch (id) {
    case "repair": // Gear/Wheel shape
      return (
        <>
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-6 h-3 border-[3px] border-b-0 rounded-t-md bg-[#0c1624] z-0 transition-colors duration-300" style={{ borderColor: theme.nodeColor }} />
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-3 border-[3px] border-t-0 rounded-b-md bg-[#0c1624] z-0 transition-colors duration-300" style={{ borderColor: theme.nodeColor }} />
          <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-3 h-6 border-[3px] border-r-0 rounded-l-md bg-[#0c1624] z-0 transition-colors duration-300" style={{ borderColor: theme.nodeColor }} />
          <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-3 h-6 border-[3px] border-l-0 rounded-r-md bg-[#0c1624] z-0 transition-colors duration-300" style={{ borderColor: theme.nodeColor }} />
        </>
      );
    case "installation": // Washing Machine look
      return (
        <>
          <div className="absolute bottom-3 right-4 h-12 w-12 rounded-full border-[3px] bg-blue-950/20 flex items-center justify-center overflow-hidden z-0" style={{ borderColor: theme.nodeColor }}>
            <div className="absolute w-8 h-8 rounded-full border border-dashed animate-spin opacity-30" style={{ borderColor: theme.nodeColor, animationDuration: "12s" }} />
            <div className="h-3 w-5 bg-blue-500/10 rounded-full blur-sm" />
          </div>
          <div className="absolute top-3 right-5 flex items-center gap-1 opacity-50 z-0">
            <div className="w-4 h-1.5 border border-[#0c1624] rounded-sm bg-slate-800" />
            <div className="w-1.5 h-1.5 rounded-full border border-[#0c1624] bg-slate-500" />
          </div>
        </>
      );
    case "maintenance": // Air Conditioner look
      return (
        <>
          <div className="absolute bottom-3 right-4 flex flex-col gap-0.5 w-12 items-end opacity-50 z-0">
            <div className="w-full h-0.5 rounded-sm" style={{ backgroundColor: theme.nodeColor }} />
            <div className="w-[80%] h-0.5 rounded-sm" style={{ backgroundColor: theme.nodeColor }} />
            <div className="w-[60%] h-0.5 rounded-sm" style={{ backgroundColor: theme.nodeColor }} />
          </div>
          <div className="absolute top-3 right-5 rounded px-1 py-0.5 bg-black text-[7px] font-mono text-emerald-400 border border-slate-800 select-none z-0">
            16°C
          </div>
        </>
      );
    case "spares": // Toolbox shape
      return (
        <>
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-12 h-3.5 border-[3px] border-b-0 rounded-t-md bg-[#0c1624] z-20" style={{ borderColor: theme.nodeColor }} />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-3.5 border-[3px] rounded bg-[#F59E0B] z-20 shadow-sm" style={{ borderColor: theme.nodeColor }} />
        </>
      );
    case "warranty": // Safe/Vault Door look
      return (
        <>
          <div className="absolute bottom-3 right-4 h-12 w-12 rounded-full border-[3px] bg-[#0c1624] flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] z-10" style={{ borderColor: theme.nodeColor }}>
            <div className="absolute w-[1.5px] h-8" style={{ backgroundColor: theme.nodeColor }} />
            <div className="absolute w-8 h-[1.5px]" style={{ backgroundColor: theme.nodeColor }} />
            <div className="h-4.5 w-4.5 rounded-full border-2 bg-slate-900" style={{ borderColor: theme.nodeColor }} />
          </div>
        </>
      );
    default:
      return null;
  }
};

export default function Services() {
  const cardVariants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? -30 : 30,
      y: 15,
      scale: 0.98,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 85, damping: 14 },
    },
  } as const;

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-slate-100 dark:bg-slate-950 overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-widest text-[#1D58F6] bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-200/40 dark:border-blue-800/40"
          >
            Core Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white mt-4"
          >
            All-In-One Smart Appliance Care
          </motion.h2>
        </div>

        {/* Tree Branching Container */}
        <div className="relative mt-12 max-w-4xl mx-auto pl-8 pr-4 lg:px-0">

          {/* Central Trunk Line (Thick black/slate outlines) */}
          <div className="absolute left-[24px] lg:left-1/2 top-0 bottom-0 w-[4px] bg-slate-900 dark:bg-slate-850 -translate-x-1/2" />

          {/* Dynamic Service Branches */}
          <div className="relative z-10 space-y-10 lg:space-y-0">
            {APP_CONFIG.services.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Wrench;
              const isEven = index % 2 === 0;
              const theme = serviceThemes[index % serviceThemes.length];

              return (
                <div
                  key={service.id}
                  className="relative flex flex-col lg:flex-row items-center lg:py-6 first:pt-0 last:pb-0 group"
                >
                  {/* Central Branch Node on trunk */}
                  <div className="absolute left-[24px] lg:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                    <div
                      className="h-5.5 w-5.5 rounded-full border-[3px] border-slate-900 dark:border-slate-850 flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] transition-transform duration-300 group-hover:scale-125"
                      style={{
                        backgroundColor: theme.nodeColor,
                      }}
                    />
                  </div>

                  {/* Branch lines connecting card to trunk (Very close/compact spacing) */}
                  {/* Mobile connector line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-[24px] w-4 h-[3px] top-1/2 -translate-y-1/2 lg:hidden z-0"
                    style={{ backgroundColor: theme.nodeColor, originX: 0 }}
                  />

                  {/* Even Index (Card on the Left) */}
                  {isEven ? (
                    <>
                      <div className="w-full lg:w-1/2 flex justify-start lg:justify-end pl-10 lg:pl-0 lg:pr-6 relative z-10">
                        {/* Desktop connector line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          className="absolute right-0 top-1/2 h-[3.5px] origin-right hidden lg:block z-0"
                          style={{ backgroundColor: theme.nodeColor, width: "24px" }}
                        />

                        <motion.div
                          custom={isEven}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          className={`group relative flex flex-col justify-between p-6 pt-8 pb-7 rounded-[24px] border-[3px] bg-[#0c1624] text-white transition-all duration-300 shadow-[5px_5px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000000] ${theme.rotation} hover:rotate-0 overflow-visible w-full max-w-[380px]`}
                          style={{ borderColor: theme.nodeColor }}
                        >
                          {renderContainerDecorations(service.id, theme)}

                          <div
                            className="absolute -top-5 left-5 h-10 w-10 rounded-full border-[3px] border-slate-900 flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#000000] transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: theme.nodeColor }}
                          >
                            <IconComponent className="h-4.5 w-4.5" />
                          </div>

                          <div className="relative z-10">
                            <div className="flex justify-between items-center mb-3">
                              <span className={`text-[8px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${theme.badgeBg}`}>
                                {service.badge}
                              </span>
                            </div>

                            <h3 className="text-lg font-extrabold text-white transition-colors duration-200">
                              {service.title}
                            </h3>

                            <ul className="mt-4 space-y-1.5 max-w-[85%]">
                              {service.features?.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                                  <Check className={`h-4 w-4 shrink-0 ${theme.bulletColor}`} strokeWidth={3} />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </div>
                      <div className="hidden lg:block w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block w-1/2" />
                      <div className="w-full lg:w-1/2 flex justify-start pl-10 lg:pl-6 relative z-10">
                        {/* Desktop connector line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          className="absolute left-0 top-1/2 h-[3.5px] origin-left hidden lg:block z-0"
                          style={{ backgroundColor: theme.nodeColor, width: "24px" }}
                        />

                        <motion.div
                          custom={isEven}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          className={`group relative flex flex-col justify-between p-6 pt-8 pb-7 rounded-[24px] border-[3px] bg-[#0c1624] text-white transition-all duration-300 shadow-[5px_5px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000000] ${theme.rotation} hover:rotate-0 overflow-visible w-full max-w-[380px]`}
                          style={{ borderColor: theme.nodeColor }}
                        >
                          {renderContainerDecorations(service.id, theme)}

                          <div
                            className="absolute -top-5 left-5 h-10 w-10 rounded-full border-[3px] border-slate-900 flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#000000] transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: theme.nodeColor }}
                          >
                            <IconComponent className="h-4.5 w-4.5" />
                          </div>

                          <div className="relative z-10">
                            <div className="flex justify-between items-center mb-3">
                              <span className={`text-[8px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${theme.badgeBg}`}>
                                {service.badge}
                              </span>
                            </div>

                            <h3 className="text-lg font-extrabold text-white transition-colors duration-200">
                              {service.title}
                            </h3>

                            <ul className="mt-4 space-y-1.5 max-w-[85%]">
                              {service.features?.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                                  <Check className={`h-4 w-4 shrink-0 ${theme.bulletColor}`} strokeWidth={3} />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
