export const CURRENCIES = ["Coins", "Gems"] as const;
export type Currency = (typeof CURRENCIES)[number];
