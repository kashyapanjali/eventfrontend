/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import Axios for API requests
import "./Auth.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const response = await axios.post(
				"http://localhost:5000/api/users/login",
				{
					email,
					password,
				}
			);

			const { token, userRole } = response.data;

			// ✅ Store Authentication Data
			localStorage.setItem("isAuthenticated", "true");
			localStorage.setItem("token", token);
			localStorage.setItem("userRole", userRole);
			localStorage.setItem(
				"hasCreatedEvent",
				userRole === "guest" ? "true" : "false"
			);

			// ✅ Redirect Based on Role
			if (userRole === "guest") {
				navigate("/dashboard");
			} else {
				navigate("/create-event");
			}
		} catch (err) {
			setError(
				err.response?.data?.message || "Login failed. Please try again."
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="auth-container">
			<h2>Login</h2>
			{error && <p className="error-message">{error}</p>}
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
				<button type="submit" disabled={loading}>
					{loading ? "Logging in..." : "Login"}
				</button>
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
