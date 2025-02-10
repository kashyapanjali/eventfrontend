/** @format */

// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import EventList from "../components/EventList";
import "./Dashboard.css";

const Dashboard = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Fetch events from the backend
		const mockEvents = [
			{ id: 1, name: "Event 1", date: "2023-10-15", attendees: 10 },
			{ id: 2, name: "Event 2", date: "2023-11-20", attendees: 5 },
		];
		setEvents(mockEvents);
	}, []);

	return (
		<div className="dashboard-container">
			<h1>Event Dashboard</h1>
			<EventList events={events} />
		</div>
	);
};

export default Dashboard;
