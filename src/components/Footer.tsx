import { Shield, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-primary-dark/80 font-display text-sm py-12 bangla-text">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-200 pb-8">
          {/* Logo on Left */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start space-y-2">
            <div 
              onClick={() => scrollToSection('hero')}
              className="font-bold text-2xl text-primary-dark tracking-tight cursor-pointer"
            >
              D-CURE <span className="text-brand-green ml-1 font-sans">Plus</span>
            </div>
            <p className="text-xs text-primary-dark/65 max-w-xs font-sans text-left">
              প্রাচীন ইউনানী ঐতিহ্যের উপর ভিত্তি করে তৈরি একটি আধুনিক ১০০% নিরাপদ ডায়াবেটিস স্বাস্থ্য সমাধান।
            </p>
          </div>

          {/* Quick Legal Links in central-right */}
          <div className="col-span-1 md:col-span-8 flex flex-col sm:flex-row sm:justify-end items-start sm:items-center gap-6 text-sm">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="hover:text-brand-green transition-colors cursor-pointer"
            >
              উপকারিতা
            </button>
            <span className="hidden sm:inline text-slate-300">|</span>
            <button 
              onClick={() => scrollToSection('video')}
              className="hover:text-brand-green transition-colors cursor-pointer"
            >
              যোগাযোগ ও রিভিওস
            </button>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a 
              href="#checkout" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('checkout');
              }}
              className="hover:text-brand-green font-bold transition-colors text-brand-green flex items-center gap-1.5"
            >
              আজই অর্ডার করুন
              <Sparkles size={14} className="text-accent-dark-gold animate-pulse" />
            </a>
          </div>
        </div>

        {/* Lowest level copyrights */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs font-sans text-primary-dark/65">
          <div className="text-left font-display">
            © {currentYear} ডি-কিউর প্লাস। সর্বস্বত্ব সংরক্ষিত। এটি একটি প্রাচীন ইউনানী অনুমোদিত স্বাস্থ্য ফর্মুলা।
          </div>

          <div className="flex items-center gap-4 text-xs font-display">
            <span className="flex items-center gap-1">
              <Shield size={12} className="text-brand-green" />
              ১০০% নিরাপদ সেবন
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
