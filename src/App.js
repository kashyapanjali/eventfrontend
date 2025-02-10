/** @format */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute"; // ✅ Import ProtectedRoute
import GuestLogin from "./pages/GuestLogin";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				{/* Public Routes */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/guestlogin" element={<GuestLogin />} />
				{/* 🔹 Protected Routes */}
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
			</Routes>
		</Router>
	);
}

export default App;
