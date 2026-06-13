import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Check, RefreshCw, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import productShowcaseImg from '../assets/product_showcase.jpg';

export default function DosageGuide() {
  // Dosage state for interactive dosage tracker
  const [morningTaken, setMorningTaken] = useState(false);
  const [nightTaken, setNightTaken] = useState(false);

  // Calculate completion percentage
  const totalSlots = 2;
  const takenCount = (morningTaken ? 1 : 0) + (nightTaken ? 1 : 0);
  const progressPercent = (takenCount / totalSlots) * 100;

  const handleReset = () => {
    setMorningTaken(false);
    setNightTaken(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f7faf8]">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8">

        {/* Card Frame wrapping content */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12 shadow-sm relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Decorative faint background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b2f0cc]/10 rounded-full blur-2xl"></div>

          {/* Left Column: Realistic Product Media & Interactive Dosage Widget */}
          <div className="col-span-1 lg:col-span-6 flex flex-col space-y-6" id="dosage-media-container">
            {/* Curated Wellness Photo representing herbal capsule setup */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-xl bg-white border border-slate-200 shadow-xs">
              <img
                src={productShowcaseImg}
                alt="Natural herbal wellness capsule and therapy display"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              />
              <div className="absolute top-3 left-3 bg-[#0d4d33] text-white font-display text-xs px-2.5 py-1 rounded shadow-xs font-semibold">
                ১২০টি ক্যাপসুল প্যাক
              </div>
            </div>

            {/* Interactive Dosage Tracker (Specialized visual component from guidelines) */}
            <div className="bg-[#f7faf8] border border-[#e0e6e2] p-5 rounded-xl text-left bangla-text" id="interactive-dosage-tracker">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-base font-display font-bold text-primary-dark flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-brand-green rounded-full"></span>
                  আজকের ডোজ ট্র্যাকার (ডায়াবেটিস নিয়ন্ত্রণ)
                </h4>
                <button
                  onClick={handleReset}
                  className="p-1 px-2.5 rounded-md hover:bg-slate-200 text-primary-dark/70 text-xs font-display flex items-center gap-1.5 cursor-pointer bg-white border border-slate-200 transition-colors"
                >
                  <RefreshCw size={12} />
                  রিসেট করুন
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Progress Circle & Needle */}
                <div className="sm:col-span-4 flex flex-col items-center">
                  <div className="relative w-28 h-28 flex justify-center items-center">
                    {/* Circle Background */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="45"
                        className="stroke-slate-200"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="45"
                        className="stroke-brand-green transition-all duration-500 ease-out"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={282}
                        strokeDashoffset={282 - (282 * progressPercent) / 100}
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Inner Indicator showing Percent/Status */}
                    <div className="absolute flex flex-col items-center justify-center font-display">
                      <span className="text-xl font-bold text-primary-dark text-center">{progressPercent}%</span>
                      <span className="text-[10px] text-primary-dark/70">কার্য সম্পন্ন</span>
                    </div>

                    {/* Gold needle indicator accent */}
                    <div
                      className="absolute w-2 h-14 bottom-14 origin-bottom transition-all duration-500 ease-out"
                      style={{ transform: `rotate(${(progressPercent * 1.8) - 90}deg)` }}
                    >
                      <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mx-auto shadow-xs"></div>
                    </div>
                  </div>
                </div>

                {/* Tracking Action Buttons */}
                <div className="sm:col-span-8 flex flex-col space-y-3 font-display">
                  <button
                    onClick={() => setMorningTaken(!morningTaken)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border font-semibold text-sm transition-all duration-200 cursor-pointer ${morningTaken
                      ? 'bg-brand-green/10 border-brand-green text-brand-green'
                      : 'bg-white border-slate-200 text-primary-dark hover:border-slate-300'
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      ☀️ সকালের ডোজ
                    </span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${morningTaken ? 'bg-brand-green border-brand-green text-white' : 'border-slate-300 bg-white'
                      }`}>
                      {morningTaken && <Check size={12} className="stroke-[3]" />}
                    </span>
                  </button>

                  <button
                    onClick={() => setNightTaken(!nightTaken)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border font-semibold text-sm transition-all duration-200 cursor-pointer ${nightTaken
                      ? 'bg-brand-green/10 border-brand-green text-brand-green'
                      : 'bg-white border-slate-200 text-primary-dark hover:border-slate-300'
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      🌙 রাতের ডোজ
                    </span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${nightTaken ? 'bg-brand-green border-brand-green text-white' : 'border-slate-300 bg-white'
                      }`}>
                      {nightTaken && <Check size={12} className="stroke-[3]" />}
                    </span>
                  </button>
                </div>
              </div>

              {/* Achievement Message */}
              <AnimatePresence>
                {progressPercent === 100 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-3 bg-brand-green border border-brand-green/20 rounded-lg text-white flex items-center gap-2.5 text-xs font-semibold"
                  >
                    <Sparkles size={16} className="text-accent-gold shrink-0 animate-bounce" />
                    <span>অসাধারণ কাজ! আপনার আজকের সেবন সম্পূর্ণ হয়েছে। ডায়াবেটিস নিয়ন্ত্রণে নিয়মিত হোন।</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Descriptions & Guidelines (Matches Screenshot perfectly) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col text-left space-y-6 bangla-text" id="dosage-text-container">
            <div className="space-y-2">
              <span className="text-brand-green text-xs font-bold uppercase tracking-wider font-sans">নির্দেশাবলী</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary-dark">
                নির্দেশনা ও সেবনবিধি
              </h3>
            </div>

            <div className="w-12 h-1 bg-brand-green rounded-full"></div>

            <div className="space-y-6 py-2">
              {/* Point 1: Dosage */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex justify-center items-center border border-brand-green/15 text-brand-green shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                  <CheckCircle2 size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-display font-semibold text-primary-dark">সেবন মাত্রা:</h4>
                  <p className="text-sm sm:text-base text-primary-dark/85 font-sans">
                    ১টি করে ক্যাপসুল প্রতিদিন সকালে এবং রাতে চিকিৎসকের পরামর্শ অনুযায়ী সেব্য।
                  </p>
                </div>
              </div>

              {/* Point 2: Caution */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-accent-gold/15 flex justify-center items-center border border-accent-gold/30 text-accent-dark-gold shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                  <AlertTriangle size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-display font-semibold text-primary-dark">সতর্কতা:</h4>
                  <p className="text-sm sm:text-base text-primary-dark/85 font-sans">
                    আলো ও আর্দ্রতা থেকে দূরে, ঠান্ডা ও শুষ্ক স্থানে রাখুন। প্রতিটি সেবনের পর কনটেইনারের ক্যাপ ভালো করে আটকান। শিশুদের নাগালের বাইরে রাখুন।
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer block */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-primary-dark/70 font-sans">
              * নোট: ইউনানী ঔষধ সম্পূর্ণ পার্শ্বপ্রতিক্রিয়ামুক্ত। তবে কোনো দীর্ঘস্থায়ী সমস্যা থাকলে বা অন্যান্য ঔষধ সেবনের প্রাক্কালে চিকিৎসকের পরামর্শ গ্রহণ করা বাঞ্ছনীয়।
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
