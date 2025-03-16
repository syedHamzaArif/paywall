"use client";

import { useEffect, useState } from "react";

export default function AlertBox({ message, type = "success", duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!isVisible) return null;

  const alertStyles = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
  };

  return (
    <div
      className={`fixed top-4 right-4 border-l-4 p-4 ${alertStyles[type]} rounded-lg shadow-md`}
    >
      <p>{message}</p>
    </div>
  );
}