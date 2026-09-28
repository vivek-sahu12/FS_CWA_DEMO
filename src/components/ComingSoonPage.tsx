import React from 'react';
import { PageId } from '../types';
import {
  BookOpen,
  DollarSign,
  Bell,
  Calendar,
  Briefcase,
  Users2,
  FileDown,
  ArrowLeft,
  Sparkles,
  Info,
  Award,
  GraduationCap,
  Image,
  Phone,
  Clock,
} from 'lucide-react';

interface ComingSoonPageProps {
  pageId: PageId;
  onNavigateHome: () => void;
  onNavigateAdmissions: () => void;
}

const PAGE_META: Record<
  string,
  {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    accentColor: string;
  }
> = {
  about: {
    title: 'About Us',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Info className="w-10 h-10 text-blue-600" />,
    color: 'from-blue-500/20 to-indigo-500/10',
    accentColor: 'bg-blue-100 border-blue-200',
  },
  leadership: {
    title: 'Leadership & Faculty',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Award className="w-10 h-10 text-purple-600" />,
    color: 'from-purple-500/20 to-violet-500/10',
    accentColor: 'bg-purple-100 border-purple-200',
  },
  admissions: {
    title: 'Admissions',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <GraduationCap className="w-10 h-10 text-emerald-600" />,
    color: 'from-emerald-500/20 to-teal-500/10',
    accentColor: 'bg-emerald-100 border-emerald-200',
  },
  gallery: {
    title: 'Campus Gallery',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Image className="w-10 h-10 text-pink-600" />,
    color: 'from-pink-500/20 to-rose-500/10',
    accentColor: 'bg-pink-100 border-pink-200',
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Phone className="w-10 h-10 text-sky-600" />,
    color: 'from-sky-500/20 to-blue-500/10',
    accentColor: 'bg-sky-100 border-sky-200',
  },
  academics: {
    title: 'Academics & Curriculum',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    color: 'from-blue-500/20 to-indigo-500/10',
    accentColor: 'bg-blue-100 border-blue-200',
  },
  fees: {
    title: 'Fee Structure',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <DollarSign className="w-10 h-10 text-emerald-600" />,
    color: 'from-emerald-500/20 to-teal-500/10',
    accentColor: 'bg-emerald-100 border-emerald-200',
  },
  notices: {
    title: 'Notice Board',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Bell className="w-10 h-10 text-amber-600" />,
    color: 'from-amber-500/20 to-orange-500/10',
    accentColor: 'bg-amber-100 border-amber-200',
  },
  events: {
    title: 'Events & Calendar',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Calendar className="w-10 h-10 text-purple-600" />,
    color: 'from-purple-500/20 to-pink-500/10',
    accentColor: 'bg-purple-100 border-purple-200',
  },
  careers: {
    title: 'Careers',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Briefcase className="w-10 h-10 text-teal-600" />,
    color: 'from-teal-500/20 to-emerald-500/10',
    accentColor: 'bg-teal-100 border-teal-200',
  },
  alumni: {
    title: 'Alumni',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Users2 className="w-10 h-10 text-indigo-600" />,
    color: 'from-indigo-500/20 to-violet-500/10',
    accentColor: 'bg-indigo-100 border-indigo-200',
  },
  downloads: {
    title: 'Downloads & Forms',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <FileDown className="w-10 h-10 text-rose-600" />,
    color: 'from-rose-500/20 to-red-500/10',
    accentColor: 'bg-rose-100 border-rose-200',
  },
};

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  pageId,
  onNavigateHome,
}) => {
  const meta = PAGE_META[pageId] || {
    title: 'Coming Soon',
    subtitle: 'This section is coming soon. Stay tuned!',
    icon: <Sparkles className="w-10 h-10 text-blue-600" />,
    color: 'from-blue-500/20 to-indigo-500/10',
    accentColor: 'bg-blue-100 border-blue-200',
  };

  return (
    <div className="py-12 sm:py-24 px-4 sm:px-6 max-w-2xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-14 text-center relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div
          className={`absolute -top-28 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b ${meta.color} blur-3xl pointer-events-none`}
        />

        {/* Animated Icon */}
        <div
          className={`relative mx-auto w-24 h-24 rounded-3xl ${meta.accentColor} border flex items-center justify-center shadow-sm mb-8`}
          style={{ animation: 'bounce 2s infinite' }}
        >
          {meta.icon}
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>Coming Soon</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E36] font-heading mb-4 tracking-tight">
          {meta.title}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10">
          {meta.subtitle}
        </p>

        {/* Divider */}
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-10" />

        {/* Back to Home Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all duration-200 active:scale-95 min-h-[48px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};
