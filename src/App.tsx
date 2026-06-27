import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ResearcherProfile from './components/ResearcherProfile';
import DosageGuide from './components/DosageGuide';
import ProductDetails from './components/ProductDetails';
import VideoGallery from './components/VideoGallery';
import CustomerReviews from './components/CustomerReviews';
import BannerMiddle from './components/BannerMiddle';
import FAQSection from './components/FAQSection';
import PricingOffers from './components/PricingOffers';
import CheckoutForm from './components/CheckoutForm';
import OrderSuccessModal from './components/OrderSuccessModal';
import Footer from './components/Footer';
import { OrderDetails, PackageId, PackageOption } from './types';
import { packageOptions as defaultPackages } from './data';

export default function App() {
  const [packages, setPackages] = useState<PackageOption[]>(defaultPackages);
  const [selectedPkgId, setSelectedPkgId] = useState<PackageId>('triple');
  const [isLoading, setIsLoading] = useState(true);
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const API_BASE_URL = import.meta.env.DEV ? '' : 'https://temp-api.cedrabd.com';
        const response = await fetch(`${API_BASE_URL}/api/public/products`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && Array.isArray(data.items)) {
            const mappedPackages: PackageOption[] = data.items.map((item: any) => {
              const sellingPrice = Number(item.selling_price) || 0;
              const originalPrice = Number(item.original_price) || sellingPrice;
              return {
                id: item.id,
                title: item.name || '',
                capsules: item.package_details || `${item.capsule_quantity || 0} Capsules`,
                price: sellingPrice,
                originalPrice: originalPrice,
                savings: originalPrice > sellingPrice ? originalPrice - sellingPrice : 0,
                label: item.offer_label || undefined,
                isPopular: Boolean(item.is_popular),
                image_path: item.image_path || undefined,
                box_quantity: Number(item.box_quantity) || 1,
              };
            });
            setPackages(mappedPackages);

            // Set default selected package based on dynamic data
            const popular = mappedPackages.find(p => p.isPopular);
            if (popular) {
              setSelectedPkgId(popular.id);
            } else if (mappedPackages.length > 0) {
              setSelectedPkgId(mappedPackages[0].id);
            }
          }
        }
      } catch (err) {
        console.error('Error fetching dynamic packages, using fallback static data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmitOrder = (order: OrderDetails) => {
    setActiveOrder(order);
  };

  const handleCloseSuccessModal = () => {
    setActiveOrder(null);
  };

  return (
    <div className="min-h-screen bg-surface-bg text-primary-dark font-sans selection:bg-brand-green/20 selection:text-primary-dark">
      {/* Header Navigation */}
      <Navbar />

      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Triple Card Benefits Section ("কেন D-CURE Plus বেছে নিবেন?") */}
        <WhyChooseUs />

        {/* Researcher Biography / Profile Section ("গবেষক পরিচিতি") */}
        <ResearcherProfile />

        {/* Directions, Warning and Interactive dosage tracker section */}
        {/* <DosageGuide /> */}

        {/* Detailed specifications: Ingredients, Pharmacology, Indications, Advice */}
        <ProductDetails />

        {/* Video Testimonials Section */}
        <VideoGallery />

        {/* Customer Feedbacks section */}
        <CustomerReviews />

        {/* Quality, certification & GMP assurances banner */}
        {/* <BannerMiddle /> */}

        {/* FAQs Accordion segment */}
        <FAQSection />

        {/* Pricing Selection component */}
        <PricingOffers
          onSelectPackage={setSelectedPkgId}
          selectedPkgId={selectedPkgId}
          packages={packages}
        />

        {/* Direct Order booking Form */}
        <CheckoutForm
          selectedPkgId={selectedPkgId}
          setSelectedPkgId={setSelectedPkgId}
          onSubmitOrder={handleSubmitOrder}
          packages={packages}
        />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Successful Checkout invoice / tracking modal */}
      {activeOrder && (
        <OrderSuccessModal
          order={activeOrder}
          onClose={handleCloseSuccessModal}
        />
      )}
    </div>
  );
}
