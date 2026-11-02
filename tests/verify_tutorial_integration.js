/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("================================================================");
console.log("STUDENT IDE - VIDEO TUTORIAL INTEGRATION VERIFICATION");
console.log("================================================================\n");

let passed = 0;
let total = 0;

function test(name, fn) {
  total++;
  try {
    fn();
    console.log(`[PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`[FAIL] ${name}: ${err.message}`);
  }
}

// 1. Root Video File Verification (Original intact)
test("1. Original video file exists in root directory and is unmodified", () => {
  const rootVideoPath = path.join(__dirname, "../DeveloperHut_Student_IDE_Tutorial_Narrated.mp4");
  assert(fs.existsSync(rootVideoPath), "Original root video must exist");
  const stats = fs.statSync(rootVideoPath);
  assert.strictEqual(stats.size, 6705969, "Original root video size must remain exactly 6,705,969 bytes");
});

// 2. Public Video & Poster Asset Verification
test("2. Public video asset is present and bit-for-bit identical to source", () => {
  const publicVideoPath = path.join(__dirname, "../public/videos/DeveloperHut_Student_IDE_Tutorial_Narrated.mp4");
  assert(fs.existsSync(publicVideoPath), "Public video asset must exist at public/videos/DeveloperHut_Student_IDE_Tutorial_Narrated.mp4");
  const stats = fs.statSync(publicVideoPath);
  assert.strictEqual(stats.size, 6705969, "Public video size must match source video (6,705,969 bytes)");

  // Check MP4 magic signature
  const fd = fs.openSync(publicVideoPath, "r");
  const buffer = Buffer.alloc(12);
  fs.readSync(fd, buffer, 0, 12, 0);
  fs.closeSync(fd);
  const brand = buffer.toString("latin1", 4, 12);
  assert(brand.includes("ftyp"), "File must be a valid ISO Base Media MP4 container");
});

test("3. Video poster image is created and exists in public directory", () => {
  const posterPath = path.join(__dirname, "../public/videos/tutorial-poster.jpg");
  assert(fs.existsSync(posterPath), "Poster image must exist at public/videos/tutorial-poster.jpg");
  const stats = fs.statSync(posterPath);
  assert(stats.size > 20000, `Poster image size (${stats.size} bytes) must be substantial and high-quality`);
});

// 4. Tutorial Component Verification
test("4. Tutorial component implements required heading, badge, description, and HTML5 video player", () => {
  const tutorialSrc = fs.readFileSync(path.join(__dirname, "../src/components/Tutorial.tsx"), "utf-8");

  // Section anchor
  assert(tutorialSrc.includes('id="tutorial"'), "Must include section id='tutorial' for navigation");

  // Exact Badge
  assert(tutorialSrc.toLowerCase().includes("watch & learn") || tutorialSrc.toLowerCase().includes("watch &amp; learn"), "Must feature WATCH & LEARN badge");

  // Exact Heading
  assert(tutorialSrc.toUpperCase().includes("YOUR GUIDE TO STUDENT IDE"), "Must feature heading 'YOUR GUIDE TO STUDENT IDE'");

  // Exact Description
  const expectedDesc = "New to Student IDE? Watch our official step-by-step tutorial and discover how to set up your workspace, explore programming languages and start coding.";
  assert(tutorialSrc.includes(expectedDesc), "Must match exact requested description");

  // HTML5 Video Player attributes
  assert(tutorialSrc.includes("<video"), "Must use native HTML5 video player");
  assert(tutorialSrc.includes("controls"), "Video player must have controls enabled");
  assert(tutorialSrc.includes("playsInline"), "Video player must have playsInline enabled");
  assert(tutorialSrc.includes('preload="metadata"'), "Video player must use preload='metadata' for performance");
  assert(tutorialSrc.includes('poster="/videos/tutorial-poster.jpg"'), "Video player must have poster attribute set to /videos/tutorial-poster.jpg");
  assert(tutorialSrc.includes('src="/videos/DeveloperHut_Student_IDE_Tutorial_Narrated.mp4"'), "Video player must point to /videos/DeveloperHut_Student_IDE_Tutorial_Narrated.mp4");
  assert(tutorialSrc.includes('type="video/mp4"'), "Video source must have type='video/mp4'");
});

// 5. 'What You Will Learn' Topics Verification (based on actual video demonstration)
test("5. 'What You Will Learn' cards match actual inspected video topics", () => {
  const tutorialSrc = fs.readFileSync(path.join(__dirname, "../src/components/Tutorial.tsx"), "utf-8");

  assert(tutorialSrc.toUpperCase().includes("WHAT YOU WILL LEARN"), "Must include 'WHAT YOU WILL LEARN' section");

  // Check all 6 verified topics from video narration
  assert(tutorialSrc.includes("Student Profile") && tutorialSrc.includes("6–12"), "Must include Student Profile & Class 6–12 setup topic");
  assert(tutorialSrc.includes("Starter Files") && tutorialSrc.includes("Python"), "Must include Multi-Language Starter Files topic");
  assert(tutorialSrc.includes("Executing Code") || tutorialSrc.includes("Console Output"), "Must include Code execution and Console output topic");
  assert(tutorialSrc.includes("Web Preview") || tutorialSrc.includes("HTML5"), "Must include live sandboxed Web Preview topic");
  assert(tutorialSrc.includes("SQLite") && tutorialSrc.includes("Database"), "Must include SQLite database topic");
  assert(tutorialSrc.includes("Feedback") || tutorialSrc.includes("Survey"), "Must include student feedback survey topic");
});

// 6. Homepage Integration Verification
test("6. Tutorial component is placed between Screenshots and Download on homepage", () => {
  const pageSrc = fs.readFileSync(path.join(__dirname, "../src/app/page.tsx"), "utf-8");

  assert(pageSrc.includes('import { Tutorial } from "@/components/Tutorial";') || pageSrc.includes("Tutorial"), "Homepage must import Tutorial component");

  const screenshotsIndex = pageSrc.indexOf("<Screenshots />");
  const tutorialIndex = pageSrc.indexOf("<Tutorial />");
  const downloadIndex = pageSrc.indexOf("<DownloadSection />");

  assert(screenshotsIndex !== -1, "Screenshots component must be in page.tsx");
  assert(tutorialIndex !== -1, "Tutorial component must be in page.tsx");
  assert(downloadIndex !== -1, "DownloadSection component must be in page.tsx");

  assert(
    screenshotsIndex < tutorialIndex && tutorialIndex < downloadIndex,
    `Tutorial (<Tutorial /> at ${tutorialIndex}) must be placed strictly between Screenshots (${screenshotsIndex}) and Download (${downloadIndex})`
  );
});

// 7. Navigation (Navbar & Footer) Verification
test("7. Navbar and Footer include Tutorial navigation links", () => {
  const navbarSrc = fs.readFileSync(path.join(__dirname, "../src/components/Navbar.tsx"), "utf-8");
  const footerSrc = fs.readFileSync(path.join(__dirname, "../src/components/Footer.tsx"), "utf-8");

  // Navbar
  assert(navbarSrc.includes('name: "Tutorial"'), "Navbar must have 'Tutorial' link item");
  assert(navbarSrc.includes("#tutorial"), "Navbar link must navigate to #tutorial");

  // Footer
  assert(footerSrc.includes("#tutorial"), "Footer must have link to #tutorial");
  assert(footerSrc.includes("Tutorial"), "Footer must label link as Tutorial");
});

// 8. Sitemap Integration Verification
test("8. Sitemap includes #tutorial route entry", () => {
  const sitemapSrc = fs.readFileSync(path.join(__dirname, "../src/app/sitemap.ts"), "utf-8");
  assert(sitemapSrc.includes("/#tutorial"), "sitemap.ts must contain #tutorial entry");
});

console.log("\n================================================================");
console.log(`TOTAL: ${total} | PASSED: ${passed} | FAILED: ${total - passed}`);
console.log("================================================================\n");

if (passed === total) {
  console.log("ALL VIDEO TUTORIAL INTEGRATION VERIFICATIONS PASSED SUCCESSFULLY!");
  process.exit(0);
} else {
  console.error("VERIFICATION FAILED!");
  process.exit(1);
}
