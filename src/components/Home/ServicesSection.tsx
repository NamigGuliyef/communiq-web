import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Building,
  CreditCard,
  FileText,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Scale,
  TrendingUp,
  Users
} from 'lucide-react';
import servicesRealEstate from '@/assets/services-real-estate.jpg';
import servicesBanking from '@/assets/services-banking.jpg';

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: GraduationCap,
      title: 'Educational Orientation',
      description: 'Access to top international schools like St. Julian\'s, CAISL, and Oporto British School. University partnerships with Lisbon, NOVA, and Catholic University. 100% English instruction with 90%+ university placement rates.'
    },
    {
      icon: Heart,
      title: 'Healthcare Orientation',
      description: 'Premium private networks: Hospital da Luz, CUF Saúde, Lusíadas Saúde. JCI-accredited facilities with English-speaking doctors, advanced diagnostics, and priority access for expats.'
    },
    {
      icon: CreditCard,
      title: 'Mortgage & Loan Facilitation',
      description: 'Finance up to 70% of property value with 2.5-4.5% interest rates. Business loans for startups and expansions. Full legal structuring and bank presentation support.'
    },
    {
      icon: Building,
      title: 'Individual & Corporate Banking Setup',
      description: 'Fast-track account opening with Millennium BCP, Novo Banco, Santander. Pre-arranged English-speaking relationship managers. Accounts ready in 5-7 business days.',
      image: servicesBanking
    },
    {
      icon: Home,
      title: 'Real Estate Guidance',
      description: 'Golden Visa compliant properties across Lisbon, Porto, Algarve, Cascais. Off-market deals, developer inventory, rental yield assessment. Full lifecycle support from search to registration.',
      image: servicesRealEstate
    },
    {
      icon: TrendingUp,
      title: 'Curated Investment Opportunities',
      description: 'Government-approved CMVM-regulated funds. Diversified portfolios in tech, real estate, energy. Passive income potential with early return distributions available.'
    },
    {
      icon: Scale,
      title: 'Corporate Structuring and Advisory',
      description: 'Company registration (LDA, SA, branch office). Tax optimization strategies. Full NIF, VAT, social security setup. Golden Visa eligible business structures.'
    },
    {
      icon: FileText,
      title: 'Legal & Consular Documentation Support',
      description: 'Complete visa and residency document preparation. Certified translations, apostilles, embassy coordination. Full AIMA representation and consulate appointment scheduling.'
    },
    {
      icon: Users,
      title: 'Community and Professional Network Integration',
      description: 'Introductions to expat circles, business associations, and industry events. Access to English-speaking professionals and family support groups. Local life guidance for faster adaptation.'
    },
    {
      icon: MapPin,
      title: 'Tour Package',
      description: '3-5 day guided tours across Lisbon, Cascais, Porto, Algarve. Property visits, school tours, bank appointments, and expat meetings. Airport pickup and private driver included.'
    }
  ];


  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-tile-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive immigration and relocation services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isImageService = service.image;
            return (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 group border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg overflow-hidden">
                {isImageService && (
                  <div className="h-32 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary via-ocean to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
