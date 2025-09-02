import { create } from 'zustand';

interface MapCoordinates {
  lat: number;
  lng: number;
  zoom: number;
}

interface MapState {
  coordinates: MapCoordinates;
  markers: Array<{ id: string; lat: number; lng: number; title: string }>;
  selectedMarkerId: string | null;
  updateCoordinates: (coords: Partial<MapCoordinates>) => void;
  addMarker: (marker: { lat: number; lng: number; title: string }) => void;
  removeMarker: (id: string) => void;
  selectMarker: (id: string | null) => void;
}

export const useMapStore = create<MapState>((set, get) => ({
  coordinates: { lat: 40.7128, lng: -74.0060, zoom: 10 },
  markers: [],
  selectedMarkerId: null,
  
  updateCoordinates: (coords) => set((state) => ({
    coordinates: { ...state.coordinates, ...coords }
  })),
  
  addMarker: (marker) => set((state) => ({
    markers: [...state.markers, { ...marker, id: Date.now().toString() }]
  })),
  
  removeMarker: (id) => set((state) => ({
    markers: state.markers.filter(marker => marker.id !== id),
    selectedMarkerId: state.selectedMarkerId === id ? null : state.selectedMarkerId
  })),
  
  selectMarker: (id) => set({ selectedMarkerId: id }),
}));

// Selector examples for performance optimization
export const useMapCoordinates = () => useMapStore(state => state.coordinates);
export const useMarkers = () => useMapStore(state => state.markers);
export const useSelectedMarker = () => useMapStore(state => 
  state.markers.find(marker => marker.id === state.selectedMarkerId)
);