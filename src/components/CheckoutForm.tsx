import { useState, useEffect, FormEvent } from 'react';
import { ShoppingCart, Smartphone, User, MapPin, CheckCircle, Package, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { packageOptions } from '../data';
import { OrderDetails, PackageId } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CheckoutFormProps {
  selectedPkgId: PackageId;
  setSelectedPkgId: (id: PackageId) => void;
  onSubmitOrder: (order: OrderDetails) => void;
}

export default function CheckoutForm({ selectedPkgId, setSelectedPkgId, onSubmitOrder }: CheckoutFormProps) {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryArea, setDeliveryArea] = useState<'inside' | 'outside'>('inside');
  const [errorMsg, setErrorMsg] = useState('');

  // Find selected package details
  const currentPackage = packageOptions.find(p => p.id === selectedPkgId) || packageOptions[2];

  // Delivery configuration
  const deliveryCharge = deliveryArea === 'inside' ? 60 : 130;
  const totalCost = currentPackage.price + deliveryCharge;

  // Clear errors when typing
  useEffect(() => {
    if (errorMsg) setErrorMsg('');
  }, [customerName, phoneNumber, address, selectedPkgId, deliveryArea]);

  const handleConfirmOrder = (e: FormEvent) => {
    e.preventDefault();

    // Check simple validations
    if (!customerName.trim()) {
      setErrorMsg('দুঃখিত, অনুগ্রহ করে আপনার সম্পূর্ণ নামটি বাংলা অথবা ইংরেজিতে লিখুন।');
      return;
    }

    if (!phoneNumber.trim()) {
      setErrorMsg('দুঃখিত, মোবাইল নম্বরটি দেওয়া আবশ্যক।');
      return;
    }

    // Basic Bangla Mobile number match
    const cleanPhone = phoneNumber.replace(/[-\s]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('দুঃখিত, অনুগ্রহ করে একটি সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন। d');
      return;
    }

    if (!address.trim()) {
      setErrorMsg('দুঃখিত, কুরিয়ার ডেলিভারির জন্য আপনার পূর্ণ ঠিকানাটি লিখুন।');
      return;
    }

    // Generate arbitrary beautiful order ID
    const generatedId = `DC-${Math.floor(100000 + Math.random() * 900000)}`;
    const today = new Date();
    const formattedDate = `${today.getDate()} June ${today.getFullYear()}`;

    const orderPayload: OrderDetails = {
      id: generatedId,
      packageName: currentPackage.title,
      packagePrice: currentPackage.price,
      customerName,
      phoneNumber: cleanPhone,
      address,
      deliveryArea,
      deliveryCharge,
      totalCost,
      orderDate: formattedDate,
      status: 'Processing'
    };

    onSubmitOrder(orderPayload);

    // Send order details to WhatsApp
    const message = `*নতুন অর্ডার তথ্য:*
--------------------
*অর্ডার আইডি:* ${generatedId}
*প্যাকেজ:* ${currentPackage.title}
*প্যাকেজ মূল্য:* ৳${currentPackage.price}
*গ্রাহকের নাম:* ${customerName}
*মোবাইল নম্বর:* ${cleanPhone}
*ঠিকানা:* ${address}
*ডেলিভারি এলাকা:* ${deliveryArea === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'}
*ডেলিভারি চার্জ:* ৳${deliveryCharge}
*সর্বমোট মূল্য:* ৳${totalCost}
--------------------`;

    const whatsappUrl = `https://wa.me/8801858643922?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset local state fields
    setCustomerName('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <section id="checkout" className="py-16 md:py-24 bg-gradient-to-b from-[#f7faf8] to-[#edf3ef] border-t border-slate-200 scroll-mt-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">

        {/* Title Details */}
        <div className="max-w-xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark tracking-tight">
            সরাসরি অর্ডার করুন
          </h2>
          <p className="text-sm sm:text-base text-primary-dark/80 font-sans">
            নিচের সহজ ফর্মটি পূরণ করে ২ মিনিটের মধ্যে আপনার বিশ্বস্ত অর্ডারটি নিশ্চিত করুন
          </p>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full mt-2"></div>
        </div>

        {/* Master Form Card wrapping Checkout */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg relative overflow-hidden" id="checkout-container-form">
          {/* Header indicator banner */}
          <div className="bg-[#003520] p-4 text-white font-display text-sm font-semibold flex items-center justify-center gap-1.5">
            <ShieldCheck size={18} className="text-accent-gold" />
            <span>১০০% ক্যাশ অন ডেলিভারি (পণ্য হাতে বুঝে পেয়ে টাকা পরিশোধ করবেন)</span>
          </div>

          <form onSubmit={handleConfirmOrder} className="p-6 md:p-10 space-y-8 text-left">

            {/* Step 1: Choose Package Option */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-dark text-white text-xs font-bold flex justify-center items-center font-sans">১</span>
                <h4 className="text-base sm:text-lg font-display font-bold text-primary-dark">প্যাকেজ নির্বাচন করুন</h4>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {packageOptions.map((pkg) => {
                  const isChecked = selectedPkgId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPkgId(pkg.id as PackageId)}
                      className={`relative flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer select-none ${isChecked
                          ? 'border-brand-green bg-brand-green/5'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      id={`radio-${pkg.id}`}
                    >
                      {/* Left: Input + label */}
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isChecked ? 'border-brand-green bg-brand-green' : 'border-slate-300 bg-white'
                          }`}>
                          {isChecked && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                        </div>
                        <div className="font-display">
                          <span className="font-bold text-primary-dark block text-sm sm:text-base">{pkg.title}</span>
                          <span className="text-xs text-primary-dark/70 font-sans">{pkg.label}</span>
                        </div>
                      </div>

                      {/* Right: Price */}
                      <div className="text-right font-display text-base sm:text-lg font-bold text-[#003520]">
                        ৳{pkg.price}
                        {pkg.savings && (
                          <span className="block text-[10px] bg-brand-red text-white font-sans px-1.5 py-0.5 rounded-md ml-1.5 shrink-0 inline-block">
                            সাশ্রয় ৳{pkg.savings}!
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Information form */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-dark text-white text-xs font-bold flex justify-center items-center font-sans">২</span>
                <h4 className="text-base sm:text-lg font-display font-bold text-primary-dark">আপনার তথ্য দিন</h4>
              </div>

              <div className="space-y-4 font-sans text-sm">

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-display font-semibold text-primary-dark block flex items-center gap-1.5">
                    <User size={16} className="text-brand-green" />
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="সম্পূর্ণ নামটি লিখুন"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-primary-dark font-medium placeholder-slate-400 font-display transition-all"
                    id="checkout-name-input"
                  />
                </div>

                {/* Telephone */}
                <div className="space-y-1.5">
                  <label className="font-display font-semibold text-primary-dark block flex items-center gap-1.5">
                    <Smartphone size={16} className="text-brand-green" />
                    মোবাইল নম্বর *
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="01XXX-XXXXXX"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-primary-dark font-medium placeholder-slate-400 font-display transition-all"
                    id="checkout-phone-input"
                  />
                </div>

                {/* Addressing */}
                <div className="space-y-1.5">
                  <label className="font-display font-semibold text-primary-dark block flex items-center gap-1.5">
                    <MapPin size={16} className="text-brand-green" />
                    পূর্ণ ঠিকানা *
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    placeholder="বাসা নং, রাস্তা, এলাকা, জেলা"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-primary-dark font-medium placeholder-slate-400 font-display transition-all"
                    id="checkout-address-textarea"
                  />
                </div>

                {/* Shipping locations toggle */}
                <div className="space-y-1.5">
                  <label className="font-display font-semibold text-primary-dark block">ডেলিভারি এলাকা *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">

                    {/* Inside Dhaka */}
                    <div
                      onClick={() => setDeliveryArea('inside')}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${deliveryArea === 'inside' ? 'border-brand-green bg-brand-green/5' : 'border-slate-150 bg-white hover:border-slate-200'
                        }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${deliveryArea === 'inside' ? 'border-brand-green bg-brand-green' : 'border-slate-300 bg-white'
                        }`}>
                        {deliveryArea === 'inside' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className="font-display text-sm font-semibold text-primary-dark">ঢাকার ভিতরে (৳৬০)</span>
                    </div>

                    {/* Outside Dhaka */}
                    <div
                      onClick={() => setDeliveryArea('outside')}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${deliveryArea === 'outside' ? 'border-brand-green bg-brand-green/5' : 'border-slate-150 bg-white hover:border-slate-200'
                        }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${deliveryArea === 'outside' ? 'border-brand-green bg-brand-green' : 'border-slate-300 bg-white'
                        }`}>
                        {deliveryArea === 'outside' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className="font-display text-sm font-semibold text-primary-dark">ঢাকার বাইরে (৳১৩০)</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Validation Alerts container */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3.5 bg-brand-red/10 border border-brand-red/20 rounded-lg text-brand-red text-sm font-semibold flex items-center gap-2 font-display"
                  id="checkout-validation-error"
                >
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Summary details invoice calculation block */}
            <div className="bg-[#f7faf8] p-5 rounded-xl border border-[#e0e6e2] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="font-display">
                <div className="text-xl sm:text-2xl font-bold text-primary-dark">
                  সর্বমোট: <span className="text-brand-green">৳{totalCost}</span>
                </div>
                <div className="text-[11px] text-primary-dark/80 font-sans mt-0.5">
                  * ডেলিভারি চার্জ সহ (ক্যাশ অন ডেলিভারি)
                </div>
              </div>

              <div className="text-right text-xs text-primary-dark/70 font-sans space-y-1">
                <div>প্যাকেজ মূল্য: ৳{currentPackage.price}</div>
                <div>ডেলিভারি চার্জ: ৳{deliveryCharge}</div>
              </div>
            </div>

            {/* Submission Order Confirmation CTA */}
            <div className="pt-2 select-none">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-brand-green hover:bg-[#125136] text-white py-4.5 rounded-xl font-display font-bold text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-101 active:scale-100 animate-pulse-slow gap-2"
                id="order-confirm-submit"
              >
                <ShoppingCart size={20} className="stroke-[2.5]" />
                অর্ডার কনফার্ম করুন
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
