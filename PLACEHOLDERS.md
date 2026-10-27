# SortPi Release Readiness & Gated Capabilities Checklist

> **Confidential Internal Document**
> This file tracks gated features, pending third-party approvals, and operational deployment requirements.
> Items in this file are deliberately withheld from public customer-facing marketing copy until verified.

---

## 1. Gated Customer Testimonials & Case Studies

| Asset / Quote | Source / Attribution | Gated Reason | Action Needed for Public Release | Status |
| :--- | :--- | :--- | :--- | :--- |
| *"SortPi helped us keep track of customer dues across our three grocery outlets without maintaining separate notebooks."* | Salman Atik, Dhaka Grocery | Pending signed media release form & verified store photographs | Obtain signed approval from shop owner; set `permissionConfirmed: true` in `src/content/customerStories.ts` | **GATED** (Hidden from UI) |

*Resolution in Code:* The component `CustomerStory.tsx` safely checks `story.permissionConfirmed`. Because it is currently `false`, the component automatically hides the unverified quote and displays three factual capability pillars instead (*Unified Checkout*, *Real-time Balances*, *Multi-Branch Visibility*).

---

## 2. Gated Technical Features (Unconfirmed Capabilities)

The following items were identified during competitor research (ChillyPOS, Mediasoft) or early planning, but lack technical verification or hardware certification:

| Feature | Gated Rationale | Status in Codebase | Requirements to Unlock |
| :--- | :--- | :--- | :--- |
| **Offline Mode & Sync** | SortPi core architecture relies on live cloud sync. Local SQLite/IndexedDB caching is not yet hardened against concurrent conflicts. | `confirmed: false` in `src/content/features.ts` | Complete offline conflict-resolution tests before advertising offline reliability. |
| **Bangla Thermal Receipts & ESC/POS Driver** | Thermal printers vary by chipset (Xprinter, Rongta, Epson). Bangla font rasterization requires ESC/POS bit-image support. | `confirmed: false` in `src/content/features.ts` | Test physical 58mm & 80mm thermal printers with local Unicode bitmap generator. |
| **Biometric & Barcode Hardware SDK** | Direct USB/Bluetooth scanner SDK integration is device-dependent. Standard keyboard-wedge mode works, but custom SDK is unverified. | `confirmed: false` in `src/content/features.ts` | Finalize supported hardware device whitelist. |
| **Automated bKash / Nagad Merchant Settlement** | SortPi records mobile wallet payment methods as internal ledger records. Automatic webhook settlement requires Bangladesh Bank regulated merchant APIs. | Displayed strictly as **"Payment Method Record"** | Obtain merchant API credentials and implement direct payment gateway before claiming automated settlement. |
| **Restaurant Table Management / KOT** | Restaurant kitchen order tickets (KOT) and table floor plans are outside SortPi's current retail scope. | Omitted entirely from public navigation & features | Release dedicated Food & Beverage add-on module. |

---

## 3. Pricing Policy & Entitlement Guardrails

- **Monthly Tiers Verified**:
  - **Starter**: ৳999/month (1 branch, 5 users, 2,000 products, POS + basic reports).
  - **Standard (Most Recommended)**: ৳2,999/month (up to 3 branches, 15 users, 20,000 products, branch transfers, HR/payroll, full reports).
  - **Business**: ৳5,999/month (up to 10 branches, 50 users, unlimited products, HR/payroll, full reports).
- **Prohibited Claims**:
  - ❌ **Yearly discounts**: No unconfirmed annual percentage discounts are advertised.
  - ❌ **Trial length**: No arbitrary 14-day or 30-day trial claims. Users are invited to **"Request Free Demo"** where the team provisions appropriate access.
  - ❌ **Setup fees / VAT**: No unverified VAT inclusions or hidden onboarding charges.
  - ❌ **Feature inheritance**: Unstated plan inheritance (e.g., whether Business inherits specific custom API access) is not inferred.

---

## 4. Production Webhook & CRM Configuration

Before launching to live traffic on `https://www.sortpi.com`:

- [ ] Set `DEMO_WEBHOOK_URL` in production hosting environment variables (e.g. Vercel dashboard).
- [ ] Configure `DEMO_WEBHOOK_SECRET` for webhook signature verification.
- [ ] Test end-to-end delivery of a sample demo request to the sales team's Slack/CRM.
- [ ] Verify DNS records for `www.sortpi.com` and `sortpi.com` (preserve canonical HTTPS redirect).
- [ ] Monitor real user Web Vitals (LCP, CLS, INP) in Google Search Console post-launch.
