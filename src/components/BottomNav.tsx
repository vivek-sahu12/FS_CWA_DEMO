import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Home,
  Compass,
  GraduationCap,
  Image as ImageIcon,
  MoreHorizontal,
  Users,
  BookOpen,
  DollarSign,
  Bell,
  PhoneCall,
  Calendar,
  Briefcase,
  X,
  FileDown,
  Sparkles,
} from 'lucide-react';

interface BottomNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenVirtualTour: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPage,
  onNavigate,
  onOpenVirtualTour,
}) => {
  const [moreSheetOpen, setMoreSheetOpen] = useState(false);

  const mainTabs: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <Compass className="w-5 h-5" /> },
    { id: 'admissions', label: 'Admissions', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-5 h-5" /> },
  ];

  const moreItems: { id: PageId; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'leadership',
      label: 'Leadership & Faculty',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      desc: 'Meet our Chairman, Director & Faculty',
    },
    {
      id: 'academics',
      label: 'Academics & Streams',
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      desc: 'Nursery to 12th curriculum & pedagogy',
    },
    {
      id: 'fees',
      label: 'Fee Structure',
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      desc: 'Transparent fees & scholarship details',
    },
    {
      id: 'notices',
      label: 'Notices & Circulars',
      icon: <Bell className="w-5 h-5 text-amber-600" />,
      desc: 'Latest announcements & exam dates',
    },
    {
      id: 'events',
      label: 'School Events & Calendar',
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
      desc: 'Upcoming functions, sports & holidays',
    },
    {
      id: 'contact',
      label: 'Campus & Contact',
      icon: <PhoneCall className="w-5 h-5 text-cyan-600" />,
      desc: 'Location map, visiting hours & phone',
    },
    {
      id: 'downloads',
      label: 'Downloads & Forms',
      icon: <FileDown className="w-5 h-5 text-rose-600" />,
      desc: 'Prospectus, syllabus & transfer forms',
    },
    {
      id: 'careers',
      label: 'Careers at First Step',
      icon: <Briefcase className="w-5 h-5 text-teal-600" />,
      desc: 'Join our award-winning teaching team',
    },
  ];

  const handleTabClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMoreSheetOpen(false);
  };

  const handleMoreItemClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMoreSheetOpen(false);
  };

  const isMoreActive = [
    'leadership',
    'academics',
    'fees',
    'notices',
    'events',
    'careers',
    'alumni',
    'contact',
    'downloads',
  ].includes(currentPage);

  return (
    <>
      {/* Floating Bottom Bar for Mobile & Tablet */}
      <nav
        className="fixed bottom-3 left-4 right-4 z-40 max-w-lg mx-auto sm:bottom-4 transition-all duration-300"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl px-2 py-1.5 flex items-center justify-around">
          {mainTabs.map((tab) => {
            const isActive = currentPage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[46px] rounded-2xl transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'text-blue-600 font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div
                  className={`relative p-1 rounded-xl transition-colors duration-200 ${
                    isActive ? 'bg-blue-50 text-blue-700' : ''
                  }`}
                >
                  {tab.icon}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  )}
                </div>
                <span
                  className={`text-[10px] tracking-tight mt-0.5 leading-none ${
                    isActive ? 'font-bold text-blue-700' : 'font-medium'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}

          {/* More button */}
          <button
            onClick={() => setMoreSheetOpen(true)}
            className={`relative flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[46px] rounded-2xl transition-all duration-200 active:scale-95 ${
              isMoreActive
                ? 'text-blue-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            aria-label="More navigation options"
          >
            <div
              className={`relative p-1 rounded-xl transition-colors duration-200 ${
                isMoreActive ? 'bg-blue-50 text-blue-700' : ''
              }`}
            >
              <MoreHorizontal className="w-5 h-5" />
              {isMoreActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full" />
              )}
            </div>
            <span
              className={`text-[10px] tracking-tight mt-0.5 leading-none ${
                isMoreActive ? 'font-bold text-blue-700' : 'font-medium'
              }`}
            >
              More
            </span>
          </button>
        </div>
      </nav>

      {/* More Bottom Sheet Drawer */}
      {moreSheetOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMoreSheetOpen(false)}
          />

          <div className="relative w-full max-w-lg mx-auto bg-white rounded-t-3xl shadow-2xl p-5 z-10 max-h-[82vh] flex flex-col animate-in slide-in-from-bottom duration-300">
            {/* Grab handle */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  School Explorer
                </h3>
                <p className="text-xs text-slate-500">
                  First Step Higher Secondary School, Chhindwara
                </p>
              </div>
              <button
                onClick={() => setMoreSheetOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 min-h-[44px] min-w-[44px]"
                aria-label="Close sheet"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Virtual Tour Banner inside sheet */}
            <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                </div>
                <div>
                  <div className="text-xs font-bold">Interactive Campus Tour</div>
                  <div className="text-[10px] text-blue-100">Explore classrooms, labs & playground</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMoreSheetOpen(false);
                  onOpenVirtualTour();
                }}
                className="px-3 py-1.5 text-xs font-bold bg-yellow-400 text-slate-950 hover:bg-yellow-300 rounded-lg whitespace-nowrap min-h-[40px] flex items-center"
              >
                Start Tour
              </button>
            </div>

            {/* Scrollable list of more pages */}
            <div className="mt-3 overflow-y-auto space-y-1 flex-1 pr-1 pb-4">
              {moreItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMoreItemClick(item.id)}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 active:bg-blue-50 text-left transition-colors min-h-[52px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {item.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
