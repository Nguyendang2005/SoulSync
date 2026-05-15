import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-brand-blue font-sans">
          SoulSync
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', path: '/' },
            { label: 'Assessment', path: '/assessment' },
            { label: 'Resources', path: '/resources' },
            { label: 'Support', path: '/support' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                location.pathname === item.path ? "text-brand-blue" : "text-on-surface-variant"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeTab"
                  className="h-0.5 bg-brand-blue mt-0.5"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="text-sm font-semibold text-on-surface-variant hover:text-brand-blue transition-colors px-4"
          >
            Log In
          </Link>
          <Link
            to="/get-started"
            className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
