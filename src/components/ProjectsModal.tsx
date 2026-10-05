import React from 'react';
import { ExternalLink, X, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (title: string) => void;
}

export function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  if (!isOpen) return null;

  const projects = [
    {
      title: "Solstice Studio",
      category: "Creative Agency & Motion",
      description: "Ultra-fast headless web platform with fluid 60fps micro-interactions and dark aesthetic.",
      tags: ["React", "Tailwind CSS", "Motion", "Vite"],
      metrics: "3.2x Engagement",
      gradient: "from-orange-500/20 to-amber-500/10",
      accent: "border-orange-500/30",
    },
    {
      title: "Aura Commerce",
      category: "Luxury Fashion Storefront",
      description: "Sub-second page load times with instant checkout flow and dynamic product customizer.",
      tags: ["TypeScript", "Next.js", "Shopify API", "Tailwind"],
      metrics: "+148% Conversion",
      gradient: "from-neutral-800 to-neutral-900",
      accent: "border-neutral-700",
    },
    {
      title: "VenturePulse",
      category: "SaaS Analytics Dashboard",
      description: "Real-time metrics console for growth teams with clean data visualization and interactive widgets.",
      tags: ["React 19", "D3 Charts", "Node.js", "PostgreSQL"],
      metrics: "99.9% Uptime",
      gradient: "from-orange-600/20 to-red-500/10",
      accent: "border-orange-500/40",
    },
    {
      title: "Krypton Labs",
      category: "Fintech Web3 Interface",
      description: "Minimalist, security-first web application engineered for high-frequency financial operations.",
      tags: ["Web3", "Tailwind CSS", "TypeScript", "Ethers"],
      metrics: "$12M+ Volume",
      gradient: "from-neutral-900 to-zinc-900",
      accent: "border-neutral-700",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works & Case Studies</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Built by Dinesh
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              Explore recent high-performance websites engineered for brands & creators.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl bg-neutral-900/60 border ${proj.accent} p-6 hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-semibold tracking-wider text-orange-400">
                    {proj.category}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/20">
                    {proj.metrics}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  {proj.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>

                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-orange-400 inline-flex items-center gap-1">
                  Preview <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>10+ Content Production deployed globally</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-200 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
