/** @format */
import React, { useEffect, useState } from "react";
import EventList from "../components/EventList";
import "./Dashboard.css";

const Dashboard = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Mock events (Replace with API fetch if needed)
		const mockEvents = [
			{ id: 1, name: "Tech Conference", date: "2025-05-10", attendees: 50 },
			{ id: 2, name: "Startup Meetup", date: "2024-12-20", attendees: 25 },
			{ id: 3, name: "Music Fest", date: "2024-10-01", attendees: 100 },
			{ id: 4, name: "Business Expo", date: "2023-11-20", attendees: 30 },
		];

		// Sort events by date (latest first)
		const sortedEvents = mockEvents.sort(
			(a, b) => new Date(b.date) - new Date(a.date)
		);

		setEvents(sortedEvents);
	}, []);

	return (
		<div className="dashboard-container">
			<h1>Event Dashboard</h1>
			<EventList events={events} />
		</div>
	);
};

export default Dashboard;
