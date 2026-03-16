import { useState } from "react";
import MinimizeMenuIcon from "../assets/images/icon-minimize-menu.svg?react";
import OverviewIcon from "../assets/images/icon-nav-overview.svg?react";
import PotsIcon from "../assets/images/icon-nav-pots.svg?react";
import RecurringBillsIcon from "../assets/images/icon-nav-recurring-bills.svg?react";
import TransactionIcon from "../assets/images/icon-nav-transactions.svg?react";
import NavItem from "../Components/NavItem";
import { PageType } from "../type/Index";
import OverviewPage from "./OverviewPage";
import PotsPage from "./PotsPage";
import RecurringBillsPage from "./RecurringBillsPage";
import TransactionPage from "./TransactionPage";


export default function HomePage() {
  const [active, setActive] = useState<number>(PageType.Overview);
  const tabContent: { label: string, icon: React.FC<React.SVGProps<SVGSVGElement>>, content: React.ReactNode; }[] = [
    { label: 'Overview', icon: OverviewIcon, content: <OverviewPage onNavigate={setActive} /> },
    { label: 'Transaction', icon: TransactionIcon, content: <TransactionPage /> },
    // { label: 'Budgets', icon: BudgetsIcon, content: <BudgetsPage /> },
    { label: 'Pots', icon: PotsIcon, content: <PotsPage /> },
    { label: 'Recurring Bills', icon: RecurringBillsIcon, content: <RecurringBillsPage /> }];

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
              <NavItem key={PageType[idx]} icon={tab.icon} label={tab.label} active={idx === active} onClick={() => onClickActive(idx)} />
            ))}
          </nav>
        </div>
        <div className="px-8 flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition-colors">
          {/* TODO: 按鈕變更動畫 */}
          <MinimizeMenuIcon title="Minimize Menu" className={`transition-colors ${active ? 'text-[#277C78]' : ''
            }`} />
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