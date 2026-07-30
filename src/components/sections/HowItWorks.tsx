"use client";

import React from "react";

const CalendarIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#000000" strokeWidth="2.5">
    <rect x="25" y="25" width="50" height="50" rx="6" fill="white" strokeWidth="3" />
    <line x1="38" y1="20" x2="38" y2="30" strokeWidth="3" strokeLinecap="round" />
    <line x1="62" y1="20" x2="62" y2="30" strokeWidth="3" strokeLinecap="round" />
    <line x1="25" y1="42" x2="75" y2="42" strokeWidth="2.5" />
    <circle cx="38" cy="54" r="3" fill="#1D58F6" stroke="none" />
    <circle cx="50" cy="54" r="3" fill="#1D58F6" stroke="none" />
    <circle cx="62" cy="54" r="3" fill="#1D58F6" stroke="none" />
    <circle cx="38" cy="64" r="3" fill="#1D58F6" stroke="none" />
    <circle cx="68" cy="68" r="16" fill="white" strokeWidth="3" />
    <polyline points="68 60 68 68 74 68" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const TechnicianIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#000000" strokeWidth="2.5">
    <circle cx="50" cy="40" r="16" fill="white" strokeWidth="3" />
    <path d="M 28 72 C 28 60, 36 56, 50 56 C 64 56, 72 60, 72 72" fill="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M 33 34 C 33 24, 67 24, 67 34" fill="#1D58F6" strokeWidth="3" />
    <path d="M 64 34 Q 74 34, 72 39" strokeWidth="3" />
    <circle cx="70" cy="62" r="12" fill="#FDE047" strokeWidth="2.5" />
    <path d="m65 62 3 3 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#000000" strokeWidth="2.5">
    <path d="M 20 30 L 40 22 L 60 30 L 80 22 L 80 74 L 60 82 L 40 74 L 20 82 Z" fill="white" strokeWidth="3" strokeLinejoin="round" />
    <line x1="40" y1="22" x2="40" y2="74" strokeWidth="2.5" strokeDasharray="3,3" />
    <line x1="60" y1="30" x2="60" y2="82" strokeWidth="2.5" strokeDasharray="3,3" />
    <g transform="translate(10, 5)">
      <path d="M 50 18 C 42 18, 36 24, 36 32 C 36 42, 50 56, 50 56 C 50 56, 64 42, 64 32 C 64 24, 58 18, 50 18 Z" fill="#1D58F6" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="50" cy="31" r="5" fill="white" stroke="none" />
    </g>
  </svg>
);

const RepairIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#000000" strokeWidth="2.5">
    <circle cx="50" cy="50" r="16" fill="white" strokeWidth="3" />
    <path d="M 50 24 L 50 30 M 50 70 L 50 76 M 24 50 L 30 50 M 70 50 L 76 50 M 32 32 L 36 36 M 64 64 L 68 68 M 32 64 L 36 60 M 64 32 L 68 36" strokeWidth="3" strokeLinecap="round" />
    <g transform="rotate(45 50 50)">
      <rect x="46" y="24" width="8" height="52" rx="3" fill="#FDE047" strokeWidth="2.5" />
      <path d="M 42 28 C 42 22, 58 22, 58 28 L 54 32 L 46 32 Z" fill="white" strokeWidth="2.5" />
    </g>
  </svg>
);

const PaymentIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#000000" strokeWidth="2.5">
    <rect x="22" y="32" width="56" height="38" rx="6" fill="white" strokeWidth="3" />
    <rect x="22" y="40" width="56" height="8" fill="#000000" stroke="none" />
    <rect x="30" y="54" width="16" height="8" rx="1" fill="#E2E8F0" strokeWidth="2" />
    <path d="M 68 50 C 68 50, 80 50, 80 58 C 80 68, 68 74, 68 74 C 68 74, 56 68, 56 58 C 56 50, 68 50, 68 50 Z" fill="#FDE047" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="m64 61 3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const WarrantyIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#000000" strokeWidth="2.5">
    <circle cx="50" cy="45" r="22" fill="white" strokeWidth="3" />
    <path d="M 40 64 L 32 84 L 46 80 L 50 67 Z" fill="#FDE047" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 60 64 L 68 84 L 54 80 L 50 67 Z" fill="#FDE047" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="50" cy="45" r="16" strokeWidth="1.5" strokeDasharray="3,3" />
    <text x="50" y="44" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1D58F6" textAnchor="middle">90</text>
    <text x="50" y="52" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#000000" textAnchor="middle">DAYS</text>
  </svg>
);

