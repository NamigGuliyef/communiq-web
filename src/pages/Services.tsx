import ServicesSection from '@/components/Home/ServicesSection';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import SectionBanner from '@/components/SectionBanner';
import { useLanguage } from '@/hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();


  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section with Background */}
        <SectionBanner
          title={t('page.services.title')}
          subtitle={t('services.subtitle')}
        />
        <ServicesSection cartStyle={2} />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
