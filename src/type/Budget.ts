import type { Transaction } from "./Transaction";
export type CategoryColor = 'entertainment' | 'bills' | 'dining' | 'personal';
export const getColorVar = (type: string) => `var(--color-cat-${type})`;
export interface Budget {
  id: string;
  category: string;
  colorType: CategoryColor;
  maximum: number;
  spent: number;
  latestTransactions: Transaction[];
}