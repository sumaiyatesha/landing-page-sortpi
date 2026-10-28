export interface CustomerVideo {
  title: string;
  duration: string;
  poster: string;
  videoUrl: string;
  captionsUrl?: string;
  transcript: string;
}

export interface CustomerStoryRecord {
  id: string;
  customerName: string;
  role: string;
  businessName: string;
  industry: string;
  quote: string;
  portraitImage?: string;
  logo?: string;
  video?: CustomerVideo;
  permissionConfirmed: boolean;
  numericalEvidence?: string;
}

export const customerStories: CustomerStoryRecord[] = [
  {
    id: "salman-atik",
    customerName: "Salman Atik",
    role: "Owner",
    businessName: "Dhaka Super Shop",
    industry: "Grocery and Super Shop POS Software",
    quote:
      "SortPi brings our sales, inventory and daily operations together, helping us stay organized and manage our business more efficiently.",
    portraitImage: "/assets/salman-atik-poster.svg",
    video: {
      title: "Managing Stock and Multi-Counter Checkout at Dhaka Super Shop",
      duration: "2:45",
      poster: "/assets/salman-atik-poster.svg",
      videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", // Safe placeholder embed URL loaded only on click
      captionsUrl: "/assets/transcripts/salman-atik.vtt",
      transcript:
        "Interviewer: How was inventory managed before SortPi?\nSalman Atik: Before using SortPi, tracking individual product deductions across our grocery aisles required manual logbooks and frequent end-of-day discrepancies. With SortPi's connected billing and inventory deductions, every barcode scanned at the checkout immediately updates our back-office stock count. Dues are transparent and our daily closing takes minutes instead of hours.",
    },
    // Gating Rule: Keep permission false until signed media release form is returned
    permissionConfirmed: false,
    numericalEvidence: "Reconciled single-counter to multi-counter checkout workflow.",
  },
  {
    id: "kamal-hossain",
    customerName: "Kamal Hossain",
    role: "Managing Director",
    businessName: "Hossain Trade International",
    industry: "Wholesale POS Software",
    quote:
      "Tracking supplier payables and buyer credit lines in one place removed our end-of-month reconciliation headaches.",
    portraitImage: "/assets/industries/wholesale.svg",
    permissionConfirmed: false,
    numericalEvidence: "Commercial invoice & dues logging.",
  },
  {
    id: "dr-tanvir-ahmed",
    customerName: "Dr. Tanvir Ahmed",
    role: "Lead Pharmacist",
    businessName: "CarePlus Pharma",
    industry: "POS Software for Pharmacy Sales and Inventory",
    quote:
      "Counter sales with instant mobile wallet receipts allow our dispensary staff to serve neighborhood patients smoothly.",
    portraitImage: "/assets/industries/pharmacy.svg",
    permissionConfirmed: false,
  },
];
