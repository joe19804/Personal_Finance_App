
interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <div onClick={onClick} className={`flex items-center gap-4 px-8 py-4 cursor-pointer transition-all ${active
      ? 'bg-[#F8F4F0] text-[#201F24] border-l-4 border-[#277C78] rounded-r-xl font-bold'
      : 'text-gray-400 hover:text-white border-l-4 border-transparent'
      }`}>
      <Icon size={20} className={`transition-colors ${active ? 'text-[#277C78]' : ''
        }`} />
      <span className="material-symbols-outlined" />
      <span className="text-base">{label}</span>
    </div>
  );
}