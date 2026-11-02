/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("================================================================");
console.log("GOOGLE SEARCH CONSOLE OWNERSHIP VERIFICATION TEST SUITE");
console.log("================================================================\n");

let passed = 0;
let total = 0;

function test(name, fn) {
  total++;
  try {
    fn();
    console.log(`[PASS] ${total}. ${name}`);
    passed++;
  } catch (err) {
    console.error(`[FAIL] ${total}. ${name}`);
    console.error(err);
  }
}

const EXPECTED_TOKEN = "DEDHcCmMFLMR8GiMujSUsxnN9au9CxwPv-q2FcNpkJc";
const layoutPath = path.resolve(__dirname, "../src/app/layout.tsx");
const layoutContent = fs.readFileSync(layoutPath, "utf-8");

// Test 1: Exact verification token in layout.tsx metadata
test("Exact Google Search Console verification token configured in layout.tsx", () => {
  assert(layoutContent.includes(`google: "${EXPECTED_TOKEN}"`), "Verification token must match exactly in layout.tsx");
  assert(layoutContent.includes("verification:"), "verification object must exist in layout.tsx metadata");
});

// Test 2: Existing SEO metadata preservation in layout.tsx
test("Existing SEO metadata is preserved in layout.tsx without alteration or deletion", () => {
  assert(layoutContent.includes("Student IDE — India's First Student-Friendly Offline IDE | DeveloperHut"), "Title must be preserved");
  assert(layoutContent.includes("A complete coding environment designed for school students"), "Description must be preserved");
  assert(layoutContent.includes("CBSE Coding"), "Keywords must be preserved");
  assert(layoutContent.includes("https://developerhut.in"), "metadataBase and author URLs must be preserved");
  assert(layoutContent.includes("openGraph:"), "OpenGraph metadata must be preserved");
  assert(layoutContent.includes("twitter:"), "Twitter card metadata must be preserved");
  assert(layoutContent.includes("robots:"), "Robots directives must be preserved");
  assert(layoutContent.includes("viewport: Viewport"), "Viewport settings must be preserved");
});

// Test 3: Static build index.html contains the meta tag in <head>
test("Prerendered homepage (index.html) head contains google-site-verification meta tag", () => {
  const indexPath = path.resolve(__dirname, "../.next/server/app/index.html");
  assert(fs.existsSync(indexPath), ".next/server/app/index.html must exist after build");
  const indexHtml = fs.readFileSync(indexPath, "utf-8");

  const headMatch = indexHtml.match(/<head>([\s\S]*?)<\/head>/i);
  assert(headMatch, "<head> section must be present in index.html");
  assert(
    headMatch[1].includes('name="google-site-verification"') && headMatch[1].includes(EXPECTED_TOKEN),
    `Exact meta tag must be within <head>: <meta name="google-site-verification" content="${EXPECTED_TOKEN}" />`
  );
});

// Test 4: Meta tag is not located inside <body>
test("Verification meta tag is not placed inside <body>", () => {
  const indexPath = path.resolve(__dirname, "../.next/server/app/index.html");
  const indexHtml = fs.readFileSync(indexPath, "utf-8");

  const bodyMatch = indexHtml.match(/<body[\s\S]*?>([\s\S]*?)<\/body>/i);
  assert(bodyMatch, "<body> section must be present");
  const bodyContent = bodyMatch[1];
  assert(
    !bodyContent.includes('<meta name="google-site-verification"'),
    "Meta tag must never be placed inside the body tag"
  );
});

// Test 5: Child routes (/founder) also inherit search console verification
test("Founder subpage (/founder) also renders google-site-verification meta tag in <head>", () => {
  const founderHtmlPath = path.resolve(__dirname, "../.next/server/app/founder.html");
  if (fs.existsSync(founderHtmlPath)) {
    const founderHtml = fs.readFileSync(founderHtmlPath, "utf-8");
    const founderHead = founderHtml.match(/<head>([\s\S]*?)<\/head>/i);
    assert(founderHead, "<head> must exist in founder.html");
    assert(
      founderHead[1].includes(EXPECTED_TOKEN),
      "Founder page must inherit Google verification token in head"
    );
  }
});

console.log("\n================================================================");
console.log(`TOTAL: ${total} | PASSED: ${passed} | FAILED: ${total - passed}`);
console.log("================================================================\n");

if (passed !== total) {
  process.exit(1);
}
process.exit(0);
