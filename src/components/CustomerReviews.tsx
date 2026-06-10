import { Star, Quote } from 'lucide-react';
import { reviewItems } from '../data';
import { motion } from 'motion/react';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">
        
        {/* Title Block */}
        <div className="max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-brand-green text-xs font-bold uppercase tracking-wider font-sans">টেস্টিমোনিয়্যাল</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark tracking-tight">
            গ্রাহকদের মতামত
          </h2>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full mt-2"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewItems.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 border border-slate-200 p-8 rounded-xl relative shadow-xs flex flex-col justify-between text-left"
              id={review.id}
            >
              <div className="space-y-4">
                {/* 5 Star Stars component */}
                <div className="flex gap-1 text-accent-gold" id={`stars-${review.id}`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-current stroke-none" />
                  ))}
                </div>

                {/* Narrative content */}
                <p className="text-primary-dark/85 text-sm leading-relaxed font-sans relative z-10">
                  “{review.text}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-right">
                <span className="text-sm font-display font-bold text-primary-dark" id={`author-${review.id}`}>
                  — {review.name}
                </span>
                <span className="block text-[10px] text-brand-green font-sans mt-0.5 font-semibold">ভেরিফাইড ক্রেতা</span>
              </div>

              {/* Graphic background quotes mark */}
              <Quote size={48} className="absolute top-4 right-4 text-slate-200/50 -z-5" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
