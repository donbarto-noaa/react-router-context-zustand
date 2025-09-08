# Mock Service Worker (MSW) Study Guide 🚧

## Overview
Master API mocking with MSW to develop and test applications independently of backend services.

## 📚 Study Plan (6 hours total)

### Phase 1: MSW Fundamentals (2 hours)

#### 🎯 Learning Objectives
- Understand service worker-based request interception
- Set up MSW for browser and Node.js environments
- Create request handlers for different HTTP methods
- Generate dynamic mock data with Faker.js

#### 🔧 What is MSW?

**Service Worker Level Interception**
- MSW intercepts network requests at the service worker level
- No changes needed in your application code
- Works with any HTTP client (fetch, axios, etc.)
- Provides realistic network behavior

**Key Advantages**
- **Realistic**: Actual network requests are made
- **Flexible**: Works with any framework or library
- **Maintainable**: Centralized mock definitions
- **Testable**: Same mocks for development and testing

#### 🚀 Setup Process

**1. Installation**
```bash
npm install msw @mswjs/data faker
```

**2. Initialize Service Worker**
```bash
npx msw init public/ --save
```

**3. Create Request Handlers**
```typescript
// app/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/weather-events', ({ request }) => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    
    return HttpResponse.json({
      data: generateEvents(limit),
      total: 100
    });
  }),
  
  http.post('/api/weather-events', async ({ request }) => {
    const newEvent = await request.json();
    return HttpResponse.json({
      data: { ...newEvent, id: generateId() }
    }, { status: 201 });
  })
];
```

**4. Setup Browser Worker**
```typescript
// app/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

**5. Start MSW in Development**
```typescript
// app/entry.client.tsx
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') return;
  
  const { worker } = await import('./mocks/browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  // Start your app
});
```

#### 📝 Request Handler Patterns

**GET Requests with Query Parameters**
```typescript
http.get('/api/weather-events', ({ request }) => {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '10');
  const status = url.searchParams.get('status');
  
  let events = generateEvents(limit);
  
  if (status) {
    events = events.filter(event => event.status === status);
  }
  
  return HttpResponse.json({
    data: events,
    total: events.length,
    page: 1,
    limit
  });
});
```

**POST Requests with Body**
```typescript
http.post('/api/weather-events', async ({ request }) => {
  const newEvent = await request.json();
  
  // Validate request body
  if (!newEvent.eventType) {
    return HttpResponse.json(
      { error: 'eventType is required' },
      { status: 400 }
    );
  }
  
  const event = {
    ...newEvent,
    id: faker.string.uuid(),
    date: new Date().toISOString()
  };
  
  return HttpResponse.json({ data: event }, { status: 201 });
});
```

**Dynamic Route Parameters**
```typescript
http.get('/api/weather-events/:id', ({ params }) => {
  const event = generateWeatherEvent(params.id as string);
  
  if (!event) {
    return HttpResponse.json(
      { error: 'Event not found' },
      { status: 404 }
    );
  }
  
  return HttpResponse.json({ data: event });
});
```

**Error Simulation**
```typescript
http.get('/api/unreliable-endpoint', () => {
  // Simulate 30% failure rate
  if (Math.random() < 0.3) {
    return HttpResponse.json(
      { error: 'Service temporarily unavailable' },
      { status: 503 }
    );
  }
  
  return HttpResponse.json({ data: 'Success!' });
});
```

**Network Delay Simulation**
```typescript
http.get('/api/slow-endpoint', async () => {
  // Simulate 2-second delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return HttpResponse.json({ data: 'Finally loaded!' });
});
```

#### 🎲 Dynamic Mock Data with Faker

**Weather Event Generator**
```typescript
import { faker } from '@faker-js/faker';

