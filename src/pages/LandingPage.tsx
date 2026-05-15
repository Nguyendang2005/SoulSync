import React from 'react';
import { motion } from 'motion/react';
import { Flower2, Brain, Calendar, Bolt, ShieldCheck, Lock, Quote } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function LandingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-6xl text-on-surface leading-[1.1]">
            You don't have to handle everything alone.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-[500px] leading-relaxed">
            SoulSync is a gentle, quiet space designed for university students to find mental clarity, emotional support, and the tools to navigate academic life with peace.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-brand-blue/20 hover:scale-105 transition-all">
              Start Assessment
            </button>
            <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-blue/5 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-brand-lavender/20 flex items-center justify-center p-6 md:p-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9nM0X-FXmVrlJegr_H8woR6fGFUJ24BleYWUcY8LOBUlCm82KnvcCombzsDFdRl-F_C5PyyOknbwNO8i_yj8Ohza9rGah2TAtcAzwbXdQA-PtH3n4JP5FpLUujvdKwSPKYjC6D--e4IawZew3ReiG8uWEKryt6qEyWoCNFWZinCUpds31MEalX2ZQdIfpBfM5KLX1NjzLUwN22hnlqB9UPa7IcZt0mIngKYpZ4dah5nTdfE37bRYvyvYANC4fQvFEmtvpc4nNZHop" 
              alt="Serene student by window"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-8 -left-8 glass p-5 rounded-2xl ambient-shadow flex items-center gap-4 max-w-[280px]"
          >
            <div className="bg-brand-sage p-2 rounded-full">
              <Flower2 className="w-6 h-6 text-on-tertiary-fixed-variant" />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Daily Mindset</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Focus on being present today.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Concerns Section */}
      <section className="bg-surface-container py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl">We understand the weight you carry.</h2>
            <p className="text-on-surface-variant mt-4">The university journey is rewarding, but it can also be overwhelming.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Bolt className="w-6 h-6" />}
              title="Academic Burnout"
              description="When the library feels like a second home and the fatigue becomes more than just physical tiredness."
              color="lavender"
            />
            <FeatureCard 
              icon={<Brain className="w-6 h-6" />}
              title="Quiet Overthinking"
              description="The late-night cycles of worry about grades, the future, and if you're doing enough."
              color="blue"
            />
            <FeatureCard 
              icon={<Calendar className="w-6 h-6" />}
              title="Deadline Pressure"
              description="Navigating the constant stream of submissions and the anxiety of the ticking clock."
              color="sage"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 text-center">
        <h2 className="text-3xl md:text-4xl mb-20">Four steps to a calmer you.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-start">
          <div className="hidden md:block absolute top-[23px] left-0 right-0 h-0.5 bg-brand-blue/10 -z-10" />
          <Step 
            number="1" 
            title="Test" 
            description="A non-clinical wellness check-in to see where you are." 
          />
          <Step 
            number="2" 
            title="Analysis" 
            description="We process your needs with empathy and depth." 
          />
          <Step 
            number="3" 
            title="Advice" 
            description="Receive personalized paths for immediate relief." 
          />
          <Step 
            number="4" 
            title="Resources" 
            description="Access a library of student-first mental health tools." 
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24">
        <div className="bg-[#e6deff] rounded-[2rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl text-[#1c1738]">A space built on trust.</h2>
            <p className="text-lg text-[#484266] leading-relaxed max-w-[500px]">
              SoulSync isn't here to diagnose; we're here to listen. Your data is encrypted, your identity is private, and our approach is entirely non-judgmental.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue rounded-full p-1"><ShieldCheck className="w-5 h-5 text-white" /></div>
                <span className="font-semibold text-[#1c1738]">Full Anonymity Options</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue rounded-full p-1"><Lock className="w-5 h-5 text-white" /></div>
                <span className="font-semibold text-[#1c1738]">Bank-Level Encryption</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center scale-110">
            <motion.div 
               animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 0.95, 1] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
               className="w-64 h-64 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40"
            >
              <Lock className="w-24 h-24 text-brand-blue/30" />
            </motion.div>
          </div>
          
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-sage/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-container-high py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl text-center mb-16">Voices from our campus community.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              quote="I didn't realize how much the 'always-on' culture was affecting me until I used SoulSync. It gave me permission to breathe without feeling guilty about my assignments."
              author="Alex M."
              discipline="Final Year Psychology Student"
              avatarColor="bg-[#d8cffb]"
            />
            <Testimonial 
              quote="The personalized resources are actually relevant. It's not just generic advice; it feels like someone actually knows what it's like to be a student in 2024."
              author="Jordan T."
              discipline="Sophomore Engineering Student"
              avatarColor="bg-[#bdd0bc]"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl">Start your journey toward clarity today.</h2>
          <p className="text-on-surface-variant text-lg">
            Join 5,000+ university students who have found their quiet space on SoulSync. It only takes 3 minutes to start your first check-in.
          </p>
          <div className="pt-4">
            <button className="bg-brand-blue text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-brand-blue/30 hover:scale-105 transition-all">
              Begin Assessment
            </button>
          </div>
          <p className="text-sm text-on-surface-variant font-medium">Free for all students with a .edu email address.</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  const colors = {
    lavender: "bg-brand-lavender/30 text-secondary",
    blue: "bg-brand-blue/10 text-brand-blue",
    sage: "bg-brand-sage/30 text-tertiary"
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-10 rounded-2xl ambient-shadow border border-white group h-full"
    >
      <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110", colors[color as keyof typeof colors])}>
        {icon}
      </div>
      <h3 className="text-2xl mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg border-4 border-brand-beige z-10">
        {number}
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm text-on-surface-variant max-w-[200px] leading-relaxed mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

function Testimonial({ quote, author, discipline, avatarColor }: { quote: string, author: string, discipline: string, avatarColor: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl border border-surface-dim relative ambient-shadow italic text-on-surface-variant">
      <Quote className="absolute -top-2 -left-2 w-12 h-12 text-brand-blue/10 rotate-180" />
      <p className="text-lg leading-relaxed mb-8">"{quote}"</p>
      <div className="flex items-center gap-4 non-italic">
        <div className={cn("w-12 h-12 rounded-full", avatarColor)} />
        <div>
          <p className="font-bold text-on-surface">{author}</p>
          <p className="text-sm text-on-surface-variant">{discipline}</p>
        </div>
      </div>
    </div>
  );
}
