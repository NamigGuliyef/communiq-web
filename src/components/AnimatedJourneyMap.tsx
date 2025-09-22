import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Plane, FileText, CheckCircle } from 'lucide-react';

interface AnimatedJourneyMapProps {
  currentStep: number;
  language: 'az' | 'en';
}

const AnimatedJourneyMap = ({ currentStep, language }: AnimatedJourneyMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const markers = useRef<mapboxgl.Marker[]>([]);

  // Journey coordinates
  const journeyPoints = {
    azerbaijan: [49.8671, 40.4093] as [number, number], // Baku
    documents: [51.1657, 35.7219] as [number, number], // Tehran (document collection point)
    embassy: [2.3522, 48.8566] as [number, number], // Paris (embassy)
    portugal: [-9.1393, 38.7223] as [number, number] // Lisbon
  };

  const stageData = {
    0: {
      center: journeyPoints.azerbaijan,
      zoom: 6,
      title: {
        az: "Azərbaycanda Başlanğıc",
        en: "Starting in Azerbaijan"
      },
      description: {
        az: "Sənədlərin toplanması başlayır",
        en: "Document collection begins"
      },
      icon: FileText,
      color: '#3B82F6'
    },
    1: {
      center: journeyPoints.embassy,
      zoom: 5,
      title: {
        az: "Səfərə Hazırlıq",
        en: "Travel Preparation"
      },
      description: {
        az: "Konsulluq və AIMA təyinatları",
        en: "Embassy and AIMA appointments"
      },
      icon: Plane,
      color: '#F59E0B'
    },
    2: {
      center: journeyPoints.portugal,
      zoom: 7,
      title: {
        az: "Portuqaliyada Həyat",
        en: "Life in Portugal"
      },
      description: {
        az: "Yeni həyatın başlanğıcı",
        en: "New life begins"
      },
      icon: CheckCircle,
      color: '#10B981'
    }
  };

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: journeyPoints.azerbaijan,
        zoom: 4,
        pitch: 45,
        bearing: 0,
        projection: 'globe'
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add atmosphere
      map.current.on('style.load', () => {
        if (map.current) {
          map.current.setFog({
            color: 'rgb(186, 210, 235)',
            'high-color': 'rgb(36, 92, 223)',
            'horizon-blend': 0.02,
            'space-color': 'rgb(11, 11, 25)',
            'star-intensity': 0.6
          });
        }
      });

      setShowTokenInput(false);
      animateToStep(currentStep);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const animateToStep = (step: number) => {
    if (!map.current) return;

    const stage = stageData[step];
    if (!stage) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Animate camera to new position
    map.current.flyTo({
      center: stage.center,
      zoom: stage.zoom,
      pitch: step === 2 ? 60 : 45,
      bearing: step * 45,
      duration: 2000,
      essential: true
    });

    // Add journey path animation
    setTimeout(() => {
      if (step > 0) {
        animateJourneyPath(step);
      }
      addStageMarker(step);
    }, 1000);
  };

  const animateJourneyPath = (step: number) => {
    if (!map.current) return;

    const coordinates = [];
    
    switch (step) {
      case 1:
        coordinates.push(journeyPoints.azerbaijan, journeyPoints.embassy);
        break;
      case 2:
        coordinates.push(
          journeyPoints.azerbaijan, 
          journeyPoints.embassy, 
          journeyPoints.portugal
        );
        break;
    }

    if (coordinates.length > 1) {
      const geojson: GeoJSON.Feature<GeoJSON.LineString> = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coordinates
        }
      };

      // Add or update the route
      if (map.current.getSource('route')) {
        const source = map.current.getSource('route') as mapboxgl.GeoJSONSource;
        source.setData(geojson);
      } else {
        map.current.addSource('route', {
          type: 'geojson',
          data: geojson
        });

        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#FFE900',
            'line-width': 4,
            'line-opacity': 0.8
          }
        });

        // Animated dots along the path
        map.current.addLayer({
          id: 'route-dots',
          type: 'line',
          source: 'route',
          paint: {
            'line-color': '#FFFFFF',
            'line-width': 2,
            'line-dasharray': [0, 2]
          }
        });
      }
    }
  };

  const addStageMarker = (step: number) => {
    if (!map.current) return;

    const stage = stageData[step];
    const IconComponent = stage.icon;

    // Create custom marker element
    const markerEl = document.createElement('div');
    markerEl.className = 'custom-marker';
    markerEl.style.cssText = `
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, ${stage.color}, ${stage.color}dd);
      border: 3px solid white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      cursor: pointer;
      animation: bounce 2s infinite;
    `;

    // Add icon
    const iconSvg = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${getIconPath(stage.icon)}
      </svg>
    `;
    markerEl.innerHTML = iconSvg;

    // Add bounce animation styles
    if (!document.getElementById('marker-styles')) {
      const style = document.createElement('style');
      style.id = 'marker-styles';
      style.textContent = `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `;
      document.head.appendChild(style);
    }

    const marker = new mapboxgl.Marker(markerEl)
      .setLngLat(stage.center)
      .addTo(map.current);

    markers.current.push(marker);

    // Add popup
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(`
        <div class="p-3">
          <h3 class="font-bold text-lg mb-2">${stage.title[language]}</h3>
          <p class="text-sm text-gray-600">${stage.description[language]}</p>
        </div>
      `);

    marker.setPopup(popup);
  };

  const getIconPath = (IconComponent: any) => {
    if (IconComponent === FileText) {
      return '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline>';
    } else if (IconComponent === Plane) {
      return '<path d="M10.5 3L18.5 6L21 14L14 12L8 19L5 17L8 12L2 10L10.5 3Z"></path>';
    } else if (IconComponent === CheckCircle) {
      return '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline>';
    }
    return '<circle cx="12" cy="12" r="10"></circle>';
  };

  useEffect(() => {
    if (map.current && !showTokenInput) {
      animateToStep(currentStep);
    }
  }, [currentStep]);

  if (showTokenInput) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center space-y-4">
          <MapPin className="w-12 h-12 text-portugal-gold mx-auto" />
          <h3 className="text-lg font-semibold">
            {language === 'az' ? 'Xəritə Konfiqurasiyası' : 'Map Configuration'}
          </h3>
          <p className="text-muted-foreground text-sm">
            {language === 'az' 
              ? 'Animasiyalı səyahət xəritəsini görmək üçün Mapbox token daxil edin'  
              : 'Enter your Mapbox token to view the animated journey map'
            }
          </p>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSI..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="font-mono text-sm"
            />
            <Button 
              onClick={() => mapboxToken && initializeMap(mapboxToken)}
              disabled={!mapboxToken}
              className="w-full"
            >
              {language === 'az' ? 'Xəritəni Yüklə' : 'Load Map'}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {language === 'az' 
              ? 'Token almaq üçün mapbox.com saytına daxil olun'
              : 'Get your token from mapbox.com'
            }
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Stage Info Overlay */}
      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          {React.createElement(stageData[currentStep]?.icon || MapPin, { 
            className: "w-5 h-5 text-portugal-gold" 
          })}
          <h4 className="font-semibold text-sm">
            {stageData[currentStep]?.title[language]}
          </h4>
        </div>
        <p className="text-xs text-muted-foreground">
          {stageData[currentStep]?.description[language]}
        </p>
      </div>
    </div>
  );
};

export default AnimatedJourneyMap;