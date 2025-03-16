export const getSubscriptionPlans = () => {
  return [
    {
      id: 1,
      name: "Basic Plan",
      price: 9.99,
      features: ["Access to basic content", "Limited support", "1 user"],
      description: "Perfect for individuals",
    },
    {
      id: 2,
      name: "Pro Plan",
      price: 29.99,
      features: [
        "Access to premium content",
        "Priority support",
        "Up to 5 users",
      ],
      description: "Great for small teams",
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: 99.99,
      features: [
        "Access to all content",
        "24/7 dedicated support",
        "Unlimited users",
      ],
      description: "Ideal for large organizations",
    },
  ];
};
