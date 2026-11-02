"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X, ChevronRight, User } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface NavLinkItem {
  name: string;
  href: string;
  isFounder?: boolean;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isFounderPage = pathname === "/founder";
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection for sticky header shadow & background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu on Escape key press
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Close mobile menu on window resize to desktop breakpoint (>= 1280px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Canonical navigation items
  const navLinks: NavLinkItem[] = [
    { name: "Home", href: isFounderPage ? "/" : "#top" },
    { name: "Features", href: isFounderPage ? "/#features" : "#features" },
    { name: "Languages", href: isFounderPage ? "/#languages" : "#languages" },
    { name: "Curriculum", href: isFounderPage ? "/#curriculum" : "#curriculum" },
    { name: "Screenshots", href: isFounderPage ? "/#screenshots" : "#screenshots" },
    { name: "Tutorial", href: isFounderPage ? "/#tutorial" : "#tutorial" },
    { name: "Download", href: isFounderPage ? "/#download" : "#download" },
    { name: "FAQ", href: isFounderPage ? "/#faq" : "#faq" },
    { name: "About", href: isFounderPage ? "/#about" : "#about" },
    { name: "Founder", href: "/founder", isFounder: true },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1D]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/25"
          : "bg-[#0A0F1D]/80 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            href={isFounderPage ? "/" : "#top"}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 shrink-0"
            aria-label="Student IDE Home"
            onClick={handleLinkClick}
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
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
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

          {/* Desktop Navigation Links (Visible on >= 1280px / xl to prevent wrapping or collision) */}
          <nav
            className="hidden xl:flex items-center gap-1 2xl:gap-1.5"
            aria-label="Desktop primary navigation"
          >
            {navLinks.map((link) => {
              const isFounderActive = isFounderPage && link.isFounder;

              // Link styling: normal navigation link matching all others, subtle cyan hover, highlighted when on /founder
              const linkClasses = `px-2.5 py-1.5 2xl:px-3 2xl:py-2 text-[13px] 2xl:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center gap-1.5 ${
                isFounderActive
                  ? "text-cyan-300 font-semibold bg-white/10"
                  : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
              }`;

              if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={linkClasses}
                    aria-current={isFounderActive ? "page" : undefined}
                  >
                    {link.isFounder && (
                      <User className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
                    )}
                    <span>{link.name}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={linkClasses}
                >
                  {link.isFounder && (
                    <User className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action: Primary CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.downloadUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs 2xl:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/25 hover:shadow-cyan-500/20 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download for Windows</span>
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Menu Button (< 1280px / xl) */}
          <div className="flex xl:hidden items-center">
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown & Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop Overlay: closes when clicked outside */}
          <div
            className="fixed inset-0 top-20 bg-black/70 backdrop-blur-sm z-40 transition-opacity xl:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-down / Dropdown Menu Panel */}
          <div
            id="mobile-navigation-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto bg-[#0A0F1D]/98 border-b border-white/10 shadow-2xl z-50 p-4 sm:p-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-3 duration-200 xl:hidden focus:outline-none"
          >
            {/* Navigation links list */}
            <nav className="grid grid-cols-1 gap-1" aria-label="Mobile links">
              {navLinks.map((link) => {
                const isFounderActive = isFounderPage && link.isFounder;

                const linkClasses = `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[44px] ${
                  isFounderActive
                    ? "text-cyan-300 font-semibold bg-white/10"
                    : "text-slate-200 hover:text-cyan-300 hover:bg-white/5 active:bg-white/10"
                }`;

                if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={linkClasses}
                      aria-current={isFounderActive ? "page" : undefined}
                    >
                      <span className="flex items-center gap-2.5">
                        {link.isFounder && (
                          <User className="w-4 h-4 text-cyan-400 shrink-0" />
                        )}
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
                    onClick={handleLinkClick}
                    className={linkClasses}
                  >
                    <span className="flex items-center gap-2.5">
                      {link.isFounder && (
                        <User className="w-4 h-4 text-cyan-400 shrink-0" />
                      )}
                      <span>{link.name}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Action CTA */}
            <div className="pt-3 border-t border-white/10">
              <a
                href={SITE_CONFIG.downloadUrl}
                download
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/30 active:scale-[0.98] transition-all min-h-[48px]"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>Download for Windows (x64)</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
