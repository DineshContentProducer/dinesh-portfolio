import React, { useState } from 'react';
import { X, Send, Mail, Clock, Check, MessageSquare, PhoneCall } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Video Production',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('dinesdhanasekar1@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Let’s Work Together</h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Ready to elevate your online presence? Drop a line below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto border border-red-500/30">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Message Received!</h4>
            <p className="text-sm text-neutral-400 max-w-xs mx-auto">
              Thank you, {formData.name || 'friend'}! Dinesh will review your details and respond within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-500 transition-colors cursor-pointer"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Project Scope
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="Video Production">Video Production</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Reels & Short-Form">Reels & Short-Form</option>
                <option value="Motion Design">Motion Design</option>
                <option value="Creative Direction">Creative Direction</option>
                <option value="AI Video Production">AI Video Production</option>
                <option value="SEO">SEO</option>
                <option value="Meta Ads">Meta Ads</option>
                <option value="Comprehensive Package (Multiple Services)">Comprehensive Package (Multiple Services)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Project Details
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your vision, timeline, and goals..."
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Project Inquiry</span>
            </button>
          </form>
        )}

        {/* Quick Contacts Bar */}
        <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-red-400" />
            <span>{copiedEmail ? 'Copied to clipboard!' : 'dinesdhanasekar1@gmail.com'}</span>
          </button>

          <div className="flex items-center gap-1.5 text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-red-400" />
            <span>Response within 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
