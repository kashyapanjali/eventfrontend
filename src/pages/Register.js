/** @format */

// src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // ✅ Import Auth CSS

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		// Add registration logic here
		navigate("/create-event");
	};

	return (
		<div className="auth-container">
			<h2>Register</h2>
			<form onSubmit={handleRegister} className="auth-form">
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Register</button>
			</form>
			<div className="auth-actions">
				<button onClick={() => navigate("/login")}>
					Already have an account? Login
				</button>
			</div>
		</div>
	);
};

export default Register;
