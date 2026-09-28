import React from 'react';
import { LEADERS, FACULTY_MEMBERS } from '../data/schoolData';
import {
  Users,
  Award,
  GraduationCap,
  Sparkles,
  Quote,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

interface LeadershipPageProps {
  onNavigateAdmissions: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({
  onNavigateAdmissions,
}) => {
  return (
    <div className="py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5 text-blue-600" />
          <span>Academic Leadership & Faculty</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
          Guided by Visionaries, Mentored by Experts
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Meet the esteemed administrative leaders and dedicated subject coordinators driving academic excellence at First Step Higher Secondary School, Chhindwara.
        </p>
      </div>

      {/* Main Leadership Cards (Chairman, Director, Principal) */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
          Executive Leadership
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Avatar / Crest Container */}
                <div
                  className={`w-full h-44 rounded-2xl ${leader.avatarBg} text-white flex flex-col items-center justify-center p-4 relative overflow-hidden mb-5 shadow-inner`}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-50 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-yellow-300" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                    {leader.role}
                  </span>
                  <span className="text-[11px] text-white/80 mt-0.5">
                    {leader.experience}
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {leader.name}
                  </h3>
                  <div className="text-xs text-blue-700 font-semibold">
                    {leader.qualification}
                  </div>
                </div>

                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-blue-200 mb-1" />
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{leader.message}"
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified School Governing Board</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Senior Faculty & Wing Coordinators */}
      <section className="bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-100 space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span>Academic Wing Mentors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E36] font-heading">
            Department Heads & Senior Faculty
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Seasoned educators bringing average 15+ years of pedagogical expertise across sciences, commerce, technology, and early childhood care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FACULTY_MEMBERS.map((faculty, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-sm">
                  {faculty.name.split(' ').slice(-1)[0][0]}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate">
                    {faculty.name}
                  </h4>
                  <div className="text-xs text-blue-600 font-semibold truncate">
                    {faculty.designation}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                    {faculty.department}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 font-mono">
                    {faculty.qualification}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Ratio Strip & CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold font-heading">
            Enrich Your Child with 1:18 Teacher-Student Mentorship
          </h3>
          <p className="text-xs sm:text-sm text-blue-100">
            Admissions open for Nursery to 12th for the 2026-27 session.
          </p>
        </div>
        <button
          onClick={onNavigateAdmissions}
          className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 min-h-[44px]"
        >
          Apply for Admission
        </button>
      </section>
    </div>
  );
};
