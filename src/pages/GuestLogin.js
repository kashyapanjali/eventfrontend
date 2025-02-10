/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // ✅ Import Auth Styles

const GuestLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleGuestLogin = (e) => {
		e.preventDefault();
		localStorage.setItem("isAuthenticated", "true");
		localStorage.setItem("userRole", "guest"); // ✅ Save guest role
		navigate("/dashboard"); // Redirect to dashboard
	};

	return (
		<div className="auth-container">
			<h2>Guest Login</h2>
			<form onSubmit={handleGuestLogin} className="auth-form">
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
				<button type="submit">Guest Login</button>
			</form>
		</div>
	);
};

export default GuestLogin;
