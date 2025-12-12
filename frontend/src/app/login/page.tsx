"use client";

import { useState } from "react";
import Link from "next/link";
// Reuse the components you already built!
import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
        
        {/* LEFT SIDE: Form */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mb-6 text-sm text-gray-600">
            Please enter your details to sign in.
          </p>
          
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            {/* Forgot Password Link (Optional but good to have) */}
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-teal-700 hover:underline">
                Forgot password?
              </a>
            </div>

            <SubmitButton text="Log In" />
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold text-teal-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="relative hidden w-1/2 md:block">
          <img
            // You can use the same image or a different one for Login
            src="/login-bg.png" 
            alt="Login Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}