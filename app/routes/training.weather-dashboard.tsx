import { useFetcher } from 'react-router';
import { useState, useEffect } from 'react';
import { Modal, IconButton, Button, Card, CardHeader, CardBody, CardFooter } from '@nwsconnect/atmosphere';

export default function WeatherDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const fetcher = useFetcher();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsResponse, stationsResponse] = await Promise.all([
          fetch('/api/weather-events?limit=8'),
          fetch('/api/weather-stations?limit=4')
        ]);
        
        const [eventsData, stationsData] = await Promise.all([
          eventsResponse.json(),
          stationsResponse.json()
        ]);
        
        setData({
          events: eventsData.data,
          stations: stationsData.data,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!data) return <div className="p-8 text-center">Failed to load data</div>;
  
  const { events, stations, timestamp } = data;

  const handleCreateEvent = () => {
    fetcher.submit(
      {
        eventType: 'Manual Alert',
        eventMagnitude: '3.5',
        location: 'Training Location',
        status: 'Active'
      },
      {
        method: 'POST',
        action: '/api/weather-events',
        encType: 'application/json'
      }
    );
  };

  const handleDeleteEvent = (eventId: string) => {
    fetcher.submit(
      {},
      {
        method: 'DELETE',
        action: `/api/weather-events/${eventId}`
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Weather Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Real-time weather monitoring powered by MSW • Last updated: {new Date(timestamp).toLocaleTimeString()}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onPress={() => window.location.reload()}
                className=""
              >
                Refresh Data
              </Button>
              <Button
                onPress={handleCreateEvent}
                isDisabled={fetcher.state === 'submitting'}
                className=""
              >
                {fetcher.state === 'submitting' ? 'Creating...' : 'Create Alert'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                <div className="w-6 h-6 text-red-600 dark:text-red-400">🚨</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-atm-text-negative">Active Events</p>
                <p className="text-2xl font-semibold text-atm-text-negative dark:text-white">
                  {events.filter((e: any) => e.status === 'Active').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <div className="w-6 h-6 text-yellow-600 dark:text-yellow-400">⚠️</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-atm-text-warning">Warnings</p>
                <p className="text-2xl font-semibold text-atm-text-warning dark:text-white">
                  {events.filter((e: any) => e.status === 'Warning').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <div className="w-6 h-6 text-blue-600 dark:text-blue-400">🌡️</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-atm-text-accent">Stations</p>
                <p className="text-2xl font-semibold text-atm-text-accent">{stations.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <div className="w-6 h-6 text-green-600 dark:text-green-400">✅</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-atm-text-positive">Resolved</p>
                <p className="text-2xl font-semibold text-atm-text-positive">
                  {events.filter((e: any) => e.status === 'Resolved').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weather Events */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Weather Events</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Showing {events.length} events from MSW mock API
                </p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {events.map((event: any) => (
                    <Card className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg" 
                      key={event.id} >
                      <div
                      className=" hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardHeader className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                            {event.eventType === 'Tornado' ? '🌪️' :
                             event.eventType === 'Hurricane' ? '🌀' :
                             event.eventType === 'Flood' ? '🌊' :
                             event.eventType === 'Earthquake' ? '🏔️' :
                             event.eventType === 'Wildfire' ? '🔥' : '❄️'}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white text-sm">{event.eventType}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Mag: {event.eventMagnitude}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.status === 'Active' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                          event.status === 'Warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          event.status === 'Watch' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {event.status}
                        </span>
                      </CardHeader>
                      
                      <CardBody className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <span className="w-3 h-3 mr-1">📍 </span>
                          &nbsp;{event.location}, {event.county}, {event.state}
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 mr-1">📅</span>
                          &nbsp;{new Date(event.date).toLocaleDateString()}
                        </div>
                      </CardBody>
                      
                      
                    </div>
                    <CardFooter className="flex mt-4">
                      <Button
                      color="destructive"
                      variant="outlined"
                      size="sm"
                      onPress={(e) => {
                        handleDeleteEvent(event.id);
                      }}
                      className="mt-2 text-xs text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Delete Event
                      </Button>
                    </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Weather Stations */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Weather Stations</h2>
              </div>
              
              <div className="p-6 space-y-4">
                {stations.map((station: any) => (
                  <div key={station.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-2">{station.name}</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Temp:</span>
                        <span className="ml-1 font-medium">{station.temperature}°F</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Humidity:</span>
                        <span className="ml-1 font-medium">{station.humidity}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Wind:</span>
                        <span className="ml-1 font-medium">{station.windSpeed} mph</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Pressure:</span>
                        <span className="ml-1 font-medium">{station.pressure}"</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {station.location} • Updated {new Date(station.lastUpdated).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MSW Status */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
              <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">🎯 MSW Exercise Complete!</h3>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li key="1">✅ Loader function fetching mock data</li>
                <li key="2">✅ Dynamic mock responses with Faker</li>
                <li key="3">✅ CRUD operations (Create/Delete)</li>
                <li key="4">✅ Error handling and loading states</li>
                <li key="5">✅ Real-time data refresh</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Event Detail Modal */}
  <Modal isOpen={!!selectedEvent} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            {selectedEvent ? (
              <Card className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
                <CardHeader className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedEvent.eventType}</h3>
                  <IconButton
                    onPress={() => setSelectedEvent(null)}
                    color='secondary'
                    variant='filled'
                  >
                    <i className="fa-solid fa-xmark-large"></i>
                  </IconButton>
                </CardHeader>
                <CardBody className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Location:</span> {selectedEvent.location}, {selectedEvent.county}, {selectedEvent.state}
                  </div>
                  <div>
                    <span className="font-medium">Magnitude:</span> {selectedEvent.eventMagnitude}
                  </div>
                  <div>
                    <span className="font-medium">Status:</span> {selectedEvent.status}
                  </div>
                  <div>
                    <span className="font-medium">Date:</span> {new Date(selectedEvent.date).toLocaleString()}
                  </div>
                  <div>
                    <span className="font-medium">Coordinates:</span> {selectedEvent.coordinates.lat.toFixed(4)}, {selectedEvent.coordinates.lng.toFixed(4)}
                  </div>
                  <div>
                    <span className="font-medium">Description:</span>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{selectedEvent.description}</p>
                  </div>
                </CardBody>
              </Card>
            ) : null}
        </Modal>
      </div>
    </div>
  );
}