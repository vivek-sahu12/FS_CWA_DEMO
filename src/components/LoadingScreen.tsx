import React, { useEffect, useState } from 'react';
import { SchoolLogo } from './SchoolLogo';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 450);
          }, 200);
          return 100;
        }
        return prev + 15;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#0F1E36] via-[#12284C] to-[#0A1629] text-white px-6 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="Loading First Step Higher Secondary School"
    >
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-yellow-500/15 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative flex flex-col items-center max-w-sm w-full text-center">
        {/* Animated Emblem Crest */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 rounded-3xl bg-yellow-400/20 blur-xl animate-pulse" />
          <div className="relative p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <SchoolLogo size="xl" withShadow className="scale-110" />
          </div>
        </div>

        {/* Motto in Hindi */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-sm font-semibold tracking-wide mb-3 font-motto">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>विद्या प्रथमो चरण:</span>
        </div>

        {/* School Name */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 font-heading">
          First Step Higher Secondary School
        </h1>
        <p className="text-xs sm:text-sm text-blue-200/80 mb-6 font-medium">
          Chhindwara (M.P.) • Estd. 1992
        </p>

        {/* Progress bar */}
        <div className="w-48 bg-white/10 rounded-full h-2 overflow-hidden border border-white/15 p-0.5 mb-3">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-48 text-[11px] text-blue-200/70 font-mono">
          <span>Preparing campus tour</span>
          <span>{progress}%</span>
        </div>

        {/* Skip button for rapid preview */}
        <button
          onClick={handleSkip}
          className="mt-6 text-xs text-white/50 hover:text-white transition-colors underline underline-offset-4 py-1.5 px-3 min-h-[44px] flex items-center justify-center"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
};
