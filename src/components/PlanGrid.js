"use client";

import PlanCard from "@/components/PlanCard";

export default function PlanGrid({ plans, onSubscribe, subscriptionIds }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} subscriptionIds={subscriptionIds} onSubscribe={onSubscribe} />
      ))}
    </div>
  );
}