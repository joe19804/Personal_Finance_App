import { transactions } from "../../data/data.json";
import type { Transaction } from "../type/Transaction";

export default function TransactionPage() {
  // 核心邏輯範例
  const processedData: Transaction[] = transactions
  // 1. 搜尋過濾
  // .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  // // 2. 類別過濾
  // .filter(item => category === 'All' || item.category === category)
  // // 3. 排序邏輯
  // .sort((a, b) => {
  //   switch (sortType) {
  //     case 'Latest': return new Date(b.date).getTime() - new Date(a.date).getTime();
  //     case 'Oldest': return new Date(a.date).getTime() - new Date(b.date).getTime();
  //     case 'Highest': return b.amount - a.amount;
  //     case 'Lowest': return a.amount - b.amount;
  //     case 'AtoZ': return a.name.localeCompare(b.name);
  //     case 'ZtoA': return b.name.localeCompare(a.name);
  //     default: return 0;
  //   }
  // });

  // 4. 分頁裁切 (每頁 10 筆)
  // const totalPages = Math.ceil(processedData.length / 10);
  // const paginatedData = processedData.slice((currentPage - 1) * 10, currentPage * 10);
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Transaction</h1>
      <div className="rounded-xl border border-border-subtle p-6 bg-white shadow-sm">

        {/* Filter Bar */}
        <div className="flex gap-4 mb-6">
          <input type="text" className="border rounded-lg px-4 py-2 flex-1" placeholder="Search..." />
          <select className="border rounded-lg px-4 py-2"><option>Latest</option></select>
          <select className="border rounded-lg px-4 py-2"><option>All Transactions</option></select>
        </div>
        <div className="mx-3">
          {/* Table Structure */}
          <table className="w-full text-left px-5">
            <thead className="text-gray-500 text-sm">
              <tr>
                <th className="pb-4">Recipient / Sender</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Transaction Date</th>
                <th className="pb-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {/* Map 你的資料在這裡 */}
              {processedData.map((item, idx) => (
                <tr key={idx} className="text-sm">
                  <td className="py-4">
                    <div className="flex items-center gap-x-3">
                      <img className="w-8 h-8 rounded-full" src={item.avatar} />{item.name}
                    </div>
                  </td>
                  <td className="py-4">{item.category}</td>
                  <td className="py-4">{item.date}</td>
                  <td className="py-4 text-right">
                    <span className={`font-bold ${item.recurring ? 'text-green-600' : 'text-red-600'}`}>{item.amount}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2">
          <button className="px-4 py-2 border rounded-lg">Prev</button>
          {/* Page Numbers */}
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">5</button>
          <button className="px-4 py-2 border rounded-lg">Next</button>
        </div>
      </div>
    </>

  );
}