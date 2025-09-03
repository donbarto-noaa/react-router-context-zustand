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
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style,
      center,
      zoom
    });

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    // Map event handlers
    map.current.on('load', () => {
      console.log('Map loaded successfully');
    });

    map.current.on('click', (e) => {
      console.log('Map clicked at:', e.lngLat);
    });

    map.current.on('move', () => {
      const center = map.current?.getCenter();
      const zoom = map.current?.getZoom();
      console.log('Map moved - Center:', center, 'Zoom:', zoom);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [center, zoom, style]);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}