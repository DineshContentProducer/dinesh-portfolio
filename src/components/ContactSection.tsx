import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  onOpenMessageModal: () => void;
}

export function ContactSection({ onOpenMessageModal }: ContactSectionProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactEmail = 'dinesdhanasekar1@gmail.com';
  const whatsappNumber = '+91 73586 35522';
  const whatsappUrl = 'https://wa.me/917358635522?text=Hi%20Dinesh,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20work%20together!';
  const instagramHandle = '@iiamdinesh';
  const instagramUrl = 'https://www.instagram.com/iiamdinesh?stkn=MTB6OXRybHdsZm52Yw==';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 text-white selection:bg-red-600 selection:text-white scroll-mt-6 sm:scroll-mt-10 overflow-clip"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Contact Card */}
      <div className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[42px] bg-neutral-950/85 border border-white/10 p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
        
        {/* Subtle red linear accent beam at top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Circular Profile Photo & Contact Options */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* "CONTACT ME" Section Header Badge */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h3 className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-neutral-400">
                CONTACT ME
              </h3>
            </div>

            {/* Profile Circle & Vertical Stack of 3 Contacts */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              
              {/* Circular Creator Photo */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative group">
                  {/* Outer glowing halo ring */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-br from-red-600 via-neutral-800 to-white/20 shadow-[0_0_35px_rgba(220,38,38,0.3)] transition-transform duration-500 group-hover:scale-105">
                    <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border-2 border-black">
                      <img
                        src="/cinematic_hero_bg.jpg"
                        alt="Dinesh - Content Producer"
                        className="w-full h-full object-cover object-[58%_26%] select-none group-hover:scale-110 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://res.cloudinary.com/yeuuqe0a/image/upload/f_auto,q_auto/Cinematic_Profile_Against_Red_Stripes";
                        }}
                      />
                    </div>
                  </div>

                  {/* Red accent dot badge */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-red-600 ring-4 ring-neutral-950 flex items-center justify-center shadow-lg" />
                </div>

                {/* Name & Title beneath circle */}
                <div className="mt-3 text-center">
                  <h4 className="font-bold text-sm sm:text-base text-white tracking-wider">
                    DINESH
                  </h4>
                  <p className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">
                    CONTENT PRODUCER
                  </p>
                </div>
              </div>

              {/* The 3 Contact Options: Instagram, WhatsApp, Gmail */}
              <div className="flex-1 w-full flex flex-col justify-center gap-3 sm:gap-3.5 pt-1">
                
                {/* 1. Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-900/80 hover:bg-neutral-900 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-md">
                      <Instagram className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-neutral-300">
                        Instagram
                      </span>
                      <span className="block text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                        {instagramHandle}
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-red-600/20 text-neutral-400 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-900/80 hover:bg-neutral-900 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-md">
                      <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-neutral-300">
                        WhatsApp
                      </span>
                      <span className="block text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                        {whatsappNumber}
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-emerald-500/20 text-neutral-400 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* 3. Gmail */}
                <div className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-900/80 hover:bg-neutral-900 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-md">
                      <Mail className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-neutral-300">
                        Gmail
                      </span>
                      <span className="block text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                        {contactEmail}
                      </span>
                    </div>
                  </a>

                  {/* Copy or open direct button */}
                  <button
                    onClick={() => copyToClipboard(contactEmail, 'email')}
                    title="Copy Email"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Massive Typography "LET'S CREATE SOMETHING GREAT." */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:items-end text-left lg:text-right pt-6 lg:pt-0">
            <h2 className="font-bebas font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[104px] tracking-wide leading-[0.88] text-white/95 select-none">
              <span className="block text-neutral-400 hover:text-neutral-200 transition-colors">
                LET'S CREATE
              </span>
              <span className="block text-white">
                SOMETHING
              </span>
              <span className="block text-white">
                GREAT<span className="text-red-600">.</span>
              </span>
            </h2>

            {/* Quick interactive message modal trigger */}
            <div className="mt-6 sm:mt-8 flex items-center lg:justify-end gap-3">
              <button
                onClick={onOpenMessageModal}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Send Direct Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM SIMPLE LINE ================= */}
        {/* User requirement: "At the bottom, add a simple line: PLAN • SHOOT • EDIT • SOCIAL MEDIA" */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex items-center justify-center text-center">
          <p className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] sm:tracking-[0.35em] text-neutral-300 uppercase">
            <span>PLAN</span>
            <span className="text-red-500 mx-2 sm:mx-3">•</span>
            <span>SHOOT</span>
            <span className="text-red-500 mx-2 sm:mx-3">•</span>
            <span>EDIT</span>
            <span className="text-red-500 mx-2 sm:mx-3">•</span>
            <span>SOCIAL MEDIA</span>
          </p>
        </div>

      </div>
    </section>
  );
}
