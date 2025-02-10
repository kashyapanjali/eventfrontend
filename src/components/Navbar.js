/** @format */
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ✅ Separate CSS for better maintainability

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/dashboard" className="navbar-brand">
				EventHub
			</Link>
			<div className="navbar-links">
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
		</nav>
	);
};

export default Navbar;
