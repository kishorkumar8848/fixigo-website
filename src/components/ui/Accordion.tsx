"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="flex w-full items-center justify-between text-left px-6 py-5 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-slate-900 text-base pr-4">
                {item.question}
              </span>
              <span className="ml-2 flex-shrink-0 text-slate-400">
                {isOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
