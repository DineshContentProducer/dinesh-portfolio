import React from 'react';
import { 
  Sparkles, 
  Award, 
  Building2, 
  ArrowUpRight, 
  CheckCircle2, 
  Send,
  Clapperboard,
  Layers,
  Palette,
  Film
} from 'lucide-react';
import { BrandLogo } from './BrandLogos';

interface AboutSectionProps {
  onOpenContact: () => void;
  onViewProjects: () => void;
}

export function AboutSection({ onOpenContact, onViewProjects }: AboutSectionProps) {
  const softwareSkills = [
    {
      name: 'Premiere Pro',
      short: 'Pr',
      level: 'Expert',
      desc: 'NLE Video Editing & Multi-cam Sync',
      bgClass: 'from-blue-600 to-indigo-800 text-white',
      borderClass: 'border-blue-500/30'
    },
    {
      name: 'Lightroom',
      short: 'Lr',
      level: 'Advanced',
      desc: 'Color Grading & Batch Processing',
      bgClass: 'from-cyan-700 to-blue-950 text-white',
      borderClass: 'border-cyan-500/30'
    },
    {
      name: 'CapCut Pro',
      short: '✂️',
      level: 'Expert',
      desc: 'High-Retention Short Form & Sound Sync',
      bgClass: 'from-neutral-900 to-black text-white',
      borderClass: 'border-neutral-700'
    },
    {
      name: 'Gemini AI',
      short: 'AI',
      level: 'Advanced',
      desc: 'Frame Rate Upscaling & Artifact Clean',
      bgClass: 'from-blue-900 to-indigo-950 text-white',
      borderClass: 'border-blue-500/40'
    },
    {
      name: 'Chatgpt',
      short: 'AI',
      level: 'Advanced',
      desc: 'Frame Rate Upscaling & Artifact Clean',
      bgClass: 'from-blue-900 to-indigo-950 text-white',
      borderClass: 'border-blue-500/40'
    },
  ];

  const brands = [
    {
      name: 'Atchaya Gold',
      category: 'Jewellery & Gold',
      logoText: 'AG',
      badgeClass: 'bg-amber-950/50 text-amber-300 border-amber-500/40'
    },
    {
      name: 'MCT',
      category: 'Coconut Traders',
      logoText: 'MC',
      badgeClass: 'bg-sky-950/50 text-sky-300 border-sky-500/40'
    },
    {
      name: 'Meston College',
      category: 'Education & Institution',
      logoText: 'MC',
      badgeClass: 'bg-blue-950/50 text-blue-300 border-blue-500/40'
    },
    {
      name: 'Milagu',
      category: 'South Indian Dining',
      logoText: 'MI',
      badgeClass: 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40'
    },
    {
      name: 'Oblong Realties',
      category: 'Real Estate',
      logoText: 'OR',
      badgeClass: 'bg-amber-950/50 text-amber-300 border-amber-600/30'
    },
    {
      name: 'Pulusu Ruchulu',
      category: 'Restaurant & Food',
      logoText: 'PR',
      badgeClass: 'bg-rose-950/50 text-rose-300 border-rose-500/40'
    },
    {
      name: 'Root & Rise',
      category: 'Resort',
      logoText: 'RR',
      badgeClass: 'bg-teal-950/50 text-teal-300 border-teal-500/40'
    },
    {
      name: 'Ten Crore Club',
      category: 'Mutual Funds & Insurance',
      logoText: 'TC',
      badgeClass: 'bg-indigo-950/50 text-indigo-300 border-indigo-500/40'
    },
    {
      name: 'THECOS',
      category: 'Financial & Credit Society',
      logoText: 'TH',
      badgeClass: 'bg-emerald-950/50 text-emerald-300 border-emerald-600/30'
    },
    {
      name: 'Bow and Arrow',
      category: 'Luxury Caravan',
      logoText: 'BA',
      badgeClass: 'bg-amber-950/40 text-amber-200 border-amber-600/40'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-18 pb-24 text-white selection:bg-red-600 selection:text-white scroll-mt-6 sm:scroll-mt-10 overflow-clip"
    >
      {/* Ambient Crimson Glows matching Hero Section */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[800px] h-[550px] bg-[radial-gradient(ellipse_at_center,#b91c1c_0%,#450a0a_30%,transparent_70%)] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,#dc2626_0%,transparent_65%)] opacity-15 blur-3xl pointer-events-none" />

      {/* Decorative Section Tag */}
      <div className="flex items-center justify-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span>Profile & Background</span>
        </div>
      </div>

      {/* Main Grid: Left Portrait + Right Detailed Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* ================= LEFT COLUMN: HERO PORTRAIT & INTRO ================= */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-neutral-400 uppercase">
              HELLO, I AM
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-1">
              DINESH
            </h2>
            <p className="text-sm font-medium text-red-400 mt-1.5 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Content Producer · Digital Marketer
            </p>
          </div>

          {/* Cinematic Portrait Card with Glowing Crimson Spotlight Backdrop */}
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] group mx-auto lg:mx-0 mt-2">
            
            {/* Glowing Spotlight Circle behind Subject */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,#dc2626_0%,#7f1d1d_45%,transparent_75%)] opacity-85 blur-2xl pointer-events-none" />

            {/* Profile Image Layer */}
            <img
              src="https://res.cloudinary.com/yeuuqe0a/image/upload/v1746271911/Untitled_design_2_1_c8z9tq.png"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/cinematic_hero_bg.jpg';
              }}
              alt="Dinesh D - Content Producer & Digital Marketer"
              className="w-full h-full object-cover object-center relative z-0 transform group-hover:scale-105 transition-transform duration-700 ease-out select-none"
            />

            {/* Floating Subtle Sparks / Glow Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.2),transparent_50%)] pointer-events-none z-10" />

            {/* Bottom Floating Status Pill */}
            <div className="absolute bottom-4 inset-x-4 z-20 bg-black/80 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-between text-left">
              <div>
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">Status</p>
                <p className="text-xs font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Available for Projects
                </p>
              </div>
              <button
                onClick={onOpenContact}
                className="px-3.5 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center gap-1 shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <span>Hire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Highlight Stats under portrait */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[360px] sm:max-w-[400px] mt-4">
            <div className="bg-neutral-900/80 rounded-2xl p-3.5 border border-white/10 text-center">
              <span className="text-2xl font-black text-white">2+</span>
              <p className="text-[11px] text-neutral-400 font-medium mt-0.5">Years Experience</p>
            </div>
            <div className="bg-neutral-900/80 rounded-2xl p-3.5 border border-white/10 text-center">
              <span className="text-2xl font-black text-red-500">100%</span>
              <p className="text-[11px] text-neutral-400 font-medium mt-0.5">On-Time Delivery</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: ABOUT DETAILS & BREAKDOWN ================= */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Section 1: ABOUT ME Narrative */}
          <div className="bg-neutral-950/70 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase flex items-center gap-2.5">
              <span>ABOUT ME</span>
              <span className="w-2 h-2 rounded-full bg-red-600" />
            </h3>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed mt-4 font-normal">
              I’m <strong className="text-white font-semibold">Dinesh</strong>, a Content Producer & Digital Marketer with 2+ years of experience in creating and managing digital content for brands.
            </p>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mt-3">
              I help businesses build a strong online presence through <strong className="text-white font-medium">Social Media Management</strong>, <strong className="text-white font-medium">Content Strategy</strong>, <strong className="text-white font-medium">Reels & Video Editing</strong>, <strong className="text-white font-medium">Poster & Creative Design</strong>, <strong className="text-white font-medium">Content Calendars</strong>, and <strong className="text-white font-medium">Digital Marketing</strong>.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mt-3">
              From planning content to creating, editing, scheduling, and managing social media, I focus on making every piece of content creative, consistent, and aligned with the brand’s goals.
            </p>

            {/* Core Services & Capabilities */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                'Video Production',
                'Video Editing',
                'Reels & Short-Form',
                'Motion Design',
                'Creative Direction',
                'AI Video Production',
                'SEO',
                'Meta Ads'
              ].map((pill) => (
                <span 
                  key={pill}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 hover:border-red-500/40 hover:text-white transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Section 2: SOFTWARE SKILLS (Internally Scrollable with Fixed Height) */}
          <div className="bg-neutral-950/70 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
              <h3 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase flex items-center gap-2">
                <span>SOFTWARE SKILLS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              </h3>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                {softwareSkills.length} Tools · Scroll
              </span>
            </div>

            {/* Internally Scrollable Software App Icons Grid */}
            <div 
              tabIndex={0}
              aria-label="Scrollable list of software skills"
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 max-h-[175px] sm:max-h-[190px] overflow-y-auto pr-1.5 focus:outline-none focus:ring-1 focus:ring-red-500/30 rounded-xl [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-neutral-900/60 [&::-webkit-scrollbar-thumb]:bg-neutral-700/60 hover:[&::-webkit-scrollbar-thumb]:bg-red-500/80 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {softwareSkills.map((tool) => (
                <div 
                  key={tool.name}
                  className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-neutral-900/90 border border-white/10 hover:border-red-500/40 hover:bg-neutral-800/90 transition-all duration-300 hover:scale-[1.02] group cursor-default shadow-sm"
                >
                  {/* Square App Icon Badge */}
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${tool.bgClass} border ${tool.borderClass} flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                    {tool.short}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-red-400 transition-colors">
                      {tool.name}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-neutral-400 truncate">
                      {tool.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: BRANDS I'VE WORKED WITH (Internally Scrollable, Same Overall Size) */}
          <div className="bg-neutral-950/70 rounded-3xl p-5 sm:p-6 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 mb-3.5 pb-2 border-b border-white/5">
              <div className="flex items-center gap-2 text-red-400">
                <Building2 className="w-4 h-4" />
                <h4 className="text-sm font-bold tracking-wider uppercase text-white">
                  BRANDS I'VE WORKED WITH
                </h4>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                {brands.length} Brands · Scroll
              </span>
            </div>

            {/* Internally Scrollable Brand Cards Grid */}
            <div 
              tabIndex={0}
              aria-label="Scrollable list of brands worked with"
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[180px] sm:max-h-[195px] overflow-y-auto pr-1.5 focus:outline-none focus:ring-1 focus:ring-red-500/30 rounded-xl [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-neutral-900/60 [&::-webkit-scrollbar-thumb]:bg-neutral-700/60 hover:[&::-webkit-scrollbar-thumb]:bg-red-500/80 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {brands.map((brand) => (
                <div 
                  key={brand.name}
                  className="bg-neutral-900/70 hover:bg-neutral-900 border border-white/10 hover:border-red-500/50 rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 transition-all duration-300 hover:scale-[1.02] group shadow-sm"
                >
                  {/* Brand Logo: circular, properly sized, centered and contained */}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center p-1.5 shrink-0 border shadow-inner overflow-hidden ${brand.badgeClass} group-hover:scale-110 transition-transform duration-300`}>
                    <BrandLogo name={brand.name} className="w-full h-full object-contain" />
                  </div>

                  {/* Brand Details */}
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-300 transition-colors truncate">
                      {brand.name}
                    </h5>
                    <span className="text-[10px] sm:text-[11px] font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors truncate block">
                      {brand.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Connect / Action Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-950/50 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Person / Hire Dinesh</span>
            </button>
            <button
              onClick={onViewProjects}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 border border-white/15 cursor-pointer"
            >
              <Clapperboard className="w-3.5 h-3.5 text-red-400" />
              <span>Back to Showcase</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
