import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Building2,
  MonitorPlay,
  Atom,
  BookOpen,
  Trophy,
  Users,
} from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyClick: () => void;
}

interface TourStop {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  gradient: string;
  locationDetails: string;
}

const TOUR_STOPS: TourStop[] = [
  {
    id: 'stop-1',
    title: 'Main Academic Pavilion & Green Campus',
    category: 'Welcome & Entrance',
    description:
      'Sprawling over lush manicured grounds in Chhindwara, our main entrance features a grand portico, morning assembly square, and administrative reception designed to welcome eager learners each morning.',
    icon: <Building2 className="w-8 h-8 text-blue-300" />,
    highlights: [
      'Eco-friendly solar powered infrastructure',
      'Wide ventilated corridors and safe stairways',
      'Dedicated pick-up and drop-off bus bays',
    ],
    gradient: 'from-blue-700 via-indigo-800 to-slate-900',
    locationDetails: 'Ground Floor, East Wing Entrance',
  },
  {
    id: 'stop-2',
    title: 'Interactive Smart Classrooms',
    category: 'Digital Pedagogy',
    description:
      'Every classroom from Nursery to Grade 12 is outfitted with interactive touch panels, high-fidelity sound, and curated NCERT/CBSE digital curriculum animations bringing abstract concepts alive.',
    icon: <MonitorPlay className="w-8 h-8 text-sky-300" />,
    highlights: [
      'Ergonomic child-safe furniture & natural airflow',
      '3D simulations for Science and Mathematics',
      'Maximum 30 students per section for focused attention',
    ],
    gradient: 'from-sky-700 via-blue-800 to-slate-900',
    locationDetails: 'Wing A & B, Floors 1 & 2',
  },
  {
    id: 'stop-3',
    title: 'Integrated Science & Robotics Hub',
    category: 'Experimental STEM',
    description:
      'Where curiosity meets discovery. Independent state-of-the-art workstations for Physics, Chemistry, and Biology experiments, alongside an Atal Tinkering robotics table for automated prototypes.',
    icon: <Atom className="w-8 h-8 text-cyan-300" />,
    highlights: [
      'Digital microscopes and sensor-based apparatus',
      'Complete safety showers and eye-wash bays',
      'Arduino and robotics development kits',
    ],
    gradient: 'from-cyan-800 via-teal-900 to-slate-900',
    locationDetails: 'Science Block, 2nd Floor',
  },
  {
    id: 'stop-4',
    title: 'Central Knowledge Library',
    category: 'Research & Reading',
    description:
      'A quiet sanctuary housing more than 15,000 academic titles, competitive exam primers (JEE, NEET, Olympiads), international encyclopedias, and a dedicated digital e-library corner.',
    icon: <BookOpen className="w-8 h-8 text-amber-300" />,
    highlights: [
      'Quiet acoustic reading bays and study pods',
      'Daily national newspapers and educational journals',
      'Automated RFID book lending & catalog system',
    ],
    gradient: 'from-amber-700 via-stone-800 to-slate-900',
    locationDetails: 'Central Pavilion, 1st Floor',
  },
  {
    id: 'stop-5',
    title: 'Sports Complex & Athletic Grounds',
    category: 'Physical Education',
    description:
      'Spacious athletic arena featuring a 200m track, synthetic basketball court, turf cricket training nets, badminton courts, and indoor table tennis stations coached by certified NIS instructors.',
    icon: <Trophy className="w-8 h-8 text-emerald-300" />,
    highlights: [
      'Year-round coaching in football, cricket & basketball',
      'Inter-house athletic meet venue',
      'Yoga and martial arts morning training program',
    ],
    gradient: 'from-emerald-800 via-teal-900 to-slate-900',
    locationDetails: 'South Campus Sports Arena',
  },
  {
    id: 'stop-6',
    title: 'Multipurpose Cultural Auditorium',
    category: 'Arts & Performing Hall',
    description:
      'Fully air-conditioned 600-seater auditorium equipped with acoustic audio engineering, stage lighting, green rooms, and AV projection for debates, theater, dance, and annual celebrations.',
    icon: <Users className="w-8 h-8 text-rose-300" />,
    highlights: [
      'Host to Annual Day "Tarang" and Youth Parliaments',
      'High-resolution digital backdrop screens',
      'Professional sound recording and stage gear',
    ],
    gradient: 'from-rose-800 via-purple-900 to-slate-900',
    locationDetails: 'Silver Jubilee Block, 3rd Floor',
  },
];

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onApplyClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const currentStop = TOUR_STOPS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TOUR_STOPS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TOUR_STOPS.length) % TOUR_STOPS.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Campus Virtual Tour"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 text-[11px] font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>360° Virtual Walkthrough</span>
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Stop {currentIndex + 1} of {TOUR_STOPS.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Close tour modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Showcase Stage */}
        <div
          className={`relative p-6 sm:p-8 bg-gradient-to-br ${currentStop.gradient} text-white flex flex-col justify-between min-h-[220px] sm:min-h-[260px] transition-all duration-300`}
        >
          {/* Background ambient pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Badge & Location */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold text-white/90">
              {currentStop.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-white/80 font-medium">
              <MapPin className="w-3.5 h-3.5 text-yellow-300" />
              <span>{currentStop.locationDetails}</span>
            </span>
          </div>

          {/* Center Graphic & Title */}
          <div className="relative z-10 my-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner shrink-0">
              {currentStop.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight leading-tight">
                {currentStop.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 mt-1 line-clamp-2">
                First Step Higher Secondary School, Chhindwara Campus
              </p>
            </div>
          </div>

          {/* Navigation Arrows on Stage */}
          <div className="relative z-10 flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5">
              {TOUR_STOPS.map((stop, idx) => (
                <button
                  key={stop.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-7 bg-yellow-400'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Jump to stop ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Previous stop"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Next stop"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content & Highlights Details */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentStop.description}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Key Campus Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {currentStop.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Want to see the campus in person? Walk-in campus tours open Mon-Sat.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onApplyClick();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all min-h-[44px] flex items-center justify-center"
            >
              Apply for Admission
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
