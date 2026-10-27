export interface CustomerStory {
  id: string;
  author: string;
  role: string;
  quote: string;
  permissionConfirmed: boolean;
}

export const customerStories: CustomerStory[] = [
  {
    id: "salman-atik",
    author: "Salman Atik",
    role: "Owner, Super Shop",
    quote:
      "SortPi brings our sales, inventory and daily operations together, helping us stay organized and manage our business more efficiently.",
    // Compliance Rule: Keep permission false until confirmed
    permissionConfirmed: false,
  },
];
