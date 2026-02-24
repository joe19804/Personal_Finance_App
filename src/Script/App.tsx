import {
  ArrowUpDown,
  ChevronRight,
  ChevronsLeft,
  DollarSign,
  Home,
  PieChart,
  ReceiptText,
  Wallet
} from 'lucide-react';
import React from 'react';

export default function FinanceDashboard() {
  return (
    <div className="flex h-screen bg-[#F8F4F0] font-sans text-[#201F24] overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 bg-[#201F24] text-white flex flex-col justify-between rounded-r-2xl pb-8">
        <div>
          <div className="p-8 text-2xl font-bold tracking-wider">
            finance
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            <NavItem icon={<Home size={20} />} label="Overview" active />
            <NavItem icon={<ArrowUpDown size={20} />} label="Transactions" active={false} />
            <NavItem icon={<PieChart size={20} />} label="Budgets" active={false} />
            <NavItem icon={<DollarSign size={20} />} label="Pots" active={false} />
            <NavItem icon={<ReceiptText size={20} />} label="Recurring Bills" active={false} />
          </nav>
        </div>
        <div className="px-8 flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition-colors">
          <ChevronsLeft size={20} />
          <span className="font-medium">Minimize Menu</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
        <h1 className="text-3xl font-bold mb-8">Overview</h1>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#201F24] text-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-300 mb-2">Current Balance</p>
            <h2 className="text-3xl font-bold">$4,836.00</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Income</p>
            <h2 className="text-3xl font-bold">$3,814.25</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Expenses</p>
            <h2 className="text-3xl font-bold">$1,700.50</h2>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column (Pots & Transactions) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Pots Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Pots</h3>
                <button className="text-sm text-gray-500 flex items-center hover:text-gray-800">
                  See Details <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#F8F4F0] p-4 rounded-xl flex-1 flex items-center gap-4">
                  <Wallet className="text-[#277C78]" size={32} />
                  <div>
                    <p className="text-sm text-gray-500">Total Saved</p>
                    <p className="text-2xl font-bold">$850</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <PotItem label="Savings" amount="$159" color="bg-[#277C78]" />
                  <PotItem label="Gift" amount="$40" color="bg-[#82C9D7]" />
                  <PotItem label="Concert Ticket" amount="$110" color="bg-[#626070]" />
                  <PotItem label="New Laptop" amount="$10" color="bg-[#F2CDAC]" />
                </div>
              </div>
            </section>

            {/* Transactions Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Transactions</h3>
                <button className="text-sm text-gray-500 flex items-center hover:text-gray-800">
                  View All <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                <TransactionItem name="Emma Richardson" date="19 Aug 2024" amount="+$75.50" isPositive color="bg-teal-600" />
                <hr className="border-gray-100" />
                <TransactionItem name="Savory Bites Bistro" date="19 Aug 2024" amount="-$55.50" isPositive={false} color="bg-orange-800" />
                <hr className="border-gray-100" />
                <TransactionItem name="Daniel Carter" date="18 Aug 2024" amount="-$42.30" isPositive={false} color="bg-red-800" />
                <hr className="border-gray-100" />
                <TransactionItem name="Sun Park" date="17 Aug 2024" amount="+$120.00" isPositive color="bg-blue-600" />
                <hr className="border-gray-100" />
                <TransactionItem name="Urban Services Hub" date="17 Aug 2024" amount="-$65.00" isPositive={false} color="bg-yellow-600" />
              </div>
            </section>

          </div>

          {/* Right Column (Budgets & Bills) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Budgets Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Budgets</h3>
                <button className="text-sm text-gray-500 flex items-center hover:text-gray-800">
                  See Details <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              <div className="flex items-center gap-8">
                {/* CSS Donut Chart */}
                <div className="relative w-48 h-48 rounded-full flex items-center justify-center"
                  style={{ background: 'conic-gradient(#277C78 0% 65%, #82C9D7 65% 80%, #F2CDAC 80% 90%, #626070 90% 100%)' }}>
                  <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                    <span className="text-2xl font-bold">$338</span>
                    <span className="text-xs text-gray-500">of $975 limit</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  <BudgetItem label="Entertainment" amount="$50.00" color="bg-[#626070]" />
                  <BudgetItem label="Bills" amount="$750.00" color="bg-[#277C78]" />
                  <BudgetItem label="Dining Out" amount="$75.00" color="bg-[#F2CDAC]" />
                  <BudgetItem label="Personal Care" amount="$100.00" color="bg-[#82C9D7]" />
                </div>
              </div>
            </section>

            {/* Recurring Bills Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Recurring Bills</h3>
                <button className="text-sm text-gray-500 flex items-center hover:text-gray-800">
                  See Details <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              <div className="space-y-3">
                <BillItem label="Paid Bills" amount="$190.00" color="border-[#277C78]" bg="bg-[#F8F4F0]" />
                <BillItem label="Total Upcoming" amount="$194.98" color="border-[#F2CDAC]" bg="bg-[#F8F4F0]" />
                <BillItem label="Due Soon" amount="$59.98" color="border-[#82C9D7]" bg="bg-[#F8F4F0]" />
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}

/* Helper Components */

function NavItem({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-4 px-8 py-4 cursor-pointer transition-all ${active
      ? 'bg-[#F8F4F0] text-[#201F24] border-l-4 border-[#277C78] rounded-r-xl font-bold'
      : 'text-gray-400 hover:text-white border-l-4 border-transparent'
      }`}>
      {icon}
      <span className="text-base">{label}</span>
    </div>
  );
}

function PotItem({ label, amount, color }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-1 h-10 rounded-full ${color}`}></div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-bold">{amount}</p>
      </div>
    </div>
  );
}

function TransactionItem({ name, date, amount, isPositive, color }) {
  return (
    <div className="flex justify-between items-center py-1">
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-full ${color} text-white flex items-center justify-center font-bold text-xs`}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <span className={`font-bold ${isPositive ? 'text-[#277C78]' : 'text-[#201F24]'}`}>
        {amount}
      </span>
    </div>
  );
}

function BudgetItem({ label, amount, color }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-1 h-10 rounded-full ${color}`}></div>
      <div className="flex-1">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-bold">{amount}</p>
      </div>
    </div>
  );
}

function BillItem({ label, amount, color, bg }) {
  return (
    <div className={`flex justify-between items-center p-4 rounded-lg border-l-4 ${color} ${bg}`}>
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-bold">{amount}</span>
    </div>
  );
}