import { getThemeColor, type Pot } from "../type/Pots";

export default function PotCard({ pot }: { pot: Pot; }) {
  const { name, theme, totalSaved, target } = pot;
  // 計算進度百分比，最高不超過 100%
  const progressPercentage = Math.min((totalSaved / target) * 100, 100);
  const themeColor = getThemeColor(theme);
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4">
      {/* 標題列 */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: themeColor }} />
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600">...</button>
      </div>

      {/* 金額 */}
      <div className="flex justify-between items-end mt-2">
        <span className="text-sm text-gray-500">Total Saved</span>
        <span className="text-3xl font-bold text-gray-900">${totalSaved.toFixed(2)}</span>
      </div>

      {/* 進度條區塊 */}
      <div>
        <div className="w-full bg-[#f8f4f0] rounded-md h-2 mb-2">
          <div
            className="h-full rounded-md transition-all duration-300"
            style={{ width: `${progressPercentage}%`, backgroundColor: themeColor }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>{progressPercentage.toFixed(1)}%</span>
          <span>Target of ${target.toFixed(0)}</span>
        </div>
      </div>

      {/* 操作按鈕 */}
      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-[#f8f4f0] hover:bg-[#eaddd7] text-gray-900 font-bold py-3 rounded-lg text-sm transition-colors">
          + Add Money
        </button>
        <button className="flex-1 bg-[#f8f4f0] hover:bg-[#eaddd7] text-gray-900 font-bold py-3 rounded-lg text-sm transition-colors">
          Withdraw
        </button>
      </div>
    </div>
  );
}