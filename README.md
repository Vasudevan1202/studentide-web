# Student IDE — Official Website

> **India's First Student-Friendly Offline IDE**  
> Developed by **DeveloperHut** (`https://developerhut.in`)  
> Tagline: *Learn. Code. Build.* • Proudly Built in India 🇮🇳

This repository contains the complete, production-ready official website for **STUDENT IDE**, built with Next.js App Router, TypeScript, and Tailwind CSS.

---

## 🌟 Overview

Student IDE is a desktop integrated development environment created specifically for Indian school students (Classes 6–12), computer teachers, and school laboratories. It bundles Monaco Editor, MinGW-w64 GCC 14.1, Python 3.11, PHP 8.2 CLI, and SQLite into an autonomous Windows installer that works 100% offline without external dependencies.

This website serves as the official landing page, technical documentation, screenshot showcase, and download portal.

---

## 🚀 Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with custom brand color palette
- **Icons:** Lucide React
- **Typography:** Modern, lightweight sans-serif font stack
- **Metadata & SEO:** Automated Open Graph, Twitter Cards, `robots.txt`, and `sitemap.xml`
- **Asset Optimization:** Next.js Image optimization with responsive srcset

---

## 🎨 Brand Design System

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Navy (Background)** | `#0A0F1D` / `#10172A` | Background layers & cards |
| **Indigo Brand** | `#4F46E5` | Primary CTA, gradients & focus rings |
| **Cyan Brand** | `#06B6D4` | Accent highlights & runtime status badges |
| **Purple Brand** | `#8B5CF6` | Secondary gradients & curriculum tags |
| **White** | `#FFFFFF` | Primary headings & high-contrast text |
| **Slate Gray** | `#94A3B8` / `#CBD5E1` | Body copy, descriptions & metadata |
| **Light Background** | `#F8FAFC` | Contrasting light elements |

---

## 📁 Project Structure

```text
Student IDE web/
├── public/
│   ├── branding/              # Official Student IDE logo, icons, and svgs
│   │   ├── icon.png
│   │   ├── icon_128x128.png
│   │   ├── icon_256x256.png
│   │   ├── logo.svg
│   │   └── logo-icon.svg
│   ├── screenshots/           # Authentic application captures
│   │   ├── hero_editor.png    # High-resolution hero mockup
│   │   ├── dashboard.png      # Student profile & starter cards
│   │   ├── editor.png         # Monaco editor interface
│   │   ├── terminal.png       # Integrated terminal output
│   │   ├── languages.png      # Language preferences modal
│   │   ├── survey.png         # Student feedback survey
│   │   └── admin.png          # Offline admin dashboard
│   └── favicon.ico            # Official multi-size favicon
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 theme & custom utilities
│   │   ├── layout.tsx         # Root layout with SEO & Open Graph metadata
│   │   ├── page.tsx           # Assembled official landing page
│   │   ├── robots.ts          # Automated robots.txt route
│   │   └── sitemap.ts         # Automated sitemap.xml generator
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx           # Hero section with mockup & guarantees
│   │   ├── Features.tsx       # 8 tested core feature cards
│   │   ├── Languages.tsx      # Multi-language runtime diagnostic grid
│   │   ├── Curriculum.tsx     # Classes 6-8, 9-10, 11-12 stage cards
│   │   ├── Screenshots.tsx    # Interactive gallery with zoom modal
│   │   ├── Download.tsx       # Windows installer, SHA-256 & instructions
│   │   ├── FAQ.tsx            # Interactive 8-question accordion
│   │   ├── About.tsx          # DeveloperHut story & mission
│   │   ├── Footer.tsx         # Brand footer with legal links
│   │   └── PrivacyModal.tsx   # Offline child privacy policy
│   └── lib/
│       └── constants.ts       # Centralized content, URLs & checksums
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Local Development

### 1. Prerequisites
- **Node.js:** v18.18.0 or newer (tested with Node v24.x)
- **npm:** v9.x or newer

### 2. Installation
```bash
# Clone the repository and navigate to the project directory
cd "Student IDE web"

# Install project dependencies
npm install
```

### 3. Environment Variables (Optional)
To customize the hosted download location of the Windows installer, create a `.env.local` file in the root directory:

```env
# Optional: Set a custom hosted HTTPS installer URL
NEXT_PUBLIC_DOWNLOAD_URL=https://github.com/DeveloperHutOrg/student-ide/releases/download/v1.0.0/Student-IDE-Setup-1.0.0-x64.exe
```

*Note: The website defaults to the official GitHub Release asset URL when this variable is not provided.*

### 4. Running the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📦 Production Build

To test and compile an optimized production build:

```bash
# Compile optimized static pages and bundles
npm run build

# Start the local production server
npm run start
```

### Build Verification:
- **Zero Errors:** Strict TypeScript checks pass with 0 warnings.
- **Static Generation:** All routes (`/`, `/robots.txt`, `/sitemap.xml`) are pre-rendered statically (`○ Static`) for sub-second page loads.

---

## 🚀 Deployment Guide

### Option 1: Vercel (Recommended)
1. Push the repository to GitHub.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. The framework will automatically be detected as Next.js.
4. (Optional) Set `NEXT_PUBLIC_DOWNLOAD_URL` under Environment Variables.
5. Click **Deploy**.

### Option 2: Netlify
1. Connect repository in [Netlify](https://app.netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `.next`
4. Deploy site.

### Option 3: Docker Container
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔒 Security & Verification

The official installer verification hash provided on the website:

- **Filename:** `Student-IDE-Setup-1.0.0-x64.exe`
- **SHA-256 Checksum:** `544ee8da3007b95e46e8df44d46e9575000163f149b2960dae4f4fd78e58bcaa`

Users can verify their local file in PowerShell via:
```powershell
Get-FileHash -Algorithm SHA256 .\Student-IDE-Setup-1.0.0-x64.exe
```

---

## 📄 License & Attribution

- **Product:** Student IDE
- **Developer:** DeveloperHut (`https://developerhut.in`)
- **Official Contact:** `founder@developerhut.in`
- **Copyright:** &copy; 2026 DeveloperHut. All rights reserved.
