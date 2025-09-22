import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';
import portugalCoast from '@/assets/portugal-coast.jpg';
import portugalArchitecture from '@/assets/portugal-architecture.jpg';
import portugalLifestyle from '@/assets/portugal-lifestyle.jpg';
import heroImage from '@/assets/hero-lisbon.jpg';

const GallerySection = () => {
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sunlightHours, setSunlightHours] = useState(8);
  const [portugalWeather, setPortugalWeather] = useState<{ temp: string; city: string } | null>(null);
  const [distanceToPortugal, setDistanceToPortugal] = useState<string>('943 km');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Calculate dynamic sunlight hours based on time of year
    const calculateSunlightHours = () => {
      const now = new Date();
      const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      // Simulate Portugal's sunlight hours (6-12 hours based on season)
      const baseHours = 9 + 3 * Math.sin((dayOfYear / 365) * 2 * Math.PI);
      return Math.round(baseHours);
    };

    // Calculate distance to Portugal
    const calculateDistanceToPortugal = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Lisbon coordinates
            const lisbonLat = 38.7223;
            const lisbonLng = -9.1393;
            
            // Calculate distance using Haversine formula
            const R = 6371; // Earth's radius in km
            const dLat = (lisbonLat - latitude) * Math.PI / 180;
            const dLng = (lisbonLng - longitude) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(latitude * Math.PI / 180) * Math.cos(lisbonLat * Math.PI / 180) * 
              Math.sin(dLng/2) * Math.sin(dLng/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            const distance = R * c;
            
            setDistanceToPortugal(`${Math.round(distance)} km`);
          },
          (error) => {
            console.log('Location not available, using default distance');
            setDistanceToPortugal('943 km'); // Portugal's coastline length as fallback
          }
        );
      } else {
        setDistanceToPortugal('943 km'); // Fallback if geolocation not supported
      }
    };

    // Fetch Portugal weather
    const fetchPortugalWeather = async () => {
      try {
        const response = await fetch('https://wttr.in/Lisbon,Portugal?format=%t');
        const tempText = await response.text();
        setPortugalWeather({ temp: tempText.trim(), city: 'Lisbon' });
      } catch (error) {
        console.error('Weather fetch failed:', error);
        setPortugalWeather({ temp: '20°C', city: 'Lisbon' }); // Fallback
      }
    };

    setSunlightHours(calculateSunlightHours());
    calculateDistanceToPortugal();
    fetchPortugalWeather();
    
    // Update weather every 10 minutes
    const weatherInterval = setInterval(fetchPortugalWeather, 10 * 60 * 1000);
    
    return () => {
      clearInterval(interval);
      clearInterval(weatherInterval);
    };
  }, []);

  const galleryImages = [
    {
      src: heroImage,
      alt: 'Lisbon cityscape with orange rooftops',
      title: t('gallery.lisbon'),
      description: t('gallery.lisbon.desc')
    },
    {
      src: portugalCoast,
      alt: 'Portuguese coastal town',
      title: t('gallery.coast'),
      description: t('gallery.coast.desc')
    },
    {
      src: portugalArchitecture,
      alt: 'Modern Portuguese architecture',
      title: t('gallery.modern'),
      description: t('gallery.modern.desc')
    },
    {
      src: portugalLifestyle,
      alt: 'Portuguese lifestyle scene',
      title: t('gallery.community'),
      description: t('gallery.community.desc')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-tile-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the beauty, culture, and lifestyle that await you in Portugal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 aspect-[4/3]"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-white rounded-xl p-6 shadow-card">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">{t('stats.sunshine')}</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ocean">
                {portugalWeather?.temp || '20°C'}
              </div>
              <div className="text-sm text-muted-foreground">{t('stats.temperature')}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {sunlightHours} {t('stats.hours')}
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-portugal-gold">{distanceToPortugal}</div>
              <div className="text-sm text-muted-foreground">{t('stats.distance')}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {new Date().toLocaleTimeString('pt-PT', { 
                  timeZone: 'Europe/Lisbon', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })} Lisbon time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;