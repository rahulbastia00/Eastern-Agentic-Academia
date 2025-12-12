// src/components/InputField.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-md border border-gray-300 p-2.5 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all"
      />
    </div>
  );
}