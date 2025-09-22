import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MapboxMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [49.8671, 40.4093], // Baku coordinates
        zoom: 12,
      });

      // Add marker for Nizami district, Baku
      new mapboxgl.Marker({ color: '#dc2626' })
        .setLngLat([49.8671, 40.4093])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div style="padding: 8px;"><strong>CommuniQ Office</strong><br/>Nizami District, Baku</div>')
        )
        .addTo(map.current);

      map.current.on('load', () => {
        setIsMapLoaded(true);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapLoaded && !mapboxToken) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Office Location Map</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div>
              <Label htmlFor="mapboxToken">
                Mapbox Public Token 
                <span className="text-sm text-muted-foreground ml-2">
                  (Get yours at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>)
                </span>
              </Label>
              <Input
                id="mapboxToken"
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiAYouR_ToKeN_HeRe..."
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full">
              Load Map
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-0">
        <div ref={mapContainer} className="h-64 w-full rounded-lg" />
        {isMapLoaded && (
          <div className="p-4 bg-secondary/10">
            <p className="text-sm text-muted-foreground text-center">
              📍 CommuniQ Office - Nizami District, Baku, Azerbaijan
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MapboxMap;