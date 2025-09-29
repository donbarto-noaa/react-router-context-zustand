import { useState } from 'react';
import BasicMap from '~/components/BasicMap';
import ReactMap from '~/components/ReactMap';
import ZustandMap from '~/components/ZustandMap';
import { useMapStore } from '~/stores/mapStore';
import { Button, Select, Slider, SelectionLabel } from '@nwsconnect/atmosphere';
import { useToast } from '@nwsconnect/atmosphere';

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
    { id: '1', name: 'Default', url: 'https://demotiles.maplibre.org/style.json' },
    { id: '2', name: 'OpenStreetMap', url: 'https://tiles.stadiamaps.com/styles/osm_bright.json' }
  ];

  const [selectedStyleKey, setSelectedStyleKey] = useState('1');



  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">MapLibre GL JS Fundamentals</h1>
      
      {/* Exercise 1: Basic Map */}
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: Basic Map Initialization</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <SelectionLabel>Location Presets</SelectionLabel>
            <div className="space-y-1">
              {presets.map(preset => (
                <Button
                  key={preset.name}
                  onPress={() => setMapConfig(prev => ({ 
                    ...prev, 
                    center: preset.center, 
                    zoom: preset.zoom 
                  }))}
                >
                  {preset.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="max-w-sm">
            <Select
              items={styles}
              label="Map Style"
              selectedKey={selectedStyleKey}
              onSelectionChange={(selectedId) => {
                if (selectedId) {
                  setSelectedStyleKey(selectedId as string);
                  const selectedStyle = styles.find(style => style.id === selectedId);
                  if (selectedStyle) {
                    setMapConfig(prev => ({ ...prev, style: selectedStyle.url }));
                  }
                }
              }}
            >
              {(item) => item.name}
            </Select>
          </div>
          
          <div>
            <div className="">
              
              <Slider
                label="Zoom Level"
                minValue={1}
                maxValue={18}
                value={mapConfig.zoom}
                onChange={(value) => {
                  setMapConfig(prev => ({ ...prev, zoom: Array.isArray(value) ? value[0] : value }));
                }}
                defaultValue={10}
                step={1}
                size="small"
                fill="amount"
                compact={true}
              />
            </div>
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
  const { addToast } = useToast();
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
    addToast({
      variant: 'info',
      title: 'Marker Clicked',
      message: `Clicked on: ${marker.title}`
    });
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Phase 2: React Integration (2 hours)</h2>
      
      <div className="mb-4">
        <div className="mb-2">
          <Button
            onPress={() => addToast({
              variant: 'info',
              title: 'Test Toast',
              message: 'Toast is working in MapLibre demo!'
            })}
          >
            Test Toast
          </Button>
        </div>
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
            <Button
              onPress={() => addMarker({
                lat: coordinates.lat + (Math.random() - 0.5) * 0.01,
                lng: coordinates.lng + (Math.random() - 0.5) * 0.01,
                title: `Random Marker ${markers.length + 1}`
              })}
            >
              Add Random Marker
            </Button>
            {markers.length > 0 && (
              <Button
                onPress={() => removeMarker(markers[markers.length - 1].id)}
              >
                Remove Last Marker
              </Button>
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