export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  requiresProof?: boolean;
}

export const siteSettings = {
  brandName: "SortPi",
  tagline: "Smart POS and business management for shops in Bangladesh",
  creator: "Built by GeekSSort",
  contact: {
    email: "contact@sortpi.com",
    phone: "+8801341869125",
    phoneDisplay: "+88 01341869125",
  },
  routes: {
    home: "/",
    contact: "/contact",
    blog: "/blog",
    signup: "/signup",
    demoAnchor: "#demo",
    featuresAnchor: "#features",
    solutionsAnchor: "#solutions",
    pricingAnchor: "#pricing",
    howItWorksAnchor: "#how-it-works",
    faqAnchor: "#faq",
    customersAnchor: "#customers",
  },
  // Compliance flag: Gate customer proof until authentic assets are supplied
  hasApprovedCustomerLogos: false,
  approvedCustomerStoriesCount: 0,
};

export const mainNavigation: NavItem[] = [
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Customers", href: "/#customers", requiresProof: true },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];
