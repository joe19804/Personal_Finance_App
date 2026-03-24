import { useState } from 'react';

// 定義組件的 Props
interface AddNewBudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddNewBudgetModal({ isOpen, onClose }: AddNewBudgetModalProps) {
  // 表單狀態管理
  const [budgetName, setBudgetName] = useState('Entertainment');
  const [maxSpending, setMaxSpending] = useState('2000');
  const [colorTag, setColorTag] = useState('Green');

  if (!isOpen) return null;

  return (
    // 背景遮罩 (Overlay)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      {/* 彈窗主體 */}
      <div className="relative w-full max-w-[500px] rounded-2xl bg-white p-8 shadow-2xl">

        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 標題與描述 */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Add New Budget</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
          </p>
        </div>

        {/* 表單內容 */}
        <form onSubmit={(e) => { e.preventDefault(); /* 處理提交邏輯 */ }} className="space-y-4">

          {/* Budget Name Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="budgetName" className="text-xs font-bold text-gray-500">
              Budget Name
            </label>
            <input
              id="budgetName"
              type="text"
              value={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              placeholder="e.g. Entertainment"
            />
          </div>

          {/* Maximum Spending Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="maxSpending" className="text-xs font-bold text-gray-500">
              Maximum Spending
            </label>
            <div className="flex w-full items-center rounded-lg border border-gray-300 px-4 py-3 focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900">
              <span className="text-gray-500 text-sm mr-2">$</span>
              <input
                id="maxSpending"
                type="number"
                value={maxSpending}
                onChange={(e) => setMaxSpending(e.target.value)}
                className="w-full bg-transparent text-sm text-gray-900 focus:outline-none"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Color Tag Select (客製化樣式以顯示圓點) */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="colorTag" className="text-xs font-bold text-gray-500">
              Color Tag
            </label>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            >
              <div className="flex items-center gap-3">
                {/* 顏色圓點 */}
                <div className="h-4 w-4 rounded-full bg-[#277C78]"></div>
                <span>{colorTag}</span>
              </div>
              {/* 下拉箭頭圖示 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* 註：實際開發中，這裡可以結合 headless UI (如 Radix 或 Headless UI) 來實作完整的下拉選單選取邏輯 */}
          </div>

          {/* 提交按鈕 */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-gray-900 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Add Budget
          </button>
        </form>

      </div>
    </div>
  );
}