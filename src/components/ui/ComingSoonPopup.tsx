"use client";

import React from "react";
import Image from "next/image";
import { X, Bell, Shield, MapPin, Award } from "lucide-react";

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonPopup({ isOpen, onClose }: ComingSoonPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4 transform animate-slideUp relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-slate-600" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-[#1D58F6] flex items-center justify-center">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3L4 14h7l-1 8 9-11h-7l1-8z" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                <span className="text-slate-900">Fix</span>
                <span className="text-[#1D58F6]">igo</span>
              </span>
            </div>

            {/* Decorative element */}
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-[#1D58F6]" viewBox="0 0 32 32" fill="none">
                <path d="M4 16 L8 12 L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20 L16 16 L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-handwritten text-[#1D58F6] text-base font-bold italic">
                Great things take time!
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
              The <span className="text-[#1D58F6]">Fixigo</span> App<br />
              <span className="relative inline-block">
                is Coming Soon!
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9 C 50 3, 150 3, 198 7" stroke="#1D58F6" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              We&apos;re working hard to bring you the best experience for appliance care. Stay tuned!
            </p>

            {/* Notify section */}
            <div className="bg-blue-50 rounded-2xl p-4 mb-5 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1D58F6] flex items-center justify-center">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">Be the first to know!</h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Get notified when the app launches on Google Play.
                  </p>
                  <button className="px-4 py-2 bg-[#1D58F6] hover:bg-[#1647D8] text-white rounded-full font-semibold text-xs transition-colors flex items-center gap-2">
                    <span>Notify Me</span>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-9 h-9 mx-auto mb-1.5 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-[#1D58F6]" />
                </div>
                <p className="text-xs font-semibold text-slate-700">Trusted</p>
                <p className="text-[10px] text-slate-500">Technicians</p>
              </div>
              <div className="text-center">
                <div className="w-9 h-9 mx-auto mb-1.5 rounded-lg bg-blue-50 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-[#1D58F6]" />
                </div>
                <p className="text-xs font-semibold text-slate-700">Live</p>
                <p className="text-[10px] text-slate-500">Tracking</p>
              </div>
              <div className="text-center">
                <div className="w-9 h-9 mx-auto mb-1.5 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Award className="h-4 w-4 text-[#1D58F6]" />
                </div>
                <p className="text-xs font-semibold text-slate-700">90-Day</p>
                <p className="text-[10px] text-slate-500">Warranty</p>
              </div>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex items-center justify-center relative py-6 lg:py-0">
            {/* Decorative elements - hidden on mobile */}
            <svg className="hidden lg:block absolute top-8 right-12 w-10 h-10 text-[#1D58F6] opacity-20" viewBox="0 0 48 48">
              <path d="M24 4 L28 20 L44 24 L28 28 L24 44 L20 28 L4 24 L20 20 Z" fill="currentColor"/>
            </svg>
            <svg className="hidden lg:block absolute bottom-20 left-8 w-8 h-8 text-[#1D58F6] opacity-30" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M16 8 L20 16 L16 24 L12 16 Z" fill="currentColor"/>
            </svg>
            <div className="hidden lg:block absolute bottom-4 right-4">
              <svg className="w-16 h-12 text-[#1D58F6]" viewBox="0 0 80 64" fill="none">
                <path d="M2 32 Q 20 20, 40 32 T 78 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Phone Frame - smaller on mobile */}
            <div className="relative w-56 h-[450px] lg:w-64 lg:h-[520px] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl z-10"></div>
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-6 relative">
                {/* App Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#1D58F6] flex items-center justify-center mb-3 shadow-lg">
                  <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3L4 14h7l-1 8 9-11h-7l1-8z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-1">Fixigo</h3>
                
                {/* Coming Soon Badge */}
                <div className="relative mb-4">
                  <svg className="absolute -left-5 -top-2 w-5 h-5 text-[#1D58F6]" viewBox="0 0 24 24">
                    <path d="M4 8 L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12 L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <svg className="absolute -right-5 -top-2 w-5 h-5 text-[#1D58F6]" viewBox="0 0 24 24">
                    <path d="M20 8 L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 12 L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-handwritten text-[#1D58F6] text-xl font-bold italic">
                    Coming Soon!
                  </span>
                </div>

                <p className="text-center text-xs text-slate-600 mb-4 max-w-[160px]">
                  Better. Faster. Smarter.<br />
                  Just for you.
                </p>

                {/* Illustration */}
                <div className="relative">
                  <div className="w-40 h-24 bg-blue-50 rounded-xl flex items-end justify-center overflow-hidden">
                    <div className="w-28 h-20 bg-[#1D58F6] rounded-t-3xl flex items-center justify-center mb-0">
                      <div className="text-white font-bold text-center">
                        <div className="text-xs">STAY</div>
                        <div className="text-base">TUNED!</div>
                      </div>
                    </div>
                  </div>
                  {/* Plant decoration */}
                  <div className="absolute -right-3 bottom-1">
                    <div className="w-10 h-12 relative">
                      <div className="absolute bottom-0 w-7 h-5 bg-yellow-400 rounded-t-lg left-1.5"></div>
                      <div className="absolute bottom-3 left-2">
                        <div className="w-5 h-6 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-5 bg-green-500 rounded-full absolute -right-1.5 top-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
