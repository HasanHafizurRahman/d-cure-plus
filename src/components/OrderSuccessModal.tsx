import { CheckCircle, Calendar, Phone, Package, MapPin, Truck, HelpCircle, X } from 'lucide-react';
import { OrderDetails } from '../types';
import { motion } from 'motion/react';

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export default function OrderSuccessModal({ order, onClose }: OrderSuccessModalProps) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Confetti Accent / Header */}
        <div className="bg-[#003520] p-6 text-center text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-1.5 rounded-full cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
          
          <div className="w-16 h-16 bg-white/20 rounded-full flex justify-center items-center mx-auto border-2 border-white/20 mb-4 animate-bounce">
            <CheckCircle size={36} className="text-accent-gold" />
          </div>
          
          <h3 className="text-2xl font-display font-bold">অর্ডারটি সফল হয়েছে!</h3>
          <p className="text-xs text-white/80 font-sans mt-1">
            আপনার অর্ডারটি সফলভাবে রিসিভ করা হয়েছে। খুব শীঘ্রই আমাদের প্রতিনিধি কল করে কনফার্ম করবেন।
          </p>
        </div>

        {/* Packing / Tracking flow bar */}
        <div className="p-6 bg-[#f7faf8] border-b border-slate-100 text-center bangla-text">
          <h4 className="text-sm font-display font-bold text-primary-dark mb-4 text-left">
            অর্ডার ট্র্যাকিং স্ট্যাটাস
          </h4>
          
          <div className="flex justify-between items-center relative max-w-md mx-auto py-2">
            
            {/* Horizontal progress background lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 -z-5"></div>
            <div className="absolute top-1/2 left-0 right-1/2 h-1 bg-brand-green -translate-y-1/2 -z-5"></div>

            {/* Step 1: Received */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-brand-green text-white flex justify-center items-center text-xs font-bold scale-110 shadow-xs ring-4 ring-brand-green/20">
                ১
              </div>
              <span className="text-[10px] sm:text-xs font-display font-bold text-brand-green mt-2">রিসিভড</span>
            </div>

            {/* Step 2: Packing (current in-progress step) */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white text-brand-green border-2 border-brand-green flex justify-center items-center text-xs font-bold shadow-xs animate-pulse ring-4 ring-slate-100">
                ২
              </div>
              <span className="text-[10px] sm:text-xs font-display font-semibold text-primary-dark mt-2">প্যাকিং চলছে</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white text-slate-400 border-2 border-slate-200 flex justify-center items-center text-xs font-bold">
                ৩
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-2">শিপিং</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white text-slate-400 border-2 border-slate-200 flex justify-center items-center text-xs font-bold">
                ৪
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-2">ডেলিভারড</span>
            </div>

          </div>
        </div>

        {/* Invoice Summary Details */}
        <div className="p-6 space-y-4 max-h-[350px] overflow-y-auto bangla-text" id="invoice-details-container">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100 text-xs text-slate-500 font-sans">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              তারিখ: {order.orderDate}
            </span>
            <span className="bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-sm font-semibold">
              অর্ডার আইডি: {order.id}
            </span>
          </div>

          <div className="space-y-3 font-display">
            {/* Customer Details */}
            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">গ্রাহকের নাম:</div>
              <div className="col-span-8 font-bold text-left">{order.customerName}</div>
            </div>

            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">মোবাইল নম্বর:</div>
              <div className="col-span-8 font-bold text-left flex items-center gap-1.5">
                <Phone size={13} className="text-brand-green" />
                {order.phoneNumber}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">পূর্ণ ঠিকানা:</div>
              <div className="col-span-8 font-semibold text-left flex items-start gap-1">
                <MapPin size={13} className="text-brand-green mt-1 shrink-0" />
                {order.address}
              </div>
            </div>

            {/* Bill Summary */}
            <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-150 space-y-2.5">
              <div className="flex justify-between text-xs text-slate-600 font-sans">
                <span className="flex items-center gap-1">
                  <Package size={13} />
                  প্যাকেজ: {order.packageName}
                </span>
                <span className="font-semibold text-[#003520]">৳{order.packagePrice}</span>
              </div>

              <div className="flex justify-between text-xs text-slate-600 font-sans">
                <span className="flex items-center gap-1">
                  <Truck size={13} />
                  ডেলিভারি চার্জ: {order.deliveryArea === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'}
                </span>
                <span className="font-semibold text-[#003520]">৳{order.deliveryCharge}</span>
              </div>

              <div className="border-t border-slate-200 pt-2.5 flex justify-between items-center text-sm font-bold text-[#003520]">
                <span>সর্বমোট বিল:</span>
                <span className="text-lg text-brand-green">৳{order.totalCost}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-center select-none">
          <div className="text-[10px] text-slate-500 font-sans">
            * ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা পরিশোধ করুন)
          </div>
          <button
            onClick={onClose}
            className="bg-brand-green hover:bg-[#125136] text-white font-display font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
            id="order-success-close-btn"
          >
            ঠিক আছে
          </button>
        </div>

      </motion.div>
    </div>
  );
}
