import React, { useState } from 'react';
import { SchoolLogo } from './SchoolLogo';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import {
  Menu,
  X,
  Phone,
  GraduationCap,
  Calendar,
  FileText,
  HelpCircle,
  ChevronRight,
  BookOpen,
  Award,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenVirtualTour: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenVirtualTour,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'academics', label: 'Academics' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-3">
          {/* Zone 1: Brand & Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 -ml-1 transition-transform active:scale-[0.98]"
            aria-label="Go to First Step School Home"
          >
            <SchoolLogo size="sm" withShadow className="transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[15px] sm:text-lg leading-tight text-[#0F1E36] tracking-tight group-hover:text-blue-700 transition-colors">
                First Step
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <span>H.S. School</span>
                <span className="text-yellow-500">★</span>
                <span>Chhindwara</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/90 font-bold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick('admissions')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap min-h-[44px]"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply 2026-27</span>
            </button>

            <a
              href={`tel:${SCHOOL_INFO.mobile}`}
              className="inline-flex lg:hidden items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 min-h-[44px] min-w-[44px] active:scale-95 transition-all"
              aria-label="Call school"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex lg:hidden items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 min-h-[44px] min-w-[44px] active:scale-95 transition-all"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-2.5">
                <SchoolLogo size="sm" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 leading-tight">
                    First Step School
                  </h3>
                  <p className="text-[10px] text-blue-700 font-semibold font-motto">
                    विद्या प्रथमो चरण:
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200/70 text-slate-700 hover:bg-slate-200 min-h-[44px] min-w-[44px]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                Main Menu
              </div>
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-sm font-semibold transition-all min-h-[46px] ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}

              <div className="pt-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                  School Services
                </div>
                <div className="space-y-1 mt-1">
                  <button
                    onClick={() => {
                      onOpenVirtualTour();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 min-h-[44px]"
                  >
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>360° Virtual Campus Tour</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('fees')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 min-h-[44px]"
                  >
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Fee Structure & Guidelines</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('notices')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 min-h-[44px]"
                  >
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>Notice Board & Circulars</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('downloads')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 min-h-[44px]"
                  >
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span>Prospectus & Syllabus Downloads</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-2">
              <button
                onClick={() => handleNavClick('admissions')}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm text-center shadow-md active:scale-95 transition-all min-h-[46px] flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for Admission</span>
              </button>
              <div className="text-center text-[11px] text-slate-500 pt-1">
                Estd. 1992 • Chhindwara (M.P.)
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
