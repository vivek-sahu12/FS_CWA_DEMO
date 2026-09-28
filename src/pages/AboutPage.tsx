import React from 'react';
import { SchoolLogo } from '../components/SchoolLogo';
import {
  MILESTONES,
  CORE_VALUES,
  FACILITIES,
  SCHOOL_INFO,
} from '../data/schoolData';
import { PageId } from '../types';
import {
  Compass,
  Sparkles,
  Award,
  Eye,
  Target,
  GraduationCap,
  HeartHandshake,
  Flame,
  CheckCircle2,
  Calendar,
  Building,
} from 'lucide-react';

interface AboutPageProps {
  onNavigateAdmissions: () => void;
  onOpenVirtualTour: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateAdmissions,
  onOpenVirtualTour,
}) => {
  const getCoreValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto space-y-14 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-blue-600" />
          <span>About First Step</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
          Nurturing Potential, Shaping Character Since 1992
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Founded in Chhindwara, Madhya Pradesh with a passionate dream to provide modern, value-based education that prepares young learners for life.
        </p>
      </div>

      {/* The Founding Story with School Crest */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F0F6FF] to-white rounded-2xl border border-blue-50 text-center">
          <SchoolLogo size="lg" withShadow className="mb-3" />
          <div className="font-motto text-blue-700 font-bold text-base">
            विद्या प्रथमो चरण:
          </div>
          <div className="text-xs text-slate-500 mt-1">
            "Knowledge is the First Step"
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/80 w-full text-center">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Affiliated & Recognized
            </span>
            <div className="text-xs text-slate-600 font-medium mt-0.5">
              {SCHOOL_INFO.affiliation}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            Our Journey of Over Three Decades
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            In July 1992, First Step Higher Secondary School began with modest classrooms and 45 curious minds. The founders recognized that Chhindwara possessed tremendous raw talent waiting for an educational institution that blended contemporary scientific temperament with rich Indian ethos.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Through steadfast community support, dedicated mentors, and continuous infrastructure upgrades, First Step grew steadily from a primary school to a distinguished higher secondary institution. Today, our campus is home to more than 2,450 students from kindergarten to 12th standard, guided by over 95 seasoned educators.
          </p>
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 font-medium leading-relaxed">
              <strong>Our Pledge:</strong> To cultivate confident, morally sound, and intellectually agile students who view challenges as stepping stones to excellence.
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <Eye className="w-6 h-6 text-yellow-300" />
          </div>
          <h3 className="text-xl font-bold font-heading text-white mb-2">Our Vision</h3>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            To emerge as a premier center of holistic schooling in Central India, where every learner is empowered with self-discipline, critical inquiry, digital competency, and genuine empathy to serve society with pride.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-orange-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-yellow-200" />
          </div>
          <h3 className="text-xl font-bold font-heading text-white mb-2">Our Mission</h3>
          <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
            To create an inclusive, fearless learning environment that fosters academic excellence, hands-on scientific curiosity, athletic prowess, and strong civic responsibility through personalized teacher mentorship.
          </p>
        </div>
      </section>

      {/* Core Values as Cards */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Pillars of Our Culture
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E36] font-heading">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${val.color}`}>
                  {getCoreValueIcon(val.icon)}
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1.5">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animated Milestone Timeline */}
      <section className="space-y-6 bg-slate-50/70 p-6 sm:p-10 rounded-3xl border border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5 text-yellow-700" />
            <span>Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E36] font-heading">
            Key Chapters in Our 34-Year History
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {MILESTONES.map((mile, idx) => (
            <div key={idx} className="relative group">
              {/* Dot on timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform" />

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold font-mono tabular-nums">
                    {mile.year}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    {mile.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-heading">
                  {mile.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {mile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus & Facilities Callout */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-yellow-300 text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Discover The Campus</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Experience First Step in 360° or In-Person
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 max-w-lg">
            Take a digital tour of our smart classrooms, science labs, and sports facilities, or apply for your child's admission today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
          <button
            onClick={onOpenVirtualTour}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-sm transition-all min-h-[44px]"
          >
            Take 360° Tour
          </button>
          <button
            onClick={onNavigateAdmissions}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-yellow-400 text-slate-950 hover:bg-yellow-300 font-bold text-xs sm:text-sm shadow-md transition-all min-h-[44px]"
          >
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
};
