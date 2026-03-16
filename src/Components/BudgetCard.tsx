
// export default function BudgetCard({ budget }: { budget: Budget; }) {
export default function BudgetCard() {

  // const { category, maximum, spent, colorType, latestTransactions } = budget;
  // const progressPercentage = Math.min((spent / maximum) * 100, 100);
  // const remaining = maximum - spent;
  // const color = getColorVar(colorType);
  return (
    <></>
    // <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
    //   <div className="flex justify-between items-center mb-4">
    //     <div className="flex items-center gap-3">
    //       <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
    //       <h2 className="text-xl font-bold">{category}</h2>
    //     </div>
    //     <button className="text-gray-400 hover:text-gray-600">...</button>
    //   </div>

    //   <p className="text-sm text-gray-500 mb-4">Maximum of ${maximum.toFixed(2)}</p>

    //   {/* Progress Bar */}
    //   <div className="w-full bg-[#f8f4f0] rounded-md h-8 mb-4 p-1">
    //     <div
    //       className="h-full rounded-md"
    //       style={{ width: `${progressPercentage}%`, backgroundColor: color }}
    //     />
    //   </div>

    //   {/* Spent & Free Stats */}
    //   <div className="flex justify-between mb-6">
    //     <div className="flex flex-col border-l-4 pl-3" style={{ borderColor: color }}>
    //       <span className="text-sm text-gray-500">Spent</span>
    //       <span className="font-bold">${spent.toFixed(2)}</span>
    //     </div>
    //     <div className="flex flex-col border-l-4 pl-3 border-[#f8f4f0]">
    //       <span className="text-sm text-gray-500">Free</span>
    //       <span className="font-bold text-gray-800">${remaining.toFixed(2)}</span>
    //     </div>
    //   </div>

    //   {/* Latest Spending List */}
    //   <div className="bg-[#f8f4f0] rounded-xl p-4">
    //     <div className="flex justify-between items-center mb-4">
    //       <h3 className="font-bold text-sm">Latest Spending</h3>
    //       <button className="text-sm text-gray-500 flex items-center hover:text-gray-800">
    //         See All <span className="ml-1">›</span>
    //       </button>
    //     </div>
    //     <div className="space-y-3">
    //       {latestTransactions.map((tx: Transaction) => (
    //         <div key={tx.id} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0">
    //           <div className="flex items-center gap-3">
    //             {/* 簡單的圓形頭像佔位符 */}
    //             <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
    //             <span className="font-medium text-sm">{tx.name}</span>
    //           </div>
    //           <div className="text-right">
    //             <div className="font-bold text-sm">-${Math.abs(tx.amount).toFixed(2)}</div>
    //             <div className="text-xs text-gray-500">{tx.date}</div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}