import { Sparkles, ArrowRight } from 'lucide-react';
import { PackageOption, PackageId } from '../types';
import { motion } from 'motion/react';
import bottleImg from '../assets/bottle.png';

interface PricingOffersProps {
  onSelectPackage: (pkgId: PackageId) => void;
  selectedPkgId: PackageId;
  packages: PackageOption[];
}

const getImageUrl = (imagePath?: string) => {
  if (!imagePath) return bottleImg;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  if (imagePath.startsWith('assets/')) return bottleImg;
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://temp-api.cedrabd.com';
  return `${baseUrl}/${imagePath}`;
};

export default function PricingOffers({ onSelectPackage, selectedPkgId, packages }: PricingOffersProps) {

  const handleSelect = (pkgId: PackageId) => {
    onSelectPackage(pkgId);
    const el = document.getElementById('checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-10 md:py-24 bg-gradient-to-br from-white via-[#e8f5e9]/30 to-[#fdfbe9]/80 border-t border-slate-200">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">

        {/* Section Title */}
        <div className="max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark tracking-tight">
            পণ্যের মূল্য এবং অফার
          </h2>
          <p className="text-sm sm:text-base text-primary-dark/80 font-sans">
            আপনার প্রয়োজন অনুযায়ী সেরা প্যাকেজটি বেছে নিয়ে রক্তে শর্করা নিয়ন্ত্রণ শুরু করুন
          </p>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full mt-2"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">

          {packages.map((pkg) => {
            const isSelected = selectedPkgId === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSelect(pkg.id as PackageId)}
                className={`relative bg-white border rounded-2xl p-6 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xs hover:shadow-lg ${pkg.isPopular
                    ? 'border-accent-gold ring-2 ring-accent-gold/20'
                    : 'border-slate-200 hover:border-slate-350'
                  } ${isSelected ? 'ring-2 ring-brand-green border-brand-green' : ''}`}
                id={`price-card-${pkg.id}`}
              >
                {/* Popular Corner Ribbon flag */}
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none">
                    <div className="absolute top-4 -right-10 bg-accent-gold text-accent-dark-gold text-[10px] sm:text-xs font-display font-bold py-1.5 px-10 text-center uppercase tracking-wider transform rotate-45 shadow-sm">
                      সেরা অফার
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="space-y-6 text-center">

                  {/* Product Bottles Graphic */}
                  <div className="flex justify-center items-center py-4">
                    {(pkg.box_quantity === 2 || pkg.id === 'double') ? (
                      /* 2 Real Bottle Images representing double deal */
                      <div className="relative h-36 flex items-end justify-center pb-1 select-none">
                        {/* Left/Back Bottle */}
                        <img
                          src={pkg.image_path ? getImageUrl(pkg.image_path) : bottleImg}
                          alt={`${pkg.title} Back`}
                          onError={(e) => { e.currentTarget.src = bottleImg; }}
                          className="h-26 w-auto object-contain transform -rotate-12 translate-x-4 opacity-85 filter blur-[0.3px] drop-shadow-sm"
                        />
                        {/* Right/Front Bottle */}
                        <img
                          src={pkg.image_path ? getImageUrl(pkg.image_path) : bottleImg}
                          alt={`${pkg.title} Front`}
                          onError={(e) => { e.currentTarget.src = bottleImg; }}
                          className="h-32 w-auto object-contain relative z-10 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (pkg.box_quantity === 3 || pkg.id === 'triple') ? (
                      /* 3 Real Bottle Images representing triple/full course deal */
                      <div className="relative h-36 flex items-end justify-center pb-1 select-none">
                        {/* Left/Back Bottle */}
                        <img
                          src={pkg.image_path ? getImageUrl(pkg.image_path) : bottleImg}
                          alt={`${pkg.title} Left`}
                          onError={(e) => { e.currentTarget.src = bottleImg; }}
                          className="h-26 w-auto object-contain transform -rotate-12 translate-x-8 opacity-80 filter blur-[0.3px] drop-shadow-sm"
                        />
                        {/* Right/Back Bottle */}
                        <img
                          src={pkg.image_path ? getImageUrl(pkg.image_path) : bottleImg}
                          alt={`${pkg.title} Right`}
                          onError={(e) => { e.currentTarget.src = bottleImg; }}
                          className="h-26 w-auto object-contain transform rotate-12 -translate-x-8 opacity-80 filter blur-[0.3px] drop-shadow-sm"
                        />
                        {/* Center/Front Bottle */}
                        <img
                          src={pkg.image_path ? getImageUrl(pkg.image_path) : bottleImg}
                          alt={`${pkg.title} Center`}
                          onError={(e) => { e.currentTarget.src = bottleImg; }}
                          className="h-32 w-auto object-contain relative z-10 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      /* 1 Real Bottle Image */
                      <div className="relative h-36 flex items-center justify-center">
                        <img
                          src={pkg.image_path ? getImageUrl(pkg.image_path) : bottleImg}
                          alt={pkg.title}
                          onError={(e) => { e.currentTarget.src = bottleImg; }}
                          className="h-32 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-2">
                    {pkg.label && (
                      <span className="inline-block bg-[#003520]/5 text-[#003520] font-display text-[11px] font-bold px-3 py-1 rounded-full border border-[#003520]/10">
                        {pkg.label}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-primary-dark">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-primary-dark/60 font-sans">
                      {pkg.capsules}
                    </p>
                  </div>

                  {/* Price Area */}
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-brand-green">
                      ৳{pkg.price}
                    </div>
                    {pkg.savings && pkg.savings > 0 ? (
                      <div className="text-xs sm:text-sm text-primary-dark/70 font-sans flex items-center justify-center gap-1.5">
                        <span className="line-through text-brand-red font-display">৳{pkg.originalPrice}</span>
                        <span className="bg-brand-red/10 text-brand-red px-2 py-0.5 rounded-md font-semibold">
                          ৳{pkg.savings} সাশ্রয়!
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Bottom Order Button Trigger */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleSelect(pkg.id as PackageId)}
                    className={`w-full flex items-center justify-center py-3 rounded-md font-display font-bold text-sm transition-all duration-200 cursor-pointer ${pkg.isPopular
                        ? 'bg-primary-dark hover:bg-primary-medium text-white shadow-md'
                        : 'bg-white border border-primary-dark text-primary-dark hover:bg-slate-50'
                      }`}
                  >
                    প্যাকেজটি বেছে নিন
                    <ArrowRight size={16} className="ml-1.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
