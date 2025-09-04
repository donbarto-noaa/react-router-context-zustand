import { useNavigate } from "react-router";
import MOCK_WEATHER_EVENTS from "../MOCK_WEATHER_EVENTS.json";

const WEATHER_EVENT_DATA = MOCK_WEATHER_EVENTS;
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
