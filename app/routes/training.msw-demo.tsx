import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@nwsconnect/atmosphere';

export default function MSWDemo() {
  
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mock Service Worker (MSW) Training</h1>
      
      {/* Phase 1: MSW Fundamentals */}
      <Phase1Fundamentals />
      
      {/* Phase 2: React Integration */}
      <Phase2Integration />
      
      {/* Phase 3: Practical Exercise */}
      <Phase3Practice />
    </div>
  );
}

function Phase1Fundamentals() {
  const [mswStatus, setMswStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    // Check if MSW is running
    const checkMSW = async () => {
      try {
        const response = await fetch('/api/weather-events?limit=1');
        if (response.ok) {
          setMswStatus('ready');
        } else {
          setMswStatus('error');
        }
      } catch (error) {
        setMswStatus('error');
      }
    };

    checkMSW();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Phase 1: MSW Fundamentals (2 hours)</h2>
      
      {/* MSW Status */}
      <div className="mb-6 p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-2">MSW Status</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${
            mswStatus === 'ready' ? 'bg-green-500' : 
            mswStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500'
          }`} />
          <span className="text-sm">
            {mswStatus === 'ready' ? 'MSW is running and intercepting requests' :
             mswStatus === 'error' ? 'MSW is not configured - follow setup instructions' :
             'Checking MSW status...'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Concepts */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Concepts</h3>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Service Worker Level</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                MSW intercepts requests at the network level, not in your application code
              </p>
            </div>
            
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Request Handlers</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                Define handlers for different HTTP methods (GET, POST, PUT, DELETE)
              </p>
            </div>
            
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
              <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Dynamic Responses</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Generate realistic mock data based on request parameters
              </p>
            </div>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Setup Instructions</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <h4 className="font-medium mb-2">1. Install Dependencies</h4>
              <p className="code">
                npm install msw @mswjs/data faker
              </p>
            </div>
            
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <h4 className="font-medium mb-2">2. Initialize Service Worker</h4>
              <p className="code">
                npx msw init public/ --save
              </p>
            </div>
            
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <h4 className="font-medium mb-2">3. Start MSW in Browser</h4>
              <p className="code">
                worker.start()
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Handler Examples */}
      <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Request Handler Examples</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">GET Handler</h4>
            <pre className="code">
{`http.get('/api/weather-events', ({ request }) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  
  return HttpResponse.json({
    data: generateEvents(limit),
    total: 100
  });
});`}
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">POST Handler</h4>
            <pre className="code">
{`http.post('/api/weather-events', async ({ request }) => {
  const newEvent = await request.json();
  
  return HttpResponse.json({
    data: { ...newEvent, id: uuid() }
  }, { status: 201 });
});`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phase2Integration() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async (limit = 5) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/weather-events?limit=${limit}`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setEvents(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async () => {
    try {
      const response = await fetch('/api/weather-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType: 'Test Event',
          eventMagnitude: 5.0,
          location: 'Test Location',
          status: 'Active'
        })
      });
      
      if (response.ok) {
        fetchEvents(); // Refresh list
      }
    } catch (err) {
      setError('Failed to create event');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Phase 2: React Integration (2 hours)</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Testing */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">API Testing</h3>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                onPress={() => fetchEvents(3)}
                isDisabled={loading}
              >
                {loading ? 'Loading...' : 'Fetch 3 Events'}
              </Button>
              
              <Button
                onPress={() => fetchEvents(10)}
                isDisabled={loading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded text-sm"
              >
                Fetch 10 Events
              </Button>
              
              <Button
                onPress={createEvent}
                isDisabled={loading}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-4 py-2 rounded text-sm"
              >
                Create Event
              </Button>
            </div>
            
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded text-sm">
                Error: {error}
              </div>
            )}
            
            <div className="max-h-64 overflow-y-auto">
              {events.map((event, index) => (
                <div key={event.id || index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded mb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-sm">{event.eventType}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {event.location} • Magnitude: {event.eventMagnitude}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      event.status === 'Active' ? 'bg-red-100 text-red-800' :
                      event.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Patterns */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Integration Patterns</h3>
          
          <div className="space-y-4">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded">
              <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">React Router Loaders</h4>
              <p className="code">
                {`export async function loader() {
                  const response = await fetch('/api/weather-events');
                  return response.json();
                }`}
              </p>
            </div>
            
            <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded">
              <h4 className="font-medium text-teal-900 dark:text-teal-100 mb-2">useEffect Pattern</h4>
              <p className="code">
                {`useEffect(() => {
                  fetch('/api/weather-events')
                    .then(res => res.json())
                    .then(setData);
                }, []);`}
              </p>
            </div>
            
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
              <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">Error Handling</h4>
              <p className="code">
                {`try {
                  const response = await fetch('/api/endpoint');
                  if (!response.ok) throw new Error('Failed');
                  const data = await response.json();
                } catch (error) {
                  setError(error.message);
                }`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phase3Practice() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Phase 3: Practical Exercise (2 hours)</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Exercise: Weather Dashboard</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-400">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Your Task:</h4>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Create a new route with loader function</li>
                <li>• Fetch data from mock API endpoints</li>
                <li>• Display weather events and stations</li>
                <li>• Handle loading and error states</li>
                <li>• Implement CRUD operations</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400">
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Available Endpoints:</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• GET /api/weather-events</li>
                <li>• GET /api/weather-stations</li>
                <li>• GET /api/weather-forecast/:location</li>
                <li>• POST /api/weather-events</li>
                <li>• PUT /api/weather-events/:id</li>
                <li>• DELETE /api/weather-events/:id</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
             <Button 
                color="accent"
                variant="filled"
                onPress={() => navigate('/training/weather-dashboard')}
              >
                Start Exercise →
              </Button>
            </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Learning Objectives</h3>
          
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">MSW Setup</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Configure service worker</li>
                <li>• Define request handlers</li>
                <li>• Generate dynamic mock data</li>
              </ul>
            </div>
            
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
              <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">React Integration</h4>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Use with React Router loaders</li>
                <li>• Handle async operations</li>
                <li>• Manage loading states</li>
              </ul>
            </div>
            
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Best Practices</h4>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Realistic mock data</li>
                <li>• Error simulation</li>
                <li>• Network delay testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}