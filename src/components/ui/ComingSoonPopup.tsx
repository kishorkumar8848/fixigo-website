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
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-4 transform animate-slideUp relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-slate-600" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-[#1D58F6] flex items-center justify-center">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3L4 14h7l-1 8 9-11h-7l1-8z" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl tracking-tight">
                <span className="text-slate-900">Fix</span>
                <span className="text-[#1D58F6]">igo</span>
              </span>
            </div>

            {/* Decorative element */}
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-[#1D58F6]" viewBox="0 0 32 32" fill="none">
                <path d="M4 16 L8 12 L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20 L16 16 L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-handwritten text-[#1D58F6] text-lg font-bold italic">
                Great things take time!
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">
              The <span className="text-[#1D58F6]">Fixigo</span> App<br />
              <span className="relative inline-block">
                is Coming Soon!
                <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9 C 50 3, 150 3, 198 7" stroke="#1D58F6" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              We&apos;re working hard to bring you the best experience for appliance care. Stay tuned!
            </p>

            {/* Notify section */}
            <div className="bg-blue-50 rounded-2xl p-5 mb-6 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1D58F6] flex items-center justify-center">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Be the first to know!</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Get notified when the app launches on Google Play.
                  </p>
                  <button className="px-5 py-2 bg-[#1D58F6] hover:bg-[#1647D8] text-white rounded-full font-semibold text-sm transition-colors flex items-center gap-2">
                    <span>Notify Me</span>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#1D58F6]" />
                </div>
                <p className="text-xs font-semibold text-slate-700">Trusted</p>
                <p className="text-xs text-slate-500">Technicians</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-50 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#1D58F6]" />
                </div>
                <p className="text-xs font-semibold text-slate-700">Live</p>
                <p className="text-xs text-slate-500">Tracking</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Award className="h-5 w-5 text-[#1D58F6]" />
                </div>
                <p className="text-xs font-semibold text-slate-700">90-Day</p>
                <p className="text-xs text-slate-500">Warranty</p>
              </div>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex items-center justify-center relative">
            {/* Decorative elements */}
            <svg className="absolute top-8 right-12 w-12 h-12 text-[#1D58F6] opacity-20" viewBox="0 0 48 48">
              <path d="M24 4 L28 20 L44 24 L28 28 L24 44 L20 28 L4 24 L20 20 Z" fill="currentColor"/>
            </svg>
            <svg className="absolute bottom-20 left-8 w-8 h-8 text-[#1D58F6] opacity-30" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M16 8 L20 16 L16 24 L12 16 Z" fill="currentColor"/>
            </svg>
            <div className="absolute bottom-4 right-4">
              <svg className="w-20 h-16 text-[#1D58F6]" viewBox="0 0 80 64" fill="none">
                <path d="M2 32 Q 20 20, 40 32 T 78 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Phone Frame */}
            <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-8 relative">
                {/* App Icon */}
                <div className="w-20 h-20 rounded-2xl bg-[#1D58F6] flex items-center justify-center mb-4 shadow-lg">
                  <svg className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3L4 14h7l-1 8 9-11h-7l1-8z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-xl text-slate-900 mb-1">Fixigo</h3>
                
                {/* Coming Soon Badge */}
                <div className="relative mb-6">
                  <svg className="absolute -left-6 -top-2 w-6 h-6 text-[#1D58F6]" viewBox="0 0 24 24">
                    <path d="M4 8 L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12 L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <svg className="absolute -right-6 -top-2 w-6 h-6 text-[#1D58F6]" viewBox="0 0 24 24">
                    <path d="M20 8 L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 12 L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-handwritten text-[#1D58F6] text-2xl font-bold italic">
                    Coming Soon!
                  </span>
                </div>

                <p className="text-center text-sm text-slate-600 mb-6 max-w-[200px]">
                  Better. Faster. Smarter.<br />
                  Just for you.
                </p>

                {/* Illustration */}
                <div className="relative">
                  <div className="w-48 h-32 bg-blue-50 rounded-2xl flex items-end justify-center overflow-hidden">
                    <div className="w-32 h-28 bg-[#1D58F6] rounded-t-3xl flex items-center justify-center mb-0">
                      <div className="text-white font-bold text-center">
                        <div className="text-sm">STAY</div>
                        <div className="text-lg">TUNED!</div>
                      </div>
                    </div>
                  </div>
                  {/* Plant decoration */}
                  <div className="absolute -right-4 bottom-2">
                    <div className="w-12 h-16 relative">
                      <div className="absolute bottom-0 w-8 h-6 bg-yellow-400 rounded-t-lg left-2"></div>
                      <div className="absolute bottom-4 left-3">
                        <div className="w-6 h-8 bg-green-400 rounded-full"></div>
                        <div className="w-4 h-6 bg-green-500 rounded-full absolute -right-2 top-1"></div>
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
