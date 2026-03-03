import { ArrowUpDown, ChevronsLeft, DollarSign, Home, PieChart, ReceiptText } from "lucide-react";
import { useState, type JSX } from "react";
import NavItem from "../Components/NavItem";
import BudgetsPage from "./BudgetsPage";
import OverviewPage from "./OverviewPage";
import PotsPage from "./PotsPage";
import RecurringBillsPage from "./RecurringBillsPage";
import TransactionPage from "./TransactionPage";

export default function HomePage() {
  const [active, setActive] = useState<number>(0);
  const tabContent: { id: string, label: string, icon: JSX.Element, content: React.ReactNode; }[] = [
    { id: 'Overview', label: 'Overview', icon: <Home />, content: <OverviewPage /> },
    { id: 'Transaction', label: 'Transaction', icon: <ArrowUpDown />, content: <TransactionPage /> },
    { id: 'Budgets', label: 'Budgets', icon: <PieChart />, content: <BudgetsPage /> },
    { id: 'Pots', label: 'Pots', icon: <DollarSign />, content: <PotsPage /> },
    { id: 'RecurringBills', label: 'Recurring Bills', icon: <ReceiptText />, content: <RecurringBillsPage /> }];

  function onClickActive(v: number) {
    setActive(v);
  }


  return (
    <div className="flex h-screen font-sans bg-[#F8F4F0] text-[#201F24] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#201F24] text-white flex flex-col justify-between rounded-r-2xl pb-8">
        <div>
          <div className="p-8 text-2xl font-bold tracking-wider">
            finance
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            {tabContent.map((tab, idx) => (
              <NavItem key={tab.id} icon={tab.icon} label={tab.label} active={idx === active} onClick={() => onClickActive(idx)} />
            ))}
          </nav>
        </div>
        <div className="px-8 flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition-colors">
          <ChevronsLeft size={20} />
          <span className="font-medium">Minimize Menu</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
        {tabContent[active].content}
      </main>
    </div>
  );
};