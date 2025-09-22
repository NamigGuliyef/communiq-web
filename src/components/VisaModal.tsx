import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Star, Clock, Users, Plane, Building, Heart, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import visaD7Digital from '@/assets/visa-d7-digital.jpg';
import visaGolden from '@/assets/visa-golden.jpg';
import visaPassport from '@/assets/visa-passport.jpg';
import visaEuropeFlag from '@/assets/visa-europe-flag.jpg';

interface VisaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VisaModal = ({ isOpen, onClose }: VisaModalProps) => {
  const { t } = useLanguage();

  const visaTypes = [
    {
      name: 'D7 Visa (Passive Income)',
      icon: Star,
      duration: '1-3 months',
      forWho: 'Pensioners, Freelancers, Investors',
      benefits: ['No investment required', 'Path to citizenship', 'Family included'],
      description: 'Perfect for those with passive income like pensions, rental income, or royalties.',
      color: 'from-portugal-gold to-tile-terracotta'
    },
    {
      name: 'Golden Visa',
      icon: Building,
      duration: '6-12 months',
      forWho: 'High Net Worth Individuals',
      benefits: ['EU citizenship in 5 years', 'Only 7 days/year requirement', 'Tax flexibility'],
      description: 'Investment-based visa for those seeking EU citizenship with minimal residency.',
      color: 'from-primary to-ocean'
    },
    {
      name: 'Digital Nomad Visa',
      icon: Plane,
      duration: '2-4 months',
      forWho: 'Remote Workers, Freelancers',
      benefits: ['Live and work in Portugal', 'Bring family', 'No local employment'],
      description: 'Ideal for location-independent professionals earning from abroad.',
      color: 'from-ocean to-ocean-light'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
        <DialogHeader className="relative">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">
                🇵🇹 Your Portugal Visa Journey Starts Here
              </DialogTitle>
              <DialogDescription className="text-base md:text-lg text-muted-foreground">
                Discover the perfect visa option for your Portuguese adventure. Expert guidance every step of the way.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
          {/* Why Portugal Section */}
          <div className="bg-gradient-to-r from-tile-cream to-background p-4 md:p-6 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-portugal-gold" />
              Why Choose Portugal?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs md:text-sm">🏆 7th Safest Country</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs md:text-sm">🌍 EU Citizenship</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs md:text-sm">💰 Tax Benefits</Badge>
              </div>
            </div>
          </div>

          {/* Visa Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaTypes.map((visa, index) => {
              const IconComponent = visa.icon;
              const visaImages = [visaD7Digital, visaGolden, visaPassport];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-card to-card/90 overflow-hidden">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={visaImages[index]} 
                      alt={visa.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${visa.color} rounded-xl flex items-center justify-center mb-3`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{visa.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{visa.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{visa.forWho}</span>
                    </div>
                    <CardDescription className="text-sm">
                      {visa.description}
                    </CardDescription>
                    <div className="space-y-1">
                      {visa.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Star className="w-3 h-3 text-portugal-gold" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-ocean p-4 md:p-6 rounded-xl text-white text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Ready to Start Your Portugal Journey?</h3>
            <p className="text-white/90 mb-4 text-sm md:text-base">Get personalized guidance from our visa experts</p>
            <div className="flex flex-col gap-3 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  onClose();
                  window.location.href = '/contact';
                }}
                className="bg-white text-primary hover:bg-white/90 text-sm md:text-base"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  onClose();
                  window.location.href = '/visas';
                }}
                className="border-white text-white hover:bg-white/10 text-sm md:text-base"
              >
                Explore All Visas
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisaModal;
