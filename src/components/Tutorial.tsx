"use client";

import React from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Volume2, 
  Monitor, 
  GraduationCap, 
  Layers, 
  Code2, 
  Database, 
  MessageSquareHeart,
  Video
} from "lucide-react";

export const Tutorial: React.FC = () => {
  const learningTopics = [
    {
      title: "1. Student Profile & Grade Setup",
      time: "0:08",
      icon: GraduationCap,
      description:
        "Enter your student name, select your school class (Classes 6–12), and save your offline profile to continue to your workspace.",
      badge: "Step 1",
    },
    {
      title: "2. Multi-Language Starter Files",
      time: "0:16",
      icon: Layers,
      description:
        "Browse the local file explorer with ready-to-run starter files for Python, C++, HTML5, CSS3, JavaScript, SQLite, and PHP.",
      badge: "Step 2",
    },
    {
      title: "3. Writing & Executing Code",
      time: "0:20",
      icon: Code2,
      description:
        "Write code inside the Monaco editor, click Run (or press F5), and read real-time process results inside the built-in Console Output panel.",
      badge: "Step 3",
    },
    {
      title: "4. Live Sandboxed Web Preview",
      time: "0:48",
      icon: Monitor,
      description:
        "Develop HTML5 structure and CSS3 styles with a live, real-time split-screen browser preview that updates immediately as you build.",
      badge: "HTML & CSS",
    },
    {
      title: "5. Offline SQLite Database Queries",
      time: "0:28",
      icon: Database,
      description:
        "Create database tables, insert sample student records, and execute structured SQL queries locally with zero server configuration.",
      badge: "SQLite",
    },
    {
      title: "6. Student Feedback Survey",
      time: "1:24",
      icon: MessageSquareHeart,
      description:
        "Open the Survey tab, answer feedback questions about usability and preferred languages, and submit answers privately stored on your device.",
      badge: "Step 4",
    },
  ];

  return (
    <section id="tutorial" className="py-24 bg-[#0A0F1D] relative border-t border-slate-800 scroll-mt-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/15 to-purple-600/10 blur-3xl rounded-full -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 -right-40 w-80 h-80 bg-cyan-600/10 blur-3xl rounded-full -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Video className="w-3.5 h-3.5" />
            <span>Watch &amp; Learn</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight uppercase break-words">
            Your Guide to Student IDE
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            New to Student IDE? Watch our official step-by-step tutorial and discover how to set up your workspace, explore programming languages and start coding.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>OFFICIAL STUDENT IDE TUTORIAL</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 font-mono">
              <span>by DeveloperHut</span>
            </span>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#10172A] to-[#0B0F19] border border-cyan-500/30 p-2 sm:p-4 shadow-2xl shadow-indigo-950/60 overflow-hidden group">
            {/* Ambient Corner Lighting Glow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Video Player Window Title Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0D1424] rounded-t-2xl border-b border-slate-800 text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shrink-0" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 shrink-0" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 shrink-0" />
                <span className="ml-2 font-mono text-slate-300 truncate">
                  DeveloperHut_Student_IDE_Tutorial_Narrated.mp4
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Clock className="w-3 h-3" />
                  <span>01:39</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  Narrated English Walkthrough
                </span>
              </div>
            </div>

            {/* Responsive HTML5 Video Player */}
            <div className="relative aspect-[16/10] sm:aspect-video w-full rounded-b-2xl overflow-hidden bg-black flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/videos/tutorial-poster.jpg"
                className="w-full h-full object-contain focus:outline-none"
                aria-label="Student IDE Step-by-Step Official Narrated Video Tutorial"
              >
                <source
                  src="/videos/DeveloperHut_Student_IDE_Tutorial_Narrated.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video streaming. Please download the official tutorial video file directly.
              </video>
            </div>

            {/* Bottom Metadata & Feature Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-3 sm:px-5 py-3 bg-[#0B0F19] border-t border-slate-800 text-xs text-slate-400 gap-2 text-center sm:text-left mt-2">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Narrated audio guide explaining profile setup, code execution, live preview &amp; surveys</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 flex-wrap justify-center">
                <span className="text-cyan-300">1080p HD</span>
                <span>•</span>
                <span>H.264 / AAC</span>
                <span>•</span>
                <span className="text-emerald-400">100% Offline Software</span>
              </div>
            </div>
          </div>
        </div>

        {/* What You Will Learn Section */}
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Tutorial Breakdown</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              What You Will Learn
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              A comprehensive walk-through of the exact capabilities demonstrated in the official narrated video.
            </p>
          </div>

          {/* 6 What You Will Learn Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningTopics.map((topic) => {
              const IconComp = topic.icon;
              return (
                <div
                  key={topic.title}
                  className="rounded-2xl bg-[#10172A]/80 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                          {topic.time}
                        </span>
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {topic.badge}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {topic.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Included in Official Release</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
