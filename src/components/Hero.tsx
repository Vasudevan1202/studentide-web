"use client";

import React from "react";
import Image from "next/image";
import { 
  Download, 
  ArrowRight, 
  Monitor, 
  WifiOff, 
  GraduationCap, 
  Code2
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-600/25 via-cyan-500/15 to-transparent blur-3xl opacity-70 -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-48 w-96 h-96 bg-purple-600/15 blur-3xl rounded-full -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-48 w-96 h-96 bg-cyan-600/15 blur-3xl rounded-full -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge: Proudly Built in India */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              {SITE_CONFIG.badge}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-medium text-cyan-400">
              For School Students & Labs
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            INDIA&apos;S FIRST{" "}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-indigo-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              STUDENT-FRIENDLY
            </span>{" "}
            <span className="block mt-1 sm:mt-2 text-white">
              OFFLINE IDE
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-4">
            {SITE_CONFIG.description}
          </p>

          {/* Tagline */}
          <div className="inline-block mb-10">
            <p className="text-base sm:text-lg font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/40 px-4 py-1 rounded-lg border border-cyan-500/20">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/25 transition-all duration-300 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              <span>Download for Windows</span>
              <span className="text-xs px-2 py-0.5 rounded bg-black/20 text-cyan-200 font-mono">
                x64
              </span>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* 3 Core Guarantee Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-16 text-left">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Compatibility</p>
                <p className="text-sm font-semibold text-slate-100">Windows 10 / 11 (64-bit)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <WifiOff className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Connectivity</p>
                <p className="text-sm font-semibold text-slate-100">100% Offline-First</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Curriculum</p>
                <p className="text-sm font-semibold text-slate-100">Designed for Classes 6–12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup: Genuine Application Screenshot */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Outer Frame Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 -z-10" />

          {/* Window Container */}
          <div className="rounded-2xl border border-slate-700/80 bg-[#0B0F19] shadow-2xl overflow-hidden">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#10172A] border-b border-slate-800 select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                  Student IDE — [Aarav Sharma • Class 10] — main.py
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ● Offline Engine Ready
                </span>
                <span className="text-xs text-slate-500 font-mono hidden md:inline">
                  MinGW GCC 14.1 • Python 3.11 • PHP 8.2
                </span>
              </div>
            </div>

            {/* Actual Screenshot Content */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0B0F19]">
              <Image
                src="/screenshots/hero_editor.png"
                alt="Actual Student IDE Application Interface with Monaco Editor and Python starter program"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover object-top"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3 bg-[#0d1322] border-t border-slate-800 text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Monaco Code Editor with Integrated Offline Runners & Real-time Console</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <span className="text-emerald-400 font-medium">✓ Actual Application Screenshot</span>
                <span>•</span>
                <span>DeveloperHut Official Release</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
