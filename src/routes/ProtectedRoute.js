/** @format */

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
	const isAuthenticated = localStorage.getItem("isAuthenticated");
	const userRole = localStorage.getItem("userRole");

	// Redirect if not authenticated
	if (!isAuthenticated) {
		return <Navigate to="/register" />;
	}

	// Redirect based on role
	if (userRole !== requiredRole) {
		return (
			<Navigate to={userRole === "guest" ? "/dashboard" : "/create-event"} />
		);
	}

	return children;
};

export default ProtectedRoute;
