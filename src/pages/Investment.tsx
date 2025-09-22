import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, TrendingUp, Home } from 'lucide-react';
import SectionBanner from '@/components/SectionBanner';

const Investment = () => {
  const { t } = useLanguage();

  const regions = [
    {
      name: 'Lisbon',
      description: 'Capital city with rich history and modern amenities',
      properties: ['Modern apartments', 'Historic buildings', 'Waterfront properties'],
      priceRange: '€400k - €2M+'
    },
    {
      name: 'Porto',
      description: 'Cultural hub with UNESCO World Heritage sites',
      properties: ['Renovated townhouses', 'River view apartments', 'Traditional quintas'],
      priceRange: '€250k - €1.5M'
    },
    {
      name: 'Algarve',
      description: 'Coastal paradise with golden beaches',
      properties: ['Beach villas', 'Golf resort properties', 'Luxury condos'],
      priceRange: '€300k - €3M+'
    },
    {
      name: 'Cascais',
      description: 'Elegant coastal town near Lisbon',
      properties: ['Seafront apartments', 'Historic villas', 'Modern developments'],
      priceRange: '€500k - €4M+'
    },
    {
      name: 'Setúbal',
      description: 'Wine region with natural beauty',
      properties: ['Vineyard estates', 'Country homes', 'Coastal properties'],
      priceRange: '€200k - €1M'
    }
  ];

  const investmentTypes = [
    {
      icon: TrendingUp,
      title: 'Curated Investment Opportunities',
      description: 'Government-approved private equity and venture capital funds. CMVM-regulated structures.',
      benefits: ['No real estate maintenance', 'Professional fund management', 'Diversified portfolios', 'Early return distributions', 'Golden Visa pathway']
    },
    {
      icon: Building,
      title: 'Real Estate Investment',
      description: 'Golden Visa eligible properties across prime locations. Finance up to 70% with mortgage support.',
      benefits: ['Residency qualification', 'Rental income potential', 'Capital appreciation', 'Off-market access', 'Full lifecycle support']
    },
    {
      icon: Home,
      title: 'Development Projects',
      description: 'New construction and renovation projects in emerging value zones.',
      benefits: ['Pre-construction pricing', 'Customization options', 'Modern amenities', 'Emerging markets', 'Development partnerships']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <SectionBanner
          title={t('page.investment.title')}
          subtitle={"Discover lucrative investment opportunities in Portugal's thriving real estate market"}
        />

        {/* Investment Types */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Investment Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why fund-based Golden Visa investments? Audited, CMVM-regulated structures with diversification across tech, real estate, energy, and innovation sectors. Passive income and capital appreciation potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {investmentTypes.map((investment, index) => {
                const IconComponent = investment.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{investment.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {investment.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {investment.benefits.map((benefit, i) => (
                          <Badge key={i} variant="secondary" className="mr-2 mb-2">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Prime Investment Regions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore Portugal's most sought-after investment locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <CardTitle className="text-xl text-foreground">{region.name}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {region.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Property Types</h4>
                        <div className="space-y-1">
                          {region.properties.map((property, i) => (
                            <Badge key={i} variant="outline" className="mr-2 mb-1">
                              {property}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Price Range</h4>
                        <span className="text-lg font-bold text-primary">{region.priceRange}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Investment;
