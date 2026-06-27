import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItems } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default open first item like in screenshot

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 md:py-24 bg-gradient-to-b from-[#fdfbe9]/60 via-[#f3f9f4] to-white border-t border-slate-200">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">
        
        {/* Header Titles */}
        <div className="max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark tracking-tight">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p className="text-sm sm:text-base text-primary-dark/80 font-sans">
            D-CURE Plus সম্পর্কে আপনার মনে থাকা সাধারণ কিছু প্রশ্নের উত্তর
          </p>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full mt-2"></div>
        </div>

        {/* FAQs List Accordion */}
        <div className="max-w-(--spacing-container-max) mx-auto space-y-4 text-left" id="faq-accordions">
          {faqItems.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
                id={`faq-card-${faq.id}`}
              >
                {/* Header Toggle Row */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-base text-primary-dark hover:text-brand-green transition-colors focus:outline-none cursor-pointer select-none"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle size={18} className="text-brand-green shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-primary-dark/60 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-brand-green' : ''
                    }`}
                  />
                </button>

                {/* Answer Collapse Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50">
                        <p className="text-sm sm:text-base text-primary-dark/85 font-sans leading-relaxed bangla-text">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
