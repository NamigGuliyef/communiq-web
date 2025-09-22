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

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: GraduationCap,
      title: 'Educational Orientation',
      description: 'Schools, IB/British/American diploma programs, 90%+ university placement, University of Lisbon, NOVA, Catholic University'
    },
    {
      icon: Heart,
      title: 'Healthcare Orientation',
      description: 'Hospital da Luz, CUF, Lusíadas; insurance, expat priorities, OECD ratings'
    },
    {
      icon: CreditCard,
      title: 'Mortgage & Loan Facilitation',
      description: 'Up to 70% financing, business and real estate loans, real client examples'
    },
    {
      icon: Building,
      title: 'Individual & Corporate Banking Setup',
      description: 'Account opening process, bank connections, ready in 5-7 days'
    },
    {
      icon: Home,
      title: 'Real Estate Guidance',
      description: 'Golden Visa eligible properties, regions (Lisbon, Porto, Algarve), complete process steps'
    },
    {
      icon: TrendingUp,
      title: 'Curated Investment Opportunities',
      description: 'Government-approved funds, advantages, investment types'
    },
    {
      icon: Scale,
      title: 'Corporate Structuring and Advisory',
      description: 'Company registration, tax optimization, Golden Visa eligible business structure'
    },
    {
      icon: FileText,
      title: 'Legal & Consular Documentation Support',
      description: 'Document preparation, translation, AIMA/consular procedures'
    },
    {
      icon: Users,
      title: 'Community and Professional Network Integration',
      description: 'Expat networks, business and family support'
    },
    {
      icon: MapPin,
      title: 'Tour Package',
      description: '3-5 day tour, property viewings, school/clinic visits, meetings'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 group border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary via-ocean to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
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
