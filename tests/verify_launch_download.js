/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const https = require("https");

console.log("================================================================");
console.log("STUDENT IDE - OFFICIAL LAUNCH DOWNLOAD VERIFICATION SUITE");
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

async function asyncTest(name, fn) {
  total++;
  try {
    await fn();
    console.log(`[PASS] ${total}. ${name}`);
    passed++;
  } catch (err) {
    console.error(`[FAIL] ${total}. ${name}`);
    console.error(err);
  }
}

function fetchHeaders(url, redirectLimit = 5) {
  return new Promise((resolve, reject) => {
    if (redirectLimit <= 0) return reject(new Error("Too many redirects"));
    const req = https.request(url, { method: "HEAD" }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHeaders(res.headers.location, redirectLimit - 1));
      }
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
      });
    });
    req.on("error", reject);
    req.end();
  });
}

function fetchByteRange(url, start = 0, end = 1023, redirectLimit = 5) {
  return new Promise((resolve, reject) => {
    if (redirectLimit <= 0) return reject(new Error("Too many redirects"));
    const options = {
      headers: { Range: `bytes=${start}-${end}` },
    };
    const req = https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchByteRange(res.headers.location, start, end, redirectLimit - 1));
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: Buffer.concat(chunks),
        });
      });
    });
    req.on("error", reject);
  });
}

(async () => {
  const constantsPath = path.resolve(__dirname, "../src/lib/constants.ts");
  const constants = fs.readFileSync(constantsPath, "utf-8");

  const expectedUrl = "https://github.com/DeveloperHutOrg/student-ide/releases/download/v1.0.0/Student-IDE-Setup-1.0.0-x64.exe";
  const expectedFilename = "Student-IDE-Setup-1.0.0-x64.exe";
  const expectedSha256 = "544ee8da3007b95e46e8df44d46e9575000163f149b2960dae4f4fd78e58bcaa";

  // Test 1: Direct Installer URL in constants
  test("1. Direct installer URL configured correctly in constants", () => {
    assert(constants.includes(expectedUrl), `constants.ts must include exact URL: ${expectedUrl}`);
  });

  // Test 2: Main navbar download button
  test("2. Main navbar desktop download button configured with direct URL and download attribute", () => {
    const navbarPath = path.resolve(__dirname, "../src/components/Navbar.tsx");
    const navbar = fs.readFileSync(navbarPath, "utf-8");
    assert(navbar.includes("SITE_CONFIG.downloadUrl"), "Navbar must import and reference SITE_CONFIG.downloadUrl");
    assert(
      navbar.includes('href={SITE_CONFIG.downloadUrl}') && navbar.includes('download'),
      "Navbar desktop download CTA must link to direct download URL with download attribute"
    );
  });

  // Test 3: Hero download button
  test("3. Hero download button configured with direct URL and download attribute", () => {
    const heroPath = path.resolve(__dirname, "../src/components/Hero.tsx");
    const hero = fs.readFileSync(heroPath, "utf-8");
    assert(
      hero.includes('href={SITE_CONFIG.downloadUrl}') && hero.includes('download'),
      "Hero download button must link to direct download URL with download attribute"
    );
  });

  // Test 4: Download section CTA
  test("4. Download section CTA configured with direct URL, size, and version", () => {
    const downloadPath = path.resolve(__dirname, "../src/components/Download.tsx");
    const download = fs.readFileSync(downloadPath, "utf-8");
    assert(
      download.includes('href={SITE_CONFIG.downloadUrl}') && download.includes('download'),
      "Download section primary button must link to direct download URL with download attribute"
    );
    assert(download.includes("DOWNLOAD STUDENT IDE"), "Download button must display 'DOWNLOAD STUDENT IDE'");
    assert(download.includes("SITE_CONFIG.installerFilename"), "Must display installer filename");
    assert(download.includes("SITE_CONFIG.installerSize"), "Must display installer size");
    assert(!download.includes("Release Package Mirroring"), "Must not display Release Package Mirroring notice");
  });

  // Test 5: Mobile download button
  test("5. Mobile drawer download button configured with direct URL and download attribute", () => {
    const navbarPath = path.resolve(__dirname, "../src/components/Navbar.tsx");
    const navbar = fs.readFileSync(navbarPath, "utf-8");
    const mobileSection = navbar.substring(navbar.indexOf("mobile-navigation-menu"));
    assert(
      mobileSection.includes('href={SITE_CONFIG.downloadUrl}') && mobileSection.includes('download'),
      "Mobile navigation drawer download CTA must link to direct download URL with download attribute"
    );
  });

  // Test 6: Installer filename
  test("6. Installer filename verified as Student-IDE-Setup-1.0.0-x64.exe", () => {
    assert(constants.includes(`installerFilename: "${expectedFilename}"`), `installerFilename must match ${expectedFilename}`);
  });

  // Test 7: HTTP download response
  await asyncTest("7. Live GitHub release HTTP download response verification", async () => {
    const headRes = await fetchHeaders(expectedUrl);
    assert.strictEqual(headRes.statusCode, 200, "Final HTTP status code must be 200 OK");
    const contentLength = parseInt(headRes.headers["content-length"], 10);
    assert(contentLength > 100000000, `Expected content length > 100MB, got ${contentLength}`);
    console.log(`   HTTP 200 Content-Length: ${contentLength} bytes (~${(contentLength / 1024 / 1024).toFixed(1)} MB)`);

    const chunk = await fetchByteRange(expectedUrl, 0, 511);
    assert(chunk.statusCode === 200 || chunk.statusCode === 206, "Byte range status must be 200 or 206");
    assert(chunk.data.length >= 2, "Must receive data bytes");
    // Verify Windows PE 'MZ' magic header
    const magic = chunk.data.toString("ascii", 0, 2);
    assert.strictEqual(magic, "MZ", "Binary must start with Windows PE 'MZ' magic identifier");
    console.log(`   Verified Windows PE binary magic identifier ('MZ') from stream`);
  });

  // Test 8: SHA-256 checksum information
  test("8. SHA-256 checksum information is accurate and preserved", () => {
    assert(constants.includes(`sha256:\n    "${expectedSha256}"`) || constants.includes(`"${expectedSha256}"`), "sha256 must match exactly");
    const downloadPath = path.resolve(__dirname, "../src/components/Download.tsx");
    const download = fs.readFileSync(downloadPath, "utf-8");
    assert(download.includes("Cryptographic SHA-256 Checksum"), "SHA-256 Checksum title must be present");
    assert(download.includes("SITE_CONFIG.sha256"), "Checksum hash must be rendered");
    assert(download.includes("Get-FileHash -Algorithm SHA256"), "PowerShell hash verification command must be present");
  });

  console.log("\n================================================================");
  console.log(`TOTAL: ${total} | PASSED: ${passed} | FAILED: ${total - passed}`);
  console.log("================================================================\n");

  if (passed !== total) {
    process.exit(1);
  }
  process.exit(0);
})();
