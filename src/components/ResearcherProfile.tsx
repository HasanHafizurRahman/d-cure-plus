import { motion } from 'motion/react';
import doctorImg from '../assets/doctor.png';

export default function ResearcherProfile() {
  return (
    <section id="researcher" className="py-16 md:py-24 bg-[#f2f5f3]">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center" id="researcher-image-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-md overflow-hidden flex justify-center"
            >
              <img
                src={doctorImg}
                alt="গবেষক ডা. মুহাম্মদ আবদুল হক"
                className="w-full h-auto object-contain max-h-[500px]"
                id="researcher-img"
              />
            </motion.div>
          </div>

          {/* Text/Content Column */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-6 text-left bangla-text" id="researcher-content">
            
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-green tracking-tight text-center lg:text-left" id="researcher-title">
                গবেষক পরিচিতি
              </h2>
              <div className="w-16 h-1 bg-brand-green/30 mx-auto lg:mx-0 rounded-full"></div>
            </motion.div>

            {/* Doctor Name */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl font-display font-bold text-primary-dark text-center lg:text-left"
              id="researcher-name"
            >
              ডা. মুহাম্মদ আবদুল হক
            </motion.h3>

            {/* Biography Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-primary-dark/90 text-sm sm:text-base leading-relaxed font-sans"
              id="researcher-bio"
            >
              <p>
                বিশিষ্ট ডায়াবেটিস ও আয়ুর্বেদ গবেষক ডা. মুহাম্মদ আবদুল হক ঢাকা বিশ্ববিদ্যালয়ের অধিভুক্ত Govt. Unani & Ayurvedic Medical College and Hospital থেকে বি.এ.এম.এস কোর্স সম্পন্ন করার পর বাংলাদেশ ইনস্টিটিউট অব পাবলিক হেলথ এনভায়রনমেন্ট অ্যান্ড রিসার্চ (BIPHER) থেকে আয়ুর্বেদ মেডিসিনে পোস্ট গ্রাজুয়েট ডিপ্লোমা ডিগ্রি লাভ করে ডায়াবেটিস – চর্ম – যৌন রোগে Dissertation সম্পন্ন করেন। তিনি Bangladesh Agricultural University-র Pharmacology Department-এ আয়ুর্বেদ মেডিসিন থেকে এই প্রথম এম.এস ডিগ্রি অর্জন করেন। ২০০৪ সালে Rat Model-এ Antidiabetic ভেষজ ওষুধ প্রয়োগ করে এম.এস থিসিস সম্পন্ন করেন। তিনি RIB ও BFRI-এর যৌথ প্রকল্পের অধীনে Research & Scientific Officer হিসেবে কর্মরত ছিলেন এবং International Journal-এ তার ছয়টি গবেষণাপত্র প্রকাশিত হয়েছে।
              </p>
              <p>
                ডা. মুহাম্মদ আবদুল হক বারডেম ও সুইজারল্যান্ডের ভেষজ বৈজ্ঞানিকদের সমন্বয়ে আয়োজিত ইন্টারন্যাশনাল "অ্যানরাপ" সেমিনারে তার গবেষণার মূল বিষয়সমূহ উপস্থাপন করেন। দীর্ঘ গবেষণায় তিনি লক্ষ্য করেন যে, সঠিক ভেষজ ফর্মুলেশনের মাধ্যমে অগ্ন্যাশয়ের ক্ষতিগ্রস্ত বিটা সেলকে সুস্থ করে ইনসুলিন উৎপাদন স্বাভাবিক রাখা সম্ভব। তার এই সফল গবেষণার ধারাবাহিকতায় এবং রোগীদের অনুপ্রেরণায় তিনি "Cedra" Diabetes Consultation Centre নামীয় চিকিৎসা ও গবেষণা প্রকল্পের শুভ সূচনা করেন। আলহামদুলিল্লাহ, ইতিমধ্যে অসংখ্য রোগী এই সেবার মাধ্যমে উপকৃত হয়েছেন।
              </p>
            </motion.div>

            {/* Stats Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center lg:justify-start items-center gap-8 pt-4"
              id="researcher-stats"
            >
              {/* Stat 1 */}
              <div className="text-center lg:text-left flex flex-col">
                <span className="text-xl sm:text-2xl font-display font-bold text-primary-dark">২০+ বছর</span>
                <span className="text-xs sm:text-sm text-primary-dark/70 font-sans mt-0.5">অভিজ্ঞতা</span>
              </div>
              
              {/* Divider */}
              <div className="h-10 w-[1px] bg-primary-dark/20"></div>
              
              {/* Stat 2 */}
              <div className="text-center lg:text-left flex flex-col">
                <span className="text-xl sm:text-2xl font-display font-bold text-primary-dark">৫০০০+</span>
                <span className="text-xs sm:text-sm text-primary-dark/70 font-sans mt-0.5">সফল রোগী</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
