import fs from "fs";
import path from "path";

console.log("=================================================");
console.log("     SORTPI CONTENT & RELEASE VALIDATION AUDIT    ");
console.log("=================================================");

let hasErrors = false;
const checklist = [];

function check(name, passed, details = "") {
  checklist.push({ name, passed, details });
  if (passed) {
    console.log(`[PASS] ${name} ${details ? "- " + details : ""}`);
  } else {
    console.error(`[FAIL] ${name} ${details ? "- " + details : ""}`);
    hasErrors = true;
  }
}

function gate(name, status, details = "") {
  console.log(`[GATED / SAFE] ${name}: ${status} ${details ? "- " + details : ""}`);
}

// 1. Check Gated Customer Proof
try {
  const customerStoriesFile = fs.readFileSync(
    path.join(process.cwd(), "src/content/customerStories.ts"),
    "utf-8"
  );
  const permissionCheck = customerStoriesFile.includes("permissionConfirmed: false");
  check(
    "Customer Testimonial Gating",
    permissionCheck,
    "Unverified customer quotes safely withheld with permissionConfirmed: false"
  );
} catch {
  check("Customer Testimonial Gating", false, "Missing customerStories.ts");
}

// 2. Check Gated Unconfirmed Features
try {
  const featuresFile = fs.readFileSync(
    path.join(process.cwd(), "src/content/features.ts"),
    "utf-8"
  );
  const offlineGated = featuresFile.includes('"Offline mode", confirmed: false');
  const banglaGated = featuresFile.includes('"Bangla application UI & thermal receipts", confirmed: false');
  const biometricGated = featuresFile.includes('"Hardware scanner & printer driver SDK", confirmed: false');
  
  check(
    "Unconfirmed Feature Gating",
    offlineGated && banglaGated && biometricGated,
    "Offline mode, hardware SDK, and thermal receipts correctly marked as unconfirmed"
  );
} catch {
  check("Unconfirmed Feature Gating", false, "Missing features.ts");
}

// 3. Check Pricing Integrity & Limits
try {
  const pricingFile = fs.readFileSync(
    path.join(process.cwd(), "src/content/pricing.ts"),
    "utf-8"
  );
  const starterPrice = pricingFile.includes("price: 999");
  const standardPrice = pricingFile.includes("price: 2999");
  const businessPrice = pricingFile.includes("price: 5999");
  check(
    "Plan Pricing Integrity",
    starterPrice && standardPrice && businessPrice,
    "Verified BDT 999, 2999, and 5999 monthly tiers"
  );
} catch {
  check("Plan Pricing Integrity", false, "Missing pricing.ts");
}

// 4. Check Bangladeshi Contact Details
try {
  const settingsFile = fs.readFileSync(
    path.join(process.cwd(), "src/content/siteSettings.ts"),
    "utf-8"
  );
  const emailOk = settingsFile.includes("contact@sortpi.com");
  const phoneOk = settingsFile.includes("+8801341869125");
  check(
    "Official Contact Configuration",
    emailOk && phoneOk,
    "contact@sortpi.com and +8801341869125 verified"
  );
} catch {
  check("Official Contact Configuration", false, "Missing siteSettings.ts");
}

// 5. Check Required Route Files & Assets
const requiredFiles = [
  "src/app/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/signup/page.tsx",
  "src/app/blog/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "public/og.png",
  ".env.example",
  "src/content/assetManifest.ts",
  "public/assets/hero-shop-scene.svg",
  "public/assets/industries/retail.svg",
  "public/assets/industries/grocery.svg",
  "public/assets/industries/restaurant.svg",
  "public/assets/industries/pharmacy.svg",
  "public/assets/industries/wholesale.svg",
  "public/assets/industries/multibranch.svg",
  "public/assets/contact-support-scene.svg",
  "public/assets/salman-atik-poster.svg",
];

for (const file of requiredFiles) {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  check(`Required Route / Asset [${file}]`, exists, exists ? "Exists" : "MISSING");
}

// 6. Check for Visible Unresolved [PLACEHOLDER in Rendered Code
let placeholderCount = 0;
function scanForPlaceholders(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== "node_modules" && f !== ".next") scanForPlaceholders(full);
    } else if (/\.(tsx|ts|jsx|js|html)$/.test(f)) {
      const content = fs.readFileSync(full, "utf-8");
      if (content.includes("[PLACEHOLDER")) {
        console.warn(`[WARN] Placeholder found in ${full}`);
        placeholderCount++;
      }
    }
  }
}

scanForPlaceholders(path.join(process.cwd(), "src"));

if (placeholderCount > 0) {
  if (process.env.ALLOW_PLACEHOLDERS === "true") {
    gate("Placeholder String Check", "ALLOWED_IN_PREVIEW", `${placeholderCount} placeholders permitted by ALLOW_PLACEHOLDERS=true`);
  } else {
    check("Placeholder String Check", false, `${placeholderCount} raw placeholder strings found in source code`);
  }
} else {
  check("Placeholder String Check", true, "Zero raw placeholder strings found in src/");
}

console.log("=================================================");
if (hasErrors) {
  console.error("RELEASE VALIDATION FAILED. Resolve errors above before production publish.");
  process.exit(1);
} else {
  console.log("ALL RELEASE SAFEGUARDS AND CONTENT GATES PASSED.");
  process.exit(0);
}
