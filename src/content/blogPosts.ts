export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  author: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-manage-pos-inventory",
    title: "How to Manage POS Inventory in Bangladeshi Retail Stores",
    excerpt:
      "Learn how real-time barcode scanning and automated deductions prevent lost revenue and stock discrepancies across busy grocery and retail aisles.",
    publishedAt: "October 24, 2026",
    readingTime: "4 min read",
    category: "Inventory & Operations",
    author: "SortPi Operations Team",
    content: [
      "Running a busy retail or grocery store in Bangladesh often means balancing high walk-in foot traffic with manual stock registers. When sales are written on paper slips while stock is tallied later in the evening, discrepancies inevitably creep in.",
      "With a connected cloud POS like SortPi, every item scanned at the counter immediately updates your back-office inventory ledger. Whether you sell a 5kg sack of rice or a 200g tea pack, stock deductions reflect in real time across your entire store network.",
      "Setting up minimum reorder safety thresholds ensures you receive warning alerts well before essential household items or fast-moving apparel run completely out of stock.",
    ],
  },
  {
    slug: "retail-dues-tracking-guide",
    title: "Tracking Customer Dues (Baki) Without Losing Trust or Money",
    excerpt:
      "A practical guide to replacing scattered khata notebooks with a transparent, phone-linked credit ledger that protects customer relationships.",
    publishedAt: "October 18, 2026",
    readingTime: "5 min read",
    category: "Customer Accounts & Dues",
    author: "GeekSSort Retail Insights",
    content: [
      "Customer credit (baki) is a cornerstone of neighborhood retail commerce in Bangladesh. Regular customers expect credit facilities, but managing dues across handwritten khatas frequently causes disputes, forgotten sums, and strained relationships.",
      "SortPi links every outstanding due balance directly to the customer's verified mobile phone number. When a customer pays partially at checkout, the exact received sum and remaining balance appear right on their printed receipt.",
      "Shop owners can review total receivables at any moment from the executive owner dashboard, ensuring clear cash flow and polite, transparent reconciliation.",
    ],
  },
  {
    slug: "super-shop-pos-setup",
    title: "Super Shop POS Setup: Multi-Counter Checkout and Cash Control",
    excerpt:
      "How to set up multiple billing counters, separate cashier shifts, and reconcile evening cash drawers in growing Bangladeshi super shops.",
    publishedAt: "October 12, 2026",
    readingTime: "6 min read",
    category: "Multi-Counter & Scaling",
    author: "SortPi Technical Onboarding",
    content: [
      "As a neighborhood grocery expands into a multi-counter super shop, checkout speed and cash reconciliation become top priorities. Long queues drive customers away, while untracked cash advances eat into operating margins.",
      "SortPi enables cashiers to process transactions rapidly using barcode scanners and multiple recorded payment methods, including cash, card, bKash, and Nagad.",
      "Role-based permissions keep sensitive profit margins, expenses, and supplier purchase costs private to owners and store managers, while giving cashiers a distraction-free counter terminal.",
    ],
  },
];
