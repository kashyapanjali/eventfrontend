/** @format */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement actual login logic
		console.log("Login attempt with:", { email, password });
		toast({
			title: "Login Successful",
			description: "Welcome back!",
		});
		router.push("/events");
	};

	const handleGuestLogin = () => {
		// TODO: Implement guest login logic
		toast({
			title: "Guest Login",
			description: "You're now browsing as a guest",
		});
		router.push("/events");
	};

	return (
		<div className="max-w-md mx-auto mt-8">
			<h1 className="text-2xl font-bold mb-4">Login</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<Button type="submit" className="w-full">
					Login
				</Button>
			</form>
			<div className="mt-4">
				<Button variant="outline" className="w-full" onClick={handleGuestLogin}>
					Guest Login
				</Button>
			</div>
		</div>
	);
}
