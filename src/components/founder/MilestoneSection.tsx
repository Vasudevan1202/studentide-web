import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Sparkles, Terminal, WifiOff } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const MilestoneSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#080E1E] border-t border-slate-800/80 relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-indigo-600/15 via-cyan-500/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#10172A] to-[#0A0F1D] border border-cyan-500/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Top Row: Milestone Label & Proudly Built in India Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Product Milestone</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold shadow-sm">
              <span>PROUDLY BUILT IN INDIA</span>
              <span>🇮🇳</span>
            </div>
          </div>

          {/* Headline & Tagline */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {SITE_CONFIG.headline}
            </h2>

            <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-white tracking-wider">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              Student IDE brings together an industry-standard Monaco Editor, MinGW-w64 C++17 compiler, standalone Python 3.11, sandboxed HTML/CSS preview, SQLite, and PHP into a unified, zero-configuration desktop environment built for Indian school students (Classes 6–12).
            </p>
          </div>

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 pb-8">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400">
                <WifiOff className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Connectivity</p>
                <p className="text-sm font-bold text-white">100% Offline</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Languages</p>
                <p className="text-sm font-bold text-white">7 Integrated Stacks</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Target Group</p>
                <p className="text-sm font-bold text-white">Classes 6–12 &amp; Labs</p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free for students, teachers, and computer laboratories</span>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-95"
            >
              <span>Explore Student IDE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
