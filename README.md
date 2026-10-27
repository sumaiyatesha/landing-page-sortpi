# SortPi — POS & Retail Management Software for Bangladesh

A fast, conversion-optimized marketing website and lead generation platform for **SortPi**, the all-in-one Point of Sale (POS) and retail management software designed for retail shop owners in Bangladesh. Built by **GeekSSort** in Dhaka, Bangladesh.

---

## 🌟 Technology Stack

- **Framework**: [Next.js 16.4.3](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering, Cache Components)
- **Library**: React 19.3.0
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v4.1 with custom curated design tokens
- **Typography**: Inter (UI / Latin) + Noto Sans Bengali (Bangla translations)
- **Deployment**: Static prerendering for marketing routes + edge/serverless API handler for demo lead intake

---

## 🚀 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack on `http://localhost:3000` |
| `npm run build` | Compiles optimized production static HTML and serverless route bundles |
| `npm run start` | Runs the production build locally on `http://localhost:3000` |
| `npm run lint` | Runs ESLint 9 across all codebase files (0 errors, 0 warnings enforced) |
| `npm run validate` | Executes automated content gate audit (`scripts/validate-release.mjs`) |

---

## 📁 Repository Structure

```
├── public/                     # Static assets (logo.png, og.png, robots, icons)
├── scripts/
│   └── validate-release.mjs    # Automated release safeguard & content validator
├── src/
│   ├── app/
│   │   ├── api/demo-request/   # Lead capture API endpoint with BD phone normalization
│   │   ├── blog/               # Preserved blog index & slug articles
│   │   ├── contact/            # Direct support cards & inquiry experience
│   │   ├── preview/            # Development design system token preview
│   │   ├── privacy/            # Preserved privacy policy
│   │   ├── signup/             # Preserved account portal / trial redirect
│   │   ├── terms/              # Preserved terms of service
│   │   ├── globals.css         # Design system tokens, buttons, forms, motion rules
│   │   ├── layout.tsx          # Root layout with fonts, JSON-LD schema & metadata
│   │   ├── page.tsx            # High-conversion single-page marketing experience
│   │   ├── robots.ts           # Dynamic robots.txt with staging noindex protection
│   │   └── sitemap.ts          # XML sitemap generator with canonical URLs
│   ├── components/
│   │   ├── forms/              # DemoContactForm with honeypot & Bengali digit support
│   │   ├── layout/             # SiteHeader, SiteFooter, LanguageToggle, MobileActionBar
│   │   └── sections/           # Hero, WorkflowExplorer, IndustrySelector, FeatureOverview,
│   │                           # OwnerDashboard, SetupSteps, Pricing, FAQ, DemoSection
│   ├── content/                # Structured, editable content & business configuration
│   │   ├── customerStories.ts  # Gated customer proof with permissionStatus flags
│   │   ├── faqs.ts             # Exact 8 verified Bangladeshi retail FAQs
│   │   ├── features.ts         # 10 core verified modules + unconfirmed feature list
│   │   ├── industries.ts       # 6 Bangladesh retail sector configurations
│   │   ├── pricing.ts          # BDT 999, 2999, and 5999 monthly tiers & comparison
│   │   ├── sampleFixtures.ts   # Reconciled BDT 900 grocery arithmetic fixture
│   │   ├── siteSettings.ts     # Official contacts, branding, company details
│   │   └── translations/       # English and Bengali bilingual dictionary files
│   └── lib/
│       ├── analytics.ts        # Typed client analytics dispatcher (zero PII)
│       └── phone.ts            # Bangladeshi phone normalization (+8801XXXXXXXXX)
├── .env.example                # Documented production environment template
├── PLACEHOLDERS.md             # Private release checklist & gated capability matrix
└── README.md                   # Product developer documentation
```

---

## 🛒 Sample Grocery Arithmetic & Data Fixtures

All interactive calculators and workflow steps (`Hero`, `WorkflowExplorer`) are synchronized around a single verified BDT 900 grocery transaction:

