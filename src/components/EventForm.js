/** @format */
import React, { useState } from "react";
import "./EventForm.css";

const EventForm = ({ setEvents }) => {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		date: "",
		category: "",
		location: "",
		attendees: 0, // Start with 0 attendees
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// Create a new event object
		const newEvent = { ...formData, id: Date.now() };

		// Update event list in Dashboard.js
		setEvents((prevEvents) => [...prevEvents, newEvent]);

		// Reset form
		setFormData({
			name: "",
			description: "",
			date: "",
			category: "",
			location: "",
			attendees: 0,
		});
		setLoading(false);
	};

	return (
		<div className="event-form-container">
			<h2>Create an Event</h2>
			<form onSubmit={handleSubmit} className="event-form">
				<div className="form-group">
					<label>Event Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						required></textarea>
				</div>
				<div className="form-group">
					<label>Date & Time</label>
					<input
						type="datetime-local"
						name="date"
						value={formData.date}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label>Category</label>
					<select
						name="category"
						value={formData.category}
						onChange={handleChange}
						required>
						<option value="">Select Category</option>
						<option value="Technology">Technology</option>
						<option value="Business">Business</option>
						<option value="Music">Music</option>
						<option value="Health">Health</option>
					</select>
				</div>
				<div className="form-group">
					<label>Location</label>
					<input
						type="text"
						name="location"
						value={formData.location}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit" className="submit-button" disabled={loading}>
					{loading ? "Creating..." : "Create Event"}
				</button>
			</form>
		</div>
	);
};

export default EventForm;
