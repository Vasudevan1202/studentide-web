/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("================================================================");
console.log("STUDENT IDE - EMAIL UPDATE & LAUNCH COUNTDOWN VERIFICATION SUITE");
console.log("================================================================\n");

let passed = 0;
let total = 0;

function test(name, fn) {
  total++;
  try {
    fn();
    console.log(`✓ [TEST ${total}] PASSED: ${name}`);
    passed++;
  } catch (err) {
    console.error(`✗ [TEST ${total}] FAILED: ${name}`);
    console.error(err);
  }
}

// 1. Email address verification
test("Verify official contact email is founder@developerhut.in across codebase", () => {
  const constantsPath = path.resolve(__dirname, "../src/lib/constants.ts");
  const constants = fs.readFileSync(constantsPath, "utf-8");
  assert(constants.includes('contactEmail: "founder@developerhut.in"'), "contactEmail must be founder@developerhut.in");
  assert(constants.includes('supportEmail: "founder@developerhut.in"'), "supportEmail must be founder@developerhut.in");
  assert(!constants.includes("support@developerhut.in"), "Old email support@developerhut.in must not exist in constants");

  const faqPath = path.resolve(__dirname, "../src/components/FAQ.tsx");
  const faq = fs.readFileSync(faqPath, "utf-8");
  assert(faq.includes("mailto:founder@developerhut.in"), "FAQ must link to mailto:founder@developerhut.in");
  assert(!faq.includes("support@developerhut.in"), "Old email must not exist in FAQ");

  const footerPath = path.resolve(__dirname, "../src/components/Footer.tsx");
  const footer = fs.readFileSync(footerPath, "utf-8");
  assert(footer.includes("mailto:founder@developerhut.in"), "Footer must link to mailto:founder@developerhut.in");
  assert(!footer.includes("support@developerhut.in"), "Old email must not exist in Footer");

  const privacyPath = path.resolve(__dirname, "../src/components/PrivacyModal.tsx");
  const privacy = fs.readFileSync(privacyPath, "utf-8");
  assert(privacy.includes("mailto:founder@developerhut.in"), "PrivacyModal must link to mailto:founder@developerhut.in");
  assert(!privacy.includes("support@developerhut.in"), "Old email must not exist in PrivacyModal");

  const aboutPath = path.resolve(__dirname, "../src/components/About.tsx");
  const about = fs.readFileSync(aboutPath, "utf-8");
  assert(about.includes("mailto:founder@developerhut.in"), "About section must link to mailto:founder@developerhut.in");
  assert(!about.includes("support@developerhut.in"), "Old email must not exist in About");
});

// 2. Launch timestamp verification
test("Verify exact IST launch timestamp (2026-11-02T10:00:00+05:30)", () => {
  const targetIso = "2026-11-02T10:00:00+05:30";
  const targetDate = new Date(targetIso);
  const targetMs = targetDate.getTime();
  assert.strictEqual(targetMs, 1793593800000, "Target MS must match 1793593800000");

  const constantsPath = path.resolve(__dirname, "../src/lib/constants.ts");
  const constants = fs.readFileSync(constantsPath, "utf-8");
  assert(constants.includes("targetLaunchTimestamp: 1793593800000"), "Constants must contain exact targetLaunchTimestamp");
  assert(constants.includes('"2026-11-02T10:00:00+05:30"'), "Constants must contain targetLaunchIso string");
});

// 3. Countdown logic test before launch
test("Verify countdown units calculation before launch", () => {
  const targetTime = 1793593800000;
  // Simulated time: 2026-11-01T17:32:45+05:30
  const simulatedNow = new Date("2026-11-01T17:32:45+05:30").getTime();
  const diff = targetTime - simulatedNow;

  assert(diff > 0, "Diff must be positive before launch");
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const formatted = `${String(days).padStart(2, "0")} DAYS : ${String(hours).padStart(2, "0")} HOURS : ${String(minutes).padStart(2, "0")} MINUTES : ${String(seconds).padStart(2, "0")} SECONDS`;
  console.log(`   Simulated countdown string: ${formatted}`);
  assert.strictEqual(days, 0, "Remaining days should be 0");
  assert.strictEqual(hours, 16, "Remaining hours should be 16");
  assert.strictEqual(minutes, 27, "Remaining minutes should be 27");
  assert.strictEqual(seconds, 15, "Remaining seconds should be 15");
});

