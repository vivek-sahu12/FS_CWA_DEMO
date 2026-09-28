import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import {
  Image as ImageIcon,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Building2,
  MonitorPlay,
  Trophy,
  Atom,
  Activity,
  Cpu,
  BookOpen,
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus & Lawns' },
    { id: 'classrooms', label: 'Smart Classes & Labs' },
    { id: 'sports', label: 'Sports & Athletics' },
    { id: 'events', label: 'Events & Cultural' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIdx = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const nextIdx = (currentIdx + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIdx]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIdx = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const prevIdx = (currentIdx - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIdx]);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-10 h-10 text-white/90" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-10 h-10 text-white/90" />;
      case 'Trophy':
        return <Trophy className="w-10 h-10 text-white/90" />;
      case 'Atom':
        return <Atom className="w-10 h-10 text-white/90" />;
      case 'Activity':
        return <Activity className="w-10 h-10 text-white/90" />;
      case 'Cpu':
        return <Cpu className="w-10 h-10 text-white/90" />;
      case 'BookOpen':
        return <BookOpen className="w-10 h-10 text-white/90" />;
      default:
        return <Sparkles className="w-10 h-10 text-white/90" />;
    }
  };

  return (
    <div className="py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
          <span>Life at First Step</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1E36] font-heading tracking-tight">
          Campus Moments & Memories
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Glimpses into our vibrant campus life, academic discoveries, athletic championships, and joyous cultural milestones in Chhindwara.
        </p>
      </div>

      {/* Filter Tabs (Interactive Segmented Controls) */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 px-1 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 min-h-[44px] flex items-center ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(item)}
            className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Image Visual Stage */}
            <div
              className={`relative h-48 sm:h-52 bg-gradient-to-br ${item.gradient} p-5 flex flex-col justify-between text-white overflow-hidden`}
            >
              {/* Pattern */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/25 backdrop-blur-md">
                  {item.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-white" />
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center py-2">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner group-hover:scale-110 transition-transform">
                  {getCategoryIcon(item.icon)}
                </div>
              </div>

              <div className="relative z-10 text-[10px] text-white/70 font-mono">
                Tap to inspect
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-heading mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-slate-100">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                {selectedItem.category} • First Step School
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stage */}
            <div
              className={`relative h-64 sm:h-80 bg-gradient-to-br ${selectedItem.gradient} p-8 flex flex-col items-center justify-center text-white text-center`}
            >
              <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mb-4">
                {getCategoryIcon(selectedItem.icon)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading max-w-lg">
                {selectedItem.title}
              </h3>

              {/* Prev / Next controls on Stage */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Description */}
            <div className="p-5 sm:p-6 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-bold text-slate-400">Keywords:</span>
                {selectedItem.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Lightbox Footer */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>First Step Higher Secondary School, Chhindwara (M.P.)</span>
              <button
                onClick={() => setSelectedItem(null)}
                className="font-bold text-blue-600 hover:underline min-h-[44px] flex items-center"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
