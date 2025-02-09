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
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";

// Mock data for events
const mockEvents = [
	{
		id: 1,
		name: "Tech Conference 2023",
		date: "2023-09-15",
		category: "Technology",
		attendees: 150,
		location: "San Francisco, CA",
		status: "upcoming",
	},
	{
		id: 2,
		name: "Music Festival",
		date: "2023-08-20",
		category: "Music",
		attendees: 500,
		location: "Austin, TX",
		status: "upcoming",
	},
	{
		id: 3,
		name: "Food & Wine Expo",
		date: "2023-10-05",
		category: "Food",
		attendees: 300,
		location: "New York, NY",
		status: "upcoming",
	},
	{
		id: 4,
		name: "Art Exhibition",
		date: "2023-11-12",
		category: "Art",
		attendees: 200,
		location: "Chicago, IL",
		status: "upcoming",
	},
	{
		id: 5,
		name: "Summer Concert Series",
		date: "2023-07-01",
		category: "Music",
		attendees: 1000,
		location: "Los Angeles, CA",
		status: "past",
	},
	{
		id: 6,
		name: "Startup Pitch Competition",
		date: "2023-06-15",
		category: "Technology",
		attendees: 250,
		location: "Boston, MA",
		status: "past",
	},
];

export default function AllEvents() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("");

	const filteredEvents = mockEvents.filter((event) => {
		return (
			event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategory === "" || event.category === selectedCategory) &&
			(selectedDate === "" || event.date >= selectedDate) &&
			(selectedStatus === "" || event.status === selectedStatus)
		);
	});

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">All Events</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
				<div>
					<Label htmlFor="status">Status</Label>
					<Select value={selectedStatus} onValueChange={setSelectedStatus}>
						<SelectTrigger id="status">
							<SelectValue placeholder="Select status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Events</SelectItem>
							<SelectItem value="upcoming">Upcoming</SelectItem>
							<SelectItem value="past">Past</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredEvents.map((event) => (
					<Card key={event.id} className="flex flex-col">
						<CardHeader>
							<CardTitle className="text-xl">{event.name}</CardTitle>
						</CardHeader>
						<CardContent className="flex-grow">
							<div className="space-y-2">
								<div className="flex items-center">
									<CalendarIcon className="mr-2 h-4 w-4" />
									<span>{event.date}</span>
								</div>
								<div className="flex items-center">
									<MapPinIcon className="mr-2 h-4 w-4" />
									<span>{event.location}</span>
								</div>
								<div className="flex items-center">
									<UsersIcon className="mr-2 h-4 w-4" />
									<span>{event.attendees} attendees</span>
								</div>
							</div>
							<div className="mt-4 flex justify-between items-center">
								<Badge
									variant={
										event.status === "upcoming" ? "default" : "secondary"
									}>
									{event.status === "upcoming" ? "Upcoming" : "Past"}
								</Badge>
								<Badge variant="outline">{event.category}</Badge>
							</div>
						</CardContent>
						<CardContent className="pt-0">
							<Button className="w-full">View Details</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
