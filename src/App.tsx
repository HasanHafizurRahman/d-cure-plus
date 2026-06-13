import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ResearcherProfile from './components/ResearcherProfile';
import DosageGuide from './components/DosageGuide';
import VideoGallery from './components/VideoGallery';
import CustomerReviews from './components/CustomerReviews';
import BannerMiddle from './components/BannerMiddle';
import FAQSection from './components/FAQSection';
import PricingOffers from './components/PricingOffers';
import CheckoutForm from './components/CheckoutForm';
import OrderSuccessModal from './components/OrderSuccessModal';
import Footer from './components/Footer';
import { OrderDetails, PackageId } from './types';

export default function App() {
  const [selectedPkgId, setSelectedPkgId] = useState<PackageId>('triple');
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(null);

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
        <DosageGuide />

        {/* Video Testimonials Section */}
        <VideoGallery />

        {/* Customer Feedbacks section */}
        <CustomerReviews />

        {/* Quality, certification & GMP assurances banner */}
        <BannerMiddle />

        {/* FAQs Accordion segment */}
        <FAQSection />

        {/* Pricing Selection component */}
        <PricingOffers 
          onSelectPackage={setSelectedPkgId} 
          selectedPkgId={selectedPkgId} 
        />

        {/* Direct Order booking Form */}
        <CheckoutForm 
          selectedPkgId={selectedPkgId} 
          setSelectedPkgId={setSelectedPkgId}
          onSubmitOrder={handleSubmitOrder}
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
