import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    // Hardcoded credentials
    const VALID_CREDENTIALS = {
        email: "user@example.com",
        password: "password123"
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        // Debug logs
        console.log('Entered email:', email);
        console.log('Entered password:', password);
        console.log('Expected email:', VALID_CREDENTIALS.email);
        console.log('Expected password:', VALID_CREDENTIALS.password);

        if (!isSignUp) {
            // Login logic with exact string comparison
            if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
                console.log('Login successful!');
                localStorage.setItem('isLoggedIn', 'true');
                navigate("/dashboard");
            } else {
                console.log('Login failed - credentials do not match');
                setError("Invalid credentials! Please use:");
            }
        } else {
            // Signup logic
            setError("Account created! Please login.");
            setIsSignUp(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {isSignUp ? "Create an account" : "Sign in to your account"}
                    </h2>
                    {error && (
                        <div className="mt-4 text-center text-sm text-red-600">
                            {error}
                            <div className="mt-2 p-2 bg-gray-100 rounded">
                                Email: {VALID_CREDENTIALS.email}<br />
                                Password: {VALID_CREDENTIALS.password}
                            </div>
                        </div>
                    )}
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        {isSignUp 
                            ? "Already have an account? Sign in" 
                            : "Don't have an account? Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
}
