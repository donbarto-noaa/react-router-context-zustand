import { useNavigate } from "react-router";

export const WEATHER_EVENT_DATA = [
  {
    "id": "1",
    "eventType": "Tornado",
    "eventMagnitude": 3.0,
    "state": "Oklahoma",
    "county": "Cleveland County",
    "location": "Moore",
    "date": "2024-05-20",
    "status": "Pub"
  },
  {
    "id": "2",
    "eventType": "Wildfire",
    "eventMagnitude": 8.5,
    "state": "California",
    "county": "Los Angeles County",
    "location": "Malibu",
    "date": "2024-08-15",
    "status": "PNS"
  },
  {
    "id": "3",
    "eventType": "Earthquake",
    "eventMagnitude": 6.5,
    "state": "Alaska",
    "county": "Anchorage",
    "location": "Anchorage",
    "date": "2024-03-10",
    "status": "SUM"
  },
  {
    "id": "4",
    "eventType": "Hurricane",
    "eventMagnitude": 4.0,
    "state": "Florida",
    "county": "Miami-Dade County",
    "location": "Miami",
    "date": "2024-09-28",
    "status": "NEW"
  },
  {
    "id": "5",
    "eventType": "Flood",
    "eventMagnitude": 9.2,
    "state": "Louisiana",
    "county": "Orleans Parish",
    "location": "New Orleans",
    "date": "2024-07-04",
    "status": "LSR"
  }
]

type EventProps = {
    id: string;
  eventType: string;
  eventMagnitude: number;
  state: string;
  county: string;
  location: string;
  date: string;
  status: string;
};

function Event({
    id,
  eventType,
  eventMagnitude,
  state,
  county,
  location,
  date,
  status,
}: EventProps) {
    const navigate = useNavigate();
  return (
    <div className="event mx-2 mt-3 border border-gray-300 rounded p-3">
      <h2>Event Type: {eventType}</h2>
      <p>Magnitude: {eventMagnitude}</p>
      <p>Location: {location}, {county}, {state}</p>
      <p>Date: {date}</p>
      <p>Status: {status}</p>
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => navigate(`/events/${id}`)}>
        View Details
      </button>
    </div>
  );
}

export default function Events() {
  const events = WEATHER_EVENT_DATA.map(({ eventType, eventMagnitude, state, county, location, date, status, id }) => (
    <Event
      key={id}
      id={id}
      eventType={eventType}
      eventMagnitude={eventMagnitude}
      state={state}
      county={county}
      location={location}
      date={date}
      status={status}
    />
  ));
  return (
    <div>
      <h1>Events</h1>
      <div>{events}</div>
    </div>
  );
}