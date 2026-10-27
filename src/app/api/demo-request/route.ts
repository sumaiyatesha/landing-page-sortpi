import { NextRequest, NextResponse } from "next/server";
import { validateAndNormalizeBDPhone } from "@/lib/phone";

// In-memory IP rate limiter (Development / single-process friendly)
const ipRequestHistory = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 15; // Generous for local development/testing

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestHistory.get(ip) || [];
  
  // Filter out expired timestamps
  const activeTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestHistory.set(ip, activeTimestamps);
    return true;
  }

  activeTimestamps.push(now);
  ipRequestHistory.set(ip, activeTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. Rate Limiting Check
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many requests from this connection. Please wait a few minutes or call us directly at +8801341869125.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const fullName = body.fullName;
    const phoneNumber = body.phoneNumber || body.phone;
    const businessName = body.businessName;
    const businessType = body.businessType;
    const branchesCount = body.branchesCount || body.branches;
    const email = body.email;
    const note = body.note;
    const selectedPlan = body.selectedPlan;
    const website_url = body.website_url || body.company_website; // Honeypot field
    const intent = body.intent; // "demo" | "contact"

    // 2. Honeypot check: If the hidden bot field is filled, silently ignore
    if (website_url) {
      return NextResponse.json({
        success: true,
        message: "Your request has been received.",
      });
    }

    // 3. Validation: Required fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!businessName || typeof businessName !== "string" || businessName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your business name." },
        { status: 400 }
      );
    }

    if (!businessType || typeof businessType !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select your business type." },
        { status: 400 }
      );
    }

    // 4. Validate and normalize Bangladeshi phone number
    const phoneResult = validateAndNormalizeBDPhone(phoneNumber);
    if (!phoneResult.isValid || !phoneResult.normalized) {
      return NextResponse.json(
        { success: false, error: phoneResult.error || "Invalid Bangladeshi phone number." },
        { status: 400 }
      );
    }

    // 5. Optional Email validation
    if (email && typeof email === "string" && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid email address." },
          { status: 400 }
        );
      }
    }

    // 6. Webhook Forwarding
    const webhookUrl = process.env.DEMO_WEBHOOK_URL;
    const isPreviewAllowed =
      process.env.NODE_ENV !== "production" ||
      process.env.ALLOW_PREVIEW_MODE === "true" ||
      !process.env.VERCEL_ENV; // Local next start environment

    if (!webhookUrl) {
      // In development / local preview mode:
      if (isPreviewAllowed) {
        return NextResponse.json({
          success: true,
          mode: "preview",
          message:
            "Your request has been received. The SortPi team will contact you using the details you provided.",
          note: "Local preview mode: request validated on server.",
        });
      }

      // In production if webhook is unconfigured:
      return NextResponse.json(
        {
          success: false,
          error:
            "We could not send your request. Please try again or contact us directly at contact@sortpi.com or +8801341869125.",
        },
        { status: 503 }
      );
    }

    // Server-side forward with 5-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const payload = {
      fullName: fullName.trim(),
      phoneNumber: phoneResult.normalized,
      businessName: businessName.trim(),
      businessType,
      branchesCount: branchesCount || "1",
      email: email ? email.trim() : undefined,
      note: note ? note.trim() : undefined,
      selectedPlan: selectedPlan || "general",
      intent: intent || "demo",
      submittedAt: new Date().toISOString(),
    };

    const upstreamRes = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-SortPi-Source": "MarketingLandingPage",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!upstreamRes.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "We could not send your request. Please try again or contact us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your request has been received. The SortPi team will contact you using the details you provided.",
    });
  } catch {
    // Return safe failure message without exposing internals
    return NextResponse.json(
      {
        success: false,
        error: "We could not send your request. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