const generateWeatherEvent = (id?: string) => ({
  id: id || faker.string.uuid(),
  eventType: faker.helpers.arrayElement([
    'Tornado', 'Hurricane', 'Flood', 'Earthquake', 'Wildfire', 'Blizzard'
  ]),
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
```

---

### Phase 2: React Integration (2 hours)

#### 🎯 Learning Objectives
- Integrate MSW with React Router loaders
- Handle async operations with MSW
- Implement loading and error states
- Use MSW with different data fetching patterns

#### ⚛️ React Router Loader Integration

**Basic Loader Pattern**
```typescript
// Route loader function
export async function loader(): Promise<LoaderData> {
  try {
    const response = await fetch('/api/weather-events?limit=10');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      events: data.data,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    throw new Response('Failed to load weather data', { status: 500 });
  }
}

// Component using loader data
export default function WeatherDashboard() {
  const { events, timestamp } = useLoaderData<typeof loader>();
  
  return (
    <div>
      <h1>Weather Events</h1>
      <p>Last updated: {new Date(timestamp).toLocaleTimeString()}</p>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
```

**Parallel Data Loading**
```typescript
export async function loader() {
  try {
    const [eventsResponse, stationsResponse, forecastResponse] = await Promise.all([
      fetch('/api/weather-events?limit=8'),
      fetch('/api/weather-stations?limit=4'),
      fetch('/api/weather-forecast/oklahoma-city')
    ]);

    // Check all responses
    if (!eventsResponse.ok || !stationsResponse.ok || !forecastResponse.ok) {
      throw new Error('One or more requests failed');
    }

    const [eventsData, stationsData, forecastData] = await Promise.all([
      eventsResponse.json(),
      stationsResponse.json(),
      forecastResponse.json()
    ]);

    return {
      events: eventsData.data,
      stations: stationsData.data,
      forecast: forecastData.forecast,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    throw new Response('Failed to load dashboard data', { status: 500 });
  }
}
```

#### 🔄 useEffect Pattern

**Basic Data Fetching**
```typescript
function WeatherComponent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/weather-events');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        
        const data = await response.json();
        setEvents(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
```

#### 🎣 useFetcher for Mutations

**Creating New Events**
```typescript
function CreateEventForm() {
  const fetcher = useFetcher();
  const [formData, setFormData] = useState({
    eventType: '',
    location: '',
    magnitude: '',
    status: 'Active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetcher.submit(formData, {
      method: 'POST',
      action: '/api/weather-events',
      encType: 'application/json'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Type"
        value={formData.eventType}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          eventType: e.target.value
        }))}
      />
      
      <button 
        type="submit" 
        disabled={fetcher.state === 'submitting'}
      >
        {fetcher.state === 'submitting' ? 'Creating...' : 'Create Event'}
      </button>
      
      {fetcher.data?.error && (
        <div className="error">{fetcher.data.error}</div>
      )}
    </form>
  );
}
```

#### 🔄 Data Revalidation

**Manual Refresh**
```typescript
function WeatherDashboard() {
  const data = useLoaderData();
  const revalidator = useRevalidator();

  const handleRefresh = () => {
    revalidator.revalidate();
  };

  return (
    <div>
      <button 
        onClick={handleRefresh}
        disabled={revalidator.state === 'loading'}
      >
        {revalidator.state === 'loading' ? 'Refreshing...' : 'Refresh Data'}
      </button>
      
      <div>Last updated: {data.timestamp}</div>
    </div>
  );
}
```

---

### Phase 3: Practical Exercise (2 hours)

#### 🎯 Learning Objectives
- Build a complete weather dashboard with MSW
- Implement CRUD operations
- Handle real-world scenarios (loading, errors, empty states)
- Practice with dynamic mock data

#### 🏗️ Exercise: Weather Dashboard

**Requirements**
1. **Data Loading**: Use React Router loader to fetch initial data
2. **CRUD Operations**: Create, read, update, and delete weather events
3. **Real-time Updates**: Refresh data and handle state changes
4. **Error Handling**: Graceful error states and user feedback
5. **Loading States**: Show loading indicators during operations

**Implementation Steps**

**Step 1: Create Route with Loader**
```typescript
// app/routes/training.weather-dashboard.tsx
export async function loader() {
  const [eventsResponse, stationsResponse] = await Promise.all([
    fetch('/api/weather-events?limit=8'),
    fetch('/api/weather-stations?limit=4')
  ]);

  return {
    events: (await eventsResponse.json()).data,
    stations: (await stationsResponse.json()).data,
    timestamp: new Date().toISOString()
  };
}
```

**Step 2: Display Data with Loading States**
```typescript
export default function WeatherDashboard() {
  const { events, stations, timestamp } = useLoaderData();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();

  return (
    <div>
      <header>
        <h1>Weather Dashboard</h1>
        <button 
          onClick={() => revalidator.revalidate()}
          disabled={revalidator.state === 'loading'}
        >
          {revalidator.state === 'loading' ? 'Refreshing...' : 'Refresh'}
        </button>
      </header>
      
      <main>
        <EventsGrid events={events} />
        <StationsPanel stations={stations} />
      </main>
    </div>
  );
}
```

**Step 3: Implement CRUD Operations**
```typescript
// Create new event
const handleCreateEvent = () => {
  fetcher.submit({
    eventType: 'Manual Alert',
    location: 'Training Location',
    magnitude: '3.5',
    status: 'Active'
  }, {
    method: 'POST',
    action: '/api/weather-events',
    encType: 'application/json'
  });
};

// Delete event
const handleDeleteEvent = (eventId) => {
  fetcher.submit({}, {
    method: 'DELETE',
    action: `/api/weather-events/${eventId}`
  });
};
```

**Step 4: Add Interactive Features**
```typescript
// Event detail modal
const [selectedEvent, setSelectedEvent] = useState(null);

// Filter by status
const [statusFilter, setStatusFilter] = useState('all');
const filteredEvents = events.filter(event => 
  statusFilter === 'all' || event.status === statusFilter
);
```

#### ✅ Exercise Checklist

**MSW Setup**
- [ ] Install MSW and dependencies
- [ ] Initialize service worker
- [ ] Create request handlers
- [ ] Start MSW in development

**Request Handlers**
- [ ] GET /api/weather-events with query parameters
- [ ] GET /api/weather-stations
- [ ] POST /api/weather-events for creating events
- [ ] DELETE /api/weather-events/:id for deletion
- [ ] Error simulation for testing

**React Integration**
- [ ] Loader function fetching from mock API
- [ ] Component displaying loaded data
- [ ] useFetcher for mutations
- [ ] useRevalidator for data refresh
- [ ] Loading and error states

**User Experience**
- [ ] Statistics dashboard
- [ ] Interactive event cards
- [ ] Create/delete functionality
- [ ] Real-time data updates
- [ ] Responsive design

---

## 🎯 Advanced Techniques

### Request Matching Patterns

**Conditional Responses**
```typescript
http.get('/api/weather-events', ({ request }) => {
  const url = new URL(request.url);
  const severity = url.searchParams.get('severity');
  
  if (severity === 'critical') {
    // Return only critical events
    return HttpResponse.json({
      data: generateCriticalEvents(),
      alert: 'Critical weather conditions detected'
    });
  }
  
  return HttpResponse.json({
    data: generateNormalEvents()
  });
});
```

**Request Body Validation**
```typescript
http.post('/api/weather-events', async ({ request }) => {
  const body = await request.json();
  
  // Validation
  const errors = [];
  if (!body.eventType) errors.push('eventType is required');
  if (!body.location) errors.push('location is required');
  if (body.magnitude < 1 || body.magnitude > 10) {
    errors.push('magnitude must be between 1 and 10');
  }
  
  if (errors.length > 0) {
    return HttpResponse.json(
      { errors },
      { status: 400 }
    );
  }
  
  return HttpResponse.json({
    data: { ...body, id: faker.string.uuid() }
  }, { status: 201 });
});
```

### Testing with MSW

**Setup for Tests**
```typescript
// tests/setup.ts
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../app/mocks/node';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

**Test-Specific Handlers**
```typescript
// tests/weather-dashboard.test.tsx
import { server } from '../app/mocks/node';
import { http, HttpResponse } from 'msw';

test('handles API error gracefully', async () => {
  // Override handler for this test
  server.use(
    http.get('/api/weather-events', () => {
      return HttpResponse.json(
        { error: 'Service unavailable' },
        { status: 503 }
      );
    })
  );
  
  // Test error handling
  render(<WeatherDashboard />);
  expect(await screen.findByText(/error/i)).toBeInTheDocument();
});
```

---

## 📚 Resources

### Documentation
- [MSW Documentation](https://mswjs.io/docs/)
- [MSW API Reference](https://mswjs.io/docs/api/)
- [Faker.js Documentation](https://fakerjs.dev/)

### Examples
- Check `/app/routes/training.msw-demo.tsx` for interactive examples
- See `/app/routes/training.weather-dashboard.tsx` for complete implementation
- Review `/app/mocks/handlers.ts` for handler patterns

### Best Practices
- Use realistic mock data that matches your API schema
- Implement proper error responses for testing edge cases
- Add network delays to simulate real-world conditions
- Keep handlers simple and focused on single responsibilities
- Use TypeScript for better type safety

---

## 🎉 Completion Goals

By the end of this study session, you should be able to:

1. **Set Up MSW**
   - Install and configure MSW for browser and Node.js
   - Create and organize request handlers
   - Generate dynamic mock data with Faker

2. **Integrate with React**
   - Use MSW with React Router loaders
   - Handle async operations and state management
   - Implement CRUD operations with proper error handling

3. **Build Production-Ready Features**
   - Create realistic mock APIs for development
   - Test error scenarios and edge cases
   - Implement loading states and user feedback

4. **Best Practices**
   - Structure mock data generators
   - Handle request validation and errors
   - Write maintainable and testable code

**Ready to mock like a pro! 🚧**