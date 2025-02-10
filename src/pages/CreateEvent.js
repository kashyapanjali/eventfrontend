/** @format */
import React from "react";
import EventForm from "../components/EventForm";

const CreateEvent = () => {
	const handleEventSubmit = (data) => {
		console.log("Event Created:", data);
	};

	return <EventForm onSubmit={handleEventSubmit} />;
};

export default CreateEvent;
