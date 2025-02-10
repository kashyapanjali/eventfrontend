/** @format */
import React, { useEffect, useState } from "react";
import "./AttendeeList.css";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // ✅ Replace with backend URL if deployed

const AttendeeList = ({ eventId }) => {
	const [attendees, setAttendees] = useState(0);

	useEffect(() => {
		socket.on("attendeeUpdate", (data) => {
			if (data.eventId === eventId) {
				setAttendees(data.attendees);
			}
		});

		return () => socket.off("attendeeUpdate");
	}, [eventId]);

	return (
		<div className="attendee-list">
			<h3>Attendees: {attendees}</h3>
		</div>
	);
};

export default AttendeeList;
