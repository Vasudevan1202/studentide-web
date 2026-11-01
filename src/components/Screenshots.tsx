"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Eye
} from "lucide-react";
import { SCREENSHOTS } from "@/lib/constants";

export const Screenshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const current = SCREENSHOTS[activeTab];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? SCREENSHOTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === SCREENSHOTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="py-24 bg-[#080D1A] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Real Application Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            See Student IDE in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Genuine captures of the desktop application interface. No mockups or invented visuals — this is the real, production-tested software installed on student PCs.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SCREENSHOTS.map((item, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-[#10172A] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Screenshot Showcase Frame */}
        <div className="rounded-2xl border border-slate-700/80 bg-[#0B0F19] shadow-2xl overflow-hidden max-w-5xl mx-auto relative group">
          {/* OS Window Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#10172A] border-b border-slate-800 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-300 font-medium">
                Student IDE — {current.title}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 hidden sm:inline">
                {activeTab + 1} of {SCREENSHOTS.length}
              </span>
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Expand full image"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Inspect Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Screenshot Container with Next/Prev Overlays */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0B0F19]">
            <Image
              src={current.imageSrc}
              alt={current.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              className="object-cover object-top transition-all duration-300"
            />

            {/* Left / Right Arrow Controls */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-600 hover:text-white border border-slate-700/80 transition-all opacity-80 group-hover:opacity-100 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-600 hover:text-white border border-slate-700/80 transition-all opacity-80 group-hover:opacity-100 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Detailed Explanatory Information Bar Below */}
          <div className="p-6 sm:p-8 bg-[#0E1526] border-t border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                  {current.subtitle}
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
                ✓ Authentic Application Capture
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Fullscreen Zoom Viewer */}
        {isZoomed && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setIsZoomed(false)}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#10172A] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800">
                <span className="text-sm font-semibold text-white font-mono">
                  {current.title} — Full Resolution Capture
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative flex-1 aspect-[16/10] w-full overflow-auto p-2 bg-[#0B0F19]">
                <Image
                  src={current.imageSrc}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="px-5 py-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>{current.subtitle}</span>
                <span className="font-mono text-cyan-400">Student IDE v1.0.0 Production Build</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
