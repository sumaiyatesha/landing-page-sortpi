export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  author: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "salon-team-workload-bottlenecks",
    title: "Your Salon Has a Full Team. Why Are the Same People Doing All the Work?",
    excerpt:
      "Learn how a salon management system helps salon owners uncover hidden bottlenecks, balance staff workloads, and build a more productive salon.",
    coverImage: "/assets/blog/salon-team-workload.png",
    publishedAt: "October 26, 2026",
    readingTime: "5 min read",
    category: "Team & Operations",
    author: "GeekSSort Insights",
    content: [
      "When walk-in appointments surge, it often feels like only a few stylists or technicians carry the entire workload while other chairs sit empty. Without transparent service scheduling and performance tracking, owners cannot pinpoint why workload distribution is uneven.",
      "A modern management system balances appointment allocations across your team, monitors chair utilization in real time, and provides clear service commissions that motivate staff.",
      "Automated appointment alerts and stylist scheduling eliminate bottlenecks so every team member contributes at full capacity.",
    ],
  },
  {
    slug: "elegant-beauty-sales-growth-case-study",
    title: "How a Salon Management System Helped Elegant Beauty Increase Sales by 66%",
    excerpt:
      "Discover how Elegant Beauty achieved an almost two-thirds increase in revenue by connecting appointments, retail checkout, and customer profiles.",
    coverImage: "/assets/blog/salon-sales-growth.png",
    publishedAt: "October 22, 2026",
    readingTime: "6 min read",
    category: "Case Studies & Growth",
    author: "SortPi Growth Team",
    content: [
      "Elegant Beauty transformed their customer retention by unifying online bookings with front-desk POS billing. When clients arrived, stylists had instant access to past hair treatment records, preferred products, and upcoming appointments.",
      "By prompting add-on retail hair care products at checkout and sending automated WhatsApp reminders before appointments, no-shows dropped by 45% while average basket size rose substantially.",
      "The connected owner dashboard provided the executive team with daily revenue summaries, service category breakdowns, and commission tracking across all branches.",
    ],
  },
  {
    slug: "beauty-studio-pos-system-practical-guide",
    title: "Beauty Studio POS System: Practical Guide",
    excerpt:
      "A practical guide to beauty studio POS systems. Learn how connected billing, service invoicing, retail products, and daily cash control work together.",
    coverImage: "/assets/blog/beauty-studio-pos.png",
    publishedAt: "October 18, 2026",
    readingTime: "5 min read",
    category: "POS & Billing",
    author: "SortPi Editorial Team",
    content: [
      "Beauty salons and studios require software that seamlessly merges hourly services with retail product sales. Calculating stylist tips, service combos, product inventory, and card payments on separate calculators slows checkout down to a crawl.",
      "A purpose-built studio POS terminal enables staff to combine facial packages, haircare products, and recorded payment methods (cash, card, bKash, and Nagad) on a single itemized receipt.",
      "Real-time drawer reconciliation ensures evening cash matches day-end register totals without unrecorded shortages.",
    ],
  },
  {
    slug: "how-to-manage-pos-inventory",
    title: "How to Manage POS Inventory in Bangladeshi Retail Stores",
    excerpt:
      "Learn how real-time barcode scanning and automated deductions prevent lost revenue and stock discrepancies across busy retail aisles.",
    coverImage: "/assets/blog/inventory-pos.jpg",
    publishedAt: "October 14, 2026",
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
    coverImage: "/assets/blog/retail-dues.jpg",
    publishedAt: "October 10, 2026",
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
    coverImage: "/assets/blog/super-shop.jpg",
    publishedAt: "October 06, 2026",
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