const SparkleMarks = ({ className = "" }: { className?: string }) => (
  <svg className={`text-[#1D58F6] ${className}`} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="4" y1="20" x2="2" y2="22" />
    <line x1="12" y1="14" x2="8" y2="12" />
    <line x1="20" y1="10" x2="17" y2="6" />
  </svg>
);

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent?: "yellow-blob" | "yellow-sparkle";
  arrowType?: "right" | "left" | "loop";
}

const getWobbleStyle = (num: string) => {
  const styles: Record<string, string> = {
    "01": "255px 15px 225px 15px/15px 225px 15px 255px",
    "02": "15px 225px 15px 255px/255px 15px 225px 15px",
    "03": "220px 20px 240px 18px/18px 240px 20px 220px",
    "04": "20px 250px 15px 230px/230px 15px 250px 20px",
    "05": "250px 15px 230px 20px/20px 230px 15px 250px",
    "06": "15px 250px 20px 230px/250px 20px 230px 15px",
  };
  return styles[num] || "28px";
};

const StepCard = ({ number, title, description, icon, accent, arrowType }: StepCardProps) => (
  <div className="relative">
    {accent === "yellow-blob" && (
      <div 
        className="absolute -top-4 -left-4 w-16 h-16 bg-[#FDE047] opacity-80 -z-10 animate-pulse" 
        style={{ borderRadius: "50% 30% 60% 40% / 50% 60% 30% 40%" }}
      />
    )}
    {accent === "yellow-sparkle" && (
      <svg className="absolute -bottom-2 -right-2 w-8 h-8 text-[#FDE047] z-20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5Z" />
        <path d="M20 2L20.8 5.2L24 6L20.8 6.8L20 10L19.2 6.8L16 6L19.2 5.2Z" opacity="0.7" />
      </svg>
    )}
    <div 
      className="relative bg-white border-[2.5px] border-slate-950 p-6 flex flex-col items-center justify-between min-h-[260px] shadow-sm transition-transform duration-300 hover:scale-[1.02]"
      style={{ borderRadius: getWobbleStyle(number) }}
    >
      <div className="absolute -top-3.5 -left-3.5 h-8 w-8 bg-[#1D58F6] text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-slate-950 select-none shadow-sm">
        {number}
      </div>
      <div className="flex-1 flex items-center justify-center select-none pt-2">
        {icon}
      </div>
      <div className="w-full text-center">
        <div className="inline-block bg-[#1D58F6] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-md mb-3 select-none">
          {title}
        </div>
        <p className="text-[13px] font-medium text-slate-700 leading-relaxed text-center max-w-[210px] mx-auto">
          {description}
        </p>
      </div>
    </div>

    {/* Responsive connector arrows for desktop */}
    {arrowType === "right" && (
      <div className="hidden md:block absolute top-[45%] -right-12 w-12 h-8 z-20 pointer-events-none">
        <svg className="w-full h-full text-slate-950 animate-pulse" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 2 16 Q 24 6, 46 16" />
          <path d="M 40 10 L 46 16 L 40 22" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="2" cy="16" r="3" fill="currentColor" stroke="none" />
        </svg>
      </div>
    )}

    {arrowType === "left" && (
      <div className="hidden md:block absolute top-[45%] -left-12 w-12 h-8 z-20 pointer-events-none">
        <svg className="w-full h-full text-slate-950 animate-pulse" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 46 16 Q 24 6, 2 16" />
          <path d="M 8 10 L 2 16 L 8 22" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="46" cy="16" r="3" fill="currentColor" stroke="none" />
        </svg>
      </div>
    )}

    {arrowType === "loop" && (
      <div className="hidden md:block absolute top-[45%] right-0 w-8 h-[305px] translate-x-full z-20 pointer-events-none">
        <svg className="w-full h-full text-slate-950 animate-pulse" viewBox="0 0 32 305" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 2 16 C 28 16, 28 40, 28 80 L 28 230 C 28 270, 28 289, 2 289" />
          <path d="M 8 283 L 2 289 L 8 295" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="2" cy="16" r="3" fill="currentColor" stroke="none" />
        </svg>
      </div>
    )}
  </div>
);

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div className="text-left">
              {/* Sparkle marks above headline */}
              <SparkleMarks className="w-10 h-6 mb-2" />

              <h2 className="font-handwritten text-5xl sm:text-6xl font-bold leading-[1.15] tracking-tight">
                <span className="text-slate-900">Fixing things,</span><br />
                <span className="relative inline-block text-[#1D58F6]">
                  the right way.
                  <svg className="absolute -bottom-1 left-0 w-full h-4 text-[#1D58F6]" viewBox="0 0 200 12" fill="none">
                    <path d="M2 9 C 60 3, 140 3, 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="mt-6 text-base text-slate-600 leading-relaxed max-w-sm">
                We&apos;ve simplified appliance care into a smooth, transparent journey.
              </p>

              <div className="relative mt-8 select-none hidden lg:block">
                <span className="font-handwritten text-[#1D58F6] text-2xl font-bold leading-tight inline-block rotate-[-4deg]">
                  It&apos;s as easy<br />as 1–2–3–6!
                </span>
                <svg className="absolute top-1 left-32 w-20 h-14 text-[#1D58F6]" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 5 5 C 20 5, 35 20, 50 30 C 58 36, 68 40, 72 32" />
                  <polyline points="66 30 73 32 70 39" />
                </svg>
              </div>
            </div>

            {/* Dark notification blob */}
            <div 
              className="relative p-7 bg-slate-950 text-white flex flex-col items-start gap-5 shadow-lg max-w-sm mx-auto lg:mx-0 overflow-hidden border-2 border-slate-900"
              style={{ borderRadius: "50px 30px 45px 35px / 35px 45px 30px 50px" }}
            >
              {/* Yellow accent curves on top-left of the wobbly blob */}
              <div className="absolute top-2 left-2 text-[#FDE047] pointer-events-none">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M 6 30 C 6 16, 16 6, 30 6" />
                </svg>
              </div>
              
              <div className="text-left relative z-10 pt-4">
                <h4 className="font-handwritten text-2xl font-bold tracking-tight leading-snug">
                  Real-time updates,<br />
                  <span className="text-[#60A5FA]">zero guesswork.</span>
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Get instant notifications at every step so you&apos;re never left wondering.
                </p>
              </div>

              {/* Phone mockup */}
              <div className="w-full flex justify-center select-none relative z-10">
                <div className="relative w-40 h-48 bg-slate-900 border-[3px] border-slate-700 rounded-t-[24px] overflow-hidden p-2 flex flex-col gap-2">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-3 bg-slate-950 rounded-full" />
                  <div className="mt-3 self-start bg-slate-800 border border-slate-700 px-2.5 py-1.5 rounded-xl rounded-bl-sm max-w-[90%] text-[8px] text-slate-200 relative">
                    <div className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-[#FDE047] rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-2 w-2 text-slate-950" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </div>
                    AC Maintenance booked! Tech arriving in 15 mins.
                  </div>
                  <div className="self-end bg-[#1D58F6] px-2.5 py-1.5 rounded-xl rounded-br-sm max-w-[90%] text-[8px] text-white">
                    Awesome, thank you!
                  </div>
                  <div className="self-start bg-slate-800 border border-slate-700 px-2.5 py-1.5 rounded-xl rounded-bl-sm max-w-[90%] text-[8px] text-slate-200">
                    Repair complete. 90-day warranty activated.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step Cards Grid */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-14 relative z-10">
              <StepCard
                number="01"
                title="BOOK SERVICE"
                description="Select your appliance, tell us the issue, and pick a time that works best for you."
                icon={<CalendarIcon />}
                accent="yellow-blob"
                arrowType="right"
              />
              <StepCard
                number="02"
                title="TECHNICIAN ASSIGNED"
                description="We match you with a trusted, verified technician from your local neighborhood."
                icon={<TechnicianIcon />}
                arrowType="right"
              />
              <StepCard
                number="03"
                title="TRACK LIVE LOCATION"
                description="Track your technician in real-time on our live map and know exactly when they'll arrive."
                icon={<LocationIcon />}
                accent="yellow-sparkle"
                arrowType="loop"
              />
              <StepCard
                number="04"
                title="REPAIR COMPLETED"
                description="Your appliance is fixed using quality parts and a 25-point safety check."
                icon={<RepairIcon />}
              />
              <StepCard
                number="05"
                title="SECURE PAYMENT"
                description="Pay securely via cards, UPI, or net banking. Get a digital invoice instantly."
                icon={<PaymentIcon />}
                arrowType="left"
              />
              <StepCard
                number="06"
                title="WARRANTY ACTIVATED"
                description="Relax! Your service is covered with a 90-day warranty on parts and labor."
                icon={<WarrantyIcon />}
                arrowType="left"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
