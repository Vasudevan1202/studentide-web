"use client";

import React, { useState, useEffect } from "react";
import { 
  Download, 
  Check, 
  Copy, 
  ShieldCheck, 
  Info,
  AlertCircle,
  Mail
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const DownloadSection: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const updateLive = () => {
      setIsLive(Date.now() >= SITE_CONFIG.targetLaunchTimestamp);
    };

    const animFrame = requestAnimationFrame(updateLive);
    const timer = setInterval(updateLive, 1000);

    return () => {
      cancelAnimationFrame(animFrame);
      clearInterval(timer);
    };
  }, []);

  const hasDownloadUrl = Boolean(SITE_CONFIG.downloadUrl && SITE_CONFIG.downloadUrl.trim().length > 0);

  const psCommand = `Get-FileHash -Algorithm SHA256 .\\${SITE_CONFIG.installerFilename}`;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(SITE_CONFIG.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(psCommand);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2500);
  };

  return (
    <section id="download" className="py-24 bg-[#0A0F1D] relative border-t border-slate-800">
      {/* Background Decor */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/10 blur-[150px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Download className="w-3.5 h-3.5" />
            <span>Official Windows Release</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Start Your Coding Journey Today.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Download Student IDE for Windows and begin building your programming skills in a distraction-free, 100% offline environment.
          </p>
        </div>

        {/* Main Download Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#10172A] to-[#0D1424] border border-slate-700/80 p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          {/* Subtle Corner Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center space-y-6">
            {/* Version / Launch Status Badge */}
            <div className="flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
              <span className={`w-2 h-2 rounded-full ${isLive ? "bg-emerald-400" : "bg-cyan-400 animate-pulse"}`} />
              <span>{isLive ? `v${SITE_CONFIG.version} Production Release` : "Launch Target: 02 Nov 2026, 10:00 AM IST"}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Windows x64</span>
            </div>

            {/* Primary Download Button or Safe Fallback Notice */}
            <div className="w-full max-w-xl">
              {hasDownloadUrl ? (
                <div>
                  <a
                    href={SITE_CONFIG.downloadUrl}
                    download
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-black text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/35 hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Download className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                    <span>DOWNLOAD STUDENT IDE</span>
                  </a>
                  <p className="text-xs text-slate-400 mt-2 font-mono">
                    {SITE_CONFIG.installerFilename} (~{SITE_CONFIG.installerSize})
                  </p>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-[#0B0F19] border border-amber-500/30 text-left space-y-3">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs uppercase tracking-wide">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>Release Package Mirroring</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The official Windows installer (<code className="text-cyan-300">{SITE_CONFIG.installerFilename}</code>) is being deployed to CDN distribution mirrors for the official launch on <strong>2 November 2026 at 10:00 AM IST</strong>.
                  </p>
                  <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-slate-800 text-xs">
                    <span className="text-slate-400">Direct release assistance:</span>
                    <a
                      href={`mailto:${SITE_CONFIG.contactEmail}?subject=Student%20IDE%20v1.0.0%20Installer%20Inquiry`}
                      className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{SITE_CONFIG.contactEmail}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Key Software Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-800 text-left">
              <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Version</span>
                <span className="text-sm font-bold text-white">{SITE_CONFIG.version}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Architecture</span>
                <span className="text-sm font-bold text-white">{SITE_CONFIG.architecture}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Installer Size</span>
                <span className="text-sm font-bold text-cyan-300">~{SITE_CONFIG.installerSize}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Internet</span>
                <span className="text-sm font-bold text-emerald-400">Not Required</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Developer: <strong className="text-slate-200">{SITE_CONFIG.companyName}</strong></span>
              </span>
              <span>•</span>
              <span>Tested on Windows 10 & 11 (64-bit)</span>
              <span>•</span>
              <span>No Admin Rights Required (asInvoker)</span>
            </div>
          </div>
        </div>

        {/* SHA-256 Checksum Verification Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0E1526] border border-slate-800 p-6 sm:p-8 mb-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Cryptographic SHA-256 Checksum</span>
              </h3>
              <p className="text-xs text-slate-400">
                Verify the integrity of your download to ensure an authentic, unmodified installer package.
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 self-start sm:self-auto">
              Algorithm: SHA-256
            </span>
          </div>

          {/* Hash Value Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 rounded-xl bg-[#080D1A] border border-slate-800">
            <code className="text-xs font-mono text-cyan-300 break-all select-all flex-1 py-1 px-2">
              {SITE_CONFIG.sha256}
            </code>
            <button
              type="button"
              onClick={handleCopyHash}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0"
            >
              {copiedHash ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Checksum</span>
                </>
              )}
            </button>
          </div>

          {/* PowerShell Verification Command */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 block">
              Verify in Windows PowerShell:
            </span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 rounded-xl bg-[#080D1A] border border-slate-800 font-mono text-xs">
              <span className="text-slate-500 select-none pl-2">&gt;</span>
              <code className="text-slate-300 flex-1 overflow-x-auto py-1">
                {psCommand}
              </code>
              <button
                type="button"
                onClick={handleCopyCommand}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0"
              >
                {copiedCommand ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Installation Instructions */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Simple Step-by-Step Installation
            </h3>
            <p className="text-sm text-slate-400">
              Get up and coding in less than 2 minutes on any Windows laptop or computer lab machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#10172A] border border-slate-800 space-y-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 font-bold text-sm">
                1
              </span>
              <h4 className="text-sm font-bold text-white">Download</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click &ldquo;Download for Windows&rdquo; to save <code className="text-cyan-300">Student-IDE-Setup-1.0.0-x64.exe</code> to your machine.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#10172A] border border-slate-800 space-y-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-600/20 text-cyan-400 font-bold text-sm">
                2
              </span>
              <h4 className="text-sm font-bold text-white">Run Setup</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Double-click the installer. Standard user permissions (<code className="text-cyan-300">asInvoker</code>) are sufficient; no UAC admin prompt required.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#10172A] border border-slate-800 space-y-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-purple-600/20 text-purple-400 font-bold text-sm">
                3
              </span>
              <h4 className="text-sm font-bold text-white">Choose Folder</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Accept the default per-user installation path or pick your preferred destination drive. Shortcuts will be created automatically.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#10172A] border border-slate-800 space-y-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-400 font-bold text-sm">
                4
              </span>
              <h4 className="text-sm font-bold text-white">Start Coding</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Launch Student IDE, enter your name and grade level, pick your languages, and start creating programs with 100% offline compilers!
              </p>
            </div>
          </div>
        </div>

        {/* School Lab Deployment Note */}
        <div className="mt-12 max-w-4xl mx-auto p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 flex items-start gap-4 text-xs text-slate-300">
          <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-white">
              Information for School Computer Laboratory Administrators:
            </p>
            <p className="leading-relaxed">
              Student IDE is portable-friendly. You can copy the single installer file to a USB thumb drive or school network share and install it across all lab machines without needing internet access on any workstation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
