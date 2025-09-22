import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Shield, Star, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import hospitalLuz from '@/assets/hospital-luz.jpg';
import hospitalCuf from '@/assets/hospital-cuf.jpg';
import hospitalLusiadas from '@/assets/hospital-lusiadas.jpg';
import hospitalSaoJoao from '@/assets/hospital-sao-joao.jpg';
import hospitalSantaMaria from '@/assets/hospital-santa-maria.jpg';
import hospitalIpo from '@/assets/hospital-ipo.jpg';

const HealthcareSection = () => {
  const { t } = useLanguage();

  const hospitals = [
    {
      name: 'Hospital da Luz',
      description: 'Cutting-edge facilities and international patient care. Leading private network with advanced diagnostics and priority access for expats.',
      specialty: 'Premium International Care',
      icon: Heart,
      image: hospitalLuz
    },
    {
      name: 'CUF Saúde',
      description: 'Over 20 private hospitals across Portugal with high patient satisfaction. English-speaking doctors and integrated relocation support.',
      specialty: 'Nationwide Network',
      icon: Shield,
      image: hospitalCuf
    },
    {
      name: 'Lusíadas Saúde',
      description: 'JCI-accredited network with global care standards. Family-focused insurance packages with international coverage.',
      specialty: 'JCI-Accredited Excellence',
      icon: Star,
      image: hospitalLusiadas
    },
    {
      name: 'Hospital de São João',
      description: 'Major public hospital in Porto with excellent medical education and research programs. Part of Portugal\'s top 10 European healthcare system.',
      specialty: 'Research Excellence',
      icon: Award,
      image: hospitalSaoJoao
    },
    {
      name: 'Hospital Santa Maria',
      description: 'Portugal\'s largest hospital with comprehensive medical services and specialist care. No waiting lists for key specialties.',
      specialty: 'Comprehensive Care',
      icon: Heart,
      image: hospitalSantaMaria
    },
    {
      name: 'IPO Porto',
      description: 'Specialized oncology institute providing world-class cancer treatment and research. Advanced diagnostic capabilities.',
      specialty: 'Oncology Center',
      icon: Shield,
      image: hospitalIpo
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-tile-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('healthcare.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portugal ranks among top 10 in Europe for healthcare (OECD). Leading private networks with English-speaking doctors, advanced diagnostics, and priority access for expats — no waiting lists for key specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital, index) => {
            const IconComponent = hospital.icon;
            return (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean via-primary to-ocean/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-ocean transition-colors duration-300">{hospital.name}</CardTitle>
                      <div className="text-sm text-portugal-gold font-semibold bg-portugal-gold/10 px-2 py-1 rounded-full mt-1 inline-block">{hospital.specialty}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {hospital.description}
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

export default HealthcareSection;