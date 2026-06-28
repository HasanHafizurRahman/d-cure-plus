import { useState, useEffect, FormEvent, useMemo } from 'react';
import { ShoppingCart, Smartphone, User, MapPin, ShieldCheck, AlertCircle } from 'lucide-react';
import { OrderDetails, PackageId, PackageOption } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import SearchableSelect from './SearchableSelect';

interface CheckoutFormProps {
  selectedPkgId: PackageId;
  setSelectedPkgId: (id: PackageId) => void;
  onSubmitOrder: (order: OrderDetails) => void;
  packages: PackageOption[];
}

import { District, Thana } from '../types';

export default function CheckoutForm({ selectedPkgId, setSelectedPkgId, onSubmitOrder, packages }: CheckoutFormProps) {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryArea, setDeliveryArea] = useState<'inside' | 'outside'>('inside');
  const [errorMsg, setErrorMsg] = useState('');

  const [districts, setDistricts] = useState<(District & { id: number })[]>([]);
  const [thanaMap, setThanaMap] = useState<Record<string, Thana & { globalId: number }>>({});
  const [selectedDistrictCode, setSelectedDistrictCode] = useState<string>('');
  const [selectedThanaCode, setSelectedThanaCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadDistrictsAndThanas = async () => {
      try {
        const API_BASE_URL = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_BASE_URL || 'https://temp-api.cedrabd.com');
        const distRes = await fetch(`${API_BASE_URL}/api/public/districts`);
        if (distRes.ok) {
          const distData = await distRes.json();
          if (distData.success && Array.isArray(distData.items)) {
            const mappedDistricts = distData.items.map((item: any, idx: number) => ({
              id: idx + 1, // 1-based index is the database ID
              name: item.name,
              name_bn: item.name_bn,
              code: item.code,
              encrypted_id: item.encrypted_id,
            }));
            setDistricts(mappedDistricts);

            // Fetch thanas for all districts in parallel
            const promises = mappedDistricts.map(async (dist: any) => {
              try {
                const thanaRes = await fetch(`${API_BASE_URL}/api/public/thanas/district/${dist.code}`);
                if (thanaRes.ok) {
                  const thanaData = await thanaRes.json();
                  return {
                    districtId: dist.id,
                    items: thanaData.items || [],
                  };
                }
              } catch (e) {
                console.error(`Failed to fetch thanas for district ${dist.code}:`, e);
              }
              return { districtId: dist.id, items: [] };
            });

            const results = await Promise.all(promises);
            results.sort((a, b) => a.districtId - b.districtId);

            let globalCounter = 0;
            const newThanaMap: Record<string, any> = {};
            results.forEach((res) => {
              res.items.forEach((thana: any) => {
                globalCounter++;
                newThanaMap[thana.code] = {
                  globalId: globalCounter,
                  district_id: res.districtId,
                  name: thana.name,
                  name_bn: thana.name_bn,
                  code: thana.code,
                  encrypted_id: thana.encrypted_id,
                  inside_dhaka: thana.inside_dhaka,
                };
              });
            });
            setThanaMap(newThanaMap);
          }
        }
      } catch (err) {
        console.error('Error loading districts and thanas:', err);
      }
    };

    loadDistrictsAndThanas();
  }, []);

  const handleDistrictChange = (code: string) => {
    setSelectedDistrictCode(code);
    setSelectedThanaCode('');

    // Automatically set delivery area: code 3001 is Dhaka
    if (code === '3001') {
      setDeliveryArea('inside');
    } else {
      setDeliveryArea('outside');
    }
  };

  const handleThanaChange = (code: string) => {
    setSelectedThanaCode(code);
    if (code) {
      const thana = thanaMap[code];
      if (thana) {
        const isInside = thana.inside_dhaka === true || thana.inside_dhaka === 1 || thana.inside_dhaka === '1' || String(thana.inside_dhaka).toLowerCase() === 'true';
        setDeliveryArea(isInside ? 'inside' : 'outside');
      }
    } else {
      if (selectedDistrictCode === '3001') {
        setDeliveryArea('inside');
      } else {
        setDeliveryArea('outside');
      }
    }
  };

  const districtOptions = useMemo(
    () =>
      districts.map((dist) => ({
        value: dist.code,
        label: `${dist.name_bn} (${dist.name})`,
        searchText: `${dist.name_bn} ${dist.name}`,
      })),
    [districts],
  );

  const thanaOptions = useMemo(() => {
    const selectedDistrictId = districts.find((d) => d.code === selectedDistrictCode)?.id ?? -1;
    return (Object.values(thanaMap) as (Thana & { globalId: number })[])
      .filter((t) => t.district_id === selectedDistrictId)
      .map((thana) => ({
        value: thana.code,
        label: `${thana.name_bn} (${thana.name})`,
        searchText: `${thana.name_bn} ${thana.name}`,
      }));
  }, [thanaMap, districts, selectedDistrictCode]);

  // Find selected package details
  const currentPackage = packages.find(p => p.id === selectedPkgId) || packages[0];

  // Delivery configuration
  const deliveryCharge = deliveryArea === 'inside' ? 60 : 130;
  const totalCost = currentPackage.price + deliveryCharge;

  // Clear errors when typing
  useEffect(() => {
    if (errorMsg) setErrorMsg('');
  }, [customerName, phoneNumber, address, selectedPkgId, deliveryArea, selectedDistrictCode, selectedThanaCode]);

  const handleConfirmOrder = async (e: FormEvent) => {
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
      setErrorMsg('দুঃখিত, অনুগ্রহ করে একটি সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন।');
      return;
    }

    if (!selectedDistrictCode) {
      setErrorMsg('দুঃখিত, অনুগ্রহ করে আপনার জেলা নির্বাচন করুন।');
      return;
    }

    if (!selectedThanaCode) {
      setErrorMsg('দুঃখিত, অনুগ্রহ করে আপনার উপজেলা বা থানা নির্বাচন করুন।');
      return;
    }

    if (!address.trim()) {
      setErrorMsg('দুঃখিত, কুরিয়ার ডেলিভারির জন্য আপনার পূর্ণ ঠিকানাটি লিখুন।');
      return;
    }

    const selectedDistrict = districts.find(d => d.code === selectedDistrictCode);
    const selectedThana = thanaMap[selectedThanaCode];

    const postBody = {
      customer_name: customerName,
      customer_phone: cleanPhone,
      alternative_phone: "",
      shipping_address: address,
      district_id: selectedDistrict ? selectedDistrict.id : null,
      thana_id: selectedThana ? selectedThana.globalId : null,
      product_id: Number(currentPackage.id),
      quantity: 1,
      payment_method: "cash on delivery",
      notes: "Order placed from landing page"
    };

    try {
      setIsSubmitting(true);
      const API_BASE_URL = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_BASE_URL || 'https://temp-api.cedrabd.com');
      const response = await fetch(`${API_BASE_URL}/api/public/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(postBody)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        // Directly trigger successful modal callback
        onSubmitOrder(resData.item);

        // Reset local state fields
        setCustomerName('');
        setPhoneNumber('');
        setAddress('');
        setSelectedDistrictCode('');
        setSelectedThanaCode('');
      } else {
        setErrorMsg(resData.message || 'দুঃখিত, অর্ডার প্রসেস করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
      }
    } catch (err) {
      console.error('Order submission error:', err);
      setErrorMsg('দুঃখিত, নেটওয়ার্ক ত্রুটির কারণে অর্ডারটি পাঠানো যায়নি। অনুগ্রহ করে ইন্টারনেট সংযোগ চেক করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="checkout" className="py-10 md:py-24 bg-gradient-to-b from-[#f7faf8] to-[#edf3ef] border-t border-slate-200 scroll-mt-12">
      <div className="max-w-(--spacing-container-max) mx-auto px-4 sm:px-6 lg:px-8 text-center bangla-text">

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
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg relative overflow-hidden max-w-(--spacing-container-max) mx-auto" id="checkout-container-form">
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
                {packages.map((pkg) => {
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
                          {pkg.label && <span className="text-xs text-primary-dark/70 font-sans block mt-0.5">{pkg.label}</span>}
                        </div>
                      </div>

                      {/* Right: Price */}
                      <div className="text-right font-display text-base sm:text-lg font-bold text-[#003520]">
                        ৳{pkg.price}
                        {pkg.savings && pkg.savings > 0 ? (
                          <span className="block text-[10px] bg-brand-red text-white font-sans px-1.5 py-0.5 rounded-md ml-1.5 shrink-0 inline-block">
                            সাশ্রয় ৳{pkg.savings}!
                          </span>
                        ) : null}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm">

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

                {/* District Selection */}
                <div className="space-y-1.5">
                  <label className="font-display font-semibold text-primary-dark block flex items-center gap-1.5">
                    <MapPin size={16} className="text-brand-green" />
                    জেলা নির্বাচন করুন *
                  </label>
                  <SearchableSelect
                    id="checkout-district-select"
                    value={selectedDistrictCode}
                    onChange={handleDistrictChange}
                    options={districtOptions}
                    placeholder="জেলা খুঁজুন বা নির্বাচন করুন"
                  />
                </div>

                {/* Thana Selection */}
                <div className="space-y-1.5">
                  <label className="font-display font-semibold text-primary-dark block flex items-center gap-1.5">
                    <MapPin size={16} className="text-brand-green" />
                    উপজেলা / থানা *
                  </label>
                  <SearchableSelect
                    id="checkout-thana-select"
                    value={selectedThanaCode}
                    onChange={handleThanaChange}
                    options={thanaOptions}
                    placeholder="উপজেলা / থানা খুঁজুন বা নির্বাচন করুন"
                    disabled={!selectedDistrictCode}
                  />
                </div>

                {/* Addressing */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-display font-semibold text-primary-dark block flex items-center gap-1.5">
                    <MapPin size={16} className="text-brand-green" />
                    পূর্ণ ঠিকানা *
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    placeholder="বাসা নং, রাস্তা, এলাকা"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-primary-dark font-medium placeholder-slate-400 font-display transition-all"
                    id="checkout-address-textarea"
                  />
                </div>

                {/* Shipping locations display */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-display font-semibold text-primary-dark block">ডেলিভারি এলাকা (স্বয়ংক্রিয়ভাবে নির্বাচিত)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">

                    {/* Inside Dhaka */}
                    <div
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 pointer-events-none transition-colors ${deliveryArea === 'inside' ? 'border-brand-green bg-brand-green/5' : 'border-slate-150 bg-slate-50 opacity-60'
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
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 pointer-events-none transition-colors ${deliveryArea === 'outside' ? 'border-brand-green bg-brand-green/5' : 'border-slate-150 bg-slate-50 opacity-60'
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
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-brand-green hover:bg-[#125136] text-white py-4.5 rounded-xl font-display font-bold text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-101 active:scale-100 animate-pulse-slow gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                id="order-confirm-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>অর্ডার প্রসেস হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} className="stroke-[2.5]" />
                    <span>অর্ডার কনফার্ম করুন</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
