export default function TransactionPage() {

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

        {/* Table Structure */}
        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm">
            <tr>
              <th className="pb-4">Recipient / Sender</th>
              <th className="pb-4">Category</th>
              <th className="pb-4">Transaction Date</th>
              <th className="pb-4">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {/* Map 你的資料在這裡 */}
          </tbody>
        </table>

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