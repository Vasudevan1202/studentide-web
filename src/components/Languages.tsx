"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Info
} from "lucide-react";
import { LANGUAGES } from "@/lib/constants";

export const Languages: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>("python");

  const current = LANGUAGES.find((l) => l.id === selectedLang) || LANGUAGES[0];

  return (
    <section id="languages" className="py-24 bg-[#080D1A] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Multi-Language Offline Runtimes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Supported Programming Languages
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Pre-configured with standalone offline compilers and runtimes. No complex environment setup, PATH configurations, or internet downloads required.
          </p>
        </div>

        {/* Language Grid: 7 Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 mb-12">
          {LANGUAGES.map((lang) => {
            const isSelected = lang.id === selectedLang;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => setSelectedLang(lang.id)}
                className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center text-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isSelected
                    ? "bg-[#10172A] border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                    : "bg-[#0E1526] border-slate-800 hover:border-slate-700 hover:bg-[#121b30]"
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 font-mono text-sm font-bold text-white">
                  {lang.extension}
                </div>
                <div className="w-full">
                  <p className="text-sm font-bold text-white truncate">{lang.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono truncate">{lang.version.split(" ")[0]}</p>
                </div>
                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${
                    isSelected ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" : "bg-slate-800 text-slate-400 border-slate-700"
                  }`}
                >
                  {isSelected ? "Selected" : "Details"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Language Panel */}
        <div className="rounded-2xl bg-[#10172A] border border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.name}
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                  {current.extension}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${current.badgeColor}`}>
                  {current.runtimeStatus}
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                {current.tagline}
              </p>

              <div className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-white block mb-1">Architecture & Bundling:</span>
                {current.description}
              </div>

              {/* Verified Feature Bullets */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tested Capabilities & School Syllabus Support:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Runtime Specification Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#0B0F19] border border-slate-800 p-6 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">
                      Runtime Diagnostic
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    STATUS: READY
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">VERSION SPECIFICATION</span>
                    <span className="text-white font-semibold">{current.version}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">EXECUTION RESOLVER</span>
                    <span className="text-cyan-300">
                      {current.runtimeType === "bundled"
                        ? "Isolated Bundled Path (No Global PATH Dependency)"
                        : "Sandboxed Internal Chromium / V8 Node Engine"}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">INTERNET PREREQUISITE</span>
                    <span className="text-emerald-400 font-semibold">Zero Internet Required (100% Offline)</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">SCHOOL BOARD TARGET</span>
                    <span className="text-slate-300">CBSE, ICSE, State Boards (Classes 6–12)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Automated Test Suite Verified</span>
                  </div>
                  <span className="text-slate-400 font-mono">Student IDE v1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Runtime Accuracy Note */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Accuracy & Transparency Note:</strong> All runtime tools listed above are packaged and embedded directly into the Windows x64 release package (<code className="text-cyan-300 bg-slate-800 px-1 py-0.5 rounded">Student-IDE-Setup-1.0.0-x64.exe</code>). The standalone PHP 8.2 CLI runtime is bundled alongside MinGW GCC 14.1 and Python 3.11 with zero required external downloads.
          </p>
        </div>
      </div>
    </section>
  );
};
