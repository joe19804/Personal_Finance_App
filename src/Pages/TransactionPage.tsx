import { useState } from "react";
import { transactions } from "../../data/data.json";
import LeftIcon from "../assets/images/icon-caret-left.svg?react";
import RightIcon from "../assets/images/icon-caret-right.svg?react";
import SearchIcon from "../assets/images/icon-search.svg?react";
import type { Transaction } from "../type/Transaction";

export default function TransactionPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All Transactions');
  const [sortType, setSortType] = useState('Latest');

  // 動態取得所有獨立的分類
  const categories = ['All Transactions', ...Array.from(new Set(transactions.map(t => t.category)))];

  const processedData: Transaction[] = transactions
    .filter(item => {
      // 搜尋：比對名稱 (Recipient / Sender)
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      // 分類：若為 'All Transactions' 則全顯示，否則比對 category
      const matchesCategory = category === 'All Transactions' || item.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      // 排序邏輯
      switch (sortType) {
        case 'Latest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'Oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'A to Z':
          return a.name.localeCompare(b.name);
        case 'Z to A':
          return b.name.localeCompare(a.name);
        case 'Highest':
          return Math.abs(b.amount) - Math.abs(a.amount);
        case 'Lowest':
          return Math.abs(a.amount) - Math.abs(b.amount);
        default:
          return 0;
      }
    });

  const totalPages = Math.max(Math.ceil(processedData.length / 10), 1);
  const paginatedData = processedData.slice((currentPage - 1) * 10, currentPage * 10);


  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Transaction</h1>
      <div className="rounded-xl p-6 bg-white shadow-sm">

        {/* Filter Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 mt-2">
          <div className="relative flex items-center w-full max-w-sm">
            <input
              type="text"
              className="border border-[#98908B] rounded-lg pl-4 pr-6 py-2 focus:outline-none hover:border-[#696968] w-full"
              placeholder="Search transaction..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            />
            <SearchIcon className="absolute right-3 pointer-events-none text-[#201F24]" />
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex items-center mr-3">
              <span className="text-[#98908B] mr-2">Sort By</span>
              <select
                className="appearance-none border border-[#98908B] hover:border-[#696968] rounded-lg pl-4 pr-10 py-2 focus:outline-none"
                value={sortType}
                onChange={(e) => { setSortType(e.target.value); setCurrentPage(1); }}
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
              <LeftIcon className="absolute right-3 pointer-events-none text-[#201F24] -rotate-90" />
            </div>

            <div className="relative flex items-center mr-3">
              <span className="text-[#98908B] mr-2">Category</span>
              <select
                className="appearance-none border border-[#98908B] hover:border-[#696968] rounded-lg pl-4 pr-10 py-2 focus:outline-none"
                value={category}
                onChange={(e) => { setCategory(e.target.value); setCurrentPage(1); }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <LeftIcon className="absolute right-3 pointer-events-none text-[#201F24] -rotate-90" />
            </div>
          </div>
        </div>
        <div className="mx-5">
          {/* Table Structure */}
          <table className="w-full text-left px-5">
            <thead className="text-gray-500 text-sm">
              <tr>
                <th className="pb-4 font-normal text-left">Recipient / Sender</th>
                <th className="pb-4 font-normal text-left">Category</th>
                <th className="pb-4 font-normal text-left">Transaction Date</th>
                <th className="pb-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2F2F2]">
              {/* Map 你的資料在這裡 */}
              {paginatedData.map((item, idx) => (
                <tr key={idx} className="text-sm">
                  <td className="py-4">
                    <div className="flex items-center gap-x-3">
                      <img className="w-8 h-8 rounded-full" src={item.avatar} />{item.name}
                    </div>
                  </td>
                  <td className="py-4 text-left">{item.category}</td>
                  <td className="py-4 text-left">
                    {new Date(item.date).toLocaleString("en-GB", {
                      day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false
                    })}
                  </td>
                  <td className="py-4 text-right">
                    <span className={`font-bold ${item.amount > 0 ? 'text-[#277C78]' : 'text-[#201F24]'}`}>{item.amount > 0 ? '+' : ''}{item.amount}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-between gap-2 px-4 py-2 border border-[#98908B] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#98908B] hover:text-white transition-colors"
          >
            <LeftIcon className={`transition-colors hover:bg-[#98908B] mr-2`} />
            Prev
          </button>
          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border border-[#98908B] rounded-lg transition-colors ${currentPage === page
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900 text-[#98908B] hover:text-white"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-between gap-2 px-4 py-2 border border-[#98908B] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#98908B] hover:text-white transition-colors"
          >
            Next
            <RightIcon className={`transition-colors text-[#98908B] ml-2`} />
          </button>
        </div>
      </div>
    </>

  );
}