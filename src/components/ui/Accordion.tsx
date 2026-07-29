"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-slate-200/60 dark:divide-slate-800/60">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-4 first:pt-0 last:pb-0">
            <button
              onClick={() => toggleIndex(index)}
              className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring focus-visible:ring-blue-500/20 rounded-lg py-2"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-800 dark:text-slate-100 text-base md:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                {item.question}
              </span>
              <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800">
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
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
                  <div className="pb-2 pt-3 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
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
