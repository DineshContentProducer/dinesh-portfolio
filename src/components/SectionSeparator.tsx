import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionSeparatorProps {
  label?: string;
  onClick?: () => void;
  targetId?: string;
  ariaLabel?: string;
  showConnectorBeam?: boolean;
}

export function SectionSeparator({
  label,
  onClick,
  targetId,
  ariaLabel,
  showConnectorBeam = true,
}: SectionSeparatorProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (targetId) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 flex flex-col items-center justify-center select-none overflow-clip">
      {/* Ambient background radial glow flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-10 sm:h-16 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.22)_0%,rgba(185,28,28,0.08)_45%,transparent_75%)] blur-2xl pointer-events-none" />

      {/* The Animated Horizontal Separator Track */}
      <div className="relative w-full flex items-center justify-center">
        {/* Base fine horizontal line fading out at edges */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent relative overflow-hidden">
          {/* Animated crimson beam sweeping across the line */}
          <div className="absolute top-0 w-44 sm:w-72 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer-slide blur-[0.5px]" />
          {/* Second subtle counter-accent glow */}
          <div className="w-full h-full bg-gradient-to-r from-transparent via-red-600/30 to-transparent animate-separator-pulse" />
        </div>

        {/* Central interactive pill or decorative diamond */}
        {label ? (
          <div className="absolute z-10 flex items-center justify-center">
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full bg-neutral-950/90 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-white/20 hover:border-red-500/50 text-xs font-semibold tracking-wide transition-all duration-300 group cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)] hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md"
              aria-label={ariaLabel || label}
            >
              <span>{label}</span>
              <div className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        ) : (
          /* Sleek Minimal Optical Flare Diamond Node */
          <div className="absolute z-10 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-red-600/20 blur-sm animate-pulse" />
              <div className="absolute w-2 h-2 rotate-45 bg-red-500 ring-4 ring-[#070707] shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
            </div>
          </div>
        )}
      </div>

      {/* Refined vertical downward light spine */}
      {showConnectorBeam && (
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-red-600/60 via-red-500/20 to-transparent mt-3 sm:mt-4 pointer-events-none" />
      )}
    </div>
  );
}
