import React from "react";
import { Quote, Sparkles } from "lucide-react";
import { FOUNDER_INFO } from "@/lib/constants";

export const PersonalMessage: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0F1D] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A Message to Young Builders</span>
        </div>

        {/* Editorial Quote Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#10172A] to-[#0D1322] border border-slate-700/80 p-8 sm:p-14 shadow-2xl text-left space-y-8">
          <Quote className="w-12 h-12 text-indigo-400/40" />

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 leading-relaxed italic">
            &ldquo;{FOUNDER_INFO.quote}&rdquo;
          </blockquote>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#10172A] rounded-full flex items-center justify-center font-bold text-white text-base">
                  V
                </div>
              </div>
              <div>
                <p className="text-base font-bold text-white tracking-wide">
                  {FOUNDER_INFO.displayName} ({FOUNDER_INFO.fullName})
                </p>
                <p className="text-xs text-cyan-400 font-mono">
                  {FOUNDER_INFO.role} &bull; {FOUNDER_INFO.product}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Class 12 &bull; Isha Vidhya
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
