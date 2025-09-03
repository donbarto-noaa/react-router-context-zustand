import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useMapStore, useMapCoordinates, useMarkers } from '~/stores/mapStore';

export default function ZustandMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: maplibregl.Marker }>({});
  
  const coordinates = useMapCoordinates();
  const markers = useMarkers();
  const { updateCoordinates, addMarker, selectMarker } = useMapStore();

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [coordinates.lng, coordinates.lat],
      zoom: coordinates.zoom
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    // Sync map state with Zustand store
    map.current.on('moveend', () => {
      if (!map.current) return;
      const center = map.current.getCenter();
      const zoom = Math.round(map.current.getZoom());
      
      updateCoordinates({
        lat: Number(center.lat.toFixed(4)),
        lng: Number(center.lng.toFixed(4)),
        zoom
      });
    });

    // Add marker on click
    map.current.on('click', (e) => {
      addMarker({
        lat: Number(e.lngLat.lat.toFixed(4)),
        lng: Number(e.lngLat.lng.toFixed(4)),
        title: `Marker ${markers.length + 1}`
      });
    });

    return () => {
      Object.values(markersRef.current).forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  // Update map when coordinates change from store
  useEffect(() => {
    if (map.current) {
      const currentCenter = map.current.getCenter();
      const currentZoom = map.current.getZoom();
      
      // Only update if significantly different to avoid infinite loops
      if (
        Math.abs(currentCenter.lat - coordinates.lat) > 0.001 ||
        Math.abs(currentCenter.lng - coordinates.lng) > 0.001 ||
        Math.abs(currentZoom - coordinates.zoom) > 0.5
      ) {
        map.current.flyTo({
          center: [coordinates.lng, coordinates.lat],
          zoom: coordinates.zoom,
          duration: 1000
        });
      }
    }
  }, [coordinates]);

  // Update markers when store changes
  useEffect(() => {
    if (!map.current) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add new markers
    markers.forEach(markerData => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = '#007cbf';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

      const marker = new maplibregl.Marker(el)
        .setLngLat([markerData.lng, markerData.lat])
        .setPopup(
          new maplibregl.Popup().setHTML(`
            <div>
              <h3 class="font-semibold">${markerData.title}</h3>
              <p class="text-sm text-gray-600">
                ${markerData.lat.toFixed(4)}, ${markerData.lng.toFixed(4)}
              </p>
            </div>
          `)
        )
        .addTo(map.current!);

      el.addEventListener('click', () => {
        selectMarker(markerData.id);
      });

      markersRef.current[markerData.id] = marker;
    });
  }, [markers, selectMarker]);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}