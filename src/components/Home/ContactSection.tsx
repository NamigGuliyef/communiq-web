import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    visaType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.visaType) {
      alert('Please select a visa type.');
      return;
    }

    const visaLabel = visaTypes.find((v) => v.value === formData.visaType)?.label || '';
    const message = `I am interested in "${visaLabel}"`;

    const phoneNumber = '+994772333838'; // Replace with your target WhatsApp number, no spaces or '+' if needed
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      visaType: value
    });
  };

  const visaTypes = [
    { value: 'd7', label: 'D7 Visa (Passive Income)' },
    { value: 'golden', label: 'Golden Visa' },
    { value: 'digital-nomad', label: 'Digital Nomad Visa' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-ocean">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                {t('contact.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="visaType">Visa Type Interest</Label>
                  <Select value={formData.visaType} onValueChange={handleSelectChange}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select visa type you're interested in" />
                    </SelectTrigger>
                    <SelectContent>
                      {visaTypes.map((visa) => (
                        <SelectItem key={visa.value} value={visa.value}>
                          {visa.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  {t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-portugal-gold rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-white/80">info@passportu.eu</p>
                    <p className="text-white/80">info@aviangroupco.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-portugal-gold rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('contact.phone')}</h3>
                    <p className="text-white/80">+994 77 233 3838</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-portugal-gold rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('contact.office')}</h3>
                    <p className="text-white/80">Baku, Azerbaijan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
