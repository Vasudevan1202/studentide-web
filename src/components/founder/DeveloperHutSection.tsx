import React from "react";
import Image from "next/image";
import { ExternalLink, Layers, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FOUNDER_INFO } from "@/lib/constants";

export const DeveloperHutSection: React.FC = () => {
  return (
    <section id="developerhut" className="py-24 sm:py-32 bg-[#0A0F1D] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: DeveloperHut Logo Presentation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/30 to-purple-500/20 rounded-3xl blur-2xl opacity-80" />

              <div className="relative rounded-3xl bg-[#10172A] border border-slate-700/80 p-8 sm:p-10 text-center space-y-6 shadow-2xl">
                {/* DeveloperHut Official Logo */}
                <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden bg-black p-2 shadow-lg border border-slate-800">
                  <Image
                    src={FOUNDER_INFO.logoSrc}
                    alt="DeveloperHut Official Logo"
                    width={144}
                    height={144}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    DeveloperHut
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    www.developerhut.in
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Technology &amp; Software Initiative</span>
                </div>

                <a
                  href={FOUNDER_INFO.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-600/30 transition-all duration-200"
                >
                  <span>Visit DeveloperHut</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Principles */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>The Initiative</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building Beyond Ideas
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              DeveloperHut was created to build products, share ideas, and create technology solutions that make a meaningful difference. Student IDE is the flagship product of DeveloperHut, built to empower the next generation of creators, thinkers, and builders.
            </p>

            {/* Core Values of DeveloperHut */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Hands-on Software Development</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Building real software from the ground up, embracing full-stack engineering, compilation pipelines, and desktop toolchains.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Accessible Education First</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Ensuring digital products work for all students regardless of hardware specs, expensive subscriptions, or broadband availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Solving Authentic Problems</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Focusing on genuine pain points observed in Indian classrooms rather than speculative or hyped tech trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Link to DeveloperHut */}
            <div className="pt-2">
              <a
                href={FOUNDER_INFO.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Explore all initiatives at developerhut.in</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
