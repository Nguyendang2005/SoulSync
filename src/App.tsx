/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from '@/src/components/Navbar';
import MobileNav from '@/src/components/MobileNav';
import Footer from '@/src/components/Footer';
import LandingPage from '@/src/pages/LandingPage';
import LoginPage from '@/src/pages/LoginPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/login" 
          element={
            <PageWrapper>
              <LoginPage />
            </PageWrapper>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageWrapper>
              <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
                <h1 className="text-4xl mb-4 text-brand-blue">Coming Soon</h1>
                <p className="text-on-surface-variant mb-8">We're still crafting this gentle corner of SoulSync.</p>
                <motion.a 
                  href="/" 
                  whileHover={{ scale: 1.05 }}
                  className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold"
                >
                  Back to Sanctuary
                </motion.a>
              </div>
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pb-20 md:pb-0">
          <AnimatedRoutes />
        </div>
        <MobileNav />
        <Footer />
      </div>
    </Router>
  );
}
