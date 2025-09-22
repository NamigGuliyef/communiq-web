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
  Plane,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { useState } from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import SectionBanner from '@/components/SectionBanner';

const Services = () => {
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

      case 'Mortgage & Loan Facilitation':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">For Real Estate Buyers:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Finance up to 70% of your property value, even as a non-resident</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Interest rates from 2.5% to 4.5%, with terms up to 30 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Full assistance in valuation, insurance, legal due diligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Mortgage approval tailored to Golden Visa timelines</span>
                </li>
              </ul>

              <h4 className="font-semibold text-lg text-foreground mt-6">For Business Owners:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Access startup or expansion capital through business loan programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Navigate Portuguese public financing programs and soft loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Direct relationships with Portugal's top banks – reducing approval times</span>
                </li>
              </ul>

              <div className="bg-tile-cream p-4 rounded-lg mt-6">
                <p className="text-sm italic text-center text-muted-foregroundleading-relaxed">
                  <strong>Client Success:</strong> A family of 4 acquired a €420,000 home in Cascais with only €126,000 down and got Golden Visa approval. Clients receive approvals within 15–20 days.
                </p>
              </div>
            </div>
          </div>
        );

      case 'Banking Setup':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Why it matters:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Required for Golden Visa & D7 applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Proof of funds and source of income</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Essential for business operations: payments, payroll, tax compliance</span>
                </li>
              </ul>

              <h4 className="font-semibold text-lg text-foreground mt-6">What We Offer:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Direct introductions to top banks: Millennium BCP, Novo Banco, Santander</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Pre-arranged relationship managers for English-speaking service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Typical timeline: 5–7 business days</span>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'Real Estate Guidance':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">What we help you do:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Identify residency-eligible properties (Golden Visa compliant, D7-compatible)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Search across Lisbon, Porto, Algarve, Cascais, Setúbal and emerging value zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Access to off-market deals, developer inventory, and distressed assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Assess long-term rental yield, appreciation potential, and resale liquidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Navigate the full lifecycle: reservation → CPCV → notary → registry</span>
                </li>
              </ul>
            </div>
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

      case 'Investment Opportunities':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Why fund-based Golden Visa investments?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Government-approved private equity and venture capital funds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Audited, CMVM-regulated (Portuguese Securities Market Commission) structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Diversification across tech, real estate, energy, and innovation sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>No need to purchase real estate or deal with tenants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Early return distributions available within the first 6–12 months</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'Corporate Structuring':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">What We Offer:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Company registration (LDA, SA, or branch office) with full regulatory compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Strategic corporate structuring to optimize tax efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Full setup of NIF, VAT, social security, and corporate banking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Support Golden Visa pathways through business structure</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'Legal & Documentation':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">What We Offer:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Preparation of all necessary visa, residency, and citizenship documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Certified translations, apostilles, and embassy coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Full representation with AIMA (Portuguese Immigration Agency)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Consulate appointment scheduling and biometric guidance</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'Community Integration':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">What We Offer:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Introductions to expat circles, diaspora networks, and business associations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Access to English-speaking professionals: doctors, lawyers, mentors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Family support: parenting groups, private school communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Local life tips: where to live, shop, network, and thrive</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'Tour Package':
        return (
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">What's Included:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>3–5 day guided tour across key locations: Lisbon, Cascais, Porto, Setúbal, Algarve</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Property visits (residential & investment-focused), schools, clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Bank appointments, real estate briefings, and legal consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Meetings with expat families, business owners, and relocation experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                  <span>Airport pickup, hotel recommendations, and optional private driver</span>
                </li>
              </ul>
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
      description: 'Top schools (St. Julian\'s, CAISL, Oporto British School), IB/British/American programs, 90%+ university placement',
      gradient: 'from-primary to-ocean'
    },
    {
      icon: Heart,
      title: 'Healthcare Orientation',
      description: 'Premium hospitals (Hospital da Luz, CUF, Lusíadas), insurance guidance, expat-focused services',
      gradient: 'from-ocean to-ocean-light'
    },
    {
      icon: Home,
      title: 'Mortgage & Loan Facilitation',
      description: 'Up to 70% financing, business and real estate loans, real client success stories',
      gradient: 'from-portugal-gold to-tile-terracotta'
    },
    {
      icon: CreditCard,
      title: 'Banking Setup',
      description: 'Individual & corporate account opening, bank relationships, ready in 5-7 days',
      gradient: 'from-primary to-primary-hover'
    },
    {
      icon: Building,
      title: 'Real Estate Guidance',
      description: 'Golden Visa eligible properties, regional expertise (Lisbon, Porto, Algarve), full process support',
      gradient: 'from-ocean-deep to-primary'
    },
    {
      icon: TrendingUp,
      title: 'Investment Opportunities',
      description: 'Government-approved funds, investment advantages, diversified portfolio options',
      gradient: 'from-tile-terracotta to-portugal-gold'
    },
    {
      icon: FileText,
      title: 'Corporate Structuring',
      description: 'Company registration, tax optimization, Golden Visa compliant business structures',
      gradient: 'from-ocean to-ocean-deep'
    },
    {
      icon: Users,
      title: 'Legal & Documentation',
      description: 'Document preparation, translation services, AIMA/consular procedures',
      gradient: 'from-primary to-ocean-light'
    },
    {
      icon: MapPin,
      title: 'Community Integration',
      description: 'Expat networks, business and family support, professional networking',
      gradient: 'from-portugal-gold to-primary'
    },
    {
      icon: Plane,
      title: 'Tour Package',
      description: '3-5 day tours, property visits, school/clinic tours, strategic meetings',
      gradient: 'from-ocean-light to-tile-terracotta'
    }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section with Background */}
        <SectionBanner
          title={t('page.services.title')}
          subtitle={t('services.subtitle')}
        />

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isExpanded = expandedCard === index;

                return (
                  <Card
                    key={index}
                    className={`relative overflow-hidden transition-all duration-500 ease-out border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg cursor-pointer transform-gpu ${isExpanded
                      ? 'shadow-2xl scale-105 z-10'
                      : 'hover:shadow-xl hover:scale-[1.02]'
                      }`}
                    onMouseEnter={() => setExpandedCard(index)}
                    onMouseLeave={() => setExpandedCard(null)}
                    style={{
                      height: isExpanded ? 'auto' : 'auto',
                      minHeight: isExpanded ? '400px' : '200px'
                    }}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-primary via-ocean to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-shadow duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className={`text-xl transition-colors duration-300 ${isExpanded ? 'text-primary' : 'text-foreground'
                        }`}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-4">
                        {service.description}
                      </CardDescription>

                      {/* Expanded content with smooth animation */}
                      <div className={`transition-all duration-500 ease-out overflow-hidden ${isExpanded
                        ? 'max-h-[500px] opacity-100 transform translate-y-0'
                        : 'max-h-0 opacity-0 transform -translate-y-4'
                        }`}>
                        <div className="pt-4 border-t border-border/20">
                          <div className="bg-gradient-to-br from-tile-cream/50 to-background/50 p-4 rounded-lg">
                            {getDetailedContent(service.title)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
