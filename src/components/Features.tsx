"use client";

import React from "react";
import { 
  WifiOff, 
  Boxes, 
  Code2, 
  Terminal, 
  LayoutDashboard, 
  FolderGit2, 
  MessageSquareHeart, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

// Icon mapping helper
const getFeatureIcon = (name: string) => {
  const iconProps = { className: "w-6 h-6" };
  switch (name) {
    case "WifiOff":
      return <WifiOff {...iconProps} className="w-6 h-6 text-cyan-400" />;
    case "Boxes":
      return <Boxes {...iconProps} className="w-6 h-6 text-indigo-400" />;
    case "Code2":
      return <Code2 {...iconProps} className="w-6 h-6 text-purple-400" />;
    case "Terminal":
      return <Terminal {...iconProps} className="w-6 h-6 text-emerald-400" />;
    case "LayoutDashboard":
      return <LayoutDashboard {...iconProps} className="w-6 h-6 text-amber-400" />;
    case "FolderGit2":
      return <FolderGit2 {...iconProps} className="w-6 h-6 text-sky-400" />;
    case "MessageSquareHeart":
      return <MessageSquareHeart {...iconProps} className="w-6 h-6 text-rose-400" />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} className="w-6 h-6 text-teal-400" />;
    default:
      return <Sparkles {...iconProps} className="w-6 h-6 text-indigo-400" />;
  }
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0A0F1D] relative border-t border-slate-800/80">
      {/* Background Decor */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[140px] rounded-full -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Modern Classrooms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything Students Need to Start Coding.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Engineered specifically for school students, teachers, and computer laboratories — combining professional developer tools with zero-friction offline execution.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl bg-[#10172A]/80 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform duration-200">
                    {getFeatureIcon(feature.iconName)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {idx + 1}. {feature.title}
                </h3>

                {/* Short Headline / Summary */}
                <p className="text-sm font-semibold text-slate-200 mb-3">
                  {feature.shortDesc}
                </p>

                {/* Full Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Card Guarantee Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="font-medium">Implemented & Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Zero Cloud Dependencies • 100% Student Privacy Preserved
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Student code, profiles, and survey feedback are stored strictly on local computer disks inside a protected SQLite database.
            </p>
          </div>
          <a
            href="#download"
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30"
          >
            Get Student IDE v1.0.0
          </a>
        </div>
      </div>
    </section>
  );
};
