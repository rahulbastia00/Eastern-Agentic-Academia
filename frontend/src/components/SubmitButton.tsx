// src/components/SubmitButton.tsx
import React from "react";

interface SubmitButtonProps {
  text: string;
  loading?: boolean;
}

export default function SubmitButton({ text, loading = false }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`mt-4 w-full rounded-md bg-teal-700 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-teal-800 
      ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {loading ? "Processing..." : text}
    </button>
  );
}