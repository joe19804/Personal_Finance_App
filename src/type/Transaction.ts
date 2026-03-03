export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  avatarUrl?: string; // 如果有頭像的話
}