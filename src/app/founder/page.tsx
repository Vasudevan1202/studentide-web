import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FounderHero } from "@/components/founder/FounderHero";
import { FounderStory } from "@/components/founder/FounderStory";
import { FounderVision } from "@/components/founder/FounderVision";
import { DeveloperHutSection } from "@/components/founder/DeveloperHutSection";
import { MilestoneSection } from "@/components/founder/MilestoneSection";
import { PersonalMessage } from "@/components/founder/PersonalMessage";
import { ConnectSection } from "@/components/founder/ConnectSection";
import { FounderFooter } from "@/components/founder/FounderFooter";
import { FOUNDER_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vasu | Founder of DeveloperHut & Creator of Student IDE",
  description:
    "Discover the official story and vision of Vasu (Vasudevan M), a Class 12 student at Isha Vidhya, founder of DeveloperHut and creator of Student IDE — India's First Student-Friendly Offline IDE.",
  keywords: [
    "Vasu",
    "Vasudevan M",
    "Founder of DeveloperHut",
    "Creator of Student IDE",
    "Student Developer India",
    "Isha Vidhya",
    "Young Entrepreneur",
    "Offline IDE",
    "DeveloperHut",
  ],
  alternates: {
    canonical: "/founder",
  },
  openGraph: {
    title: "Vasu | Founder of DeveloperHut & Creator of Student IDE",
    description:
      "A high school student from India on a mission to make software development accessible, enjoyable, and frustration-free for school students everywhere.",
    url: "https://developerhut.in/founder",
    siteName: "Student IDE",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/founder/vasu.jpg",
        width: 659,
        height: 829,
        alt: "Vasu - Founder of DeveloperHut and Creator of Student IDE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasu | Founder of DeveloperHut & Creator of Student IDE",
    description:
      "Class 12 student at Isha Vidhya, founder of DeveloperHut, and creator of Student IDE. Learn. Code. Build.",
    images: ["/founder/vasu.jpg"],
  },
};

export default function FounderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FOUNDER_INFO.displayName,
    alternateName: FOUNDER_INFO.fullName,
    jobTitle: FOUNDER_INFO.role,
    description:
      "Class 12 student at Isha Vidhya, founder of DeveloperHut, and creator of Student IDE.",
    url: "https://developerhut.in/founder",
    image: "https://developerhut.in/founder/vasu.jpg",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Isha Vidhya",
    },
    worksFor: {
      "@type": "Organization",
      name: "DeveloperHut",
      url: FOUNDER_INFO.companyUrl,
    },
    sameAs: [
      "https://www.linkedin.com/in/vasudevanm18/",
      "https://github.com/Vasudevan1202",
      "https://www.instagram.com/vasu18.exe/",
      FOUNDER_INFO.companyUrl,
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1D] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-cyan-300">
      {/* Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Unified Site Navigation */}
      <Navbar />

      {/* Main Founder Profile Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <FounderHero />

        {/* Section 2: My Story */}
        <FounderStory />

        {/* Section 3: The Vision Behind Student IDE */}
        <FounderVision />

        {/* Section 4: DeveloperHut Section */}
        <DeveloperHutSection />

        {/* Section 5: Student IDE Milestone */}
        <MilestoneSection />

        {/* Section 6: Personal Message */}
        <PersonalMessage />

        {/* Section 7: Connect With the Founder */}
        <ConnectSection />
      </main>

      {/* Section 8: Dedicated Founder Footer */}
      <FounderFooter />
    </div>
  );
}
