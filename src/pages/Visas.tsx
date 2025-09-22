import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, DollarSign, Laptop, Star } from 'lucide-react';
import SectionBanner from '@/components/SectionBanner';

const Visas = () => {
  const { t } = useLanguage();

  const visaTypes = [
    {
      icon: DollarSign,
      title: 'D7 Visa (Passive Income)',
      subtitle: 'For those with passive income',
      features: [
        'No investment required',
        'Citizenship after 5 years',
        'Family included',
        'For passive income holders (rent, pension, royalty)'
      ],
      process: [
        'Income documentation',
        'Criminal background check',
        'Health insurance',
        'Accommodation proof',
        'Application submission'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Star,
      title: 'Golden Visa',
      subtitle: 'For investors seeking EU citizenship',
      features: [
        '7 days/year stay requirement',
        'Citizenship after 5 years',
        'Tax flexibility',
        'Investment-based residency'
      ],
      process: [
        'Investment selection',
        'Fund/donation transfer',
        'Document preparation',
        'Application submission',
        'Residence card issuance'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Laptop,
      title: 'Digital Nomad Visa',
      subtitle: 'For freelancers and remote workers',
      features: [
        'Live and work in Portugal',
        'Family relocation together',
        'Flexible work arrangements',
        'Access to EU markets'
      ],
      process: [
        'Remote work proof',
        'Income verification',
        'Health insurance',
        'Criminal record check',
        'Application and approval'
      ],
      color: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <SectionBanner
          title={t('page.visas.title')}
          subtitle={"Choose the right visa type for your Portugal journey"}
        />

        {/* Visa Types */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {visaTypes.map((visa, index) => {
                const IconComponent = visa.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${visa.color}`}></div>
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-br ${visa.color} rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{visa.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{visa.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {visa.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Process Steps</h4>
                        <div className="space-y-2">
                          {visa.process.map((step, i) => (
                            <Badge key={i} variant="outline" className="mr-2 mb-2">
                              {i + 1}. {step}
                            </Badge>
                          ))}
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

export default Visas;
