/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // ✅ Import Auth CSS

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const response = await fetch("http://localhost:5000/api/users/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Registration failed");
			}

			// Save token & user info
			localStorage.setItem("token", data.token);
			localStorage.setItem("isAuthenticated", "true");
			localStorage.setItem("userRole", "user"); // ✅ Save user role

			alert("Registration successful!");
			navigate("/create-event"); // Redirect to event creation page
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="auth-container">
			<h2>Register</h2>
			{error && <p className="error-message">{error}</p>}
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
				<button type="submit" disabled={loading}>
					{loading ? "Registering..." : "Register"}
				</button>
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
