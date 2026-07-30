"use client";

import React from "react";
import { Wrench, Heart } from "lucide-react";
import { APP_CONFIG } from "@/config/app";

const socialIcons = (name: string) => {
  switch (name) {
    case "Twitter":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "YouTube":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
};

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-bold text-slate-900">
        {title}
        <span className="block w-8 h-[3px] bg-[#1D58F6] rounded-full mt-1.5" />
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-600 hover:text-[#1D58F6] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Six Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2.5 select-none">
              <div className="h-9 w-9 rounded-xl bg-[#1D58F6] flex items-center justify-center">
                <Wrench className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Fixigo
              </span>
            </a>

            <p className="text-sm text-slate-600 leading-relaxed">
              Smart appliance care at your fingertips. We fix it, you relax.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {APP_CONFIG.contact.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  aria-label={soc.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-[#1D58F6] hover:text-white transition-colors"
                >
                  {socialIcons(soc.name)}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={APP_CONFIG.contact.links.company} />
          <FooterColumn title="Services" links={APP_CONFIG.contact.links.services} />
          <FooterColumn title="Support" links={APP_CONFIG.contact.links.support} />
          <FooterColumn title="For Partners" links={APP_CONFIG.contact.links.partners} />

          {/* Get the App Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-slate-900">
              Get the App
              <span className="block w-8 h-[3px] bg-[#1D58F6] rounded-full mt-1.5" />
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Download the Fixigo app and manage everything on the go.
            </p>
            <a
              href={APP_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-slate-950 text-white rounded-xl px-4 py-2.5 hover:bg-slate-900 transition-colors w-fit"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left leading-none">
                <p className="text-[9px] uppercase tracking-wider opacity-80">GET IT ON</p>
                <p className="text-sm font-bold mt-0.5">Google Play</p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2025 Fixigo. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[#1D58F6]">
            <Heart className="h-4 w-4" strokeWidth={2} />
            <span className="font-handwritten text-base font-bold italic">
              Made with care, for your comfort.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
