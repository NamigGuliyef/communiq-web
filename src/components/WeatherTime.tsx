import React, { useState, useEffect } from 'react';
import { Clock, Thermometer } from 'lucide-react';

const WeatherTime = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<{ temp: number; city: string } | null>(null);

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Fetch weather data (using a free service)
    const fetchWeather = async () => {
      try {
        // Using wttr.in for free weather data for Baku
        const response = await fetch('https://wttr.in/Baku?format=%t');
        const tempText = await response.text();
        const temp = parseInt(tempText.replace(/[^\d-]/g, ''));
        setWeather({ temp, city: 'Baku' });
      } catch (error) {
        console.error('Weather fetch failed:', error);
        setWeather({ temp: 20, city: 'Baku' }); // Fallback
      }
    };

    fetchWeather();
    // Update weather every 10 minutes
    const weatherInterval = setInterval(fetchWeather, 10 * 60 * 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <div>
          <div className="font-mono">{formatTime(time)}</div>
          <div className="text-xs">{formatDate(time)}</div>
        </div>
      </div>
      
      {weather && (
        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4" />
          <div>
            <div className="font-mono">{weather.temp}°C</div>
            <div className="text-xs">{weather.city}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherTime;