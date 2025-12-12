"use client";

import { useState } from "react";
import Link from "next/link";
// We import our reusable components here
import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
        
        {/* LEFT SIDE: Form */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Sign Up</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Using the Reusable Input Component */}
            <InputField
              label="Username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />

            {/* Using the Reusable Button Component */}
            <SubmitButton text="Sign Up" />
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-teal-700 hover:underline">
              Log In
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="relative hidden w-1/2 md:block">
          <img
            src="/signup-bg.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}