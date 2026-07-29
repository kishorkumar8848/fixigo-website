"use client";

import React, { useState, useEffect } from "react";
import { Wrench, Menu, X, ArrowDownToLine } from "lucide-react";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "FAQs", href: "#faqs" },
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
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-full border-[3px] border-slate-950 bg-[#0c1624] px-6 py-2.5 shadow-[4px_4px_0px_0px_#000000] flex items-center justify-between transition-all duration-300 backdrop-blur-md">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center gap-2 font-bold text-xl text-white group select-none"
          >
            <div className="h-11 w-11 rounded-2xl bg-[#1D58F6] border-[3px] border-slate-950 flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] transition-all duration-300 group-hover:scale-105 overflow-hidden">
              <Wrench className="h-5.5 w-5.5 text-white group-hover:rotate-[360deg] transition-transform duration-700 ease-out origin-center" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              Fixi<span className="text-[#1D58F6]">go</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-bold text-slate-350 hover:text-white uppercase tracking-wider transition-all duration-200 border-2 border-transparent hover:border-slate-950 hover:bg-[#1D58F6] hover:shadow-[3px_3px_0px_0px_#000000] hover:scale-105 rounded-tl-[16px] rounded-br-[16px] rounded-tr-[4px] rounded-bl-[4px] px-3.5 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="glow"
              size="sm"
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-slate-950 rounded-full font-bold shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#000000] transition-all cursor-pointer"
              icon={<ArrowDownToLine className="h-4 w-4" />}
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-slate-950 text-white bg-slate-900 shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#000000] transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[78px] z-45 md:hidden border-[3px] border-slate-950 bg-[#0c1624] px-6 py-6 rounded-[28px] shadow-[4px_4px_0px_0px_#000000] backdrop-blur-lg flex flex-col gap-5 text-white"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-bold text-slate-200 hover:text-white uppercase tracking-wider text-sm"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-slate-800" />
              <Button
                variant="glow"
                size="md"
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full border-2 border-slate-950 rounded-full font-bold shadow-[2px_2px_0px_0px_#000000]"
                icon={<ArrowDownToLine className="h-4 w-4" />}
              >
                Download App
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
