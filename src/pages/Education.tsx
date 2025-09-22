import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Users, Award, Building, Shield } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();

  const schools = [
    {
      name: "St. Julian's School",
      type: 'International School',
      curriculum: 'British Curriculum',
      location: 'Lisbon',
      features: ['IB Programme', 'Small class sizes', 'Multicultural environment']
    },
    {
      name: 'CAISL',
      type: 'International School',
      curriculum: 'American Curriculum',
      location: 'Lisbon',
      features: ['AP Courses', 'University counseling', 'Sports programs']
    },
    {
      name: 'Oporto British School',
      type: 'International School',
      curriculum: 'British Curriculum',
      location: 'Porto',
      features: ['IGCSE', 'A-Levels', 'Excellent facilities']
    }
  ];

  const universities = [
    {
      name: 'University of Lisbon',
      type: 'Public University',
      ranking: 'Top 300 worldwide',
      programs: ['Medicine', 'Engineering', 'Business', 'Sciences']
    },
    {
      name: 'NOVA University',
      type: 'Public University',
      ranking: 'Young university ranking',
      programs: ['Economics', 'Law', 'Technology', 'Social Sciences']
    },
    {
      name: 'Catholic University',
      type: 'Private University',
      ranking: 'Top business school',
      programs: ['MBA', 'Finance', 'Management', 'Philosophy']
    }
  ];

  const hospitals = [
    {
      name: 'Hospital da Luz',
      type: 'Private Hospital',
      specialties: ['Cardiology', 'Oncology', 'Orthopedics', 'Pediatrics'],
      locations: ['Lisbon', 'Porto', 'Aveiro']
    },
    {
      name: 'CUF Hospitals',
      type: 'Private Hospital Group',
      specialties: ['Emergency care', 'Surgery', 'Maternity', 'Rehabilitation'],
      locations: ['Multiple locations nationwide']
    },
    {
      name: 'Lusíadas Saúde',
      type: 'Private Healthcare',
      specialties: ['Preventive care', 'Diagnostics', 'Specialized treatments'],
      locations: ['Lisbon', 'Porto', 'Algarve']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean to-primary py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('page.education.title')}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                World-class education and healthcare systems for your family's future
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Education Excellence</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                90%+ university placement rate with world-renowned international schools and universities
              </p>
            </div>

            {/* International Schools */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">International Schools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {schools.map((school, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{school.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {school.curriculum} • {school.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {school.features.map((feature, i) => (
                          <Badge key={i} variant="secondary" className="mr-2 mb-2">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Universities */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Top Universities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {universities.map((university, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center mb-4">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{university.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {university.type} • {university.ranking}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {university.programs.map((program, i) => (
                          <Badge key={i} variant="outline" className="mr-2 mb-2">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">World-Class Healthcare</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                OECD top-rated healthcare system with premium private hospitals and expat-focused services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hospitals.map((hospital, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{hospital.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {hospital.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Specialties</h4>
                        <div className="space-y-1">
                          {hospital.specialties.map((specialty, i) => (
                            <Badge key={i} variant="secondary" className="mr-2 mb-2">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Locations</h4>
                        <p className="text-sm text-muted-foreground">{hospital.locations.join(', ')}</p>
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

export default Education;