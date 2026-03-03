export default function BillItem({ label, amount, color, bg }: { label: string, amount: string, color: string, bg: string; }) {
  return (
    <div className={`flex justify-between items-center p-4 rounded-lg border-l-4 ${color} ${bg}`}>
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-bold">{amount}</span>
    </div>
  );
}