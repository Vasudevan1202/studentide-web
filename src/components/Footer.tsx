"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Mail, User } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrivacyModal } from "./PrivacyModal";

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#070B16] border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1 & 2: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#10172A] border border-slate-700/80 flex items-center justify-center p-1.5 shadow-md">
                  <Image
                    src="/branding/icon.png"
                    alt="Student IDE Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg text-white tracking-tight">
                    STUDENT IDE
                  </span>
                  <span className="text-[11px] text-slate-400">
                    by DeveloperHut
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                A complete coding environment designed for school students (Classes 6–12), with offline programming tools for Python, C++, HTML/CSS, JavaScript, SQL, and PHP.
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Version {SITE_CONFIG.version} (Windows x64)</span>
              </div>
            </div>

            {/* Col 3: Navigation Links */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                Navigation
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#top" className="hover:text-cyan-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-cyan-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#languages" className="hover:text-cyan-400 transition-colors">
                    Languages
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="hover:text-cyan-400 transition-colors">
                    Curriculum (6–12)
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className="hover:text-cyan-400 transition-colors">
                    Screenshots
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-cyan-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">
                    About DeveloperHut
                  </a>
                </li>
                <li>
                  <Link
                    href="/founder"
                    className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-semibold transition-colors"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>About the Founder (Vasu)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Resources & Downloads */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                Distribution
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#download"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Windows Installer</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>DeveloperHut Official Site</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Support & Contact */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                Contact &amp; Support
              </p>
              <p className="text-xs text-slate-300">
                Official inquiries, school setup &amp; direct support:
              </p>
              <a
                href="mailto:founder@developerhut.in"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 text-xs font-mono transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>founder@developerhut.in</span>
              </a>
              <p className="text-[11px] text-slate-400">
                Operating from India 🇮🇳 • Direct founder support
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Badges */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; 2026 DeveloperHut. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-white transition-colors underline"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <span>Proudly Built in India</span>
                <span>🇮🇳</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};
