import { Award, ShieldAlert, HeartPulse, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

export default function BannerMiddle() {
  return (
    <section className="py-16 bg-[#003520] text-white relative overflow-hidden bangla-text">
      {/* Absolute vectors */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#125136]/50 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fed65b]/5 rounded-full blur-3xl -z-5"></div>

      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Grid of Laboratory Certificates */}
          <div className="col-span-1 lg:col-span-5 grid grid-cols-2 gap-4" id="cert-badge-grid">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 p-5 rounded-lg border border-white/10 flex flex-col items-center text-center space-y-2 backdrop-blur-xs"
            >
              <Award className="text-accent-gold w-8 h-8" />
              <h4 className="text-base font-display font-semibold">ইউনানী অনুমোদিত</h4>
              <p className="text-[11px] text-white/80 font-sans">১০০% ভেষজ উপাদান</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 p-5 rounded-lg border border-white/10 flex flex-col items-center text-center space-y-2 backdrop-blur-xs"
            >
              <HeartPulse className="text-accent-gold w-8 h-8" />
              <h4 className="text-base font-display font-semibold">রক্তের সুগার নিয়ন্ত্রণ</h4>
              <p className="text-[11px] text-white/80 font-sans">গ্লুকোজ লেভেল স্বাভাবিক রাখে</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 p-5 rounded-lg border border-white/10 flex flex-col items-center text-center space-y-2 backdrop-blur-xs"
            >
              <ShieldAlert className="text-accent-gold w-8 h-8" />
              <h4 className="text-base font-display font-semibold">কোনো পার্শ্বপ্রতিক্রিয়া নেই</h4>
              <p className="text-[11px] text-white/80 font-sans">রাসায়নিক উপাদানমুক্ত</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 p-5 rounded-lg border border-white/10 flex flex-col items-center text-center space-y-2 backdrop-blur-xs"
            >
              <RefreshCcw className="text-accent-gold w-8 h-8" />
              <h4 className="text-base font-display font-semibold">৬০০ টাকা সাশ্রয়ী অফার</h4>
              <p className="text-[11px] text-white/80 font-sans">৩টি বক্সে সেরা ছাড়</p>
            </motion.div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="col-span-1 lg:col-span-7 text-left space-y-6" id="banner-text-details">
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest font-sans">সার্টিফাইড ভেষজ চিকিৎসা</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight">
              সুস্থ ও সতেজ জীবনীশক্তি <br className="hidden sm:inline" />
              ফিরে পান সম্পূর্ণ প্রাকৃতিক উপায়ে!
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans max-w-xl">
              ডি-কিউর প্লাস হলো প্রাচীন ইউনানী শাস্ত্রের এক অসামান্য আবিষ্কার। এটি শরীরে ইনসুলিনের উৎপাদন বাড়াতে এবং শর্করার শোষণ মাত্রা কমাতে সাহায্য করে, যা কোনোপ্রকার কৃত্রিম রাসায়নিক পার্শ্বপ্রতিক্রিয়া ছাড়াই আপনার ডায়াবেটিস রুখে দেয়।
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 font-display text-xs font-semibold text-accent-gold">
              <span className="flex items-center gap-1.5">✔ GMP সার্টিফাইড ল্যাব লোগো</span>
              <span className="flex items-center gap-1.5 font-sans">•</span>
              <span className="flex items-center gap-1.5">✔ ১০০% হালাল ও নিরাপদ ভেষজ</span>
              <span className="flex items-center gap-1.5 font-sans">•</span>
              <span className="flex items-center gap-1.5">✔ ল্যাব টেস্টিং সম্পূর্ণ</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
