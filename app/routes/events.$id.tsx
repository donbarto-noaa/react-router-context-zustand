import { useParams } from "react-router";

import MOCK_WEATHER_EVENTS from "../MOCK_WEATHER_EVENTS.json";

const WEATHER_EVENT_DATA = MOCK_WEATHER_EVENTS;

export default function EventDetail() {
    const { eventId } = useParams();
    const event = WEATHER_EVENT_DATA.find(e => e.id === eventId);

    if (!event) {
        return <div>Event not found.</div>;
    }

    return (
        <div className="event-detail mx-2 mt-3 border border-gray-300 rounded p-3">
            <h1>Event Details</h1>
            <h2>Event Type: {event.eventType}</h2>
            <p>Magnitude: {event.eventMagnitude}</p>
            <p>Location: {event.location}, {event.county}, {event.state}</p>
            <p>Date: {event.date}</p>
            <p>Status: {event.status}</p>
        </div>
    );
}
