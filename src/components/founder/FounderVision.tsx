import React from "react";
import { Sparkles, Boxes, ShieldCheck, Rocket, Code2, Target } from "lucide-react";
import { FOUNDER_INFO } from "@/lib/constants";

export const FounderVision: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
    Boxes: <Boxes className="w-6 h-6 text-indigo-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
    Code2: <Code2 className="w-6 h-6 text-purple-400" />,
  };

  return (
    <section id="vision" className="py-24 sm:py-32 bg-[#070B16] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>The Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built by a Student. Designed for Students.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Student IDE was created with a clear mission: to make coding accessible, enjoyable, and frustration-free for school students across India and beyond.
          </p>
        </div>

        {/* 5 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FOUNDER_INFO.principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`relative rounded-3xl bg-[#10172A]/80 border border-slate-800 hover:border-slate-700 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 group ${
                index === 3 ? "lg:col-span-1 md:col-span-1" : ""
              } ${index === 4 ? "lg:col-span-2 md:col-span-2" : ""}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {iconMap[principle.icon] || <Sparkles className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {principle.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-xs font-medium text-slate-400 group-hover:text-indigo-400 transition-colors">
                <span>Core Pillar of Student IDE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
