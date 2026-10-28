import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { faqs } from "@/content/faqs";
import { pricingPlans } from "@/content/pricing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sortpi.com";
const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "POS Software in Bangladesh for Shops | SortPi",
  description:
    "Manage billing, inventory, customer dues and multiple branches with SortPi POS software in Bangladesh. Explore features and request a free demo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "POS Software in Bangladesh for Shops | SortPi",
    description:
      "Manage billing, inventory, customer dues and multiple branches with SortPi POS software in Bangladesh. Explore features and request a free demo.",
    url: siteUrl,
    siteName: "SortPi",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SortPi - Point of Sale & Business Management for Shops in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Software in Bangladesh for Shops | SortPi",
    description:
      "Manage billing, inventory, customer dues and multiple branches with SortPi POS software in Bangladesh. Explore features and request a free demo.",
    images: ["/og.png"],
  },
  robots: isPreview
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SortPi",
    legalName: "GeekSSort",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801341869125",
      contactType: "customer service",
      email: "contact@sortpi.com",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
  };

  // 2. SoftwareApplication JSON-LD with confirmed monthly offers only (BDT)
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SortPi",
    operatingSystem: "Web-based, desktop and mobile responsive",
    applicationCategory: "BusinessApplication",
    offers: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} Plan`,
      price: plan.price.toString(),
      priceCurrency: "BDT",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price.toString(),
        priceCurrency: "BDT",
        unitText: "MONTH",
      },
      description: `${plan.branches}, ${plan.users}, ${plan.products}`,
    })),
  };

  // 3. FAQPage JSON-LD accurately mirroring visible 8 FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansBengali.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
