import { motion } from 'motion/react';
import { 
  Dna, 
  HeartPulse, 
  ClipboardList, 
  FlaskConical, 
  Check, 
  AlertOctagon, 
  Activity, 
  Sparkles, 
  Heart, 
  ShieldAlert, 
  Eye, 
  Brain,
  Scale,
  ShoppingCart
} from 'lucide-react';

export default function ProductDetails() {
  return (
    <section id="specifications" className="py-20 bg-gradient-to-br from-[#f2f8f3] via-white to-[#fbf8e8]/50 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-green/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-gold/4 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center bangla-text">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-green text-xs font-bold uppercase tracking-wider font-sans bg-brand-green/8 px-3 py-1.5 rounded-full">
            বৈজ্ঞানিক ও চিকিৎসাগত তথ্য
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-primary-dark tracking-tight leading-normal">
            D-CURE Plus এর উপাদান ও কার্যকারিতা
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green via-accent-gold to-brand-green mx-auto rounded-full mt-3"></div>
          <p className="text-base sm:text-lg text-primary-dark/75 font-sans max-w-xl mx-auto">
            প্রাচীন ইউনানী শাস্ত্র এবং আধুনিক বৈজ্ঞানিক গবেষণার সমন্বয়ে প্রস্তুতকৃত প্রাকৃতিক মহৌষধ।
          </p>
        </div>

        {/* Stacked Content Sections */}
        <div className="max-w-(--spacing-container-max) mx-auto space-y-16">
          
          {/* Section 1: Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-xl">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-green tracking-wider uppercase font-sans block leading-none mb-1">
                  Ingredients
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary-dark">
                  মূল উপাদানসমূহ
                </h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ingredient Card 1 */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:border-brand-green/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-green/8 flex items-center justify-center border border-brand-green/10 text-brand-green mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-dark mb-1">ছমগ আরবী</h3>
                  <p className="text-xs font-semibold text-brand-green/90 mb-3 bg-brand-green/8 inline-block px-2.5 py-0.5 rounded-full font-sans">
                    ১৫০ মিঃগ্রাঃ
                  </p>
                  <p className="text-sm text-primary-dark/75 font-sans leading-relaxed">
                    প্রাকৃতিক ফাইবার সমৃদ্ধ উপাদান যা রক্তের শর্করা নিয়ন্ত্রণে রাখে এবং অন্ত্রের হজমশক্তি ও বিপাকীয় কর্মকাণ্ড স্বাভাবিক করতে সাহায্য করে।
                  </p>
                </div>
              </div>

              {/* Ingredient Card 2 */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:border-brand-green/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#fed65b]/10 flex items-center justify-center border border-[#fed65b]/20 text-accent-dark-gold mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-dark mb-1">তবাশীর</h3>
                  <p className="text-xs font-semibold text-accent-dark-gold mb-3 bg-[#fed65b]/15 inline-block px-2.5 py-0.5 rounded-full font-sans">
                    ১৫০ মিঃগ্রাঃ
                  </p>
                  <p className="text-sm text-primary-dark/75 font-sans leading-relaxed">
                    ভেষজ সিলিকা যা অগ্ন্যাশয়ের স্বাস্থ্যের জন্য চমৎকার। এটি শরীরের অভ্যন্তরীণ টক্সিন বা বিষাক্ত বর্জ্য দূর করে সুস্থতা বাড়ায়।
                  </p>
                </div>
              </div>

              {/* Ingredient Card 3 */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:border-brand-green/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-green/8 flex items-center justify-center border border-brand-green/10 text-brand-green mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Dna className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-dark mb-1">তোখমে হুম্মাজ</h3>
                  <p className="text-xs font-semibold text-brand-green/90 mb-3 bg-brand-green/8 inline-block px-2.5 py-0.5 rounded-full font-sans">
                    ৬০ মিঃগ্রাঃ
                  </p>
                  <p className="text-sm text-primary-dark/75 font-sans leading-relaxed">
                    এটি অগ্ন্যাশয়ের গুরুত্বপূর্ণ কোষসমূহের কার্যক্ষমতা পুনরুদ্ধার করতে এবং রক্তের ক্ষতিকর উপাদান দূর করতে সাহায্য করে।
                  </p>
                </div>
              </div>

              {/* Ingredient Card 4 */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:border-brand-green/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#fed65b]/10 flex items-center justify-center border border-[#fed65b]/20 text-accent-dark-gold mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-dark mb-1">সত্তেসালাজিদ</h3>
                  <p className="text-xs font-semibold text-accent-dark-gold mb-3 bg-[#fed65b]/15 inline-block px-2.5 py-0.5 rounded-full font-sans">
                    ৪০ মিঃগ্রাঃ
                  </p>
                  <p className="text-sm text-primary-dark/75 font-sans leading-relaxed">
                    বিশুদ্ধ শিলাজিৎ এক্সট্র্যাক্ট যা দেহে নিষ্ক্রিয় ইনসুলিনকে পুনরুজ্জীবিত করতে এবং শরীরের সার্বিক শক্তি ও স্ট্যামিনা বৃদ্ধি করতে অত্যন্ত পরিচিত।
                  </p>
                </div>
              </div>

              {/* Ingredient Card 5 */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:border-brand-green/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-1 group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-600 mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-dark mb-1">অন্যান্য উপাদান</h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3 bg-slate-100 inline-block px-2.5 py-0.5 rounded-full font-sans">
                    প্রয়োজন মতো
                  </p>
                  <p className="text-sm text-primary-dark/75 font-sans leading-relaxed">
                    ক্যাপসুলের সঠিক পুষ্টিমান, সংরক্ষণ ক্ষমতা এবং কার্যকারিতা দীর্ঘস্থায়ী রাখার জন্য অন্যান্য সহায়ক প্রাকৃতিক ও নিরাপদ উপাদান যুক্ত করা হয়েছে।
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-slate-200/85 w-full"></div>

          {/* Section 2: Pharmacology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-xl">
                <Dna className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-green tracking-wider uppercase font-sans block leading-none mb-1">
                  Pharmacology
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary-dark">
                  বৈজ্ঞানিক কার্যপ্রণালী
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Intro card */}
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xs">
                <p className="text-base text-primary-dark font-sans leading-relaxed">
                  <strong>D-Cure Plus</strong> রক্তের শর্করার মাত্রাকে বিপাকীয় কর্মদ্বারা চমৎকারভাবে হ্রাস করে। এতে উপস্থিত ৩টি অতি কার্যকরী জৈব উপাদান অগ্ন্যাশয়ের স্বাস্থ্যের আমূল পরিবর্তন ঘটায়:
                </p>
              </div>

              {/* Pharmacology Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Flavonoid - Quercetin */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 hover:border-brand-green/30 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/8 flex items-center justify-center border border-brand-green/10 text-brand-green shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 font-sans">
                    <h4 className="text-lg font-display font-bold text-primary-dark flex items-center gap-2">
                      Quercetin (কোয়ারসেটিন)
                      <span className="text-xs font-sans text-brand-green bg-brand-green/8 px-2 py-0.5 rounded-full">Flavonoid</span>
                    </h4>
                    <p className="text-sm text-primary-dark/80 leading-relaxed">
                      এটি একটি অত্যন্ত গুরুত্বপূর্ণ প্রাকৃতিক Flavonoid। এটি অন্ত্রের অতিরিক্ত গ্লুকোজ শোষণ হ্রাস করে, একই সাথে <strong>Insulin Secretion</strong> (নিঃসরণ) এবং <strong>Insulin Sensitization</strong> (সংবেদনশীলতা) বৃদ্ধি করে। ফলে শরীরে কৃত্রিম ইনসুলিন ও ডায়াবেটিসের অন্যান্য অ্যান্টি-ডায়াবেটিক রাসায়নিক ঔষধের প্রয়োজনীয়তা স্বল্প সময়ে কমিয়ে আনে।
                    </p>
                  </div>
                </div>

                {/* Amino Acid - Arginine */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 hover:border-brand-green/30 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[#fed65b]/10 flex items-center justify-center border border-[#fed65b]/20 text-accent-dark-gold shrink-0">
                    <Dna className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 font-sans">
                    <h4 className="text-lg font-display font-bold text-primary-dark flex items-center gap-2">
                      Arginine (আরজিনিন)
                      <span className="text-xs font-sans text-accent-dark-gold bg-[#fed65b]/15 px-2 py-0.5 rounded-full">Amino Acid</span>
                    </h4>
                    <p className="text-sm text-primary-dark/80 leading-relaxed">
                      D-Cure Plus এ Arginine নামীয় বিশেষ এমাইনো এসিড পাওয়া যায়, যা শরীরের নিষ্ক্রিয় ইনসুলিন হরমোনকে পুনরায় সক্রিয় করে তোলে (ইনসুলিন রেজিস্ট্যান্স দূর করে)। এটি <strong>Glucose Metabolism</strong> (গ্লুকোজ বিপাক) এর হার বৃদ্ধি করে রক্তের সুগারকে সবসময় স্বাভাবিক মাত্রায় রাখতে সাহায্য করে।
                    </p>
                  </div>
                </div>

                {/* Organic Compound - Zymnemic Acid */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 hover:border-brand-green/30 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/8 flex items-center justify-center border border-brand-green/10 text-brand-green shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 font-sans">
                    <h4 className="text-lg font-display font-bold text-primary-dark flex items-center gap-2">
                      Zymnemic Acid (জিমনেমিক এসিড)
                      <span className="text-xs font-sans text-brand-green bg-brand-green/8 px-2 py-0.5 rounded-full">Organic Compound</span>
                    </h4>
                    <p className="text-sm text-primary-dark/80 leading-relaxed">
                      এই বিশেষ জৈবযৌগটি অগ্ন্যাশয়ের ইনসুলিন উৎপাদনকারী কোষ <strong>Pancreatic Beta Cell</strong> কে উত্তেজিত ও রিজেনারেট করে ইনসুলিন নিঃসরণ (Insulin Secretion) বৃদ্ধি করে। ফলে ইনসুলিন ঘাটতিজনিত রক্তের অতিরিক্ত সুগার স্বাভাবিক মাত্রায় নেমে আসে।
                    </p>
                  </div>
                </div>

                {/* Obesity & Hereditary Diabetes */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 hover:border-brand-green/30 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[#fed65b]/10 flex items-center justify-center border border-[#fed65b]/20 text-accent-dark-gold shrink-0">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 font-sans">
                    <h4 className="text-lg font-display font-bold text-primary-dark flex items-center gap-2">
                      ওজন ও বংশগত ডায়াবেটিস প্রতিরোধ
                      <span className="text-xs font-sans text-accent-dark-gold bg-[#fed65b]/15 px-2 py-0.5 rounded-full">Prevention</span>
                    </h4>
                    <p className="text-sm text-primary-dark/80 leading-relaxed">
                      D-Cure Plus এ এমন সব প্রয়োজনীয় প্রাকৃতিক ভেষজ উপাদানের সংমিশ্রণ রয়েছে, যা মেদ হ্রাস করে অতিরিক্ত ওজন বৃদ্ধিজনিত ডায়াবেটিসের ঝুঁকি দূর করে এবং বংশগত (Hereditary) ডায়াবেটিস নিয়ন্ত্রণে অগ্রণী ভূমিকা পালন করে।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-slate-200/85 w-full"></div>

          {/* Section 3: Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-xl">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-green tracking-wider uppercase font-sans block leading-none mb-1">
                  Indications
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary-dark">
                  দিক নির্দেশনা ও উপকারিতা
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Systemic Wellness Block */}
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xs">
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary-dark mb-4 flex items-center gap-2">
                  <HeartPulse className="text-brand-green shrink-0" />
                  ডায়াবেটিস ও ডায়াবেটিসজনিত শারীরিক জটিলতা প্রতিরোধে D-CURE Plus
                </h3>
                <p className="text-sm sm:text-base text-primary-dark/80 font-sans leading-relaxed mb-6">
                  নিয়মিত D-Cure Plus সেবনের মাধ্যমে আপনার রক্তে শর্করার মাত্রা ঠিক রাখার পাশাপাশি ডায়াবেটিসজনিত অন্যান্য অঙ্গের মারাত্মক ক্ষতি ও উপসর্গ প্রতিরোধে সরাসরি কাজ করে।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Benefit Item 1 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 flex items-start gap-3">
                    <div className="p-2 bg-brand-green/8 text-brand-green rounded-lg shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-sm font-display font-bold text-primary-dark">হার্ট ও কার্ডিওভাসকুলার</h4>
                      <p className="text-xs text-primary-dark/70 mt-1">হার্টের ধমনীর কার্যক্ষমতা বৃদ্ধি করে এবং রক্তসঞ্চালন সচল রাখতে সাহায্য করে।</p>
                    </div>
                  </div>

                  {/* Benefit Item 2 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 flex items-start gap-3">
                    <div className="p-2 bg-brand-green/8 text-brand-green rounded-lg shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-sm font-display font-bold text-primary-dark">চোখ, কান ও দাঁতের সুরক্ষা</h4>
                      <p className="text-xs text-primary-dark/70 mt-1">ডায়াবেটিসজনিত রেটিনোপ্যাথি বা চোখের দৃষ্টিশক্তি ও দাঁতের মাড়ির ক্ষয় রোধ করে।</p>
                    </div>
                  </div>

                  {/* Benefit Item 3 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 flex items-start gap-3">
                    <div className="p-2 bg-brand-green/8 text-brand-green rounded-lg shrink-0">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-sm font-display font-bold text-primary-dark">কিডনী ও ব্রেইনের স্বাস্থ্যের উন্নতি</h4>
                      <p className="text-xs text-primary-dark/70 mt-1">কিডনীর পরিশ্রুতকরণ ক্ষমতা ঠিক রাখে এবং ব্রেইনের স্নায়বিক কর্মক্ষমতা সচল রাখে।</p>
                    </div>
                  </div>

                  {/* Benefit Item 4 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 flex items-start gap-3">
                    <div className="p-2 bg-brand-green/8 text-brand-green rounded-lg shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-sm font-display font-bold text-primary-dark">পায়ের কর্মক্ষমতা ও ত্বক</h4>
                      <p className="text-xs text-primary-dark/70 mt-1">ডায়াবেটিক নিউরোপ্যাথি বা পায়ে অবশ ভাব দূর করে এবং ত্বকের সজীবতা ধরে রাখে।</p>
                    </div>
                  </div>

                  {/* Benefit Item 5 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 flex items-start gap-3">
                    <div className="p-2 bg-brand-green/8 text-brand-green rounded-lg shrink-0">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-sm font-display font-bold text-primary-dark">রোগ প্রতিরোধ ক্ষমতা ও প্রোস্টেট</h4>
                      <p className="text-xs text-primary-dark/70 mt-1">দেহের সার্বিক রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং প্রোষ্টেটগ্রন্থির অস্বাভাবিক বৃদ্ধি রোধে সহায়তা করে।</p>
                    </div>
                  </div>

                  {/* Benefit Item 6 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 flex items-start gap-3">
                    <div className="p-2 bg-brand-green/8 text-brand-green rounded-lg shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-sm font-display font-bold text-primary-dark">স্ট্রোক ও ক্যান্সারের ঝুঁকি হ্রাস</h4>
                      <p className="text-xs text-primary-dark/70 mt-1">শরীরের ক্ষতিকর রক্তজ মেদ (Cholesterol) কমিয়ে কার্ডিয়াক অ্যারেস্ট, স্ট্রোক ও ক্যান্সারের ঝুঁকি কমায়।</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-slate-200/85 w-full"></div>

          {/* Section 4: Dosage & Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-xl">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-green tracking-wider uppercase font-sans block leading-none mb-1">
                  Guidelines
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary-dark">
                  সেবনবিধি ও বিশেষ উপদেশ
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Dosage Guide Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dosage Instructions */}
                <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
                  <h3 className="text-lg font-display font-bold text-brand-green flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 shrink-0" />
                    সেবনবিধি (Dosage)
                  </h3>
                  <div className="h-[1px] bg-slate-100"></div>
                  <div className="bg-brand-green/5 border border-brand-green/10 p-5 rounded-xl">
                    <p className="text-base text-primary-dark font-sans leading-relaxed font-bold">
                      👉 ১/২ (এক বা দুটি) টি ক্যাপসুল আহারের পর দিনে ২ বার সেবন করবেন।
                    </p>
                    <p className="text-xs text-primary-dark/70 font-sans mt-2">
                      (সকালে আহারের পর এবং রাতে আহারের পর চিকিৎসকের পরামর্শ অনুযায়ী সেব্য।)
                    </p>
                  </div>
                </div>

                {/* Critical Warning / Contraindications */}
                <div className="bg-white border border-[#ba1a1a]/15 p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
                  <h3 className="text-lg font-display font-bold text-[#ba1a1a] flex items-center gap-2">
                    <AlertOctagon className="w-5 h-5 shrink-0" />
                    নিষেধাজ্ঞা ও বিশেষ সতর্কতা
                  </h3>
                  <div className="h-[1px] bg-red-50"></div>
                  <div className="bg-[#ba1a1a]/8 border border-[#ba1a1a]/15 p-5 rounded-xl">
                    <p className="text-sm sm:text-base text-[#ba1a1a] font-display font-bold leading-relaxed">
                      🚨 D-Cure Plus মধু এবং দুধের সাথে সেবন করা সম্পূর্ণ নিষিদ্ধ।
                    </p>
                    <p className="text-xs text-[#ba1a1a]/80 font-sans mt-2 leading-relaxed">
                      ঔষধ সেবনকালে মধু অথবা দুধ পান করবেন না। ঠান্ডা, শুষ্ক স্থানে এবং শিশুদের নাগালের বাইরে রাখুন।
                    </p>
                  </div>
                </div>
              </div>

              {/* General Advice */}
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xs">
                <h3 className="text-lg font-display font-bold text-primary-dark mb-4">
                  চিকিৎসকের গুরুত্বপূর্ণ উপদেশাবলী (Important Advice)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start font-sans">
                    <div className="w-5 h-5 rounded-full bg-brand-green/8 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm text-primary-dark/85 leading-relaxed">
                      <strong>সুগার পরিমাপ:</strong> প্রথমাবস্থায় সপ্তাহে ২ বার খালি পেটে Blood Sugar পরীক্ষা করবেন এবং ডায়েরিতে লিখে রাখবেন।
                    </p>
                  </div>

                  <div className="flex gap-3 items-start font-sans">
                    <div className="w-5 h-5 rounded-full bg-brand-green/8 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm text-primary-dark/85 leading-relaxed">
                      <strong>রাসায়নিক ঔষধ পরিহার:</strong> D-Cure Plus নিয়মতান্ত্রিক ব্যবহার করে Blood Sugar এর মাত্রা লক্ষ্য করে ক্রমান্বয়ে চিকিৎসকের পরামর্শ অনুযায়ী কৃত্রিম Insulin ও Antidiabetic রাসায়নিক ঔষধ সমূহ পরিহার করবেন।
                    </p>
                  </div>

                  <div className="flex gap-3 items-start font-sans">
                    <div className="w-5 h-5 rounded-full bg-brand-green/8 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm text-primary-dark/85 leading-relaxed">
                      <strong>ব্যায়াম ও কায়িক পরিশ্রম:</strong> প্রতিদিন কমপক্ষে ৩০ মিনিট শরীর থেকে ঘাম ঝরানো মাঝারি বা ভারী শারীরিক ব্যায়াম / হাঁটাচলা করবেন।
                    </p>
                  </div>

                  <div className="flex gap-3 items-start font-sans">
                    <div className="w-5 h-5 rounded-full bg-brand-green/8 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm text-primary-dark/85 leading-relaxed">
                      <strong>খাদ্য নিয়ন্ত্রণ:</strong> Diet Chart অনুযায়ী পরিমিত ও পুষ্টিকর খাদ্য গ্রহণ করুন এবং প্রয়োজনের অতিরিক্ত যেকোনো শর্করা ও ভাজা খাদ্য পরিহার করুন।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom order button to drive conversion */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="pt-10 flex justify-center"
          >
            <button
              onClick={() => {
                const el = document.getElementById('checkout');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center bg-brand-green hover:bg-primary-medium text-white px-8 py-3.5 rounded-xl font-display font-bold text-base transition-all duration-300 cursor-pointer shadow-lg hover:shadow-brand-green/20 hover:-translate-y-0.5 transform active:scale-98"
            >
              নিরাপদ ইউনানী ফর্মুলা D-CURE Plus এখনই অর্ডার করুন
              <ShoppingCart className="ml-2 w-5 h-5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
