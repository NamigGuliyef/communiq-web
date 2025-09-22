import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GoogleMaps = () => {
  const offices = [
    {
      name: 'CommuniQ Baku Office',
      address: 'Nizami Street 203, Baku, Azerbaijan',
      coordinates: '40.3777,49.8920',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.175234675997!2d49.8920!3d40.3777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzM5LjciTiA0OcKwNTMnMzEuMiJF!5e0!3m2!1sen!2s!4v1635789876543!5m2!1sen!2s'
    }
  ];

  const openInMaps = (coordinates: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">Our Office Location</h3>
        <p className="text-muted-foreground">Visit us or schedule a consultation</p>
      </div>
      
      {offices.map((office, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {office.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{office.address}</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src={office.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${office.name}`}
              />
            </div>
            
            <Button 
              onClick={() => openInMaps(office.coordinates)}
              className="w-full"
              variant="outline"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GoogleMaps;