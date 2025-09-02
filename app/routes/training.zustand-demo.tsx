import { useCounterStore } from '~/stores/counterStore';
import { useUserStore } from '~/stores/userStore';
import { useMapStore, useMapCoordinates, useMarkers } from '~/stores/mapStore';

export default function ZustandDemo() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Zustand Deep Dive</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <CounterExample />
        <UserProfileExample />
      </div>
      
      <MapExample />
      <PerformanceExample />
      <BestPractices />
    </div>
  );
}

function CounterExample() {
  const { count, increment, decrement, reset, incrementBy } = useCounterStore();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Basic Counter Store</h2>
      <div className="text-center mb-4">
        <span className="text-3xl font-bold">{count}</span>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
        >
          +1
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          -1
        </button>
        <button
          onClick={() => incrementBy(5)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          +5
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function UserProfileExample() {
  const { profile, updateProfile, updatePreferences } = useUserStore();

  const createProfile = () => {
    updateProfile({
      id: '1',
      name: 'Jane Smith',
      email: 'jane@example.com',
      preferences: {
        notifications: true,
        theme: 'light',
        language: 'en'
      }
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">User Profile Store</h2>
      
      {!profile ? (
        <button
          onClick={createProfile}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Profile
        </button>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => updateProfile({ name: e.target.value })}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={profile.preferences.notifications}
              onChange={(e) => updatePreferences({ notifications: e.target.checked })}
            />
            <label className="text-sm">Enable notifications</label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select
              value={profile.preferences.language}
              onChange={(e) => updatePreferences({ language: e.target.value })}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

function MapExample() {
  const { coordinates, updateCoordinates, addMarker, removeMarker } = useMapStore();
  const markers = useMarkers();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Map Coordinates Store</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Coordinates</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-xs">Latitude</label>
              <input
                type="number"
                step="0.0001"
                value={coordinates.lat}
                onChange={(e) => updateCoordinates({ lat: parseFloat(e.target.value) })}
                className="w-full p-1 border rounded text-sm dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs">Longitude</label>
              <input
                type="number"
                step="0.0001"
                value={coordinates.lng}
                onChange={(e) => updateCoordinates({ lng: parseFloat(e.target.value) })}
                className="w-full p-1 border rounded text-sm dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs">Zoom</label>
              <input
                type="range"
                min="1"
                max="20"
                value={coordinates.zoom}
                onChange={(e) => updateCoordinates({ zoom: parseInt(e.target.value) })}
                className="w-full"
              />
              <span className="text-xs">{coordinates.zoom}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Markers ({markers.length})</h3>
          <button
            onClick={() => addMarker({
              lat: coordinates.lat + (Math.random() - 0.5) * 0.01,
              lng: coordinates.lng + (Math.random() - 0.5) * 0.01,
              title: `Marker ${markers.length + 1}`
            })}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm mb-2"
          >
            Add Random Marker
          </button>
          
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {markers.map(marker => (
              <div key={marker.id} className="flex justify-between items-center text-sm bg-white dark:bg-gray-700 p-2 rounded">
                <span>{marker.title}</span>
                <button
                  onClick={() => removeMarker(marker.id)}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceExample() {
  const coordinates = useMapCoordinates(); // Selector - only re-renders when coordinates change
  const markers = useMarkers(); // Selector - only re-renders when markers change

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Performance with Selectors</h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-medium mb-2">Coordinates (Selector)</h4>
          <pre className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
            {JSON.stringify(coordinates, null, 2)}
          </pre>
          <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
            This component only re-renders when coordinates change
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Markers Count (Selector)</h4>
          <div className="bg-white dark:bg-gray-800 p-2 rounded">
            <span className="text-lg font-bold">{markers.length}</span>
          </div>
          <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
            This component only re-renders when markers array changes
          </p>
        </div>
      </div>
    </div>
  );
}

function BestPractices() {
  return (
    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Zustand Best Practices</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium mb-2">When to Use Zustand</h4>
          <ul className="space-y-1 text-sm">
            <li>✅ Frequently updating state</li>
            <li>✅ Complex state logic</li>
            <li>✅ State that needs fine-grained updates</li>
            <li>✅ Cross-component state sharing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Performance Tips</h4>
          <ul className="space-y-1 text-sm">
            <li>✅ Use selectors to prevent unnecessary re-renders</li>
            <li>✅ Split large stores into smaller ones</li>
            <li>✅ Use shallow equality for object selections</li>
            <li>✅ Avoid selecting entire store when possible</li>
          </ul>
        </div>
      </div>
    </div>
  );
}