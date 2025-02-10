/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // ✅ Separate CSS for login & register

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		// TODO: Implement authentication logic here
		navigate("/create-event");
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
				<button className="guest-login" onClick={() => navigate("/dashboard")}>
					Guest Login
				</button>
			</div>
		</div>
	);
};

export default Login;
