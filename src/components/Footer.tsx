import React from 'react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageId } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Sparkles,
  Heart,
  ArrowUp,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenVirtualTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenVirtualTour,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1728] text-slate-300 pt-14 pb-28 sm:pb-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Crest & School Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <SchoolLogo size="sm" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-tight">
                  First Step Higher Secondary School
                </h3>
                <p className="text-xs text-yellow-300 font-bold font-motto">
                  विद्या प्रथमो चरण:
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering holistic education in Chhindwara (M.P.) since 1992.
              Nurturing character, academic excellence, scientific mindset, and lifelong ethics from Nursery to 12th Grade.
            </p>

            <div className="pt-1 text-[11px] text-slate-400 space-y-1">
              <div>
                <strong className="text-slate-300">Affiliation:</strong>{' '}
                {SCHOOL_INFO.affiliation}
              </div>
              <div>
                <strong className="text-slate-300">Registration Code:</strong>{' '}
                {SCHOOL_INFO.affiliationNo}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About School
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-white transition-colors"
                >
                  Leadership & Faculty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-white transition-colors"
                >
                  Admissions 2026-27
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Campus Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVirtualTour}
                  className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>360° Virtual Tour</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Portals */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              School Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors"
                >
                  Academics & Streams
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fees')}
                  className="hover:text-white transition-colors"
                >
                  Fee Structure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('notices')}
                  className="hover:text-white transition-colors"
                >
                  Notice Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors"
                >
                  Events Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('downloads')}
                  className="hover:text-white transition-colors"
                >
                  Downloads & Forms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-white transition-colors"
                >
                  Faculty Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              Campus Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.mobile}`} className="hover:text-white">
                  {SCHOOL_INFO.mobile} / {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Admission Inquiry 2026-27</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-semibold text-slate-400">
              Demo Website — Designed for First Step Higher Secondary School
            </div>
            <div className="text-[11px] text-slate-600">
              © {new Date().getFullYear()} First Step Higher Secondary School, Chhindwara (M.P.). All rights reserved.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors min-h-[44px]"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
