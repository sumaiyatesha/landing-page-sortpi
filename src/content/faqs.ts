export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Exactly preserved 8 questions and answers from Prompt 6
export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is SortPi?",
    answer:
      "SortPi is an all-in-one business management platform that helps you manage sales, inventory, finances and daily operations.",
  },
  {
    id: "faq-2",
    question: "What types of businesses can use it?",
    answer:
      "Retail shops, super shops, grocery stores, restaurants, pharmacies, wholesalers and other businesses can use SortPi for supported workflows.",
  },
  {
    id: "faq-3",
    question: "What features does it offer?",
    answer:
      "SortPi brings POS, inventory, stock transfers, purchases, suppliers, customers, dues, expenses, accounts, HR, payroll and reports together.",
  },
  {
    id: "faq-4",
    question: "Can I manage multiple branches?",
    answer:
      "Yes. Keep branch stock, sales and staff separate, review branches together or individually, and transfer stock where your plan supports it.",
  },
  {
    id: "faq-5",
    question: "Can it help me track sales and expenses?",
    answer:
      "Yes. Record sales, returns, purchases and expenses, then review profit, dues and cash in hand from your business records.",
  },
  {
    id: "faq-6",
    question: "Can I track inventory in real time?",
    answer:
      "Stock updates as sales and purchases are recorded. Low stock warnings help you identify products that need attention.",
  },
  {
    id: "faq-7",
    question: "Does it provide business reports?",
    answer:
      "Yes. Review sales, profit, stock, purchase, expense and staff reports by day, month or branch, with print or download options.",
  },
  {
    id: "faq-8",
    question: "How can I get started?",
    answer:
      "Request a free demo to discuss your business. You can also create an account, add your business and products, and start using the available trial without a card.",
  },
];
