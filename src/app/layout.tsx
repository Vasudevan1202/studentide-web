import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#10172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Student IDE — India's First Student-Friendly Offline IDE | DeveloperHut",
  description:
    "A complete coding environment designed for school students (Classes 6–12), with offline programming tools for Python, C++, HTML, CSS, JavaScript, SQL, and PHP. Learn. Code. Build.",
  keywords: [
    "Student IDE",
    "Offline IDE",
    "India School Coding",
    "CBSE Coding",
    "ICSE Computer Science",
    "Python Offline Editor",
    "C++ Compiler Windows",
    "School Computer Lab Software",
    "DeveloperHut",
    "Coding for Kids India",
  ],
  authors: [{ name: "DeveloperHut", url: "https://developerhut.in" }],
  creator: "DeveloperHut",
  publisher: "DeveloperHut",
  metadataBase: new URL("https://developerhut.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/branding/icon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/branding/icon_128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/branding/icon_256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [{ url: "/branding/icon_128x128.png" }],
  },
  openGraph: {
    title: "Student IDE — India's First Student-Friendly Offline IDE",
    description:
      "A complete coding environment designed for school students, with offline programming tools for Python, C++, HTML, CSS, JavaScript, SQL, and PHP.",
    url: "https://developerhut.in",
    siteName: "Student IDE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/branding/icon.png",
        width: 512,
        height: 512,
        alt: "Student IDE — Offline Coding Environment by DeveloperHut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student IDE — India's First Student-Friendly Offline IDE",
    description:
      "A complete coding environment designed for school students, with offline programming tools. Learn. Code. Build.",
    creator: "@DeveloperHut",
    images: ["/branding/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0A0F1D] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
