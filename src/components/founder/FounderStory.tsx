import React from "react";
import { Compass, Lightbulb, Sparkles, BookOpen } from "lucide-react";
import { FOUNDER_INFO } from "@/lib/constants";

export const FounderStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#0A0F1D] border-t border-slate-800/80 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>The Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A Student With a Vision to Build
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            How personal curiosity in a school computer lab evolved into Student IDE.
          </p>
        </div>

        {/* Narrative Article Container */}
        <article className="relative bg-[#10172A]/70 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-xl backdrop-blur-sm space-y-8">
          {/* Subtle vertical accent indicator */}
          <div className="space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            {/* Paragraph 1 */}
            <p className="text-xl sm:text-2xl font-semibold text-white leading-snug border-l-4 border-cyan-400 pl-4 py-1">
              {FOUNDER_INFO.story[0]}
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-300">
              {FOUNDER_INFO.story[1]}
            </p>

            {/* Paragraph 3 */}
            <p className="text-slate-300">
              {FOUNDER_INFO.story[2]}
            </p>

            {/* Editorial Highlight Callout */}
            <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/40 border border-indigo-500/30 space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-cyan-400" />
                <span>The Turning Point</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white italic leading-relaxed">
                &ldquo;{FOUNDER_INFO.story[3]}&rdquo;
              </p>
            </div>

            {/* Paragraph 5 (Conclusion) */}
            <div className="flex items-center gap-3 pt-2">
              <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-white">
                {FOUNDER_INFO.story[4]}
              </p>
            </div>
          </div>

          {/* Authentic Author Sign-off */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-[#10172A] rounded-full flex items-center justify-center text-cyan-300 font-bold text-sm">
                  V
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Vasu (Vasudevan M)</p>
                <p className="text-xs text-slate-400">Class 12 &bull; Isha Vidhya</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Independent Student Initiative</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
