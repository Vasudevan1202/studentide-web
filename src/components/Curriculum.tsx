"use client";

import React from "react";
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Lightbulb,
  HeartHandshake
} from "lucide-react";
import { CURRICULUM_CARDS } from "@/lib/constants";

export const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-[#0A0F1D] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Aligned with Indian School Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Designed for School Students
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From foundational logic to advanced algorithms, Student IDE removes configuration hurdles so students and teachers can focus entirely on learning to code.
          </p>
        </div>

        {/* 3 Curriculum Stage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {CURRICULUM_CARDS.map((stage) => (
            <div
              key={stage.title}
              className="relative rounded-2xl bg-[#10172A] border border-slate-800 hover:border-indigo-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {stage.classes}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {stage.targetGroup.split("•")[0]}
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {stage.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {stage.summary}
                </p>

                {/* Curriculum Syllabus Highlights */}
                <div className="mb-6 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Curriculum Syllabus Focus:</span>
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {stage.syllabus.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How Student IDE Empowers This Stage */}
                <div className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800 space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span>How Student IDE Helps:</span>
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {stage.ideBenefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Target Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>CBSE / ICSE / State Boards</span>
                <span className="text-cyan-400">Class {stage.classes.replace('Classes ', '')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accessibility & Classroom Impact Overview */}
        <div className="rounded-2xl bg-gradient-to-br from-[#10172A] via-[#0E1526] to-[#10172A] border border-slate-700/80 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Making Programming Truly Accessible</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why Offline-First Matters in Indian Schools
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Many school computer laboratories face slow, filtered, or intermittent internet connectivity. Typical cloud-based coding platforms lag, require student phone numbers or email logins, and expose children to external advertisements.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Student IDE solves this completely: a single lightweight download equips school machines with full C++ compilers, Python interpreters, Monaco code editing, and SQLite databases. No student accounts, no online trackers, and no subscription fees.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-2xl font-black text-cyan-400 block mb-1">0%</span>
                <span className="text-xs font-semibold text-white block mb-1">Internet Required</span>
                <p className="text-[11px] text-slate-400">
                  Every compiler and runner executes locally on the student machine.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-2xl font-black text-indigo-400 block mb-1">0</span>
                <span className="text-xs font-semibold text-white block mb-1">Account Signups</span>
                <p className="text-[11px] text-slate-400">
                  Instant launch without requiring emails, passwords, or telephone numbers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-2xl font-black text-emerald-400 block mb-1">1-Click</span>
                <span className="text-xs font-semibold text-white block mb-1">Project Starters</span>
                <p className="text-[11px] text-slate-400">
                  Ready-to-run template files for CBSE and ICSE classroom assignments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-2xl font-black text-purple-400 block mb-1">100%</span>
                <span className="text-xs font-semibold text-white block mb-1">Safe & Ad-Free</span>
                <p className="text-[11px] text-slate-400">
                  Clean, distraction-free environment dedicated solely to computer education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
