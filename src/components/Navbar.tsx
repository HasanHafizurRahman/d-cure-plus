import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-primary-dark/10 shadow-xs">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center cursor-pointer font-display font-bold text-2xl text-primary-dark tracking-tight"
            id="nav-logo"
          >
            D-CURE <span className="text-brand-green ml-1 font-sans">Plus</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-display">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-primary-dark hover:text-brand-green transition-colors font-medium text-sm cursor-pointer"
              id="nav-home"
            >
              হোম
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-primary-dark hover:text-brand-green transition-colors font-medium text-sm cursor-pointer"
              id="nav-benefits"
            >
              উপকারিতা
            </button>
            <button 
              onClick={() => scrollToSection('video')} 
              className="text-primary-dark hover:text-brand-green transition-colors font-medium text-sm cursor-pointer"
              id="nav-video"
            >
              ভিডিও
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-primary-dark hover:text-brand-green transition-colors font-medium text-sm cursor-pointer"
              id="nav-reviews"
            >
              রিভিউ
            </button>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('checkout')}
              className="flex items-center bg-primary-dark hover:bg-primary-medium text-white px-5 py-2.5 rounded-md font-display font-semibold text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              id="nav-order-btn"
            >
              <ShoppingCart size={16} className="mr-2" />
              অর্ডার করুন
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark hover:text-brand-green p-2 cursor-pointer"
              id="nav-mobile-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t border-primary-dark/10 shadow-lg font-display">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-primary-dark hover:bg-white hover:text-brand-green transition-colors cursor-pointer"
              id="mobile-nav-hero"
            >
              হোম
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-primary-dark hover:bg-white hover:text-brand-green transition-colors cursor-pointer"
              id="mobile-nav-benefits"
            >
              উপকারিতা
            </button>
            <button
              onClick={() => scrollToSection('video')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-primary-dark hover:bg-white hover:text-brand-green transition-colors cursor-pointer"
              id="mobile-nav-video"
            >
              ভিডিও
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-primary-dark hover:bg-white hover:text-brand-green transition-colors cursor-pointer"
              id="mobile-nav-reviews"
            >
              রিভিউ
            </button>
            <div className="pt-2 px-3">
              <button
                onClick={() => scrollToSection('checkout')}
                className="w-full flex justify-center items-center bg-primary-dark hover:bg-primary-medium text-white px-4 py-3 rounded-md font-semibold text-base transition-colors cursor-pointer"
                id="mobile-nav-order"
              >
                <ShoppingCart size={18} className="mr-2" />
                অর্ডার করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
