/**
 * SortPi Asset Manifest & Layout Contract
 * Authoritative specification for image & illustration assets across the application.
 * Defines roles, dimensions, crop behaviors, delivery budgets, accessibility alt rules, and replacement requirements.
 */

export interface AssetManifestItem {
  id: string;
  filename: string;
  publicPath: string;
  role: "hero-screen" | "industry-illustration" | "contact-scene" | "brand-logo" | "social-share" | "ui-screenshot";
  slotWidth: number;
  slotHeight: number;
  aspectRatio: string;
  crop: "contain" | "cover" | "upright-panel" | "none";
  format: "svg" | "png" | "webp" | "live-html";
  altText: string; // Informative or empty ("") for decorative
  isDecorative: boolean;
  availability: "supplied" | "temporary-svg" | "live-reconstructed" | "gated-pending-proof";
  maxSizeBudgetKb: number;
  measuredSizeKb?: number;
  placementLocation: string;
  replacementNotes?: string;
}

export const assetManifest: AssetManifestItem[] = [
  {
    id: "brand-logo",
    filename: "logo.png",
    publicPath: "/logo.png",
    role: "brand-logo",
    slotWidth: 140,
    slotHeight: 38,
    aspectRatio: "140/38",
    crop: "contain",
    format: "png",
    altText: "SortPi Smart POS",
    isDecorative: false,
    availability: "supplied",
    maxSizeBudgetKb: 30,
    measuredSizeKb: 0.74,
    placementLocation: "SiteHeader, SiteFooter",
    replacementNotes: "Verified SortPi brand logo.",
  },
  {
    id: "social-share-og",
    filename: "og.png",
    publicPath: "/og.png",
    role: "social-share",
    slotWidth: 1200,
    slotHeight: 630,
    aspectRatio: "1200/630",
    crop: "contain",
    format: "png",
    altText: "SortPi POS and Business Management for Bangladesh",
    isDecorative: false,
    availability: "supplied",
    maxSizeBudgetKb: 150,
    measuredSizeKb: 13.88,
    placementLocation: "Open Graph and Twitter metadata",
    replacementNotes: "Open Graph card highlighting SortPi features and branding.",
  },
  {
    id: "hero-illustration-scene",
    filename: "hero-shop-scene.svg",
    publicPath: "/assets/hero-shop-scene.svg",
    role: "hero-screen",
    slotWidth: 640,
    slotHeight: 520,
    aspectRatio: "16/13",
    crop: "contain",
    format: "svg",
    altText: "", // Empty: adjacent headline and live UI provide the information
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 250,
    measuredSizeKb: 6.2,
    placementLocation: "Homepage Hero (right 56% desktop column)",
    replacementNotes:
      "Original restrained SVG shop scene backdrop. Accompanies the live HTML POS transaction panel. Replace with authentic high-res shop cashier photo integrated with live SortPi screen once approved.",
  },
  {
    id: "industry-retail",
    filename: "retail.svg",
    publicPath: "/assets/industries/retail.svg",
    role: "industry-illustration",
    slotWidth: 120,
    slotHeight: 120,
    aspectRatio: "1/1",
    crop: "contain",
    format: "svg",
    altText: "", // Decorative; card title 'Retail shops' announces the content
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 60,
    measuredSizeKb: 3.1,
    placementLocation: "IndustrySelector card 1 (Retail)",
    replacementNotes: "Restrained SVG vector for retail counter and customer ledger. Can be upgraded to photography if licensed.",
  },
  {
    id: "industry-grocery",
    filename: "grocery.svg",
    publicPath: "/assets/industries/grocery.svg",
    role: "industry-illustration",
    slotWidth: 120,
    slotHeight: 120,
    aspectRatio: "1/1",
    crop: "contain",
    format: "svg",
    altText: "", // Decorative; card title announces content
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 60,
    measuredSizeKb: 3.4,
    placementLocation: "IndustrySelector card 2 (Super shops & grocery)",
    replacementNotes: "Restrained SVG vector for FMCG barcode register & stock deduction.",
  },
  {
    id: "industry-restaurant",
    filename: "restaurant.svg",
    publicPath: "/assets/industries/restaurant.svg",
    role: "industry-illustration",
    slotWidth: 120,
    slotHeight: 120,
    aspectRatio: "1/1",
    crop: "contain",
    format: "svg",
    altText: "", // Decorative
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 60,
    measuredSizeKb: 3.2,
    placementLocation: "IndustrySelector card 3 (Restaurants)",
    replacementNotes: "Restrained SVG vector for counter billing and daily operating expense tracking.",
  },
  {
    id: "industry-pharmacy",
    filename: "pharmacy.svg",
    publicPath: "/assets/industries/pharmacy.svg",
    role: "industry-illustration",
    slotWidth: 120,
    slotHeight: 120,
    aspectRatio: "1/1",
    crop: "contain",
    format: "svg",
    altText: "", // Decorative
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 60,
    measuredSizeKb: 3.0,
    placementLocation: "IndustrySelector card 4 (Pharmacies)",
    replacementNotes: "Restrained SVG vector for dispensaries & medicine stock sales.",
  },
  {
    id: "industry-wholesale",
    filename: "wholesale.svg",
    publicPath: "/assets/industries/wholesale.svg",
    role: "industry-illustration",
    slotWidth: 120,
    slotHeight: 120,
    aspectRatio: "1/1",
    crop: "contain",
    format: "svg",
    altText: "", // Decorative
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 60,
    measuredSizeKb: 3.5,
    placementLocation: "IndustrySelector card 5 (Wholesale)",
    replacementNotes: "Restrained SVG vector for bulk cartons, supplier orders & trade credit.",
  },
  {
    id: "industry-multibranch",
    filename: "multibranch.svg",
    publicPath: "/assets/industries/multibranch.svg",
    role: "industry-illustration",
    slotWidth: 120,
    slotHeight: 120,
    aspectRatio: "1/1",
    crop: "contain",
    format: "svg",
    altText: "", // Decorative
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 60,
    measuredSizeKb: 3.8,
    placementLocation: "IndustrySelector card 6 (Multi branch businesses)",
    replacementNotes: "Restrained SVG vector for central hub connecting distributed retail outlets.",
  },
  {
    id: "contact-scene",
    filename: "contact-support-scene.svg",
    publicPath: "/assets/contact-support-scene.svg",
    role: "contact-scene",
    slotWidth: 480,
    slotHeight: 380,
    aspectRatio: "480/380",
    crop: "contain",
    format: "svg",
    altText: "", // Decorative; contact details are presented in adjacent cards
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 150,
    measuredSizeKb: 5.6,
    placementLocation: "Contact page (/contact) introduction column",
    replacementNotes: "Original product-themed shop counter & conversation illustration for SortPi. Does not borrow competitor assets.",
  },
  {
    id: "customer-video-poster",
    filename: "salman-atik-poster.svg",
    publicPath: "/assets/salman-atik-poster.svg",
    role: "ui-screenshot",
    slotWidth: 640,
    slotHeight: 360,
    aspectRatio: "16/9",
    crop: "contain",
    format: "svg",
    altText: "",
    isDecorative: true,
    availability: "temporary-svg",
    maxSizeBudgetKb: 150,
    measuredSizeKb: 4.2,
    placementLocation: "Customer reviews featured video (CustomerStorySection)",
    replacementNotes: "Authentic shop or interview photograph of Salman Atik to be supplied upon signed media release.",
  },
];
