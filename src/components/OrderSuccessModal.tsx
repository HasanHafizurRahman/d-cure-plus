import { CheckCircle, Calendar, Phone, Package, MapPin, Truck, X, ShoppingBag, CreditCard, Info } from 'lucide-react';
import { OrderDetails } from '../types';
import { motion } from 'motion/react';

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export default function OrderSuccessModal({ order, onClose }: OrderSuccessModalProps) {
  if (!order) return null;

  // Format creation date
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (e) {
      return dateStr;
    }
  };

  // Determine delivery details based on thana's inside_dhaka key
  const insideDhakaStr = String(order.thana.inside_dhaka ?? '').toLowerCase();
  const isInsideDhaka = insideDhakaStr === 'true' || insideDhakaStr === '1' || order.thana.inside_dhaka === true || order.thana.inside_dhaka === 1;
  const deliveryCharge = isInsideDhaka ? 60 : 130;
  const totalAmount = order.total_amount;
  const grandTotal = totalAmount + deliveryCharge;

  // Map backend status to tracking steps
  // Statuses usually: 'pending', 'processing', 'shipped', 'completed'
  const status = (order.status || 'pending').toLowerCase();
  
  const step1Active = true; // Received is always active
  const step2Active = status === 'processing' || status === 'shipped' || status === 'completed';
  const step3Active = status === 'shipped' || status === 'completed';
  const step4Active = status === 'completed' || status === 'delivered';

  const getStatusBadgeClass = (statusStr: string) => {
    switch (statusStr.toLowerCase()) {
      case 'pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'completed':
      case 'delivered':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getStatusTextBn = (statusStr: string) => {
    switch (statusStr.toLowerCase()) {
      case 'pending':
        return 'অপেক্ষমাণ (Pending)';
      case 'processing':
        return 'প্রসেসিং চলছে (Processing)';
      case 'shipped':
        return 'শিপড (Shipped)';
      case 'completed':
      case 'delivered':
        return 'ডেলিভারড (Delivered)';
      default:
        return statusStr;
    }
  };

  const getPaymentMethodBn = (method: string) => {
    if (method.toLowerCase() === 'cash on delivery') {
      return 'ক্যাশ অন ডেলিভারি';
    }
    return method;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Section */}
        <div className="bg-[#003520] p-6 text-center text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-1.5 rounded-full cursor-pointer transition-colors"
            aria-label="Close modal"
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

        {/* Order Status Tracking Flow Bar */}
        <div className="p-6 bg-[#f7faf8] border-b border-slate-100 text-center bangla-text">
          <h4 className="text-sm font-display font-bold text-primary-dark mb-4 text-left">
            অর্ডার ট্র্যাকিং স্ট্যাটাস
          </h4>
          
          <div className="flex justify-between items-center relative max-w-md mx-auto py-2">
            
            {/* Horizontal progress background lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 -z-5"></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-green -translate-y-1/2 -z-5 transition-all duration-500"
              style={{
                width: step4Active ? '100%' : step3Active ? '66.6%' : step2Active ? '33.3%' : '0%'
              }}
            ></div>

            {/* Step 1: Received */}
            <div className="flex flex-col items-center z-10">
              <div className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-bold transition-all duration-300 ${
                step1Active 
                  ? 'bg-brand-green text-white ring-4 ring-brand-green/20' 
                  : 'bg-white text-slate-450 border-2 border-slate-200'
              }`}>
                ১
              </div>
              <span className={`text-[10px] sm:text-xs font-display font-bold mt-2 ${step1Active ? 'text-brand-green' : 'text-slate-400'}`}>রিসিভড</span>
            </div>

            {/* Step 2: Packing / Processing */}
            <div className="flex flex-col items-center z-10">
              <div className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-bold transition-all duration-300 ${
                step2Active 
                  ? 'bg-brand-green text-white ring-4 ring-brand-green/20' 
                  : status === 'pending'
                    ? 'bg-white text-brand-green border-2 border-brand-green animate-pulse'
                    : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}>
                ২
              </div>
              <span className={`text-[10px] sm:text-xs font-display mt-2 ${
                step2Active ? 'text-brand-green font-bold' : status === 'pending' ? 'text-brand-green font-semibold' : 'text-slate-450'
              }`}>প্যাকিং চলছে</span>
            </div>

            {/* Step 3: Shipped */}
            <div className="flex flex-col items-center z-10">
              <div className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-bold transition-all duration-300 ${
                step3Active 
                  ? 'bg-brand-green text-white ring-4 ring-brand-green/20' 
                  : status === 'processing'
                    ? 'bg-white text-brand-green border-2 border-brand-green animate-pulse'
                    : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}>
                ৩
              </div>
              <span className={`text-[10px] sm:text-xs mt-2 ${
                step3Active ? 'text-brand-green font-bold' : status === 'processing' ? 'text-brand-green font-semibold' : 'text-slate-450'
              }`}>শিপিং</span>
            </div>

            {/* Step 4: Delivered */}
            <div className="flex flex-col items-center z-10">
              <div className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-bold transition-all duration-300 ${
                step4Active 
                  ? 'bg-brand-green text-white ring-4 ring-brand-green/20' 
                  : status === 'shipped'
                    ? 'bg-white text-brand-green border-2 border-brand-green animate-pulse'
                    : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}>
                ৪
              </div>
              <span className={`text-[10px] sm:text-xs mt-2 ${
                step4Active ? 'text-brand-green font-bold' : status === 'shipped' ? 'text-brand-green font-semibold' : 'text-slate-450'
              }`}>ডেলিভারড</span>
            </div>

          </div>
        </div>

        {/* Invoice Summary Details */}
        <div className="p-6 space-y-4 max-h-[350px] overflow-y-auto bangla-text" id="invoice-details-container">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-2 border-b border-slate-100 gap-2 text-xs text-slate-500 font-sans">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              তারিখ: {formatDate(order.created_at)}
            </span>
            <span className="bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-sm font-semibold sm:self-auto self-start">
              অর্ডার আইডি: {order.order_number}
            </span>
          </div>

          <div className="space-y-3 font-display">
            {/* Customer Details */}
            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">গ্রাহকের নাম:</div>
              <div className="col-span-8 font-bold text-left">{order.customer_name}</div>
            </div>

            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">মোবাইল নম্বর:</div>
              <div className="col-span-8 font-bold text-left flex items-center gap-1.5">
                <Phone size={13} className="text-brand-green" />
                {order.customer_phone}
              </div>
            </div>

            {order.alternative_phone && (
              <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
                <div className="col-span-4 text-slate-500 font-semibold">বিকল্প মোবাইল:</div>
                <div className="col-span-8 font-bold text-left flex items-center gap-1.5">
                  <Phone size={13} className="text-brand-green" />
                  {order.alternative_phone}
                </div>
              </div>
            )}

            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">ডেলিভারি ঠিকানা:</div>
              <div className="col-span-8 font-semibold text-left flex items-start gap-1">
                <MapPin size={13} className="text-brand-green mt-1 shrink-0" />
                {order.shipping_address}, {order.thana.name_bn}, {order.district.name_bn}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">পেমেন্ট পদ্ধতি:</div>
              <div className="col-span-8 font-bold text-left flex items-center gap-1.5">
                <CreditCard size={13} className="text-brand-green" />
                {getPaymentMethodBn(order.payment_method)}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 text-sm text-[#003520] py-1 border-b border-slate-50">
              <div className="col-span-4 text-slate-500 font-semibold">অর্ডার স্ট্যাটাস:</div>
              <div className="col-span-8 font-bold text-left">
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadgeClass(order.status)}`}>
                  {getStatusTextBn(order.status)}
                </span>
              </div>
            </div>

            {/* Bill Summary */}
            <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-150 space-y-2.5">
              <div className="flex justify-between text-xs text-slate-600 font-sans">
                <span className="flex items-center gap-1">
                  <Package size={13} />
                  প্যাকেজ: {order.product.name} ({order.product.package_details})
                </span>
                <span className="font-semibold text-[#003520]">
                  ৳{order.unit_price} x {order.quantity}
                </span>
              </div>

              <div className="flex justify-between text-xs text-slate-600 font-sans">
                <span className="flex items-center gap-1">
                  <Truck size={13} />
                  ডেলিভারি চার্জ ({order.district.name_bn}):
                </span>
                <span className="font-semibold text-[#003520]">৳{deliveryCharge}</span>
              </div>

              <div className="border-t border-slate-200 pt-2.5 flex justify-between items-center text-sm font-bold text-[#003520]">
                <span>সর্বমোট বিল:</span>
                <span className="text-lg text-brand-green">৳{grandTotal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-center select-none">
          <div className="text-[10px] text-slate-500 font-sans flex items-center gap-1">
            <Info size={11} className="text-brand-green" />
            <span>ক্যাশ অন ডেলিভারি (পণ্য বুঝে পেয়ে টাকা পরিশোধ করুন)</span>
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
