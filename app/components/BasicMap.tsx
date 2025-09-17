import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface BasicMapProps {
  center?: [number, number];
  zoom?: number;
  style?: string;
}

export default function BasicMap({ 
  center = [-74.0060, 40.7128], 
  zoom = 10,
  style = 'https://demotiles.maplibre.org/style.json'
}: BasicMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    console.log('Initializing map');

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style,
      center,
      zoom
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      console.log('Map loaded successfully');
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []); // Only run once

  // Update map properties when they change
  useEffect(() => {
    if (!map.current) return;
    map.current.setCenter(center);
    map.current.setZoom(zoom);
  }, [center, zoom]);

  useEffect(() => {
    if (!map.current) return;
    map.current.setStyle(style);
  }, [style]);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-red-500">
      <div 
        ref={mapContainer} 
        className="w-full h-full bg-gray-200" 
        style={{ minHeight: '384px' }}
      />
    </div>
  );
}