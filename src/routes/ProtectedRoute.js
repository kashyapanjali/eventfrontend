/** @format */
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	// Check if the user is authenticated
	const isAuthenticated = localStorage.getItem("isAuthenticated");

	return isAuthenticated ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
