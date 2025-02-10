/** @format */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewDetails.css";

const ViewDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [event, setEvent] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [updatedDate, setUpdatedDate] = useState("");

	useEffect(() => {
		// Mock event data (Replace with API call)
		const mockEvents = [
			{
				id: 1,
				name: "Tech Conference",
				date: "2025-05-10",
				attendees: ["Alice", "Bob", "Charlie", "David"],
				description: "A tech conference on AI & ML.",
			},
			{
				id: 2,
				name: "Startup Meetup",
				date: "2024-12-20",
				attendees: ["Eve", "Frank", "Grace"],
				description: "Networking event for startups & investors.",
			},
		];

		// Find event by ID
		const selectedEvent = mockEvents.find((event) => event.id === parseInt(id));
		setEvent(selectedEvent);
		setUpdatedDate(selectedEvent?.date || "");
	}, [id]);

	// Handle event deletion
	const handleDelete = () => {
		// Show confirmation
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this event?"
		);
		if (confirmDelete) {
			// Remove event (For real projects, call an API)
			alert("Event deleted successfully.");
			navigate("/dashboard"); // Redirect to dashboard
		}
	};

	// Handle event date update
	const handleUpdate = () => {
		if (updatedDate.trim() === "") {
			alert("Please select a valid date.");
			return;
		}
		setEvent((prevEvent) => ({ ...prevEvent, date: updatedDate }));
		alert("Event date updated successfully.");
	};

	// Filter attendees based on search
	const filteredAttendees = event?.attendees.filter((attendee) =>
		attendee.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (!event) {
		return <p>Event not found.</p>;
	}

	return (
		<div className="event-details-container">
			<h1>{event.name}</h1>
			<p>📅 Date: {event.date}</p>
			<p>📌 Description: {event.description}</p>

			{/* Update Event Date */}
			<div className="update-section">
				<label>Update Date:</label>
				<input
					type="date"
					value={updatedDate}
					onChange={(e) => setUpdatedDate(e.target.value)}
				/>
				<button onClick={handleUpdate}>Update</button>
			</div>

			{/* Attendee List with Search */}
			<div className="attendee-section">
				<h3>👥 Attendees ({event.attendees.length})</h3>
				<input
					type="text"
					placeholder="Search attendee..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<ul>
					{filteredAttendees.length > 0 ? (
						filteredAttendees.map((attendee, index) => (
							<li key={index}>{attendee}</li>
						))
					) : (
						<p>No attendees found.</p>
					)}
				</ul>
			</div>

			{/* Delete Event */}
			<button className="delete-button" onClick={handleDelete}>
				Delete Event
			</button>
		</div>
	);
};

export default ViewDetails;
