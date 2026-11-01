/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const http = require("http");

console.log("================================================================");
console.log("STUDENT IDE - FOUNDER PROFILE PAGE COMPREHENSIVE VERIFICATION");
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

function getSha256(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(content).digest("hex");
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
  // Test 1: Image Asset Integrity (Exact match with user uploads)
  test("1. Vasu photo asset integrity (SHA256 exact match with user upload)", () => {
    const originalPath = "C:/Users/vasud/.gemini/antigravity/brain/e573a283-3fac-4207-9fcf-43ece3d26313/.user_uploaded/media_1793544017486.jpg";
    const publicPath = path.join(__dirname, "../public/founder/vasu.jpg");
    assert(fs.existsSync(publicPath), "public/founder/vasu.jpg must exist");
    assert.strictEqual(getSha256(publicPath), getSha256(originalPath), "Photo hash must match user-provided photo");
  });

  test("2. DeveloperHut logo asset integrity (SHA256 exact match with user upload)", () => {
    const originalPath = "C:/Users/vasud/.gemini/antigravity/brain/e573a283-3fac-4207-9fcf-43ece3d26313/.user_uploaded/media_1793544035649.jpg";
    const publicPath = path.join(__dirname, "../public/branding/developerhut-logo.jpg");
    assert(fs.existsSync(publicPath), "public/branding/developerhut-logo.jpg must exist");
    assert.strictEqual(getSha256(publicPath), getSha256(originalPath), "Logo hash must match user-provided logo");
  });

  // Test 3: Constants & Data Model
  test("3. FOUNDER_INFO defined with exact required details in constants.ts", () => {
    const constantsContent = fs.readFileSync(path.join(__dirname, "../src/lib/constants.ts"), "utf-8");
    assert(constantsContent.includes("displayName: \"Vasu\""), "displayName must be Vasu");
    assert(constantsContent.includes("fullName: \"Vasudevan M\""), "fullName must be Vasudevan M");
    assert(constantsContent.includes("role: \"Founder of DeveloperHut\""), "role must be Founder of DeveloperHut");
    assert(constantsContent.includes("product: \"Creator of Student IDE\""), "product must be Creator of Student IDE");
    assert(constantsContent.includes("education: \"Class 12 Student, Isha Vidhya\""), "education must be Class 12 Student, Isha Vidhya");
    assert(constantsContent.includes("companyUrl: \"https://www.developerhut.in/\""), "companyUrl must be https://www.developerhut.in/");
    assert(constantsContent.includes("email: \"founder@developerhut.in\""), "email must be founder@developerhut.in");
  });

  // Test 4: Check /founder HTTP response & HTML
  await asyncTest("4. Route /founder returns HTTP 200 with proper HTML", async () => {
    const { status, body } = await fetchUrl("/founder");
    assert.strictEqual(status, 200, "Should return 200 OK");
    assert(body.includes("<title>Vasu | Founder of DeveloperHut &amp; Creator of Student IDE</title>"), "Page title must match specification");
  });

  // Test 5: Check Founder Page 8 sections content
  await asyncTest("5. Founder page includes all 8 core editorial sections and exact content", async () => {
    const { body } = await fetchUrl("/founder");

    // Section 1: Hero
    assert(body.includes("ABOUT THE FOUNDER") || body.includes("About the Founder"), "Must include About the Founder label");
    assert(body.includes("VASU"), "Must include VASU");
    assert(body.includes("Vasudevan M"), "Must include Vasudevan M");
    assert(body.includes("Class 12"), "Must include Class 12");
    assert(body.includes("Isha Vidhya"), "Must include Isha Vidhya");
    assert(body.includes("STUDENT DEVELOPER"), "Must include Main Identity");

    // Section 2: Story
    assert(body.includes("The Journey") || body.includes("THE JOURNEY"), "Must include The Journey label");
    assert(body.includes("A Student With a Vision to Build"), "Must include exact story heading");
    assert(body.includes("Hi, I&#x27;m Vasu, a Class 12 student at Isha Vidhya and the founder of DeveloperHut.") || body.includes("I'm Vasu, a Class 12 student"), "Must include paragraph 1");
    assert(body.includes("My journey with technology started with pure curiosity."), "Must include paragraph 2");
    assert(body.includes("That idea became Student IDE."), "Must include concluding story line");

    // Section 3: Vision
    assert(body.includes("Built by a Student. Designed for Students."), "Must include exact vision heading");
    assert(body.includes("Explore Programming Without Complicated Setup"), "Must include Principle 1");
    assert(body.includes("Learn Different Coding Languages in One Place"), "Must include Principle 2");
    assert(body.includes("Experiment With Ideas Freely and Safely"), "Must include Principle 3");
    assert(body.includes("Build Your First Projects With Confidence"), "Must include Principle 4");
    assert(body.includes("Develop Practical Technology Skills for the Future"), "Must include Principle 5");

    // Section 4: DeveloperHut
    assert(body.includes("Building Beyond Ideas"), "Must include DeveloperHut heading");
    assert(body.includes("developerhut-logo.jpg"), "Must reference DeveloperHut logo");
    assert(body.includes("https://www.developerhut.in/"), "Must link to developerhut.in");

    // Section 5: Milestone
    assert(body.includes("INDIA&#x27;S FIRST STUDENT-FRIENDLY OFFLINE IDE") || body.includes("INDIA'S FIRST STUDENT-FRIENDLY OFFLINE IDE"), "Must include marketing headline");
    assert(body.includes("Learn. Code. Build."), "Must include tagline");
    assert(body.includes("PROUDLY BUILT IN INDIA"), "Must include Made in India badge");

    // Section 6: Personal Message
    assert(body.includes("A MESSAGE TO YOUNG BUILDERS") || body.includes("A Message to Young Builders"), "Must include Message label");
    assert(body.includes("You don&#x27;t need a degree to start building") || body.includes("You don't need a degree to start building"), "Must include exact quote");

    // Section 7: Connect
    assert(body.includes("LET&#x27;S CONNECT") || body.includes("LET'S CONNECT") || body.includes("Let&#x27;s Connect"), "Must include Connect heading");
    assert(body.includes("https://www.instagram.com/vasu18.exe/"), "Must link to Instagram");
    assert(body.includes("https://www.linkedin.com/in/vasudevanm18/"), "Must link to LinkedIn");
    assert(body.includes("https://github.com/Vasudevan1202"), "Must link to GitHub");
    assert(body.includes("mailto:founder@developerhut.in"), "Must link to Email");

    // Section 8: Footer
    assert(body.includes("Built with passion by Vasu") || body.includes("DeveloperHut. Built"), "Must include Founder attribution footer");
  });

  // Test 6: Check Homepage Navigation to Founder Page
  await asyncTest("6. Homepage contains links to /founder in Navbar, About section, and Footer", async () => {
    const { body } = await fetchUrl("/");
    assert(body.includes("href=\"/founder\""), "Homepage must contain links to /founder");
    assert(body.includes("Read Founder Story"), "Homepage About section must feature Read Founder Story button");
  });

  // Test 7: Check Sitemap contains /founder
  test("7. Sitemap includes /founder entry", () => {
    const sitemapContent = fs.readFileSync(path.join(__dirname, "../src/app/sitemap.ts"), "utf-8");
    assert(sitemapContent.includes("url: `${baseUrl}/founder`"), "sitemap.ts must contain /founder URL");
  });

  console.log("\n================================================================");
  console.log(`FOUNDER PROFILE VERIFICATION RESULTS: ${passed}/${total} TESTS PASSED`);
  console.log("================================================================\n");

  if (passed !== total) {
    process.exit(1);
  }
})();
