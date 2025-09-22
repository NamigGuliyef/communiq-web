import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Star, Globe, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import universityLisbon from '@/assets/university-lisbon.jpg';
import universityPorto from '@/assets/university-porto.jpg';
import universityNova from '@/assets/university-nova.jpg';
import universityCatholic from '@/assets/university-catholic.jpg';
import universityCoimbra from '@/assets/university-coimbra.jpg';
import universityIscte from '@/assets/university-iscte.jpg';

const EducationSection = () => {
  const { t } = useLanguage();

  const universities = [
    {
      name: 'University of Lisbon',
      description: 'Portugal\'s largest university with over 47,000 students. Excellence in research and education since 1911.',
      ranking: '#1 in Portugal',
      icon: GraduationCap,
      image: universityLisbon
    },
    {
      name: 'University of Porto',
      description: 'Leading public university known for engineering and medical programs. Strong international partnerships.',
      ranking: '#2 in Portugal',
      icon: Award,
      image: universityPorto
    },
    {
      name: 'NOVA University Lisbon',
      description: 'Modern university with innovative programs. Strong business and economics faculties.',
      ranking: 'Top 3 in Portugal',
      icon: Star,
      image: universityNova
    },
    {
      name: 'Catholic University of Portugal',
      description: 'Private institution with excellent business school. High graduate employment rates.',
      ranking: 'Premier Private',
      icon: Globe,
      image: universityCatholic
    },
    {
      name: 'University of Coimbra',
      description: 'UNESCO World Heritage site. One of Europe\'s oldest universities, founded in 1290.',
      ranking: 'Historic Excellence',
      icon: GraduationCap,
      image: universityCoimbra
    },
    {
      name: 'ISCTE Business School',
      description: 'Leading business school with international accreditation. Strong corporate connections.',
      ranking: 'Top Business School',
      icon: Award,
      image: universityIscte
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('education.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class education system with internationally recognized universities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university, index) => {
            const IconComponent = university.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-45 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary via-ocean to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {university.name}
                      </CardTitle>
                      <div className="text-sm text-portugal-gold font-semibold bg-portugal-gold/10 px-2 py-1 rounded-full mt-1 inline-block">
                        {university.ranking}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {university.description}
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

export default EducationSection;
