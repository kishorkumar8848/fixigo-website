"use client";

import React from "react";
import { Wrench, Mail, Phone, MapPin, HelpCircle } from "lucide-react";
import { APP_CONFIG } from "@/config/app";

// Social icon mapping helper
const socialIcons = (name: string) => {
  const cn = "h-4.5 w-4.5 transition-colors fill-current";
  switch (name) {
    case "Twitter":
      return (
        <svg className={cn} viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={cn} viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className="h-4.5 w-4.5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "YouTube":
      return (
        <svg className={cn} viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return <HelpCircle className="h-4.5 w-4.5 transition-colors" />;
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-400 dark:bg-slate-950 border-t border-slate-800 pt-12 pb-8 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Logo, Links & Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Logo & Brand Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white group w-[fit-content]">
              <svg viewBox="0 0 100 100" className="h-9 w-9 shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300 select-none">
                <rect width="100" height="100" rx="24" fill="#1D58F6" />
                <path d="M32 20 h35 l-8 13 H45 v11 h10 l-7 12 H45 v20 c0 2.2-1.8 4-4 4 H36 c-2.2 0-4-1.8-4-4 V20 Z" fill="#FFFFFF" />
              </svg>
              <span>
                Fixi<span className="text-[#1D58F6]">go</span>
              </span>
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-xs">
              Fixigo is simplifying the home appliance lifecycle—providing instant doorstep repairs, verified installations, dynamic warranty vaulting, and professional preventative maintenance.
            </p>

            {/* Direct Contacts */}
            <div className="flex flex-col gap-3.5 text-xs font-medium">
              <a href={`mailto:${APP_CONFIG.contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="h-4.5 w-4.5 text-[#1D58F6] shrink-0" />
                <span>{APP_CONFIG.contact.email}</span>
              </a>
              {APP_CONFIG.contact.phone && (
                <a href={`tel:${APP_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="h-4.5 w-4.5 text-blue-400 shrink-0" />
                  <span>{APP_CONFIG.contact.phone}</span>
                </a>
              )}
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">{APP_CONFIG.contact.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {APP_CONFIG.contact.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  aria-label={soc.name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors dark:bg-slate-900"
                >
                  {socialIcons(soc.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6 text-left">
            
            {/* Column 1: Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Company</h4>
              <ul className="flex flex-col gap-2.5 text-sm font-semibold">
                {APP_CONFIG.contact.links.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources</h4>
              <ul className="flex flex-col gap-2.5 text-sm font-semibold">
                {APP_CONFIG.contact.links.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Legal</h4>
              <ul className="flex flex-col gap-2.5 text-sm font-semibold">
                {APP_CONFIG.contact.links.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Segment: Copyright & Credits */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <p>© {new Date().getFullYear()} Fixigo Technologies Private Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-350">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-350">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
