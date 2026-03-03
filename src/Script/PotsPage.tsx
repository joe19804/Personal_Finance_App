import PotCard from "../Components/PotCard";
import type { Pot } from "../type/Pots";
export default function PotsPage() {
  // 模擬資料
  const mockPots: Pot[] = [
    { id: '1', name: 'Savings', theme: 'savings', totalSaved: 159.00, target: 2000 },
    { id: '2', name: 'Concert Ticket', theme: 'concert', totalSaved: 110.00, target: 150 },
    { id: '3', name: 'Christmas Gift', theme: 'gift', totalSaved: 40.00, target: 150 },
    { id: '4', name: 'New Laptop', theme: 'laptop', totalSaved: 10.00, target: 1000 },
    { id: '5', name: 'Holiday to Japan', theme: 'holiday', totalSaved: 531.00, target: 1440 },
  ];
  return (
    <>
      {/* Header 區塊 */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pots</h1>
        <button className="bg-gray-900 text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
          + Add New Pot
        </button>
      </div>

      {/* 網格列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockPots.map(pot => (
          <PotCard key={pot.id} pot={pot} />
        ))}
      </div>
    </>
  );
}