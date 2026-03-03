// types.ts
export type PotTheme = 'savings' | 'concert' | 'gift' | 'laptop' | 'holiday';
export const getThemeColor = (theme: PotTheme) => `var(--color-pot-${theme})`;
export interface Pot {
  id: string;
  name: string;
  theme: PotTheme;
  totalSaved: number;
  target: number;
}