import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import WeatherTime from '@/components/WeatherTime';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-8 h-8 flex items-center justify-center relative">
                  <img
                src="/communiq-logo.png" // Şəkil faylınızın yolu
                alt="Flag"
                className="w-6 h-6 object-cover"
              />
              </div>
              <span className="text-xl font-bold">CommuniQ</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Your trusted partner for Portugal immigration and relocation services.
            </p>
            <WeatherTime />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services.title')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Golden Visa Program</li>
              <li>D7 Visa Support</li>
              <li>Real Estate Guidance</li>
              <li>Banking Setup</li>
              <li>Education Services</li>
              <li>Healthcare Orientation</li>
            </ul>
          </div>

          {/* Contact Info - Right Side */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-portugal-gold" />
                <div className="text-sm">
                  <a href="mailto:info@communiq.net" className="hover:text-portugal-gold transition-colors">
                    info@communiq.net
                  </a>
            
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-portugal-gold" />
                <a href="tel:+994772337272" className="text-sm hover:text-portugal-gold transition-colors">
                  +994 77 233 72 72
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-portugal-gold" />
                <a 
                  href="https://wa.me/994772337272" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-portugal-gold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-portugal-gold" />
                <span className="text-sm">Baku, Azerbaijan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; 2025 CommuniQ.com. All rights reserved.{' '}
            <a
              href="https://techub.az"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-portugal-gold transition-colors"
            >
              Techub.az
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;