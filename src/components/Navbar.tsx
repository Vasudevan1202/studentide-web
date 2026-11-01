"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X, ChevronRight, User } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isFounderPage = pathname === "/founder";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavItem {
    name: string;
    href: string;
    isSpecial?: boolean;
  }

  const homeNavLinks: NavItem[] = [
    { name: "Home", href: "#top" },
    { name: "Features", href: "#features" },
    { name: "Languages", href: "#languages" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Download", href: "#download" },
    { name: "FAQ", href: "#faq" },
    { name: "About", href: "#about" },
    { name: "Founder", href: "/founder", isSpecial: true },
  ];

  const founderNavLinks: NavItem[] = [
    { name: "Student IDE Home", href: "/" },
    { name: "The Journey", href: "#story" },
    { name: "Vision", href: "#vision" },
    { name: "DeveloperHut", href: "#developerhut" },
    { name: "Connect", href: "#connect" },
    { name: "Features", href: "/#features" },
    { name: "Download", href: "/#download" },
  ];

  const currentNavLinks: NavItem[] = isFounderPage ? founderNavLinks : homeNavLinks;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1D]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            href={isFounderPage ? "/" : "#top"}
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#10172A] rounded-[10px] flex items-center justify-center p-1.5">
                <Image
                  src="/branding/icon.png"
                  alt="Student IDE Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  STUDENT IDE
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  v1.0
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 -mt-0.5 tracking-wide">
                by DeveloperHut
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {currentNavLinks.map((link) => {
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center gap-1.5 ${
                      link.isSpecial
                        ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.isSpecial && <User className="w-3.5 h-3.5 text-cyan-400" />}
                    <span>{link.name}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={isFounderPage ? "/#download" : "#download"}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/25 hover:shadow-cyan-500/20 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0F1D]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {currentNavLinks.map((link) => {
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      link.isSpecial
                        ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                        : "text-slate-200 hover:text-cyan-300 hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.isSpecial && <User className="w-4 h-4 text-cyan-400" />}
                      <span>{link.name}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-white/10">
            <a
              href={isFounderPage ? "/#download" : "#download"}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/30"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows (x64)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
