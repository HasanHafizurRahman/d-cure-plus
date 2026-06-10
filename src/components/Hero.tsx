import { ArrowRight, ShoppingCart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import productShowcaseImg from '../assets/product_showcase.jpg';
import bottleImg from '../assets/bottle.png';

export default function Hero() {
  const scrollToCheckout = () => {
    const el = document.getElementById('checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#f3f9f5] to-[#f8fbf9] py-12 md:py-24">
      {/* Decorative leaf/circles background */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-12 w-72 h-72 bg-accent-gold/10 rounded-full blur-3xl -z-5"></div>

      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Content Column */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-6 text-left bangla-text" id="hero-content">
            {/* 100% Organic Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex self-start items-center gap-1.5 bg-brand-green/10 border border-brand-green/20 px-3.5 py-1.5 rounded-full text-brand-green font-display font-semibold text-xs sm:text-sm"
              id="hero-badge"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              ১০০% ন্যাচারাল ইউনানী ঔষধ
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-dark tracking-tight leading-tight"
              id="hero-title"
            >
              ডায়াবেটিস নিয়ন্ত্রণে <br/>
              <span className="text-brand-green relative inline-block">
                প্রাকৃতিক সমাধান
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-accent-gold/50 -z-5 rounded-full"></span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-primary-dark/85 leading-relaxed max-w-2xl font-sans"
              id="hero-description"
            >
              D-CURE Plus (Habbe ziabit 500 mg) হলো প্রাচীন ইউনানী ফর্মুলায় তৈরি একটি কার্যকরী ঔষধ যা রক্তে শর্করা মাত্রা নিয়ন্ত্রণে সহায়তা করে। সম্পূর্ণ প্রাকৃতিক উপাদানে তৈরি, কোনো পার্শ্বপ্রতিক্রিয়া নেই।
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              id="hero-ctas"
            >
              <button
                onClick={scrollToCheckout}
                className="flex items-center justify-center bg-primary-dark hover:bg-primary-medium text-white px-8 py-4 rounded-md font-display font-bold text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg scale-102 hover:scale-105 active:scale-100"
                id="hero-order-now"
              >
                এখনই অর্ডার করুন
                <ArrowRight size={20} className="ml-2" />
              </button>

              <div 
                className="flex items-center justify-center gap-2 border border-primary-dark/15 px-6 py-4 rounded-md text-primary-dark font-display font-semibold text-base bg-white shadow-xs"
                id="hero-cod-indicator"
              >
                <ShieldCheck className="text-brand-green" size={24} />
                ক্যাশ অন ডেলিভারি
              </div>
            </motion.div>
          </div>

          {/* Graphical/Product Column (Fills visually beautifully like the screenshot) */}
          <div className="col-span-1 lg:col-span-5 h-full flex justify-center items-center" id="hero-graphics">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative w-full max-w-sm sm:max-w-md bg-white p-4 sm:p-6 rounded-2xl border border-primary-dark/5 shadow-xl shadow-primary-dark/5 flex flex-col items-center"
              id="hero-preview-card"
            >
              {/* Image from high-quality clinical/botanical context representing Unani therapist & product */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-xl bg-white mb-6 group border border-slate-200">
                <img 
                  src={productShowcaseImg} 
                  alt="D-CURE Plus Medicine Bottle and Box"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  id="hero-med-image"
                />
                
                {/* Visual Label Overlay in Bengal */}
                <div className="absolute top-3 right-3 bg-brand-green text-white font-display text-xs font-semibold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce"></span>
                  সুস্থ হন প্রাকৃতিক উপায়ে
                </div>
              </div>

              {/* 3D-styled Medicinal Bottle Rendered in CSS */}
              <div className="flex flex-row items-center justify-between w-full p-4 border border-brand-green/25 bg-brand-green/5 rounded-xl gap-4">
                <img 
                  src={bottleImg} 
                  alt="D-CURE Plus Bottle" 
                  className="w-16 h-24 object-contain drop-shadow-sm"
                />

                <div className="flex-1 flex flex-col text-left font-display">
                  <h4 className="text-sm font-semibold text-primary-dark">D-CURE Plus (Habbe ziabit)</h4>
                  <p className="text-xs text-primary-dark/80 font-sans mt-0.5">১টি বক্স (১২০ ক্যাপসুল) - ডায়াবেটিস চিকিৎসায় অব্যর্থ ইউনানী ভেষজ ঔষধ।</p>
                  <p className="text-xs font-bold text-brand-green mt-1">প্রস্তুতকারক: ইউনানী ল্যাবরেটরিজ</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
