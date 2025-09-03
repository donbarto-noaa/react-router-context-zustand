export default function TrainingIndex() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Client State Management Training</h1>
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">2.1 React Context (2 hours)</h2>
          <ul className="space-y-2 text-sm">
            <li>✅ Context API fundamentals</li>
            <li>✅ Provider pattern</li>
            <li>✅ useContext hook</li>
            <li>✅ When to use Context</li>
            <li>✅ Performance considerations</li>
          </ul>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">2.2 Zustand Deep Dive (2 hours)</h2>
          <ul className="space-y-2 text-sm">
            <li>✅ Zustand core principles</li>
            <li>✅ Creating stores</li>
            <li>✅ Actions and state updates</li>
            <li>✅ Selectors for performance</li>
            <li>✅ Complex state patterns</li>
          </ul>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">2.3 Practical Exercise (2 hours)</h2>
          <ul className="space-y-2 text-sm">
            <li>✅ Theme management with Context</li>
            <li>✅ Dynamic state with Zustand</li>
            <li>✅ Performance optimization</li>
            <li>✅ Best practices</li>
            <li>✅ Integration patterns</li>
          </ul>
        </div>
        
        <div className="bg-green-100 dark:bg-green-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">3.0 MapLibre GL JS (6 hours)</h2>
          <ul className="space-y-2 text-sm">
            <li>🗺️ MapLibre fundamentals</li>
            <li>⚛️ React integration</li>
            <li>🏪 Zustand synchronization</li>
            <li>📍 Markers and popups</li>
            <li>🎯 Interactive exercises</li>
          </ul>
          <a 
            href="/training/maplibre-demo" 
            className="inline-block mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            Start MapLibre Training →
          </a>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Key Learning Objectives</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Context API</h4>
            <ul className="text-sm space-y-1">
              <li>• Global state for infrequent updates</li>
              <li>• Theme and authentication state</li>
              <li>• Provider composition patterns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Zustand</h4>
            <ul className="text-sm space-y-1">
              <li>• Frequent state updates</li>
              <li>• Complex state logic</li>
              <li>• Performance with selectors</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">MapLibre GL JS</h4>
            <ul className="text-sm space-y-1">
              <li>• Interactive mapping</li>
              <li>• React lifecycle integration</li>
              <li>• State synchronization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}