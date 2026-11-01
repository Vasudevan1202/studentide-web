import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ShieldCheck, 
  Target,
  Compass,
  Mail,
  ArrowRight
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0F1D] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>DeveloperHut Mission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Built to Make Coding Accessible.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The story and purpose behind Student IDE — engineering educational software that works for every Indian student, regardless of internet connectivity.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Organization & Mission Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#10172A] border border-slate-700/80 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center p-2">
                  <Image
                    src="/branding/icon.png"
                    alt="Student IDE Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Student IDE</h3>
                  <p className="text-xs text-cyan-400 font-mono">Developed by DeveloperHut</p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  In computer laboratories across India, students often face hurdles before writing a single line of code: environment variables fail, internet bandwidth is restricted or absent, cloud editors time out, and software requires student phone numbers or complex permissions.
                </p>
                <p>
                  <strong>DeveloperHut</strong> created Student IDE to dismantle these roadblocks. By bundling industry-standard Monaco Editor, MinGW-w64 GCC, Python 3.11, and SQLite into an autonomous desktop package, students can learn in any classroom without depending on external connectivity.
                </p>
                <p>
                  Our guiding principle is simple: every child in Classes 6–12 deserves access to high-quality programming tools that respect their privacy, require zero subscription fees, and just work.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇮🇳</span>
                <span className="text-xs font-semibold text-slate-200">
                  Proudly Built in India
                </span>
              </div>
              <a
                href={SITE_CONFIG.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Visit developerhut.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Values & Commitments */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex-1 rounded-2xl bg-[#0E1526] border border-slate-800 p-6 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                <Compass className="w-5 h-5" />
                <h4 className="text-base font-bold text-white">Our Product Tagline</h4>
              </div>
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 tracking-wider">
                {SITE_CONFIG.tagline}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                A simple three-step progression: learn computer fundamentals, code with hands-on practice, and build creative projects that solve real problems.
              </p>
            </div>

            <div className="flex-1 rounded-2xl bg-[#0E1526] border border-slate-800 p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="text-base font-bold text-white">Commitment to Truth</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We present Student IDE exactly as built. We do not invent certifications, commercial awards, user counts, or fake testimonials. All advertised features are backed by real codebase tests and verified installers.
              </p>
            </div>

            {/* Founder Profile Card */}
            <div className="rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/40 border border-cyan-500/30 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 flex-shrink-0">
                  <Image
                    src="/founder/vasu.jpg"
                    alt="Vasu (Vasudevan M) - Founder of DeveloperHut"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white">Vasu (Vasudevan M)</p>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Founder
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Class 12 &bull; Isha Vidhya &bull; Creator of Student IDE
                  </p>
                </div>
              </div>

              <Link
                href="/founder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-200 shrink-0 min-h-[44px]"
              >
                <span>Read Founder Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-500/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-400">Founder &amp; Inquiries</p>
                <a
                  href="mailto:founder@developerhut.in"
                  className="text-xs sm:text-sm font-bold text-cyan-300 hover:text-cyan-200 transition-colors font-mono break-all"
                >
                  founder@developerhut.in
                </a>
              </div>
              <a
                href="mailto:founder@developerhut.in"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shrink-0 min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Founder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
