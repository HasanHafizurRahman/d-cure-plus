import { useState } from 'react';
import { Play, X, Volume2, VolumeX, RotateCcw, ThumbsUp, Activity, UserCheck } from 'lucide-react';
import { videoItems } from '../data';
import { VideoItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35); // Initial percentage

  const handlePlayClick = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
    setVideoProgress(15);
  };

  const incrementProgress = () => {
    setVideoProgress(prev => (prev >= 100 ? 0 : prev + 5));
  };

  return (
    <section id="video" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">
        
        {/* Header Title */}
        <div className="max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark tracking-tight">
            ভিডিও গ্যালারি
          </h2>
          <p className="text-sm sm:text-base text-primary-dark/80 font-sans">
            আমাদের সুপরিচিত গ্রাহক এবং ইউনানী বিশেষজ্ঞদের সরাসরি মতামত শুনুন
          </p>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full mt-2"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videoItems.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs cursor-pointer group flex flex-col h-full"
              onClick={() => handlePlayClick(video)}
              id={video.id}
            >
              {/* Thumbnail Area */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 group">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.subtitle}
                  className="w-full h-full object-cover opacity-85 transition-all duration-300 group-hover:opacity-75 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Simulated Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green text-white flex justify-center items-center shadow-md border-2 border-white/40 group-hover:scale-115 transition-transform duration-300 group-hover:bg-[#125136]">
                    <Play size={28} className="fill-current ml-1" />
                  </div>
                </div>

                {/* Video Info Badge */}
                <div className="absolute top-4 left-4 bg-primary-dark/80 text-white text-xs px-3 py-1 rounded-md font-sans">
                  {video.id === 'vid-1' ? "ইউনানী স্পেশালিস্ট" : "গ্রাহকের রিভিউ"}
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left border-t border-slate-100">
                <div>
                  <h4 className="text-lg font-display font-bold text-primary-dark group-hover:text-brand-green transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-primary-dark/80 font-sans mt-1.5 leading-relaxed">
                    {video.subtitle}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100 text-xs text-primary-dark/65 font-sans">
                  {video.id === 'vid-1' ? (
                    <>
                      <Activity size={14} className="text-brand-green" />
                      <span>ডা. আবুল কালাম আজাদ • ইউনানী গবেষক</span>
                    </>
                  ) : (
                    <>
                      <UserCheck size={14} className="text-brand-green" />
                      <span>শফিকুল ইসলাম • সুস্থ গ্রাহক</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Overlay/Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-3xl bg-[#121c17] text-white rounded-2xl overflow-hidden border border-brand-green/30 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header of Modal */}
                <div className="flex justify-between items-center bg-[#0a100d] px-6 py-4 border-b border-white/10">
                  <div className="text-left font-display">
                    <span className="text-brand-green text-xs font-semibold uppercase">{activeVideo.title}</span>
                    <h3 className="text-base font-bold text-white leading-normal">{activeVideo.subtitle}</h3>
                  </div>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="p-1.5 bg-white/15 text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Simulated Interactive Video Screen */}
                <div className="relative aspect-video bg-black flex flex-col justify-between p-4 group">
                  
                  {/* Mock Video Content with overlays */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={activeVideo.thumbnailUrl} 
                      alt="Active video display"
                      className="w-full h-full object-cover opacity-35 filter blur-[2px]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Visual pulse waveforms or mock play content */}
                    {isPlaying ? (
                      <div className="flex items-center gap-1.5 text-brand-green scale-150 animate-pulse bg-black/60 px-4 py-2.5 rounded-lg border border-brand-green/20">
                        <Activity size={20} className="animate-spin text-accent-gold" />
                        <span className="font-display font-medium text-xs text-white">ভিডিও প্লে হচ্ছে...</span>
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-white/25 flex justify-center items-center backdrop-blur-md border border-white/35">
                        <Play size={28} className="text-white fill-current ml-1" />
                      </div>
                    )}
                  </div>

                  {/* Subtitles Overlay overlay (Interactive content simulation) */}
                  <div className="z-10 w-full text-center mt-auto mb-12">
                    <div className="bg-black/80 px-4 py-2 rounded-lg text-sm inline-block max-w-xl mx-auto border border-white/5 font-display text-white">
                      {activeVideo.id === 'vid-1' 
                        ? '"...ইউনানী চিকিৎসার মাধ্যমে সুগার লেভেল স্বাভাবিক করা এবং অগ্ন্যাশয় সবল করা সম্ভব..."' 
                        : '"...নিয়মিত সেবনের ১৫ দিনে আমার সুগার লেভেল ১১ থেকে ৬ এ নেমে আসে..."'
                      }
                    </div>
                  </div>

                  {/* Bottom Video Controls */}
                  <div className="z-10 bg-[#0a100d]/90 p-3 rounded-lg border border-white/10 flex flex-col gap-3">
                    {/* Progress Slider */}
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-white/70 font-mono">0:12</span>
                      <div 
                        onClick={incrementProgress}
                        className="flex-1 h-1.5 bg-white/25 rounded-full cursor-pointer overflow-hidden relative"
                      >
                        <div 
                          className="absolute left-0 top-0 bottom-0 bg-brand-green transition-all duration-300"
                          style={{ width: `${videoProgress}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-white/70 font-mono">1:45</span>
                    </div>

                    {/* Operational Row */}
                    <div className="flex justify-between items-center text-xs text-white/80">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="hover:text-brand-green cursor-pointer"
                        >
                          {isPlaying ? 'PAUSE' : 'PLAY'}
                        </button>
                        <button 
                          onClick={() => setVideoProgress(0)}
                          className="hover:text-brand-green flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw size={13} /> REPLAY
                        </button>
                      </div>

                      <div className="flex items-center gap-4 font-display">
                        <span className="text-brand-green/90 text-[11px] font-semibold animate-pulse">● ইউনানী ফর্মুলা</span>
                        <button 
                          onClick={() => setIsMuted(!isMuted)}
                          className="hover:text-brand-green cursor-pointer"
                        >
                          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer of Modal */}
                <div className="bg-[#0e1613] p-4 flex justify-between items-center px-6">
                  <div className="flex gap-2 items-center text-xs font-sans text-white/75">
                    <ThumbsUp size={14} className="text-[#a18100]" />
                    <span>১০০% প্রাকৃতিক গুণসম্পন্ন</span>
                  </div>
                  <button
                    onClick={() => {
                      setActiveVideo(null);
                      const el = document.getElementById('checkout');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-brand-green hover:bg-[#125136] text-white text-xs font-display font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
                  >
                    এখনই পণ্য অর্ডার করুন
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
