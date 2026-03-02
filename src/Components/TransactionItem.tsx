export default function TransactionItem({ name, date, amount, isPositive, color }) {
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