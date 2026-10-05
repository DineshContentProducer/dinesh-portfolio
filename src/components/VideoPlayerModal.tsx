import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, AlertCircle, RefreshCw } from 'lucide-react';
import { VideoProject } from '../types/project';

interface VideoPlayerModalProps {
  project: VideoProject | null;
  onClose: () => void;
  onEditVideo?: (project: VideoProject) => void;
}

export function VideoPlayerModal({ project, onClose, onEditVideo }: VideoPlayerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const isMountedRef = useRef(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [hasVideoError, setHasVideoError] = useState(false);
  const [useEmbed, setUseEmbed] = useState(false);

  // Track mounted state
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Auto-resolve video stream URL vs iframe embed URL & fallback URLs
  const { videoSrc, cloudFallbackUrl, embedSrc } = useMemo(() => {
    if (!project) return { videoSrc: '', cloudFallbackUrl: undefined, embedSrc: undefined };
    let vSrc = project.videoUrl;
    let eSrc = project.embedUrl;
    let cFallback: string | undefined = undefined;

    // Check Cloudinary public IDs
    if (project.id === 'reel-coco-farm' || project.videoUrl?.includes('coco_farm_v3') || project.embedUrl?.includes('coco_farm_v3')) {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/coco_farm_v3.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=coco_farm_v3';
    } else if (project.id === 'reel-mutual-fund' || project.videoUrl?.includes('mutual_fund_1_1') || project.embedUrl?.includes('mutual_fund_1_1')) {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/mutual_fund_1_1.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=mutual_fund_1_1';
    } else if (project.id === 'reel-sunscreen-pilgrim' || project.videoUrl?.includes('Sunscreen_pilgrim') || project.embedUrl?.includes('Sunscreen_pilgrim')) {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/Sunscreen_pilgrim.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=Sunscreen_pilgrim';
    } else if (project.id === 'reel-meston-college' || project.videoUrl?.includes('Meston_college') || project.embedUrl?.includes('Meston_college')) {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/Meston_college.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=Meston_college';
    } else if (project.id === 'photo-oblong-script') {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/Oblong_Script_2.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=Oblong_Script_2';
    } else if (project.id === 'photo-thecos-investment') {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/C9018_1.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=C9018_1';
    } else if (project.id === 'photo-crescent-kadapakkam') {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/Oblong_Sep_3_kadapakkam_2.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=Oblong_Sep_3_kadapakkam_2';
    } else if (project.id === 'photo-commercial-c1139') {
      cFallback = 'https://res.cloudinary.com/yeuuqe0a/video/upload/C1139_2.mp4';
      if (!eSrc) eSrc = 'https://player.cloudinary.com/embed/?cloud_name=yeuuqe0a&public_id=C1139_2';
    }

    if (vSrc && vSrc.includes('player.cloudinary.com')) {
      try {
        const parsed = new URL(vSrc);
        const cloudName = parsed.searchParams.get('cloud_name');
        const publicId = parsed.searchParams.get('public_id');
        if (cloudName && publicId) {
          eSrc = vSrc;
          vSrc = `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`;
        }
      } catch (err) {
        // keep as is
      }
    } else if (eSrc && eSrc.includes('player.cloudinary.com') && !cFallback) {
      try {
        const parsed = new URL(eSrc);
        const cloudName = parsed.searchParams.get('cloud_name');
        const publicId = parsed.searchParams.get('public_id');
        if (cloudName && publicId) {
          cFallback = `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`;
        }
      } catch (err) {
        // keep as is
      }
    }

    return { videoSrc: vSrc, cloudFallbackUrl: cFallback, embedSrc: eSrc };
  }, [project]);

  // Safe play function with auto-mute fallback for strict browser autoplay policies
  const safePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || hasVideoError || useEmbed) return;

    try {
      const promise = video.play();
      if (promise !== undefined) {
        playPromiseRef.current = promise;
        promise
          .then(() => {
            playPromiseRef.current = null;
            if (isMountedRef.current) {
              setIsPlaying(true);
            }
          })
          .catch((err: Error) => {
            playPromiseRef.current = null;
            if (err.name === 'AbortError') return;

            // If browser blocks unmuted playback due to autoplay policy:
            // Auto-mute and immediately retry playback so the video plays reliably!
            if (err.name === 'NotAllowedError') {
              if (video && isMountedRef.current) {
                video.muted = true;
                setIsMuted(true);
                const retryPromise = video.play();
                if (retryPromise !== undefined) {
                  retryPromise
                    .then(() => {
                      if (isMountedRef.current) setIsPlaying(true);
                    })
                    .catch(() => {
                      if (isMountedRef.current) setIsPlaying(false);
                    });
                }
              }
              return;
            }

            if (isMountedRef.current) {
              setIsPlaying(false);
            }
          });
      }
    } catch (e) {
      playPromiseRef.current = null;
    }
  }, [hasVideoError, useEmbed]);

  // Safe pause function
  const safePause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playPromiseRef.current !== null) {
      playPromiseRef.current
        .then(() => {
          if (video && isMountedRef.current) {
            video.pause();
            setIsPlaying(false);
          }
        })
        .catch(() => {
          if (video && isMountedRef.current) {
            video.pause();
            setIsPlaying(false);
          }
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  // Initialize playback on project change
  useEffect(() => {
    setHasVideoError(false);
    setUseEmbed(false);
    setProgress(0);
    setCurrentTime('0:00');

    if (project && videoRef.current) {
      videoRef.current.currentTime = 0;
      safePlay();
    }

    return () => {
      safePause();
    };
  }, [project, videoSrc, safePlay, safePause]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        safePause();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, safePause]);

  const handleClose = () => {
    safePause();
    onClose();
  };

  if (!project) return null;

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video || hasVideoError || useEmbed) return;

    if (video.paused) {
      safePlay();
    } else {
      safePause();
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);

    const format = (t: number) => {
      const mins = Math.floor(t / 60);
      const secs = Math.floor(t % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    setCurrentTime(format(curr));
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      const dur = videoRef.current.duration;
      const mins = Math.floor(dur / 60);
      const secs = Math.floor(dur % 60);
      setDuration(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = targetTime;
    setProgress(parseFloat(e.target.value));
  };

  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleVideoError = () => {
    // If direct local/MP4 stream fails, fallback to embed or cloud URL
    if (cloudFallbackUrl && videoRef.current && videoRef.current.src !== cloudFallbackUrl) {
      videoRef.current.src = cloudFallbackUrl;
      safePlay();
    } else if (embedSrc) {
      setUseEmbed(true);
    } else {
      setHasVideoError(true);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-2xl animate-in fade-in duration-200 select-none"
      onClick={handleClose}
    >
      {/* Floating Minimal Close Button */}
      <button
        onClick={handleClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white/80 hover:text-white border border-white/20 transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="Close video player"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Centered Minimal 9:16 Vertical Video Player (1080x1920 full frame without cropping) */}
      <div 
        className="relative flex items-center justify-center h-[88vh] sm:h-[90vh] max-h-[920px] aspect-[9/16] bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/15 group"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tap to Unmute Banner if autoplay was muted by browser */}
        {isMuted && isPlaying && !useEmbed && !hasVideoError && (
          <button
            onClick={toggleMute}
            className="absolute top-4 left-4 z-30 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white/90 border border-white/20 text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer animate-in fade-in duration-300"
          >
            <VolumeX className="w-3.5 h-3.5 text-red-400" />
            <span>Tap to Unmute</span>
          </button>
        )}

        {useEmbed && embedSrc ? (
          <iframe
            src={embedSrc}
            className="w-full h-full border-0 object-contain bg-black"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        ) : !hasVideoError ? (
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              key={project.id + videoSrc}
              src={videoSrc}
              poster={project.posterUrl}
              playsInline
              autoPlay
              muted={isMuted}
              loop
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={handleVideoError}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={(e) => togglePlay(e)}
              className="w-full h-full object-contain bg-black cursor-pointer"
            >
              <source src={videoSrc} type="video/mp4" />
              {cloudFallbackUrl && <source src={cloudFallbackUrl} type="video/mp4" />}
            </video>

            {/* Always visible Play Button when paused */}
            {!isPlaying && (
              <button
                onClick={(e) => togglePlay(e)}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md transition-transform duration-200 border border-white/30 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer pointer-events-auto z-20"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 sm:w-9 sm:h-9 ml-1 fill-white" />
              </button>
            )}
          </div>
        ) : embedSrc ? (
          <iframe
            src={embedSrc}
            className="w-full h-full border-0 object-contain bg-black"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-950">
            <img
              src={project.posterUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain opacity-25 select-none pointer-events-none"
            />
            <div className="relative z-10 space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center mx-auto border border-red-500/30">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-base">Video Stream Notice</h4>
              <p className="text-xs text-neutral-300 max-w-xs mx-auto">
                Could not load video source. Click below to retry.
              </p>
              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => {
                    setHasVideoError(false);
                    if (embedSrc) setUseEmbed(true);
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Stream</span>
                </button>
                {onEditVideo && (
                  <button
                    onClick={() => {
                      handleClose();
                      onEditVideo(project);
                    }}
                    className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Edit Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Minimal Bottom Playback Controls */}
        {!useEmbed && !hasVideoError && (
          <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-2 z-20 transition-opacity duration-200 opacity-90 group-hover:opacity-100">
            {/* Progress Scrubber Bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-red-500 hover:h-1.5 transition-all"
            />

            {/* Basic Playback Controls Row */}
            <div className="flex items-center justify-between text-xs text-white/90">
              <div className="flex items-center gap-3">
                <button 
                  onClick={(e) => togglePlay(e)} 
                  className="hover:text-white transition-colors cursor-pointer p-1"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button 
                  onClick={(e) => toggleMute(e)} 
                  className="hover:text-white transition-colors cursor-pointer p-1"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-white/70">{currentTime} / {duration}</span>
              </div>

              <button 
                onClick={(e) => toggleFullscreen(e)} 
                className="hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
