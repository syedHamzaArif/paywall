"use client";

import FeatureCard from "@/components/FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      icon: "📚",
      title: "Exclusive Content",
      description:
        "Access premium articles, videos, and resources curated by experts.",
    },
    {
      icon: "💡",
      title: "Expert Insights",
      description:
        "Learn from industry leaders and stay ahead of the curve.",
    },
    {
      icon: "🚀",
      title: "Easy Access",
      description:
        "Subscribe with just a few clicks and start exploring immediately.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}