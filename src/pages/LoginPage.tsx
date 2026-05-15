import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    console.log('Logging in with:', email);
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full glass p-8 md:p-12 rounded-[2rem] ambient-shadow border border-white"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl mb-2">Welcome Back</h1>
          <p className="text-on-surface-variant">Continue your journey to clarity.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold ml-2 text-on-surface-variant">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="university@email.edu"
                className="w-full bg-brand-beige border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-blue transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold ml-2 text-on-surface-variant">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-brand-beige border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-blue transition-all"
                required
              />
            </div>
            <div className="text-right">
              <button type="button" className="text-xs font-bold text-brand-blue hover:underline">Forgot password?</button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-blue text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:scale-[1.02] transition-all"
          >
            Log In
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-surface-dim" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-brand-beige text-on-surface-variant font-bold uppercase tracking-widest">or continue with</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-white py-3 rounded-full border border-surface-dim hover:bg-surface-container transition-colors">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            <span className="text-sm font-bold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-white py-3 rounded-full border border-surface-dim hover:bg-surface-container transition-colors">
            <Github className="w-4 h-4" />
            <span className="text-sm font-bold">GitHub</span>
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-on-surface-variant">
          Don't have an account?{' '}
          <Link to="/get-started" className="text-brand-blue font-bold hover:underline">Sign up for free</Link>
        </p>
      </motion.div>
    </div>
  );
}
