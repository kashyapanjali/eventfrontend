/** @format */
// src/pages/EventDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AttendeeList from "../components/AttendeeList";
import "../App.css";

const EventDetail = () => {
	const { id } = useParams();
	const [event, setEvent] = useState(null);

	useEffect(() => {
		// Fetch event details from the backend using the event ID
		const mockEvent = {
			id: 1,
			name: "Event 1",
			description: "This is a sample event.",
			date: "2023-10-15",
			attendees: 10,
		};
		setEvent(mockEvent);
	}, [id]);

	if (!event) return <div>Loading...</div>;

	return (
		<div className="event-detail">
			<h1>{event.name}</h1>
			<p>{event.description}</p>
			<p>Date: {event.date}</p>
			<AttendeeList eventId={event.id} />
		</div>
	);
};

export default EventDetail;
