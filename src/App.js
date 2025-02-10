/** @format */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GuestLogin from "./pages/GuestLogin";
import ProtectedRoute from "./routes/ProtectedRoute";
import ViewDetails from "./components/ViewDetails";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				{/* Public Routes */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/guestlogin" element={<GuestLogin />} />

				{/* 🔹 Private Routes for Dashboard & Create Event */}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute requiredRole="guest">
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/create-event"
					element={
						<ProtectedRoute requiredRole="user">
							<CreateEvent />
						</ProtectedRoute>
					}
				/>

				{/* Event Details Route (Accessible to All) */}
				<Route path="/event/:id" element={<ViewDetails />} />
			</Routes>
		</Router>
	);
}

export default App;
