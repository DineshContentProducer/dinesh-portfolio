import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Plus, 
  Film, 
  Camera, 
  Palette, 
  ExternalLink, 
  Sparkles,
  Edit3
} from 'lucide-react';
import { VideoProject } from '../types/project';
import { VideoPlayerModal } from './VideoPlayerModal';
import { AddVideoModal } from './AddVideoModal';
import { LovishLogo } from './LovishLogo';

interface ProjectsPageProps {
  onBackToHero: () => void;
  onOpenContact: () => void;
  projects: VideoProject[];
  onUpdateProjects: (updated: VideoProject[]) => void;
}

export function ProjectsPage({
  onBackToHero,
  onOpenContact,
  projects,
  onUpdateProjects,
}: ProjectsPageProps) {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<VideoProject | null>(null);

  const photographyProjects = projects.filter((p) => p.category === 'photography');
  const editingProjects = projects.filter((p) => p.category === 'editing-graphic');

  const handleSaveVideo = (saved: VideoProject) => {
    const exists = projects.some((p) => p.id === saved.id);
    if (exists) {
      onUpdateProjects(projects.map((p) => (p.id === saved.id ? saved : p)));
    } else {
      onUpdateProjects([saved, ...projects]);
    }
  };

  const handleEditClick = (e: React.MouseEvent, project: VideoProject) => {
    e.stopPropagation();
    setEditingProject(project);
    setIsAddModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#040814] text-white selection:bg-cyan-500 selection:text-black relative overflow-clip">
      {/* Radiant Cosmic Blue Spotlights matching reference image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,#1e40af_0%,#0369a1_30%,transparent_70%)] opacity-35 blur-3xl pointer-events-none" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,#0284c7_0%,#0f172a_50%,transparent_75%)] opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,#1d4ed8_0%,transparent_60%)] opacity-20 blur-3xl pointer-events-none" />

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-[#040814]/80 border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: Back button + Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHero}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-all group border border-white/15"
              aria-label="Back to Hero"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Hero</span>
            </button>

            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-white/15">
              <LovishLogo className="w-6 h-6 text-white" />
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-300">
                Dinesh • Content Producer
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setEditingProject(null);
                setIsAddModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Add My Video</span>
            </button>

            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/15 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-14 relative z-10">
        
        {/* ================= SECTION 1: Photography ================= */}
        <section aria-labelledby="photography-heading" className="mb-14 sm:mb-20">
          <div className="flex items-end justify-between mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-wider font-semibold mb-1">
                <Camera className="w-4 h-4" />
                <span>Selected Visual Sequences</span>
              </div>
              <h2
                id="photography-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md"
              >
                Photography
              </h2>
            </div>

            <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
              {photographyProjects.length} Visual Reels
            </span>
          </div>

          {/* 4 Cards Grid - Vertical 9:16 aspect ratio */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {photographyProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/16] bg-neutral-900 border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.5)] cursor-pointer hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(6,182,212,0.25)] transition-all duration-300"
              >
                {/* Poster Background Image */}
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 group-hover:from-black/90 group-hover:via-black/30 transition-colors" />

                {/* Top Overlay Badge / Edit Button */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/15">
                    {item.tag || 'Photography'}
                  </span>

                  <button
                    onClick={(e) => handleEditClick(e, item)}
                    title="Replace this video"
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Center Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 ml-1 fill-white" />
                  </div>
                </div>

                {/* Stylized Center / Bottom Typographic Text Overlays matching reference */}
                <div className="absolute inset-x-4 bottom-5 z-10">
                  {item.overlayText && (
                    <div className="mb-1.5">
                      <span className="text-sm sm:text-base font-bold text-amber-300 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {item.overlayText}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xs sm:text-sm font-semibold text-white/95 leading-tight line-clamp-2 drop-shadow-md">
                    {item.title}
                  </h3>

                  {item.duration && (
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-white/70">
                      <Film className="w-3 h-3 text-cyan-400" />
                      <span>{item.duration} Reel</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= THIN GLOWING DIVIDER ================= */}
        <div className="my-14 sm:my-20 relative flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="absolute w-3/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent blur-sm" />
        </div>

        {/* ================= SECTION 2: Editing end Graphic Design ================= */}
        <section aria-labelledby="editing-heading" className="mb-12">
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-cyan-400 text-xs uppercase tracking-wider font-semibold mb-1">
              <Palette className="w-4 h-4" />
              <span>Motion Posters &amp; Visual Design</span>
            </div>
            <h2
              id="editing-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md"
            >
              Editing end Graphic Design
            </h2>
          </div>

          {/* Framed Container matching the blue bordered box in reference image */}
          <div className="relative rounded-[26px] sm:rounded-[36px] p-4 sm:p-6 md:p-8 bg-[#0b1736]/75 backdrop-blur-xl border border-blue-500/25 shadow-[0_25px_60px_rgba(0,10,40,0.7)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {editingProjects.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideo(item)}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[9/16] bg-neutral-950 border border-white/15 shadow-xl cursor-pointer hover:border-red-500/50 hover:shadow-[0_15px_40px_rgba(239,68,68,0.25)] transition-all duration-300"
                >
                  {/* Poster Image */}
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35 group-hover:from-black/95 transition-colors" />

                  {/* Header / Edit Trigger */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-red-400 border border-red-500/30">
                      {item.tag || 'Poster'}
                    </span>

                    <button
                      onClick={(e) => handleEditClick(e, item)}
                      title="Replace this video"
                      className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Hover Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-red-600/30 backdrop-blur-md border border-red-500/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>

                  {/* Typographic Overlays */}
                  <div className="absolute inset-x-3.5 bottom-4 z-10">
                    {item.overlayText && (
                      <div className="mb-1">
                        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-1">
                          {item.overlayText}
                        </span>
                      </div>
                    )}

                    <h3 className="text-[11px] sm:text-xs font-medium text-neutral-300 leading-tight line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOOTER / BYLINE ================= */}
        <footer className="mt-16 sm:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Click any card to play in high-definition 9:16 player</span>
          </div>

          {/* Byline matching reference "By ibnure_zaaa" / "By Dinesh" */}
          <div className="text-sm font-medium tracking-wide text-neutral-300">
            By <span className="font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">Dinesh</span>
          </div>

          <button
            onClick={onBackToHero}
            className="hover:text-white transition-colors"
          >
            Back to Top
          </button>
        </footer>
      </main>

      {/* Video Player Lightbox Modal */}
      <VideoPlayerModal
        project={activeVideo}
        onClose={() => setActiveVideo(null)}
        onEditVideo={(proj) => {
          setEditingProject(proj);
          setIsAddModalOpen(true);
        }}
      />

      {/* Add / Edit Video Modal */}
      <AddVideoModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveVideo}
        editingProject={editingProject}
      />
    </div>
  );
}
