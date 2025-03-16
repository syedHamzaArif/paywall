"use client";
import { useState, useEffect } from "react";
import AuthWrapper from "@/components/AuthWrapper";
import { getSubscriptionPlans } from "@/utils/subscriptionService";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useParams } from 'next/navigation'

export default function ProtectedPage({ params }) {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlan = async () => {
      const subscriptionPlans = getSubscriptionPlans();
      const foundPlan = subscriptionPlans.find(
        (plan) => plan.id === parseInt(id)
      );

      setTimeout(() => {
        setPlan(foundPlan || null);
        setIsLoading(false);
      }, 1000);
    };

    fetchPlan();
  }, [id]);

  if (isLoading) {
    return (
      <AuthWrapper>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center">
          <LoadingSpinner />
          <p className="mt-4 text-gray-600">Loading plan details...</p>
        </div>
      </AuthWrapper>
    );
  }

  if (!plan) {
    return (
      <AuthWrapper>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Plan Not Found</h1>
          <p className="text-lg text-gray-600 mt-4">
            The requested subscription plan does not exist.
          </p>
        </div>
      </AuthWrapper>
    );
  }

  return (
    <AuthWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{plan.name}</h1>
          <p className="text-xl text-gray-600 mb-8">{plan.description}</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
            <ul className="space-y-3 text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <p className="text-3xl font-bold text-blue-600">
              ${plan.price}
              <span className="text-lg text-gray-500">/month</span>
            </p>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
