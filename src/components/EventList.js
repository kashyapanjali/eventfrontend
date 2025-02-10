/** @format */
import React from "react";
import { Link } from "react-router-dom";
import "./EventList.css";

const EventList = ({ events }) => {
	// Get today's date
	const today = new Date().toISOString().split("T")[0];

	return (
		<div className="event-list">
			{events.map((event) => {
				const isUpcoming = event.date >= today;

				return (
					<div
						key={event.id}
						className={`event-card ${isUpcoming ? "upcoming" : "past"}`}>
						<h3>{event.name}</h3>
						<p>📅 Date: {event.date}</p>
						<p>👥 Attendees: {event.attendees}</p>
						<p
							className={`event-status ${
								isUpcoming ? "upcoming-label" : "past-label"
							}`}>
							{isUpcoming ? "Upcoming" : "Past"}
						</p>
						<Link to={`/event/${event.id}`} className="view-details">
							View Details
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default EventList;
