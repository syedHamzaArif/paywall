"use client";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Unlock Premium Content with Ease
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Subscribe to access exclusive articles, videos, and resources.
      </p>
      <a
        href="/signup"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
      >
        Get Started
      </a>
    </div>
  );
}