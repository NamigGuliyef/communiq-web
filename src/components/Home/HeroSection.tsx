import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ApplicationRoadmapModal from '@/components/ApplicationRoadmapModal';
import portugalVideo from '@/assets/portugal-video.mp4'; // <- Add your video here

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [showRoadmapModal, setShowRoadmapModal] = useState(false);

  return (
    <section
      id="home"
      className="mt-[64px] relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={portugalVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-4 text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Your Portugal Journey Starts Here
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            TO ENSURE INDIVIDUALS AND FAMILIES START A NEW LIFE IN PORTUGAL — SAFELY, LEGALLY, AND COMFORTABLY. WE SUPPORT OUR CLIENTS AT EVERY STAGE, FROM VISA APPLICATION TO FULL SETTLEMENT.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 mb-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-portugal-gold">Our Vision</h3>
            <p className="text-gray-200 text-base">
              TO BECOME THE MOST TRUSTED AND PROFESSIONAL PARTNER IN THE FIELD OF RELOCATION AND IMMIGRATION ACROSS THE EUROPEAN UNION. WE DON'T JUST HANDLE PAPERWORK — WE GUIDE PEOPLE THROUGH A MAJOR LIFE TRANSITION.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              className="bg-portugal-gold hover:bg-portugal-gold/90 text-portugal-gold-foreground text-base px-6 py-4 rounded-xl shadow-portugal"
              onClick={() => (window.location.href = '/contact')}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 text-base px-6 py-4 rounded-xl transition-all duration-300"
              onClick={() => setShowRoadmapModal(true)}
            >
              <MapPin className="mr-2 w-4 h-4" />
              {language === 'az' ? 'Müraciət Xəritəsi' : 'Application Roadmap'}
            </Button>
          </div>

          {/* Facts Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <Shield className="w-6 h-6 text-portugal-gold mx-auto mb-2" />
              <h3 className="font-semibold text-base mb-1">7th Safest Country</h3>
              <p className="text-sm text-gray-200">Global Peace Index 2024</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <Heart className="w-6 h-6 text-portugal-gold mx-auto mb-2" />
              <h3 className="font-semibold text-base mb-1">3rd Safest in Europe</h3>
              <p className="text-sm text-gray-200">European Safety Rankings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <Globe className="w-6 h-6 text-portugal-gold mx-auto mb-2" />
              <h3 className="font-semibold text-base mb-1">Most Welcoming Society</h3>
              <p className="text-sm text-gray-200">European Social Survey 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <ApplicationRoadmapModal
        isOpen={showRoadmapModal}
        onClose={() => setShowRoadmapModal(false)}
      />
    </section>
  );
};

export default HeroSection;
