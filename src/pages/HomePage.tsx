import React, { useState, useEffect } from 'react';
import { SchoolLogo } from '../components/SchoolLogo';
import {
  SCHOOL_INFO,
  STATS,
  FACILITIES,
  ACHIEVEMENTS,
  TESTIMONIALS,
  LEADERS,
} from '../data/schoolData';
import { PageId } from '../types';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Compass,
  Trophy,
  Phone,
  BookOpen,
  MonitorPlay,
  Atom,
  Bus,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenVirtualTour: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenVirtualTour,
}) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const principal = LEADERS.find((l) => l.id === 'principal') || LEADERS[2];

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'MonitorPlay':
        return <MonitorPlay className="w-6 h-6 text-blue-600" />;
      case 'Atom':
        return <Atom className="w-6 h-6 text-cyan-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-emerald-600" />;
      case 'Bus':
        return <Bus className="w-6 h-6 text-rose-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-purple-600" />;
      default:
        return <Award className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFD] to-[#FFFFFF] overflow-hidden">
        {/* Animated Background Blobs & Floating Shapes */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-300/25 via-yellow-200/20 to-sky-300/25 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Playful Academic Shapes */}
        <div className="hidden sm:block absolute top-12 left-10 text-blue-400/40 animate-float-slow pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
          </svg>
        </div>
        <div className="hidden sm:block absolute top-28 right-12 text-yellow-500/35 animate-float-reverse pointer-events-none">
          <div className="w-10 h-10 rounded-full border-4 border-yellow-400/40 border-dashed" />
        </div>
        <div className="hidden lg:block absolute bottom-20 left-20 text-rose-400/30 animate-float-reverse pointer-events-none">
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="hidden lg:block absolute bottom-24 right-24 text-emerald-400/40 animate-float-slow pointer-events-none">
          <GraduationCap className="w-9 h-9" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Top Pill / Motto Lockup */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/50 shadow-sm mb-5 text-[#854D0E] font-medium text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
            <span className="font-motto font-bold text-sm sm:text-base text-yellow-900 tracking-wide">
              विद्या प्रथमो चरण:
            </span>
            <span className="text-yellow-600/70 hidden xs:inline">|</span>
            <span className="text-[11px] sm:text-xs text-yellow-900/80 font-semibold hidden xs:inline">
              Estd. 1992
            </span>
          </div>

          {/* Large School Logo Display with Ambient Glow */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="relative group cursor-pointer" onClick={() => onNavigate('about')}>
              <div className="absolute -inset-3 rounded-3xl bg-yellow-400/25 blur-lg group-hover:bg-yellow-400/40 transition-all duration-300" />
              <SchoolLogo
                size="xl"
                withShadow
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1E36] font-heading leading-[1.15] mb-4 text-balance">
            Where Young Minds Take Their{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              First Step
            </span>{' '}
            Toward Greatness
          </h1>

          {/* Subheading */}
          <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Chhindwara’s trusted higher secondary institution from Nursery to 12th.
            Cultivating academic rigor, ethical values, and 21st-century leadership for over 34 years.
          </p>

          {/* Two Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            <button
              onClick={() => onNavigate('admissions')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 active:scale-95 min-h-[48px]"
            >
              <GraduationCap className="w-5 h-5 text-yellow-300" />
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <button
              onClick={onOpenVirtualTour}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 shadow-sm hover:shadow transition-all duration-200 active:scale-95 min-h-[48px]"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>Take a Virtual Tour</span>
            </button>
          </div>

          {/* Key Assurance Badges */}
          <div className="mt-10 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Nursery to 12th (All Streams)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Smart Digital Classrooms</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>GPS Transport Fleet</span>
            </span>
          </div>
        </div>
      </section>

      {/* ----------------- STATS STRIP ----------------- */}
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-white border border-slate-100 text-center hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0F1E36] tracking-tight group-hover:text-blue-600 transition-colors tabular-nums">
                  {stat.value}
                  <span className="text-yellow-500">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- WELCOME & ABOUT PREVIEW ----------------- */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F8FAFD]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Card / Crest Feature */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-6 sm:p-8 text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                    <SchoolLogo size="lg" />
                  </div>
                  <span className="font-motto text-yellow-300 text-lg font-bold mb-1">
                    विद्या प्रथमो चरण:
                  </span>
                  <h3 className="text-xl font-bold font-heading">
                    First Step Higher Secondary School
                  </h3>
                  <p className="text-xs text-blue-200 mt-1 mb-6">
                    Chhindwara, Madhya Pradesh • Established 1992
                  </p>

                  <div className="w-full bg-white/10 rounded-2xl p-4 text-left border border-white/15 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-yellow-300">
                      Why Families Choose First Step
                    </div>
                    <div className="text-xs text-blue-50 leading-relaxed">
                      "Education that balances academic mastery with moral values, ensuring every student steps into the future with courage and integrity."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Story */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                <span>Our Heritage</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1E36] font-heading tracking-tight text-balance">
                34 Years of Inspiring Young Minds in Chhindwara
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in 1992 with an initial batch of 45 students, First Step Higher Secondary School has blossomed into one of Chhindwara’s pre-eminent centers of learning. Over three decades, we have remained true to our founding vision: providing world-class holistic education accessible to every deserving child.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From interactive kindergarten playrooms to senior secondary science laboratories and state-of-the-art sports facilities, our campus is designed to foster curiosity, character, and lifelong confidence.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="text-blue-600 font-bold text-sm">Holistic Pedagogy</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Academics, Arts, STEM & Athletics integrated seamlessly.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="text-blue-600 font-bold text-sm">Personal Attention</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Low student-to-teacher ratio ensuring no child is left behind.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 group"
                >
                  <span>Read our full story and milestones</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- HIGHLIGHTS & FACILITIES ----------------- */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Campus Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
              World-Class Facilities for Modern Learners
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every corner of our Chhindwara campus is purpose-built to inspire curiosity, safety, and active learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="p-6 rounded-3xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getFacilityIcon(facility.icon)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F1E36] font-heading mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenVirtualTour}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs sm:text-sm transition-colors min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Take a 360° Walkthrough of our Campus</span>
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- PRINCIPAL'S MESSAGE PREVIEW ----------------- */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#F5F9FF] to-[#EBF2FC]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-blue-100/60 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Principal Avatar / Badge */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex flex-col items-center justify-center shadow-md p-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1">
                    <GraduationCap className="w-6 h-6 text-yellow-300" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-300">
                    Principal
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  <span>Leadership Voice</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F1E36]">
                  "Every child carries the seed of greatness."
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  "{principal.message}"
                </p>

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-bold text-sm text-slate-900 font-heading">
                      {principal.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {principal.role} • {principal.qualification}
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('leadership')}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 self-center sm:self-auto"
                  >
                    Meet All Leadership & Faculty →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- ACHIEVEMENTS & RESULTS ----------------- */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-yellow-600" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
              Academic Distinctions & Honours
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Consistently ranking among the highest achieving schools in the district and region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#F8FAFD] to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-extrabold font-heading text-blue-700 mb-1 tabular-nums">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- TESTIMONIALS SLIDER ----------------- */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F8FAFD]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Quote className="w-3.5 h-3.5" />
              <span>Voices of Trust</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
              What Parents & Alumni Say
            </h2>
          </div>

          {/* Testimonial Active Card */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 transition-all duration-300 min-h-[220px] flex flex-col justify-between">
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                "{TESTIMONIALS[activeTestimonialIdx].content}"
              </p>
            </div>

            {/* Reviewer Details */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-slate-900 font-heading">
                  {TESTIMONIALS[activeTestimonialIdx].name}
                </div>
                <div className="text-xs text-slate-500">
                  {TESTIMONIALS[activeTestimonialIdx].relation} •{' '}
                  <span className="text-blue-600 font-medium">
                    {TESTIMONIALS[activeTestimonialIdx].batchOrClass}
                  </span>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    setActiveTestimonialIdx(
                      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                    )
                  }
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
                  }
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  idx === activeTestimonialIdx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Jump to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- ADMISSIONS OPEN BANNER ----------------- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-left">
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="max-w-xl space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admissions Open 2026-27</span>
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                  Secure Your Child's Bright Future at First Step
                </h2>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Limited seats available from Nursery to Grade 12th. Experience a caring campus, individual mentorship, and holistic excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-sm shadow-md active:scale-95 transition-all min-h-[46px] flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply Now</span>
                </button>

                <a
                  href={`tel:${SCHOOL_INFO.mobile}`}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 active:scale-95 transition-all min-h-[46px] flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Admission Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
