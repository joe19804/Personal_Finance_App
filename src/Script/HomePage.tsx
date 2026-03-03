import { ChevronsLeft } from "lucide-react";
import { useState } from "react";
import BudgetsIcon from "../assets/images/icon-nav-budgets.svg?react";
import OverviewIcon from "../assets/images/icon-nav-overview.svg?react";
import PotsIcon from "../assets/images/icon-nav-pots.svg?react";
import RecurringBillsIcon from "../assets/images/icon-nav-recurring-bills.svg?react";
import TransactionIcon from "../assets/images/icon-nav-transaction.svg?react";
import NavItem from "../Components/NavItem";
import BudgetsPage from "./BudgetsPage";
import OverviewPage from "./OverviewPage";
import PotsPage from "./PotsPage";
import RecurringBillsPage from "./RecurringBillsPage";
import TransactionPage from "./TransactionPage";


export default function HomePage() {
  const [active, setActive] = useState<number>(0);
  const tabContent: { id: string, label: string, icon: React.FC<React.SVGProps<SVGSVGElement>>, content: React.ReactNode; }[] = [
    { id: 'Overview', label: 'Overview', icon: OverviewIcon, content: <OverviewPage /> },
    { id: 'Transaction', label: 'Transaction', icon: TransactionIcon, content: <TransactionPage /> },
    { id: 'Budgets', label: 'Budgets', icon: BudgetsIcon, content: <BudgetsPage /> },
    { id: 'Pots', label: 'Pots', icon: PotsIcon, content: <PotsPage /> },
    { id: 'RecurringBills', label: 'Recurring Bills', icon: RecurringBillsIcon, content: <RecurringBillsPage /> }];

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