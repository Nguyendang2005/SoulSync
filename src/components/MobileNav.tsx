import React from 'react';
import { Home, Sparkles, Brain, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-brand-lavender h-20 px-6 flex items-center justify-between z-50">
      <MobileLink to="/" icon={<Home />} label="Trang chủ" />
      <MobileLink to="/relief" icon={<Sparkles />} label="Thư giãn" />
      <MobileLink to="/growth" icon={<Brain />} label="Phát triển" />
      <MobileLink to="/profile" icon={<User />} label="Hồ sơ" />
    </nav>
  );
}

function MobileLink({ to, icon, label }: { to: string, icon: React.ReactElement, label: string }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex flex-col items-center gap-1 transition-colors",
        isActive ? "text-brand-blue" : "text-on-surface-variant"
      )}
    >
      {React.cloneElement(icon, { className: "w-6 h-6" })}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </NavLink>
  );
}
