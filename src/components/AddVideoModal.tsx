import React, { useState, useEffect } from 'react';
import { X, Video, Upload, Sparkles, Check } from 'lucide-react';
import { VideoProject } from '../types/project';

interface AddVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: VideoProject) => void;
  editingProject?: VideoProject | null;
}

export function AddVideoModal({ isOpen, onClose, onSave, editingProject }: AddVideoModalProps) {
  const [formData, setFormData] = useState<Partial<VideoProject>>({
    title: '',
    subtitle: '',
    category: 'photography',
    videoUrl: '',
    posterUrl: '',
    overlayText: '',
    tag: 'Photography Reel',
    description: '',
  });

  useEffect(() => {
    if (editingProject) {
      setFormData(editingProject);
    } else {
      setFormData({
        title: '',
        subtitle: '',
        category: 'photography',
        videoUrl: '',
        posterUrl: '',
        overlayText: '',
        tag: 'Photography Reel',
        description: '',
      });
    }
  }, [editingProject, isOpen]);

  if (!isOpen) return null;

  const handleVideoUrlChange = (value: string) => {
    let nextPoster = formData.posterUrl || '';
    if (value.includes('player.cloudinary.com')) {
      try {
        const parsed = new URL(value);
        const cloudName = parsed.searchParams.get('cloud_name');
        const publicId = parsed.searchParams.get('public_id');
        if (cloudName && publicId && !nextPoster) {
          nextPoster = `https://res.cloudinary.com/${cloudName}/video/upload/so_0/${publicId}.jpg`;
        }
      } catch (e) {
        // ignore
      }
    }
    setFormData({
      ...formData,
      videoUrl: value,
      posterUrl: nextPoster,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.videoUrl) return;

    let finalVideoUrl = (formData.videoUrl || '').trim();
    let finalPosterUrl = (formData.posterUrl || '').trim();
    let finalEmbedUrl: string | undefined = undefined;

    // Normalize Cloudinary Embed URLs to direct high-res MP4 + iframe embed
    if (finalVideoUrl.includes('player.cloudinary.com')) {
      try {
        const parsed = new URL(finalVideoUrl);
        const cloudName = parsed.searchParams.get('cloud_name');
        const publicId = parsed.searchParams.get('public_id');
        if (cloudName && publicId) {
          finalEmbedUrl = finalVideoUrl;
          finalVideoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`;
          if (!finalPosterUrl) {
            finalPosterUrl = `https://res.cloudinary.com/${cloudName}/video/upload/so_0/${publicId}.jpg`;
          }
        }
      } catch (err) {
        // fallback
      }
    }

    const newProject: VideoProject = {
      id: editingProject?.id || `custom-video-${Date.now()}`,
      title: formData.title || 'Untitled Project',
      subtitle: formData.subtitle || '',
      category: formData.category as 'photography' | 'editing-graphic',
      videoUrl: finalVideoUrl,
      embedUrl: finalEmbedUrl,
      posterUrl: finalPosterUrl || 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      overlayText: formData.overlayText || '',
      tag: formData.tag || (formData.category === 'photography' ? 'Photography' : 'Motion Design'),
      description: formData.description || 'Custom video creative produced by Dinesh.',
      year: '2024',
      duration: '0:23',
    };

    onSave(newProject);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{editingProject ? 'Edit Video Slot' : 'Add Your Video'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {editingProject ? 'Replace Video Details' : 'Add Video to Showcase'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Oblong Script · Visual Reel"
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Category *
              </label>
              <select
                value={formData.category || 'photography'}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="photography">Photography</option>
                <option value="editing-graphic">Editing end Graphic Design</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Overlay Text
              </label>
              <input
                type="text"
                value={formData.overlayText || ''}
                onChange={(e) => setFormData({ ...formData, overlayText: e.target.value })}
                placeholder="e.g. Oblong Script / Monday"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Video URL (MP4 / Cloudinary Embed) *
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={formData.videoUrl || ''}
                onChange={(e) => handleVideoUrlChange(e.target.value)}
                placeholder="https://player.cloudinary.com/... or .mp4"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors font-mono text-xs"
              />
              <Video className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Supports Cloudinary embed links, direct MP4 streams, and hosted videos.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Poster / Thumbnail Image URL
            </label>
            <div className="relative">
              <input
                type="url"
                value={formData.posterUrl || ''}
                onChange={(e) => setFormData({ ...formData, posterUrl: e.target.value })}
                placeholder="Auto-generated for Cloudinary, or paste custom JPG"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors font-mono text-xs"
              />
              <Upload className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Short Description
            </label>
            <textarea
              rows={2}
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Highlight equipment, grading techniques, or story..."
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold hover:from-red-500 hover:to-amber-500 transition-all flex items-center gap-1.5 shadow-lg shadow-red-600/30 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>{editingProject ? 'Update Video' : 'Add to Showcase'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
