import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();

    const confirmPassword = e.target["confirm-password"].value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
      navigate("/signInPage");
    } catch (error) {
      console.error("Error signing up:", error.code, error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
      <form
        onSubmit={signUpHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create an Account ✨
        </h2>
        <p className="text-sm text-center text-gray-500">
          Join us today! Fill in your details to get started
        </p>

        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="••••••••"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="••••••••"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            required
          />
          <label htmlFor="terms">
            I agree to the{" "}
            <a href="#" className="text-green-600 hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition"
        >
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="#" className="font-medium text-green-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
