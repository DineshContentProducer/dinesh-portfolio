import React from 'react';
import { 
  X, 
  Video, 
  Film, 
  Smartphone, 
  Sparkles, 
  Compass, 
  Cpu, 
  Search, 
  Target, 
  ArrowUpRight,
  CheckCircle2,
  Clapperboard
} from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  type: 'about' | 'services';
  onClose: () => void;
  onOpenContact: () => void;
}

export function InfoModal({ isOpen, type, onClose, onOpenContact }: InfoModalProps) {
  if (!isOpen) return null;

  const services = [
    {
      title: 'Video Production',
      badge: 'Capture & Direct',
      description: 'End-to-end production with cinematic camera setups, multi-angle coverage, professional lighting, and on-set direction.',
      icon: Video,
      color: 'from-red-600/20 to-neutral-900 border-red-500/30 text-red-500'
    },
    {
      title: 'Video Editing',
      badge: 'Post-Production',
      description: 'Precision cutting, rhythm-focused pacing, multi-cam synchronization, color grading, sound design, and master delivery.',
      icon: Film,
      color: 'from-amber-600/20 to-neutral-900 border-amber-500/30 text-amber-500'
    },
    {
      title: 'Reels & Short-Form',
      badge: '9:16 Viral Growth',
      description: 'Thumb-stopping hooks, kinetic captions, trending audio matching, and retention-optimized pacing for Instagram & TikTok.',
      icon: Smartphone,
      color: 'from-rose-600/20 to-neutral-900 border-rose-500/30 text-rose-500'
    },
    {
      title: 'Motion Design',
      badge: 'VFX & Kinetic Art',
      description: 'Bespoke titles, animated lower thirds, kinetic typography, 2D/3D tracking, and dynamic visual overlays.',
      icon: Sparkles,
      color: 'from-purple-600/20 to-neutral-900 border-purple-500/30 text-purple-400'
    },
    {
      title: 'Creative Direction',
      badge: 'Strategy & Vision',
      description: 'Campaign conceptualization, storyboards, mood curation, visual style guides, and brand narrative alignment.',
      icon: Compass,
      color: 'from-blue-600/20 to-neutral-900 border-blue-500/30 text-blue-400'
    },
    {
      title: 'AI Video Production',
      badge: 'Next-Gen Workflows',
      description: 'AI-assisted voiceovers, generative visuals, intelligent frame upscaling, automated transcriptions, and rapid prototyping.',
      icon: Cpu,
      color: 'from-emerald-600/20 to-neutral-900 border-emerald-500/30 text-emerald-400'
    },
    {
      title: 'SEO',
      badge: 'Search & Reach',
      description: 'Video search engine optimization, keyword-optimized metadata, click-worthy titles, and algorithmic audience targeting.',
      icon: Search,
      color: 'from-cyan-600/20 to-neutral-900 border-cyan-500/30 text-cyan-400'
    },
    {
      title: 'Meta Ads',
      badge: 'Paid Performance',
      description: 'Direct-response ad creatives engineered for Instagram & Facebook, multi-hook variations, and high-converting visual funnels.',
      icon: Target,
      color: 'from-red-600/20 to-neutral-900 border-red-500/30 text-red-400'
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-neutral-950 border border-white/15 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl text-white max-h-[92vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-neutral-700 hover:[&::-webkit-scrollbar-thumb]:bg-red-500/80 [&::-webkit-scrollbar-thumb]:rounded-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{type === 'about' ? 'Profile & Background' : 'Creative Services'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
              {type === 'about' ? 'About Dinesh' : 'Services & Offerings'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              {type === 'about' 
                ? 'Content Producer & Digital Marketer with 2+ years of experience creating and managing brand content.' 
                : 'Full-spectrum video production, viral short-form editing, paid performance ads & algorithmic growth.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer shrink-0 ml-3"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {type === 'about' ? (
          <div className="mt-6 space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p className="text-base sm:text-lg text-white font-medium">
              “I’m Dinesh, a Content Producer & Digital Marketer with 2+ years of experience in creating and managing digital content for brands.”
            </p>
            <p className="text-neutral-300">
              I help businesses build a strong online presence through <strong className="text-white">Social Media Management</strong>, <strong className="text-white">Content Strategy</strong>, <strong className="text-white">Reels & Video Editing</strong>, <strong className="text-white">Poster & Creative Design</strong>, <strong className="text-white">Content Calendars</strong>, and <strong className="text-white">Digital Marketing</strong>.
            </p>
            <p className="text-neutral-400">
              From planning content to creating, editing, scheduling, and managing social media, I focus on making every piece of content creative, consistent, and aligned with the brand’s goals.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10">
              <div className="bg-neutral-900/60 p-3 rounded-2xl border border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-red-400 font-mono font-bold block">Experience</span>
                <span className="text-base sm:text-lg font-bold text-white mt-0.5 block">2+ Years</span>
              </div>
              <div className="bg-neutral-900/60 p-3 rounded-2xl border border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-red-400 font-mono font-bold block">Projects</span>
                <span className="text-base sm:text-lg font-bold text-white mt-0.5 block">10+ Featured</span>
              </div>
              <div className="bg-neutral-900/60 p-3 rounded-2xl border border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-red-400 font-mono font-bold block">On-Time</span>
                <span className="text-base sm:text-lg font-bold text-white mt-0.5 block">100% Delivery</span>
              </div>
              <div className="bg-neutral-900/60 p-3 rounded-2xl border border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-red-400 font-mono font-bold block">Focus</span>
                <span className="text-base sm:text-lg font-bold text-white mt-0.5 block">Pacing & Hook</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-neutral-400">Based in India • Collaborating with brands globally</span>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ================= THE 8 SERVICES ================= */
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {services.map((srv) => {
                const IconComponent = srv.icon;
                return (
                  <div
                    key={srv.title}
                    className="p-4 sm:p-5 rounded-2xl bg-neutral-900/70 hover:bg-neutral-900 border border-white/10 hover:border-red-500/50 transition-all duration-300 group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${srv.color} border flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                          {srv.badge}
                        </span>
                      </div>

                      <h4 className="font-bold text-white text-base tracking-wide group-hover:text-red-400 transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-1.5">
                        {srv.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                      <span className="flex items-center gap-1 text-[11px] text-neutral-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Available for booking
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenContact();
                        }}
                        className="text-white hover:text-red-400 font-semibold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Modal CTA Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-400 text-center sm:text-left">
                Need a custom package or retainer? Let’s map out a production plan.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Custom Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
