import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Namaste! I would like to enquire about admission and curriculum at First Step Higher Secondary School, Chhindwara.'
  );

  return (
    <aside
      aria-label="Quick contact and navigation shortcuts"
      className="fixed bottom-20 right-3.5 sm:bottom-24 sm:right-6 z-30 flex flex-col items-center gap-2.5 pointer-events-auto"
    >
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-blue-700 active:scale-95 transition-all duration-200 min-h-[44px] min-w-[44px]"
          aria-label="Scroll to top of page"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${SCHOOL_INFO.mobile}`}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all duration-200 min-h-[44px] min-w-[44px]"
        aria-label="Call school reception"
        title="Call First Step School"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${SCHOOL_INFO.whatsapp.replace('+', '')}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:bg-emerald-600 active:scale-95 transition-all duration-200 min-h-[44px] min-w-[44px]"
        aria-label="Chat on WhatsApp with Admissions"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 border-2 border-white rounded-full animate-pulse" />
      </a>
    </aside>
  );
};
