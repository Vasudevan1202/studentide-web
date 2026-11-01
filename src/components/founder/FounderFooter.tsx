import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { FOUNDER_INFO } from "@/lib/constants";

export const FounderFooter: React.FC = () => {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#10172A] border border-slate-700/80 flex items-center justify-center p-1.5 shadow-md">
              <Image
                src="/branding/icon.png"
                alt="Student IDE Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-white tracking-tight">
                  VASU
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Founder Profile
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Founder of DeveloperHut &bull; Creator of Student IDE
              </p>
            </div>
          </div>

          {/* Center: Back to Product Link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition-colors text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>Back to Student IDE Official Website</span>
            </Link>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/#download" className="hover:text-cyan-400 transition-colors">
              Download
            </Link>
            <a
              href={FOUNDER_INFO.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>DeveloperHut</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href="mailto:founder@developerhut.in"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>founder@developerhut.in</span>
            </a>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            <span>&copy; 2026 DeveloperHut. Built with passion by Vasu.</span>
          </p>

          <div className="flex items-center gap-3">
            <span className="text-slate-400">Class 12 &bull; Isha Vidhya</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-slate-300">
              <span>Proudly Built in India</span>
              <span>🇮🇳</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
