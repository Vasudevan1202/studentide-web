"use client";

import React, { useState, useEffect } from "react";
import { 
  Download, 
  ArrowRight, 
  Calendar, 
  ExternalLink, 
  Mail, 
  AlertCircle, 
  CheckCircle2,
  BellRing
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useIsMounted } from "@/lib/useIsMounted";

interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isLive: boolean;
  totalRemainingMs: number;
}

function getRemainingLaunchTime(): CountdownTime {
  // Check query param for test preview simulation (?preview=live or ?preview=countdown)
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const previewMode = urlParams.get("preview") || urlParams.get("launch");
    if (previewMode === "live") {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        isLive: true,
        totalRemainingMs: 0,
      };
    } else if (previewMode === "countdown") {
      return {
        days: "00",
        hours: "16",
        minutes: "27",
        seconds: "15",
        isLive: false,
        totalRemainingMs: 59235000,
      };
    }
  }

  // Exact Target: 2026-11-02T10:00:00+05:30
  const targetTime = SITE_CONFIG.targetLaunchTimestamp;
  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isLive: true,
      totalRemainingMs: 0,
    };
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return {
    days: String(d).padStart(2, "0"),
    hours: String(h).padStart(2, "0"),
    minutes: String(m).padStart(2, "0"),
    seconds: String(s).padStart(2, "0"),
    isLive: false,
    totalRemainingMs: diff,
  };
}

const INITIAL_COUNTDOWN_STATE: CountdownTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
  isLive: false,
  totalRemainingMs: 1,
};

