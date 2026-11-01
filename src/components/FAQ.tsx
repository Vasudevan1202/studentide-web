"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/constants";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#080D1A] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Answers for Students, Parents &amp; Teachers
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to know about Student IDE, system compatibility, offline functionality, and laboratory deployments.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#10172A] border border-slate-800 overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-800/80 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400 bg-cyan-950/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Support Card */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0D1424] border border-slate-800 text-center space-y-2">
          <p className="text-sm font-semibold text-white">
            Have questions about deploying Student IDE in your school or computer lab?
          </p>
          <p className="text-xs text-slate-400">
            Reach out to our founder and education team at{" "}
            <a
              href="mailto:founder@developerhut.in"
              className="text-cyan-400 hover:text-cyan-300 underline font-medium"
            >
              founder@developerhut.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
