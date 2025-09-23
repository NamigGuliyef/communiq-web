import FadeInWhenVisible from '@/components/FadeWhenInVisible';
import ContactSection from '@/components/Home/ContactSection';
import EducationSection from '@/components/Home/EducationSection';
import GallerySection from '@/components/Home/GallerySection';
import HealthcareSection from '@/components/Home/HealthcareSection';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import TestimonialSection from '@/components/Home/TestimonialSection';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import VisaModal from '@/components/VisaModal';
import { useState, useEffect } from 'react';

const LS_COMUNIQ = "communiq-lastseen-hour"
const Index = () => {
  const [showVisaModal, setShowVisaModal] = useState(false);

  useEffect(() => {
    const lastSeen = +localStorage.getItem(LS_COMUNIQ);
    if (lastSeen) {
      const currHour = (new Date()).getHours();
      if (currHour > lastSeen) {
        setShowVisaModal(true);
        localStorage.setItem(LS_COMUNIQ, currHour + '');
      }
    } else {
      setShowVisaModal(true);
      const _lastSeen = (new Date()).getHours().toString();
      localStorage.setItem(LS_COMUNIQ, _lastSeen);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FadeInWhenVisible>
          <HeroSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <ServicesSection cartStyle={1} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <EducationSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <HealthcareSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <GallerySection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <TestimonialSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <ContactSection />
        </FadeInWhenVisible>
      </main>
      <Footer />
      <VisaModal
        isOpen={showVisaModal}
        onClose={() => setShowVisaModal(false)}
      />
    </div>
  );
};

export default Index;
