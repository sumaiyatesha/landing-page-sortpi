export interface CartItem {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  total: number;
  initialStock: number;
  updatedStock: number;
  category: string;
}

export interface SampleSaleScenario {
  invoiceNumber: string;
  timestamp: string;
  branch: string;
  cashier: string;
  customer: {
    name: string;
    phone: string;
  };
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  paid: number;
  due: number;
  paymentMethod: "Cash" | "bKash" | "Card";
}

// Exactly verified illustrative grocery scenario from build guide
export const heroSampleSale: SampleSaleScenario = {
  invoiceNumber: "SP-8492",
  timestamp: "Today, 03:42 PM",
  branch: "Gulshan Branch — Counter 01",
  cashier: "Karim Hasan",
  customer: {
    name: "Regular Walk-in Customer",
    phone: "+880 17XX-XXXXXX",
  },
  items: [
    {
      id: "prod-1",
      name: "Nazirshail Rice",
      unit: "5kg pack",
      quantity: 1,
      unitPrice: 420,
      total: 420,
      initialStock: 18,
      updatedStock: 17,
      category: "Grains & Rice",
    },
    {
      id: "prod-2",
      name: "Soybean Oil",
      unit: "1L bottle",
      quantity: 2,
      unitPrice: 180,
      total: 360,
      initialStock: 26,
      updatedStock: 24,
      category: "Edible Oils",
    },
    {
      id: "prod-3",
      name: "Ispahani Tea",
      unit: "200g pack",
      quantity: 1,
      unitPrice: 120,
      total: 120,
      initialStock: 12,
      updatedStock: 11,
      category: "Beverages",
    },
  ],
  subtotal: 900,
  discount: 0,
  total: 900,
  paid: 900,
  due: 0,
  paymentMethod: "Cash",
};

// Alternative partial payment example for Track Dues workflow tab
export const duesSampleSale: SampleSaleScenario = {
  ...heroSampleSale,
  invoiceNumber: "SP-8493",
  customer: {
    name: "Alim Uddin (Account #104)",
    phone: "+880 1819-338291",
  },
  paid: 700,
  due: 200,
};
