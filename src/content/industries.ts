export interface IndustryOption {
  id: string;
  name: string; // Descriptive H3
  tagline: string;
  benefitParagraph: string; // Exact Prompt benefit copy
  illustration: string;
  useCase: string;
  capabilities: [string, string, string];
  screenDetail: {
    title: string;
    metrics: { label: string; value: string }[];
    highlight: string;
  };
}

export const industryOptions: IndustryOption[] = [
  {
    id: "retail",
    name: "Retail POS Software",
    tagline: "Clothing, electronics, cosmetics & daily goods",
    benefitParagraph:
      "Bring billing, customer purchase history and outstanding dues together to manage your retail shop more clearly.",
    illustration: "/assets/industries/retail.svg",
    useCase:
      "Keep checkout fast at the counter while automatically logging customer purchase history and outstanding balances.",
    capabilities: [
      "Fast barcode checkout & instant customer receipts",
      "Customer purchase history & visit frequency tracking",
      "Customer dues management with clear payment logs",
    ],
    screenDetail: {
      title: "Retail Counter & Customer Ledger",
      metrics: [
        { label: "Today's Invoices", value: "84 sales" },
        { label: "Customer Dues Logged", value: "৳4,250" },
        { label: "Repeat Customers", value: "62%" },
      ],
      highlight: "Customer phone search pulls past invoices and dues in seconds.",
    },
  },
  {
    id: "grocery",
    name: "Grocery and Super Shop POS Software",
    tagline: "High volume daily FMCG & packaged groceries",
    benefitParagraph:
      "Track sales, purchases and stock levels to keep daily grocery operations organised.",
    illustration: "/assets/industries/grocery.svg",
    useCase:
      "Handle thousands of SKUs smoothly, monitor stock deductions across categories, and order before shelves run empty.",
    capabilities: [
      "Real-time product stock deductions on every sale",
      "Supplier purchases and cost tracking",
      "Automated low-stock alerts before items run out",
    ],
    screenDetail: {
      title: "Grocery Inventory & Fast Barcode Register",
      metrics: [
        { label: "Active Products", value: "2,450 SKUs" },
        { label: "Low Stock Warnings", value: "8 items" },
        { label: "Daily Turnover", value: "৳68,400" },
      ],
      highlight: "Stock counts update instantly from register to inventory back-office.",
    },
  },
  {
    id: "restaurant",
    name: "POS Software for Restaurant Billing",
    tagline: "Cafes, fast food counters & dining points",
    benefitParagraph:
      "Keep restaurant sales, billing, expenses and business reports in one place.",
    illustration: "/assets/industries/restaurant.svg",
    useCase:
      "Focus on quick counter billing, recording daily ingredient expenses, and tracking daily sales income accurately.",
    capabilities: [
      "General counter billing & recorded payment methods",
      "Daily operating expenses & ingredient cost tracking",
      "End-of-day sales and cash-in-hand reports",
    ],
    screenDetail: {
      title: "Counter Billing & Daily Expense Summary",
      metrics: [
        { label: "Orders Billed", value: "142 orders" },
        { label: "Recorded Expenses", value: "৳12,300" },
        { label: "Net Margin Today", value: "৳21,800" },
      ],
      highlight: "General billing and daily income vs expense visibility without complex setup.",
    },
  },
  {
    id: "pharmacy",
    name: "POS Software for Pharmacy Sales and Inventory",
    tagline: "Neighborhood dispensaries & medicine retail",
    benefitParagraph:
      "Organise product sales, purchases and stock records for your pharmacy’s daily business operations.",
    illustration: "/assets/industries/pharmacy.svg",
    useCase:
      "Record general medicine sales quickly, keep product stock accurate, and review fast-moving products.",
    capabilities: [
      "General product stock tracking across brands",
      "Fast sales billing with cash, card, and mobile wallet",
      "Daily and monthly revenue and product reports",
    ],
    screenDetail: {
      title: "Medicine Counter Sales & Stock Records",
      metrics: [
        { label: "Prescriptions Billed", value: "118" },
        { label: "Stock Items", value: "1,820" },
        { label: "Payment Split", value: "Cash / bKash" },
      ],
      highlight: "Simple, dependable counter sales and clear stock visibility for daily retail.",
    },
  },
  {
    id: "wholesale",
    name: "Wholesale POS Software",
    tagline: "Distributors, traders & bulk supply businesses",
    benefitParagraph:
      "Manage supplier purchases, customer dues and sales records across your wholesale business.",
    illustration: "/assets/industries/wholesale.svg",
    useCase:
      "Manage bulk orders, track large supplier purchases, and keep strict records of commercial customer balances.",
    capabilities: [
      "Supplier purchases and supplier due tracking",
      "Bulk customer purchase records and dues ledger",
      "Complete transaction logs with payment histories",
    ],
    screenDetail: {
      title: "Wholesale Order Ledger & Supplier Dues",
      metrics: [
        { label: "Bulk Deliveries", value: "16 orders" },
        { label: "Supplier Payables", value: "৳1,45,000" },
        { label: "Receivables Due", value: "৳92,000" },
      ],
      highlight: "Keeps supplier payables and buyer credit transparent in one ledger.",
    },
  },
  {
    id: "multibranch",
    name: "Multi-Branch POS Software",
    tagline: "Retailers with 2 to 10+ operational locations",
    benefitParagraph:
      "Review sales, stock and staff records across branches, with individual and combined business views.",
    illustration: "/assets/industries/multibranch.svg",
    useCase:
      "Maintain separate sales and staff per store while viewing consolidated owner totals and configured branch transfers.",
    capabilities: [
      "Separate stock and sales data per branch location",
      "Branch-level reports and central consolidated view",
      "Configured branch stock transfer records",
    ],
    screenDetail: {
      title: "Multi-Store Central Overview & Inter-Branch Transfers",
      metrics: [
        { label: "Active Branches", value: "4 locations" },
        { label: "Transfers in Transit", value: "2 shipments" },
        { label: "Combined Revenue", value: "৳2,84,000" },
      ],
      highlight: "Compare store performance side-by-side without calling each branch manager.",
    },
  },
];
