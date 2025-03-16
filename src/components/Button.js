"use client";

export default function Button({ children, onClick, className, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full ${loading ? 'bg-grey-300' : 'bg-blue-500'} text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
