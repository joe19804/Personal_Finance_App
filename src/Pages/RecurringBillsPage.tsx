import type { Bill } from "../type/Bill";

export default function RecurringBillsPage() {
  // 模擬假資料
  const totalBillsAmount = 1550.00;
  const summaryData = {
    paid: { count: 2, total: 320.00 },
    upcoming: { count: 6, total: 1230.00 },
    dueSoon: { count: 2, total: 40.00 },
  };

  const mockBills: Bill[] = [
    { id: '1', title: 'Alpha Analytics', dueDate: '1 Aug 2024, 13:44', amount: 250.00, status: 'paid', avatarColor: '#277c78' },
    { id: '2', title: 'Bravo Zen Spa', dueDate: '3 Aug 2024, 19:51', amount: 70.00, status: 'paid', avatarColor: '#eaddd7' },
    { id: '3', title: 'Charlie Electric Company', dueDate: '5 Aug 2024, 12:10', amount: 10.00, status: 'due-soon', avatarColor: '#c94736' },
    { id: '4', title: 'Delta Taxi', dueDate: '6 Aug 2024, 08:50', amount: 30.00, status: 'due-soon', avatarColor: '#82c9d7' },
    { id: '5', title: 'Echo Game Store', dueDate: '12 Aug 2024, 10:00', amount: 5.00, status: 'upcoming', avatarColor: '#826cb0' },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Recurring bills</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* === 左側：摘要區塊 === */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* 總額卡片 */}
          <div className="bg-gray-900 text-white rounded-xl p-6 shadow-sm flex flex-col gap-6">
            <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center">
              {/* 這裡可以放收據 icon */}
              <span className="text-xl">🧾</span>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Total bills</p>
              <p className="text-4xl font-bold">${totalBillsAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
          </div>

          {/* 摘要列表卡片 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-sm text-gray-500">Paid Bills</span>
                <span className="text-sm font-bold">{summaryData.paid.count} (${summaryData.paid.total.toFixed(2)})</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-sm text-gray-500">Total Upcoming</span>
                <span className="text-sm font-bold">{summaryData.upcoming.count} (${summaryData.upcoming.total.toFixed(2)})</span>
              </div>
              <div className="flex justify-between items-center pt-1 text-[#c94736]">
                <span className="text-sm">Due soon</span>
                <span className="text-sm font-bold">{summaryData.dueSoon.count} (${summaryData.dueSoon.total.toFixed(2)})</span>
              </div>
            </div>
          </div>
        </div>

        {/* === 右側：帳單列表區塊 === */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">

          {/* 工具列 (搜尋與排序) */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <input
                type="text"
                placeholder="Search bills"
                className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none">
                <option>Latest</option>
              </select>
            </div>
          </div>

          {/* 帳單表格 */}
          <table className="w-full text-left border-collapse">
            <thead className="text-gray-500 text-xs border-b border-gray-200">
              <tr>
                <th className="pb-4 font-normal">Bill Title</th>
                <th className="pb-4 font-normal">Due Date</th>
                <th className="pb-4 font-normal text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockBills.map((bill) => (
                <tr key={bill.id} className="text-sm">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: bill.avatarColor }} />
                      <span className="font-bold text-gray-900">{bill.title}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className={`${bill.status === 'due-soon' ? 'text-[#c94736]' : bill.status === 'paid' ? 'text-[#277c78]' : 'text-gray-500'}`}>
                        {bill.dueDate}
                      </span>
                      {/* 狀態 Icon 模擬 */}
                      {bill.status === 'paid' && <span className="text-[#277c78] text-xs">✓</span>}
                      {bill.status === 'due-soon' && <span className="text-[#c94736] text-xs">!</span>}
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <span className={`font-bold ${bill.status === 'due-soon' ? 'text-[#c94736]' : 'text-gray-900'}`}>
                      ${bill.amount.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </>
  );
}