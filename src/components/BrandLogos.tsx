import React from 'react';

interface BrandLogoProps {
  name: string;
  className?: string;
}

export function BrandLogo({ name, className = 'w-full h-full' }: BrandLogoProps) {
  switch (name) {
    case 'Bow and Arrow':
    case 'Bow & Arrow':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Elegant curved archery recurve bow */}
          <path
            d="M6 3.5C11 6.5 13.5 9 13.5 12C13.5 15 11 17.5 6 20.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-400"
          />
          {/* Taut bowstring */}
          <path
            d="M6 3.5V20.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="1.5 1.5"
            className="text-amber-200/80"
          />
          {/* Sharp arrow aimed forward */}
          <path
            d="M5 12H20M20 12L15.5 8M20 12L15.5 16"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-300"
          />
          {/* Fletching notch */}
          <path
            d="M7.5 10L5.5 12L7.5 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-200"
          />
        </svg>
      );

    case 'Atchaya Gold':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Traditional gold medallion / brilliant cut diamond jewel */}
          <path
            d="M12 2.5L19.5 8L12 21.5L4.5 8L12 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-400"
          />
          <path
            d="M4.5 8H19.5"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-amber-300"
          />
          <path
            d="M9 8L12 21.5L15 8"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-200"
          />
          <path
            d="M9 8L12 2.5L15 8"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-300"
          />
          <circle cx="12" cy="11.5" r="1.5" fill="currentColor" className="text-yellow-200" />
        </svg>
      );

    case 'MCT':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Interlinked tech geometric M-C-T circuits */}
          <path
            d="M3.5 17V8L7.5 14L11.5 8V17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sky-400"
          />
          <path
            d="M14 17C12.9 17 12 16.1 12 15V10C12 8.9 12.9 8 14 8H16"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="text-sky-300"
          />
          <path
            d="M17.5 8H21M19.25 8V17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="text-cyan-300"
          />
          <circle cx="7.5" cy="14" r="1" fill="currentColor" className="text-sky-200" />
        </svg>
      );

    case 'Meston College':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Collegiate open book of knowledge & flame torch */}
          <path
            d="M12 7V19M12 7C9.5 5.5 5.5 5.5 3 7V19C5.5 17.5 9.5 17.5 12 19M12 7C14.5 5.5 18.5 5.5 21 7V19C18.5 17.5 14.5 17.5 12 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-300"
          />
          {/* Torch flame of enlightenment */}
          <path
            d="M12 2C12.8 3.2 13.5 4 13.5 4.8C13.5 5.6 12.8 6.2 12 6.2C11.2 6.2 10.5 5.6 10.5 4.8C10.5 4 11.2 3.2 12 2Z"
            fill="currentColor"
            className="text-amber-400"
          />
        </svg>
      );

    case 'Milagu':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Aromatic pepper vine with clustered peppercorns */}
          <path
            d="M12 3C12 7 9 9 9 13C9 17 12 21 12 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-emerald-400"
          />
          <circle cx="8" cy="7" r="1.8" fill="currentColor" className="text-emerald-300" />
          <circle cx="15" cy="9" r="1.8" fill="currentColor" className="text-emerald-300" />
          <circle cx="7" cy="13" r="1.8" fill="currentColor" className="text-emerald-200" />
          <circle cx="14" cy="15" r="1.8" fill="currentColor" className="text-emerald-300" />
          <circle cx="10" cy="19" r="1.8" fill="currentColor" className="text-emerald-200" />
          {/* Delicate culinary herb leaf */}
          <path
            d="M12 3C15 3 18 5 18 8C15 8 13 6 12 3Z"
            fill="currentColor"
            className="text-emerald-400"
          />
        </svg>
      );

    case 'Oblong Realties':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 19.5L12 4.5L21 19.5H3Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-400"
          />
          <path
            d="M12 4.5V19.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-amber-300"
          />
          <path
            d="M7.5 12L12 19.5L16.5 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-200"
          />
          <circle cx="12" cy="11" r="1.5" fill="currentColor" className="text-amber-400" />
        </svg>
      );

    case 'Pulusu Ruchulu':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Traditional Indian clay handi cooking pot */}
          <path
            d="M5 12C5 17 7.5 20 12 20C16.5 20 19 17 19 12H5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-rose-400"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="text-rose-300"
          />
          {/* Fragrant aroma steam swirls */}
          <path
            d="M9 9C9 7.5 10 7 10 5.5M12 9C12 7.2 13 6.8 13 5M15 9C15 7.5 16 7 16 5.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-rose-200"
          />
          {/* Center culinary ember */}
          <circle cx="12" cy="15.5" r="1.5" fill="currentColor" className="text-rose-300" />
        </svg>
      );

    case 'Root & Rise':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Grounding roots transforming into rising flourish */}
          <path
            d="M12 21V11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-teal-400"
          />
          {/* Grounding root network */}
          <path
            d="M12 18L8 21M12 18L16 21M12 15L7 17M12 15L17 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-teal-500/80"
          />
          {/* Rising flourishing leaves */}
          <path
            d="M12 11C8 10 6 6 6 3C9 3 11 5 12 11Z"
            fill="currentColor"
            className="text-teal-300"
          />
          <path
            d="M12 11C16 10 18 6 18 3C15 3 13 5 12 11Z"
            fill="currentColor"
            className="text-teal-200"
          />
        </svg>
      );

    case 'Ten Crore Club':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Prestige crown of 10Cr Club */}
          <path
            d="M4 17L3 8L8 12L12 5L16 12L21 8L20 17H4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-400"
          />
          <path
            d="M4 17H20V19.5H4V17Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-300"
          />
          {/* Center pinnacle star */}
          <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-indigo-200" />
          <circle cx="12" cy="5" r="1" fill="currentColor" className="text-amber-400" />
        </svg>
      );

    case 'THECOS':
    case 'Thecos':
    case 'Thecos Financial':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Hexagonal shield with upward growth chevron */}
          <path
            d="M12 2.5L20 7V17L12 21.5L4 17V7L12 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-400/80"
          />
          <path
            d="M8 14.5L12 10.5L16 14.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-300"
          />
          <path
            d="M12 10.5V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-emerald-300"
          />
          <circle cx="12" cy="7" r="1.5" fill="currentColor" className="text-emerald-400" />
        </svg>
      );

    // Fallbacks for previous items if ever needed
    case 'Aura Bistro & Bar':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 7C6 10.5 8.686 13 12 13C15.314 13 18 10.5 18 7H6Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-400"
          />
          <path
            d="M12 13V20M8.5 20H15.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-400"
          />
          <path
            d="M12 3C12.8 4.2 13.5 5 13.5 5.8C13.5 6.6 12.8 7.2 12 7.2C11.2 7.2 10.5 6.6 10.5 5.8C10.5 5 11.2 4.2 12 3Z"
            fill="currentColor"
            className="text-red-300"
          />
        </svg>
      );

    case 'Crescent Community':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.5 13.8C17.4 17.5 13.8 20 9.8 19.5C5.8 19 2.7 15.6 2.5 11.6C2.3 7.6 5.1 4.1 9 3.2C8.2 4.8 8.2 6.7 9 8.2C10 10.2 12 11.5 14.3 11.5C15.8 11.5 17.3 10.8 18.5 9.7C18.6 11.1 18.6 12.5 18.5 13.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-400"
          />
          <path
            d="M13 19V14L16 11.5L19 14V19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-300"
          />
        </svg>
      );

    default:
      return (
        <span className="font-bold text-xs tracking-wider text-white">
          {name.slice(0, 2).toUpperCase()}
        </span>
      );
  }
}
