/** @format */
import React from "react";
import { Link } from "react-router-dom";
import "./EventList.css"; // ✅ Separate CSS for clean UI

const EventList = ({ events }) => {
	return (
		<div className="event-list">
			{events.map((event) => (
				<div key={event.id} className="event-card">
					<h3>{event.name}</h3>
					<p>Date: {event.date}</p>
					<p>Attendees: {event.attendees}</p>
					<Link to={`/event/${event.id}`} className="view-details">
						View Details
					</Link>
				</div>
			))}
		</div>
	);
};

export default EventList;
