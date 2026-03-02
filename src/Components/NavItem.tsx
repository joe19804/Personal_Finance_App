interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

export default function NavItem({ icon, label, active }: NavItemProps) {
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