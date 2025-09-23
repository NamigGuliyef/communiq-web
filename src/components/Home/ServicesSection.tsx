import portugalArchitecture from '@/assets/portugal-architecture.jpg';
import universityLisbon from '@/assets/university-lisbon.jpg';
import universityNova from '@/assets/university-nova.jpg';
import universityPorto from '@/assets/university-porto.jpg';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Building,
  CheckCircle,
  CreditCard,
  FileText,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Scale,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { useState } from 'react';


const ServicesSection = ({ cartStyle }: { cartStyle: 1 | 2 }) => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const getDetailedContent = (serviceTitle: string) => {
    switch (serviceTitle) {
      case 'Educational Orientation':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Universities:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>University of Lisbon - Ranked #262 in QS World University Rankings 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>NOVA University Lisbon - Featured in "QS Top 50 Under 50"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>Catholic University of Portugal - Globally ranked by Financial Times for business and law programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>English-taught Bachelor's and Master's programs available in Medicine, Data Science, Engineering, and more</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <img src={universityLisbon} alt="University of Lisbon" className="w-full h-20 object-cover rounded-lg" />
                <img src={universityPorto} alt="University of Porto" className="w-full h-20 object-cover rounded-lg" />
                <img src={universityNova} alt="NOVA University" className="w-full h-20 object-cover rounded-lg" />
              </div>
            </div>
            <div className="bg-tile-cream p-3 rounded-lg">
              <p className="text-sm italic text-center text-muted-foreground">
                "One of the most welcoming societies for immigrants, with low levels of racism or xenophobia compared to other EU countries"
              </p>
              <p className="text-xs text-center text-muted-foreground mt-1">Source: European Social Survey, 2022</p>
            </div>
          </div>
        );

      case 'Healthcare Orientation':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Top Private Hospital Networks:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Hospital da Luz</strong> - Cutting-edge facilities and international patient care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span><strong>CUF Saúde</strong> - Over 20 private hospitals across Portugal with high patient satisfaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Lusíadas Saúde</strong> - JCI accredited network with global care standards</span>
                </li>
              </ul>

              <h4 className="font-semibold text-lg text-foreground mt-6">Trusted, affordable, and fast:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Portugal ranks among top 10 in Europe for healthcare (OECD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Leading private networks: Hospital da Luz, CUF, Lusíadas (JCI-accredited)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>English-speaking doctors, advanced diagnostics, priority access for expats — no waiting lists for key specialties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Family-focused insurance packages with international coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Integrated with relocation support: we help register, select plans, and onboard</span>
                </li>
              </ul>

              <div className="bg-tile-cream p-4 rounded-lg mt-6">
                <p className="text-sm italic text-center text-muted-foreground leading-relaxed">
                  "According to the OECD Health Statistics, Portugal has one of the best public healthcare systems in Europe — and its private network is even more advanced."
                </p>
              </div>
            </div>
          </div>
        );

      case 'Real Estate Guidance':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Investment Regions:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>Lisbon - Capital city with modern infrastructure and cultural attractions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>Porto - Historic charm with growing tech sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>Algarve - Coastal luxury properties and golf resorts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>Golden Visa eligible properties from €280,000</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <img src={portugalArchitecture} alt="Portugal Architecture" className="w-full h-24 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-portugal-gold" />
              <span className="font-medium">Expert consultation and guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-portugal-gold" />
              <span className="font-medium">Personalized service approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-portugal-gold" />
              <span className="font-medium">End-to-end support throughout the process</span>
            </div>
          </div>
        );
    }
  };


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
            if (cartStyle === 1) {
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
            } else {
              const IconComponent = service.icon;
              const isExpanded = expandedCard === index;

              return (
                <Card
                  key={index}
                  className={`relative transition-all duration-500 ease-out border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg cursor-pointer transform-gpu ${isExpanded ? 'z-20' : 'hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  onMouseEnter={() => setExpandedCard(index)}
                  onMouseLeave={() => setExpandedCard(null)}
                  style={{ minHeight: '200px' }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary via-ocean to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-shadow duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle
                      className={`text-xl transition-colors duration-300 ${isExpanded ? 'text-primary' : 'text-foreground'
                        }`}
                    >
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  {/* Absolutely positioned expanded content */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-out overflow-y-auto rounded-xl bg-gradient-to-br from-tile-cream/95 to-background/95 p-6 ${isExpanded
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 pointer-events-none translate-y-4'
                      }`}
                  >
                    {getDetailedContent(service.title)}
                  </div>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
