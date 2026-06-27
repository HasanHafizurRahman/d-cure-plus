import { ArrowRight, ShoppingCart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import productShowcaseImg from '../assets/product_showcase.png';
import bottleImg from '../assets/bottle.png';

export default function Hero() {
  const scrollToCheckout = () => {
    const el = document.getElementById('checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#def0df] via-[#f5fbf7] to-[#fbf8e8] py-10 md:py-28">
      {/* Grid / dot matrix overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#2d8a2d_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-10 -z-10"></div>

      {/* Floating glowing color circles/orbs */}
      <motion.div
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-brand-green/8 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 15, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text/Content Column */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-6 text-left bangla-text" id="hero-content">
            {/* 100% Organic Badge with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex self-start items-center gap-2 bg-white/80 backdrop-blur-md border border-brand-green/20 px-4 py-2 rounded-full text-brand-green font-display font-bold text-xs sm:text-sm shadow-xs hover:border-brand-green/40 transition-all duration-300"
              id="hero-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              ১০০% ন্যাচারাল ইউনানী ঔষধ
            </motion.div>

            {/* Main Headline with gradient and inline accent */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-primary-dark tracking-tight leading-[1.40]"
              id="hero-title"
            >
              ডায়াবেটিস নিয়ন্ত্রণে <br />
              <span className="bg-gradient-to-r from-brand-green to-primary-medium bg-clip-text text-transparent relative inline-block pb-2">
                প্রাকৃতিক সমাধান
                <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-brand-green via-accent-gold to-transparent rounded-full"></span>
              </span>
            </motion.h1>

            {/* Description with improved readability */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-primary-dark/80 leading-relaxed max-w-2xl font-sans"
              id="hero-description"
            >
              D-CURE Plus (Habbe ziabit 500 mg) হলো প্রাচীন ইউনানী ফর্মুলায় তৈরি একটি নির্ভরযোগ্য ভেষজ ঔষধ যা প্রাকৃতিক উপায়ে রক্তে শর্করার মাত্রা নিয়ন্ত্রণে সাহায্য করে। কোনো ধরনের পার্শ্বপ্রতিক্রিয়া ছাড়াই এটি আপনাকে রাখবে প্রাণবন্ত ও সুস্থ।
            </motion.p>

            {/* Action Buttons with shadows & animations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              id="hero-ctas"
            >
              <button
                onClick={scrollToCheckout}
                className="flex items-center justify-center bg-brand-green hover:bg-primary-medium text-white px-8 py-4.5 rounded-xl font-display font-bold text-base sm:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5 active:translate-y-0 transform active:scale-98"
                id="hero-order-now"
              >
                এখনই অর্ডার করুন
                <ArrowRight size={20} className="ml-2" />
              </button>

              <div
                className="flex items-center justify-center gap-2 border border-slate-200 bg-white/70 backdrop-blur-xs px-6 py-4.5 rounded-xl text-primary-dark font-display font-semibold text-base shadow-xs hover:shadow-sm transition-all duration-300"
                id="hero-cod-indicator"
              >
                <ShieldCheck className="text-brand-green" size={24} />
                ক্যাশ অন ডেলিভারি
              </div>
            </motion.div>
          </div>

          {/* Graphical/Product Column (Enhanced Glassmorphic Card) */}
          <div className="col-span-1 lg:col-span-5 h-full flex justify-center items-center" id="hero-graphics">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5 }}
              className="relative w-full max-w-sm sm:max-w-md bg-white/80 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-white/40 ring-1 ring-black/5 shadow-2xl flex flex-col items-center hover:shadow-3xl transition-all duration-300"
              id="hero-preview-card"
            >
              {/* Image with glass styling tag overlay */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-2xl bg-white mb-6 group border border-slate-100 shadow-inner">
                <img
                  src={productShowcaseImg}
                  alt="D-CURE Plus Medicine Bottle and Box"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  id="hero-med-image"
                />

                {/* Visual Label Overlay in Bengal */}
                <div className="absolute top-4 right-4 bg-primary-dark/95 backdrop-blur-xs text-white font-display text-xs font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce"></span>
                  সুস্থ হন প্রাকৃতিক উপায়ে
                </div>
              </div>

              {/* Product Label Widget with hover elevations */}
              <div className="flex flex-row items-center justify-between w-full p-4.5 border border-[#e0e6e2] bg-[#f7faf8] rounded-2xl gap-4 transition-all duration-300 hover:bg-white hover:border-brand-green/20 hover:shadow-sm">
                <img
                  src={bottleImg}
                  alt="D-CURE Plus Bottle"
                  className="w-14 h-22 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                />

                <div className="flex-1 flex flex-col text-left font-display">
                  <h4 className="text-sm font-bold text-primary-dark">D-CURE Plus (Habbe ziabit)</h4>
                  <p className="text-[11px] text-primary-dark/80 font-sans mt-0.5 leading-relaxed">১টি বক্স (১২০ ক্যাপসুল) - ডায়াবেটিস চিকিৎসায় অব্যর্থ ইউনানী ভেষজ ঔষধ।</p>
                  <p className="text-[10px] font-bold text-brand-green mt-1">প্রস্তুতকারক: এমপেক্স ল্যাবরেটরিজ লিমিটেড</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
