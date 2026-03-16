

export default function BudgetsPage() {
  // // 這裡放入你的假資料或真實資料狀態
  // const mockBudgets: Budget[] = [
  //   {
  //     id: '1',
  //     category: 'Entertainment',
  //     colorType: 'entertainment',
  //     maximum: 50.00,
  //     spent: 25.00,
  //     latestTransactions: [
  //       { id: 't1', name: 'Pine Cinema', date: '14 Aug 2024, 14:30', amount: -14.00 },
  //       // ... 其他交易
  //     ]
  //   },
  //   // ... 其他預算分類
  // ];
  return (
    <></>
    // <>
    //   {/* Header */}
    //   <div className="flex justify-between items-center mb-8">
    //     <h1 className="text-3xl font-bold">Budgets</h1>
    //     <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
    //       + Add New Budget
    //     </button>
    //   </div>

    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    //     {/* 左側：圖表與總結 */}
    //     <div className="lg:col-span-1">
    //       <div className="bg-white rounded-xl p-6 shadow-sm">
    //         {/* 圓餅圖區塊 (此處用 CSS Conic Gradient 模擬簡單版) */}
    //         <div className="flex justify-center mb-8 relative">
    //           <div
    //             className="w-48 h-48 rounded-full flex items-center justify-center"
    //             style={{
    //               background: `conic-gradient(
    //                  var(--color-cat-entertainment) 0% 15%, 
    //                  var(--color-cat-bills) 15% 45%, 
    //                  var(--color-cat-dining) 45% 75%, 
    //                  var(--color-cat-personal) 75% 100%
    //                )`
    //             }}
    //           >
    //             <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center">
    //               <span className="text-2xl font-bold">$407</span>
    //               <span className="text-xs text-gray-500">of $975 limit</span>
    //             </div>
    //           </div>
    //         </div>

    //         <h3 className="font-bold text-lg mb-4">Spending Summary</h3>
    //         <ul className="space-y-4">
    //           {mockBudgets.map(b => (
    //             <li key={b.id} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
    //               <div className="flex items-center gap-2">
    //                 <div className="w-1 h-4 rounded-full" style={{ backgroundColor: getColorVar(b.colorType) }} />
    //                 <span className="text-sm text-gray-500">{b.category}</span>
    //               </div>
    //               <div className="text-sm">
    //                 <span className="font-bold">${b.spent.toFixed(2)}</span>
    //                 <span className="text-gray-400 text-xs ml-1">of ${b.maximum.toFixed(2)}</span>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>

    //     {/* 右側：個別預算卡片列表 */}
    //     <div className="lg:col-span-2">
    //       {mockBudgets.map(budget => (
    //         <BudgetCard key={budget.id} budget={budget} />
    //       ))}
    //     </div>
    //   </div>
    // </>
  );
}

