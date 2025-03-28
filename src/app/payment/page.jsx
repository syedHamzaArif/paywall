"use client";
import PlanGrid from "@/components/PlanGrid";
import usePayment from "@/hooks/usePayment";
import { getSubscriptionPlans } from "@/utils/subscriptionService";
import { useAuth } from "@/hooks/useAuth";
import AlertBox from "@/components/AlertBox";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function PaymentPage() {
  const { handlePayment, alert } = usePayment();
  const subscriptionPlans = getSubscriptionPlans();
  const { subscriptionIds, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Loading plan details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose a Plan</h1>
      <PlanGrid
        plans={subscriptionPlans}
        subscriptionIds={subscriptionIds}
        onSubscribe={handlePayment}
      />
      {alert.message && (
        <AlertBox message={alert.message} type={alert.type} duration={5000} />
      )}
    </div>
  );
}
