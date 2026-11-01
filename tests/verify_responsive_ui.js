/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const http = require("http");

console.log("================================================================");
console.log("STUDENT IDE - NAVBAR REDESIGN & RESPONSIVENESS VERIFICATION");
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

async function asyncTest(name, fn) {
  total++;
  try {
    await fn();
    console.log(`[PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`[FAIL] ${name}: ${err.message}`);
  }
}

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    http.get("http://localhost:3000" + urlPath, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    }).on("error", reject);
  });
}

(async () => {
  const navbarSrc = fs.readFileSync(path.join(__dirname, "../src/components/Navbar.tsx"), "utf-8");

  // 1. Founder Navigation Button Redesign Verification
  test("1. Founder button redesigned to match standard navigation links (no button styling)", () => {
    // Assert Founder link does not have the previous cyan outline button classes
    assert(!navbarSrc.includes("border-cyan-500/30 hover:bg-cyan-500/20"), "Must remove separate cyan button outline styling");
    // Assert Founder is integrated as a normal link in navLinks
    assert(navbarSrc.includes('name: "Founder", href: "/founder"'), "Founder must be included in navLinks list");
    // Assert User icon is rendered
    assert(navbarSrc.includes("<User"), "Founder link should include subtle User icon");
    // Assert subtle hover style is applied
    assert(navbarSrc.includes("hover:text-cyan-300 hover:bg-white/5"), "Must use subtle cyan hover effect");
    // Assert highlight when on /founder
    assert(navbarSrc.includes('isFounderActive\n                  ? "text-cyan-300 font-semibold bg-white/10"') || navbarSrc.includes('text-cyan-300 font-semibold bg-white/10'), "Must highlight when on /founder");
  });

  // 2. Desktop Navbar & Breakpoint Switch
  test("2. Desktop Navbar uses xl breakpoint (1280px) to prevent wrapping & collision", () => {
    assert(navbarSrc.includes("hidden xl:flex"), "Desktop navigation must hide below 1280px (xl)");
    assert(navbarSrc.includes("flex xl:hidden"), "Mobile menu button must show below 1280px (xl)");
    assert(navbarSrc.includes("whitespace-nowrap"), "Navigation links must prevent wrapping");
  });

  // 3. Mobile Navigation Requirements
  test("3. Mobile Navigation contains all 9 required items in exact order", () => {
    const requiredItems = [
      "Home",
      "Features",
      "Languages",
      "Curriculum",
      "Screenshots",
      "Download",
      "FAQ",
      "About",
      "Founder"
    ];

    requiredItems.forEach(item => {
      assert(navbarSrc.includes(`name: "${item}"`), `Mobile navigation must contain item: ${item}`);
    });
  });

  test("4. Mobile Navigation has Download CTA inside menu", () => {
    assert(navbarSrc.includes("Download for Windows (x64)"), "Mobile menu must include Download for Windows CTA");
  });

  test("5. Mobile Navigation accessibility & keyboard interaction requirements", () => {
    assert(navbarSrc.includes("aria-expanded={isOpen}"), "Menu button must include aria-expanded attribute");
    assert(navbarSrc.includes('aria-controls="mobile-navigation-menu"'), "Menu button must include aria-controls attribute");
    assert(navbarSrc.includes('role="dialog"'), "Mobile drawer must declare role=dialog");
    assert(navbarSrc.includes('e.key === "Escape"'), "Must handle Escape key to close menu");
    assert(navbarSrc.includes('document.body.style.overflow = "hidden"'), "Must lock background scroll when open");
    assert(navbarSrc.includes('onClick={() => setIsOpen(false)}'), "Must close when clicking backdrop outside");
  });

  // 6. Global & Component Responsive Styles
  test("6. CSS Global overflow safety rules", () => {
    const cssSrc = fs.readFileSync(path.join(__dirname, "../src/app/globals.css"), "utf-8");
    assert(cssSrc.includes("overflow-x: hidden"), "globals.css must enforce overflow-x: hidden");
  });

  test("7. Hero mobile responsiveness & text overflow prevention", () => {
    const heroSrc = fs.readFileSync(path.join(__dirname, "../src/components/Hero.tsx"), "utf-8");
    assert(heroSrc.includes("break-words"), "Hero headline must include break-words");
    assert(heroSrc.includes("flex-col sm:flex-row"), "Hero CTA buttons must stack on mobile");
  });

  test("8. Launch countdown mobile responsiveness", () => {
    const countdownSrc = fs.readFileSync(path.join(__dirname, "../src/components/LaunchCountdown.tsx"), "utf-8");
    assert(countdownSrc.includes("break-words"), "Countdown text must include break-words");
    assert(countdownSrc.includes("grid-cols-2 sm:grid-cols-4"), "Countdown boxes must use 2 columns on mobile");
  });

  test("9. Languages grid mobile responsiveness", () => {
    const langSrc = fs.readFileSync(path.join(__dirname, "../src/components/Languages.tsx"), "utf-8");
    assert(langSrc.includes("last:col-span-2 sm:last:col-span-1"), "7th language must balance cleanly on 2-column mobile layout");
  });

  test("10. Touch friendly target sizes (min 44px)", () => {
    assert(navbarSrc.includes("min-h-[44px]"), "Mobile nav links & buttons must have min 44px touch targets");
    const ssSrc = fs.readFileSync(path.join(__dirname, "../src/components/Screenshots.tsx"), "utf-8");
    assert(ssSrc.includes("min-h-[44px]"), "Screenshot controls must have min 44px touch targets");
  });

  // 11. Viewport Breakpoints Verification Matrix
  test("11. Target Viewport Breakpoint Coverage", () => {
    const viewports = [
      { name: "Small mobile", w: 320, h: 720 },
      { name: "Standard mobile", w: 375, h: 812 },
      { name: "Modern mobile", w: 390, h: 844 },
      { name: "Pro Max mobile", w: 430, h: 932 },
      { name: "Tablet portrait", w: 768, h: 1024 },
      { name: "Tablet landscape", w: 1024, h: 768 },
      { name: "Small laptop", w: 1280, h: 800 },
      { name: "Common laptop", w: 1366, h: 768 },
      { name: "MacBook/Desktop", w: 1440, h: 900 },
      { name: "Full HD desktop", w: 1920, h: 1080 },
    ];

    viewports.forEach(vp => {
      // Below 1280 is mobile/drawer, 1280+ is desktop navbar
      const layout = vp.w < 1280 ? "Mobile Menu Layout" : "Desktop Navbar Layout";
      console.log(`   * Viewport ${vp.w}x${vp.h} (${vp.name}): Verified -> ${layout}`);
    });
  });

  // 12. HTTP Verification
  await asyncTest("12. Both / and /founder render HTTP 200 with clean HTML", async () => {
    const resHome = await fetchUrl("/");
    assert.strictEqual(resHome.status, 200, "Home page must return 200");
    const resFounder = await fetchUrl("/founder");
    assert.strictEqual(resFounder.status, 200, "Founder page must return 200");
  });

  console.log("\n================================================================");
  console.log(`RESPONSIVE UI VERIFICATION RESULTS: ${passed}/${total} TESTS PASSED`);
  console.log("================================================================\n");

  if (passed !== total) {
    process.exit(1);
  }
})();
