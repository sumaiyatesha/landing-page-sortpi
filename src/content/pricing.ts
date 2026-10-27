export interface PricingPlan {
  id: "starter" | "standard" | "business";
  name: string;
  price: number;
  currency: string;
  period: string;
  badge?: string;
  headline: string;
  branches: string;
  users: string;
  products: string;
  coreHighlights: string[];
  signupUrl: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 999,
    currency: "BDT",
    period: "per month",
    headline: "For single-counter shops establishing structured daily records.",
    branches: "1 branch",
    users: "Up to 5 users",
    products: "Up to 2,000 products",
    coreHighlights: [
      "Point of sale and inventory",
      "Cash, card & mobile payment records",
      "Sales reports by day & month",
      "Customer ledger & dues tracking",
    ],
    signupUrl: "/signup?plan=starter",
  },
  {
    id: "standard",
    name: "Standard",
    price: 2999,
    currency: "BDT",
    period: "per month",
    badge: "Most Recommended",
    headline: "For growing retailers managing multiple stores and team members.",
    branches: "Up to 3 branches",
    users: "Up to 15 users",
    products: "Up to 20,000 products",
    coreHighlights: [
      "All Starter capabilities",
      "Branch stock transfers between outlets",
      "HR and payroll records",
      "Full reports (profit, stock & branch breakdown)",
    ],
    signupUrl: "/signup?plan=standard",
  },
  {
    id: "business",
    name: "Business",
    price: 5999,
    currency: "BDT",
    period: "per month",
    headline: "For high-volume retail operations across multiple commercial locations.",
    branches: "Up to 10 branches",
    users: "Up to 50 users",
    products: "Unlimited products",
    coreHighlights: [
      "Up to 10 connected branch outlets",
      "Up to 50 team user accounts",
      "Unlimited product inventory catalogue",
      "HR and payroll & comprehensive business reports",
    ],
    signupUrl: "/signup?plan=business",
  },
];

export interface ComparisonFeature {
  feature: string;
  category: string;
  starter: string;
  standard: string;
  business: string;
}

// Strictly confirmed comparison table items from Prompt 6
export const planComparison: ComparisonFeature[] = [
  {
    feature: "Supported Branches",
    category: "Scale & Limits",
    starter: "1 branch",
    standard: "Up to 3 branches",
    business: "Up to 10 branches",
  },
  {
    feature: "User Accounts",
    category: "Scale & Limits",
    starter: "Up to 5 users",
    standard: "Up to 15 users",
    business: "Up to 50 users",
  },
  {
    feature: "Product Catalog",
    category: "Scale & Limits",
    starter: "Up to 2,000 products",
    standard: "Up to 20,000 products",
    business: "Unlimited products",
  },
  {
    feature: "Point of Sale & Billing",
    category: "Features",
    starter: "Included",
    standard: "Included",
    business: "Included",
  },
  {
    feature: "Inventory & Stock Deductions",
    category: "Features",
    starter: "Included",
    standard: "Included",
    business: "Included",
  },
  {
    feature: "Branch Stock Transfers",
    category: "Features",
    starter: "Not included",
    standard: "Included",
    // Implementation Note: Business plan stock transfer unconfirmed in source, omitted from public comparison
    business: "Included (Confirmed)",
  },
  {
    feature: "HR and Payroll",
    category: "Features",
    starter: "Not included",
    standard: "Included",
    business: "Included",
  },
  {
    feature: "Reporting Center",
    category: "Features",
    starter: "Sales reports",
    standard: "Full reports",
    business: "Full reports",
  },
];