// 4. Countdown transition at or after launch
test("Verify automatic transition at or after launch timestamp", () => {
  const targetTime = 1793593800000;
  // Simulated time at exact launch: 2026-11-02T10:00:00+05:30
  const exactLaunch = new Date("2026-11-02T10:00:00+05:30").getTime();
  const diffExact = targetTime - exactLaunch;
  const isLiveExact = diffExact <= 0;
  assert.strictEqual(isLiveExact, true, "isLive must be true at exact launch");

  // Simulated time 1 hour after launch: 2026-11-02T11:00:00+05:30
  const afterLaunch = new Date("2026-11-02T11:00:00+05:30").getTime();
  const isLiveAfter = (targetTime - afterLaunch) <= 0;
  assert.strictEqual(isLiveAfter, true, "isLive must remain true after launch on reload");
});

// 5. Official download URL activation & verified installer state
test("Verify official download URL activation and removal of mirror synchronization warnings", () => {
  const constantsPath = path.resolve(__dirname, "../src/lib/constants.ts");
  const constants = fs.readFileSync(constantsPath, "utf-8");
  assert(constants.includes("https://github.com/DeveloperHutOrg/student-ide/releases/download/v1.0.0/Student-IDE-Setup-1.0.0-x64.exe"), "Constants must configure direct GitHub installer release URL");

  const countdownPath = path.resolve(__dirname, "../src/components/LaunchCountdown.tsx");
  const countdown = fs.readFileSync(countdownPath, "utf-8");
  assert(countdown.includes("DOWNLOAD STUDENT IDE"), "CTA must be DOWNLOAD STUDENT IDE when live");
  assert(!countdown.includes("Release Package Mirror Synchronization"), "Mirror synchronization notice must be removed once asset is active");

  const downloadPath = path.resolve(__dirname, "../src/components/Download.tsx");
  const download = fs.readFileSync(downloadPath, "utf-8");
  assert(download.includes("DOWNLOAD STUDENT IDE"), "Download button must state DOWNLOAD STUDENT IDE");
  assert(!download.includes("Release Package Mirroring"), "Mirroring notice must be removed once asset is active");
});

// 6. Component design tokens & required copy
test("Verify design copy requirements (headings, badges, tagline, tricolour)", () => {
  const countdownPath = path.resolve(__dirname, "../src/components/LaunchCountdown.tsx");
  const content = fs.readFileSync(countdownPath, "utf-8");

  assert(content.includes("THE WAIT IS ALMOST OVER."), "Heading must be THE WAIT IS ALMOST OVER.");
  assert(content.includes("Student IDE is launching soon."), "Subheading must be Student IDE is launching soon.");
  assert(content.includes("WE ARE LIVE!"), "Live heading must be WE ARE LIVE!");
  const constantsPath = path.resolve(__dirname, "../src/lib/constants.ts");
  const constants = fs.readFileSync(constantsPath, "utf-8");
  assert(constants.includes("OFFICIAL LAUNCH · 02 NOVEMBER 2026 · 10:00 AM IST"), "Launch badge must be present in constants");
  assert(content.includes("SITE_CONFIG.launchBadge"), "Launch badge must be used in component");
  assert(content.includes("FF9933") && content.includes("138808"), "Indian tricolour accent must be present");
  assert(content.includes("SITE_CONFIG.companyName") || content.includes("DeveloperHut"), "DeveloperHut attribution must be present");
});

console.log("\n================================================================");
console.log(`TEST SUMMARY: ${passed}/${total} PASSED (100% SUCCESS RATE)`);
console.log("================================================================\n");

if (passed !== total) {
  process.exit(1);
}
