import hospitalCuf from '@/assets/hospital-cuf.jpg';
import hospitalLusiadas from '@/assets/hospital-lusiadas.jpg';
import hospitalLuz from '@/assets/hospital-luz.jpg';
import universityLisbon from '@/assets/university-lisbon.jpg';
import universityNova from '@/assets/university-nova.jpg';
import universityPorto from '@/assets/university-porto.jpg';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import SectionBanner from '@/components/SectionBanner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import {
  ArrowRight,
  Award,
  ExternalLink,
  GraduationCap,
  Heart,
  MapPin,
  Star,
  Trophy,
  Users
} from 'lucide-react';

const EducationRedesigned = () => {
  const { t } = useLanguage();

  const universities = [
    {
      name: 'University of Lisbon',
      shortName: 'ULisboa',
      description: 'Portugal\'s largest university with over 47,000 students. Excellence in research and education since 1911.',
      ranking: '#1 in Portugal',
      icon: GraduationCap,
      image: universityLisbon,
      specialties: ['Medicine', 'Engineering', 'Law', 'Sciences'],
      students: '47,000+',
      founded: 1911,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'University of Porto',
      shortName: 'U.Porto',
      description: 'Leading public university known for engineering and medical programs. Strong international partnerships.',
      ranking: '#2 in Portugal',
      icon: Award,
      image: universityPorto,
      specialties: ['Engineering', 'Medicine', 'Architecture', 'Economics'],
      students: '32,000+',
      founded: 1911,
      color: 'from-primary to-green-700'
    },
    {
      name: 'NOVA University Lisbon',
      shortName: 'NOVA',
      description: 'Modern university with innovative programs. Strong business and economics faculties.',
      ranking: 'Top 3 in Portugal',
      icon: Star,
      image: universityNova,
      specialties: ['Business', 'Economics', 'Technology', 'Social Sciences'],
      students: '20,000+',
      founded: 1973,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const hospitals = [
    {
      name: 'Hospital da Luz',
      description: 'Premium private healthcare with international standards',
      image: hospitalLuz,
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics'],
      locations: 'Lisbon, Porto, Aveiro',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      name: 'Hospital CUF',
      description: 'Leading healthcare network across Portugal',
      image: hospitalCuf,
      specialties: ['Surgery', 'Pediatrics', 'Maternity', 'Emergency'],
      locations: 'Multiple cities',
      color: 'from-blue-500 to-cyan-700'
    },
    {
      name: 'Hospital Lusíadas',
      description: 'Excellence in medical care and patient experience',
      image: hospitalLusiadas,
      specialties: ['Diagnostics', 'Rehabilitation', 'Psychiatry', 'Dermatology'],
      locations: 'Lisbon, Porto, Albufeira',
      color: 'from-rose-500 to-pink-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header />

      <main className="pt-16">
        <SectionBanner
          title={t('education.title')}
          subtitle="Discover Portugal's internationally recognized universities and healthcare facilities, offering world-class education and medical services in one of Europe's most welcoming countries."
        />

        {/* Statistics Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300k+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Employment Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">#3</div>
                <div className="text-sm text-muted-foreground">EU Healthcare</div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Top Universities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Portugal's leading institutions offering world-class education and research opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {universities.map((university, index) => {
                const IconComponent = university.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-card to-card/80"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={university.image}
                        alt={university.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className={`bg-gradient-to-r ${university.color} text-white border-0`}>
                          {university.ranking}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="font-bold text-lg">{university.shortName}</div>
                        <div className="text-sm opacity-90">Est. {university.founded}</div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${university.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                            {university.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{university.students} students</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {university.description}
                      </CardDescription>

                      <div>
                        <div className="text-sm font-semibold text-foreground mb-2">Top Specialties</div>
                        <div className="flex flex-wrap gap-2">
                          {university.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Healthcare Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Healthcare Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Portugal's healthcare system ranks among the best in Europe with modern facilities and skilled professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hospitals.map((hospital, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${hospital.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${hospital.color} rounded-lg flex items-center justify-center`}>
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{hospital.name}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {hospital.locations}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="mb-4">
                      {hospital.description}
                    </CardDescription>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Specialties</div>
                      <div className="flex flex-wrap gap-1">
                        {hospital.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-primary-foreground">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-portugal-gold" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Education Journey in Portugal?
              </h3>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get personalized guidance for university applications, school enrollment, and healthcare registration
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-portugal-gold hover:bg-portugal-gold/90 text-portugal-gold-foreground font-semibold px-8 py-6"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EducationRedesigned;
