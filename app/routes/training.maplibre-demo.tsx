import { useState } from 'react';
import BasicMap from '~/components/BasicMap';
import ReactMap from '~/components/ReactMap';
import ZustandMap from '~/components/ZustandMap';
import { useMapStore } from '~/stores/mapStore';

export default function MapLibreDemo() {
  const [mapConfig, setMapConfig] = useState({
    center: [-74.0060, 40.7128] as [number, number],
    zoom: 10,
    style: 'https://demotiles.maplibre.org/style.json'
  });

  const presets = [
    { name: 'New York', center: [-74.0060, 40.7128] as [number, number], zoom: 12 },
    { name: 'San Francisco', center: [-122.4194, 37.7749] as [number, number], zoom: 12 },
    { name: 'London', center: [-0.1276, 51.5074] as [number, number], zoom: 12 },
    { name: 'Tokyo', center: [139.6917, 35.6895] as [number, number], zoom: 12 }
  ];

  const styles = [
    { name: 'Default', url: 'https://demotiles.maplibre.org/style.json' },
    { name: 'OpenStreetMap', url: 'https://tiles.stadiamaps.com/styles/osm_bright.json' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">MapLibre GL JS Fundamentals</h1>
      
      {/* Exercise 1: Basic Map */}
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: Basic Map Initialization</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Location Presets</label>
            <div className="space-y-1">
              {presets.map(preset => (
                <button
                  key={preset.name}
                  onClick={() => setMapConfig(prev => ({ 
                    ...prev, 
                    center: preset.center, 
                    zoom: preset.zoom 
                  }))}
                  className="block w-full text-left px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Map Style</label>
            <select
              value={mapConfig.style}
              onChange={(e) => setMapConfig(prev => ({ ...prev, style: e.target.value }))}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            >
              {styles.map(style => (
                <option key={style.name} value={style.url}>{style.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Zoom Level</label>
            <input
              type="range"
              min="1"
              max="18"
              value={mapConfig.zoom}
              onChange={(e) => setMapConfig(prev => ({ ...prev, zoom: parseInt(e.target.value) }))}
              className="w-full"
            />
            <span className="text-sm">{mapConfig.zoom}</span>
          </div>
        </div>
        
        <BasicMap 
          center={mapConfig.center}
          zoom={mapConfig.zoom}
          style={mapConfig.style}
        />
        
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
          <strong>Learning Goals:</strong>
          <ul className="mt-1 space-y-1">
            <li>• Map initialization with center, zoom, and style</li>
            <li>• Adding navigation controls</li>
            <li>• Handling map events (load, click, move)</li>
            <li>• Proper cleanup with useEffect</li>
          </ul>
        </div>
      </section>

      {/* Phase 2: React Integration */}
      <ReactIntegrationExample />
      
      {/* Phase 3: Zustand Integration */}
      <ZustandIntegrationExample />
    </div>
  );
}

function ReactIntegrationExample() {
  const [reactMarkers, setReactMarkers] = useState([
    { id: '1', lng: -74.0060, lat: 40.7128, title: 'New York', color: '#ff6b6b' },
    { id: '2', lng: -73.9857, lat: 40.7484, title: 'Times Square', color: '#4ecdc4' }
  ]);
  const [clickedPoint, setClickedPoint] = useState<{lng: number, lat: number} | null>(null);

  const handleMapClick = (lng: number, lat: number) => {
    setClickedPoint({ lng, lat });
    const newMarker = {
      id: Date.now().toString(),
      lng,
      lat,
      title: `Clicked Point ${reactMarkers.length + 1}`,
      color: '#95a5a6'
    };
    setReactMarkers(prev => [...prev, newMarker]);
  };

  const handleMarkerClick = (marker: any) => {
    alert(`Clicked on: ${marker.title}`);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Phase 2: React Integration (2 hours)</h2>
      
      <div className="mb-4">
        <ReactMap 
          center={[-74.0060, 40.7128]}
          zoom={12}
          markers={reactMarkers}
          onMapClick={handleMapClick}
          onMarkerClick={handleMarkerClick}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <h4 className="font-medium mb-2">Interactive Features:</h4>
          <ul className="text-sm space-y-1">
            <li>• Click map to add markers</li>
            <li>• Click markers for popups</li>
            <li>• Markers with custom colors</li>
            <li>• GeoJSON layer integration</li>
          </ul>
        </div>
        
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
          <h4 className="font-medium mb-2">Learning Goals:</h4>
          <ul className="text-sm space-y-1">
            <li>• useEffect for map lifecycle</li>
            <li>• useRef for map instance</li>
            <li>• Props-driven map updates</li>
            <li>• Event handling patterns</li>
          </ul>
        </div>
      </div>
      
      {clickedPoint && (
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
          <strong>Last clicked:</strong> {clickedPoint.lat.toFixed(4)}, {clickedPoint.lng.toFixed(4)}
        </div>
      )}
    </section>
  );
}

function ZustandIntegrationExample() {
  const { coordinates, markers, addMarker, removeMarker } = useMapStore();

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Phase 3: Zustand Integration (2 hours)</h2>
      
      <div className="mb-4">
        <ZustandMap />
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
          <h4 className="font-medium mb-2">Current State:</h4>
          <div className="text-sm space-y-1">
            <div>Lat: {coordinates.lat}</div>
            <div>Lng: {coordinates.lng}</div>
            <div>Zoom: {coordinates.zoom}</div>
            <div>Markers: {markers.length}</div>
          </div>
        </div>
        
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded">
          <h4 className="font-medium mb-2">Actions:</h4>
          <div className="space-y-2">
            <button
              onClick={() => addMarker({
                lat: coordinates.lat + (Math.random() - 0.5) * 0.01,
                lng: coordinates.lng + (Math.random() - 0.5) * 0.01,
                title: `Random Marker ${markers.length + 1}`
              })}
              className="block w-full bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Add Random Marker
            </button>
            {markers.length > 0 && (
              <button
                onClick={() => removeMarker(markers[markers.length - 1].id)}
                className="block w-full bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Remove Last Marker
              </button>
            )}
          </div>
        </div>
        
        <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded">
          <h4 className="font-medium mb-2">Learning Goals:</h4>
          <ul className="text-sm space-y-1">
            <li>• State synchronization</li>
            <li>• Selector optimization</li>
            <li>• Bidirectional updates</li>
            <li>• Performance patterns</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded">
        <h4 className="font-medium mb-2">🎯 Interactive Exercise:</h4>
        <p className="text-sm mb-2">
          Click on the map to add markers. Notice how the state updates in real-time 
          and is shared with the Zustand demo on the other training page!
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Try opening both training.zustand-demo and training.maplibre-demo in separate tabs 
          to see the state synchronization in action.
        </p>
      </div>
    </section>
  );
}