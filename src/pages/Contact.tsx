import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import MapboxMap from '@/components/MapboxMap';
import EmailPreview from '@/components/EmailPreview';
import { useToast } from '@/hooks/use-toast';
import GoogleMaps from '@/components/GoogleMaps';
import SectionBanner from '@/components/SectionBanner';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    visaType: ''
  });
  // const [showEmailPreview, setShowEmailPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate visa type
    if (!formData.visaType) {
      toast({
        title: "Please select a visa type.",
        variant: "destructive"
      });
      return;
    }

    const visaLabel = visaTypes.find((v) => v.value === formData.visaType)?.label || '';
    const message = `I am interested in "${visaLabel}".`;

    const whatsappNumber = '994772337272'; // No '+' or spaces
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <SectionBanner
          title={t('page.contact.title')}
          subtitle="Ready to start your Portugal journey? Get in touch with our expert team"
        />
        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
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
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-ocean text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & Google Maps */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{t('contact.info.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a href="mailto:info@communiq.net" className="text-muted-foreground hover:text-primary transition-colors block">
                          info@communiq.net
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <a href="tel:+994772337272" className="text-muted-foreground hover:text-primary transition-colors">
                          +994 77 233 72 72
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
                        <p className="text-muted-foreground">Baku, Azerbaijan</p>
                        <p className="text-muted-foreground">Serving clients relocating to Portugal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps */}
              </div>
            </div>
            <div className='min-w-80 py-5 pt-8 mt-8'>
              <GoogleMaps />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Email Preview Modal */}
      {/* {showEmailPreview && (
        <EmailPreview
          formData={formData}
          onClose={() => setShowEmailPreview(false)}
        />
      )} */}
    </div>
  );
};

export default Contact;
