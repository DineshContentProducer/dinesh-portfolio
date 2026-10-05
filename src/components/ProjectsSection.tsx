import React, { useState } from 'react';
import { 
  Play, 
  Film, 
  Sparkles, 
  Edit3 
} from 'lucide-react';
import { VideoProject } from '../types/project';
import { VideoPlayerModal } from './VideoPlayerModal';
import { AddVideoModal } from './AddVideoModal';
import { SectionSeparator } from './SectionSeparator';

interface ProjectsSectionProps {
  projects: VideoProject[];
  onUpdateProjects: (updated: VideoProject[]) => void;
  onOpenContact: () => void;
  onNavigateToAbout?: () => void;
}

export function ProjectsSection({
  projects,
  onUpdateProjects,
  onOpenContact,
  onNavigateToAbout,
}: ProjectsSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<VideoProject | null>(null);

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
    <section 
      id="projects" 
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-12 sm:pb-14 text-white selection:bg-red-600 selection:text-white scroll-mt-6 sm:scroll-mt-10 overflow-clip"
    >
      {/* Ambient Crimson Glows matching the Hero Red Stripes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,#991b1b_0%,#450a0a_35%,transparent_70%)] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,#b91c1c_0%,transparent_65%)] opacity-15 blur-3xl pointer-events-none" />

      {/* Vertical Accent Guides */}
      <div className="absolute inset-y-0 left-12 w-px bg-gradient-to-b from-transparent via-red-900/20 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-gradient-to-b from-transparent via-red-900/20 to-transparent pointer-events-none hidden lg:block" />

      {/* Unified Section Header: Shot · Edited · Posted */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selected Works · {projects.length} Vertical Reels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            Shot · Edited · Posted
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
            A unified selection of cinematic vertical sequences, commercial motion reels, and kinetic edits crafted end-to-end by Dinesh.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>

      {/* ================= SINGLE UNIFIED GRID: Shot, Edited, and Posted ================= */}
      <div className="relative z-10 pt-10 sm:pt-14 mb-16 sm:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/16] bg-neutral-900 border border-white/15 hover:border-red-500/80 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(220,38,38,0.32)] hover:-translate-y-2 hover:scale-[1.025] transition-all duration-500 ease-out cursor-pointer"
            >
              {/* Poster Image with smooth cinematic zoom */}
              <img
                src={item.posterUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                loading="lazy"
              />

              {/* Ambient Crimson Top Flare on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.28)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              {/* Dark Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40 group-hover:from-black/95 group-hover:via-black/30 transition-colors z-0" />

              {/* Top Badge & Edit button */}
              <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/15 group-hover:border-red-500/40 group-hover:text-red-200 transition-colors">
                  {item.tag || 'Vertical Reel'}
                </span>

                <button
                  onClick={(e) => handleEditClick(e, item)}
                  title="Replace video"
                  className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/20 hover:border-red-500/50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Center Play Button with Soft Red Glow on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-red-600/40 group-hover:bg-red-600/70 backdrop-blur-md border border-red-500/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.6)]">
                  <Play className="w-6 h-6 ml-0.5 fill-white" />
                </div>
              </div>

              {/* Typographic Text Overlays */}
              <div className="absolute inset-x-4 bottom-5 z-20">
                {item.overlayText && (
                  <div className="mb-1.5">
                    <span className="text-sm sm:text-base font-bold text-amber-300 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-1">
                      {item.overlayText}
                    </span>
                  </div>
                )}

                <h4 className="text-xs sm:text-sm font-semibold text-white/95 leading-tight line-clamp-2 drop-shadow-md group-hover:text-white transition-colors">
                  {item.title}
                </h4>

                {item.duration && (
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-neutral-300 group-hover:text-neutral-200 transition-colors">
                    <Film className="w-3 h-3 text-red-400 group-hover:scale-110 transition-transform" />
                    <span>{item.duration} Reel</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= REFINED ANIMATED SEPARATOR: PROJECTS ➔ ABOUT ================= */}
      <div className="pt-8 sm:pt-12">
        <SectionSeparator
          label="Meet Dinesh · Creator & Skills"
          onClick={onNavigateToAbout}
          ariaLabel="Scroll down to About Creator Section"
          showConnectorBeam={true}
        />
      </div>


      {/* Minimal Video-Only 9:16 Player Lightbox */}
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
    </section>
  );
}
