import { Eye, Shield, Package, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: "why-1",
      icon: <Eye className="text-brand-green w-6 h-6" />,
      title: "শর্করা নিয়ন্ত্রণ",
      description: "রক্তে গ্লুকোজের মাত্রা স্বাভাবিক রাখতে এটি অত্যন্ত কার্যকর ভূমিকা পালন করে।"
    },
    {
      id: "why-2",
      icon: <Shield className="text-[#a18100] w-6 h-6" />,
      title: "ইউনানী ফর্মুলা",
      description: "Habbe ziabit 500 mg - প্রাচীন ইউনানী শাস্ত্রের একটি পরীক্ষিত এবং চিকিৎসকদের দ্বারা বিশ্বস্ত ঔষধ।"
    },
    {
      id: "why-3",
      icon: <Package className="text-primary-dark w-6 h-6" />,
      title: "১২০ ক্যাপসুলের প্যাক",
      description: "মূল্য: ৳১২০০ (১২০ ক্যাপসুল)। প্রতিটি বক্সে রয়েছে ১২০টি ক্যাপসুল, যা দীর্ঘস্থায়ী ব্যবহারের জন্য উপযুক্ত এবং সাশ্রয়ী।"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">
        
        {/* Title Group */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark tracking-tight">
            কেন D-CURE Plus বেছে নিবেন?
          </h2>
          <div className="w-16 h-1.5 bg-brand-green mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-primary-dark/80 font-sans max-w-xl mx-auto">
            উচ্চমানের ভেষজ উপাদানের মিশ্রণে তৈরি এই ক্যাপসুল আপনার সুস্থ জীবনের একমাত্র নির্ভরযোগ্য সঙ্গী।
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-8 bg-slate-50 border border-slate-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-brand-green group relative overflow-hidden text-center cursor-pointer"
              id={card.id}
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-accent-gold transition-colors duration-300"></div>
              
              {/* Icon Container */}
              <div className="w-14 h-14 bg-white shadow-xs rounded-full flex justify-center items-center border border-slate-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-display font-bold text-primary-dark mb-4">
                {card.title}
              </h3>
              <p className="text-primary-dark/80 text-sm leading-relaxed font-sans max-w-xs mx-auto">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
