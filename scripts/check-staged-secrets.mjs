#!/usr/bin/env node
import { execSync } from "child_process";

console.log("🔒 Running pre-commit/pre-push secret scanner...");

let stagedFiles = [];
try {
  const output = execSync("git diff --cached --name-only", { encoding: "utf8" });
  stagedFiles = output.split("\n").map(f => f.trim()).filter(Boolean);
} catch {
  // If not inside git or diff fails, exit cleanly
  process.exit(0);
}

if (stagedFiles.length === 0) {
  console.log("✓ No staged files to check.");
  process.exit(0);
}

let violations = [];

// 1. Check for forbidden file names
const forbiddenPatterns = [
  { pattern: /^\.env$/i, desc: ".env file" },
  { pattern: /^\.env\.(?!example$)/i, desc: "Real .env.* file (only .env.example allowed)" },
  { pattern: /\.(pem|key|crt|cer|pfx|p12)$/i, desc: "Certificate or private key file" },
  { pattern: /service[-_]account.*\.json$/i, desc: "Service account credentials JSON" },
  { pattern: /credentials.*\.json$/i, desc: "Credentials file" },
];

for (const file of stagedFiles) {
  for (const rule of forbiddenPatterns) {
    if (rule.pattern.test(file)) {
      violations.push(`[BLOCKED FILE] "${file}": ${rule.desc}`);
    }
  }
}

// 2. Check staged diff content for sensitive patterns
try {
  const diffOutput = execSync("git diff --cached -U0", { encoding: "utf8" });
  const addedLines = diffOutput
    .split("\n")
    .filter(line => line.startsWith("+") && !line.startsWith("+++"));

  const sensitiveContentPatterns = [
    { pattern: /-----BEGIN (RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/, desc: "Private encryption key" },
    { pattern: /AKIA[0-9A-Z]{16}/, desc: "AWS Access Key ID" },
    { pattern: /ghp_[0-9a-zA-Z]{36}/, desc: "GitHub Personal Access Token" },
    { pattern: /https:\/\/hooks\.slack\.com\/services\/T[0-9a-zA-Z]+\/B[0-9a-zA-Z]+\/[0-9a-zA-Z]+/, desc: "Slack Webhook URL" },
    { pattern: /https:\/\/discord\.com\/api\/webhooks\/[0-9]+\/[0-9a-zA-Z_-]+/, desc: "Discord Webhook URL" },
  ];

  for (const line of addedLines) {
    for (const rule of sensitiveContentPatterns) {
      if (rule.pattern.test(line)) {
        violations.push(`[BLOCKED CONTENT] Staged content matches sensitive pattern: ${rule.desc}`);
      }
    }
  }
} catch (err) {
  console.error("Warning: Could not scan staged diff contents:", err.message);
}

if (violations.length > 0) {
  console.error("\n❌ PRE-COMMIT / PRE-PUSH SECURITY ALERT:");
  console.error("The following secrets or forbidden files were detected in your staged changes:\n");
  for (const v of violations) {
    console.error(`  - ${v}`);
  }
  console.error("\nCommit aborted. Please unstage these files using 'git reset HEAD <file>' or remove secrets before committing.\n");
  process.exit(1);
}

console.log("✓ No secrets or forbidden environment files detected in staged changes.");
process.exit(0);
