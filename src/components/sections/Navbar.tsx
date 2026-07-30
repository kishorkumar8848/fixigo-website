"use client";

import React, { useState, useEffect } from "react";
import { Wrench, Menu, X, ArrowDownToLine } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "how-it-works", "faqs"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "How it works", href: "#how-it-works", id: "how-it-works" },
    { label: "FAQ", href: "#faqs", id: "faqs" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 font-bold group select-none"
          >
            <div className="h-10 w-10 rounded-full bg-[#1D58F6] flex items-center justify-center">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              Fixigo
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                  activeSection === link.id
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#1D58F6] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Download App CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="/downloads/fixigo.apk"
              download
              className="px-6 py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-full font-semibold transition-all duration-200 flex items-center gap-2 text-sm cursor-pointer"
            >
              <span>Download App</span>
              <ArrowDownToLine className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 bg-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-[74px] z-50 md:hidden border border-slate-200 bg-white px-6 py-6 rounded-3xl shadow-xl flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-base font-semibold py-1.5 transition-colors ${
                activeSection === link.id ? "text-[#1D58F6]" : "text-slate-700"
              }`}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-slate-100" />
          <a
            href="/downloads/fixigo.apk"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-6 py-2.5 bg-slate-950 text-white rounded-full font-semibold flex items-center justify-center gap-2 text-sm"
          >
            <span>Download App</span>
            <ArrowDownToLine className="h-4 w-4" />
          </a>
        </div>
      )}
    </>
  );
}
