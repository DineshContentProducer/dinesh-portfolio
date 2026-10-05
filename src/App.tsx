/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, MessageCircle, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { ContactModal } from './components/ContactModal';
import { InfoModal } from './components/InfoModal';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { SectionSeparator } from './components/SectionSeparator';
import { INITIAL_PROJECTS } from './data/defaultProjects';
import { VideoProject } from './types/project';

const HERO_BG_REMOTE = "https://res.cloudinary.com/yeuuqe0a/image/upload/f_auto,q_auto/Cinematic_Profile_Against_Red_Stripes";
const HERO_BG_LOCAL = "/cinematic_hero_bg.jpg";

export default function App() {
  const [projects, setProjects] = useState<VideoProject[]>(INITIAL_PROJECTS);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'about' | 'services' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // High-Contrast Theme State ('dark' by default, 'light' for high contrast)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (theme === 'light') {
        document.documentElement.classList.add('light-mode');
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.classList.remove('light-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      localStorage.setItem('portfolio-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll-triggered reveal state & ref
  const [isHeroRevealed, setIsHeroRevealed] = useState(false);
  const heroContainerRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered reveal animation using Intersection Observer
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsHeroRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeroRevealed(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (heroContainerRef.current) {
      observer.observe(heroContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to about section
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsContactOpen(true);
    }
  };

  // Check URL hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#projects') {
        setTimeout(() => {
          scrollToProjects();
        }, 200);
      } else if (window.location.hash === '#about') {
        setTimeout(() => {
          scrollToAbout();
        }, 200);
      } else if (window.location.hash === '#contact') {
        setTimeout(() => {
          scrollToContact();
        }, 200);
      }
    }
  }, []);

  return (
    <main className="w-full bg-[#070707] text-white selection:bg-red-600 selection:text-white flex flex-col items-center antialiased">
      
      {/* ================= HERO SECTION (MATCHING IMAGE 1 EXACTLY) ================= */}
      <div className="w-full flex flex-col items-center pt-3 sm:pt-6 md:pt-8 px-2 sm:px-4 md:px-6 lg:px-8 relative">
        {/* Main Hero Card Container with Perfect 1586:992 Aspect Fit */}
        <div 
          ref={heroContainerRef}
          className="w-full max-w-[1440px] relative rounded-[28px] sm:rounded-[36px] md:rounded-[42px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-white/10 lg:aspect-[1586/992] min-h-[620px] lg:min-h-0 flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14"
        >
          {/* Cinematic Background Image Layer - Edge to Edge */}
          <img
            src={HERO_BG_REMOTE}
            onError={(e) => {
              (e.target as HTMLImageElement).src = HERO_BG_LOCAL;
            }}
            alt="Cinematic Profile Against Red Stripes"
            className="absolute inset-0 w-full h-full object-cover lg:object-fill object-center z-0 pointer-events-none select-none"
          />

          {/* Subtle Contrast Layer preserving the vivid red PORTFOLIO background & Dinesh in suit */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent z-0 pointer-events-none" />

          {/* TOP BAR: Navigation (Right aligned) */}
          <div 
            className={`relative z-10 flex items-center justify-between w-full transition-all duration-700 ease-out delay-100 ${
              isHeroRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            {/* Top Left: Spacer */}
            <div className="flex items-center" />

            {/* Top Right: Desktop Navigation Links as Individual Pill Badges */}
            <nav className="hidden lg:flex items-center gap-2 sm:gap-2.5 xl:gap-3 text-white">
              <button
                onClick={scrollToAbout}
                className="px-4 py-1.5 rounded-full bg-black/40 hover:bg-neutral-900/90 border border-white/20 hover:border-red-500/60 text-xs sm:text-sm font-semibold tracking-wide text-white/90 hover:text-white backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={scrollToProjects}
                className="px-4 py-1.5 rounded-full bg-black/40 hover:bg-neutral-900/90 border border-white/20 hover:border-red-500/60 text-xs sm:text-sm font-semibold tracking-wide text-white/90 hover:text-white backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => setInfoModalType('services')}
                className="px-4 py-1.5 rounded-full bg-black/40 hover:bg-neutral-900/90 border border-white/20 hover:border-red-500/60 text-xs sm:text-sm font-semibold tracking-wide text-white/90 hover:text-white backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={scrollToContact}
                className="px-4 py-1.5 rounded-full bg-black/40 hover:bg-neutral-900/90 border border-white/20 hover:border-red-500/60 text-xs sm:text-sm font-semibold tracking-wide text-white/90 hover:text-white backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Contact
              </button>

              {/* Discreet Theme Switcher Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to high-contrast light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}
                className="p-1.5 sm:px-3 sm:py-1.5 rounded-full bg-black/40 hover:bg-neutral-900/90 border border-white/20 hover:border-amber-400/60 text-white/90 hover:text-white backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(251,191,36,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="sr-only sm:not-sr-only text-[11px] font-mono tracking-tight text-neutral-300">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="sr-only sm:not-sr-only text-[11px] font-mono tracking-tight text-neutral-600">Dark</span>
                  </>
                )}
              </button>
            </nav>

            {/* Mobile Controls: Theme Toggle & Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to high-contrast light mode' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}
                className="p-2.5 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60 transition-colors cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-400" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="mobile-dropdown lg:hidden absolute top-20 left-6 right-6 z-40 bg-neutral-950/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/15 animate-in fade-in slide-in-from-top-3 duration-200 text-white">
              <nav className="flex flex-col gap-2 text-sm font-semibold">
                <button
                  onClick={() => {
                    scrollToAbout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-full bg-black/50 hover:bg-neutral-900 border border-white/15 hover:border-red-500/60 text-white/90 hover:text-white transition-all cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToProjects();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-full bg-black/50 hover:bg-neutral-900 border border-white/15 hover:border-red-500/60 text-white/90 hover:text-white transition-all cursor-pointer"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    setInfoModalType('services');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-full bg-black/50 hover:bg-neutral-900 border border-white/15 hover:border-red-500/60 text-white/90 hover:text-white transition-all cursor-pointer"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToContact();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-full bg-black/50 hover:bg-neutral-900 border border-white/15 hover:border-red-500/60 text-white/90 hover:text-white transition-all cursor-pointer"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-full bg-black/50 hover:bg-neutral-900 border border-white/15 hover:border-amber-400/60 text-white/90 hover:text-white transition-all cursor-pointer text-xs mt-1"
                >
                  <span>Theme Mode</span>
                  <span className="flex items-center gap-1.5 font-bold text-amber-400">
                    {theme === 'dark' ? (
                      <>
                        <Sun className="w-3.5 h-3.5" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-3.5 h-3.5 text-indigo-400" /> Dark Mode
                      </>
                    )}
                  </span>
                </button>
              </nav>
            </div>
          )}

          {/* MAIN HERO CONTENT (LEFT SIDE - MATCHING IMAGE 1) */}
          <div className="relative z-10 flex flex-col justify-between flex-1 mt-6 sm:mt-8 lg:mt-6 max-w-sm sm:max-w-md lg:max-w-lg">
            
            {/* Upper Content: Pill + Shoot Edit Post + View My Work */}
            <div className="space-y-4 sm:space-y-5">
              {/* Dinesh · Content Producer Label */}
              <div 
                className={`transition-all duration-700 ease-out delay-200 ${
                  isHeroRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm shadow-sm">
                  <span>Dinesh</span>
                  <span className="text-white/40">•</span>
                  <span>Content Producer & Digital Marketer</span>
                </div>
              </div>

              {/* Massive Stacked Headline: Shoot / Edit / Post */}
              <div 
                className={`transition-all duration-700 ease-out delay-300 ${
                  isHeroRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <h1 className="font-bebas font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[124px] tracking-[0.02em] leading-[0.88] text-white select-none">
                  <span className="block">Shoot</span>
                  <span className="block">Edit</span>
                  <span className="block">Post</span>
                </h1>
              </div>

              {/* View My Work Glowing Button */}
              <div 
                className={`pt-1 sm:pt-2 transition-all duration-700 ease-out delay-500 ${
                  isHeroRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-neutral-950 font-bold text-sm sm:text-base shadow-[0_0_35px_rgba(255,255,255,0.45)] hover:bg-neutral-100 hover:shadow-[0_0_45px_rgba(255,255,255,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  View My Work
                </button>
              </div>
            </div>

            {/* Bottom Left: Two Stat Cards Side-by-Side (Projects Built 25+ | Client Support 24/7) */}
            <div 
              className={`flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-6 transition-all duration-700 ease-out delay-700 ${
                isHeroRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Card 1: Projects Built */}
              <div 
                onClick={scrollToProjects}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') scrollToProjects(); }}
                className="group relative bg-white hover:bg-neutral-50 rounded-2xl sm:rounded-[22px] p-3.5 sm:p-4.5 min-w-[125px] sm:min-w-[145px] shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(220,38,38,0.35)] border border-transparent hover:border-red-500/50 hover:-translate-y-1.5 hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex flex-col justify-between text-left cursor-pointer overflow-hidden"
              >
                {/* Subtle Hover Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-[12px] font-bold text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    Projects Built
                  </span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center text-white shrink-0 shadow-sm transition-all duration-300">
                    <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                  </div>
                </div>
                <div className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 group-hover:text-red-600 mt-2 sm:mt-3 tracking-tight tabular-nums transition-colors duration-300">
                  25+
                </div>
              </div>

              {/* Card 2: Client Support */}
              <div 
                onClick={() => setIsContactOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsContactOpen(true); }}
                className="group relative bg-white hover:bg-neutral-50 rounded-2xl sm:rounded-[22px] p-3.5 sm:p-4.5 min-w-[125px] sm:min-w-[145px] shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(220,38,38,0.35)] border border-transparent hover:border-red-500/50 hover:-translate-y-1.5 hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex flex-col justify-between text-left cursor-pointer overflow-hidden"
              >
                {/* Subtle Hover Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-[12px] font-bold text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    Client Support
                  </span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:scale-110 group-hover:-rotate-6 flex items-center justify-center text-white shrink-0 shadow-sm transition-all duration-300">
                    <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white stroke-none" />
                  </div>
                </div>
                <div className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 group-hover:text-red-600 mt-2 sm:mt-3 tracking-tight tabular-nums transition-colors duration-300">
                  24/7
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= REFINED ANIMATED SEPARATOR: HERO ➔ PROJECTS ================= */}
        <SectionSeparator
          label="Explore Projects"
          onClick={scrollToProjects}
          ariaLabel="Scroll down to projects showcase"
          showConnectorBeam={true}
        />
      </div>

      {/* ================= SECTION 2: PROJECTS & SHOWCASE SECTION ================= */}
      <ProjectsSection
        projects={projects}
        onUpdateProjects={setProjects}
        onOpenContact={() => setIsContactOpen(true)}
        onNavigateToAbout={scrollToAbout}
      />

      {/* ================= SECTION 3: ABOUT & SKILLS ================= */}
      <AboutSection
        onOpenContact={scrollToContact}
        onViewProjects={scrollToProjects}
      />

      {/* ================= REFINED ANIMATED SEPARATOR: ABOUT ➔ CONTACT ================= */}
      <SectionSeparator
        label="Connect · Let's Collaborate"
        onClick={scrollToContact}
        ariaLabel="Scroll down to Contact section"
        showConnectorBeam={true}
      />

      {/* ================= SECTION 4: CONTACT SECTION (MATCHING REFERENCE) ================= */}
      <ContactSection onOpenMessageModal={() => setIsContactOpen(true)} />

      {/* Global Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <InfoModal
        isOpen={infoModalType !== null}
        type={infoModalType || 'about'}
        onClose={() => setInfoModalType(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </main>
  );
}
