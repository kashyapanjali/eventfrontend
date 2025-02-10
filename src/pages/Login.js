/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // ✅ Import Auth Styles

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		localStorage.setItem("isAuthenticated", "true");
		localStorage.setItem("userRole", "user"); // ✅ Save user role
		navigate("/create-event"); // Redirect to event creation
	};

	return (
		<div className="auth-container">
			<h2>Login</h2>
			<form onSubmit={handleLogin} className="auth-form">
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
				<button type="submit">Login</button>
			</form>
			<div className="auth-actions">
				<button onClick={() => navigate("/register")}>Register</button>
				<button className="guest-login" onClick={() => navigate("/guestlogin")}>
					Guest Login
				</button>
			</div>
		</div>
	);
};

export default Login;
