"use client";

import React from "react";
import { X, ShieldCheck, Lock } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[85vh] bg-[#10172A] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">Student IDE Privacy Policy</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-2.5">
            <Lock className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Zero Telemetry Commitment:</strong> Student IDE does not collect, transmit, or monetize any student personal data, project files, or browsing records.
            </span>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-1.5">1. Local Storage Only</h4>
            <p>
              All code files, project folders, and settings created in Student IDE reside exclusively on the student&apos;s local hard drive (in the user&apos;s designated workspace directory and local SQLite database). No source code or project content is ever uploaded to any cloud server.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-1.5">2. Student Profile &amp; Feedback Data</h4>
            <p>
              When a student enters their name and grade or completes a feedback survey within the application, this information is stored purely in the local machine&apos;s SQLite database. It is accessible only to local computer laboratory instructors via the password-protected Admin Dashboard.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-1.5">3. Third-Party Trackers &amp; Ads</h4>
            <p>
              Student IDE is 100% ad-free. The desktop application contains zero advertising networks, zero third-party behavioral analytics scripts (such as Google Analytics or Facebook Pixel), and zero web cookies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-1.5">4. Child Safety &amp; Education Protection</h4>
            <p>
              Designed for school children in Classes 6 through 12, Student IDE complies strictly with child privacy principles. No phone numbers, parent email addresses, or social media logins are requested or stored.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-1.5">5. Contact Information</h4>
            <p>
              If you have any questions regarding privacy or classroom security, please contact DeveloperHut at{" "}
              <a href="mailto:founder@developerhut.in" className="text-cyan-400 underline font-medium">
                founder@developerhut.in
              </a>.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Effective Date: November 2026</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
          >
            Understood &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