- **Nazirshail Rice (5kg pack)**: 1 × ৳420 = ৳420 *(Stock moves: 18 → 17)*
- **Soybean Oil (1L bottle)**: 2 × ৳180 = ৳360 *(Stock moves: 26 → 24)*
- **Ispahani Tea (200g pack)**: 1 × ৳120 = ৳120 *(Stock moves: 12 → 11)*
- **Subtotal**: ৳900 | **Discount**: ৳0 | **Total**: ৳900
- **Scenario A (Cash Paid in Full)**: Paid ৳900, Due ৳0
- **Scenario B (Customer Balance / Dues)**: Paid ৳700, Due ৳200 recorded for customer *Alim Uddin* (previous balance ৳350 → new total dues ৳550)

---

## 🛡️ Release Safeguards & Content Gates

To protect the business against unverified claims, this repository includes an automated validator:

```bash
npm run validate
```

The script verifies 16 key invariants before any production release:
1. **Customer Testimonial Gating**: Quotes without explicit signed permission (`permissionConfirmed: false`) are withheld from public render.
2. **Unconfirmed Feature Gating**: Speculative capabilities (*Offline mode*, *Bangla thermal printer drivers*, *Biometric hardware SDK*) are flagged `confirmed: false` and kept out of marketing copy.
3. **Plan Pricing Integrity**: Strict monthly pricing only (Starter: ৳999, Standard: ৳2,999, Business: ৳5,999). Fabricated annual discounts or unstated trial lengths fail the gate.
4. **Official Contact Information**: Ensures `contact@sortpi.com` and `+8801341869125` are properly configured.
5. **Route & Asset Existence**: Validates all static routes, robots, sitemap, `og.png`, and `.env.example`.
6. **Zero Raw Placeholders**: Ensures no untracked `PLACEHOLDER` or `TBD` strings leak into production `src/`.

---

## ⚙️ Environment Variables & Lead Webhook

Copy `.env.example` to `.env.local` for local testing:

```bash
cp .env.example .env.local
```

| Variable | Description |
| :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default: `https://www.sortpi.com`) |
| `DEMO_WEBHOOK_URL` | Secure CRM/Slack/Discord webhook endpoint to receive leads |
| `DEMO_WEBHOOK_SECRET` | Optional HMAC shared secret sent in `X-SortPi-Signature` header |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional tracking ID for privacy-compliant analytics (Plausible/GA) |

### Demo API Route (`POST /api/demo-request`)
- Accepts `fullName`, `phone`, `businessName`, `businessType`, `branches`, `email`, and `note`.
- Automatically translates Bengali numerals (`০-৯` → `0-9`).
- Normalizes Bangladeshi mobile numbers into E.164 (`+8801XXXXXXXXX`).
- Validates BD operator prefixes (`013`, `014`, `015`, `016`, `017`, `018`, `019`).
- Protects against spam via a hidden honeypot field (`company_website`).
- In local development (`npm run dev`), logs leads to console if webhook is unconfigured.
- In production, securely dispatches payload to `DEMO_WEBHOOK_URL`.

---

## 🔍 SEO & Structured Data

- **Canonical URL**: `https://www.sortpi.com/`
- **Title**: `POS Software in Bangladesh for Shops | SortPi`
- **Description**: `Manage sales, stock, customer dues, expenses and multiple branches with SortPi POS software in Bangladesh. Request a free demo for your business.`
- **Open Graph**: Custom branded 1200×630 `public/og.png` with official brand tokens.
- **JSON-LD Schema**:
  - `Organization`: SortPi / GeekSSort with official Dhaka contact point.
  - `SoftwareApplication`: BusinessApplication for retail POS in Bangladesh, priced in BDT.
- **Search Engine Directives**:
  - Production: `index, follow`
  - Staging/Preview: Automatic `noindex, nofollow` via `robots.ts`.

---

## 🚢 Deployment

Deploy seamlessly to [Vercel](https://vercel.com) or any Node.js hosting platform:

```bash
# Verify release readiness
npm run lint
npm run validate
npm run build

# Push changes
git push origin main
```

Set environment variables in your hosting dashboard:
- `NEXT_PUBLIC_SITE_URL`: `https://www.sortpi.com`
- `DEMO_WEBHOOK_URL`: `https://your-crm.example.com/webhooks/sortpi`
