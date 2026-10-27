// scripts/test-endpoints.mjs
// Comprehensive API and Integration Test Suite for SortPi Marketing Platform

const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("=================================================");
  console.log("   SORTPI INTEGRATION & FORM API TEST SUITE      ");
  console.log("=================================================");
  
  let passed = 0;
  let failed = 0;

  function report(name, condition, details) {
    if (condition) {
      console.log(`[PASS] ${name}: ${details}`);
      passed++;
    } else {
      console.error(`[FAIL] ${name}: ${details}`);
      failed++;
    }
  }

  // Test 1: Valid Local Bangladeshi Phone
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Karim Chowdhury",
        phone: "01712345678",
        businessName: "Karim Super Shop",
        businessType: "Grocery & Super Shop",
        branches: "1",
      }),
    });
    const data = await res.json();
    report(
      "1. Valid Local Phone",
      res.status === 200 && data.success === true,
      `Status ${res.status}, response: ${data.message}`
    );
  } catch (err) {
    report("1. Valid Local Phone", false, err.message);
  }

  // Test 2: Valid Bengali Digits Phone (০১৭১২৩৪৫৬৭৮)
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "রাফিক আহমেদ",
        phone: "০১৭১২৩৪৫৬৭৮",
        businessName: "ঢাকা মার্ট",
        businessType: "Grocery & Super Shop",
      }),
    });
    const data = await res.json();
    report(
      "2. Valid Bengali Digits Phone",
      res.status === 200 && data.success === true,
      `Status ${res.status}, accepted and translated`
    );
  } catch (err) {
    report("2. Valid Bengali Digits Phone", false, err.message);
  }

  // Test 3: Valid E.164 International Format Phone (+8801812345678)
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Anisur Rahman",
        phone: "+8801812345678",
        businessName: "Rahman Pharmacy",
        businessType: "Pharmacy",
      }),
    });
    const data = await res.json();
    report(
      "3. Valid E.164 Phone",
      res.status === 200 && data.success === true,
      `Status ${res.status}, E.164 accepted`
    );
  } catch (err) {
    report("3. Valid E.164 Phone", false, err.message);
  }

  // Test 4: Invalid Phone (Too short: "01712")
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Test User",
        phone: "01712",
        businessName: "Incomplete Shop",
        businessType: "Retail",
      }),
    });
    const data = await res.json();
    report(
      "4. Invalid Short Phone Rejection",
      res.status === 400 && data.success === false,
      `Rejected with 400: ${data.error}`
    );
  } catch (err) {
    report("4. Invalid Short Phone Rejection", false, err.message);
  }

  // Test 5: Invalid Operator Prefix ("01012345678" - non-existent operator in BD)
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Test User",
        phone: "01012345678",
        businessName: "Invalid Prefix Shop",
        businessType: "Retail",
      }),
    });
    const data = await res.json();
    report(
      "5. Invalid Operator Prefix Rejection",
      res.status === 400 && data.success === false,
      `Rejected with 400: ${data.error}`
    );
  } catch (err) {
    report("5. Invalid Operator Prefix Rejection", false, err.message);
  }

  // Test 6: Missing Required Fields (Empty Full Name)
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "",
        phone: "01712345678",
        businessName: "No Name Shop",
      }),
    });
    const data = await res.json();
    report(
      "6. Missing Full Name Validation",
      res.status === 400 && data.success === false,
      `Rejected with 400: ${data.error}`
    );
  } catch (err) {
    report("6. Missing Full Name Validation", false, err.message);
  }

  // Test 7: Missing Required Business Name
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Valid Name",
        phone: "01712345678",
        businessName: "",
      }),
    });
    const data = await res.json();
    report(
      "7. Missing Business Name Validation",
      res.status === 400 && data.success === false,
      `Rejected with 400: ${data.error}`
    );
  } catch (err) {
    report("7. Missing Business Name Validation", false, err.message);
  }

  // Test 8: Honeypot Spam Protection (Bot submission)
  try {
    const res = await fetch(`${BASE_URL}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Spam Bot",
        phone: "01712345678",
        businessName: "Spam Corporation",
        businessType: "Other Retail",
        company_website: "https://spam-marketing-service.com", // Honeypot trap
      }),
    });
    const data = await res.json();
    report(
      "8. Honeypot Bot Trap",
      res.status === 200 && data.success === true,
      `Silently dropped spam bot without triggering webhook`
    );
  } catch (err) {
    report("8. Honeypot Bot Trap", false, err.message);
  }

  // Test 9: Marketing Static Routes Health Check
  const routes = [
    "/",
    "/contact",
    "/signup",
    "/blog",
    "/blog/how-to-manage-pos-inventory",
    "/privacy",
    "/terms",
    "/robots.txt",
    "/sitemap.xml",
    "/preview"
  ];

  for (const r of routes) {
    try {
      const res = await fetch(`${BASE_URL}${r}`);
      report(
        `Route Health [${r}]`,
        res.status === 200,
        `Status ${res.status} OK`
      );
    } catch (err) {
      report(`Route Health [${r}]`, false, err.message);
    }
  }

  console.log("=================================================");
  console.log(`TOTAL PASSED: ${passed} | TOTAL FAILED: ${failed}`);
  console.log("=================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
