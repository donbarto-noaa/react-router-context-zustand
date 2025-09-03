import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface Marker {
  id: string;
  lng: number;
  lat: number;
  title: string;
  color?: string;
}

interface ReactMapProps {
  center?: [number, number];
  zoom?: number;
  markers?: Marker[];
  onMapClick?: (lng: number, lat: number) => void;
  onMarkerClick?: (marker: Marker) => void;
}

export default function ReactMap({ 
  center = [-74.0060, 40.7128], 
  zoom = 10,
  markers = [],
  onMapClick,
  onMarkerClick
}: ReactMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: maplibregl.Marker }>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center,
      zoom
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setIsLoaded(true);
      
      // Add GeoJSON source for demo data
      map.current?.addSource('demo-points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      // Add circle layer
      map.current?.addLayer({
        id: 'demo-circles',
        type: 'circle',
        source: 'demo-points',
        paint: {
          'circle-radius': 8,
          'circle-color': '#007cbf',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });
    });

    map.current.on('click', (e) => {
      onMapClick?.(e.lngLat.lng, e.lngLat.lat);
    });

    return () => {
      Object.values(markersRef.current).forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  // Update map center and zoom
  useEffect(() => {
    if (map.current && isLoaded) {
      map.current.flyTo({ center, zoom, duration: 1000 });
    }
  }, [center, zoom, isLoaded]);

  // Update markers
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add new markers
    markers.forEach(markerData => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = markerData.color || '#007cbf';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

      const marker = new maplibregl.Marker(el)
        .setLngLat([markerData.lng, markerData.lat])
        .setPopup(new maplibregl.Popup().setHTML(`<h3>${markerData.title}</h3>`))
        .addTo(map.current!);

      el.addEventListener('click', () => {
        onMarkerClick?.(markerData);
      });

      markersRef.current[markerData.id] = marker;
    });

    // Update GeoJSON source
    const geojsonData = {
      type: 'FeatureCollection' as const,
      features: markers.map(marker => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [marker.lng, marker.lat]
        },
        properties: {
          id: marker.id,
          title: marker.title
        }
      }))
    };

    const source = map.current.getSource('demo-points') as maplibregl.GeoJSONSource;
    source?.setData(geojsonData);
  }, [markers, isLoaded, onMarkerClick]);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden relative">
      <div ref={mapContainer} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-sm text-gray-600 dark:text-gray-300">Loading map...</div>
        </div>
      )}
    </div>
  );
}