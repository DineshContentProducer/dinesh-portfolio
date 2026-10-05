export interface VideoProject {
  id: string;
  title: string;
  subtitle?: string;
  category: 'photography' | 'editing-graphic';
  videoUrl: string;
  embedUrl?: string;
  posterUrl: string;
  overlayText?: string;
  tag?: string;
  description?: string;
  year?: string;
  duration?: string;
}
