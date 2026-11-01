"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ExternalLink, GraduationCap, Sparkles, Send } from "lucide-react";
import { FOUNDER_INFO } from "@/lib/constants";

export const FounderHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Identity & Story hook */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About the Founder</span>
            </div>

            {/* Founder Display Name & Full Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none uppercase break-words">
                {FOUNDER_INFO.displayName}
              </h1>
              <p className="text-base sm:text-xl font-medium text-slate-300 break-words">
                {FOUNDER_INFO.fullName} &bull;{" "}
                <span className="text-cyan-400 font-semibold">{FOUNDER_INFO.role}</span> &bull;{" "}
                <span className="text-indigo-300">{FOUNDER_INFO.product}</span>
              </p>
            </div>

            {/* Education Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium shadow-sm max-w-full">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="break-words">{FOUNDER_INFO.education}</span>
            </div>

            {/* Main Identity Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#10172A] to-[#0A0F1D] border border-slate-800 shadow-inner">
              <p className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-indigo-400/90 uppercase mb-1">
                Main Identity
              </p>
              <p className="text-xs sm:text-sm font-bold tracking-wider text-slate-200 uppercase leading-relaxed break-words">
                STUDENT DEVELOPER &bull; ENTREPRENEUR &bull; TECHNOLOGY ENTHUSIAST &bull; FOUNDER OF DEVELOPERHUT &bull; CREATOR OF STUDENT IDE
              </p>
            </div>

            {/* Descriptive Mission Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              A high school student from India on a mission to make software development accessible, enjoyable, and frustration-free for students everywhere. Building tools that empower the next generation of coders without requiring high-end machines or persistent internet connections.
            </p>

            {/* Call-to-Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none">
              <a
                href="#story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/25 transition-all duration-200 active:scale-95 min-h-[44px]"
              >
                <span>Read Story</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#connect"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors duration-200 active:scale-95 shadow-sm min-h-[44px]"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </a>

              <a
                href={FOUNDER_INFO.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors min-h-[44px]"
              >
                <span>Visit DeveloperHut</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Framed Portrait of Vasu */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#10172A] border border-slate-700/80 p-3 sm:p-4 shadow-2xl shadow-indigo-950/70 overflow-hidden">
                {/* Authentic photograph of Vasu */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={FOUNDER_INFO.avatarSrc}
                    alt="Vasu (Vasudevan M) - Founder of DeveloperHut and Creator of Student IDE"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle inner gradient shade at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom overlay badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm sm:text-base">
                            Vasu
                          </span>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            Founder
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Class 12 &bull; Isha Vidhya
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-indigo-300">
                          DeveloperHut
                        </span>
                        <p className="text-[10px] text-slate-400">
                          Student IDE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption below image */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Student Builder</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Tamil Nadu, India 🇮🇳
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