export const LaunchCountdown: React.FC = () => {
  const mounted = useIsMounted();
  const [timeData, setTimeData] = useState<CountdownTime>(INITIAL_COUNTDOWN_STATE);

  useEffect(() => {
    const updateCountdown = () => {
      const updated = getRemainingLaunchTime();
      setTimeData(updated);
    };

    const animFrame = requestAnimationFrame(updateCountdown);
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      cancelAnimationFrame(animFrame);
      clearInterval(interval);
    };
  }, []);

  const hasDownloadUrl = Boolean(SITE_CONFIG.downloadUrl && SITE_CONFIG.downloadUrl.trim().length > 0);

  return (
    <section 
      id="countdown" 
      aria-label="Official Launch Countdown" 
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0A0F1D] via-[#0E1528] to-[#0A0F1D] border-y border-slate-800/80 overflow-hidden"
    >
      {/* Background Subtle Cyan-Purple Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
      >
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-purple-600/15 via-indigo-600/15 to-cyan-500/15 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="rounded-3xl bg-[#10172A]/90 border border-slate-700/80 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-md">
          {/* Indian Tricolour Top Accent Ribbon */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 left-0 right-0 h-1 flex"
          >
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-[#FFFFFF]" />
            <div className="flex-1 bg-[#138808]" />
          </div>

          <div className="flex flex-col items-center text-center space-y-6">
            {/* Top Official Launch Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200">
                {timeData.isLive 
                  ? "OFFICIAL RELEASE v1.0.0 NOW AVAILABLE" 
                  : SITE_CONFIG.launchBadge}
              </span>
              <span className="text-base select-none">🇮🇳</span>
            </div>

            {/* Heading and Subheading */}
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                {timeData.isLive ? (
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    WE ARE LIVE!
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                    THE WAIT IS ALMOST OVER.
                  </span>
                )}
              </h2>
              <p className="text-base sm:text-lg font-medium text-cyan-300">
                {timeData.isLive 
                  ? "Student IDE is now officially launched and ready for school classrooms." 
                  : "Student IDE is launching soon."}
              </p>
            </div>

            {/* Main Message & Tagline */}
            <div className="space-y-2 max-w-2xl pt-1">
              <p className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
                {SITE_CONFIG.headline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
                {SITE_CONFIG.description}
              </p>
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-400 pt-1">
                {SITE_CONFIG.tagline}
              </p>
            </div>

            {/* CONDITIONAL DISPLAY: Live State vs Live Countdown */}
            {timeData.isLive ? (
              /* LIVE STATE UI */
              <div className="w-full max-w-2xl pt-4 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="p-6 rounded-2xl bg-[#0B0F19] border border-emerald-500/30 shadow-lg space-y-4">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Official Release 1.0.0 is Live</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300">
                    The complete offline IDE bundle featuring Monaco Editor, Python 3.11, C++ MinGW GCC 14.1, and verified PHP 8.2 CLI runtime is now released.
                  </p>

                  {/* Check if real download URL is configured */}
                  {hasDownloadUrl ? (
                    <div className="pt-2">
                      <a
                        href={SITE_CONFIG.downloadUrl}
                        download
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <Download className="w-5 h-5" />
                        <span>DOWNLOAD STUDENT IDE</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-black/20 text-emerald-200 font-mono">
                          v1.0.0 (x64)
                        </span>
                      </a>
                    </div>
                  ) : (
                    /* Safe fallback message when download URL is pending upload */
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs text-left flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold text-white">
                          Release Package Mirror Synchronization
                        </p>
                        <p className="leading-relaxed text-amber-200/90">
                          The official Windows x64 release asset (<code className="text-cyan-300">Student-IDE-Setup-1.0.0-x64.exe</code>) is undergoing final CDN mirror replication. If download is momentarily unavailable, please contact the founder directly for priority access.
                        </p>
                        <div className="pt-2">
                          <a
                            href={`mailto:${SITE_CONFIG.contactEmail}?subject=Student%20IDE%20v1.0.0%20Direct%20Download%20Request`}
                            className="inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:underline"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Request direct download link ({SITE_CONFIG.contactEmail})</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <a
                      href="#download"
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-1"
                    >
                      <span>View Checksums, System Requirements &amp; Installation Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* COUNTDOWN STATE UI */
              <div 
                role="timer" 
                aria-live="polite" 
                aria-label={`Time remaining until launch: ${timeData.days} days, ${timeData.hours} hours, ${timeData.minutes} minutes, ${timeData.seconds} seconds`}
                className="w-full max-w-3xl pt-2 pb-2"
              >
                {/* 4 Countdown Boxes Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {/* Days */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-[#0B0F19] border border-slate-800 shadow-inner flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono text-white tracking-tight motion-reduce:transition-none transition-all">
                      {mounted ? timeData.days : "--"}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest text-cyan-400 uppercase mt-2">
                      DAYS
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-[#0B0F19] border border-slate-800 shadow-inner flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono text-white tracking-tight motion-reduce:transition-none transition-all">
                      {mounted ? timeData.hours : "--"}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest text-indigo-400 uppercase mt-2">
                      HOURS
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-[#0B0F19] border border-slate-800 shadow-inner flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono text-white tracking-tight motion-reduce:transition-none transition-all">
                      {mounted ? timeData.minutes : "--"}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest text-purple-400 uppercase mt-2">
                      MINUTES
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-[#0B0F19] border border-slate-800 shadow-inner flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono text-cyan-300 tracking-tight motion-reduce:transition-none transition-all">
                      {mounted ? timeData.seconds : "--"}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-400 uppercase mt-2">
                      SECONDS
                    </span>
                  </div>
                </div>

                {/* Example Display String as specified */}
                <p className="text-xs font-mono text-slate-400 text-center mt-4">
                  {mounted ? `${timeData.days} DAYS : ${timeData.hours} HOURS : ${timeData.minutes} MINUTES : ${timeData.seconds} SECONDS` : "CALCULATING REMAINING TIME..."}
                </p>

                {/* Actions before launch */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}?subject=Student%20IDE%20Launch%20Notification%20Signup`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <BellRing className="w-4 h-4" />
                    <span>Get Notified on Launch</span>
                  </a>

                  <a
                    href="#features"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>Explore Features</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </a>
                </div>
              </div>
            )}

            {/* Launch Date & Time Clearly Displayed + Attribution */}
            <div className="w-full pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  Target: <strong className="text-white">2 November 2026, 10:00 AM IST</strong> (Asia/Kolkata, UTC+05:30)
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <span>Developed by</span>
                <a
                  href={SITE_CONFIG.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  <span>{SITE_CONFIG.companyName}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
