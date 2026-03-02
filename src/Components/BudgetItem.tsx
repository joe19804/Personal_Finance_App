export default function BudgetItem({ label, amount, color }) {
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