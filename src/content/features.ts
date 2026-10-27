export interface FeatureModule {
  id: string;
  name: string;
  summary: string;
  concreteOutcome: string;
  isLarge?: boolean;
  uiDetail: {
    label: string;
    badge: string;
    details: string[];
  };
}

export const coreFeatureModules: FeatureModule[] = [
  {
    id: "sales-billing",
    name: "Sales and billing",
    summary:
      "Rapid counter checkout supporting sales, returns, customer dues, and multiple recorded payment methods.",
    concreteOutcome:
      "Keeps lines moving fast while ensuring every payment method—cash, card, bKash, and Nagad—is logged accurately against the invoice.",
    isLarge: true,
    uiDetail: {
      label: "Payment & Checkout Register",
      badge: "Payment Records Only",
      details: [
        "Cash, card, bKash & Nagad recorded as payment methods",
        "Instant return handling with restocking options",
        "Customer due balance updated directly at the counter",
      ],
    },
  },
  {
    id: "inventory",
    name: "Inventory",
    summary:
      "Real-time product management, automatic deductions, supplier intake, and low stock warnings.",
    concreteOutcome:
      "Prevents stockouts and shrinkage by updating shelf counts immediately after every purchase or sale.",
    isLarge: true,
    uiDetail: {
      label: "Live Stock Engine",
      badge: "Real-Time Sync",
      details: [
        "Stock decreases automatically with each sale",
        "Low stock threshold warnings flag items before they run out",
        "Inter-branch stock transfers logged between configured outlets",
      ],
    },
  },
  {
    id: "purchases-suppliers",
    name: "Purchases and suppliers",
    summary:
      "Track supplier purchase invoices, incoming inventory shipments, and pending supplier payables.",
    concreteOutcome:
      "Know exactly how much you owe suppliers and verify that delivered goods match your purchase invoices.",
    uiDetail: {
      label: "Supplier Ledger",
      badge: "Payables Tracking",
      details: [
        "Supplier purchase records by date and invoice",
        "Outstanding supplier dues tracking",
      ],
    },
  },
  {
    id: "customers-dues",
    name: "Customers and dues",
    summary:
      "Maintain customer profiles, purchase history, visit frequency, and outstanding credit (baki) balances.",
    concreteOutcome:
      "Stop losing money to forgotten paper chits by linking dues to customer phone numbers with full purchase histories.",
    uiDetail: {
      label: "Customer Account Ledger",
      badge: "Credit Management",
      details: [
        "Phone number lookup pulls customer history in 2 seconds",
        "Clear record of total dues and partial payment receipts",
      ],
    },
  },
  {
    id: "expenses-accounts",
    name: "Expenses and accounts",
    summary:
      "Log shop operating costs, rent, utilities, staff expenses, cash flow, and calculated net profit.",
    concreteOutcome:
      "Gives owners clear visibility into cash-in-hand and daily operating margin without manual spreadsheet reconciliation.",
    uiDetail: {
      label: "Cash Flow & Expense Log",
      badge: "Visibility Only",
      details: [
        "Income vs expense tracking by category",
        "Daily cash-in-hand verification for cash drawer audits",
      ],
    },
  },
  {
    id: "reports",
    name: "Reports",
    summary:
      "Comprehensive daily, monthly, and branch reports for sales, profits, inventory movements, and expenses.",
    concreteOutcome:
      "Print or export clean reports for your tax advisor, accountant, or daily evening store review.",
    uiDetail: {
      label: "Export & Print Center",
      badge: "Print & Download",
      details: [
        "Sales, profit, purchase, and staff performance summaries",
        "One-click print or PDF download for daily records",
      ],
    },
  },
  {
    id: "hr-payroll",
    name: "HR and payroll",
    summary:
      "Track staff members, roles, branch assignments, and basic payroll compensation records.",
    concreteOutcome:
      "Organize employee records, assign shifts, and record salary payouts systematically.",
    uiDetail: {
      label: "Staff Roster & Payroll",
      badge: "Core HR",
      details: [
        "Employee records linked to specific branch locations",
        "Basic salary and disbursement tracking",
      ],
    },
  },
  {
    id: "multi-branch",
    name: "Multi branch control",
    summary:
      "Separate inventory, sales registers, and team members per store with a consolidated owner dashboard.",
    concreteOutcome:
      "Compare branch performance side-by-side and transfer inventory between stores without losing stock counts.",
    uiDetail: {
      label: "Branch Hub",
      badge: "Multi-Store",
      details: [
        "Separate stock, sales, and staff per location",
        "Combined company overview on owner screen",
      ],
    },
  },
  {
    id: "users-access",
    name: "Users and access",
    summary:
      "Role-based permission controls for cashiers, branch managers, inventory clerks, and owners.",
    concreteOutcome:
      "Protect sensitive financial data and prevent unauthorized discounts or ledger modifications.",
    uiDetail: {
      label: "Role-Based Permissions",
      badge: "Security & Control",
      details: [
        "Cashier role restricted to billing and returns",
        "Manager and owner roles unlock expense and report tools",
      ],
    },
  },
  {
    id: "dashboard-devices",
    name: "Dashboard and device access",
    summary:
      "Access sales due, net profit, expenses, low-stock warnings, and daily targets from desktop, tablet, or phone.",
    concreteOutcome:
      "Monitor your entire business from anywhere using responsive web layouts on computers, tablets, or phones.",
    uiDetail: {
      label: "Cross-Device Dashboard",
      badge: "Any Screen",
      details: [
        "Optimized for desktop counters and mobile review",
        "High-contrast screens designed for busy shop environments",
      ],
    },
  },
];

// Gated features that remain strictly unconfirmed until official verification
export const gatedUnconfirmedFeatures = [
  { name: "Offline mode", confirmed: false },
  { name: "Bangla application UI & thermal receipts", confirmed: false },
  { name: "Hardware scanner & printer driver SDK", confirmed: false },
  { name: "Automatic bKash/Nagad merchant API settlement", confirmed: false },
  { name: "Excel bulk import wizard", confirmed: false },
  { name: "Customer loyalty points & discount rules", confirmed: false },
  { name: "Automated VAT NBR report generation", confirmed: false },
  { name: "Restaurant KOT & table floor management", confirmed: false },
  { name: "Pharmacy batch & expiry date tracking", confirmed: false },
  { name: "Weighing scale serial integration", confirmed: false },
  { name: "Automated SMS/WhatsApp invoice delivery", confirmed: false },
  { name: "Dedicated native iOS/Android owner app", confirmed: false },
];
