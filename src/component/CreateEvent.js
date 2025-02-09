/** @format */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export default function CreateEvent() {
	const [eventName, setEventName] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [category, setCategory] = useState("");
	const [location, setLocation] = useState("");
	const router = useRouter();
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement actual event creation logic
		console.log("Event creation attempt with:", {
			eventName,
			description,
			date,
			time,
			category,
			location,
		});
		toast({
			title: "Event Created",
			description: "Your event has been successfully created!",
		});
		router.push("/events");
	};

	return (
		<div className="max-w-2xl mx-auto mt-8">
			<h1 className="text-2xl font-bold mb-4">Create Event</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<Label htmlFor="eventName">Event Name</Label>
					<Input
						id="eventName"
						value={eventName}
						onChange={(e) => setEventName(e.target.value)}
						required
					/>
				</div>
				<div>
					<Label htmlFor="description">Description</Label>
					<Textarea
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<Label htmlFor="date">Date</Label>
						<Input
							id="date"
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
						/>
					</div>
					<div>
						<Label htmlFor="time">Time</Label>
						<Input
							id="time"
							type="time"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							required
						/>
					</div>
				</div>
				<div>
					<Label htmlFor="category">Category</Label>
					<Select value={category} onValueChange={setCategory} required>
						<SelectTrigger id="category">
							<SelectValue placeholder="Select category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Technology">Technology</SelectItem>
							<SelectItem value="Music">Music</SelectItem>
							<SelectItem value="Food">Food</SelectItem>
							<SelectItem value="Art">Art</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Label htmlFor="location">Location</Label>
					<Input
						id="location"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						required
					/>
				</div>
				<Button type="submit" className="w-full">
					Create Event
				</Button>
			</form>
		</div>
	);
}
