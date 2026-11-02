import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LaunchCountdown } from "@/components/LaunchCountdown";
import { Features } from "@/components/Features";
import { Languages } from "@/components/Languages";
import { Curriculum } from "@/components/Curriculum";
import { Screenshots } from "@/components/Screenshots";
import { Tutorial } from "@/components/Tutorial";
import { DownloadSection } from "@/components/Download";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1D] text-[#F8FAFC]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Landing Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Official Launch Countdown & Live State */}
        <LaunchCountdown />

        {/* 3. Core Features Section */}
        <Features />

        {/* 4. Supported Languages Grid */}
        <Languages />

        {/* 5. Curriculum Integration (Classes 6-12) */}
        <Curriculum />

        {/* 6. Real Screenshots Showcase */}
        <Screenshots />

        {/* 7. Watch & Learn: Official Video Tutorial */}
        <Tutorial />

        {/* 8. Download & Installation Instructions */}
        <DownloadSection />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. About DeveloperHut & Mission */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
