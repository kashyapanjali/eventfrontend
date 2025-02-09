/** @format */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for events
const mockEvents = [
	{
		id: 1,
		name: "Tech Conference 2023",
		date: "2023-09-15",
		category: "Technology",
		attendees: 150,
	},
	{
		id: 2,
		name: "Music Festival",
		date: "2023-08-20",
		category: "Music",
		attendees: 500,
	},
	{
		id: 3,
		name: "Food & Wine Expo",
		date: "2023-10-05",
		category: "Food",
		attendees: 300,
	},
	{
		id: 4,
		name: "Art Exhibition",
		date: "2023-11-12",
		category: "Art",
		attendees: 200,
	},
];

export default function Events() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedDate, setSelectedDate] = useState("");

	const filteredEvents = mockEvents.filter((event) => {
		return (
			event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategory === "" || event.category === selectedCategory) &&
			(selectedDate === "" || event.date >= selectedDate)
		);
	});

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Event Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
				<div>
					<Label htmlFor="search">Search Events</Label>
					<Input
						id="search"
						type="text"
						placeholder="Search events..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div>
					<Label htmlFor="category">Category</Label>
					<Select value={selectedCategory} onValueChange={setSelectedCategory}>
						<SelectTrigger id="category">
							<SelectValue placeholder="Select category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Categories</SelectItem>
							<SelectItem value="Technology">Technology</SelectItem>
							<SelectItem value="Music">Music</SelectItem>
							<SelectItem value="Food">Food</SelectItem>
							<SelectItem value="Art">Art</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Label htmlFor="date">Date</Label>
					<Input
						id="date"
						type="date"
						value={selectedDate}
						onChange={(e) => setSelectedDate(e.target.value)}
					/>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{filteredEvents.map((event) => (
					<Card key={event.id}>
						<CardHeader>
							<CardTitle>{event.name}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Date: {event.date}</p>
							<p>Category: {event.category}</p>
							<div className="flex justify-between items-center mt-2">
								<Badge variant="secondary">Attendees: {event.attendees}</Badge>
								<Button size="sm">View Details</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
