// types.ts
export type BillStatus = 'paid' | 'upcoming' | 'due-soon';

export interface Bill {
  id: string;
  title: string;
  dueDate: string;
  amount: number;
  status: BillStatus;
  avatarColor?: string; // 模擬列表左側的圓形圖示顏色
}

export interface BillSummary {
  paid: { count: number; total: number; };
  upcoming: { count: number; total: number; };
  dueSoon: { count: number; total: number; };
}