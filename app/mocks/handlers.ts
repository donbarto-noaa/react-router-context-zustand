import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

// Mock weather data generator
const generateWeatherEvent = (id?: string) => ({
  id: id || crypto.randomUUID(),
  eventType: faker.helpers.arrayElement(['Tornado', 'Hurricane', 'Flood', 'Earthquake', 'Wildfire', 'Blizzard']),
  eventMagnitude: faker.number.float({ min: 1, max: 10, fractionDigits: 1 }),
  state: faker.location.state({ abbreviated: true }),
  county: faker.location.county(),
  location: faker.location.city(),
  date: faker.date.recent({ days: 30 }).toISOString(),
  status: faker.helpers.arrayElement(['Active', 'Warning', 'Watch', 'Resolved']),
  description: faker.lorem.paragraph(),
  coordinates: {
    lat: faker.location.latitude(),
    lng: faker.location.longitude()
  },
  severity: faker.helpers.arrayElement(['Low', 'Medium', 'High', 'Critical'])
});

// Mock weather station data
const generateWeatherStation = () => ({
  id: crypto.randomUUID(),
  name: faker.company.name() + ' Weather Station',
  location: faker.location.city(),
  coordinates: {
    lat: faker.location.latitude(),
    lng: faker.location.longitude()
  },
  temperature: faker.number.int({ min: -20, max: 120 }),
  humidity: faker.number.int({ min: 0, max: 100 }),
  windSpeed: faker.number.int({ min: 0, max: 150 }),
  pressure: faker.number.float({ min: 28.0, max: 32.0, fractionDigits: 2 }),
  lastUpdated: faker.date.recent({ days: 1 }).toISOString()
});

export const handlers = [
  // Get all weather events
  http.get('/api/weather-events', ({ request }) => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const status = url.searchParams.get('status');
    
    let events = Array.from({ length: limit }, () => generateWeatherEvent());
    
    if (status) {
      events = events.filter(event => event.status === status);
    }
    
    return HttpResponse.json({
      data: events,
      total: events.length,
      page: 1,
      limit
    });
  }),

  // Get single weather event
  http.get('/api/weather-events/:id', ({ params }) => {
    const event = generateWeatherEvent(params.id as string);
    return HttpResponse.json({ data: event });
  }),

  // Create weather event
  http.post('/api/weather-events', async ({ request }) => {
    const newEvent = await request.json() as any;
    const event = {
      ...generateWeatherEvent(),
      ...newEvent,
      id: crypto.randomUUID(),
      date: new Date().toISOString()
    };
    
    return HttpResponse.json({ data: event }, { status: 201 });
  }),

  // Update weather event
  http.put('/api/weather-events/:id', async ({ params, request }) => {
    const updates = await request.json() as any;
    const event = {
      ...generateWeatherEvent(params.id as string),
      ...updates
    };
    
    return HttpResponse.json({ data: event });
  }),

  // Delete weather event
  http.delete('/api/weather-events/:id', ({ params }) => {
    return HttpResponse.json({ 
      message: `Event ${params.id} deleted successfully` 
    });
  }),

  // Get weather stations
  http.get('/api/weather-stations', ({ request }) => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '5');
    
    const stations = Array.from({ length: limit }, generateWeatherStation);
    
    return HttpResponse.json({
      data: stations,
      total: stations.length
    });
  }),

  // Get weather forecast
  http.get('/api/weather-forecast/:location', ({ params }) => {
    const forecast = Array.from({ length: 7 }, (_, index) => ({
      date: faker.date.future().toISOString().split('T')[0],
      temperature: {
        high: faker.number.int({ min: 60, max: 90 }),
        low: faker.number.int({ min: 30, max: 60 })
      },
      condition: faker.helpers.arrayElement(['Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Snowy']),
      precipitation: faker.number.int({ min: 0, max: 100 }),
      windSpeed: faker.number.int({ min: 0, max: 30 })
    }));
    
    return HttpResponse.json({
      location: params.location,
      forecast
    });
  }),

  // Simulate network delay for some endpoints
  http.get('/api/slow-endpoint', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return HttpResponse.json({ message: 'This was slow!' });
  }),

  // Simulate error responses
  http.get('/api/error-endpoint', () => {
    return HttpResponse.json(
      { error: 'Something went wrong!' },
      { status: 500 }
    );
  })
];