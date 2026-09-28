/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { VirtualTourModal } from './components/VirtualTourModal';
import { ComingSoonPage } from './components/ComingSoonPage';

import { HomePage } from './pages/HomePage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  // Smooth scroll to top on page change
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard escape listener to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVirtualTourOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // All pages except home show a Coming Soon screen
  const comingSoonPages: PageId[] = [
    'about',
    'leadership',
    'admissions',
    'gallery',
    'academics',
    'fees',
    'notices',
    'events',
    'careers',
    'alumni',
    'contact',
    'downloads',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#0F1E36] font-body selection:bg-blue-500 selection:text-white relative">
      {/* Initial Animated Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16 sm:pb-8">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          />
        )}

        {/* All non-home pages show Coming Soon */}
        {comingSoonPages.includes(currentPage) && (
          <ComingSoonPage
            pageId={currentPage}
            onNavigateHome={() => navigateTo('home')}
            onNavigateAdmissions={() => navigateTo('admissions')}
          />
        )}
      </main>

      {/* Interactive 360° Virtual Campus Tour Modal */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        onApplyClick={() => {
          setIsVirtualTourOpen(false);
          navigateTo('admissions');
        }}
      />

      {/* Floating Quick Action Buttons (Call, WhatsApp, Scroll-to-Top) */}
      <FloatingActions />

      {/* Floating Mobile Bottom Navigation Bar */}
      <BottomNav
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      {/* School Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />
    </div>
  );
}
