import { useParams } from "react-router";
// If WEATHER_EVENT_DATA is not available here, you may need to import it from events.tsx or move it to a shared file.
import { WEATHER_EVENT_DATA } from "./events.events"; // Corrected to keep the named import


export default function EventDetail() {
    const { id } = useParams();
        const event = WEATHER_EVENT_DATA.find(e => e.id === String(id));

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
