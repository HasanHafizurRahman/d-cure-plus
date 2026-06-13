import { Eye, Shield, Package } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: "why-1",
      num: "01",
      icon: <Eye className="w-6 h-6 transition-colors duration-300" />,
      title: "শর্করা নিয়ন্ত্রণ",
      description: "রক্তে গ্লুকোজের মাত্রা স্বাভাবিক রাখতে এটি অত্যন্ত কার্যকর ভূমিকা পালন করে।",
      theme: {
        iconBg: "bg-brand-green/8 border-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white",
        borderHover: "hover:border-brand-green/35",
        barColor: "group-hover:bg-brand-green"
      }
    },
    {
      id: "why-2",
      num: "02",
      icon: <Shield className="w-6 h-6 transition-colors duration-300" />,
      title: "ইউনানী ফর্মুলা",
      description: "Habbe ziabit 500 mg - প্রাচীন ইউনানী শাস্ত্রের একটি পরীক্ষিত এবং চিকিৎসকদের দ্বারা বিশ্বস্ত ঔষধ।",
      theme: {
        iconBg: "bg-accent-gold/15 border-accent-gold/20 text-accent-dark-gold group-hover:bg-accent-gold group-hover:text-accent-dark-gold",
        borderHover: "hover:border-accent-gold/45",
        barColor: "group-hover:bg-accent-gold"
      }
    },
    {
      id: "why-3",
      num: "03",
      icon: <Package className="w-6 h-6 transition-colors duration-300" />,
      title: "১২০ ক্যাপসুলের প্যাক",
      description: "মূল্য: ৳১২০০ (১২০ ক্যাপসুল)। প্রতিটি বক্সে রয়েছে ১২০টি ক্যাপসুল, যা দীর্ঘস্থায়ী ব্যবহারের জন্য উপযুক্ত এবং সাশ্রয়ী।",
      theme: {
        iconBg: "bg-primary-dark/8 border-primary-dark/10 text-primary-dark group-hover:bg-primary-dark group-hover:text-white",
        borderHover: "hover:border-primary-dark/35",
        barColor: "group-hover:bg-primary-dark"
      }
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-green/3 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent-gold/3 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">
        
        {/* Title Group */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-primary-dark tracking-tight leading-normal">
            কেন D-CURE Plus বেছে নিবেন?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green via-accent-gold to-brand-green mx-auto rounded-full mt-3"></div>
          <p className="text-base sm:text-lg text-primary-dark/75 font-sans max-w-xl mx-auto">
            উচ্চমানের ভেষজ উপাদানের মিশ্রণে তৈরি এই ক্যাপসুল আপনার সুস্থ জীবনের একমাত্র নির্ভরযোগ্য সঙ্গী।
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col items-center p-8 bg-gradient-to-br from-white to-[#fcfdfc] border border-slate-150 rounded-2xl transition-all duration-300 hover:shadow-xl group relative overflow-hidden text-center cursor-pointer ${card.theme.borderHover}`}
              id={card.id}
            >
              {/* Background numbers */}
              <span className="absolute top-4 right-6 text-7xl sm:text-8xl font-black font-sans text-primary-dark/[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:scale-105">
                {card.num}
              </span>

              {/* Icon Container with dynamic state */}
              <div className={`w-14 h-14 rounded-2xl flex justify-center items-center border mb-6 transition-all duration-300 group-hover:scale-110 shadow-xs ${card.theme.iconBg}`}>
                {card.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-display font-bold text-primary-dark mb-4 z-10">
                {card.title}
              </h3>
              <p className="text-primary-dark/75 text-sm leading-relaxed font-sans max-w-xs mx-auto z-10">
                {card.description}
              </p>

              {/* Hover Bottom Accent Indicator Bar */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-transparent transition-colors duration-300 ${card.theme.barColor}`}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
