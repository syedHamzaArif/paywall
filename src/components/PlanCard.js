"use client";
import { useRouter } from 'next/navigation';

export default function PlanCard({ plan, onSubscribe, subscriptionIds }) {
  const router = useRouter();
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h2>
      <p className="text-4xl font-bold text-blue-600 mb-6">
        ${plan.price}
        <span className="text-lg text-gray-500">/month</span>
      </p>
      <ul className="text-gray-600 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
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
      
      {!subscriptionIds?.includes(plan.id) ? (
        <button
          onClick={() =>
            onSubscribe(plan.price, `Subscription: ${plan.name}`, plan.id)
          }
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      ) : (
        <button
          onClick={() => router.push(`/protected/${plan.id}`)}
          className="w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Subscribed
        </button>
      )}
    </div>
  );
}
